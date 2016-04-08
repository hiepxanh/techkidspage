'use strict';

google.maps.__gjsload__('map', function (_) {
  'use strict';
  var Qy = function Qy(a, b) {
    return new _.yr(_.Q(a.N, 1)[b]);
  };var Ry = function Ry(a) {
    this.N = a || [];
  };var Sy = function Sy(a) {
    this.N = a || [];
  };var Ty = function Ty(a, b) {
    for (var c = 0, d = _.Fc(a.j.N, 1); c < d; c++) {
      var e = Qy(a.j, c);0 == e.getType() && (e.N[2] = b);
    }
  };var Uy = function Uy(a) {
    var b = Math.round(1E7 * a);return 0 > a ? b + 4294967296 : b;
  };var Vy = function Vy(a, b) {
    return _.uj(a.get("projection"), b, a.get("zoom"), a.get("offset"), a.get("center"));
  };var Wy = function Wy() {
    var a = _.fi().N[14];return null != a ? a : 0;
  };
  var Xy = function Xy(a, b) {
    return new Ry(_.Q(a.N, 4)[b]);
  };var Yy = function Yy(a, b) {
    return _.Q(a.N, 5)[b];
  };var Zy = function Zy(a) {
    return (a = a.N[1]) ? new _.se(a) : _.wh;
  };var $y = function $y(a) {
    return (a = a.N[0]) ? new _.se(a) : _.vh;
  };var az = function az(a) {
    a = a.N[1];return null != a ? a : 0;
  };var bz = function bz(a) {
    a = a.N[0];return null != a ? a : 0;
  };var cz = function cz(a) {
    this.N = a || [];
  };var dz = function dz(a, b) {
    for (var c = a.length, d = _.ta(a) ? a.split("") : a, e = 0; e < c; e++) {
      if (e in d && !b.call(void 0, d[e], e, a)) return !1;
    }return !0;
  };
  var ez = function ez(a, b) {
    for (var c = 0, d = a.O, e = a.j, f = 0, g; g = b[f++];) {
      if (a.intersects(g)) {
        var h = g.O,
            k = g.j,
            n = 0;if (_.Ii(g, a)) return 1;n = e.contains(k.j) && k.contains(e.j) && !_.bd(e, k) ? _.dd(k.j, e.O) + _.dd(e.j, k.O) : _.dd(e.contains(k.j) ? k.j : e.j, e.contains(k.O) ? k.O : e.O);c += n * (Math.min(d.j, h.j) - Math.max(d.O, h.O));
      }
    }return c /= _.fd(d) * _.cd(e);
  };var fz = function fz(a, b) {
    var c = a.x,
        d = a.y;switch (b) {case 90:
        a.x = d;a.y = 256 - c;break;case 180:
        a.x = 256 - c;a.y = 256 - d;break;case 270:
        a.x = 256 - d, a.y = c;}
  };
  var gz = function gz(a, b, c, d, e, f, g, h) {
    this.La = a.La;this.zoom = a.zoom;this.j = a;this.U = b;this.oa = c;this.V = d;this.T = e;this.na = f;this.S = g;this.P = _.Kj(h) ? h : null;this.O = "";this.Xb();
  };var hz = function hz() {
    this.maxZoom = this.minZoom = -1;this.j = [];this.Ta = [];
  };var iz = function iz(a, b, c, d, e) {
    this.La = a;this.zoom = b;this.O = c;this.j = d.slice(0);this.P = e && e.dh || _.ra;
  };var jz = function jz() {
    var a = !1;return function (b, c) {
      if (b && c) {
        if (.999999 > ez(b, c)) return a = !1;var d = _.tj(b, (_.ty - 1) / 2);return .999999 < ez(d, c) ? a = !0 : a;
      }
    };
  };
  var kz = function kz() {
    return function (a, b) {
      return a && b ? .9 <= ez(a, b) : void 0;
    };
  };var lz = function lz(a, b) {
    if (a && b) {
      for (var c = 0, d; d = b[c++];) {
        if (d.intersects(a)) return !0;
      }return !1;
    }
  };
  var mz = function mz(a, b, c, d) {
    this.O = this.T = this.S = this.P = !0;var e = d.Bh,
        f = [];_.W.U ? f.push("mob:n") : f.push("mob:y");1 < _.pf() ? f.push("hdpi:y") : f.push("hdpi:n");e ? f.push("staticmapsize:y") : f.push("staticmapsize:n");_.ck() ? f.push("webp:y") : f.push("webp:n");this.j = _.Ff("map", { startTime: a, $i: f, Op: { firstMap: c } });this.pa = b;d.Ac && _.Y(b, "Smu");d.Ac && d.Ac.get() ? this.lh(!0, d.Ac.get()) : (d.Ac && d.Ac.addListenerOnce((0, _.t)(this.lh, this, !0)), _.I.addListenerOnce(b, "tilesloaded", (0, _.t)(this.lh, this, !1)));_.I.addListenerOnce(b, "zoom_changed", (0, _.t)(this.Hi, this));_.I.addListenerOnce(b, "center_changed", (0, _.t)(this.Hi, this));
  };var nz = function nz(a, b) {
    this.P = a;this.S = b;
  };var oz = function oz(a, b) {
    this.j = function (c, d, e, f, g) {
      var h;a: {
        if (!(7 > d)) {
          var k = 1 << d - 7;h = c.x / k;for (var k = c.y / k, n = 0; n < pz.length; ++n) {
            if (h >= pz[n].Uf && h <= pz[n].Tf && k >= pz[n].Wf && k <= pz[n].Vf) {
              h = !0;break a;
            }
          }
        }h = !1;
      }return h ? b.j(c, d, e, f, g) : a.j(c, d, e, f, g);
    };
  };
  var qz = function qz(a) {
    for (var b = 0; b < _.Fc(a.N, 0); ++b) {
      var c = a.getUrl(b).replace(/(\?|&)src=api(&|$)/, "$1src=apiv3$2");a.setUrl(b, c);
    }for (b = 0; b < _.Fc(a.N, 6); ++b) {
      var d = b,
          c = _.Q(a.N, 6)[d].replace(/(\?|&)src=api(&|$)/, "$1src=apiv3$2"),
          d = b;_.Q(a.N, 6)[d] = c;
    }
  };var rz = function rz(a, b) {
    this.P = b || new _.hf();this.j = new _.Yc(a % 360, 45);this.S = new _.N(0, 0);this.O = !0;
  };var sz = function sz(a, b, c, d, e, f) {
    this.j = function (g, h, k, n, p) {
      return new gz(_.lv(g, h, k, n, p), a, b, c, d, e, k.width, f);
    };
  };
  var tz = function tz(a, b, c, d) {
    this.O = [];for (var e = 0; e < _.u(a); ++e) {
      var f = a[e],
          g = new hz(),
          h = f.N[2];g.minZoom = (null != h ? h : 0) || 0;h = f.N[3];g.maxZoom = (null != h ? h : 0) || d;for (h = 0; h < _.Fc(f.N, 5); ++h) {
        g.j.push(Yy(f, h));
      }for (h = 0; h < _.Fc(f.N, 4); ++h) {
        var k = _.Wi(b, new _.gd(new _.L(bz($y(Xy(f, h))) / 1E7, az($y(Xy(f, h))) / 1E7), new _.L(bz(Zy(Xy(f, h))) / 1E7, az(Zy(Xy(f, h))) / 1E7)), g.maxZoom);g.Ta[h] = new _.jf([new _.N(Math.floor(k.ua / c.width), Math.floor(k.ra / c.height)), new _.N(Math.floor(k.wa / c.width), Math.floor(k.ya / c.height))]);
      }this.O.push(g);
    }
  };
  var uz = function uz(a) {
    this.j = function (b, c, d, e, f) {
      function g() {
        f && f.Rc && k.zc() && f.Rc();
      }var h = _.Dj(a, function (a, h) {
        return a.j(b, c, d, e, { Dg: f && f.Dg, Rc: g, zIndex: h });
      }),
          k = new iz(b, c, e, h, { dh: f && f.dh });return k;
    };
  };var vz = function vz(a) {
    var b = new _.Xw(lz),
        c = new _.Xw(jz()),
        d = new _.Xw(kz());a.bindTo("traffic", b, "available");a = {};a.obliques = c;a.traffic = b;a.report_map_issue = d;return a;
  };
  var wz = function wz(a, b) {
    var c = a.__gm,
        d = new _.Gw(b, a.overlayMapTypes, _.Ij(_.Y, a));d.bindTo("size", c);d.bindTo("zoom", c);d.bindTo("offset", c);d.bindTo("projectionBounds", c);
  };var xz = function xz(a) {
    var b = new _.Fx(300);b.bindTo("input", a, "bounds");_.I.addListener(b, "idle_changed", function () {
      b.get("idle") && _.I.trigger(a, "idle");
    });
  };
  var yz = function yz(a) {
    if (a && _.gk(a.getDiv()) && (_.Xj() || _.Wj())) {
      _.Y(a, "Tdev");var b = window.document.querySelector('meta[name="viewport"]');(b = b && b.content) && b.match(/width=device-width/) && _.Y(a, "Mfp");
    }
  };
  var zz = function zz(a, b) {
    function c() {
      var c = b.get("mapType");if (c) switch (c.nb) {case "roadmap":
          _.Y(a, "Tm");break;case "satellite":
          c.na && _.Y(a, "Ta");_.Y(a, "Tk");break;case "hybrid":
          c.na && _.Y(a, "Ta");_.Y(a, "Th");break;case "terrain":
          _.Y(a, "Tr");break;default:
          _.Y(a, "To");}
    }c();_.I.addListener(b, "maptype_changed", c);
  };var Az = function Az(a) {
    var b = new _.Kw(a.mapTypes);b.bindTo("bounds", a);b.bindTo("heading", a);b.bindTo("mapTypeId", a);b.bindTo("tilt", a.__gm);return b;
  };
  var Bz = function Bz(a, b) {
    _.Fa(_.rg, function (c, d) {
      b.set(d, Cz(a, d));
    });
  };var Dz = function Dz(a, b) {
    this.j = a;this.O = b;
  };var Ez = function Ez(a, b) {
    function c(c) {
      c = b.getAt(c);if (c instanceof _.bg) {
        var e = new _.J(),
            f = c.get("styles");e.set("apistyle", _.Rw(f));e = Cz(a, c.j, e);c.kf = (0, _.t)(e.kf, e);
      }
    }_.I.addListener(b, "insert_at", c);_.I.addListener(b, "set_at", c);b.forEach(function (a, b) {
      c(b);
    });
  };
  var Fz = function Fz(a) {
    var b;b = (b = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection || null) && b.type;_.Y(a, "Nt", b && Gz[b] || "-na");
  };
  var Hz = function Hz(a, b, c) {
    if ((_.Xj() || _.Wj()) && _.zk()) {
      _.Y(b, "Mmni");var d = window.setInterval(function () {
        var e;e = a.j.getBoundingClientRect();if (e = !(0 >= e.top - 5 && 0 >= e.left - 5 && e.height + 5 >= window.document.body.scrollHeight && e.width + 5 >= window.document.body.scrollWidth)) e = a.j.getBoundingClientRect(), e = 0 >= e.top - 5 && 0 >= e.left - 5 && e.bottom + 5 >= window.innerHeight && e.right + 5 >= window.innerWidth && (!c || c());e && (_.Y(b, "Mmus"), window.clearInterval(d));
      }, 1E3);
    }
  };var Iz = function Iz(a) {
    this.j = a;
  };
  var Jz = function Jz() {
    var a,
        b = new _.J();b.bounds_changed = function () {
      var c = b.get("bounds");c ? a && _.mi(a, c) || (a = _.kf(c.ua - 512, c.ra - 512, c.wa + 512, c.ya + 512), b.set("boundsQ", a)) : b.set("boundsQ", c);
    };return b;
  };var Kz = function Kz() {
    this.U = new _.gf();this.S = {};this.P = {};
  };
  var Lz = function Lz(a, b, c, d, e, f, g) {
    var h = c.__gm,
        k = new _.Cw(c, a, b, !!c.Ga, e, h, d, g, (0, _.t)(f.j, f));k.bindTo("draggingCursor", c);k.bindTo("draggableMap", c, "draggable");_.I.addListener(c, "zoom_changed", function () {
      k.get("zoom") != c.get("zoom") && k.set("zoom", c.get("zoom"));
    });k.set("zoom", c.get("zoom"));k.bindTo("disablePanMomentum", c);k.bindTo("projectionTopLeft", e);k.bindTo("draggableCursor", h, "cursor");d.bindTo("zoom", k);e.bindTo("zoom", k);return k;
  };var Mz = function Mz(a, b, c) {
    a = new mz(a, b, Yz, c);Yz = !1;return a;
  };
  var Zz = function Zz(a, b, c, d) {
    return d ? new nz(a, function () {
      return b;
    }) : _.T[23] ? new nz(a, function (a) {
      var d = c.get("scale");return 2 == d || 4 == d ? b : a;
    }) : a;
  };var $z = function $z(a, b) {
    var c = a.__gm,
        d = new _.Ov(b, (0, _.t)(_.sk.O, _.sk));d.bindTo("center", a);d.bindTo("projectionBounds", c);d.bindTo("offset", c);return d;
  };
  var aA = function aA(a, b) {
    var c = _.gi(),
        d = _.fi(),
        e = _.Ke(_.R);this.pa = a;this.O = b;this.j = new _.hf();this.P = _.He(e);this.S = _.Ie(e);this.T = _.si(d);this.na = _.ri(e);this.V = _.Q(d.N, 0);(_.sj() || _.T[43] || _.jj()) && 0 < _.Fc(d.N, 12) && !this.na && (this.V = _.Q(d.N, 12));for (var d = {}, e = 0, f = _.Fc(c.N, 5); e < f; ++e) {
      var g;g = e;g = new cz(_.Q(c.N, 5)[g]);var h;h = g.N[1];h = null != h ? h : 0;d[h] = d[h] || [];d[h].push(g);
    }new tz(d[0], this.j, new _.O(256, 256), 21);c.N[0] = c.N[0] || [];this.oa = new _.te(c.N[0]);qz(this.oa);this.Aa = new tz(d[1], this.j, new _.O(256, 256), 22);c.N[1] = c.N[1] || [];this.U = new _.te(c.N[1]);qz(this.U);new tz(d[3], this.j, new _.O(256, 256), 21);c.N[3] = c.N[3] || [];this.ta = new _.te(c.N[3]);qz(this.ta);c.N[7] = c.N[7] || [];this.qa = new _.te(c.N[7]);qz(this.qa);
  };
  var bA = function bA(a, b, c, d) {
    var e,
        f = d || {};e = _.C(f.heading);var g = c ? function (a, b) {
      return c.T(a, b, f.Bk);
    } : _.ma(0);d = ("hybrid" == b && !e || "terrain" == b || "roadmap" == b) && 0 != f.Um;var h = f.ld || _.ma(null);return "satellite" == b ? (b = "", e ? (g = a.qa, b += "deg=" + f.heading + "&", e = null) : (g = a.U, e = a.Aa), _.qv(g, e, b, d, _.pv(f.heading), a.na, h)) : new sz(a.V, d && 1 < _.pf(), _.pv(f.heading, !!f.Bk), g, h, f.heading);
  };
  var cA = function cA(a, b) {
    var c;c = null;"hybrid" == b || "roadmap" == b ? c = a.oa : "terrain" == b ? c = a.ta : "satellite" == b && (c = a.U);c ? (c = c.N[5], c = null != c ? c : "") : c = null;return c;
  };
  var dA = function dA(a) {
    function b(a, b) {
      if (!b || !b.Cc) return b;var c = [];_.hi(c, b.Cc.N);c = new _.ns(c);_.as(_.Et(c)).N[0] = a;return { scale: b.scale, Ad: b.Ad, Cc: c };
    }var c,
        d = bA(a, "roadmap", a.O, { Um: !1, ld: function ld() {
        return b(3, c.get("options"));
      } }),
        e = bA(a, "roadmap", a.O, { ld: function ld() {
        return b(18, c.get("options"));
      } }),
        d = new uz([d, e]),
        e = bA(a, "roadmap", a.O, { ld: function ld() {
        return c.get("options");
      } });c = new _.hv(new oz(d, e), a.j, 21, 'Bản đồ', 'Hiển thị bản đồ phố', 'Xin lỗi, chúng tôi không có hình ảnh ở đây.', _.Ox.roadmap, !1, cA(a, "roadmap"), 47, "roadmap", a.T, a.P, a.S);eA(a, c);return c;
  };
  var fA = function fA(a, b) {
    function c() {
      return g.get("options");
    }var d = _.C(b),
        e = bA(a, "satellite", null, { heading: b, ld: c }),
        f = bA(a, "hybrid", a.O, { heading: b, ld: c }),
        g = new _.hv(new uz([e, f]), _.C(b) ? new rz(b) : a.j, d ? 21 : 22, 'Kết hợp', 'Hiển thị hình ảnh có tên phố', 'Xin lỗi, chúng tôi không có hình ảnh ở đây.', _.Ox.hybrid, d, cA(a, "hybrid"), 50, "hybrid", a.T, a.P, a.S);eA(a, g);return g;
  };
  var gA = function gA(a, b) {
    var c = _.C(b),
        d = bA(a, "satellite", null, { heading: b, ld: function ld() {
        return e.get("options");
      } }),
        e = new _.hv(d, _.C(b) ? new rz(b) : a.j, c ? 21 : 22, 'Vệ tinh', 'Hiển thị hình ảnh qua vệ tinh', 'Xin lỗi, chúng tôi không có hình ảnh ở đây.', c ? "a" : _.Ox.satellite, c, null, null, "satellite", a.T, a.P, a.S);return e;
  };
  var Cz = function Cz(a, b, c) {
    var d = null,
        e = [0, 90, 180, 270],
        f = _.oe();if ("hybrid" == b) {
      d = fA(a);c = [];f = 0;for (b = e.length; f < b; ++f) {
        c.push(fA(a, e[f]));
      }d.Lc = new _.Vu(d, c);
    } else if ("satellite" == b) {
      d = gA(a);c = [];f = 0;for (b = e.length; f < b; ++f) {
        c.push(gA(a, e[f]));
      }d.Lc = new _.Vu(d, c);
    } else if ("roadmap" == b && 1 < _.pf() && (+_.ui(f) || _.T[43])) d = dA(a);else {
      e = bA(a, b, a.O, { ld: function ld() {
          return d.get("options");
        }, Bk: !! +_.ti(f) });if ("terrain" == b) {
        if (b = cA(a, "terrain")) {
          var g = b.split(",");2 == g.length && (b = g[1]);
        }d = new _.hv(e, a.j, 21, 'Địa hình', 'Hiển thị bản đồ phố với địa hình', 'Xin lỗi, chúng tôi không có hình ảnh ở đây.', _.Ox.terrain, !1, b, 63, "terrain", a.T, a.P, a.S, +_.ti(f) ? new _.O(128, 128) : new _.O(256, 256));
      } else d = new _.hv(e, a.j, 21, 'Bản đồ', 'Hiển thị bản đồ phố', 'Xin lỗi, chúng tôi không có hình ảnh ở đây.', _.Ox.roadmap, !1, cA(a, "roadmap"), 47, "roadmap", a.T, a.P, a.S, +_.ti(f) ? new _.O(128, 128) : new _.O(256, 256));eA(a, d, c);
    }return d;
  };var eA = function eA(a, b, c) {
    var d = a.pa.__gm;c ? b.bindTo("apistyle", c) : (b.bindTo("layers", d, "layers"), b.bindTo("apistyle", d), b.bindTo("mapMaker", a.pa));b.bindTo("authUser", d);_.T[23] && b.bindTo("scale", a.pa);a.O.O().addListener(function () {
      b.notify("epochs");
    });
  };var hA = function hA() {};Ry.prototype.W = _.l("N");_.yf.prototype.Ac = _.li(8, _.l("P"));_.gf.prototype.j = _.li(7, function (a) {
    this.Ba.forEach(function (b) {
      b(a);
    });
  });Sy.prototype.W = _.l("N");
  Sy.prototype.getTile = function () {
    var a = this.N[1];return a ? new _.bs(a) : _.sy;
  };cz.prototype.W = _.l("N");cz.prototype.clearRect = function () {
    var a = this.N;4 in a && delete a[4];
  };var pz = [{ Uf: 108.25, Tf: 109.625, Wf: 49, Vf: 51.5 }, { Uf: 109.625, Tf: 109.75, Wf: 49, Vf: 50.875 }, { Uf: 109.75, Tf: 110.5, Wf: 49, Vf: 50.625 }, { Uf: 110.5, Tf: 110.625, Wf: 49, Vf: 49.75 }];_.m = gz.prototype;_.m.rb = function () {
    return this.j.rb();
  };_.m.zc = function () {
    return this.j.zc();
  };_.m.release = function () {
    this.j.release();
  };_.m.freeze = function () {
    this.j.freeze();
  };
  _.m.Xb = function () {
    var a = this.na();if (a && a.Cc) {
      var b = this.V(new _.N(this.La.x, this.La.y), this.zoom);if (b) {
        for (var c = 2 == a.scale || 4 == a.scale ? a.scale : 1, c = Math.min(1 << this.zoom, c), d = this.oa && 4 != c, e = this.zoom, f = c; 1 < f; f /= 2) {
          e--;
        }var f = this.S,
            g;1 != c && (f /= c);d && (c *= 2);1 != c && (g = c);c = new _.$u(a.Cc);c.j.N[3] = 0;g && (_.Ft(c.j).N[4] = g);_.bv(c, b, e, f);if (e = this.T(b, this.zoom, 128 == this.S)) Ty(c, e), _.Kj(this.P) && _.gv(c, this.P), e = this.U, b = e[(b.x + 2 * b.y) % e.length], b += "?pb=" + _.Zu(_.os(c.j)), null != a.Ad && (b += "&authuser=" + a.Ad), this.O == b ? this.j.Xb() : (this.O = b, this.j.setUrl(b));
      } else this.O = "", this.j.setUrl("");
    }
  };_.m = iz.prototype;_.m.rb = _.l("O");_.m.zc = function () {
    return dz(this.j, function (a) {
      return a.zc();
    });
  };_.m.release = function () {
    _.kc(this.j, function (a) {
      a.release();
    });this.P();
  };_.m.freeze = function () {
    _.kc(this.j, function (a) {
      a.freeze();
    });
  };_.m.Xb = function () {
    _.kc(this.j, function (a) {
      a.Xb();
    });
  };var Gz = { bluetooth: "-b", cellular: "-c", ethernet: "-e", none: "-n", wifi: "-wf", wimax: "-wm", other: "-o" },
      Yz = !0;_.m = mz.prototype;
  _.m.$p = function () {
    this.S && (this.S = !1, _.Df(this.j, "visreq"));
  };_.m.aq = function () {
    this.T && (this.T = !1, _.Df(this.j, "visres"));
  };_.m.Wj = function (a) {
    this.P && (this.P = !1, _.Df(this.j, "firsttile", a || void 0));
  };_.m.lh = function (a, b) {
    this.O && (this.Wj(b), this.O = !1, _.Df(this.j, "visuallycomplete", b || void 0), _.Y(this.pa, a ? "VCsm" : "VCt"));
  };_.m.Hi = function () {
    this.O = !1;
  };nz.prototype.T = function (a, b, c) {
    return this.S(this.P.T(a, b, c));
  };nz.prototype.j = function (a) {
    return this.S(this.P.j(a));
  };nz.prototype.O = function () {
    return this.P.O();
  };
  rz.prototype.fromLatLngToPoint = function (a, b) {
    var c = this.P.fromLatLngToPoint(a, b);fz(c, this.j.heading());c.y = (c.y - 128) / _.ry + 128;return c;
  };rz.prototype.fromPointToLatLng = function (a, b) {
    var c = this.S;c.x = a.x;c.y = (a.y - 128) * _.ry + 128;fz(c, 360 - this.j.heading());return this.P.fromPointToLatLng(c, b);
  };rz.prototype.getPov = _.l("j");tz.prototype.getTileUrl = function (a, b) {
    var c = this.j(a, b);return c && _.iv(c, a, b);
  };
  tz.prototype.j = function (a, b) {
    for (var c = this.O, d = new _.N(a.x % (1 << b), a.y), e = 0; e < c.length; ++e) {
      var f = c[e];if (!(f.minZoom > b || f.maxZoom < b)) {
        var g = _.u(f.Ta);if (0 == g) return f.j;for (var h = f.maxZoom - b, k = 0; k < g; ++k) {
          var n = f.Ta[k];if (_.ni(new _.jf([new _.N(n.ua >> h, n.ra >> h), new _.N(1 + (n.wa >> h), 1 + (n.ya >> h))]), d)) return f.j;
        }
      }
    }return null;
  };_.Ba(Dz, _.J);
  Dz.prototype.getPrintableImageUri = function (a, b, c, d, e) {
    var f = this.get("mapType");if (2048 < a * (e || 1) || 2048 < b * (e || 1) || !(f instanceof _.hv)) return null;var g = d || this.get("zoom");if (null == g) return null;var h = c || this.get("center");if (!h) return null;c = f.get("options");if (!c.Cc) return null;d = new _.$u(c.Cc);d.j.N[3] = 0;var k = this.O.j(g);k && Ty(d, k);if ("hybrid" == f.nb) {
      _.Ht(d.j);for (f = _.Fc(d.j.N, 1) - 1; 0 < f; --f) {
        var k = Qy(d.j, f),
            n = Qy(d.j, f - 1);_.hi(k.N, n ? n.N : null);
      }f = Qy(d.j, 0);f.N[0] = 1;1 in f.N && delete f.N[1];2 in f.N && delete f.N[2];
    }if (2 == e || 4 == e) _.Ft(d.j).N[4] = e;e = _.Gt(d.j);e.N[3] = e.N[3] || [];e = new _.js(e.N[3]);e.setZoom(g);e.N[2] = e.N[2] || [];g = new _.Fm(e.N[2]);f = Uy(h.lat());g.N[0] = f;h = Uy(h.lng());g.N[1] = h;e.N[0] = e.N[0] || [];h = new _.ks(e.N[0]);h.N[0] = a;h.N[1] = b;a = this.j;a += "?pb=" + _.Zu(_.os(d.j));null != c.Ad && (a += "&authuser=" + c.Ad);return a;
  };
  Kz.prototype.V = function (a) {
    if (_.Fc(a.N, 0)) {
      this.S = {};this.P = {};for (var b = 0; b < _.Fc(a.N, 0); ++b) {
        var c,
            d = b;c = new Sy(_.Q(a.N, 0)[d]);var e = c.getTile(),
            d = e.getZoom(),
            f;f = e.N[1];f = null != f ? f : 0;e = e.N[2];e = null != e ? e : 0;c = c.N[2];c = null != c ? c : 0;var g = this.S;g[d] = g[d] || {};g[d][f] = g[d][f] || {};g[d][f][e] = c;this.P[d] = Math.max(this.P[d] || 0, c);
      }this.U.j(null);
    }
  };Kz.prototype.T = function (a, b, c) {
    var d = this.S,
        e = a.x;a = a.y;c && (e = Math.floor(e / 2), a = Math.floor(a / 2));return d[b] && d[b][e] && d[b][e][a] || 0;
  };
  Kz.prototype.j = function (a) {
    return this.P[a] || 0;
  };Kz.prototype.O = _.l("U");hA.prototype.O = function (a, b, c, d, e, f) {
    function g() {
      var b = a.get("streetView");b ? (a.bindTo("svClient", b, "client"), b.__gm.bindTo("fontLoaded", oa)) : (a.unbind("svClient"), a.set("svClient", null));
    }var h = _.He(_.Ke(_.R)),
        k = c.Lq,
        n = Mz(e, a, { Ac: k && k.Ac(), Bh: c.Bh }),
        p = a.__gm,
        q = new _.Mw(),
        r = vz(a.features),
        v,
        x;(function () {
      var c = Wy(),
          d = a.get("noPerTile") && _.T[15],
          e = new Kz();v = Zz(e, c, a, d);x = new _.sx(h, q, r, p.qa, d ? null : e, b.Ga, n);
    })();x.bindTo("tilt", a);x.bindTo("heading", a);x.bindTo("bounds", a);x.bindTo("zoom", a);x.bindTo("mapMaker", a);x.bindTo("size", p);c = new aA(a, v);Bz(c, a.mapTypes);c = a.getDiv();_.I.addDomListenerOnce(c, "mousedown", function () {
      _.Y(a, "Mi");
    }, !0);var w = new _.Kx(c, b, { Oi: !0, rj: _.ri(_.Ke(_.R)) });e = w.P;_.qk(w.j, 0);_.I.forward(a, "resize", c);p.set("panes", w.S);p.set("innerContainer", w.O);_.jj() && _.bk() || _.M("onion", function (b) {
      b.Sg(a, v, new _.Ib());
    });var z = new _.jw(e, w.U, n),
        F = new _.rv(["blockingLayerCount", "staticMapLoading"], "waitWithTiles", function (a, b) {
      return !!a || !!b;
    });_.bj(p.ta, "sm-block") && k && F.bindTo("staticMapLoading", k, "loading");F.bindTo("blockingLayerCount", p);z.bindTo("waitWithTiles", F);z.set("panes", w.S);z.bindTo("styles", a);_.T[20] && z.bindTo("animatedZoom", a);_.sj() && (_.Mx(a), _.Nx(a));var D = new _.Pw();D.bindTo("tilt", a);D.bindTo("zoom", a);D.bindTo("mapTypeId", a);D.bindTo("aerial", r.obliques, "available");p.bindTo("tilt", D);var E = Az(a);x.bindTo("mapType", E);var H = new _.Cx(p.qa);_.I.addListener(H, "attributiontext_changed", function () {
      a.set("mapDataProviders", H.get("attributionText"));
    });F = new _.Ww();F.bindTo("styles", a);F.bindTo("mapTypeStyles", E, "styles");p.bindTo("apistyle", F);_.T[15] && p.bindTo("authUser", a);F = new _.Gx();F.bindTo("mapMaker", a);F.bindTo("mapType", E);F.bindTo("layers", p);p.bindTo("style", F);var P = new _.Pv();p.set("projectionController", P);z.bindTo("size", w);z.bindTo("projection", P);z.bindTo("projectionBounds", P);z.bindTo("mapType", E);P.bindTo("projectionTopLeft", z);P.bindTo("offset", z);P.bindTo("latLngCenter", a, "center");P.bindTo("size", w);P.bindTo("projection", a);z.bindTo("fixedPoint", P);a.bindTo("bounds", P, "latLngBounds", !0);p.set("mouseEventTarget", {});F = new _.Bw(_.W.P, w.O);F.bindTo("title", p);var U = Lz(w.O, e, a, z, P, f, F);k && (f = $z(a, e), k.bindTo("div", f), k.bindTo("center", f, "newCenter"), k.bindTo("zoom", U), k.bindTo("tilt", p), k.bindTo("size", p));p.bindTo("zoom", U);p.bindTo("center", a);p.bindTo("size", w);p.bindTo("mapType", E);p.bindTo("offset", z);p.bindTo("layoutPixelBounds", z);p.bindTo("pixelBounds", z);p.bindTo("projectionTopLeft", z);p.bindTo("projectionBounds", z, "viewProjectionBounds");p.bindTo("projectionCenterQ", P);a.set("tosUrl", _.$x);k = Jz();k.bindTo("bounds", z, "pixelBounds");p.bindTo("pixelBoundsQ", k, "boundsQ");k = new _.Gv({ projection: 1 });k.bindTo("immutable", p, "mapType");f = new _.Nv({ projection: new _.hf() });f.bindTo("projection", k);a.bindTo("projection", f);_.I.forward(p, "panby", z);_.I.forward(p, "panbynow", z);_.I.forward(p, "panbyfraction", z);_.I.addListener(p, "panto", function (b) {
      if (b instanceof _.L) {
        if (a.get("center")) {
          b = P.fromLatLngToDivPixel(b);var c = P.get("offset") || _.xg;b.x += Math.round(c.width) - c.width;
          b.y += Math.round(c.height) - c.height;_.I.trigger(z, "panto", b.x, b.y);
        } else a.set("center", b);
      } else throw Error("panTo: latLng must be of type LatLng");
    });_.I.forward(p, "pantobounds", z);_.I.addListener(p, "pantolatlngbounds", function (a) {
      if (a instanceof _.gd) _.I.trigger(z, "pantobounds", Vy(P, a));else throw Error("panToBounds: latLngBounds must be of type LatLngBounds");
    });_.I.addListener(U, "zoom_changed", function () {
      U.get("zoom") != a.get("zoom") && (a.set("zoom", U.get("zoom")), _.ll(a, "Mm"));
    });var Z = new _.Nw();Z.bindTo("mapTypeMaxZoom", E, "maxZoom");Z.bindTo("mapTypeMinZoom", E, "minZoom");Z.bindTo("maxZoom", a);Z.bindTo("minZoom", a);Z.bindTo("trackerMaxZoom", q, "maxZoom");U.bindTo("zoomRange", Z);z.bindTo("zoomRange", Z);U.bindTo("draggable", a);U.bindTo("scrollwheel", a);U.bindTo("disableDoubleClickZoom", a);var oa = new _.Ix(_.gk(c));p.bindTo("fontLoaded", oa);k = p.O;k.bindTo("scrollwheel", a);k.bindTo("disableDoubleClickZoom", a);g();_.I.addListener(a, "streetview_changed", g);if (!b.Ga) {
      var Ya = function Ya() {
        _.M("controls", function (b) {
          var c = new b.ei(w.j);
          p.set("layoutManager", c);z.bindTo("layoutBounds", c, "bounds");b.Fo(c, a, E, w.j, H, r.report_map_issue, Z, D, P, w.T, v);b.Go(a, w.O);b.lk(a.getDiv());
        });
      };if (_.jj()) {
        var $a = _.Mt.kd().S,
            k = new _.Hx();k.bindTo("layers", p);k.bindTo("gid", $a);k.bindTo("persistenceKey", $a);_.Y(a, "Sm");k = function k() {
          $a.get("gid") && _.Y(a, "Su");
        };k();_.I.addListener($a, "gid_changed", k);
      }var Bb = _.I.addListener(z, "tilesloading_changed", function () {
        z.get("tilesloading") && (Bb.remove(), Ya());
      });_.I.addListenerOnce(z, "tilesloaded", function () {
        _.M("util", function (b) {
          b.mk.sh();window.setTimeout((0, _.t)(b.Mf.ek, b.Mf), 5E3);b.Qo(a);
        });
      });_.Y(a, "Mm");b.v2 && _.Y(a, "Mz");_.il("Mm", "-p", a, !(!a || !a.Ga));zz(a, E);_.ll(a, "Mm");_.Ak(function () {
        _.ll(a, "Mm");
      });yz(a);c && Hz(new Iz(c), a, function () {
        return 0 != a.get("draggable");
      });
    }xz(a);var sc = Wy();c = new aA(a, new nz(v, function (a) {
      return a || sc;
    }));Ez(c, a.overlayMapTypes);wz(a, w.S.mapPane);_.sj() && p.bindTo("card", a);b.Ga || Fz(a);d && window.setTimeout(function () {
      _.I.trigger(a, "projection_changed");_.qa(a.get("bounds")) && _.I.trigger(a, "bounds_changed");_.I.trigger(a, "tilt_changed");_.qa(a.get("heading")) && _.I.trigger(a, "heading_changed");
    }, 0);_.T[43] && (d = _.fi(), c = _.Ke(_.R), d = 0 < _.Fc(d.N, 12) && "cn" != _.Ie(c).toLowerCase() ? _.Q(d.N, 12) : _.Q(d.N, 0), d = new Dz(d[0], v), d.bindTo("mapType", E), d.bindTo("center", a), d.bindTo("zoom", p), a.getPrintableImageUri = (0, _.t)(d.getPrintableImageUri, d));_.T[43] && a.bindTo("tilesloading", z);
  };
  hA.prototype.fitBounds = function (a, b) {
    function c() {
      var c = _.of(a.getDiv());c.width -= 80;c.width = Math.max(1, c.width);c.height -= 80;c.height = Math.max(1, c.height);var e = a.getProjection(),
          f = b.getSouthWest(),
          g = b.getNorthEast(),
          h = f.lng(),
          k = g.lng();h > k && (f = new _.L(f.lat(), h - 360, !0));f = e.fromLatLngToPoint(f);h = e.fromLatLngToPoint(g);g = Math.max(f.x, h.x) - Math.min(f.x, h.x);f = Math.max(f.y, h.y) - Math.min(f.y, h.y);c = g > c.width || f > c.height ? 0 : Math.floor(Math.min(_.fj(c.width + 1E-12) - _.fj(g + 1E-12), _.fj(c.height + 1E-12) - _.fj(f + 1E-12)));g = _.Wi(e, b, 0);e = _.Xi(e, new _.N((g.ua + g.wa) / 2, (g.ra + g.ya) / 2), 0);_.C(c) && (a.setCenter(e), a.setZoom(c));
    }a.getProjection() ? c() : _.I.addListenerOnce(a, "projection_changed", c);
  };hA.prototype.j = function (a, b, c, d, e, f) {
    var g = _.lv(a, b, c, d, { Rc: f });_.uu(function () {
      g.setUrl(e);
    });return g;
  };_.oc("map", new hA());
});
//# sourceMappingURL=map.js.map
