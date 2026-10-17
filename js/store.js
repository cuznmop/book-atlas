/* 书中人 · Book Atlas — 数据层
 * 纯 ES5/ES2015 语法，无模块依赖，直接挂到 window.Store
 */
(function (global) {
  'use strict';

  var STORAGE_KEY = 'bookatlas.v1';

  var REL_CATEGORIES = [
    { key: '亲属', color: '#f472b6' },
    { key: '婚姻', color: '#fb7185' },
    { key: '主仆', color: '#f59e0b' },
    { key: '师友', color: '#34d399' },
    { key: '上下级', color: '#facc15' },
    { key: '同盟', color: '#38bdf8' },
    { key: '敌对', color: '#ef4444' },
    { key: '情感', color: '#a78bfa' },
    { key: '其他', color: '#94a3b8' }
  ];

  var NAME_TYPES = ['小名', '全名', '字', '号', '别号', '绰号', '法名', '尊称', '简称', '译名', '原文', '别名'];

  var REL_TYPE_PRESETS = [
    '父子', '母子', '父女', '母女', '兄弟', '姐妹', '兄妹', '姐弟', '夫妻', '父子（义）', '主仆',
    '师徒', '师生', '知己', '结义兄弟', '君臣', '上下级', '同僚', '盟友', '政敌', '仇敌', '情人',
    '表兄妹', '祖孙', '婆媳', '妯娌', '邻居', '同乡', '同窗', '竞争对手', '恩人'
  ];

  // ---------------------------------------------------------------- utils
  function uid(prefix) {
    return (prefix || 'id') + '-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7);
  }

  function num(v) {
    if (v === '' || v === null || v === undefined) return null;
    var n = Number(v);
    return isFinite(n) ? n : null;
  }

  function str(v) {
    return v === null || v === undefined ? '' : String(v);
  }

  function clone(o) {
    return JSON.parse(JSON.stringify(o));
  }

  function unicase(s) {
    return str(s).trim().toLowerCase();
  }

  function hashHue(key) {
    var h = 0;
    var s = str(key);
    for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 100003;
    return (h * 137.508) % 360;
  }

  function clusterColor(key) {
    return 'hsl(' + hashHue(key).toFixed(1) + ', 62%, 58%)';
  }

  function categoryColor(cat) {
    for (var i = 0; i < REL_CATEGORIES.length; i++) {
      if (REL_CATEGORIES[i].key === cat) return REL_CATEGORIES[i].color;
    }
    return '#94a3b8';
  }

  // ---------------------------------------------------------------- normalize
  function newCharacter(name, firstPage) {
    return {
      id: uid('c'),
      primaryName: str(name),
      names: [],
      gender: '未知',
      role: '',
      firstPage: num(firstPage),
      appearances: num(firstPage) === null ? [] : [num(firstPage)],
      locations: [],
      factions: [],
      groups: [],
      experiences: [],
      ending: '',
      endingPage: null,
      note: ''
    };
  }

  function normalizeCharacter(c) {
    var out = newCharacter(c.primaryName || '未命名', null);
    out.id = c.id || uid('c');
    out.names = Array.isArray(c.names) ? c.names.filter(Boolean).map(function (n) {
      return { text: str(n.text), type: str(n.type || '别名'), note: str(n.note) };
    }) : [];
    out.gender = str(c.gender || '未知');
    out.role = str(c.role);
    out.firstPage = num(c.firstPage);
    out.appearances = Array.isArray(c.appearances)
      ? c.appearances.map(num).filter(function (n) { return n !== null; })
      : [];
    out.appearances = uniqSorted(out.appearances);
    if (out.firstPage === null && out.appearances.length) out.firstPage = out.appearances[0];
    if (out.firstPage !== null && out.appearances.indexOf(out.firstPage) === -1) {
      out.appearances = uniqSorted(out.appearances.concat([out.firstPage]));
    }
    out.locations = (Array.isArray(c.locations) ? c.locations : []).map(function (l) {
      return {
        place: str(l.place), city: str(l.city), country: str(l.country),
        fromPage: num(l.fromPage), toPage: num(l.toPage), note: str(l.note)
      };
    });
    out.factions = (Array.isArray(c.factions) ? c.factions : []).map(function (f) {
      return {
        name: str(f.name), group: str(f.group),
        fromPage: num(f.fromPage), toPage: num(f.toPage), note: str(f.note)
      };
    });
    out.groups = (Array.isArray(c.groups) ? c.groups : []).map(str).filter(Boolean);
    out.experiences = (Array.isArray(c.experiences) ? c.experiences : []).map(function (e) {
      return {
        title: str(e.title), fromPage: num(e.fromPage), toPage: num(e.toPage),
        description: str(e.description)
      };
    });
    out.ending = str(c.ending);
    out.endingPage = num(c.endingPage);
    out.note = str(c.note);
    return out;
  }

  function uniqSorted(arr) {
    var seen = {};
    var out = [];
    arr.slice().sort(function (a, b) { return a - b; }).forEach(function (n) {
      var k = String(n);
      if (!seen[k]) { seen[k] = 1; out.push(n); }
    });
    return out;
  }

  function newRelation(from, to, type, category, sincePage) {
    return {
      id: uid('r'),
      from: from, to: to,
      type: str(type),
      category: REL_CATEGORIES.some(function (c) { return c.key === category; }) ? category : '其他',
      sincePage: num(sincePage),
      untilPage: null,
      directed: true,
      note: ''
    };
  }

  function normalizeRelation(r) {
    return {
      id: r.id || uid('r'),
      from: str(r.from),
      to: str(r.to),
      type: str(r.type || '关系'),
      category: REL_CATEGORIES.some(function (c) { return c.key === r.category; }) ? r.category : '其他',
      sincePage: num(r.sincePage),
      untilPage: num(r.untilPage),
      directed: r.directed !== false,
      note: str(r.note)
    };
  }

  function emptyBook(meta) {
    return {
      id: uid('book'),
      meta: {
        title: str(meta && meta.title),
        author: str(meta && meta.author),
        publisher: str(meta && meta.publisher),
        isbn: str(meta && meta.isbn),
        edition: str(meta && meta.edition),
        year: str(meta && meta.year),
        totalPages: num(meta && meta.totalPages),
        currentPage: num(meta && meta.currentPage) || 1,
        note: str(meta && meta.note)
      },
      characters: [],
      relations: []
    };
  }

  function normalizeBook(b) {
    var book = emptyBook(b.meta);
    book.id = b.id || book.id;
    book.meta.title = str(b.meta && b.meta.title) || '未命名书目';
    book.characters = (Array.isArray(b.characters) ? b.characters : []).map(normalizeCharacter);
    book.relations = (Array.isArray(b.relations) ? b.relations : []).map(normalizeRelation);
    var ids = {};
    book.characters.forEach(function (c) { ids[c.id] = 1; });
    book.relations = book.relations.filter(function (r) {
      return ids[r.from] && ids[r.to] && r.from !== r.to;
    });
    return book;
  }

  // ---------------------------------------------------------------- cluster
  var PAGE_STAGE_LABELS = ['开篇', '前段', '中前段', '中段', '中后段', '后段', '后段二', '临近结尾', '尾声'];

  function activeEntry(list, page) {
    // 返回在 page 处生效的一条（起止页含边界，null 表示无界）
    var best = null;
    for (var i = 0; i < list.length; i++) {
      var it = list[i];
      var okFrom = it.fromPage === null || it.fromPage === undefined || it.fromPage <= page;
      var okTo = it.toPage === null || it.toPage === undefined || it.toPage >= page;
      if (okFrom && okTo) {
        if (!best) best = it;
        else {
          // 取起始页最大的一条（最新的）
          var a = best.fromPage === null ? -1 : best.fromPage;
          var b = it.fromPage === null ? -1 : it.fromPage;
          if (b > a) best = it;
        }
      }
    }
    return best;
  }

  /** 地理信息是可以延续的：当前页没有记录时，退回最近一条已开始的地点 */
  function effectiveEntry(list, page) {
    if (!list || !list.length) return null;
    var a = activeEntry(list, page);
    if (a) return a;
    var best = null;
    for (var i = 0; i < list.length; i++) {
      var it = list[i];
      if (it.fromPage === null || it.fromPage === undefined || it.fromPage <= page) {
        var cur = best && best.fromPage !== null && best.fromPage !== undefined ? best.fromPage : -1;
        var cand = it.fromPage === null || it.fromPage === undefined ? -1 : it.fromPage;
        if (!best || cand > cur) best = it;
      }
    }
    return best || list[0];
  }

  function clusterOf(book, ch, mode, page) {
    var loc, fac, idx, span, label;
    switch (mode) {
      case 'place':
        loc = effectiveEntry(ch.locations, page);
        if (!loc) return { key: '未知地点', label: '未记录地点' };
        label = loc.place || loc.city || '未知地点';
        return { key: label, label: label };
      case 'placeRoot':
        loc = effectiveEntry(ch.locations, page);
        if (!loc) return { key: '未知地点', label: '未记录地点' };
        label = String(loc.place || loc.city || '未知地点').split(/[·・\/／\-—]/)[0].trim() || '未知地点';
        return { key: label, label: label };
      case 'location':
        loc = effectiveEntry(ch.locations, page);
        if (!loc) return { key: '未知城市', label: '未记录城市' };
        label = loc.city || loc.place || '未知城市';
        return { key: label, label: label };
      case 'country':
        loc = effectiveEntry(ch.locations, page);
        if (!loc || !loc.country) return { key: '未知国家', label: '未记录国家/地区' };
        return { key: loc.country, label: loc.country };
      case 'faction':
        fac = effectiveEntry(ch.factions, page) || ch.factions[ch.factions.length - 1];
        if (!fac) return { key: '未属阵营', label: '未记录阵营' };
        label = fac.name || fac.group || '未属阵营';
        return { key: label, label: label + (fac.group && fac.group !== label ? '（' + fac.group + '）' : '') };
      case 'factionGroup':
        fac = effectiveEntry(ch.factions, page) || ch.factions[ch.factions.length - 1];
        if (!fac) return { key: '未属势力', label: '未记录势力' };
        label = fac.group || fac.name || '未属势力';
        return { key: label, label: label };
      case 'factionAtPage':
        fac = activeEntry(ch.factions, page);
        if (!fac) return { key: '此页无阵营', label: '此页无阵营（未登场 / 已退场）' };
        return { key: fac.name || '未定', label: (fac.name || '未定') + (fac.group ? '（' + fac.group + '）' : '') };
      case 'group':
        if (!ch.groups.length) return { key: '未分组', label: '未加标签' };
        return { key: ch.groups[0], label: ch.groups[0] };
      case 'role':
        return { key: ch.role || '未写身份', label: ch.role || '未写身份' };
      case 'firstPage': {
        if (ch.firstPage === null) return { key: '未知', label: '首次出场未知' };
        span = Math.max(1, Store.pageBounds(book).max);
        idx = Math.min(8, Math.max(0, Math.floor((ch.firstPage - 1) / (span / 8 || 1))));
        label = PAGE_STAGE_LABELS[idx] + '（P' + ch.firstPage + '）';
        return { key: 'stage-' + idx, label: label };
      }
      default:
        return null;
    }
  }

  function buildClusters(book, mode, page) {
    var map = {};
    var order = [];
    var byChar = {};
    if (mode === 'none') {
      return { list: [], byChar: byChar, colorOf: function () { return '#5aa2ff'; } };
    }
    book.characters.forEach(function (ch) {
      var c = clusterOf(book, ch, mode, page);
      if (!c) return;
      byChar[ch.id] = c.key;
      if (!map[c.key]) {
        map[c.key] = { key: c.key, label: c.label, members: [], color: clusterColor(c.key) };
        order.push(c.key);
      }
      map[c.key].members.push(ch.id);
    });
    var list = order.map(function (k) { return map[k]; });
    list.sort(function (a, b) { return b.members.length - a.members.length; });
    return {
      list: list,
      byChar: byChar,
      colorOf: function (charId) {
        var k = byChar[charId];
        return k && map[k] ? map[k].color : '#5aa2ff';
      }
    };
  }

  // ---------------------------------------------------------------- store
  var Store = {
    REL_CATEGORIES: REL_CATEGORIES,
    NAME_TYPES: NAME_TYPES,
    REL_TYPE_PRESETS: REL_TYPE_PRESETS,
    uid: uid,
    num: num,
    categoryColor: categoryColor,
    clusterColor: clusterColor,
    buildClusters: buildClusters,
    clusterOf: clusterOf,
    activeEntry: activeEntry,
    effectiveEntry: effectiveEntry,

    state: null,
    _listeners: [],

    init: function () {
      var raw = null;
      try {
        global.localStorage.setItem('bookatlas.probe', '1');
        global.localStorage.removeItem('bookatlas.probe');
        this.storageOk = true;
      } catch (e) {
        this.storageOk = false;
      }
      try { raw = global.localStorage.getItem(STORAGE_KEY); } catch (e) { raw = null; }
      if (raw) {
        try {
          var parsed = JSON.parse(raw);
          this.state = {
            version: 1,
            activeBookId: parsed.activeBookId || null,
            ui: parsed.ui || {},
            books: (parsed.books || []).map(normalizeBook)
          };
        } catch (e) { this.state = null; }
      }
      if (!this.state || !this.state.books.length) {
        var b = emptyBook({ title: '', totalPages: 300, currentPage: 1 });
        this.state = { version: 1, activeBookId: b.id, ui: {}, books: [b] };
      }
      var d = this.state.ui;
      if (d.clusterMode === undefined) d.clusterMode = 'placeRoot';
      if (d.showLabels === undefined) d.showLabels = true;
      if (d.showAliases === undefined) d.showAliases = false;
      if (d.filterByPage === undefined) d.filterByPage = true;
      if (d.showHulls === undefined) d.showHulls = true;
      if (d.showEnding === undefined) d.showEnding = false;
      if (d.sortBy === undefined) d.sortBy = 'page';
      if (!this.book()) this.state.activeBookId = this.state.books[0].id;
      return this;
    },

    subscribe: function (fn) { this._listeners.push(fn); },
    emit: function (reason, payload) {
      var self = this;
      this.save();
      this._listeners.forEach(function (fn) {
        try { fn(reason, payload, self); } catch (e) { console.error(e); }
      });
    },

    _saveTimer: null,
    save: function () {
      var self = this;
      if (!this.storageOk) return;
      if (this._saveTimer) clearTimeout(this._saveTimer);
      this._saveTimer = setTimeout(function () {
        self._saveTimer = null;
        try {
          global.localStorage.setItem(STORAGE_KEY, JSON.stringify(self.state));
        } catch (e) {
          console.warn('保存失败（本地存储可能已满）', e);
        }
      }, 180);
    },

    saveNow: function () {
      if (this._saveTimer) { clearTimeout(this._saveTimer); this._saveTimer = null; }
      if (!this.storageOk) return;
      try { global.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state)); }
      catch (e) { console.warn('保存失败', e); }
    },

    ui: function () { return this.state.ui; },
    setUi: function (patch, reason) {
      Object.keys(patch).forEach(function (k) { Store.state.ui[k] = patch[k]; });
      this.emit(reason || 'ui');
    },

    books: function () { return this.state.books; },

    book: function (id) {
      var bid = id || this.state.activeBookId;
      for (var i = 0; i < this.state.books.length; i++) {
        if (this.state.books[i].id === bid) return this.state.books[i];
      }
      return this.state.books[0] || null;
    },

    setActiveBook: function (id) {
      if (!this.book(id)) return;
      this.state.activeBookId = id;
      this.emit('book:switch');
    },

    createBook: function (meta) {
      var b = normalizeBook({ meta: meta || {} });
      b.meta.title = str(b.meta.title) || '未命名书目';
      this.state.books.push(b);
      this.state.activeBookId = b.id;
      this.emit('book:create', { book: b });
      return b;
    },

    duplicateBook: function (id) {
      var src = this.book(id);
      if (!src) return null;
      var copy = clone(src);
      copy.id = uid('book');
      copy.meta.title = src.meta.title + '（副本）';
      // 重新生成 id 并映射关系
      var mapIds = {};
      copy.characters.forEach(function (c) {
        var old = c.id; c.id = uid('c'); mapIds[old] = c.id;
      });
      copy.relations = copy.relations.map(function (r) {
        r.id = uid('r');
        r.from = mapIds[r.from]; r.to = mapIds[r.to];
        return r;
      }).filter(function (r) { return r.from && r.to; });
      this.state.books.push(copy);
      this.state.activeBookId = copy.id;
      this.emit('book:create', { book: copy });
      return copy;
    },

    deleteBook: function (id) {
      var i = this.state.books.findIndex(function (b) { return b.id === id; });
      if (i < 0) return;
      this.state.books.splice(i, 1);
      if (!this.state.books.length) {
        var b = emptyBook({ title: '', totalPages: 300, currentPage: 1 });
        this.state.books.push(b);
      }
      if (this.state.activeBookId === id) this.state.activeBookId = this.state.books[0].id;
      this.emit('book:delete');
    },

    updateMeta: function (patch, bookId) {
      var b = this.book(bookId);
      if (!b) return;
      Object.keys(patch).forEach(function (k) {
        b.meta[k] = (k === 'totalPages' || k === 'currentPage') ? num(patch[k]) : patch[k];
      });
      if (b.meta.currentPage === null || b.meta.currentPage < 1) b.meta.currentPage = 1;
      this.emit('meta:update', { book: b });
    },

    setCurrentPage: function (p) {
      var b = this.book();
      if (!b) return;
      var bounds = this.pageBounds(b);
      p = Math.max(bounds.min, Math.min(bounds.max, Math.round(num(p) || 1)));
      if (b.meta.currentPage === p) return;
      b.meta.currentPage = p;
      this.emit('page:change', { page: p });
    },

    // -------------------------------------------------- characters
    findCharacterByName: function (name) {
      var b = this.book();
      if (!b) return null;
      var q = unicase(name);
      if (!q) return null;
      for (var i = 0; i < b.characters.length; i++) {
        var c = b.characters[i];
        if (unicase(c.primaryName) === q) return c;
        for (var j = 0; j < c.names.length; j++) {
          if (unicase(c.names[j].text) === q) return c;
        }
      }
      return null;
    },

    /** 核心：读到一个人名就调用它 */
    captureName: function (name, opts) {
      opts = opts || {};
      var b = this.book();
      name = str(name).trim();
      if (!b || !name) return null;
      var page = num(opts.page);
      var existing = this.findCharacterByName(name);
      if (existing) {
        var addedAlias = false;
        if (unicase(existing.primaryName) !== unicase(name)) {
          var dup = existing.names.some(function (n) { return unicase(n.text) === unicase(name); });
          if (!dup) {
            existing.names.push({ text: name, type: opts.nameType || '别名', note: '' });
            addedAlias = true;
          }
        }
        if (page !== null) this.addAppearance(existing.id, page, true);
        if (existing.firstPage === null && page !== null) existing.firstPage = page;
        this.emit('char:capture', { character: existing, created: false, addedAlias: addedAlias, page: page });
        return { character: existing, created: false, addedAlias: addedAlias };
      }
      var first = num(opts.firstPage);
      if (first === null) first = page;
      var c = newCharacter(name, first);
      if (opts.role) c.role = str(opts.role);
      if (opts.gender) c.gender = str(opts.gender);
      if (opts.place || opts.city || opts.country) {
        c.locations.push({
          place: str(opts.place), city: str(opts.city), country: str(opts.country),
          fromPage: first, toPage: null, note: ''
        });
      }
      if (opts.faction) {
        c.factions.push({ name: str(opts.faction), group: '', fromPage: first, toPage: null, note: '' });
      }
      b.characters.push(c);
      this.emit('char:create', { character: c });
      return { character: c, created: true, addedAlias: false };
    },

    addAppearance: function (charId, page, quiet) {
      var b = this.book();
      if (!b) return;
      var c = this.character(charId);
      if (!c) return;
      var p = num(page);
      if (p === null) return;
      if (c.appearances.indexOf(p) === -1) {
        c.appearances.push(p);
        c.appearances.sort(function (a, b2) { return a - b2; });
      }
      if (c.firstPage === null || p < c.firstPage) c.firstPage = p;
      if (!quiet) this.emit('char:update', { character: c });
    },

    character: function (id) {
      var b = this.book();
      if (!b) return null;
      for (var i = 0; i < b.characters.length; i++) if (b.characters[i].id === id) return b.characters[i];
      return null;
    },

    updateCharacter: function (id, patch) {
      var c = this.character(id);
      if (!c) return;
      Object.keys(patch).forEach(function (k) { c[k] = patch[k]; });
      this.emit('char:update', { character: c });
    },

    patchCharacterField: function (id, field, value) {
      var c = this.character(id);
      if (!c) return;
      c[field] = value;
      this.emit('char:update', { character: c, silent: true });
    },

    deleteCharacter: function (id) {
      var b = this.book();
      if (!b) return;
      b.characters = b.characters.filter(function (c) { return c.id !== id; });
      b.relations = b.relations.filter(function (r) { return r.from !== id && r.to !== id; });
      this.emit('char:delete', { id: id });
    },

    // -------------------------------------------------- relations
    relationsOf: function (charId) {
      var b = this.book();
      if (!b) return [];
      return b.relations.filter(function (r) { return r.from === charId || r.to === charId; });
    },

    addRelation: function (data) {
      var b = this.book();
      if (!b) return null;
      if (!data || !data.from || !data.to || data.from === data.to) return null;
      var dup = b.relations.some(function (r) {
        return r.from === data.from && r.to === data.to && r.type === str(data.type);
      });
      if (dup) return null;
      var r = normalizeRelation({
        from: data.from, to: data.to, type: data.type, category: data.category,
        sincePage: data.sincePage, untilPage: data.untilPage, directed: data.directed, note: data.note
      });
      r.id = uid('r');
      b.relations.push(r);
      this.emit('rel:create', { relation: r });
      return r;
    },

    updateRelation: function (id, patch) {
      var b = this.book();
      if (!b) return;
      var r = null;
      for (var i = 0; i < b.relations.length; i++) if (b.relations[i].id === id) r = b.relations[i];
      if (!r) return;
      Object.keys(patch).forEach(function (k) { r[k] = patch[k]; });
      this.emit('rel:update', { relation: r });
    },

    deleteRelation: function (id) {
      var b = this.book();
      if (!b) return;
      b.relations = b.relations.filter(function (r) { return r.id !== id; });
      this.emit('rel:delete', { id: id });
    },

    // -------------------------------------------------- derived
    pageBounds: function (book) {
      book = book || this.book();
      var max = num(book && book.meta && book.meta.totalPages) || 0;
      if (!book) return { min: 1, max: Math.max(1, max) };
      function bump(v) { if (v !== null && v !== undefined && isFinite(v) && v > max) max = v; }
      book.characters.forEach(function (c) {
        bump(c.firstPage); bump(c.endingPage);
        c.appearances.forEach(bump);
        c.experiences.forEach(function (e) { bump(e.fromPage); bump(e.toPage); });
        c.locations.forEach(function (l) { bump(l.fromPage); bump(l.toPage); });
        c.factions.forEach(function (f) { bump(f.fromPage); bump(f.toPage); });
      });
      book.relations.forEach(function (r) { bump(r.sincePage); bump(r.untilPage); });
      return { min: 1, max: Math.max(1, max) };
    },

    edgeActiveAt: function (r, page) {
      var okFrom = r.sincePage === null || r.sincePage === undefined || r.sincePage <= page;
      var okTo = r.untilPage === null || r.untilPage === undefined || r.untilPage >= page;
      return okFrom && okTo;
    },

    appearedAt: function (c, page) {
      if (c.firstPage === null) return true;
      return c.firstPage <= page;
    },

    stats: function (book) {
      book = book || this.book();
      var out = {
        characters: book.characters.length,
        relations: book.relations.length,
        aliases: 0,
        cities: {},
        countries: {},
        factions: {},
        withEnding: 0,
        maxPage: this.pageBounds(book).max
      };
      book.characters.forEach(function (c) {
        out.aliases += c.names.length;
        if (c.ending) out.withEnding++;
        c.locations.forEach(function (l) {
          if (l.city) out.cities[l.city] = 1;
          if (l.country) out.countries[l.country] = 1;
        });
        c.factions.forEach(function (f) { if (f.name) out.factions[f.name] = 1; });
      });
      out.cityCount = Object.keys(out.cities).length;
      out.countryCount = Object.keys(out.countries).length;
      out.factionCount = Object.keys(out.factions).length;
      return out;
    },

    allRelationTypes: function (book) {
      book = book || this.book();
      var seen = {};
      var out = REL_TYPE_PRESETS.slice();
      book.relations.forEach(function (r) { if (r.type) seen[r.type] = 1; });
      Object.keys(seen).forEach(function (t) { if (out.indexOf(t) === -1) out.push(t); });
      return out;
    },

    // -------------------------------------------------- io
    exportJson: function () {
      return JSON.stringify(this.state, null, 2);
    },

    importJson: function (text, mode) {
      var data = JSON.parse(text);
      var books = [];
      if (data && Array.isArray(data.books)) books = data.books;
      else if (Array.isArray(data)) books = data;
      else if (data && data.characters) books = [data];
      else throw new Error('无法识别的 JSON 结构');
      var added = [];
      books.forEach(function (b) {
        var nb = normalizeBook(b);
        if (mode === 'replace') {
          var exist = Store.state.books.findIndex(function (x) { return x.meta.title === nb.meta.title; });
          if (exist >= 0) Store.state.books.splice(exist, 1);
        }
        nb.id = uid('book');
        Store.state.books.push(nb);
        added.push(nb);
      });
      if (added.length) this.state.activeBookId = added[added.length - 1].id;
      this.emit('import', { books: added });
      return added;
    },

    loadSamples: function () {
      var samples = global.SAMPLE_BOOKS || [];
      var added = [];
      samples.forEach(function (s) {
        var nb = normalizeBook(clone(s));
        var existIdx = Store.state.books.findIndex(function (x) { return x.meta.title === nb.meta.title; });
        if (existIdx >= 0) Store.state.books.splice(existIdx, 1);
        nb.id = uid('book');
        Store.state.books.push(nb);
        added.push(nb);
      });
      // 丢掉从未使用的空书目
      Store.state.books = Store.state.books.filter(function (b) {
        return b.characters.length || b.meta.title;
      });
      if (!Store.state.books.length) Store.state.books.push(emptyBook({ title: '', totalPages: 300 }));
      if (added.length) this.state.activeBookId = added[0].id;
      this.emit('samples', { books: added });
      return added;
    },

    clearBookData: function () {
      var b = this.book();
      if (!b) return;
      b.characters = [];
      b.relations = [];
      this.emit('clear');
    }
  };

  global.Store = Store;
})(window);
