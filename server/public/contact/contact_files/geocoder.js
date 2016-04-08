'use strict';

google.maps.__gjsload__('geocoder', function (_) {
  'use strict';
  var CY = function CY(a) {
    return _.Da(_.wb({ address: _.pg, bounds: _.Eb(_.id), location: _.Eb(_.Tb), region: _.pg, latLng: _.Eb(_.Tb), country: _.pg, partialmatch: _.qg, language: _.pg, componentRestrictions: _.Eb(_.wb({ route: _.pg, locality: _.pg, administrativeArea: _.pg, postalCode: _.pg, country: _.pg })), placeId: _.pg }), function (a) {
      if (a.placeId) {
        if (a.address) throw _.ub("cannot set both placeId and address");if (a.latLng) throw _.ub("cannot set both placeId and latLng");if (a.location) throw _.ub("cannot set both placeId and location");
      }return a;
    })(a);
  };var DY = function DY(a, b) {
    _.cD(a, _.dD);_.cD(a, _.fD);b(a);
  };var EY = function EY(a) {
    this.N = a || [];
  };var FY = function FY(a) {
    this.N = a || [];
  };
  var GY = function GY(a) {
    if (!HY) {
      var b = [];HY = { ka: -1, ma: b };b[4] = { type: "s", label: 1, R: "" };b[5] = { type: "m", label: 1, R: IY, $: _.Ki() };b[6] = { type: "m", label: 1, R: JY, $: _.Oi() };b[7] = { type: "s", label: 1, R: "" };b[14] = { type: "s", label: 1, R: "" };if (!KY) {
        var c = [];KY = { ka: -1, ma: c };c[1] = { type: "s", label: 1, R: "" };c[2] = { type: "s", label: 1, R: "" };
      }b[8] = { type: "m", label: 3, $: KY };b[9] = { type: "s", label: 1, R: "" };b[10] = { type: "b", label: 1, R: !1 };b[11] = { type: "s", label: 3 };b[12] = { type: "e", label: 3 };b[15] = { type: "i", label: 1, R: 0 };b[102] = { type: "b", label: 1, R: !1 };
      b[103] = { type: "e", label: 1, R: 0 };b[104] = { type: "b", label: 1, R: !1 };b[105] = { type: "b", label: 1, R: !1 };
    }return _.Ag.j(a.N, HY);
  };var LY = function LY(a, b, c) {
    MY || (MY = new _.$C(11, 1, _.T[26] ? window.Infinity : 225));if (_.aD(MY, a.latLng || a.location ? 2 : 1)) {
      var d = NY(a);if (d) {
        var e = _.Ff("geocoder");a = _.Xk(_.ay, function (a) {
          _.Df(e, "gsc");DY(a, function (a) {
            c(a.results, a.status);
          });
        });d = GY(d);d = _.bD(d);b(d, a, function () {
          c(null, _.aa);
        });_.HC("geocode");
      }
    } else c(null, _.ha);
  };
  var NY = function NY(a) {
    var b = !!_.T[1];try {
      a = CY(a);
    } catch (k) {
      return _.vb(k), null;
    }var c = new EY(),
        d = a.address;d && c.setQuery(d);if (d = a.location || a.latLng) {
      var e;c.N[4] = c.N[4] || [];e = new _.Ud(c.N[4]);_.Gi(e, d.lat());_.zi(e, d.lng());
    }var f = a.bounds;if (f) {
      c.N[5] = c.N[5] || [];e = new _.Vd(c.N[5]);var d = f.getSouthWest(),
          f = f.getNorthEast(),
          g = _.xi(e);e = _.vi(e);_.Gi(g, d.lat());_.zi(g, d.lng());_.Gi(e, f.lat());_.zi(e, f.lng());
    }(d = a.region || _.Ie(_.Ke(_.R))) && (c.N[6] = d);(d = _.He(_.Ke(_.R))) && (c.N[8] = d);var d = a.componentRestrictions,
        h;for (h in d) {
      if ("route" == h || "locality" == h || "administrativeArea" == h || "postalCode" == h || "country" == h) e = h, "administrativeArea" == h && (e = "administrative_area"), "postalCode" == h && (e = "postal_code"), f = [], _.Q(c.N, 7).push(f), f = new FY(f), f.N[0] = e, f.N[1] = d[h];
    }b && (c.N[9] = b);(a = a.placeId) && (c.N[13] = a);return c;
  };var OY = function OY(a) {
    return function (b, c) {
      a.apply(this, arguments);_.SC(function (a) {
        a.Zq(b, c);
      });
    };
  };var PY = function PY() {};var HY, KY;EY.prototype.W = _.l("N");EY.prototype.getQuery = function () {
    var a = this.N[3];return null != a ? a : "";
  };EY.prototype.setQuery = function (a) {
    this.N[3] = a;
  };var IY = new _.Ud(),
      JY = new _.Vd();FY.prototype.W = _.l("N");FY.prototype.getType = function () {
    var a = this.N[0];return null != a ? a : "";
  };var MY;PY.prototype.geocode = function (a, b) {
    LY(a, _.t(_.Lk, null, window.document, _.jh, _.ux + "/maps/api/js/GeocodeService.Search", _.Rf), OY(b));
  };_.oc("geocoder", new PY());
});
//# sourceMappingURL=geocoder.js.map
