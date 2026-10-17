/* 书中人 · Book Atlas — 界面逻辑 */
(function (global) {
  'use strict';

  var $ = function (id) { return document.getElementById(id); };
  var doc = document;

  var selectedId = null;
  var recent = [];
  var focusAfterRender = null;
  var detailTimer = null;

  function esc(s) {
    return String(s === null || s === undefined ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function val(id) { var e = $(id); return e ? e.value : ''; }
  function numOrNull(v) { return v === '' || v === null || v === undefined ? null : (isFinite(Number(v)) ? Number(v) : null); }
  function fmtPage(p) { return p === null || p === undefined ? '—' : 'P' + p; }
  function pageRange(a, b) {
    var f = a === null || a === undefined ? null : a;
    var t = b === null || b === undefined ? null : b;
    if (f === null && t === null) return '全书';
    if (f === null) return '至 P' + t;
    if (t === null) return 'P' + f + ' 起';
    return 'P' + f + '–P' + t;
  }

  /* ============================================================ boot */
  function boot() {
    Store.init();
    Graph.init($('graph'));
    Graph.onSelect = function (id) {
      selectedId = id;
      renderDetail();
      renderCharList();
      Graph.setSelected(id);
    };
    fillStaticOptions();
    bindUI();
    Store.subscribe(onChange);
    if (!Store.storageOk) {
      var tip = $('quickTip');
      tip.innerHTML = '<b style="color:#fbbf24">当前页面无法写入浏览器本地存储</b>（多半是用 file:// 直接打开的）。' +
        '数据仍可正常录入和导出，但刷新会丢失——请用 http 方式打开，或随时「导出 JSON」备份。';
    }
    if (!Store.book().meta.title && !Store.book().characters.length) {
      openBookModal();
    }
    renderAll();
    Graph.fit();
  }

  function fillStaticOptions() {
    var catSel = $('relCategory');
    catSel.innerHTML = Store.REL_CATEGORIES.map(function (c) {
      return '<option value="' + esc(c.key) + '">' + esc(c.key) + '</option>';
    }).join('');
    catSel.value = '亲属';

    $('clusterMode').value = Store.ui().clusterMode;
    $('optLabels').checked = !!Store.ui().showLabels;
    $('optAliases').checked = !!Store.ui().showAliases;
    $('optFilterByPage').checked = !!Store.ui().filterByPage;
    $('optHulls').checked = !!Store.ui().showHulls;
    $('optEnding').checked = !!Store.ui().showEnding;
    $('optSmartMerge').checked = Store.ui().smartMerge !== false;
  }

  /* ============================================================ binding */
  function bindUI() {
    // ---- 页码
    $('currentPage').addEventListener('change', function () { Store.setCurrentPage(val('currentPage')); });
    $('currentPage').addEventListener('input', function () {
      if (this.value !== '') Store.setCurrentPage(this.value);
    });
    $('btnPageMinus').addEventListener('click', function () { Store.setCurrentPage(Store.book().meta.currentPage - 1); });
    $('btnPagePlus').addEventListener('click', function () { Store.setCurrentPage(Store.book().meta.currentPage + 1); });

    // ---- 快速录入
    $('quickAddForm').addEventListener('submit', function (e) {
      e.preventDefault();
      var name = val('quickName').trim();
      if (!name) return;
      var page = numOrNull(val('quickFirstPage'));
      if (page === null) page = Store.book().meta.currentPage;

      var existing = Store.findCharacterByName(name);
      var mergeTarget = null;
      if (!existing && Store.ui().smartMerge !== false) {
        var cands = findNameCandidates(name);
        if (cands.length === 1) {
          var c0 = cands[0];
          if (confirm('「' + name + '」疑似就是「' + c0.primaryName + '」' + describeChar(c0) + '。\n\n' +
            '确定 = 记为 TA 的别名，并在此页记一次出场\n取消 = 当作另一个人新建')) {
            mergeTarget = c0;
          }
        } else if (cands.length > 1) {
          // 《百年孤独》这类七代重名的书，候选会有好几个，让用户自己挑
          var top = cands.slice(0, 8);
          var lines = top.map(function (c, i) {
            return (i + 1) + ') ' + c.primaryName + describeChar(c) + '（已出场 ' + c.appearances.length + ' 次）';
          });
          var ans = prompt('「' + name + '」疑似是已有的人物之一。\n' +
            '输入序号 = 记为 TA 的别名，并在此页记一次出场；\n输入 0 或直接确定 = 当作另一个人新建。\n\n' + lines.join('\n'), '1');
          var n = parseInt(ans, 10);
          if (isFinite(n) && n >= 1 && n <= top.length) mergeTarget = top[n - 1];
        }
      }

      var res;
      if (mergeTarget) {
        var dup = mergeTarget.names.some(function (n) { return n.text.toLowerCase() === name.toLowerCase(); });
        if (!dup) mergeTarget.names.push({ text: name, type: '别名', note: '' });
        Store.addAppearance(mergeTarget.id, page);
        Store.emit('char:capture', { character: mergeTarget, created: false, addedAlias: !dup, page: page });
        res = { character: mergeTarget, created: false, addedAlias: !dup };
      } else {
        res = Store.captureName(name, { page: page, firstPage: page });
      }

      if (res) {
        recent.unshift({
          id: res.character.id,
          name: name,
          primary: res.character.primaryName,
          page: page,
          created: res.created,
          alias: res.addedAlias
        });
        recent = recent.slice(0, 14);
        selectedId = res.character.id;
        $('quickName').value = '';
        $('quickFirstPage').value = '';
        $('quickName').focus();
        renderAll();
        Graph.focusNode(res.character.id);
      }
    });

    $('quickName').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); $('quickAddForm').dispatchEvent(new Event('submit', { cancelable: true })); }
    });

    // ---- 搜索 / 排序
    $('charSearch').addEventListener('input', renderCharList);
    $('btnToggleSort').addEventListener('click', function () {
      var order = ['page', 'name', 'count'];
      var cur = Store.ui().sortBy || 'page';
      var next = order[(order.indexOf(cur) + 1) % order.length];
      Store.setUi({ sortBy: next });
      this.textContent = next === 'page' ? '页序 ⇅' : (next === 'name' ? '字序 ⇅' : '出场 ⇅');
    });
    $('btnToggleSort').textContent = (Store.ui().sortBy === 'name') ? '字序 ⇅' : (Store.ui().sortBy === 'count' ? '出场 ⇅' : '页序 ⇅');

    // ---- 快速连关系
    $('quickRelForm').addEventListener('submit', function (e) {
      e.preventDefault();
      var from = val('relFrom'), to = val('relTo');
      if (!from || !to) { flashTip('先选两个人。'); return; }
      if (from === to) { flashTip('不能和自己建关系。'); return; }
      var r = Store.addRelation({
        from: from, to: to,
        type: val('relType').trim() || '关系',
        category: val('relCategory'),
        sincePage: numOrNull(val('relSince')) === null ? Store.book().meta.currentPage : numOrNull(val('relSince')),
        untilPage: numOrNull(val('relUntil'))
      });
      if (!r) { flashTip('这条关系已经存在了。'); return; }
      $('relType').value = '';
      $('relSince').value = '';
      $('relUntil').value = '';
      flashTip('已连上：' + Store.character(from).primaryName + ' → ' + Store.character(to).primaryName);
      Graph.alpha = Math.max(Graph.alpha, 0.7);
      Graph.start();
    });
    $('relType').addEventListener('input', function () {
      this.setAttribute('list', 'relTypeList');
    });

    // ---- 图表工具
    $('clusterMode').addEventListener('change', function () {
      Store.setUi({ clusterMode: this.value });
      setTimeout(function () { Graph.fit(); }, 1200);
    });
    $('btnRelayout').addEventListener('click', function () { Graph.relayout(); });
    $('btnFit').addEventListener('click', function () { Graph.fit(); });
    $('btnZoomIn').addEventListener('click', function () { Graph.zoomBy(1.25); });
    $('btnZoomOut').addEventListener('click', function () { Graph.zoomBy(0.8); });
    ['optLabels', 'optAliases', 'optFilterByPage', 'optHulls', 'optEnding'].forEach(function (id) {
      $(id).addEventListener('change', function () {
        var patch = {};
        patch[id] = this.checked;
        Store.setUi(patch);
      });
    });
    $('optSmartMerge').addEventListener('change', function () {
      Store.state.ui.smartMerge = this.checked;
      Store.save();
    });
    $('btnExportSvg').addEventListener('click', function () {
      Graph.downloadSvg(fileBase() + '.svg');
    });
    $('btnExportPng').addEventListener('click', function () {
      Graph.downloadPng(fileBase() + '.png');
    });

    // ---- 时间轴
    $('pageSlider').addEventListener('input', function () { Store.setCurrentPage(this.value); });
    $('btnTimelineFull').addEventListener('click', function () {
      Store.setUi({ filterByPage: !Store.ui().filterByPage });
      $('optFilterByPage').checked = !!Store.ui().filterByPage;
    });

    // ---- 顶部
    $('bookSelect').addEventListener('change', function () {
      selectedId = null;
      recent = [];
      Graph.setSelected(null);
      Store.setActiveBook(this.value);
      setTimeout(function () { Graph.fit(); }, 2600);
    });
    $('btnBookMeta').addEventListener('click', openBookModal);
    $('btnNewBook').addEventListener('click', function () {
      var b = Store.createBook({ title: '', totalPages: 300, currentPage: 1 });
      selectedId = null;
      openBookModal();
      setTimeout(function () { $('metaTitle').focus(); }, 60);
    });
    $('btnLoadSamples').addEventListener('click', function () {
      if (!global.SAMPLE_BOOKS || !global.SAMPLE_BOOKS.length) {
        alert('示例数据未加载（data/samples.js 缺失）。');
        return;
      }
      var titles = global.SAMPLE_BOOKS.map(function (b) { return '《' + b.meta.title + '》'; }).join('、');
      if (!confirm('载入 ' + global.SAMPLE_BOOKS.length + ' 部示例书目？\n' + titles + '\n\n同名书目会被覆盖。')) return;
      var added = Store.loadSamples();
      selectedId = null;
      alert('已载入 ' + added.length + ' 本示例书目。');
    });
    $('btnExportJson').addEventListener('click', function () {
      var blob = new Blob([Store.exportJson()], { type: 'application/json' });
      Graph.downloadBlob(blob, 'book-atlas-' + (Store.book().meta.title || 'all') + '.json');
    });
    $('btnImportJson').addEventListener('click', function () { $('fileImport').click(); });
    $('fileImport').addEventListener('change', function () {
      var f = this.files && this.files[0];
      if (!f) return;
      var reader = new FileReader();
      reader.onload = function () {
        try {
          var added = Store.importJson(String(reader.result), 'replace');
          alert('导入成功：' + added.length + ' 本书目。');
        } catch (err) {
          alert('导入失败：' + err.message);
        }
      };
      reader.readAsText(f, 'utf-8');
      this.value = '';
    });
    $('btnHelp').addEventListener('click', function () { $('helpModal').hidden = false; });
    $('btnCloseHelp').addEventListener('click', function () { $('helpModal').hidden = true; });
    $('btnResetData').addEventListener('click', function () {
      var b = Store.book();
      if (!confirm('清空《' + (b.meta.title || '未命名') + '》中的人物与关系？书目信息会保留。')) return;
      selectedId = null;
      recent = [];
      Store.clearBookData();
    });

    // ---- 书目弹窗
    $('btnCloseBookModal').addEventListener('click', function () { $('bookModal').hidden = true; });
    $('btnSaveBook').addEventListener('click', function () {
      Store.updateMeta({
        title: val('metaTitle').trim(),
        author: val('metaAuthor').trim(),
        publisher: val('metaPublisher').trim(),
        isbn: val('metaIsbn').trim(),
        edition: val('metaEdition').trim(),
        year: val('metaYear').trim(),
        totalPages: numOrNull(val('metaTotalPages')),
        note: val('metaNote').trim()
      });
      $('bookModal').hidden = true;
      setTimeout(function () { Graph.fit(); }, 500);
    });
    $('btnDeleteBook').addEventListener('click', function () {
      var b = Store.book();
      if (!confirm('删除《' + (b.meta.title || '未命名') + '》及其全部人物数据？此操作不可撤销。')) return;
      Store.deleteBook(b.id);
      selectedId = null;
      $('bookModal').hidden = true;
    });

    // ---- 右栏事件委托
    var right = $('panelRight');
    right.addEventListener('input', onDetailInput);
    right.addEventListener('change', onDetailChange);
    right.addEventListener('click', onDetailClick);

    // 列表 / 最近录入
    $('charList').addEventListener('click', function (e) {
      var li = e.target.closest('li[data-id]');
      if (!li) return;
      selectCharacter(li.getAttribute('data-id'));
    });
    $('recentList').addEventListener('click', function (e) {
      var c = e.target.closest('.chip[data-id]');
      if (c) selectCharacter(c.getAttribute('data-id'));
    });

    // 拖拽文件导入
    doc.addEventListener('dragover', function (e) { e.preventDefault(); });
    doc.addEventListener('drop', function (e) {
      e.preventDefault();
      var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
      if (!f) return;
      var reader = new FileReader();
      reader.onload = function () {
        try { Store.importJson(String(reader.result), 'replace'); }
        catch (err) { alert('导入失败：' + err.message); }
      };
      reader.readAsText(f, 'utf-8');
    });

    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        $('bookModal').hidden = true;
        $('helpModal').hidden = true;
      }
      if (e.key === '/' && doc.activeElement.tagName !== 'INPUT' && doc.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        $('quickName').focus();
      }
    });
  }

  /** 找“疑似同一人”：全名 / 小名互相包含 */
  function describeChar(c) {
    var bits = [];
    if (c.role) bits.push(c.role);
    bits.push('首次出场 ' + (c.firstPage === null ? '未知' : 'P' + c.firstPage));
    return '（' + bits.join(' · ') + '）';
  }

  function findNameCandidates(name) {
    var q = name.trim().toLowerCase();
    if (q.length < 2) return [];
    var out = [];
    Store.book().characters.forEach(function (c) {
      var targets = [c.primaryName].concat(c.names.map(function (n) { return n.text; }));
      var hit = targets.some(function (t) {
        var s = String(t).trim().toLowerCase();
        if (s.length < 2 || s === q) return false;
        return s.indexOf(q) >= 0 || q.indexOf(s) >= 0;
      });
      if (hit) out.push(c);
    });
    return out;
  }

  function fileBase() {    var t = Store.book().meta.title || 'book-atlas';
    return t.replace(/[\\/:*?"<>|]/g, '_') + '-人物图谱';
  }

  function flashTip(msg) {
    var t = $('quickTip');
    t.textContent = msg;
    t.style.color = '#9ef0c4';
    clearTimeout(flashTip._t);
    flashTip._t = setTimeout(function () {
      t.style.color = '';
      t.textContent = '已有人名会自动并入其别名，并在此页记一次出场。';
    }, 2600);
  }

  function selectCharacter(id) {
    selectedId = id;
    renderDetail();
    renderCharList();
    Graph.setSelected(id);
    if (id) Graph.focusNode(id);
  }

  /* ============================================================ store change */
  function onChange(reason, payload) {
    if (payload && payload.silent) { renderGraphAndList(); return; }
    if (reason === 'char:update') { renderAll(); return; }
    if (reason === 'page:change') {
      renderGraphAndList();
      renderTimeline();
      clearTimeout(detailTimer);
      detailTimer = setTimeout(renderDetail, 220);
      return;
    }
    renderAll();
  }

  /* ============================================================ render */
  function renderAll() {
    renderBookSelect();
    renderRelSelects();
    renderRelTypeList();
    renderTimeline();
    renderGraphAndList();
    renderDetail();
    // 同步工具栏控件（聚类方式可能被程序改动）
    var cm = $('clusterMode');
    if (cm.value !== Store.ui().clusterMode) cm.value = Store.ui().clusterMode;
  }

  function renderGraphAndList() {
    renderGraph();
    renderCharList();
    renderRecent();
    renderLegend();
    renderStats();
  }

  function renderBookSelect() {
    var sel = $('bookSelect');
    sel.innerHTML = Store.books().map(function (b) {
      var t = b.meta.title || '未命名书目';
      return '<option value="' + esc(b.id) + '">' + esc(t) + '（' + b.characters.length + '）</option>';
    }).join('');
    sel.value = Store.book().id;
  }

  function renderTimeline() {
    var book = Store.book();
    var bounds = Store.pageBounds(book);
    var page = book.meta.currentPage;
    var slider = $('pageSlider');
    slider.min = bounds.min;
    slider.max = bounds.max;
    slider.value = page;
    $('currentPage').value = page;
    $('pageReadout').textContent = 'P' + page + ' / ' + bounds.max;

    var active = 0, future = 0;
    book.relations.forEach(function (r) { if (Store.edgeActiveAt(r, page)) active++; });
    book.characters.forEach(function (c) { if (!Store.appearedAt(c, page)) future++; });
    var readout;
    if (Store.ui().filterByPage) {
      readout = '关系 ' + active + '/' + book.relations.length + ' · 未出场 ' + future + ' 人';
      if (active === 0 && book.relations.length) readout += ' · 此页无生效关系，可关掉「按页码过滤」看全书网络';
    } else {
      readout = '关系 ' + book.relations.length + ' 条（未按页过滤）';
    }
    $('pageFilterReadout').textContent = readout;
    $('btnTimelineFull').textContent = Store.ui().filterByPage ? '按页过滤：开' : '按页过滤：关';
  }

  function renderRecent() {
    $('recentList').innerHTML = recent.map(function (r) {
      return '<span class="chip' + (r.created ? ' new' : '') + '" data-id="' + esc(r.id) + '" title="' +
        esc(r.primary + (r.created ? '（新建）' : (r.alias ? '（新增别名）' : '（+1 次出场）'))) + ' P' + r.page + '">' +
        esc(r.name) + ' <b>P' + r.page + '</b></span>';
    }).join('');
  }

  function matches(ch, q) {
    if (!q) return true;
    var hay = [ch.primaryName, ch.role, ch.ending, ch.note, ch.groups.join(' ')].concat(
      ch.names.map(function (n) { return n.text + ' ' + n.type; }),
      ch.locations.map(function (l) { return l.place + ' ' + l.city + ' ' + l.country; }),
      ch.factions.map(function (f) { return f.name + ' ' + f.group; }),
      ch.experiences.map(function (e) { return e.title + ' ' + e.description; })
    ).join(' ').toLowerCase();
    return hay.indexOf(q) >= 0;
  }

  function renderCharList() {
    var book = Store.book();
    var ui = Store.ui();
    var page = book.meta.currentPage;
    var q = val('charSearch').trim().toLowerCase();
    var clusters = Store.buildClusters(book, ui.clusterMode, page);
    var list = book.characters.filter(function (c) { return matches(c, q); });

    var sortBy = ui.sortBy || 'page';
    list.sort(function (a, b) {
      if (sortBy === 'name') return a.primaryName.localeCompare(b.primaryName, 'zh');
      if (sortBy === 'count') return b.appearances.length - a.appearances.length;
      var af = a.firstPage === null ? Infinity : a.firstPage;
      var bf = b.firstPage === null ? Infinity : b.firstPage;
      return af - bf || a.primaryName.localeCompare(b.primaryName, 'zh');
    });

    $('charCount').textContent = book.characters.length;

    $('charList').innerHTML = list.map(function (c) {
      var color = ui.clusterMode === 'none' ? Store.clusterColor(c.role || '未写身份') : clusters.colorOf(c.id);
      var alias = c.names.length ? c.names.slice(0, 2).map(function (n) { return n.text; }).join('/') : '';
      var notYet = !Store.appearedAt(c, page);
      return '<li data-id="' + esc(c.id) + '" class="' + (c.id === selectedId ? 'active' : '') + '">' +
        '<span class="dot" style="background:' + color + '"></span>' +
        '<span class="nm">' + esc(c.primaryName) +
        (alias ? '<small>' + esc(alias) + '</small>' : '') + '</span>' +
        (notYet ? '<span class="badge">未出场</span>' : '') +
        '<span class="pg">' + fmtPage(c.firstPage) + '</span>' +
        '</li>';
    }).join('') || '<li style="color:#6b7899;cursor:default">没有匹配的人物</li>';
  }

  function renderRelSelects() {
    var book = Store.book();
    var opts = book.characters.map(function (c) {
      return '<option value="' + esc(c.id) + '">' + esc(c.primaryName) + (c.role ? '（' + esc(c.role) + '）' : '') + '</option>';
    }).join('');
    var from = $('relFrom'), to = $('relTo');
    var keepFrom = from.value, keepTo = to.value;
    from.innerHTML = opts;
    to.innerHTML = opts;
    if (book.characters.some(function (c) { return c.id === keepFrom; })) from.value = keepFrom;
    if (book.characters.some(function (c) { return c.id === keepTo; })) to.value = keepTo;
    if (selectedId && book.characters.some(function (c) { return c.id === selectedId; })) from.value = selectedId;
  }

  function renderRelTypeList() {
    var types = Store.allRelationTypes();
    $('relTypeList').innerHTML = types.map(function (t) { return '<option value="' + esc(t) + '"></option>'; }).join('');
  }

  function renderStats() {
    var book = Store.book();
    var s = Store.stats(book);
    $('stats').innerHTML = [
      ['人物', s.characters],
      ['关系', s.relations],
      ['别名', s.aliases],
      ['城市', s.cityCount],
      ['国家/地区', s.countryCount],
      ['阵营', s.factionCount],
      ['已写结局', s.withEnding + '/' + s.characters],
      ['总页数', s.maxPage]
    ].map(function (r) {
      return '<div class="stat"><b>' + esc(r[1]) + '</b><span>' + esc(r[0]) + '</span></div>';
    }).join('');
  }

  function renderLegend() {
    var book = Store.book();
    var ui = Store.ui();
    var page = book.meta.currentPage;
    var clusters = Store.buildClusters(book, ui.clusterMode, page);
    var html = '';
    if (clusters.list.length) {
      html += '<div class="lg-title">聚类：' + esc($('clusterMode').selectedOptions[0].textContent) + '</div>';
      clusters.list.slice(0, 9).forEach(function (c) {
        html += '<div class="lg-row" data-cluster="' + esc(c.key) + '" style="cursor:pointer">' +
          '<span class="lg-dot" style="background:' + c.color + '"></span>' +
          '<span>' + esc(c.label) + ' · ' + c.members.length + '</span></div>';
      });
      if (clusters.list.length > 9) html += '<div class="lg-row">…共 ' + clusters.list.length + ' 组</div>';
      html += '<div class="lg-title" style="margin-top:4px">关系类别</div>';
    }
    html += '<div class="lg-row" style="flex-wrap:wrap;gap:4px 10px">' +
      Store.REL_CATEGORIES.map(function (c) {
        return '<span style="display:inline-flex;align-items:center;gap:5px"><span class="lg-swatch" style="background:' + c.color + '"></span>' + esc(c.key) + '</span>';
      }).join('') + '</div>';
    $('legend').innerHTML = html;
    $('legend').querySelectorAll('[data-cluster]').forEach(function (el) {
      el.addEventListener('click', function () {
        Graph.focusCluster(el.getAttribute('data-cluster'));
      });
    });
  }

  function renderGraph() {
    var book = Store.book();
    var ui = Store.ui();
    var page = book.meta.currentPage;
    var bounds = Store.pageBounds(book);
    var clusters = Store.buildClusters(book, ui.clusterMode, page);
    var filter = ui.filterByPage;

    var nodes = book.characters.map(function (c) {
      return {
        id: c.id,
        char: c,
        clusterKey: clusters.byChar[c.id] || '__all__',
        color: ui.clusterMode === 'none' ? Store.clusterColor(c.role || '未写身份') : clusters.colorOf(c.id),
        dim: filter && !Store.appearedAt(c, page)
      };
    });

    var edges = book.relations.map(function (r) {
      var hidden = filter && !Store.edgeActiveAt(r, page);
      return {
        id: r.id,
        rel: r,
        source: r.from,
        target: r.to,
        color: Store.categoryColor(r.category),
        label: r.type,
        hidden: hidden,
        dim: false
      };
    });

    Graph.currentPage = page;
    Graph.setData({
      nodes: nodes,
      edges: edges,
      clusters: clusters.list,
      colorOf: clusters.colorOf,
      options: {
        showLabels: ui.showLabels,
        showAliases: ui.showAliases,
        showHulls: ui.showHulls,
        showEnding: ui.showEnding
      }
    });
    Graph.setSelected(selectedId);
    Graph.sliderMax = bounds.max;

    $('emptyHint').hidden = book.characters.length > 0;
  }

  /* ============================================================ 详情面板 */
  function renderDetail() {
    var book = Store.book();
    var host = $('detailBody');
    if (!selectedId || !Store.character(selectedId)) {
      $('detailEmpty').hidden = false;
      host.hidden = true;
      host.innerHTML = '';
      renderStats();
      return;
    }
    var c = Store.character(selectedId);
    var page = book.meta.currentPage;
    var clusters = Store.buildClusters(book, Store.ui().clusterMode, page);
    var color = Store.ui().clusterMode === 'none' ? Store.clusterColor(c.role || '未写身份') : clusters.colorOf(c.id);
    var inPage = Store.effectiveEntry(c.locations, page);
    var rels = Store.relationsOf(c.id);

    var html = '';
    html += '<div class="detail-head">' +
      '<div class="avatar" style="background:' + color + '">' + esc(c.primaryName.slice(0, 1)) + '</div>' +
      '<div><h2>' + esc(c.primaryName) + '</h2><div class="sub">' +
      esc(c.role || '未写身份') + ' · ' + esc(c.gender) + ' · 首次出场 ' + fmtPage(c.firstPage) +
      ' · 出场 ' + c.appearances.length + ' 次</div></div>' +
      '<button class="btn btn-mini btn-ghost close" data-act="close">✕</button>' +
      '</div>';

    // 基本信息
    html += '<div class="sec"><h3>基本信息</h3><div class="rows">' +
      '<label class="field"><span>主名（图上显示）</span><input type="text" data-field="primaryName" value="' + esc(c.primaryName) + '"></label>' +
      '<div class="inline-2">' +
      '<label class="field"><span>身份 / 头衔</span><input type="text" data-field="role" value="' + esc(c.role) + '" placeholder="荣国府公子"></label>' +
      '<label class="field"><span>性别</span><select data-field="gender">' +
      ['男', '女', '未知'].map(function (g) { return '<option' + (c.gender === g ? ' selected' : '') + '>' + g + '</option>'; }).join('') +
      '</select></label></div>' +
      '<div class="inline-3">' +
      '<label class="field"><span>首次出现页</span><input type="number" min="1" data-field="firstPage" value="' + (c.firstPage === null ? '' : c.firstPage) + '"></label>' +
      '<label class="field"><span>结局页</span><input type="number" min="1" data-field="endingPage" value="' + (c.endingPage === null ? '' : c.endingPage) + '"></label>' +
      '<label class="field"><span>出场页（逗号分隔）</span><input type="text" data-field="appearances" value="' + esc(c.appearances.join(',')) + '"></label>' +
      '</div>' +
      '</div></div>';

    // 别名
    html += '<div class="sec"><h3>别名 / 小名 / 译名 <button class="btn btn-mini" data-act="add-name">＋ 别名</button></h3>';
    html += '<div class="rows">';
    if (!c.names.length) html += '<div class="row-meta">还没有别名。同一个人再录一次别的名字，就会自动加到这里。</div>';
    c.names.forEach(function (n, i) {
      html += '<div class="row-item"><div class="row-top">' +
        '<input class="grow" type="text" data-list="names" data-idx="' + i + '" data-key="text" value="' + esc(n.text) + '">' +
        '<select style="width:92px" data-list="names" data-idx="' + i + '" data-key="type">' +
        Store.NAME_TYPES.map(function (t) { return '<option' + (n.type === t ? ' selected' : '') + '>' + t + '</option>'; }).join('') +
        '</select>' +
        '<button class="x" data-act="del-name" data-idx="' + i + '" title="删除">✕</button>' +
        '</div></div>';
    });
    html += '</div></div>';

    // 所在位置
    html += '<div class="sec"><h3>所在位置 / 城市' +
      (inPage && Store.ui().filterByPage ? ' <span class="hint" style="color:#6b7899;font-weight:400">当前页：' + esc(inPage.city || inPage.place || '未记') + '</span>' : '') +
      ' <button class="btn btn-mini" data-act="add-loc">＋ 位置</button></h3><div class="rows">';
    if (!c.locations.length) html += '<div class="row-meta">记录人物在书里待过的城市、府邸、国家，聚类时会自动把同城的人抱团。</div>';
    c.locations.forEach(function (l, i) {
      html += '<div class="row-item"><div class="inline-3">' +
        '<label class="field"><span>地点 / 府邸</span><input type="text" data-list="locations" data-idx="' + i + '" data-key="place" value="' + esc(l.place) + '"></label>' +
        '<label class="field"><span>城市</span><input type="text" data-list="locations" data-idx="' + i + '" data-key="city" value="' + esc(l.city) + '"></label>' +
        '<label class="field"><span>国家 / 地区</span><input type="text" data-list="locations" data-idx="' + i + '" data-key="country" value="' + esc(l.country) + '"></label>' +
        '</div><div class="row-top">' +
        '<label class="field field-tight" style="width:92px"><span>起页</span><input type="number" min="1" data-list="locations" data-idx="' + i + '" data-key="fromPage" value="' + (l.fromPage === null ? '' : l.fromPage) + '"></label>' +
        '<label class="field field-tight" style="width:92px"><span>止页</span><input type="number" min="1" data-list="locations" data-idx="' + i + '" data-key="toPage" value="' + (l.toPage === null ? '' : l.toPage) + '"></label>' +
        '<span class="grow row-meta">' + pageRange(l.fromPage, l.toPage) + '</span>' +
        '<button class="x" data-act="del-loc" data-idx="' + i + '">✕</button>' +
        '</div></div>';
    });
    html += '</div></div>';

    // 阵营
    html += '<div class="sec"><h3>阵营 / 利益集团 <button class="btn btn-mini" data-act="add-fac">＋ 阵营</button></h3><div class="rows">';
    if (!c.factions.length) html += '<div class="row-meta">例如「蜀汉」「曹魏」「东吴」；带上起止页，时间轴一动阵营就变。</div>';
    c.factions.forEach(function (f, i) {
      html += '<div class="row-item"><div class="inline-3">' +
        '<label class="field"><span>阵营</span><input type="text" data-list="factions" data-idx="' + i + '" data-key="name" value="' + esc(f.name) + '"></label>' +
        '<label class="field"><span>集团 / 家族</span><input type="text" data-list="factions" data-idx="' + i + '" data-key="group" value="' + esc(f.group) + '"></label>' +
        '<label class="field"><span>备注</span><input type="text" data-list="factions" data-idx="' + i + '" data-key="note" value="' + esc(f.note) + '"></label>' +
        '</div><div class="row-top">' +
        '<label class="field field-tight" style="width:92px"><span>起页</span><input type="number" min="1" data-list="factions" data-idx="' + i + '" data-key="fromPage" value="' + (f.fromPage === null ? '' : f.fromPage) + '"></label>' +
        '<label class="field field-tight" style="width:92px"><span>止页</span><input type="number" min="1" data-list="factions" data-idx="' + i + '" data-key="toPage" value="' + (f.toPage === null ? '' : f.toPage) + '"></label>' +
        '<span class="grow row-meta">' + pageRange(f.fromPage, f.toPage) + '</span>' +
        '<button class="x" data-act="del-fac" data-idx="' + i + '">✕</button>' +
        '</div></div>';
    });
    html += '</div></div>';

    // 自定义标签
    html += '<div class="sec"><h3>自定义标签（聚类用） <button class="btn btn-mini" data-act="add-group">＋ 标签</button></h3>' +
      '<div class="recent">' + c.groups.map(function (g, i) {
        return '<span class="name-tag">' + esc(g) + '<button class="x" data-act="del-group" data-idx="' + i + '">✕</button></span>';
      }).join('') + (c.groups.length ? '' : '<span class="row-meta">例如「主角」「贾府丫鬟」「第四卷才登场」。</span>') + '</div></div>';

    // 分期经历
    html += '<div class="sec"><h3>分期经历 <button class="btn btn-mini" data-act="add-exp">＋ 一段</button></h3><div class="rows">';
    if (!c.experiences.length) html += '<div class="row-meta">同一个人在不同时期可以完全不同：写下每段的页码与故事。</div>';
    c.experiences.forEach(function (e, i) {
      html += '<div class="row-item">' +
        '<div class="row-top"><input class="grow" type="text" placeholder="时期 / 事件标题" data-list="experiences" data-idx="' + i + '" data-key="title" value="' + esc(e.title) + '">' +
        '<button class="x" data-act="del-exp" data-idx="' + i + '">✕</button></div>' +
        '<div class="inline-3">' +
        '<label class="field field-tight"><span>起页</span><input type="number" min="1" data-list="experiences" data-idx="' + i + '" data-key="fromPage" value="' + (e.fromPage === null ? '' : e.fromPage) + '"></label>' +
        '<label class="field field-tight"><span>止页</span><input type="number" min="1" data-list="experiences" data-idx="' + i + '" data-key="toPage" value="' + (e.toPage === null ? '' : e.toPage) + '"></label>' +
        '<span class="row-meta" style="align-self:flex-end;padding-bottom:6px">' + pageRange(e.fromPage, e.toPage) + '</span>' +
        '</div>' +
        '<textarea placeholder="这一段发生了什么" data-list="experiences" data-idx="' + i + '" data-key="description">' + esc(e.description) + '</textarea>' +
        '</div>';
    });
    html += '</div></div>';

    // 结局
    html += '<div class="sec"><h3>最终结局</h3><div class="rows">' +
      '<textarea data-field="ending" placeholder="最终结局 / 下落">' + esc(c.ending) + '</textarea>' +
      '<label class="field"><span>备注</span><textarea data-field="note" placeholder="其他要记的">' + esc(c.note) + '</textarea></label>' +
      '</div></div>';

    // 关系
    html += '<div class="sec"><h3>关系 <span class="count">' + rels.length + '</span>' +
      '<button class="btn btn-mini" data-act="add-rel">＋ 连关系</button></h3>';
    html += '<div class="rows">';
    if (!rels.length) html += '<div class="row-meta">还没有关系。用左栏「快速连关系」，或点上面的按钮。</div>';
    rels.forEach(function (r) {
      var otherId = r.from === c.id ? r.to : r.from;
      var other = Store.character(otherId);
      var dir = r.from === c.id ? '→' : '←';
      var activeNow = Store.edgeActiveAt(r, page);
      html += '<div class="row-item"><div class="rel-line">' +
        '<span class="cat" style="background:' + Store.categoryColor(r.category) + '"></span>' +
        '<span class="who" data-act="goto" data-id="' + esc(otherId) + '">' + esc(other ? other.primaryName : '?') + '</span>' +
        '<span style="color:#6b7899">' + dir + '</span>' +
        '<input type="text" style="width:88px;padding:2px 5px" data-rel="' + esc(r.id) + '" data-key="type" value="' + esc(r.type) + '">' +
        '<select style="width:76px;padding:2px 5px" data-rel="' + esc(r.id) + '" data-key="category">' +
        Store.REL_CATEGORIES.map(function (cc) {
          return '<option value="' + esc(cc.key) + '"' + (r.category === cc.key ? ' selected' : '') + '>' + esc(cc.key) + '</option>';
        }).join('') + '</select>' +
        '<span class="tl" style="' + (Store.ui().filterByPage && !activeNow ? 'color:#ef4444' : '') + '">' + pageRange(r.sincePage, r.untilPage) + '</span>' +
        '<button class="x" data-act="del-rel" data-id="' + esc(r.id) + '">✕</button>' +
        '</div>' +
        '<div class="row-top">' +
        '<label class="field field-tight" style="width:80px"><span>起页</span><input type="number" min="1" data-rel="' + esc(r.id) + '" data-key="sincePage" value="' + (r.sincePage === null ? '' : r.sincePage) + '"></label>' +
        '<label class="field field-tight" style="width:80px"><span>止页</span><input type="number" min="1" data-rel="' + esc(r.id) + '" data-key="untilPage" value="' + (r.untilPage === null ? '' : r.untilPage) + '"></label>' +
        '<label class="field field-tight grow"><span>关系说明</span><input type="text" data-rel="' + esc(r.id) + '" data-key="note" value="' + esc(r.note) + '" placeholder="可选"></label>' +
        '</div></div>';
    });
    html += '</div>';
    html += '<div class="detail-actions"><button class="btn btn-mini" data-act="focus">在图中定位</button>' +
      '<button class="btn btn-mini btn-danger" data-act="del-char">删除此人</button></div>';
    html += '</div>';

    $('detailEmpty').hidden = true;
    host.hidden = false;
    host.innerHTML = html;

    if (focusAfterRender) {
      var spec = focusAfterRender;
      focusAfterRender = null;
      var el = host.querySelector('[data-list="' + spec.list + '"][data-idx="' + spec.idx + '"][data-key="' + spec.key + '"]');
      if (el) { el.focus(); if (el.select) { try { el.select(); } catch (e) {} } }
    }
  }

  /* ------------------------------------------------ detail events */
  function parseListValue(key, raw) {
    if (['fromPage', 'toPage', 'sincePage', 'untilPage'].indexOf(key) >= 0) return numOrNull(raw);
    return raw;
  }

  function onDetailInput(e) {
    var t = e.target;
    var c = selectedId ? Store.character(selectedId) : null;
    if (!c || !t) return;

    if (t.dataset.rel) {
      var rel = null;
      Store.book().relations.forEach(function (r) { if (r.id === t.dataset.rel) rel = r; });
      if (!rel) return;
      rel[t.dataset.key] = parseListValue(t.dataset.key, t.value);
      Store.emit('rel:update', { relation: rel, silent: true });
      return;
    }

    if (t.dataset.list) {
      var list = t.dataset.list, idx = Number(t.dataset.idx), k = t.dataset.key;
      if (!c[list] || !c[list][idx]) return;
      c[list][idx][k] = parseListValue(k, t.value);
      Store.emit('char:update', { character: c, silent: true });
      return;
    }

    if (t.dataset.field) {
      var f = t.dataset.field;
      if (f === 'appearances') return;   // 交给 change 事件
      if (f === 'firstPage') {
        c.firstPage = numOrNull(t.value);
        if (c.firstPage !== null && c.appearances.indexOf(c.firstPage) === -1) {
          c.appearances.push(c.firstPage);
          c.appearances.sort(function (a, b) { return a - b; });
        }
      } else if (f === 'endingPage') {
        c.endingPage = numOrNull(t.value);
      } else {
        c[f] = t.value;
      }
      Store.emit('char:update', { character: c, silent: true });
      return;
    }
  }

  function onDetailChange(e) {
    var t = e.target;
    var c = selectedId ? Store.character(selectedId) : null;
    if (!c || !t.dataset.field) return;
    if (t.dataset.field === 'appearances') {
      var nums = String(t.value).split(/[,，\s]+/).map(numOrNull)
        .filter(function (x) { return x !== null; });
      nums.sort(function (a, b) { return a - b; });
      c.appearances = nums;
      if (nums.length && (c.firstPage === null || c.firstPage > nums[0])) c.firstPage = nums[0];
      Store.emit('char:update', { character: c });
    }
  }

  function onDetailClick(e) {
    var t = e.target.closest('[data-act]');
    if (!t) return;
    var act = t.getAttribute('data-act');
    var c = selectedId ? Store.character(selectedId) : null;
    var idx;

    switch (act) {
      case 'close':
        selectedId = null;
        Graph.setSelected(null);
        renderDetail(); renderCharList();
        break;
      case 'focus':
        if (c) Graph.focusNode(c.id);
        break;
      case 'del-char':
        if (!c) break;
        if (!confirm('删除「' + c.primaryName + '」及其所有关系？')) break;
        selectedId = null;
        Store.deleteCharacter(c.id);
        Graph.setSelected(null);
        break;
      case 'add-name':
        c.names.push({ text: '', type: '别名', note: '' });
        focusAfterRender = { list: 'names', idx: c.names.length - 1, key: 'text' };
        Store.emit('char:update', { character: c });
        break;
      case 'del-name':
        c.names.splice(Number(t.getAttribute('data-idx')), 1);
        Store.emit('char:update', { character: c });
        break;
      case 'add-loc':
        c.locations.push({
          place: '', city: '', country: '', fromPage: Store.book().meta.currentPage,
          toPage: null, note: ''
        });
        focusAfterRender = { list: 'locations', idx: c.locations.length - 1, key: 'place' };
        Store.emit('char:update', { character: c });
        break;
      case 'del-loc':
        c.locations.splice(Number(t.getAttribute('data-idx')), 1);
        Store.emit('char:update', { character: c });
        break;
      case 'add-fac':
        c.factions.push({
          name: '', group: '', fromPage: Store.book().meta.currentPage,
          toPage: null, note: ''
        });
        focusAfterRender = { list: 'factions', idx: c.factions.length - 1, key: 'name' };
        Store.emit('char:update', { character: c });
        break;
      case 'del-fac':
        c.factions.splice(Number(t.getAttribute('data-idx')), 1);
        Store.emit('char:update', { character: c });
        break;
      case 'add-group':
        idx = prompt('自定义标签（聚类时使用）', '');
        if (idx === null) break;
        String(idx).split(/[,，\s]+/).filter(Boolean).forEach(function (g) {
          if (c.groups.indexOf(g) === -1) c.groups.push(g);
        });
        Store.emit('char:update', { character: c });
        break;
      case 'del-group':
        c.groups.splice(Number(t.getAttribute('data-idx')), 1);
        Store.emit('char:update', { character: c });
        break;
      case 'add-exp':
        c.experiences.push({
          title: '', fromPage: Store.book().meta.currentPage, toPage: null, description: ''
        });
        focusAfterRender = { list: 'experiences', idx: c.experiences.length - 1, key: 'title' };
        Store.emit('char:update', { character: c });
        break;
      case 'del-exp':
        c.experiences.splice(Number(t.getAttribute('data-idx')), 1);
        Store.emit('char:update', { character: c });
        break;
      case 'del-rel':
        Store.deleteRelation(t.getAttribute('data-id'));
        break;
      case 'goto':
        selectCharacter(t.getAttribute('data-id'));
        break;
      case 'add-rel':
        $('relFrom').value = c.id;
        if (!$('relTo').value || $('relTo').value === c.id) {
          var other = Store.book().characters.filter(function (x) { return x.id !== c.id; })[0];
          if (other) $('relTo').value = other.id;
        }
        $('relType').focus();
        flashTip('在左栏「快速连关系」里填关系词，回车即可。');
        break;
    }
  }

  /* ------------------------------------------------ book modal */
  function openBookModal() {
    var m = Store.book().meta;
    $('metaTitle').value = m.title || '';
    $('metaAuthor').value = m.author || '';
    $('metaPublisher').value = m.publisher || '';
    $('metaIsbn').value = m.isbn || '';
    $('metaEdition').value = m.edition || '';
    $('metaYear').value = m.year || '';
    $('metaTotalPages').value = m.totalPages === null || m.totalPages === undefined ? '' : m.totalPages;
    $('metaNote').value = m.note || '';
    $('bookModal').hidden = false;
  }

  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', boot);
  else boot();
})(window);
