/* 书中人 · Book Atlas — 拓扑图引擎
 * 无第三方依赖：自写聚类布局 + 力导向模拟 + SVG 渲染
 */
(function (global) {
  'use strict';

  var SVGNS = 'http://www.w3.org/2000/svg';

  // 导出 SVG / PNG 时内联的样式（避免丢失外部 CSS）
  var INLINE_STYLE = [
    '.hull-path{fill-opacity:.09;stroke-opacity:.42;stroke-width:1.4;stroke-dasharray:5 5;}',
    '.hull-label{font:600 12px "PingFang SC","Microsoft YaHei",sans-serif;fill:#cbd8f5;}',
    '.hull-label-sub{font:400 10.5px "PingFang SC","Microsoft YaHei",sans-serif;fill:#8fa3cd;}',
    '.edge-line{fill:none;stroke-opacity:.55;}',
    '.edge-label{font:400 10.5px "PingFang SC","Microsoft YaHei",sans-serif;fill:#b6c6e8;text-anchor:middle;}',
    '.node-name{font:400 12px "PingFang SC","Microsoft YaHei",sans-serif;fill:#eaf0ff;text-anchor:middle;}',
    '.node-sub{font:400 10px "PingFang SC","Microsoft YaHei",sans-serif;fill:#93a6cc;text-anchor:middle;}'
  ].join('\n');

  function el(name, attrs) {
    var e = document.createElementNS(SVGNS, name);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (attrs[k] !== null && attrs[k] !== undefined) e.setAttribute(k, attrs[k]);
      });
    }
    return e;
  }

  function svgText(x, y, text, cls) {
    var t = el('text', { x: x, y: y, 'class': cls });
    t.textContent = text;
    return t;
  }

  /* ------------------------------------------------------------ 凸包 */
  function convexHull(pts) {
    if (pts.length < 3) return pts.slice();
    var p = pts.slice().sort(function (a, b) { return a.x - b.x || a.y - b.y; });
    var cross = function (o, a, b) {
      return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
    };
    var lower = [];
    for (var i = 0; i < p.length; i++) {
      while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p[i]) <= 0) lower.pop();
      lower.push(p[i]);
    }
    var upper = [];
    for (var j = p.length - 1; j >= 0; j--) {
      while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p[j]) <= 0) upper.pop();
      upper.push(p[j]);
    }
    lower.pop(); upper.pop();
    return lower.concat(upper);
  }

  function smoothClosedPath(pts) {
    if (!pts.length) return '';
    if (pts.length === 1) {
      var c = pts[0];
      return 'M' + (c.x - 30) + ',' + c.y + 'a30,30 0 1,0 60,0a30,30 0 1,0 -60,0';
    }
    if (pts.length === 2) {
      return 'M' + pts[0].x + ',' + pts[0].y + 'L' + pts[1].x + ',' + pts[1].y;
    }
    var d = '';
    var n = pts.length;
    for (var i = 0; i < n; i++) {
      var p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
      var c1x = p1.x + (p2.x - p0.x) / 6, c1y = p1.y + (p2.y - p0.y) / 6;
      var c2x = p2.x - (p3.x - p1.x) / 6, c2y = p2.y - (p3.y - p1.y) / 6;
      if (i === 0) d += 'M' + p1.x.toFixed(1) + ',' + p1.y.toFixed(1);
      d += 'C' + c1x.toFixed(1) + ',' + c1y.toFixed(1) + ' ' + c2x.toFixed(1) + ',' + c2y.toFixed(1) +
        ' ' + p2.x.toFixed(1) + ',' + p2.y.toFixed(1);
    }
    return d + 'Z';
  }

  function centroid(pts) {
    var x = 0, y = 0;
    pts.forEach(function (p) { x += p.x; y += p.y; });
    return { x: x / (pts.length || 1), y: y / (pts.length || 1) };
  }

  /* ------------------------------------------------------------ 聚类摆放 */
  function clusterRadius(n) {
    return 40 + 31 * Math.sqrt(n);
  }

  function packClusterCenters(clusters) {
    var centers = {};
    if (!clusters.length) return centers;
    var i, c, r, d, a;
    if (clusters.length === 1) {
      c = clusters[0];
      centers[c.key] = { x: 0, y: 0, _R: clusterRadius(c.members.length), _n: c.members.length };
      return centers;
    }
    var area = 0;
    var gap = 80;
    for (i = 0; i < clusters.length; i++) {
      c = clusters[i];
      r = clusterRadius(c.members.length);
      if (i === 0) {
        centers[c.key] = { x: 0, y: 0, _R: r, _n: c.members.length };
        area = Math.pow(r + gap, 2);
        continue;
      }
      d = Math.sqrt(area / Math.PI) * 1.55 + r + gap;
      a = i * 2.39996323; // 黄金角螺旋
      centers[c.key] = { x: Math.cos(a) * d, y: Math.sin(a) * d, _R: r, _n: c.members.length };
      area += Math.pow(r + gap, 2);
    }
    // 以重心归零
    var keys = Object.keys(centers);
    var cx = 0, cy = 0;
    keys.forEach(function (k) { cx += centers[k].x; cy += centers[k].y; });
    cx /= keys.length; cy /= keys.length;
    keys.forEach(function (k) { centers[k].x -= cx; centers[k].y -= cy; });
    return centers;
  }

  /* ------------------------------------------------------------ Graph */
  var Graph = {
    svg: null,
    viewport: null,
    layers: {},
    nodes: [],
    edges: [],
    clusters: [],
    clusterCenters: {},
    colorOf: function () { return '#5aa2ff'; },
    options: {},
    alpha: 0,
    ticks: 0,
    transform: { x: 0, y: 0, k: 1 },
    selectedId: null,
    hoverId: null,
    _raf: null,
    _nodeEls: {},
    _edgeEls: {},
    _hullEls: {},
    onSelect: null,
    onHover: null,

    init: function (svg) {
      this.svg = svg;
      this.viewport = svg.querySelector('#viewport');
      this.layers.hull = svg.querySelector('#layerHull');
      this.layers.edge = svg.querySelector('#layerEdge');
      this.layers.node = svg.querySelector('#layerNode');
      this.defs = svg.querySelector('#graphDefs');
      this._bindEvents();
      this._resize();
      var self = this;
      global.addEventListener('resize', function () { self._resize(); });
      if (global.ResizeObserver) {
        new global.ResizeObserver(function () { self._resize(); }).observe(svg.parentNode);
      }
      return this;
    },

    _resize: function () {
      var r = this.svg.parentNode.getBoundingClientRect();
      this.width = Math.max(200, r.width);
      this.height = Math.max(200, r.height);
      this.svg.setAttribute('viewBox', '0 0 ' + this.width + ' ' + this.height);
    },

    /* ------------------------------------------------ data in */
    setData: function (data) {
      var self = this;
      var opts = data.options || {};
      this.options = opts;
      this.colorOf = data.colorOf || function () { return '#5aa2ff'; };
      this.clusters = data.clusters || [];
      this.clusterCenters = packClusterCenters(this.clusters);
      // 让分组沿着画布更宽的方向铺开
      var aspect = Math.max(0.9, Math.min(1.9, (this.width || 1000) / (this.height || 700)));
      Object.keys(this.clusterCenters).forEach(function (k) { self.clusterCenters[k].x *= aspect; });

      var old = {};
      this.nodes.forEach(function (n) { old[n.id] = n; });

      var degree = {};
      data.edges.forEach(function (e) {
        if (e.hidden) return;
        degree[e.source] = (degree[e.source] || 0) + 1;
        degree[e.target] = (degree[e.target] || 0) + 1;
      });

      var newNodeCount = 0;
      this.nodes = data.nodes.map(function (d) {
        var prev = old[d.id];
        var deg = degree[d.id] || 0;
        var apps = d.char.appearances ? d.char.appearances.length : 0;
        var r = Math.min(40, 11 + 2.4 * Math.sqrt(apps) + 1.5 * deg);
        var ck = d.clusterKey || '__all__';
        var center = self.clusterCenters[ck] || { x: 0, y: 0, _R: 160 };
        var spread = Math.min(center._R || 160, 150) * 0.85;
        var n = {
          id: d.id,
          char: d.char,
          r: r,
          clusterKey: ck,
          dim: !!d.dim,
          color: d.color || self.colorOf(d.id),
          x: prev ? prev.x : center.x + (Math.random() - 0.5) * spread,
          y: prev ? prev.y : center.y + (Math.random() - 0.5) * spread,
          vx: 0, vy: 0,
          fixed: prev ? prev.fixed : false
        };
        newNodeCount++;
        return n;
      });

      var byId = {};
      this.nodes.forEach(function (n) { byId[n.id] = n; });

      this.edges = data.edges.filter(function (e) { return !e.hidden; }).map(function (e) {
        return {
          id: e.id,
          rel: e.rel,
          source: byId[e.source],
          target: byId[e.target],
          color: e.color,
          label: e.label,
          dim: !!e.dim,
          hot: false
        };
      }).filter(function (e) { return e.source && e.target; });

      // 同一对人物之间的多条关系（父子+君臣…）错开成弧线，避免完全重叠
      var pairs = {};
      this.edges.forEach(function (e) {
        var k = e.source.id < e.target.id ? e.source.id + '|' + e.target.id : e.target.id + '|' + e.source.id;
        (pairs[k] = pairs[k] || []).push(e);
      });
      Object.keys(pairs).forEach(function (k) {
        var g = pairs[k];
        g.forEach(function (e, i) {
          e.curve = g.length > 1 ? (i - (g.length - 1) / 2) * 44 : 0;
        });
      });

      // 节点集合 / 聚类归属变化 → 决定重新加热的力度
      var sameSet = Object.keys(old).length === this.nodes.length &&
        this.nodes.every(function (n) { return !!old[n.id]; });
      var sig = this.nodes.map(function (n) { return n.id + '@' + n.clusterKey; }).sort().join(',');
      var clusterChanged = this._clusterSig !== undefined && this._clusterSig !== sig;
      this._clusterSig = sig;
      this.alpha = !sameSet ? 1 : (clusterChanged ? 0.6 : Math.max(this.alpha, 0.1));
      this.ticks = 0;
      this.start();
      return this;
    },

    relayout: function () {
      var self = this;
      this.nodes.forEach(function (n) {
        var c = self.clusterCenters[n.clusterKey] || { x: 0, y: 0, _R: 170 };
        var spread = Math.min(c._R || 170, 150) * 0.9;
        n.x = c.x + (Math.random() - 0.5) * spread;
        n.y = c.y + (Math.random() - 0.5) * spread;
        n.vx = n.vy = 0;
        n.fixed = false;
      });
      this.alpha = 1;
      this.ticks = 0;
      this.start();
      return this;
    },

    /* ------------------------------------------------ simulation */
    start: function () {
      var self = this;
      if (this._raf) return;
      var step = function () {
        self._raf = null;
        if (self.alpha > 0.005 && self.ticks < 1400) {
          self._tick();
          self._raf = global.requestAnimationFrame(step);
        } else {
          self.render();
        }
      };
      this._raf = global.requestAnimationFrame(step);
    },

    _tick: function () {
      var nodes = this.nodes;
      var edges = this.edges;
      var n = nodes.length;
      var a = this.alpha;
      var i, j, dx, dy, d2, d, f, fx, fy;
      var REP = 3600;       // 斥力强度
      var CUT = 700;        // 斥力截断
      var SPRING = 0.02;    // 关系弹簧
      var CLUSTER_PULL = 0.03;
      var GRAVITY = 0.0012;
      var DAMP = 0.74;
      var MAXV = 24;

      var force = {};
      for (i = 0; i < n; i++) force[nodes[i].id] = { x: 0, y: 0 };

      // 斥力 + 碰撞
      for (i = 0; i < n; i++) {
        var ni = nodes[i];
        for (j = i + 1; j < n; j++) {
          var nj = nodes[j];
          dx = nj.x - ni.x; dy = nj.y - ni.y;
          d2 = dx * dx + dy * dy;
          if (d2 > CUT * CUT || d2 < 1e-6) { if (d2 < 1e-6) { dx = (Math.random() - .5) * 2; dy = (Math.random() - .5) * 2; d2 = 1; } else continue; }
          d = Math.sqrt(d2);
          f = REP / d2;
          var minD = ni.r + nj.r + 20;
          if (d < minD) f += (minD - d) * 3.2;   // 硬碰撞
          fx = (dx / d) * f; fy = (dy / d) * f;
          force[ni.id].x -= fx; force[ni.id].y -= fy;
          force[nj.id].x += fx; force[nj.id].y += fy;
        }
      }

      // 关系弹簧
      for (i = 0; i < edges.length; i++) {
        var e = edges[i];
        if (e.dim) continue;
        var s = e.source, t = e.target;
        dx = t.x - s.x; dy = t.y - s.y;
        d = Math.sqrt(dx * dx + dy * dy) || 1;
        var len = s.r + t.r + 78;
        f = (d - len) * SPRING;
        fx = (dx / d) * f; fy = (dy / d) * f;
        force[s.id].x += fx; force[s.id].y += fy;
        force[t.id].x -= fx; force[t.id].y -= fy;
      }

      // 聚类引力 + 全局重力
      for (i = 0; i < n; i++) {
        var nd = nodes[i];
        var c = this.clusterCenters[nd.clusterKey];
        if (c) {
          force[nd.id].x += (c.x - nd.x) * CLUSTER_PULL * (1 + Math.min(2.2, (c._n || 1) * 0.06));
          force[nd.id].y += (c.y - nd.y) * CLUSTER_PULL * (1 + Math.min(2.2, (c._n || 1) * 0.06));
        }
        force[nd.id].x += -nd.x * GRAVITY;
        force[nd.id].y += -nd.y * GRAVITY;
      }

      // 积分 + 聚类范围约束
      for (i = 0; i < n; i++) {
        var m = nodes[i];
        if (m.fixed) { m.vx = m.vy = 0; continue; }
        var F = force[m.id];
        m.vx = (m.vx + F.x * a) * DAMP;
        m.vy = (m.vy + F.y * a) * DAMP;
        var sp = Math.sqrt(m.vx * m.vx + m.vy * m.vy);
        if (sp > MAXV) { m.vx = m.vx / sp * MAXV; m.vy = m.vy / sp * MAXV; }
        m.x += m.vx; m.y += m.vy;

        var cc = this.clusterCenters[m.clusterKey];
        if (cc && cc._R) {
          var ox = m.x - cc.x, oy = m.y - cc.y;
          var od = Math.sqrt(ox * ox + oy * oy);
          var lim = Math.max(24, cc._R - m.r * 0.4);
          if (od > lim) {
            m.x = cc.x + ox / od * lim;
            m.y = cc.y + oy / od * lim;
            m.vx *= 0.25; m.vy *= 0.25;
          }
        }
      }

      this.alpha *= 0.972;
      this.ticks++;
      if (this.ticks % 2 === 0) this.render();
    },

    /* ------------------------------------------------ render */
    render: function () {
      this._renderHulls();
      this._renderEdges();
      this._renderNodes();
      this._applyTransform();
    },

    _key: function () {
      // 数据指纹，用于判断是否需要重建 DOM
      return this.nodes.map(function (n) { return n.id; }).join('|') + '::' +
        this.edges.map(function (e) { return e.id; }).join('|') + '::' +
        this.options.showLabels + this.options.showAliases + this.options.showHulls +
        this.options.showEnding + this.clusters.length;
    },

    _renderNodes: function () {
      var self = this;
      var layer = this.layers.node;
      var key = this._key();
      if (this._nodeKey !== key) {
        while (layer.firstChild) layer.removeChild(layer.firstChild);
        this._nodeEls = {};
        this.nodes.forEach(function (n) {
          var g = el('g', { 'class': 'node', 'data-id': n.id });
          var ring = el('circle', { 'class': 'ending-ring', r: n.r + 5, cx: 0, cy: 0 });
          ring.style.display = (self.options.showEnding && n.char.ending) ? '' : 'none';
          var c = el('circle', { r: n.r, cx: 0, cy: 0 });
          c.setAttribute('fill', n.color);
          var name = svgText(0, n.r + 15, n.char.primaryName, 'node-name');
          g.appendChild(ring); g.appendChild(c); g.appendChild(name);
          if (self.options.showAliases && n.char.names && n.char.names.length) {
            var alias = n.char.names.slice(0, 2).map(function (x) { return x.text; }).join(' / ');
            g.appendChild(svgText(0, n.r + 28, alias, 'node-sub'));
          }
          g.appendChild(el('title', {})).textContent = n.char.primaryName;
          layer.appendChild(g);
          self._nodeEls[n.id] = g;
        });
        this._nodeKey = key;
      }
      var sel = this.selectedId;
      var hood = this._neighborhood();
      this.nodes.forEach(function (n) {
        var g = self._nodeEls[n.id];
        if (!g) return;
        g.setAttribute('transform', 'translate(' + n.x.toFixed(1) + ',' + n.y.toFixed(1) + ')');
        var cls = 'node';
        if (n.id === sel) cls += ' selected';
        if (hood && !hood[n.id]) cls += ' dim';
        if (n.dim && !hood) cls += ' dim';
        g.setAttribute('class', cls);
      });
    },

    _renderEdges: function () {
      var self = this;
      var layer = this.layers.edge;
      var key = this._key();
      if (this._edgeKey !== key) {
        while (layer.firstChild) layer.removeChild(layer.firstChild);
        Array.prototype.slice.call(this.defs.querySelectorAll('marker')).forEach(function (m) {
          m.parentNode.removeChild(m);
        });
        this._edgeEls = {};
        this.edges.forEach(function (e, i) {
          var mid = 'arrow-' + i + '-' + e.id.replace(/[^a-zA-Z0-9-]/g, '');
          var mk = el('marker', {
            id: mid, viewBox: '0 0 10 10', refX: 9, refY: 5,
            markerWidth: 6, markerHeight: 6, orient: 'auto-start-reverse'
          });
          var mp = el('path', { d: 'M 0 0 L 10 5 L 0 10 z' });
          mp.setAttribute('fill', e.color || '#94a3b8');
          mk.appendChild(mp);
          self.defs.appendChild(mk);

          var g = el('g', { 'class': 'edge', 'data-id': e.id });
          var line = el('path', { 'class': 'edge-line', 'marker-end': 'url(#' + mid + ')' });
          line.setAttribute('stroke', e.color || '#94a3b8');
          g.appendChild(line);
          var label = null;
          if (self.options.showLabels && e.label) {
            label = svgText(0, 0, e.label, 'edge-label');
            g.appendChild(label);
          }
          layer.appendChild(g);
          self._edgeEls[e.id] = { g: g, line: line, label: label, marker: mk };
        });
        this._edgeKey = key;
      }
      var hood = this._neighborhood();
      var sel = this.selectedId;
      this.edges.forEach(function (e) {
        var ref = self._edgeEls[e.id];
        if (!ref) return;
        var s = e.source, t = e.target;
        var dx = t.x - s.x, dy = t.y - s.y;
        var d = Math.sqrt(dx * dx + dy * dy) || 1;
        var ux = dx / d, uy = dy / d;
        var x1 = s.x + ux * (s.r + 2), y1 = s.y + uy * (s.r + 2);
        var x2 = t.x - ux * (t.r + 7), y2 = t.y - uy * (t.r + 7);
        if (d < s.r + t.r + 8) { x2 = t.x - ux * (t.r * 0.4); y2 = t.y - uy * (t.r * 0.4); }
        var midX = (x1 + x2) / 2, midY = (y1 + y2) / 2;
        var dpath, lx, ly;
        if (e.curve) {
          var cx = midX - uy * e.curve, cy = midY + ux * e.curve;
          dpath = 'M' + x1.toFixed(1) + ',' + y1.toFixed(1) + 'Q' + cx.toFixed(1) + ',' + cy.toFixed(1) + ' ' + x2.toFixed(1) + ',' + y2.toFixed(1);
          lx = (midX + cx) / 2; ly = (midY + cy) / 2;   // 二次贝塞尔 t=0.5 处
        } else {
          dpath = 'M' + x1.toFixed(1) + ',' + y1.toFixed(1) + 'L' + x2.toFixed(1) + ',' + y2.toFixed(1);
          lx = midX; ly = midY;
        }
        ref.line.setAttribute('d', dpath);
        var incident = sel && (e.source.id === sel || e.target.id === sel);
        var inHood = hood && hood[e.source.id] && hood[e.target.id];
        var cls = 'edge-line';
        if (incident) cls += ' hot';
        else if ((hood && !inHood) || (e.dim && !hood)) cls += ' dim';
        ref.line.setAttribute('class', cls);
        ref.line.setAttribute('stroke', e.color || '#94a3b8');
        if (ref.label) {
          ref.label.setAttribute('x', lx.toFixed(1));
          ref.label.setAttribute('y', (ly - 3).toFixed(1));
          ref.label.setAttribute('class', 'edge-label' + (incident ? '' : (hood && !inHood ? ' dim' : (e.dim && !hood ? ' dim' : ''))));
          ref.label.textContent = e.label;
        }
      });
    },

    _renderHulls: function () {
      var layer = this.layers.hull;
      var key = 'hulls:' + this.clusters.map(function (c) { return c.key + c.members.length; }).join(',') +
        ':' + this.options.showHulls + ':' + this._key();
      if (this._hullKey !== key) {
        while (layer.firstChild) layer.removeChild(layer.firstChild);
        this._hullEls = {};
        if (this.options.showHulls) {
          var self = this;
          this.clusters.forEach(function (c) {
            var g = el('g', { 'class': 'hull-group', 'data-key': c.key });
            var path = el('path', { 'class': 'hull-path' });
            path.setAttribute('fill', c.color);
            path.setAttribute('stroke', c.color);
            var label = svgText(0, 0, '', 'hull-label');
            var sub = svgText(0, 0, '', 'hull-label-sub');
            g.appendChild(path); g.appendChild(label); g.appendChild(sub);
            layer.appendChild(g);
            self._hullEls[c.key] = { g: g, path: path, label: label, sub: sub };
          });
        }
        this._hullKey = key;
      }
      if (!this.options.showHulls) return;
      var byId = {};
      this.nodes.forEach(function (n) { byId[n.id] = n; });
      this.clusters.forEach(function (c) {
        var ref = this._hullEls[c.key];
        if (!ref) return;
        var pts = c.members.map(function (id) { return byId[id]; }).filter(Boolean);
        if (!pts.length) {
          ref.g.style.display = 'none';
          return;
        }
        ref.g.style.display = '';
        var pad = 16;
        var hull = convexHull(pts.map(function (p) { return { x: p.x, y: p.y, r: p.r }; }));
        var cen = centroid(hull);
        var expanded = hull.map(function (p) {
          var dx = p.x - cen.x, dy = p.y - cen.y;
          var d = Math.sqrt(dx * dx + dy * dy) || 1;
          var k = (d + pad + (p.r || 0)) / d;
          return { x: cen.x + dx * k, y: cen.y + dy * k };
        });
        ref.path.setAttribute('d', smoothClosedPath(expanded.length ? expanded : hull));
        ref.label.setAttribute('x', cen.x.toFixed(1));
        ref.label.setAttribute('y', (Math.min.apply(null, pts.map(function (p) { return p.y - p.r; })) - 20).toFixed(1));
        ref.label.textContent = c.label;
        var countText = c.members.length + ' 人';
        ref.sub.setAttribute('x', cen.x.toFixed(1));
        ref.sub.setAttribute('y', (Math.min.apply(null, pts.map(function (p) { return p.y - p.r; })) - 4).toFixed(1));
        ref.sub.textContent = countText;
      }, this);
    },

    _applyTransform: function () {
      this.viewport.setAttribute('transform',
        'translate(' + this.transform.x.toFixed(2) + ',' + this.transform.y.toFixed(2) + ') scale(' + this.transform.k.toFixed(3) + ')');
    },

    /* ------------------------------------------------ interaction */
    _neighborhood: function () {
      if (!this.selectedId) return null;
      var id = this.selectedId;
      var map = {};
      map[id] = 1;
      this.edges.forEach(function (e) {
        if (e.source.id === id) map[e.target.id] = 1;
        if (e.target.id === id) map[e.source.id] = 1;
      });
      return map;
    },

    _bindEvents: function () {
      var self = this;
      var svg = this.svg;
      var drag = null;

      function toGraph(evt) {
        var r = svg.getBoundingClientRect();
        return {
          x: (evt.clientX - r.left - self.transform.x) / self.transform.k,
          y: (evt.clientY - r.top - self.transform.y) / self.transform.k
        };
      }

      svg.addEventListener('mousedown', function (evt) {
        var nodeG = evt.target.closest ? evt.target.closest('g.node') : null;
        if (nodeG) {
          var id = nodeG.getAttribute('data-id');
          var n = null;
          self.nodes.forEach(function (x) { if (x.id === id) n = x; });
          if (!n) return;
          drag = { type: 'node', node: n, moved: false, sx: evt.clientX, sy: evt.clientY };
          n.fixed = true;
          self.alpha = Math.max(self.alpha, 0.5);
          svg.classList.add('dragging');
          evt.preventDefault();
          return;
        }
        var hullG = evt.target.closest ? evt.target.closest('g.hull-group') : null;
        drag = { type: 'pan', sx: evt.clientX, sy: evt.clientY, tx: self.transform.x, ty: self.transform.y, hull: hullG };
        svg.classList.add('dragging');
        evt.preventDefault();
      });

      global.addEventListener('mousemove', function (evt) {
        if (!drag) return;
        if (drag.type === 'pan') {
          var dx = evt.clientX - drag.sx, dy = evt.clientY - drag.sy;
          if (Math.abs(dx) + Math.abs(dy) > 3) drag.moved = true;
          self.transform.x = drag.tx + dx;
          self.transform.y = drag.ty + dy;
          self._applyTransform();
        } else if (drag.type === 'node') {
          var p = toGraph(evt);
          if (Math.abs(evt.clientX - drag.sx) + Math.abs(evt.clientY - drag.sy) > 3) drag.moved = true;
          drag.node.x = p.x; drag.node.y = p.y;
          drag.node.vx = drag.node.vy = 0;
          self.render();
        }
      });

      global.addEventListener('mouseup', function (evt) {
        if (!drag) return;
        svg.classList.remove('dragging');
        var wasDrag = drag;
        drag = null;
        if (wasDrag.type === 'node' && !wasDrag.moved) {
          if (self.onSelect) self.onSelect(wasDrag.node.id);
        } else if (wasDrag.type === 'pan' && !wasDrag.moved && !wasDrag.hull) {
          if (self.onSelect) self.onSelect(null);
        }
      });

      svg.addEventListener('dblclick', function (evt) {
        var nodeG = evt.target.closest ? evt.target.closest('g.node') : null;
        if (nodeG) { self.focusNode(nodeG.getAttribute('data-id')); return; }
        var hullG = evt.target.closest ? evt.target.closest('g.hull-group') : null;
        if (hullG) self.focusCluster(hullG.getAttribute('data-key'));
      });

      svg.addEventListener('wheel', function (evt) {
        evt.preventDefault();
        var r = svg.getBoundingClientRect();
        var mx = evt.clientX - r.left, my = evt.clientY - r.top;
        var factor = Math.pow(1.0016, -evt.deltaY);
        var k2 = Math.max(0.16, Math.min(4.5, self.transform.k * factor));
        var ratio = k2 / self.transform.k;
        self.transform.x = mx - (mx - self.transform.x) * ratio;
        self.transform.y = my - (my - self.transform.y) * ratio;
        self.transform.k = k2;
        self._applyTransform();
      }, { passive: false });

      // hover / tooltip
      svg.addEventListener('mousemove', function (evt) {
        if (drag) { self._hideTip(); return; }
        var nodeG = evt.target.closest ? evt.target.closest('g.node') : null;
        if (!nodeG) { self._hideTip(); if (self.hoverId) { self.hoverId = null; if (self.onHover) self.onHover(null); } return; }
        var id = nodeG.getAttribute('data-id');
        if (self.hoverId !== id) {
          self.hoverId = id;
          if (self.onHover) self.onHover(id, evt);
        }
        self._showTip(id, evt);
      });

      svg.addEventListener('mouseleave', function () { self._hideTip(); });
    },

    _showTip: function (id, evt) {
      if (!this.tooltip) this.tooltip = document.getElementById('tooltip');
      var tip = this.tooltip;
      if (!tip) return;
      var n = null;
      this.nodes.forEach(function (x) { if (x.id === id) n = x; });
      if (!n) return;
      var c = n.char;
      var aliases = (c.names || []).map(function (x) { return x.text + (x.type ? '（' + x.type + '）' : ''); }).join('、');
      var loc = Store.effectiveEntry(c.locations, this.currentPage || 1);
      var rows = [];
      rows.push('<b>' + esc(c.primaryName) + '</b>' + (c.role ? ' <span class="tt-dim">' + esc(c.role) + '</span>' : ''));
      if (aliases) rows.push('<span class="tt-dim">别名：</span>' + esc(aliases));
      rows.push('<span class="tt-dim">首次出场：</span>' + (c.firstPage === null ? '—' : 'P' + c.firstPage) +
        '　<span class="tt-dim">出场：</span>' + (c.appearances.length || 0) + ' 次');
      if (loc) rows.push('<span class="tt-dim">所在：</span>' + esc([loc.country, loc.city, loc.place].filter(Boolean).join(' / ')));
      var fac = Store.activeEntry(c.factions, this.currentPage || 1);
      if (fac) rows.push('<span class="tt-dim">阵营：</span>' + esc(fac.name + (fac.group ? '（' + fac.group + '）' : '')));
      if (c.ending) rows.push('<span class="tt-dim">结局：</span>' + esc(c.ending) + (c.endingPage ? '（P' + c.endingPage + '）' : ''));
      var deg = this.edges.filter(function (e) { return e.source.id === id || e.target.id === id; }).length;
      rows.push('<span class="tt-dim">关系：</span>' + deg + ' 条');
      tip.innerHTML = rows.join('<br>');
      var wrap = this.svg.parentNode.getBoundingClientRect();
      tip.hidden = false;
      var tw = tip.offsetWidth, th = tip.offsetHeight;
      var x = evt.clientX - wrap.left + 14, y = evt.clientY - wrap.top + 12;
      if (x + tw > wrap.width - 6) x = evt.clientX - wrap.left - tw - 12;
      if (y + th > wrap.height - 6) y = evt.clientY - wrap.top - th - 12;
      tip.style.left = Math.max(4, x) + 'px';
      tip.style.top = Math.max(4, y) + 'px';
    },

    _hideTip: function () {
      if (!this.tooltip) this.tooltip = document.getElementById('tooltip');
      if (this.tooltip) this.tooltip.hidden = true;
    },

    setSelected: function (id) {
      this.selectedId = id;
      this.render();
    },

    focusNode: function (id) {
      var n = null;
      this.nodes.forEach(function (x) { if (x.id === id) n = x; });
      if (!n) return;
      this.transform.k = Math.max(this.transform.k, 1.05);
      this.transform.x = this.width / 2 - n.x * this.transform.k;
      this.transform.y = this.height / 2 - n.y * this.transform.k;
      this._applyTransform();
      this.setSelected(id);
    },

    focusCluster: function (key) {
      var members = this.nodes.filter(function (n) { return n.clusterKey === key; });
      if (!members.length) return;
      var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      members.forEach(function (n) {
        minX = Math.min(minX, n.x - n.r); maxX = Math.max(maxX, n.x + n.r);
        minY = Math.min(minY, n.y - n.r); maxY = Math.max(maxY, n.y + n.r);
      });
      var w = maxX - minX + 120, h = maxY - minY + 120;
      var k = Math.max(0.2, Math.min(2.2, Math.min(this.width / w, this.height / h)));
      this.transform.k = k;
      this.transform.x = this.width / 2 - ((minX + maxX) / 2) * k;
      this.transform.y = this.height / 2 - ((minY + maxY) / 2) * k;
      this._applyTransform();
    },

    fit: function (pad) {
      pad = pad || 70;
      if (!this.nodes.length) return;
      var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      this.nodes.forEach(function (n) {
        minX = Math.min(minX, n.x - n.r - 30); maxX = Math.max(maxX, n.x + n.r + 30);
        minY = Math.min(minY, n.y - n.r - 30); maxY = Math.max(maxY, n.y + n.r + 46);
      });
      var w = (maxX - minX) + pad * 2, h = (maxY - minY) + pad * 2;      var k = Math.max(0.12, Math.min(2.0, Math.min(this.width / w, this.height / h)));
      this.transform.k = k;
      this.transform.x = this.width / 2 - ((minX + maxX) / 2) * k;
      this.transform.y = this.height / 2 - ((minY + maxY) / 2) * k;
      this._applyTransform();
    },

    zoomBy: function (f) {
      var k2 = Math.max(0.16, Math.min(4.5, this.transform.k * f));
      var ratio = k2 / this.transform.k;
      var cx = this.width / 2, cy = this.height / 2;
      this.transform.x = cx - (cx - this.transform.x) * ratio;
      this.transform.y = cy - (cy - this.transform.y) * ratio;
      this.transform.k = k2;
      this._applyTransform();
    },

    /* ------------------------------------------------ export */
    _serialize: function () {
      var clone = this.svg.cloneNode(true);
      clone.setAttribute('xmlns', SVGNS);
      clone.setAttribute('width', this.width);
      clone.setAttribute('height', this.height);
      clone.setAttribute('viewBox', '0 0 ' + this.width + ' ' + this.height);
      var style = document.createElementNS(SVGNS, 'style');
      style.textContent = INLINE_STYLE;
      clone.insertBefore(style, clone.firstChild);
      var bg = el('rect', { x: 0, y: 0, width: this.width, height: this.height, fill: '#0b1020' });
      var vp = clone.querySelector('#viewport');
      vp.parentNode.insertBefore(bg, vp);
      var tip = clone.querySelector('#tooltip');
      if (tip) tip.remove();
      return clone;
    },

    downloadSvg: function (filename) {
      var clone = this._serialize();
      var text = '<?xml version="1.0" encoding="UTF-8"?>\n' + new XMLSerializer().serializeToString(clone);
      downloadBlob(new Blob([text], { type: 'image/svg+xml;charset=utf-8' }), filename || 'book-atlas.svg');
    },

    downloadPng: function (filename, scale) {
      scale = scale || 2;
      var clone = this._serialize();
      var text = new XMLSerializer().serializeToString(clone);
      var blob = new Blob([text], { type: 'image/svg+xml;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var img = new Image();
      var self = this;
      img.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.width = self.width * scale;
        canvas.height = self.height * scale;
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#0b1020';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(url);
        canvas.toBlob(function (b) { downloadBlob(b, filename || 'book-atlas.png'); }, 'image/png');
      };
      img.onerror = function () {
        URL.revokeObjectURL(url);
        alert('PNG 导出失败，可以改用「导出 SVG」。');
      };
      img.src = url;
    }
  };

  function esc(s) {
    return String(s === null || s === undefined ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function downloadBlob(blob, filename) {
    var a = document.createElement('a');
    var url = URL.createObjectURL(blob);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 200);
  }

  Graph.esc = esc;
  Graph.downloadBlob = downloadBlob;
  global.Graph = Graph;
})(window);
