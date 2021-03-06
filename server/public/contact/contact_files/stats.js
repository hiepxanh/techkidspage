'use strict';

google.maps.__gjsload__('stats', function (_) {
  'use strict';
  var f3 = function f3(a, b, c) {
    var d = [];_.Mc(a, function (a, c) {
      d.push(c + b + a);
    });return d.join(c);
  };var g3 = function g3(a, b, c, d) {
    var e = {};e.host = window.document.location && window.document.location.host || window.location.host;e.v = a;e.r = Math.round(1 / b);c && (e.client = c);d && (e.key = d);return e;
  };var gca = function gca(a) {
    var b = {};_.Mc(a, function (a, d) {
      b[(0, window.encodeURIComponent)(d)] = (0, window.encodeURIComponent)(a).replace(/%7C/g, "|");
    });return f3(b, ":", ",");
  };var hca = function hca() {
    this.j = new _.oB();this.O = 0;
  };
  var h3 = function h3(a, b) {
    var c = new window.Image(),
        d = a.O++;a.j.set(d, c);c.onload = c.onerror = function () {
      c.onload = c.onerror = _.ra;a.j.remove(d);
    };c.src = b;
  };var ica = function ica(a, b, c, d) {
    var e = _.R.N[23],
        f = _.R.N[22];this.V = a;this.na = b;this.oa = null != e ? e : 500;this.S = null != f ? f : 2;this.U = c;this.T = d;this.O = new _.oB();this.j = 0;this.P = _.Aa();i3(this);
  };var i3 = function i3(a) {
    window.setTimeout(function () {
      jca(a);i3(a);
    }, Math.min(a.oa * Math.pow(a.S, a.j), 2147483647));
  };var j3 = function j3(a, b, c) {
    a.O.set(b, c);
  };
  var jca = function jca(a) {
    var b = g3(a.na, a.U, a.T, void 0);b.t = a.j + "-" + (_.Aa() - a.P);a.O.forEach(function (a, d) {
      var e = a();0 < e && (b[d] = Number(e.toFixed(2)) + (_.zk() ? "" : "-if"));
    });a.V.j({ ev: "api_snap" }, b);++a.j;
  };var k3 = function k3(a, b, c, d, e) {
    this.T = a;this.V = b;this.S = c;this.O = d;this.P = e;this.j = new _.oB();this.U = _.Aa();
  };var l3 = function l3(a, b) {
    this.S = b;this.P = a + "/maps/gen_204";this.O = new hca();
  };var m3 = function m3() {
    this.N = new _.oB();
  };var kca = function kca(a) {
    var b = 0,
        c = 0;a.N.forEach(function (a) {
      b += a.vr;c += a.Uq;
    });return c ? b / c : 0;
  };
  var n3 = function n3(a, b, c, d, e) {
    this.U = a;this.V = b;this.T = c;this.P = d;this.S = e;this.O = {};this.j = [];
  };var o3 = function o3(a, b, c, d) {
    this.P = a;_.I.bind(this.P, "set_at", this, this.S);_.I.bind(this.P, "insert_at", this, this.S);this.U = b;this.V = c;this.T = d;this.O = 0;this.j = {};this.S();
  };var p3 = function p3() {
    this.j = {};
  };var lca = function lca() {
    this.j = [];this.O = [];
  };var q3 = function q3(a, b, c) {
    this.j = a;this.O = b;this.P = c;
  };
  var mca = function mca(a, b) {
    a.j.j.push(b);var c = a.O,
        d = _.mb(b),
        c = c.j;d in c || (c[d] = 0);++c[d];d = a.j;if (d.j.length + d.O.length > a.P) {
      c = a.j;d = c.O;c = c.j;if (!d.length) for (; c.length;) {
        d.push(c.pop());
      }(d = d.pop()) && a.O.remove(d);
    }
  };var r3 = function r3(a, b) {
    this.T = new q3(new lca(), new p3(), 100);this.O = null;this.Ba = [];this.S = a;_.I.bind(a, "insert_at", this, this.Pe);_.I.bind(a, "set_at", this, this.Pe);_.I.bind(a, "remove_at", this, this.Pe);this.Pe();this.j = 0;this.pa = b;this.P = 0;
  };
  var s3 = function s3() {
    this.j = _.Se(_.R);var a;_.sj() ? (a = _.Ke(_.R).N[11], a = null != a ? a : "") : a = _.ux;this.Vc = new l3(a, _.$h);new o3(_.Wh, (0, _.t)(this.Vc.j, this.Vc), _.Hf, !!this.j);a = _.Oe(_.We());this.T = a.split(".")[1] || a;_.Zh && (this.O = new ica(this.Vc, this.T, this.na, this.j));this.U = {};this.S = {};this.P = {};this.V = {};this.na = _.Re();
  };
  k3.prototype.nh = function (a, b) {
    var c = _.qa(b) ? b : 1;this.j.isEmpty() && window.setTimeout((0, _.t)(function () {
      var a = g3(this.V, this.S, this.O, this.P);a.t = _.Aa() - this.U;var b = this.j;_.pB(b);for (var c = {}, g = 0; g < b.j.length; g++) {
        var h = b.j[g];c[h] = b.pa[h];
      }_.oA(a, c);this.j.clear();this.T.j({ ev: "api_maprft" }, a);
    }, this), 500);c = this.j.get(a, 0) + c;this.j.set(a, c);
  };
  l3.prototype.j = function (a, b) {
    var c = b || {},
        d = _.dj().toString(36);c.src = "apiv3";c.token = this.S;c.ts = d.substr(d.length - 6);a.cad = gca(c);c = f3(a, "=", "&");h3(this.O, this.P + "?target=api&" + c);
  };l3.prototype.th = function (a) {
    h3(this.O, a);
  };m3.prototype.update = function (a, b, c) {
    this.N.set(_.mb(a), { vr: b, Uq: c });
  };n3.prototype.nh = function (a) {
    this.O[a] || (this.O[a] = !0, this.j.push(a), 2 > this.j.length && _.IA(this, this.na, 500));
  };
  n3.prototype.na = function () {
    for (var a = g3(this.V, this.T, this.P, this.S), b = 0, c; c = this.j[b]; ++b) {
      a[c] = "1";
    }a.hybrid = +(_.Uj() && _.Vj());this.j.length = 0;this.U.j({ ev: "api_mapft" }, a);
  };o3.prototype.S = function () {
    for (var a; a = this.P.removeAt(0);) {
      var b = a.vq;a = a.timestamp - this.V;++this.O;this.j[b] || (this.j[b] = 0);++this.j[b];if (20 <= this.O && !(this.O % 5)) {
        var c = {};c.s = b;c.sr = this.j[b];c.tr = this.O;c.te = a;c.hc = this.T ? "1" : "0";this.U({ ev: "api_services" }, c);
      }
    }
  };p3.prototype.remove = function (a) {
    a = _.mb(a);var b = this.j;a in b && (--b[a], b[a] || delete b[a]);
  };q3.prototype.contains = function (a) {
    return !!this.O.j[_.mb(a)];
  };_.y(r3, _.J);_.m = r3.prototype;_.m.Pe = function () {
    _.G(this.Ba, _.I.removeListener);this.Ba.length = 0;var a = this.Ba,
        b = (0, _.t)(this.ug, this);this.S.forEach(function (c) {
      a.push(_.I.addListener(c.data, "insert", b));
    });b();
  };
  _.m.ug = function () {
    var a = this.get("bounds");if (this.get("projection") && a && this.O) {
      var b = {};this.S.forEach((0, _.t)(function (c) {
        c.data.forEach((0, _.t)(function (c) {
          var d = c.rawData;if (0 == ("" + d.layer).indexOf(this.O.substr(0, 5)) && d.features) {
            c = d.id.length;for (var e = _.jJ(d.id), d = d.features, k = 0, n; n = d[k]; k++) {
              var p = n.id,
                  q;a: {
                q = n;if (!q.latLngCached) {
                  var r = q.a;if (!r) {
                    q = null;break a;
                  }var v = new _.N(r[0], r[1]),
                      r = e,
                      v = [v.x, v.y],
                      x = (1 << c) / 8388608;v[0] /= x;v[1] /= x;v[0] += r.ua;v[1] += r.ra;v[0] /= 8388608;v[1] /= 8388608;r = new _.N(v[0], v[1]);v = this.get("projection");q.latLngCached = v && v.fromPointToLatLng(r);
                }q = q.latLngCached;
              }q && a.contains(q) && (b[p] = n);
            }
          }
        }, this));
      }, this));var c = this.T,
          d;for (d in b) {
        c.contains(d) || (++this.j, mca(c, d));
      }!this.P && this.j && (this.P = _.IA(this, this.Eo, 0));
    } else _.IA(this, this.ug, 1E3);
  };_.m.Eo = function () {
    this.P = 0;this.j && (_.hl(this.pa, "smni", this.j), this.j = 0);
  };_.m.mapType_changed = function () {
    var a = this.get("mapType");this.O = a && a.Nf;
  };_.m.bounds_changed = function () {
    this.ug();
  };_.m = s3.prototype;_.m.vn = function (a, b) {
    var c = new r3(b, a);c.bindTo("mapType", a.__gm);c.bindTo("zoom", a);c.bindTo("bounds", a);c.bindTo("projection", a);
  };_.m.Un = function (a) {
    a = _.mb(a);this.U[a] || (this.U[a] = new n3(this.Vc, this.T, this.na, this.j));return this.U[a];
  };_.m.Sn = function (a) {
    a = _.mb(a);this.S[a] || (this.S[a] = new k3(this.Vc, this.T, 1, this.j));return this.S[a];
  };_.m.bf = function (a) {
    if (this.O) {
      this.P[a] || (this.P[a] = new _.tC(), j3(this.O, a, function () {
        return b.jd();
      }));var b = this.P[a];return b;
    }
  };
  _.m.Rn = function (a) {
    if (this.O) {
      this.V[a] || (this.V[a] = new m3(), j3(this.O, a, function () {
        return kca(b);
      }));var b = this.V[a];return b;
    }
  };var nca = new s3();_.oc("stats", nca);
});
//# sourceMappingURL=stats.js.map
