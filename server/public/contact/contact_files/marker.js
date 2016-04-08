'use strict';

google.maps.__gjsload__('marker', function (_) {
  'use strict';
  var aZ = function aZ(a) {
    a.stop();a.mj();
  };var bZ = function bZ(a) {
    return a;
  };var cZ = function cZ(a) {
    return a ? a.__gm_at || _.tg : null;
  };var dZ = function dZ() {
    for (var a = [], b = 0; b < eZ.length; b++) {
      var c = eZ[b];fZ(c);c.j || a.push(c);
    }eZ = a;0 == eZ.length && (window.clearInterval(gZ), gZ = null);
  };var hZ = function hZ(a, b, c) {
    _.Wa(function () {
      a.style.WebkitAnimationDuration = c.duration ? c.duration + "ms" : null;a.style.WebkitAnimationIterationCount = c.Pc;a.style.WebkitAnimationName = b;
    });
  };
  var iZ = function iZ(a, b, c) {
    this.S = a;this.U = b;this.O = -1;"infinity" != c.Pc && (this.O = c.Pc || 1);this.V = c.duration || 1E3;this.j = !1;this.P = 0;
  };var fZ = function fZ(a) {
    if (!a.j) {
      var b = _.dj();jZ(a, (b - a.P) / a.V);b >= a.P + a.V && (a.P = _.dj(), "infinite" != a.O && (a.O--, a.O || a.cancel()));
    }
  };
  var jZ = function jZ(a, b) {
    var c = 1,
        d,
        e = a.U;d = e.j[kZ(e, b)];var f,
        e = a.U;(f = e.j[kZ(e, b) + 1]) && (c = (b - d.time) / (f.time - d.time));var e = cZ(a.S),
        g = a.S;f ? (c = (0, lZ[d.Db || "linear"])(c), d = d.translate, f = f.translate, c = new _.N(Math.round(c * f[0] - c * d[0] + d[0]), Math.round(c * f[1] - c * d[1] + d[1]))) : c = new _.N(d.translate[0], d.translate[1]);c = g.__gm_at = c;g = c.x - e.x;e = c.y - e.y;if (0 != g || 0 != e) c = a.S, d = new _.N(_.Gj(c.style.left) || 0, _.Gj(c.style.top) || 0), d.x = d.x + g, d.y += e, _.hk(c, d);_.I.trigger(a, "tick");
  };
  var mZ = function mZ(a, b, c) {
    this.O = a;this.S = b;this.j = c;this.P = !1;
  };var nZ = function nZ(a, b, c) {
    var d, e;if (e = 0 != c.Ak) e = 5 == _.sk.P.j || 6 == _.sk.P.j || 3 == _.sk.P.type && _.Nj(_.sk.P.version, 7);e ? d = new mZ(a, b, c) : d = new iZ(a, b, c);d.T();return d;
  };var oZ = function oZ(a) {
    this.j = a;this.O = "";
  };
  var pZ = function pZ(a, b) {
    var c = [];c.push("@-webkit-keyframes ", b, " {\n");_.G(a.j, function (a) {
      c.push(100 * a.time, "% { ");c.push("-webkit-transform: translate3d(", a.translate[0], "px,", a.translate[1], "px,0); ");c.push("-webkit-animation-timing-function: ", a.Db, "; ");c.push("}\n");
    });c.push("}\n");return c.join("");
  };var kZ = function kZ(a, b) {
    for (var c = 0; c < a.j.length - 1; c++) {
      var d = a.j[c + 1];if (b >= a.j[c].time && b < d.time) return c;
    }return a.j.length - 1;
  };
  var qZ = function qZ(a) {
    if (a.O) return a.O;a.O = "_gm" + Math.round(1E4 * Math.random());var b = pZ(a, a.O);rZ || (rZ = window.document.createElement("style"), rZ.type = "text/css", _.pj().appendChild(rZ));rZ.textContent += b;return a.O;
  };var sZ = function sZ(a, b) {
    _.kB().Pa.load(new _.HA(a), function (a) {
      b(a && a.size);
    });
  };
  var tZ = function tZ() {
    this.icon = { url: _.Ck("api-3/images/spotlight-poi", !0), scaledSize: new _.O(22, 40), origin: new _.N(0, 0), anchor: new _.N(11, 40), labelOrigin: new _.N(11, 12) };this.O = { url: _.Ck("api-3/images/spotlight-poi-dotless", !0), scaledSize: new _.O(22, 40), origin: new _.N(0, 0), anchor: new _.N(11, 40), labelOrigin: new _.N(11, 12) };this.j = { url: _.wC("icons/spotlight/directions_drag_cross_67_16.png", 4), size: new _.O(16, 16), origin: new _.N(0, 0), anchor: new _.N(8, 8) };this.shape = { coords: [8, 0, 5, 1, 4, 2, 3, 3, 2, 4, 2, 5, 1, 6, 1, 7, 0, 8, 0, 14, 1, 15, 1, 16, 2, 17, 2, 18, 3, 19, 3, 20, 4, 21, 5, 22, 5, 23, 6, 24, 7, 25, 7, 27, 8, 28, 8, 29, 9, 30, 9, 33, 10, 34, 10, 40, 11, 40, 11, 34, 12, 33, 12, 30, 13, 29, 13, 28, 14, 27, 14, 25, 15, 24, 16, 23, 16, 22, 17, 21, 18, 20, 18, 19, 19, 18, 19, 17, 20, 16, 20, 15, 21, 14, 21, 8, 20, 7, 20, 6, 19, 5, 19, 4, 18, 3, 17, 2, 16, 1, 14, 1, 13, 0, 8, 0], type: "poly" };
  };var uZ = function uZ(a) {
    _.S.call(this);this.j = a;vZ || (vZ = new tZ());
  };
  var wZ = function wZ(a, b, c) {
    xZ(a, c, function (c) {
      a.set(b, c);if (c = a.get("modelLabel")) {
        var e = {};e.text = c.text || c;e.text = e.text.substr(0, 1);e.color = _.Na(c.color, "#000000");e.fontWeight = _.Na(c.fontWeight, "");e.fontSize = _.Na(c.fontSize, "14px");e.fontFamily = _.Na(c.fontFamily, "Roboto,Arial,sans-serif");c = e;
      } else c = null;a.set("viewLabel", c);
    });
  };
  var xZ = function xZ(a, b, c) {
    b ? null != b.path ? c(a.j(b)) : (_.Qa(b) || (b.size = b.size || b.scaledSize), b.size ? c(b) : (b.url || (b = { url: b }), sZ(b.url, function (a) {
      b.size = a || new _.O(24, 24);c(b);
    }))) : c(null);
  };
  var yZ = function yZ() {
    var a,
        b = new _.J(),
        c = !1;b.changed = function () {
      if (!c) {
        var d;d = b.get("mapPixelBoundsQ");var e = b.get("icon"),
            f = b.get("position");if (d && e && f) {
          var g = e.anchor || _.tg,
              h = e.size.width + Math.abs(g.x),
              e = e.size.height + Math.abs(g.y);d = f.x > d.ua - h && f.y > d.ra - e && f.x < d.wa + h && f.y < d.ya + e ? b.get("visible") : !1;
        } else d = b.get("visible");a != d && (a = d, c = !0, b.set("shouldRender", a), c = !1);
      }
    };return b;
  };var zZ = function zZ(a) {
    this.O = a;this.j = !1;
  };
  var AZ = function AZ(a, b, c, d) {
    this.U = c;this.P = a;this.S = b;this.na = d;this.T = 0;this.j = new _.Pu(this.Al, 0, this);
  };var BZ = function BZ(a, b) {
    a.V = b;_.Qu(a.j);
  };var CZ = function CZ(a) {
    a.O && (_.nj(a.O, !0), a.O = null);
  };
  var DZ = function DZ(a, b, c) {
    _.jk(b, "");var d = _.pf(),
        e = _.gk(b).createElement("canvas");e.width = c.size.width * d;e.height = c.size.height * d;e.style.width = _.V(c.size.width);e.style.height = _.V(c.size.height);_.nf(b, c.size);b.appendChild(e);_.hk(e, _.tg);_.rk(e);b = e.getContext("2d");b.lineCap = b.lineJoin = "round";b.scale(d, d);a = a(b);b.beginPath();a.Zb(c.S, c.anchor.x, c.anchor.y, c.rotation || 0, c.scale);c.O && (b.fillStyle = c.fillColor, b.globalAlpha = c.O, b.fill());c.P && (b.lineWidth = c.P, b.strokeStyle = c.strokeColor, b.globalAlpha = c.j, b.stroke());
  };var EZ = function EZ(a, b, c) {
    _.jk(b, "");_.nf(b, c.size);b = _.AD("gm_v:shape", b);_.rk(b);_.hk(b, c.anchor);_.nf(b, new _.O(1, 1));b.coordsize = "1000 1000";b.coordorigin = "0 0";a = a.Zb(c.S, c.scale);b.path = a;b.style.rotation = Math.round(_.Ka(c.rotation || 0));_.FD(b, c.fillColor, c.O);_.HD(b, c.strokeColor, c.j, c.P);
  };
  var FZ = function FZ(a) {
    _.S.call(this);this.Ee = a;this.Aa = new _.II(0);this.Aa.bindTo("position", this);this.dc = this.Qb = !1;this.Bb = new _.N(0, 0);this.Xa = new _.O(0, 0);this.Ea = new _.N(0, 0);this.kb = !0;this.Bf = !1;this.j = this.ac = this.Rb = this.jc = null;this.yg = !1;this.Ib = [_.I.addListener(this, "dragstart", this.Dl), _.I.addListener(this, "dragend", this.Cl), _.I.addListener(this, "panbynow", this.U)];this.S = this.V = this.Ka = this.na = null;
  };var GZ = function GZ(a) {
    a.O && _.nj(a.O, !0);a.O = null;a.P && _.nj(a.P, !0);a.P = null;HZ(a);a.qa = null;
  };
  var IZ = function IZ(a) {
    var b = a.Tn();if (b) {
      if (!a.T) {
        var c = a.T = new AZ(a.getPanes(), b, a.get("opacity"), a.get("visible"));a.Fe = [_.I.addListener(a, "label_changed", function () {
          c.setLabel(this.get("label"));
        }), _.I.addListener(a, "opacity_changed", function () {
          c.setOpacity(this.get("opacity"));
        }), _.I.addListener(a, "panes_changed", function () {
          var a = this.get("panes");c.P = a;CZ(c);_.Qu(c.j);
        }), _.I.addListener(a, "visible_changed", function () {
          c.setVisible(this.get("visible"));
        })];
      }b = a.Lg();a.getPosition();if (b) {
        var d = a.O,
            e = JZ(a),
            d = KZ(a, b, e, cZ(d) || _.tg),
            b = b.labelOrigin || new _.N(b.size.width / 2, b.size.height / 2);BZ(a.T, new _.N(d.x + b.x, d.y + b.y));aZ(a.T.j);
      }
    }
  };var HZ = function HZ(a) {
    a.Bf ? a.yg = !0 : (LZ(a.na), a.na = null, MZ(a), LZ(a.Oa), a.Oa = null, a.ta && _.nj(a.ta, !0), a.ta = null, a.S && (a.S.unbindAll(), a.S.release(), a.S = null, LZ(a.na), a.na = null));
  };
  var KZ = function KZ(a, b, c, d) {
    var e = a.getPosition(),
        f = b.size,
        g = (b = b.anchor) ? b.x : f.width / 2;a.Bb.x = e.x + d.x - Math.round(g - (g - f.width / 2) * (1 - c));b = b ? b.y : f.height;a.Bb.y = e.y + d.y - Math.round(b - (b - f.height / 2) * (1 - c));return a.Bb;
  };
  var NZ = function NZ(a, b, c, d, e) {
    if (null != d.url) {
      var f = c;c = d.origin || _.tg;a = a.get("opacity");var g = _.Na(a, 1);f ? (f.firstChild.__src__ != d.url && (b = f.firstChild, _.uB(b, d.url, b.O)), _.$B(f, d.size, c, d.scaledSize), f.firstChild.style.opacity = g) : (e = e || {}, e.Eg = 1 != _.W.type, e.alpha = !0, e.opacity = a, f = _.aC(d.url, null, c, d.size, null, d.scaledSize, e), _.AC(f), b.appendChild(f));b = f;
    } else b = c || _.X("div", b), OZ(b, d), _.tk(b, _.EA(a.get("opacity")), !0);c = b;c.j = d;return c;
  };
  var PZ = function PZ(a, b) {
    a.getDraggable() ? MZ(a) : QZ(a, b);b && !a.Oa && (a.Oa = [_.I.tb(b, "mouseover", a), _.I.tb(b, "mouseout", a), _.I.Fa(b, "contextmenu", a, function (a) {
      _.Za(a);_.I.trigger(this, "rightclick", a);
    })]);
  };var LZ = function LZ(a) {
    if (a) for (var b = 0, c = a.length; b < c; b++) {
      _.I.removeListener(a[b]);
    }
  };var QZ = function QZ(a, b) {
    b && !a.Ka && (a.Ka = [_.I.tb(b, "click", a), _.I.tb(b, "dblclick", a), _.I.tb(b, "mouseup", a), _.I.tb(b, "mousedown", a)]);
  };var MZ = function MZ(a) {
    LZ(a.Ka);a.Ka = null;
  };
  var RZ = function RZ(a, b) {
    b && !a.na && (a.na = [_.I.tb(b, "click", a), _.I.tb(b, "dblclick", a), _.I.bind(b, "mouseup", a, function (a) {
      this.Bf = !1;this.yg && _.IA(this, function () {
        this.yg = !1;HZ(this);this.Ia();
      }, 0);_.I.trigger(this, "mouseup", a);
    }), _.I.bind(b, "mousedown", a, function (a) {
      this.Bf = !0;_.I.trigger(this, "mousedown", a);
    }), _.I.forward(b, "dragstart", a), _.I.forward(b, "drag", a), _.I.forward(b, "dragend", a), _.I.forward(b, "panbynow", a)]);
  };var JZ = function JZ(a) {
    return _.sk.j ? Math.min(1, a.get("scale") || 1) : 1;
  };
  var SZ = function SZ(a) {
    if (!a.kb) {
      a.j && (a.V && _.I.removeListener(a.V), a.j.cancel(), a.j = null);var b = a.get("animation");if (b = TZ[b]) {
        var c = b.options;a.O && (a.kb = !0, a.set("animating", !0), a.j = nZ(a.O, b.icon, c), a.V = _.I.addListenerOnce(a.j, "done", (0, _.t)(function () {
          this.set("animating", !1);this.j = null;this.set("animation", null);
        }, a)));
      }
    }
  };
  var UZ = function UZ(a, b, c) {
    function d(a) {
      e[_.mb(a)] = {};if (b instanceof _.kd || !a.get("mapOnly")) {
        var d = b instanceof _.kd ? _.LI(b.__gm, a) : bZ;VZ(a, b, e[_.mb(a)], c, d);
      }
    }var e = {};_.I.addListener(a, "insert", d);_.I.addListener(a, "remove", function (a) {
      var b = e[_.mb(a)],
          c = b.ah;c && (c.set("animation", null), c.unbindAll(), c.set("panes", null), c.release(), delete b.ah);if (c = b.Aj) c.unbindAll(), delete b.Aj;if (c = b.Od) c.unbindAll(), delete b.Od;if (c = b.re) c.unbindAll(), delete b.re;WZ(b);delete e[_.mb(a)];
    });a.forEach(d);
  };
  var XZ = function XZ(a, b, c, d) {
    var e = d.Zi = [_.I.forward(a, "panbynow", c.__gm), _.I.forward(c, "forceredraw", a)];_.G("click dblclick mouseup mousedown mouseover mouseout rightclick dragstart drag dragend".split(" "), function (c) {
      e.push(_.I.addListener(a, c, function (d) {
        d = new _.Cj(b.get("internalPosition"), d, a.getPosition());_.I.trigger(b, c, d);
      }));
    });
  };var WZ = function WZ(a) {
    _.G(a.Zi, _.I.removeListener);delete a.Zi;
  };
  var VZ = function VZ(a, b, c, d, e) {
    d = c.re = c.re || new uZ(d);d.bindTo("modelIcon", a, "icon");d.bindTo("modelLabel", a, "label");d.bindTo("modelCross", a, "cross");d.bindTo("modelShape", a, "shape");d.bindTo("useDefaults", a, "useDefaults");e = c.ah = c.ah || new FZ(e);e.bindTo("icon", d, "viewIcon");e.bindTo("label", d, "viewLabel");e.bindTo("cross", d, "viewCross");e.bindTo("shape", d, "viewShape");e.bindTo("title", a);e.bindTo("cursor", a);e.bindTo("dragging", a);e.bindTo("clickable", a);e.bindTo("zIndex", a);e.bindTo("opacity", a);e.bindTo("anchorPoint", a);e.bindTo("animation", a);e.bindTo("crossOnDrag", a);e.bindTo("raiseOnDrag", a);e.bindTo("animating", a);var f = b.__gm;e.bindTo("mapPixelBounds", f, "pixelBounds");e.bindTo("panningEnabled", b, "draggable");_.I.addListener(a, "dragging_changed", function () {
      f.set("markerDragging", a.get("dragging"));
    });f.set("markerDragging", f.get("markerDragging") || a.get("dragging"));var g = c.Od || new _.tD();e.bindTo("scale", g);e.bindTo("position", g, "pixelPosition");g.bindTo("latLngPosition", a, "internalPosition");g.bindTo("focus", b, "position");g.bindTo("zoom", f);g.bindTo("offset", f);g.bindTo("center", f, "projectionCenterQ");g.bindTo("projection", b);var h = new zZ(b instanceof _.yc);h.bindTo("internalPosition", g, "latLngPosition");h.bindTo("place", a);h.bindTo("position", a);h.bindTo("draggable", a);e.bindTo("draggable", h, "actuallyDraggable");h = c.Aj = yZ();h.bindTo("visible", a);h.bindTo("cursor", a);h.bindTo("icon", a);h.bindTo("icon", d, "viewIcon");h.bindTo("mapPixelBoundsQ", f, "pixelBoundsQ");h.bindTo("position", g, "pixelPosition");e.bindTo("visible", h, "shouldRender");c.Od = g;e.bindTo("panes", f);WZ(c);XZ(e, a, b, c);
  };var YZ = function YZ(a) {
    this.j = a;
  };
  var ZZ = function ZZ(a, b, c) {
    var d = this;this.S = b;this.O = c;this.Ba = {};this.j = {};this.P = 0;var e = { animating: 1, animation: 1, attribution: 1, clickable: 1, cursor: 1, draggable: 1, flat: 1, icon: 1, opacity: 1, optimized: 1, place: 1, position: 1, shape: 1, title: 1, visible: 1, zIndex: 1 };this.T = function (a) {
      a in e && (delete this.changed, d.j[_.mb(this)] = this, $Z(d));
    };a.j = function (a) {
      a_(d, a);
    };a.onRemove = function (a) {
      delete a.changed;delete d.j[_.mb(a)];d.S.remove(a);d.O.remove(a);_.jl("Om", "-p", a);_.jl("Om", "-v", a);_.jl("Smp", "-p", a);_.I.removeListener(d.Ba[_.mb(a)]);
      delete d.Ba[_.mb(a)];
    };a = a.O;for (var f in a) {
      a_(this, a[f]);
    }
  };var a_ = function a_(a, b) {
    a.j[_.mb(b)] = b;$Z(a);
  };var $Z = function $Z(a) {
    a.P || (a.P = _.Wa(function () {
      a.P = 0;b_(a);
    }));
  };
  var b_ = function b_(a) {
    var b = a.j;a.j = {};for (var c in b) {
      var d = b[c],
          e = c_(d);d.changed = a.T;if (!d.get("animating")) if (a.S.remove(d), e && 0 != d.get("visible")) {
        var f = 0 != d.get("optimized"),
            g = d.get("draggable"),
            h = !!d.get("animation"),
            k = d.get("icon"),
            k = !!k && null != k.path,
            n = null != d.get("label");!f || g || h || k || n ? _.wc(a.O, d) : (a.O.remove(d), _.wc(a.S, d));if (!d.get("pegmanMarker")) {
          var p = d.get("map");_.Y(p, "Om");_.il("Om", "-p", d, !(!p || !p.Ga));p.getBounds() && p.getBounds().contains(e) && _.il("Om", "-v", d, !(!p || !p.Ga));a.Ba[_.mb(d)] = a.Ba[_.mb(d)] || _.I.addListener(d, "click", function (a) {
            _.il("Om", "-i", a, !(!p || !p.Ga));
          });if (e = d.get("place")) e.placeId ? _.Y(p, "Smpi") : _.Y(p, "Smpq"), _.il("Smp", "-p", d, !(!p || !p.Ga)), d.get("attribution") && _.Y(p, "Sma");
        }
      } else a.O.remove(d);
    }
  };var c_ = function c_(a) {
    var b = a.get("place"),
        b = b ? b.location : a.get("position");a.set("internalPosition", b);return b;
  };var d_ = function d_(a, b, c) {
    this.P = a;this.O = c;
  };
  var e_ = function e_(a, b, c, d) {
    var e = b.Ja,
        f = null,
        g = new _.N(0, 0),
        h = new _.N(0, 0);a = a.P;for (var k in a) {
      var n = a[k],
          p = 1 << n.zoom;h.x = 256 * n.La.x;h.y = 256 * n.La.y;var q = g.x = e.x * p + c - h.x,
          p = g.y = e.y * p + d - h.y;if (0 <= q && 256 > q && 0 <= p && 256 > p) {
        f = n;break;
      }
    }if (!f) return null;var r = [];f.Wa.forEach(function (a) {
      r.push(a);
    });r.sort(function (a, b) {
      return b.zIndex - a.zIndex;
    });c = null;for (e = 0; d = r[e]; ++e) {
      if (f = d.se, 0 != f.Mb && (f = f.Vb, f_(g.x, g.y, d))) {
        c = f;break;
      }
    }c && (b.j = d);return c;
  };
  var f_ = function f_(a, b, c) {
    if (c.dx > a || c.dy > b || c.dx + c.Ab < a || c.dy + c.yb < b) a = !1;else a: {
      var d = c.se.shape;a = a - c.dx;b = b - c.dy;c = d.coords;switch (d.type.toLowerCase()) {case "rect":
          a = c[0] <= a && a <= c[2] && c[1] <= b && b <= c[3];break a;case "circle":
          d = c[2];a -= c[0];b -= c[1];a = a * a + b * b <= d * d;break a;default:
          d = c.length, c[0] == c[d - 2] && c[1] == c[d - 1] || c.push(c[0], c[1]), a = 0 != _.NI(a, b, c);}
    }return a;
  };
  var g_ = function g_(a, b) {
    this.P = b;var c = this;a.j = function (a) {
      h_(c, a, !0);
    };a.onRemove = function (a) {
      h_(c, a, !1);
    };this.O = null;this.j = !1;this.T = 0;_.CA(a) && (this.j = !0, this.S());
  };var h_ = function h_(a, b, c) {
    4 > a.T++ ? c ? a.P.O(b) : a.P.P(b) : a.j = !0;a.O || (a.O = _.Wa((0, _.t)(a.S, a)));
  };
  var i_ = function i_(a, b, c) {
    this.S = a;a = _.kf(-100, -300, 100, 300);this.j = new _.VI(a, void 0);this.O = new _.vc();a = _.kf(-90, -180, 90, 180);this.P = _.JN(a, function (a, b) {
      return a.Af == b.Af;
    });this.T = c;var d = this;b.j = function (a) {
      var b = d.get("projection"),
          c;c = a.Id;-64 > c.dx || -64 > c.dy || 64 < c.dx + c.Ab || 64 < c.dy + c.yb ? (_.wc(d.O, a), c = d.j.search(_.Jh)) : (c = a.Qa, c = new _.N(c.lat(), c.lng()), a.Ja = c, _.IN(d.P, { Ja: c, Af: a }), c = _.YI(d.j, c));for (var h = 0, k = c.length; h < k; ++h) {
        var n = c[h],
            p = n.Va || null;if (n = j_(p, n.wk || null, a, b)) a.Wa[_.mb(n)] = n, _.wc(p.Wa, n);
      }
    };b.onRemove = function (a) {
      k_(d, a);
    };
  };var l_ = function l_(a, b) {
    a.S[_.mb(b)] = b;var c = a.get("projection"),
        d = b.La,
        e = 1 << b.zoom,
        f = new _.N(256 * d.x / e, 256 * d.y / e),
        d = _.kf((256 * d.x - 64) / e, (256 * d.y - 64) / e, (256 * (d.x + 1) + 64) / e, (256 * (d.y + 1) + 64) / e);_.KN(d, c, f, function (d, e) {
      d.wk = e;d.Va = b;b.Wc[_.mb(d)] = d;_.WI(a.j, d);var f = _.La(a.P.search(d), function (a) {
        return a.Af;
      });a.O.forEach((0, _.t)(f.push, f));for (var n = 0, p = f.length; n < p; ++n) {
        var q = f[n],
            r = j_(b, d.wk, q, c);r && (q.Wa[_.mb(r)] = r, _.wc(b.Wa, r));
      }
    });a.T(b.Ha, b.Wa);
  };
  var m_ = function m_(a, b) {
    delete a.S[_.mb(b)];b.Wa.forEach(function (a) {
      b.Wa.remove(a);delete a.se.Wa[_.mb(a)];
    });var c = a.j;_.Fa(b.Wc, function (a, b) {
      c.remove(b);
    });
  };var k_ = function k_(a, b) {
    a.O.contains(b) ? a.O.remove(b) : a.P.remove({ Ja: b.Ja, Af: b });_.Fa(b.Wa, function (a, d) {
      delete b.Wa[a];d.Va.Wa.remove(d);
    });
  };
  var j_ = function j_(a, b, c, d) {
    b = d.fromLatLngToPoint(b);d = d.fromLatLngToPoint(c.Qa);d.x -= b.x;d.y -= b.y;b = 1 << a.zoom;d.x *= b;d.y *= b;b = c.zIndex;_.C(b) || (b = d.y);b = Math.round(1E3 * b) + _.mb(c) % 1E3;var e = c.Id;a = { jb: e.jb, Ob: e.Ob, Pb: e.Pb, Hb: e.Hb, Gb: e.Gb, dx: e.dx + d.x, dy: e.dy + d.y, Ab: e.Ab, yb: e.yb, zIndex: b, opacity: c.opacity, Va: a, se: c };return 256 < a.dx || 256 < a.dy || 0 > a.dx + a.Ab || 0 > a.dy + a.yb ? null : a;
  };var n_ = function n_(a) {
    return function (b, c) {
      var d = a(b, c);return new g_(c, d);
    };
  };
  var o_ = function o_(a, b, c) {
    var d = new YZ(_.kB().Pa),
        e = new tZ(),
        f = p_,
        g = this;a.j = function (a) {
      aaa(g, a);
    };a.onRemove = function (a) {
      g.O.remove(a.__gm.qf);delete a.__gm.qf;
    };this.O = b;this.j = e;this.T = f;this.S = d;this.P = c;
  };
  var aaa = function aaa(a, b) {
    var c = b.get("internalPosition"),
        d = b.get("zIndex"),
        e = b.get("opacity"),
        f = b.__gm.qf = { Vb: b, Qa: c, zIndex: d, opacity: e, Wa: {} },
        c = b.get("useDefaults"),
        d = b.get("icon"),
        g = b.get("shape");g || d && !c || (g = a.j.shape);var h = d ? a.T(d) : a.j.icon,
        k = _.Wb(1, function () {
      if (f == b.__gm.qf && (f.Id || f.j)) {
        var c = g,
            d;if (f.Id) {
          d = h.size;var e = b.get("anchorPoint");if (!e || e.O) e = new _.N(f.Id.dx + d.width / 2, f.Id.dy), e.O = !0, b.set("anchorPoint", e);
        } else d = f.j.size;c ? c.coords = c.coords || c.coord : c = { type: "rect", coords: [0, 0, d.width, d.height] };f.shape = c;f.Mb = b.get("clickable");f.title = b.get("title") || null;f.cursor = b.get("cursor") || "pointer";_.wc(a.O, f);
      }
    });h.url ? a.S.load(h, function (a) {
      f.Id = a;k();
    }) : (f.j = a.P(h), k());
  };var q_ = function q_(a, b, c) {
    this.T = a;this.U = b;this.V = c;
  };
  var r_ = function r_(a) {
    if (!a.j) {
      var b = a.T,
          c = b.ownerDocument.createElement("canvas");_.rk(c);c.style.position = "absolute";c.style.top = c.style.left = "0";var d = c.getContext("2d");c.width = c.height = Math.ceil(256 * s_(d));c.style.width = c.style.height = _.V(256);b.appendChild(c);a.j = c.context = d;
    }return a.j;
  };var s_ = function s_(a) {
    return _.pf() / (a.webkitBackingStorePixelRatio || a.mozBackingStorePixelRatio || a.msBackingStorePixelRatio || a.oBackingStorePixelRatio || a.backingStorePixelRatio || 1);
  };
  var baa = function baa(a, b, c) {
    a = a.V;a.width = b;a.height = c;return a;
  };var t_ = function t_(a) {
    var b = [];a.U.forEach(function (a) {
      b.push(a);
    });b.sort(function (a, b) {
      return a.zIndex - b.zIndex;
    });return b;
  };var u_ = function u_(a, b) {
    this.j = a;this.T = b;
  };
  var v_ = function v_(a, b) {
    var c = a.jb,
        d = c.src,
        e = a.zIndex,
        f = _.mb(a),
        g = a.Ab / a.Hb,
        h = a.yb / a.Gb,
        k = _.Na(a.opacity, 1);b.push('<div id="gm_marker_', f, '" style="', "position:absolute;", "overflow:hidden;", "width:", _.V(a.Ab), ";height:", _.V(a.yb), ";", "top:", _.V(a.dy), ";", "left:", _.V(a.dx), ";", "z-index:", e, ";", '">');c = "position:absolute;top:" + _.V(-a.Pb * h) + ";left:" + _.V(-a.Ob * g) + ";width:" + _.V(c.width * g) + ";height:" + _.V(c.height * h) + ";";1 == k ? b.push('<img src="', d, '" style="', c, '"/>') : b.push('<img src="', d, '" style="', c, "opacity:", k, ";", '"/>');b.push("</div>");
  };var caa = function caa(a) {
    if (_.oC() && _.JB() && (4 != _.W.j || 4 != _.W.type || !_.Nj(_.W.version, 534, 30))) {
      var b = a.createElement("canvas");return function (a, d) {
        return new q_(a, d, b);
      };
    }return function (a, b) {
      return new u_(a, b);
    };
  };var p_ = function p_(a) {
    if (_.Qa(a)) {
      var b = p_.j;return b[a] = b[a] || { url: a };
    }return a;
  };
  var daa = function daa(a, b, c) {
    var d = new _.vc();new o_(a, d, c);a = _.gk(b.getDiv());c = caa(a);a = {};d = new i_(a, d, n_(c));d.bindTo("projection", b);b.__gm.j.kc(new d_(a, 0, b.__gm));_.RD(b, d, "markerLayer", -1);
  };var w_ = function w_() {};var eZ = [],
      gZ = null,
      lZ = { linear: function linear(a) {
      return a;
    }, "ease-out": function easeOut(a) {
      return 1 - Math.pow(a - 1, 2);
    }, "ease-in": function easeIn(a) {
      return Math.pow(a, 2);
    } };iZ.prototype.T = function () {
    eZ.push(this);gZ || (gZ = window.setInterval(dZ, 10));this.P = _.dj();fZ(this);
  };
  iZ.prototype.cancel = function () {
    this.j || (this.j = !0, jZ(this, 1), _.I.trigger(this, "done"));
  };iZ.prototype.stop = function () {
    this.j || (this.O = 1);
  };mZ.prototype.T = function () {
    this.j.Pc = this.j.Pc || 1;this.j.duration = this.j.duration || 1;_.I.addDomListenerOnce(this.O, "webkitAnimationEnd", (0, _.t)(function () {
      this.P = !0;_.I.trigger(this, "done");
    }, this));hZ(this.O, qZ(this.S), this.j);
  };mZ.prototype.cancel = function () {
    hZ(this.O, null, {});_.I.trigger(this, "done");
  };
  mZ.prototype.stop = function () {
    this.P || _.I.addDomListenerOnce(this.O, "webkitAnimationIteration", (0, _.t)(this.cancel, this));
  };var rZ;var vZ;_.y(uZ, _.S);uZ.prototype.changed = function (a) {
    "modelIcon" != a && "modelShape" != a && "modelCross" != a && "modelLabel" != a || this.Ca();
  };uZ.prototype.Ia = function () {
    var a = this.get("modelIcon"),
        b = this.get("modelLabel");wZ(this, "viewIcon", a || b && vZ.O || vZ.icon);wZ(this, "viewCross", vZ.j);var b = this.get("useDefaults"),
        c = this.get("modelShape");c || a && !b || (c = vZ.shape);this.get("viewShape") != c && this.set("viewShape", c);
  };_.y(zZ, _.J);zZ.prototype.internalPosition_changed = function () {
    if (!this.j) {
      this.j = !0;var a = this.get("position"),
          b = this.get("internalPosition");a && b && !a.j(b) && this.set("position", this.get("internalPosition"));this.j = !1;
    }
  };
  zZ.prototype.place_changed = zZ.prototype.position_changed = zZ.prototype.draggable_changed = function () {
    if (!this.j) {
      this.j = !0;if (this.O) {
        var a = this.get("place");a ? this.set("internalPosition", a.location) : this.set("internalPosition", this.get("position"));
      }this.get("place") ? this.set("actuallyDraggable", !1) : this.set("actuallyDraggable", this.get("draggable"));this.j = !1;
    }
  };var TZ = {};TZ[1] = { options: { duration: 700, Pc: "infinite" }, icon: new oZ([{ time: 0, translate: [0, 0], Db: "ease-out" }, { time: .5, translate: [0, -20], Db: "ease-in" }, { time: 1, translate: [0, 0], Db: "ease-out" }]) };TZ[2] = { options: { duration: 500, Pc: 1 }, icon: new oZ([{ time: 0, translate: [0, -500], Db: "ease-in" }, { time: .5, translate: [0, 0], Db: "ease-out" }, { time: .75, translate: [0, -20], Db: "ease-in" }, { time: 1, translate: [0, 0], Db: "ease-out" }]) };
  TZ[3] = { options: { duration: 200, zf: 20, Pc: 1, Ak: !1 }, icon: new oZ([{ time: 0, translate: [0, 0], Db: "ease-in" }, { time: 1, translate: [0, -20], Db: "ease-out" }]) };TZ[4] = { options: { duration: 500, zf: 20, Pc: 1, Ak: !1 }, icon: new oZ([{ time: 0, translate: [0, -20], Db: "ease-in" }, { time: .5, translate: [0, 0], Db: "ease-out" }, { time: .75, translate: [0, -10], Db: "ease-in" }, { time: 1, translate: [0, 0], Db: "ease-out" }]) };_.m = AZ.prototype;_.m.setOpacity = function (a) {
    this.U = a;_.Qu(this.j);
  };_.m.setLabel = function (a) {
    this.S = a;_.Qu(this.j);
  };_.m.setVisible = function (a) {
    this.na = a;_.Qu(this.j);
  };_.m.setZIndex = function (a) {
    this.T = a;_.Qu(this.j);
  };_.m.release = function () {
    CZ(this);
  };
  _.m.Al = function () {
    if (this.P && this.S && this.na) {
      var a = this.P.markerLayer,
          b = this.S;this.O ? a.appendChild(this.O) : this.O = _.X("div", a);a = this.O;this.V && _.hk(a, this.V);var c = a.firstChild;c || (c = _.X("div", a), c.style.height = "100px", c.style.marginTop = "-50px", c.style.marginLeft = "-50%", c.style.display = "table", c.style.borderSpacing = "0");var d = c.firstChild;d || (d = _.X("div", c), d.style.display = "table-cell", d.style.verticalAlign = "middle", d.style.whiteSpace = "nowrap", d.style.textAlign = "center");c = d.firstChild || _.X("div", d);_.jk(c, b.text);c.style.color = b.color;c.style.fontSize = b.fontSize;c.style.fontWeight = b.fontWeight;c.style.fontFamily = b.fontFamily;_.tk(c, _.Na(this.U, 1), !0);_.qk(a, this.T);
    } else CZ(this);
  };var OZ = function () {
    function a(a) {
      return new _.QI(a);
    }return _.JB() ? (0, _.t)(DZ, null, a) : (0, _.t)(EZ, null, new _.SI());
  }();_.y(FZ, _.S);_.m = FZ.prototype;_.m.panes_changed = function () {
    GZ(this);this.Ca();
  };
  _.m.shape_changed = FZ.prototype.clickable_changed = FZ.prototype.draggable_changed = function () {
    var a;if (!(a = this.jc != (0 != this.get("clickable")) || this.Rb != this.getDraggable())) {
      a = this.ac;var b = this.get("shape");if (null == a || null == b) a = a == b;else {
        var c;if (c = a.type == b.type) a: if (a = a.coords, b = b.coords, _.Mi(a) && _.Mi(b) && a.length == b.length) {
          c = a.length;for (var d = 0; d < c; d++) {
            if (a[d] !== b[d]) {
              c = !1;break a;
            }
          }c = !0;
        } else c = !1;a = c;
      }a = !a;
    }a && (this.jc = 0 != this.get("clickable"), this.Rb = this.getDraggable(), this.ac = this.get("shape"), HZ(this), this.Ca());
  };_.m.cursor_changed = FZ.prototype.scale_changed = FZ.prototype.raiseOnDrag_changed = FZ.prototype.crossOnDrag_changed = FZ.prototype.zIndex_changed = FZ.prototype.opacity_changed = FZ.prototype.title_changed = FZ.prototype.cross_changed = FZ.prototype.position_changed = FZ.prototype.icon_changed = FZ.prototype.visible_changed = function () {
    this.Ca();
  };
  _.m.Ia = function () {
    var a = this.get("panes"),
        b = this.get("scale");if (!a || !this.getPosition() || 0 == this.Bl() || _.C(b) && .1 > b && !this.get("dragging")) GZ(this);else {
      var c = a.markerLayer;if (b = this.Lg()) {
        var d = null != b.url;this.O && this.Qb == d && (_.nj(this.O, !0), this.O = null);this.Qb = !d;this.O = NZ(this, c, this.O, b);c = JZ(this);d = b.size;this.Xa.width = c * d.width;this.Xa.height = c * d.height;this.set("size", this.Xa);var e = this.get("anchorPoint");if (!e || e.O) b = b.anchor, this.Ea.x = c * (b ? d.width / 2 - b.x : 0), this.Ea.y = -c * (b ? b.y : d.height), this.Ea.O = !0, this.set("anchorPoint", this.Ea);
      }if (!this.Bf && (d = this.Lg()) && (b = 0 != this.get("clickable"), c = this.getDraggable(), b || c)) {
        var e = d.url || _.kv,
            f = null != d.url,
            g = {};if (_.Vj()) var f = d.size.width,
            h = d.size.height,
            k = new _.O(f + 16, h + 16),
            d = { url: e, size: k, anchor: d.anchor ? new _.N(d.anchor.x + 8, d.anchor.y + 8) : new _.N(Math.round(f / 2) + 8, h + 8), scaledSize: k };else if (_.W.P || _.W.O) if (g.shape = this.get("shape"), g.shape || !f) f = d.scaledSize || d.size, d = { url: e, size: f, anchor: d.anchor, scaledSize: f };f = null != d.url;this.dc == f && HZ(this);this.dc = !f;d = this.ta = NZ(this, this.getPanes().overlayMouseTarget, this.ta, d, g);_.tk(d, .01);_.xC(d);var e = d,
            n;(g = e.getAttribute("usemap") || e.firstChild && e.firstChild.getAttribute("usemap")) && g.length && (e = _.gk(e).getElementById(g.substr(1))) && (n = e.firstChild);d = n || d;d.title = this.get("title") || "";c && !this.S && (n = this.S = new _.MD(d), n.bindTo("position", this.Aa, "rawPosition"), n.bindTo("containerPixelBounds", this, "mapPixelBounds"), n.bindTo("anchorPoint", this), n.bindTo("size", this), n.bindTo("panningEnabled", this), RZ(this, n));n = this.get("cursor") || "pointer";c ? this.S.set("draggableCursor", n) : _.pk(d, b ? n : "");PZ(this, d);
      }a = a.overlayLayer;if (b = n = this.get("cross")) b = this.get("crossOnDrag"), _.B(b) || (b = this.get("raiseOnDrag")), b = 0 != b && this.getDraggable() && this.get("dragging");b ? this.P = NZ(this, a, this.P, n) : (this.P && _.nj(this.P, !0), this.P = null);this.qa = [this.O, this.P, this.ta];IZ(this);for (a = 0; a < this.qa.length; ++a) {
        if (b = this.qa[a]) n = b, c = b.j, d = cZ(b) || _.tg, b = JZ(this), c = KZ(this, c, b, d), _.hk(n, c), (c = _.sk.j) && (n.style[c] = 1 != b ? "scale(" + b + ") " : ""), b = this.get("zIndex"), this.get("dragging") && (b = 1E6), _.C(b) || (b = Math.min(this.getPosition().y, 999999)), _.qk(n, b), this.T && this.T.setZIndex(b);
      }SZ(this);for (a = 0; a < this.qa.length; ++a) {
        (n = this.qa[a]) && _.mk(n);
      }
    }
  };_.m.getPosition = _.K("position");_.m.getPanes = _.K("panes");_.m.Bl = _.K("visible");_.m.getDraggable = function () {
    return !!this.get("draggable");
  };
  _.m.release = function () {
    this.T && this.T.release();this.j && this.j.stop();this.V && (_.I.removeListener(this.V), this.V = null);this.j = null;LZ(this.Ib);LZ(this.Fe);this.Ib = null;GZ(this);HZ(this);
  };_.m.Dl = function () {
    this.set("dragging", !0);this.Aa.set("snappingCallback", this.Ee);
  };_.m.Cl = function () {
    this.Aa.set("snappingCallback", null);this.set("dragging", !1);
  };_.m.animation_changed = function () {
    this.kb = !1;this.get("animation") ? SZ(this) : (this.set("animating", !1), this.j && this.j.stop());
  };_.m.Lg = _.K("icon");
  _.m.Tn = _.K("label");YZ.prototype.load = function (a, b) {
    return this.j.load(new _.HA(a.url), function (c) {
      if (c) {
        var d = c.size,
            e = a.size || a.scaledSize || d;a.size = e;var f = a.anchor || new _.N(e.width / 2, e.height),
            g = {};g.jb = c;c = a.scaledSize || d;var h = c.width / d.width,
            k = c.height / d.height;g.Ob = a.origin ? a.origin.x / h : 0;g.Pb = a.origin ? a.origin.y / k : 0;g.dx = -f.x;g.dy = -f.y;g.Ob * h + e.width > c.width ? (g.Hb = d.width - g.Ob * h, g.Ab = c.width) : (g.Hb = e.width / h, g.Ab = e.width);g.Pb * k + e.height > c.height ? (g.Gb = d.height - g.Pb * k, g.yb = c.height) : (g.Gb = e.height / k, g.yb = e.height);
        b(g);
      } else b(null);
    });
  };YZ.prototype.cancel = function (a) {
    this.j.cancel(a);
  };d_.prototype.j = function (a, b) {
    return b ? e_(this, a, -8, 0) || e_(this, a, 0, -8) || e_(this, a, 8, 0) || e_(this, a, 0, 8) : e_(this, a, 0, 0);
  };d_.prototype.handleEvent = function (a, b, c) {
    var d = b.j;if ("mouseout" == a) this.O.set("cursor", ""), this.O.set("title", null);else if ("mouseover" == a) {
      var e = d.se;this.O.set("cursor", e.cursor);(e = e.title) && this.O.set("title", e);
    }d = d && "mouseout" != a ? d.se.Qa : b.latLng;_.cb(b.Fb);_.I.trigger(c, a, new _.Cj(d));
  };d_.prototype.zIndex = 40;g_.prototype.S = function () {
    this.j && this.P.S();this.j = !1;this.O = null;this.T = 0;
  };_.y(i_, _.J);i_.prototype.projection = null;i_.prototype.tileSize = new _.O(256, 256);i_.prototype.getTile = function (a, b, c) {
    c = c.createElement("div");_.nf(c, this.tileSize);c.style.overflow = "hidden";a = { Ha: c, zoom: b, La: a, Wc: {}, Wa: new _.vc() };c.Va = a;l_(this, a);return c;
  };i_.prototype.releaseTile = function (a) {
    var b = a.Va;a.Va = null;m_(this, b);_.jk(a, "");
  };q_.prototype.O = q_.prototype.P = function (a) {
    var b = t_(this),
        c = r_(this),
        d = s_(c),
        e = Math.round(a.dx * d),
        f = Math.round(a.dy * d),
        g = Math.ceil(a.Ab * d);a = Math.ceil(a.yb * d);var h = baa(this, g, a),
        k = h.getContext("2d");k.translate(-e, -f);b.forEach(function (a) {
      k.globalAlpha = _.Na(a.opacity, 1);k.drawImage(a.jb, a.Ob, a.Pb, a.Hb, a.Gb, Math.round(a.dx * d), Math.round(a.dy * d), a.Ab * d, a.yb * d);
    });c.clearRect(e, f, g, a);c.globalAlpha = 1;c.drawImage(h, e, f);
  };
  q_.prototype.S = function () {
    var a = t_(this),
        b = r_(this),
        c = s_(b);b.clearRect(0, 0, Math.ceil(256 * c), Math.ceil(256 * c));a.forEach(function (a) {
      b.globalAlpha = _.Na(a.opacity, 1);b.drawImage(a.jb, a.Ob, a.Pb, a.Hb, a.Gb, Math.round(a.dx * c), Math.round(a.dy * c), a.Ab * c, a.yb * c);
    });
  };u_.prototype.O = function (a) {
    var b = [];v_(a, b);this.j.insertAdjacentHTML("BeforeEnd", b.join(""));
  };u_.prototype.P = function (a) {
    (a = _.gk(this.j).getElementById("gm_marker_" + _.mb(a))) && a.parentNode.removeChild(a);
  };u_.prototype.S = function () {
    var a = [];this.T.forEach(function (b) {
      v_(b, a);
    });this.j.innerHTML = a.join("");
  };p_.j = {};w_.prototype.Bi = function (a, b) {
    var c = _.hJ();if (b instanceof _.yc) UZ(a, b, c);else {
      var d = new _.vc();UZ(d, b, c);var e = new _.vc();daa(e, b, c);new ZZ(a, e, d);
    }_.I.addListener(b, "idle", function () {
      a.forEach(function (a) {
        var c = a.get("internalPosition"),
            d = b.getBounds();c && !a.pegmanMarker && d && d.contains(c) ? _.il("Om", "-v", a, !(!b || !b.Ga)) : _.jl("Om", "-v", a);
      });
    });
  };_.oc("marker", new w_());
});
//# sourceMappingURL=marker.js.map
