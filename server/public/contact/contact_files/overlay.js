'use strict';

google.maps.__gjsload__('overlay', function (_) {
  'use strict';
  var iA = function iA(a) {
    this.j = a;
  };var jA = function jA() {};var kA = function kA() {
    var a = this.gh;if (this.getPanes()) {
      if (this.getProjection()) {
        if (!a.j && this.onAdd) this.onAdd();a.j = !0;this.draw();
      }
    } else {
      if (a.j) if (this.onRemove) this.onRemove();else this.remove();a.j = !1;
    }
  };var lA = function lA(a) {
    a.gh = a.gh || new jA();return a.gh;
  };var mA = function mA(a) {
    _.S.call(this);this.Ia = (0, _.t)(kA, a);
  };var nA = function nA() {};_.y(iA, _.J);
  iA.prototype.changed = function (a) {
    "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.C(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.j : null));
  };_.y(mA, _.S);nA.prototype.Mm = function (a) {
    var b = a.getMap(),
        c = lA(a),
        d = c.Xo;c.Xo = b;d && (c = lA(a), (d = c.Ua) && d.unbindAll(), (d = c.Tj) && d.unbindAll(), a.unbindAll(), a.set("panes", null), a.set("projection", null), _.G(c.Ba, _.I.removeListener), c.Ba = null, c.Kb && (c.Kb.Ia(), c.Kb = null), _.jl("Ox", "-p", a));if (b) {
      c = lA(a);d = c.Kb;d || (d = c.Kb = new mA(a));_.G(c.Ba, _.I.removeListener);var e = c.Ua = c.Ua || new _.Ek(),
          f = b.__gm;e.bindTo("zoom", f);e.bindTo("offset", f);e.bindTo("center", f, "projectionCenterQ");e.bindTo("projection", b);e.bindTo("projectionTopLeft", f);e = c.Tj = c.Tj || new iA(e);e.bindTo("zoom", f);e.bindTo("offset", f);e.bindTo("projection", b);e.bindTo("projectionTopLeft", f);a.bindTo("projection", e, "outProjection");a.bindTo("panes", f);e = (0, _.t)(d.Ca, d);c.Ba = [_.I.addListener(a, "panes_changed", e), _.I.addListener(f, "zoom_changed", e), _.I.addListener(f, "offset_changed", e), _.I.addListener(b, "projection_changed", e), _.I.addListener(f, "projectioncenterq_changed", e), _.I.forward(b, "forceredraw", d)];d.Ca();b instanceof _.kd && (_.Y(b, "Ox"), _.il("Ox", "-p", a, !!b.Ga));
    }
  };_.oc("overlay", new nA());
});
//# sourceMappingURL=overlay.js.map
