var SlateYjsCore = (() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a2, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a2, prop, b2[prop]);
      }
    return a2;
  };
  var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from2, except, desc) => {
    if (from2 && typeof from2 === "object" || typeof from2 === "function") {
      for (let key of __getOwnPropNames(from2))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    CursorEditor: () => CursorEditor,
    YHistoryEditor: () => YHistoryEditor,
    YjsEditor: () => YjsEditor,
    relativePositionToSlatePoint: () => relativePositionToSlatePoint,
    relativeRangeToSlateRange: () => relativeRangeToSlateRange,
    slateNodesToInsertDelta: () => slateNodesToInsertDelta,
    slatePointToRelativePosition: () => slatePointToRelativePosition,
    slateRangeToRelativeRange: () => slateRangeToRelativeRange,
    withCursors: () => withCursors,
    withYHistory: () => withYHistory,
    withYjs: () => withYjs,
    yTextToSlateElement: () => yTextToSlateElement
  });

  // ../../node_modules/is-plain-object/dist/is-plain-object.mjs
  function isObject(o2) {
    return Object.prototype.toString.call(o2) === "[object Object]";
  }
  function isPlainObject(o2) {
    var ctor, prot;
    if (isObject(o2) === false)
      return false;
    ctor = o2.constructor;
    if (ctor === void 0)
      return true;
    prot = ctor.prototype;
    if (isObject(prot) === false)
      return false;
    if (prot.hasOwnProperty("isPrototypeOf") === false) {
      return false;
    }
    return true;
  }

  // ../../node_modules/immer/dist/immer.esm.js
  function n(n2) {
    for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), e = 1; e < t2; e++)
      r2[e - 1] = arguments[e];
    if (true) {
      var i2 = Y[n2], o2 = i2 ? typeof i2 == "function" ? i2.apply(null, r2) : i2 : "unknown error nr: " + n2;
      throw Error("[Immer] " + o2);
    }
    throw Error("[Immer] minified error nr: " + n2 + (r2.length ? " " + r2.map(function(n3) {
      return "'" + n3 + "'";
    }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
  }
  function t(n2) {
    return !!n2 && !!n2[Q];
  }
  function r(n2) {
    return !!n2 && (function(n3) {
      if (!n3 || typeof n3 != "object")
        return false;
      var t2 = Object.getPrototypeOf(n3);
      if (t2 === null)
        return true;
      var r2 = Object.hasOwnProperty.call(t2, "constructor") && t2.constructor;
      return r2 === Object || typeof r2 == "function" && Function.toString.call(r2) === Z;
    }(n2) || Array.isArray(n2) || !!n2[L] || !!n2.constructor[L] || s(n2) || v(n2));
  }
  function i(n2, t2, r2) {
    r2 === void 0 && (r2 = false), o(n2) === 0 ? (r2 ? Object.keys : nn)(n2).forEach(function(e) {
      r2 && typeof e == "symbol" || t2(e, n2[e], n2);
    }) : n2.forEach(function(r3, e) {
      return t2(e, r3, n2);
    });
  }
  function o(n2) {
    var t2 = n2[Q];
    return t2 ? t2.i > 3 ? t2.i - 4 : t2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v(n2) ? 3 : 0;
  }
  function u(n2, t2) {
    return o(n2) === 2 ? n2.has(t2) : Object.prototype.hasOwnProperty.call(n2, t2);
  }
  function a(n2, t2) {
    return o(n2) === 2 ? n2.get(t2) : n2[t2];
  }
  function f(n2, t2, r2) {
    var e = o(n2);
    e === 2 ? n2.set(t2, r2) : e === 3 ? (n2.delete(t2), n2.add(r2)) : n2[t2] = r2;
  }
  function c(n2, t2) {
    return n2 === t2 ? n2 !== 0 || 1 / n2 == 1 / t2 : n2 != n2 && t2 != t2;
  }
  function s(n2) {
    return X && n2 instanceof Map;
  }
  function v(n2) {
    return q && n2 instanceof Set;
  }
  function p(n2) {
    return n2.o || n2.t;
  }
  function l(n2) {
    if (Array.isArray(n2))
      return Array.prototype.slice.call(n2);
    var t2 = tn(n2);
    delete t2[Q];
    for (var r2 = nn(t2), e = 0; e < r2.length; e++) {
      var i2 = r2[e], o2 = t2[i2];
      o2.writable === false && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (t2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
    }
    return Object.create(Object.getPrototypeOf(n2), t2);
  }
  function d(n2, e) {
    return e === void 0 && (e = false), y(n2) || t(n2) || !r(n2) ? n2 : (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h), Object.freeze(n2), e && i(n2, function(n3, t2) {
      return d(t2, true);
    }, true), n2);
  }
  function h() {
    n(2);
  }
  function y(n2) {
    return n2 == null || typeof n2 != "object" || Object.isFrozen(n2);
  }
  function b(t2) {
    var r2 = rn[t2];
    return r2 || n(18, t2), r2;
  }
  function _() {
    return U || n(0), U;
  }
  function j(n2, t2) {
    t2 && (b("Patches"), n2.u = [], n2.s = [], n2.v = t2);
  }
  function O(n2) {
    g(n2), n2.p.forEach(S), n2.p = null;
  }
  function g(n2) {
    n2 === U && (U = n2.l);
  }
  function w(n2) {
    return U = { p: [], l: U, h: n2, m: true, _: 0 };
  }
  function S(n2) {
    var t2 = n2[Q];
    t2.i === 0 || t2.i === 1 ? t2.j() : t2.O = true;
  }
  function P(t2, e) {
    e._ = e.p.length;
    var i2 = e.p[0], o2 = t2 !== void 0 && t2 !== i2;
    return e.h.g || b("ES5").S(e, t2, o2), o2 ? (i2[Q].P && (O(e), n(4)), r(t2) && (t2 = M(e, t2), e.l || x(e, t2)), e.u && b("Patches").M(i2[Q], t2, e.u, e.s)) : t2 = M(e, i2, []), O(e), e.u && e.v(e.u, e.s), t2 !== H ? t2 : void 0;
  }
  function M(n2, t2, r2) {
    if (y(t2))
      return t2;
    var e = t2[Q];
    if (!e)
      return i(t2, function(i2, o3) {
        return A(n2, e, t2, i2, o3, r2);
      }, true), t2;
    if (e.A !== n2)
      return t2;
    if (!e.P)
      return x(n2, e.t, true), e.t;
    if (!e.I) {
      e.I = true, e.A._--;
      var o2 = e.i === 4 || e.i === 5 ? e.o = l(e.k) : e.o;
      i(e.i === 3 ? new Set(o2) : o2, function(t3, i2) {
        return A(n2, e, o2, t3, i2, r2);
      }), x(n2, o2, false), r2 && n2.u && b("Patches").R(e, r2, n2.u, n2.s);
    }
    return e.o;
  }
  function A(e, i2, o2, a2, c2, s2) {
    if (c2 === o2 && n(5), t(c2)) {
      var v2 = M(e, c2, s2 && i2 && i2.i !== 3 && !u(i2.D, a2) ? s2.concat(a2) : void 0);
      if (f(o2, a2, v2), !t(v2))
        return;
      e.m = false;
    }
    if (r(c2) && !y(c2)) {
      if (!e.h.F && e._ < 1)
        return;
      M(e, c2), i2 && i2.A.l || x(e, c2);
    }
  }
  function x(n2, t2, r2) {
    r2 === void 0 && (r2 = false), n2.h.F && n2.m && d(t2, r2);
  }
  function z(n2, t2) {
    var r2 = n2[Q];
    return (r2 ? p(r2) : n2)[t2];
  }
  function I(n2, t2) {
    if (t2 in n2)
      for (var r2 = Object.getPrototypeOf(n2); r2; ) {
        var e = Object.getOwnPropertyDescriptor(r2, t2);
        if (e)
          return e;
        r2 = Object.getPrototypeOf(r2);
      }
  }
  function k(n2) {
    n2.P || (n2.P = true, n2.l && k(n2.l));
  }
  function E(n2) {
    n2.o || (n2.o = l(n2.t));
  }
  function R(n2, t2, r2) {
    var e = s(t2) ? b("MapSet").N(t2, r2) : v(t2) ? b("MapSet").T(t2, r2) : n2.g ? function(n3, t3) {
      var r3 = Array.isArray(n3), e2 = { i: r3 ? 1 : 0, A: t3 ? t3.A : _(), P: false, I: false, D: {}, l: t3, t: n3, k: null, o: null, j: null, C: false }, i2 = e2, o2 = en;
      r3 && (i2 = [e2], o2 = on);
      var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
      return e2.k = f2, e2.j = a2, f2;
    }(t2, r2) : b("ES5").J(t2, r2);
    return (r2 ? r2.A : _()).p.push(e), e;
  }
  function D(e) {
    return t(e) || n(22, e), function n2(t2) {
      if (!r(t2))
        return t2;
      var e2, u2 = t2[Q], c2 = o(t2);
      if (u2) {
        if (!u2.P && (u2.i < 4 || !b("ES5").K(u2)))
          return u2.t;
        u2.I = true, e2 = F(t2, c2), u2.I = false;
      } else
        e2 = F(t2, c2);
      return i(e2, function(t3, r2) {
        u2 && a(u2.t, t3) === r2 || f(e2, t3, n2(r2));
      }), c2 === 3 ? new Set(e2) : e2;
    }(e);
  }
  function F(n2, t2) {
    switch (t2) {
      case 2:
        return new Map(n2);
      case 3:
        return Array.from(n2);
    }
    return l(n2);
  }
  var G;
  var U;
  var W = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol";
  var X = typeof Map != "undefined";
  var q = typeof Set != "undefined";
  var B = typeof Proxy != "undefined" && Proxy.revocable !== void 0 && typeof Reflect != "undefined";
  var H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G);
  var L = W ? Symbol.for("immer-draftable") : "__$immer_draftable";
  var Q = W ? Symbol.for("immer-state") : "__$immer_state";
  var V = typeof Symbol != "undefined" && Symbol.iterator || "@@iterator";
  var Y = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(n2) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n2;
  }, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(n2) {
    return "Cannot apply patch, path doesn't resolve: " + n2;
  }, 16: 'Sets cannot have "replace" patches.', 17: function(n2) {
    return "Unsupported patch operation: " + n2;
  }, 18: function(n2) {
    return "The plugin for '" + n2 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n2 + "()` when initializing your application.";
  }, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(n2) {
    return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n2 + "'";
  }, 22: function(n2) {
    return "'current' expects a draft, got: " + n2;
  }, 23: function(n2) {
    return "'original' expects a draft, got: " + n2;
  }, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" };
  var Z = "" + Object.prototype.constructor;
  var nn = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(n2) {
    return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
  } : Object.getOwnPropertyNames;
  var tn = Object.getOwnPropertyDescriptors || function(n2) {
    var t2 = {};
    return nn(n2).forEach(function(r2) {
      t2[r2] = Object.getOwnPropertyDescriptor(n2, r2);
    }), t2;
  };
  var rn = {};
  var en = { get: function(n2, t2) {
    if (t2 === Q)
      return n2;
    var e = p(n2);
    if (!u(e, t2))
      return function(n3, t3, r2) {
        var e2, i3 = I(t3, r2);
        return i3 ? "value" in i3 ? i3.value : (e2 = i3.get) === null || e2 === void 0 ? void 0 : e2.call(n3.k) : void 0;
      }(n2, e, t2);
    var i2 = e[t2];
    return n2.I || !r(i2) ? i2 : i2 === z(n2.t, t2) ? (E(n2), n2.o[t2] = R(n2.A.h, i2, n2)) : i2;
  }, has: function(n2, t2) {
    return t2 in p(n2);
  }, ownKeys: function(n2) {
    return Reflect.ownKeys(p(n2));
  }, set: function(n2, t2, r2) {
    var e = I(p(n2), t2);
    if (e == null ? void 0 : e.set)
      return e.set.call(n2.k, r2), true;
    if (!n2.P) {
      var i2 = z(p(n2), t2), o2 = i2 == null ? void 0 : i2[Q];
      if (o2 && o2.t === r2)
        return n2.o[t2] = r2, n2.D[t2] = false, true;
      if (c(r2, i2) && (r2 !== void 0 || u(n2.t, t2)))
        return true;
      E(n2), k(n2);
    }
    return n2.o[t2] === r2 && typeof r2 != "number" && (r2 !== void 0 || t2 in n2.o) || (n2.o[t2] = r2, n2.D[t2] = true, true);
  }, deleteProperty: function(n2, t2) {
    return z(n2.t, t2) !== void 0 || t2 in n2.t ? (n2.D[t2] = false, E(n2), k(n2)) : delete n2.D[t2], n2.o && delete n2.o[t2], true;
  }, getOwnPropertyDescriptor: function(n2, t2) {
    var r2 = p(n2), e = Reflect.getOwnPropertyDescriptor(r2, t2);
    return e ? { writable: true, configurable: n2.i !== 1 || t2 !== "length", enumerable: e.enumerable, value: r2[t2] } : e;
  }, defineProperty: function() {
    n(11);
  }, getPrototypeOf: function(n2) {
    return Object.getPrototypeOf(n2.t);
  }, setPrototypeOf: function() {
    n(12);
  } };
  var on = {};
  i(en, function(n2, t2) {
    on[n2] = function() {
      return arguments[0] = arguments[0][0], t2.apply(this, arguments);
    };
  }), on.deleteProperty = function(t2, r2) {
    return isNaN(parseInt(r2)) && n(13), en.deleteProperty.call(this, t2[0], r2);
  }, on.set = function(t2, r2, e) {
    return r2 !== "length" && isNaN(parseInt(r2)) && n(14), en.set.call(this, t2[0], r2, e, t2[0]);
  };
  var un = function() {
    function e(t2) {
      var e2 = this;
      this.g = B, this.F = true, this.produce = function(t3, i3, o2) {
        if (typeof t3 == "function" && typeof i3 != "function") {
          var u2 = i3;
          i3 = t3;
          var a2 = e2;
          return function(n2) {
            var t4 = this;
            n2 === void 0 && (n2 = u2);
            for (var r2 = arguments.length, e3 = Array(r2 > 1 ? r2 - 1 : 0), o3 = 1; o3 < r2; o3++)
              e3[o3 - 1] = arguments[o3];
            return a2.produce(n2, function(n3) {
              var r3;
              return (r3 = i3).call.apply(r3, [t4, n3].concat(e3));
            });
          };
        }
        var f2;
        if (typeof i3 != "function" && n(6), o2 !== void 0 && typeof o2 != "function" && n(7), r(t3)) {
          var c2 = w(e2), s2 = R(e2, t3, void 0), v2 = true;
          try {
            f2 = i3(s2), v2 = false;
          } finally {
            v2 ? O(c2) : g(c2);
          }
          return typeof Promise != "undefined" && f2 instanceof Promise ? f2.then(function(n2) {
            return j(c2, o2), P(n2, c2);
          }, function(n2) {
            throw O(c2), n2;
          }) : (j(c2, o2), P(f2, c2));
        }
        if (!t3 || typeof t3 != "object") {
          if ((f2 = i3(t3)) === H)
            return;
          return f2 === void 0 && (f2 = t3), e2.F && d(f2, true), f2;
        }
        n(21, t3);
      }, this.produceWithPatches = function(n2, t3) {
        return typeof n2 == "function" ? function(t4) {
          for (var r3 = arguments.length, i4 = Array(r3 > 1 ? r3 - 1 : 0), o2 = 1; o2 < r3; o2++)
            i4[o2 - 1] = arguments[o2];
          return e2.produceWithPatches(t4, function(t5) {
            return n2.apply(void 0, [t5].concat(i4));
          });
        } : [e2.produce(n2, t3, function(n3, t4) {
          r2 = n3, i3 = t4;
        }), r2, i3];
        var r2, i3;
      }, typeof (t2 == null ? void 0 : t2.useProxies) == "boolean" && this.setUseProxies(t2.useProxies), typeof (t2 == null ? void 0 : t2.autoFreeze) == "boolean" && this.setAutoFreeze(t2.autoFreeze);
    }
    var i2 = e.prototype;
    return i2.createDraft = function(e2) {
      r(e2) || n(8), t(e2) && (e2 = D(e2));
      var i3 = w(this), o2 = R(this, e2, void 0);
      return o2[Q].C = true, g(i3), o2;
    }, i2.finishDraft = function(t2, r2) {
      var e2 = t2 && t2[Q];
      e2 && e2.C || n(9), e2.I && n(10);
      var i3 = e2.A;
      return j(i3, r2), P(void 0, i3);
    }, i2.setAutoFreeze = function(n2) {
      this.F = n2;
    }, i2.setUseProxies = function(t2) {
      t2 && !B && n(20), this.g = t2;
    }, i2.applyPatches = function(n2, r2) {
      var e2;
      for (e2 = r2.length - 1; e2 >= 0; e2--) {
        var i3 = r2[e2];
        if (i3.path.length === 0 && i3.op === "replace") {
          n2 = i3.value;
          break;
        }
      }
      var o2 = b("Patches").$;
      return t(n2) ? o2(n2, r2) : this.produce(n2, function(n3) {
        return o2(n3, r2.slice(e2 + 1));
      });
    }, e;
  }();
  var an = new un();
  var fn = an.produce;
  var cn = an.produceWithPatches.bind(an);
  var sn = an.setAutoFreeze.bind(an);
  var vn = an.setUseProxies.bind(an);
  var pn = an.applyPatches.bind(an);
  var ln = an.createDraft.bind(an);
  var dn = an.finishDraft.bind(an);

  // ../../node_modules/slate/dist/index.es.js
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var DIRTY_PATHS = /* @__PURE__ */ new WeakMap();
  var DIRTY_PATH_KEYS = /* @__PURE__ */ new WeakMap();
  var NORMALIZING = /* @__PURE__ */ new WeakMap();
  var PATH_REFS = /* @__PURE__ */ new WeakMap();
  var POINT_REFS = /* @__PURE__ */ new WeakMap();
  var RANGE_REFS = /* @__PURE__ */ new WeakMap();
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i2;
    for (i2 = 0; i2 < sourceKeys.length; i2++) {
      key = sourceKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null)
      return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i2;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
        key = sourceSymbolKeys[i2];
        if (excluded.indexOf(key) >= 0)
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key))
          continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  var getCharacterDistance = function getCharacterDistance2(str) {
    var isRTL = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var isLTR = !isRTL;
    var codepoints = isRTL ? codepointsIteratorRTL(str) : str;
    var left = CodepointType.None;
    var right = CodepointType.None;
    var distance = 0;
    var gb11 = null;
    var gb12Or13 = null;
    for (var char of codepoints) {
      var code = char.codePointAt(0);
      if (!code)
        break;
      var type = getCodepointType(char, code);
      [left, right] = isLTR ? [right, type] : [type, left];
      if (intersects(left, CodepointType.ZWJ) && intersects(right, CodepointType.ExtPict)) {
        if (isLTR) {
          gb11 = endsWithEmojiZWJ(str.substring(0, distance));
        } else {
          gb11 = endsWithEmojiZWJ(str.substring(0, str.length - distance));
        }
        if (!gb11)
          break;
      }
      if (intersects(left, CodepointType.RI) && intersects(right, CodepointType.RI)) {
        if (gb12Or13 !== null) {
          gb12Or13 = !gb12Or13;
        } else {
          if (isLTR) {
            gb12Or13 = true;
          } else {
            gb12Or13 = endsWithOddNumberOfRIs(str.substring(0, str.length - distance));
          }
        }
        if (!gb12Or13)
          break;
      }
      if (left !== CodepointType.None && right !== CodepointType.None && isBoundaryPair(left, right)) {
        break;
      }
      distance += char.length;
    }
    return distance || 1;
  };
  var SPACE = /\s/;
  var PUNCTUATION = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
  var CHAMELEON = /['\u2018\u2019]/;
  var getWordDistance = function getWordDistance2(text2) {
    var isRTL = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var dist = 0;
    var started = false;
    while (text2.length > 0) {
      var charDist = getCharacterDistance(text2, isRTL);
      var [char, remaining] = splitByCharacterDistance(text2, charDist, isRTL);
      if (isWordCharacter(char, remaining, isRTL)) {
        started = true;
        dist += charDist;
      } else if (!started) {
        dist += charDist;
      } else {
        break;
      }
      text2 = remaining;
    }
    return dist;
  };
  var splitByCharacterDistance = (str, dist, isRTL) => {
    if (isRTL) {
      var at = str.length - dist;
      return [str.slice(at, str.length), str.slice(0, at)];
    }
    return [str.slice(0, dist), str.slice(dist)];
  };
  var isWordCharacter = function isWordCharacter2(char, remaining) {
    var isRTL = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (SPACE.test(char)) {
      return false;
    }
    if (CHAMELEON.test(char)) {
      var charDist = getCharacterDistance(remaining, isRTL);
      var [nextChar, nextRemaining] = splitByCharacterDistance(remaining, charDist, isRTL);
      if (isWordCharacter2(nextChar, nextRemaining, isRTL)) {
        return true;
      }
    }
    if (PUNCTUATION.test(char)) {
      return false;
    }
    return true;
  };
  var codepointsIteratorRTL = function* codepointsIteratorRTL2(str) {
    var end = str.length - 1;
    for (var i2 = 0; i2 < str.length; i2++) {
      var char1 = str.charAt(end - i2);
      if (isLowSurrogate(char1.charCodeAt(0))) {
        var char2 = str.charAt(end - i2 - 1);
        if (isHighSurrogate(char2.charCodeAt(0))) {
          yield char2 + char1;
          i2++;
          continue;
        }
      }
      yield char1;
    }
  };
  var isHighSurrogate = (charCode) => {
    return charCode >= 55296 && charCode <= 56319;
  };
  var isLowSurrogate = (charCode) => {
    return charCode >= 56320 && charCode <= 57343;
  };
  var CodepointType;
  (function(CodepointType2) {
    CodepointType2[CodepointType2["None"] = 0] = "None";
    CodepointType2[CodepointType2["Extend"] = 1] = "Extend";
    CodepointType2[CodepointType2["ZWJ"] = 2] = "ZWJ";
    CodepointType2[CodepointType2["RI"] = 4] = "RI";
    CodepointType2[CodepointType2["Prepend"] = 8] = "Prepend";
    CodepointType2[CodepointType2["SpacingMark"] = 16] = "SpacingMark";
    CodepointType2[CodepointType2["L"] = 32] = "L";
    CodepointType2[CodepointType2["V"] = 64] = "V";
    CodepointType2[CodepointType2["T"] = 128] = "T";
    CodepointType2[CodepointType2["LV"] = 256] = "LV";
    CodepointType2[CodepointType2["LVT"] = 512] = "LVT";
    CodepointType2[CodepointType2["ExtPict"] = 1024] = "ExtPict";
    CodepointType2[CodepointType2["Any"] = 2048] = "Any";
  })(CodepointType || (CodepointType = {}));
  var reExtend = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/;
  var rePrepend = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/;
  var reSpacingMark = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/;
  var reL = /^[\u1100-\u115F\uA960-\uA97C]$/;
  var reV = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/;
  var reT = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/;
  var reLV = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/;
  var reLVT = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/;
  var reExtPict = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/;
  var getCodepointType = (char, code) => {
    var type = CodepointType.Any;
    if (char.search(reExtend) !== -1) {
      type |= CodepointType.Extend;
    }
    if (code === 8205) {
      type |= CodepointType.ZWJ;
    }
    if (code >= 127462 && code <= 127487) {
      type |= CodepointType.RI;
    }
    if (char.search(rePrepend) !== -1) {
      type |= CodepointType.Prepend;
    }
    if (char.search(reSpacingMark) !== -1) {
      type |= CodepointType.SpacingMark;
    }
    if (char.search(reL) !== -1) {
      type |= CodepointType.L;
    }
    if (char.search(reV) !== -1) {
      type |= CodepointType.V;
    }
    if (char.search(reT) !== -1) {
      type |= CodepointType.T;
    }
    if (char.search(reLV) !== -1) {
      type |= CodepointType.LV;
    }
    if (char.search(reLVT) !== -1) {
      type |= CodepointType.LVT;
    }
    if (char.search(reExtPict) !== -1) {
      type |= CodepointType.ExtPict;
    }
    return type;
  };
  function intersects(x2, y2) {
    return (x2 & y2) !== 0;
  }
  var NonBoundaryPairs = [
    [CodepointType.L, CodepointType.L | CodepointType.V | CodepointType.LV | CodepointType.LVT],
    [CodepointType.LV | CodepointType.V, CodepointType.V | CodepointType.T],
    [CodepointType.LVT | CodepointType.T, CodepointType.T],
    [CodepointType.Any, CodepointType.Extend | CodepointType.ZWJ],
    [CodepointType.Any, CodepointType.SpacingMark],
    [CodepointType.Prepend, CodepointType.Any],
    [CodepointType.ZWJ, CodepointType.ExtPict],
    [CodepointType.RI, CodepointType.RI]
  ];
  function isBoundaryPair(left, right) {
    return NonBoundaryPairs.findIndex((r2) => intersects(left, r2[0]) && intersects(right, r2[1])) === -1;
  }
  var endingEmojiZWJ = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/;
  var endsWithEmojiZWJ = (str) => {
    return str.search(endingEmojiZWJ) !== -1;
  };
  var endingRIs = /(?:\uD83C[\uDDE6-\uDDFF])+$/g;
  var endsWithOddNumberOfRIs = (str) => {
    var match = str.match(endingRIs);
    if (match === null) {
      return false;
    } else {
      var numRIs = match[0].length / 2;
      return numRIs % 2 === 1;
    }
  };
  var isElement = (value) => {
    return isPlainObject(value) && Node.isNodeList(value.children) && !Editor.isEditor(value);
  };
  var Element = {
    isAncestor(value) {
      return isPlainObject(value) && Node.isNodeList(value.children);
    },
    isElement,
    isElementList(value) {
      return Array.isArray(value) && value.every((val) => Element.isElement(val));
    },
    isElementProps(props) {
      return props.children !== void 0;
    },
    isElementType: function isElementType(value, elementVal) {
      var elementKey = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "type";
      return isElement(value) && value[elementKey] === elementVal;
    },
    matches(element2, props) {
      for (var key in props) {
        if (key === "children") {
          continue;
        }
        if (element2[key] !== props[key]) {
          return false;
        }
      }
      return true;
    }
  };
  var _excluded$4 = ["text"];
  var _excluded2$3 = ["text"];
  function ownKeys$8(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$8(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys$8(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$8(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  var IS_EDITOR_CACHE = /* @__PURE__ */ new WeakMap();
  var Editor = {
    above(editor) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var {
        voids = false,
        mode = "lowest",
        at = editor.selection,
        match
      } = options;
      if (!at) {
        return;
      }
      var path = Editor.path(editor, at);
      var reverse = mode === "lowest";
      for (var [n2, p2] of Editor.levels(editor, {
        at: path,
        voids,
        match,
        reverse
      })) {
        if (!Text.isText(n2) && !Path.equals(path, p2)) {
          return [n2, p2];
        }
      }
    },
    addMark(editor, key, value) {
      editor.addMark(key, value);
    },
    after(editor, at) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var anchor = Editor.point(editor, at, {
        edge: "end"
      });
      var focus = Editor.end(editor, []);
      var range = {
        anchor,
        focus
      };
      var {
        distance = 1
      } = options;
      var d2 = 0;
      var target;
      for (var p2 of Editor.positions(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
        at: range
      }))) {
        if (d2 > distance) {
          break;
        }
        if (d2 !== 0) {
          target = p2;
        }
        d2++;
      }
      return target;
    },
    before(editor, at) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var anchor = Editor.start(editor, []);
      var focus = Editor.point(editor, at, {
        edge: "start"
      });
      var range = {
        anchor,
        focus
      };
      var {
        distance = 1
      } = options;
      var d2 = 0;
      var target;
      for (var p2 of Editor.positions(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
        at: range,
        reverse: true
      }))) {
        if (d2 > distance) {
          break;
        }
        if (d2 !== 0) {
          target = p2;
        }
        d2++;
      }
      return target;
    },
    deleteBackward(editor) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var {
        unit = "character"
      } = options;
      editor.deleteBackward(unit);
    },
    deleteForward(editor) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var {
        unit = "character"
      } = options;
      editor.deleteForward(unit);
    },
    deleteFragment(editor) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var {
        direction = "forward"
      } = options;
      editor.deleteFragment(direction);
    },
    edges(editor, at) {
      return [Editor.start(editor, at), Editor.end(editor, at)];
    },
    end(editor, at) {
      return Editor.point(editor, at, {
        edge: "end"
      });
    },
    first(editor, at) {
      var path = Editor.path(editor, at, {
        edge: "start"
      });
      return Editor.node(editor, path);
    },
    fragment(editor, at) {
      var range = Editor.range(editor, at);
      var fragment = Node.fragment(editor, range);
      return fragment;
    },
    hasBlocks(editor, element2) {
      return element2.children.some((n2) => Editor.isBlock(editor, n2));
    },
    hasInlines(editor, element2) {
      return element2.children.some((n2) => Text.isText(n2) || Editor.isInline(editor, n2));
    },
    hasTexts(editor, element2) {
      return element2.children.every((n2) => Text.isText(n2));
    },
    insertBreak(editor) {
      editor.insertBreak();
    },
    insertSoftBreak(editor) {
      editor.insertSoftBreak();
    },
    insertFragment(editor, fragment) {
      editor.insertFragment(fragment);
    },
    insertNode(editor, node) {
      editor.insertNode(node);
    },
    insertText(editor, text2) {
      editor.insertText(text2);
    },
    isBlock(editor, value) {
      return Element.isElement(value) && !editor.isInline(value);
    },
    isEditor(value) {
      var cachedIsEditor = IS_EDITOR_CACHE.get(value);
      if (cachedIsEditor !== void 0) {
        return cachedIsEditor;
      }
      if (!isPlainObject(value)) {
        return false;
      }
      var isEditor = typeof value.addMark === "function" && typeof value.apply === "function" && typeof value.deleteBackward === "function" && typeof value.deleteForward === "function" && typeof value.deleteFragment === "function" && typeof value.insertBreak === "function" && typeof value.insertSoftBreak === "function" && typeof value.insertFragment === "function" && typeof value.insertNode === "function" && typeof value.insertText === "function" && typeof value.isInline === "function" && typeof value.isVoid === "function" && typeof value.normalizeNode === "function" && typeof value.onChange === "function" && typeof value.removeMark === "function" && typeof value.getDirtyPaths === "function" && (value.marks === null || isPlainObject(value.marks)) && (value.selection === null || Range.isRange(value.selection)) && Node.isNodeList(value.children) && Operation.isOperationList(value.operations);
      IS_EDITOR_CACHE.set(value, isEditor);
      return isEditor;
    },
    isEnd(editor, point, at) {
      var end = Editor.end(editor, at);
      return Point.equals(point, end);
    },
    isEdge(editor, point, at) {
      return Editor.isStart(editor, point, at) || Editor.isEnd(editor, point, at);
    },
    isEmpty(editor, element2) {
      var {
        children
      } = element2;
      var [first] = children;
      return children.length === 0 || children.length === 1 && Text.isText(first) && first.text === "" && !editor.isVoid(element2);
    },
    isInline(editor, value) {
      return Element.isElement(value) && editor.isInline(value);
    },
    isNormalizing(editor) {
      var isNormalizing = NORMALIZING.get(editor);
      return isNormalizing === void 0 ? true : isNormalizing;
    },
    isStart(editor, point, at) {
      if (point.offset !== 0) {
        return false;
      }
      var start = Editor.start(editor, at);
      return Point.equals(point, start);
    },
    isVoid(editor, value) {
      return Element.isElement(value) && editor.isVoid(value);
    },
    last(editor, at) {
      var path = Editor.path(editor, at, {
        edge: "end"
      });
      return Editor.node(editor, path);
    },
    leaf(editor, at) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var path = Editor.path(editor, at, options);
      var node = Node.leaf(editor, path);
      return [node, path];
    },
    *levels(editor) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var {
        at = editor.selection,
        reverse = false,
        voids = false
      } = options;
      var {
        match
      } = options;
      if (match == null) {
        match = () => true;
      }
      if (!at) {
        return;
      }
      var levels = [];
      var path = Editor.path(editor, at);
      for (var [n2, p2] of Node.levels(editor, path)) {
        if (!match(n2, p2)) {
          continue;
        }
        levels.push([n2, p2]);
        if (!voids && Editor.isVoid(editor, n2)) {
          break;
        }
      }
      if (reverse) {
        levels.reverse();
      }
      yield* levels;
    },
    marks(editor) {
      var {
        marks,
        selection
      } = editor;
      if (!selection) {
        return null;
      }
      if (marks) {
        return marks;
      }
      if (Range.isExpanded(selection)) {
        var [match] = Editor.nodes(editor, {
          match: Text.isText
        });
        if (match) {
          var [_node] = match;
          var _rest = _objectWithoutProperties(_node, _excluded$4);
          return _rest;
        } else {
          return {};
        }
      }
      var {
        anchor
      } = selection;
      var {
        path
      } = anchor;
      var [node] = Editor.leaf(editor, path);
      if (anchor.offset === 0) {
        var prev = Editor.previous(editor, {
          at: path,
          match: Text.isText
        });
        var block = Editor.above(editor, {
          match: (n2) => Editor.isBlock(editor, n2)
        });
        if (prev && block) {
          var [prevNode, prevPath] = prev;
          var [, blockPath] = block;
          if (Path.isAncestor(blockPath, prevPath)) {
            node = prevNode;
          }
        }
      }
      var rest = _objectWithoutProperties(node, _excluded2$3);
      return rest;
    },
    next(editor) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var {
        mode = "lowest",
        voids = false
      } = options;
      var {
        match,
        at = editor.selection
      } = options;
      if (!at) {
        return;
      }
      var pointAfterLocation = Editor.after(editor, at, {
        voids
      });
      if (!pointAfterLocation)
        return;
      var [, to] = Editor.last(editor, []);
      var span = [pointAfterLocation.path, to];
      if (Path.isPath(at) && at.length === 0) {
        throw new Error("Cannot get the next node from the root node!");
      }
      if (match == null) {
        if (Path.isPath(at)) {
          var [parent] = Editor.parent(editor, at);
          match = (n2) => parent.children.includes(n2);
        } else {
          match = () => true;
        }
      }
      var [next] = Editor.nodes(editor, {
        at: span,
        match,
        mode,
        voids
      });
      return next;
    },
    node(editor, at) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var path = Editor.path(editor, at, options);
      var node = Node.get(editor, path);
      return [node, path];
    },
    *nodes(editor) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var {
        at = editor.selection,
        mode = "all",
        universal = false,
        reverse = false,
        voids = false
      } = options;
      var {
        match
      } = options;
      if (!match) {
        match = () => true;
      }
      if (!at) {
        return;
      }
      var from2;
      var to;
      if (Span.isSpan(at)) {
        from2 = at[0];
        to = at[1];
      } else {
        var first = Editor.path(editor, at, {
          edge: "start"
        });
        var last2 = Editor.path(editor, at, {
          edge: "end"
        });
        from2 = reverse ? last2 : first;
        to = reverse ? first : last2;
      }
      var nodeEntries = Node.nodes(editor, {
        reverse,
        from: from2,
        to,
        pass: (_ref) => {
          var [n2] = _ref;
          return voids ? false : Editor.isVoid(editor, n2);
        }
      });
      var matches = [];
      var hit;
      for (var [node, path] of nodeEntries) {
        var isLower = hit && Path.compare(path, hit[1]) === 0;
        if (mode === "highest" && isLower) {
          continue;
        }
        if (!match(node, path)) {
          if (universal && !isLower && Text.isText(node)) {
            return;
          } else {
            continue;
          }
        }
        if (mode === "lowest" && isLower) {
          hit = [node, path];
          continue;
        }
        var emit = mode === "lowest" ? hit : [node, path];
        if (emit) {
          if (universal) {
            matches.push(emit);
          } else {
            yield emit;
          }
        }
        hit = [node, path];
      }
      if (mode === "lowest" && hit) {
        if (universal) {
          matches.push(hit);
        } else {
          yield hit;
        }
      }
      if (universal) {
        yield* matches;
      }
    },
    normalize(editor) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var {
        force = false
      } = options;
      var getDirtyPaths = (editor2) => {
        return DIRTY_PATHS.get(editor2) || [];
      };
      var getDirtyPathKeys = (editor2) => {
        return DIRTY_PATH_KEYS.get(editor2) || /* @__PURE__ */ new Set();
      };
      var popDirtyPath = (editor2) => {
        var path = getDirtyPaths(editor2).pop();
        var key = path.join(",");
        getDirtyPathKeys(editor2).delete(key);
        return path;
      };
      if (!Editor.isNormalizing(editor)) {
        return;
      }
      if (force) {
        var allPaths = Array.from(Node.nodes(editor), (_ref2) => {
          var [, p2] = _ref2;
          return p2;
        });
        var allPathKeys = new Set(allPaths.map((p2) => p2.join(",")));
        DIRTY_PATHS.set(editor, allPaths);
        DIRTY_PATH_KEYS.set(editor, allPathKeys);
      }
      if (getDirtyPaths(editor).length === 0) {
        return;
      }
      Editor.withoutNormalizing(editor, () => {
        for (var dirtyPath of getDirtyPaths(editor)) {
          if (Node.has(editor, dirtyPath)) {
            var entry = Editor.node(editor, dirtyPath);
            var [node, _2] = entry;
            if (Element.isElement(node) && node.children.length === 0) {
              editor.normalizeNode(entry);
            }
          }
        }
        var max2 = getDirtyPaths(editor).length * 42;
        var m = 0;
        while (getDirtyPaths(editor).length !== 0) {
          if (m > max2) {
            throw new Error("\n            Could not completely normalize the editor after ".concat(max2, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.\n          "));
          }
          var _dirtyPath = popDirtyPath(editor);
          if (Node.has(editor, _dirtyPath)) {
            var _entry = Editor.node(editor, _dirtyPath);
            editor.normalizeNode(_entry);
          }
          m++;
        }
      });
    },
    parent(editor, at) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var path = Editor.path(editor, at, options);
      var parentPath = Path.parent(path);
      var entry = Editor.node(editor, parentPath);
      return entry;
    },
    path(editor, at) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var {
        depth,
        edge
      } = options;
      if (Path.isPath(at)) {
        if (edge === "start") {
          var [, firstPath] = Node.first(editor, at);
          at = firstPath;
        } else if (edge === "end") {
          var [, lastPath] = Node.last(editor, at);
          at = lastPath;
        }
      }
      if (Range.isRange(at)) {
        if (edge === "start") {
          at = Range.start(at);
        } else if (edge === "end") {
          at = Range.end(at);
        } else {
          at = Path.common(at.anchor.path, at.focus.path);
        }
      }
      if (Point.isPoint(at)) {
        at = at.path;
      }
      if (depth != null) {
        at = at.slice(0, depth);
      }
      return at;
    },
    hasPath(editor, path) {
      return Node.has(editor, path);
    },
    pathRef(editor, path) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var {
        affinity = "forward"
      } = options;
      var ref = {
        current: path,
        affinity,
        unref() {
          var {
            current
          } = ref;
          var pathRefs = Editor.pathRefs(editor);
          pathRefs.delete(ref);
          ref.current = null;
          return current;
        }
      };
      var refs = Editor.pathRefs(editor);
      refs.add(ref);
      return ref;
    },
    pathRefs(editor) {
      var refs = PATH_REFS.get(editor);
      if (!refs) {
        refs = /* @__PURE__ */ new Set();
        PATH_REFS.set(editor, refs);
      }
      return refs;
    },
    point(editor, at) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var {
        edge = "start"
      } = options;
      if (Path.isPath(at)) {
        var path;
        if (edge === "end") {
          var [, lastPath] = Node.last(editor, at);
          path = lastPath;
        } else {
          var [, firstPath] = Node.first(editor, at);
          path = firstPath;
        }
        var node = Node.get(editor, path);
        if (!Text.isText(node)) {
          throw new Error("Cannot get the ".concat(edge, " point in the node at path [").concat(at, "] because it has no ").concat(edge, " text node."));
        }
        return {
          path,
          offset: edge === "end" ? node.text.length : 0
        };
      }
      if (Range.isRange(at)) {
        var [start, end] = Range.edges(at);
        return edge === "start" ? start : end;
      }
      return at;
    },
    pointRef(editor, point) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var {
        affinity = "forward"
      } = options;
      var ref = {
        current: point,
        affinity,
        unref() {
          var {
            current
          } = ref;
          var pointRefs = Editor.pointRefs(editor);
          pointRefs.delete(ref);
          ref.current = null;
          return current;
        }
      };
      var refs = Editor.pointRefs(editor);
      refs.add(ref);
      return ref;
    },
    pointRefs(editor) {
      var refs = POINT_REFS.get(editor);
      if (!refs) {
        refs = /* @__PURE__ */ new Set();
        POINT_REFS.set(editor, refs);
      }
      return refs;
    },
    *positions(editor) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var {
        at = editor.selection,
        unit = "offset",
        reverse = false,
        voids = false
      } = options;
      if (!at) {
        return;
      }
      var range = Editor.range(editor, at);
      var [start, end] = Range.edges(range);
      var first = reverse ? end : start;
      var isNewBlock = false;
      var blockText = "";
      var distance = 0;
      var leafTextRemaining = 0;
      var leafTextOffset = 0;
      for (var [node, path] of Editor.nodes(editor, {
        at,
        reverse,
        voids
      })) {
        if (Element.isElement(node)) {
          if (!voids && editor.isVoid(node)) {
            yield Editor.start(editor, path);
            continue;
          }
          if (editor.isInline(node))
            continue;
          if (Editor.hasInlines(editor, node)) {
            var e = Path.isAncestor(path, end.path) ? end : Editor.end(editor, path);
            var s2 = Path.isAncestor(path, start.path) ? start : Editor.start(editor, path);
            blockText = Editor.string(editor, {
              anchor: s2,
              focus: e
            }, {
              voids
            });
            isNewBlock = true;
          }
        }
        if (Text.isText(node)) {
          var isFirst = Path.equals(path, first.path);
          if (isFirst) {
            leafTextRemaining = reverse ? first.offset : node.text.length - first.offset;
            leafTextOffset = first.offset;
          } else {
            leafTextRemaining = node.text.length;
            leafTextOffset = reverse ? leafTextRemaining : 0;
          }
          if (isFirst || isNewBlock || unit === "offset") {
            yield {
              path,
              offset: leafTextOffset
            };
            isNewBlock = false;
          }
          while (true) {
            if (distance === 0) {
              if (blockText === "")
                break;
              distance = calcDistance(blockText, unit, reverse);
              blockText = splitByCharacterDistance(blockText, distance, reverse)[1];
            }
            leafTextOffset = reverse ? leafTextOffset - distance : leafTextOffset + distance;
            leafTextRemaining = leafTextRemaining - distance;
            if (leafTextRemaining < 0) {
              distance = -leafTextRemaining;
              break;
            }
            distance = 0;
            yield {
              path,
              offset: leafTextOffset
            };
          }
        }
      }
      function calcDistance(text2, unit2, reverse2) {
        if (unit2 === "character") {
          return getCharacterDistance(text2, reverse2);
        } else if (unit2 === "word") {
          return getWordDistance(text2, reverse2);
        } else if (unit2 === "line" || unit2 === "block") {
          return text2.length;
        }
        return 1;
      }
    },
    previous(editor) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var {
        mode = "lowest",
        voids = false
      } = options;
      var {
        match,
        at = editor.selection
      } = options;
      if (!at) {
        return;
      }
      var pointBeforeLocation = Editor.before(editor, at, {
        voids
      });
      if (!pointBeforeLocation) {
        return;
      }
      var [, to] = Editor.first(editor, []);
      var span = [pointBeforeLocation.path, to];
      if (Path.isPath(at) && at.length === 0) {
        throw new Error("Cannot get the previous node from the root node!");
      }
      if (match == null) {
        if (Path.isPath(at)) {
          var [parent] = Editor.parent(editor, at);
          match = (n2) => parent.children.includes(n2);
        } else {
          match = () => true;
        }
      }
      var [previous] = Editor.nodes(editor, {
        reverse: true,
        at: span,
        match,
        mode,
        voids
      });
      return previous;
    },
    range(editor, at, to) {
      if (Range.isRange(at) && !to) {
        return at;
      }
      var start = Editor.start(editor, at);
      var end = Editor.end(editor, to || at);
      return {
        anchor: start,
        focus: end
      };
    },
    rangeRef(editor, range) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var {
        affinity = "forward"
      } = options;
      var ref = {
        current: range,
        affinity,
        unref() {
          var {
            current
          } = ref;
          var rangeRefs = Editor.rangeRefs(editor);
          rangeRefs.delete(ref);
          ref.current = null;
          return current;
        }
      };
      var refs = Editor.rangeRefs(editor);
      refs.add(ref);
      return ref;
    },
    rangeRefs(editor) {
      var refs = RANGE_REFS.get(editor);
      if (!refs) {
        refs = /* @__PURE__ */ new Set();
        RANGE_REFS.set(editor, refs);
      }
      return refs;
    },
    removeMark(editor, key) {
      editor.removeMark(key);
    },
    setNormalizing(editor, isNormalizing) {
      NORMALIZING.set(editor, isNormalizing);
    },
    start(editor, at) {
      return Editor.point(editor, at, {
        edge: "start"
      });
    },
    string(editor, at) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var {
        voids = false
      } = options;
      var range = Editor.range(editor, at);
      var [start, end] = Range.edges(range);
      var text2 = "";
      for (var [node, path] of Editor.nodes(editor, {
        at: range,
        match: Text.isText,
        voids
      })) {
        var t2 = node.text;
        if (Path.equals(path, end.path)) {
          t2 = t2.slice(0, end.offset);
        }
        if (Path.equals(path, start.path)) {
          t2 = t2.slice(start.offset);
        }
        text2 += t2;
      }
      return text2;
    },
    unhangRange(editor, range) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var {
        voids = false
      } = options;
      var [start, end] = Range.edges(range);
      if (start.offset !== 0 || end.offset !== 0 || Range.isCollapsed(range)) {
        return range;
      }
      var endBlock = Editor.above(editor, {
        at: end,
        match: (n2) => Editor.isBlock(editor, n2)
      });
      var blockPath = endBlock ? endBlock[1] : [];
      var first = Editor.start(editor, start);
      var before = {
        anchor: first,
        focus: end
      };
      var skip = true;
      for (var [node, path] of Editor.nodes(editor, {
        at: before,
        match: Text.isText,
        reverse: true,
        voids
      })) {
        if (skip) {
          skip = false;
          continue;
        }
        if (node.text !== "" || Path.isBefore(path, blockPath)) {
          end = {
            path,
            offset: node.text.length
          };
          break;
        }
      }
      return {
        anchor: start,
        focus: end
      };
    },
    void(editor) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return Editor.above(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
        match: (n2) => Editor.isVoid(editor, n2)
      }));
    },
    withoutNormalizing(editor, fn2) {
      var value = Editor.isNormalizing(editor);
      Editor.setNormalizing(editor, false);
      try {
        fn2();
      } finally {
        Editor.setNormalizing(editor, value);
      }
      Editor.normalize(editor);
    }
  };
  var Span = {
    isSpan(value) {
      return Array.isArray(value) && value.length === 2 && value.every(Path.isPath);
    }
  };
  var _excluded$3 = ["children"];
  var _excluded2$2 = ["text"];
  var IS_NODE_LIST_CACHE = /* @__PURE__ */ new WeakMap();
  var Node = {
    ancestor(root, path) {
      var node = Node.get(root, path);
      if (Text.isText(node)) {
        throw new Error("Cannot get the ancestor node at path [".concat(path, "] because it refers to a text node instead: ").concat(Scrubber.stringify(node)));
      }
      return node;
    },
    *ancestors(root, path) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      for (var p2 of Path.ancestors(path, options)) {
        var n2 = Node.ancestor(root, p2);
        var entry = [n2, p2];
        yield entry;
      }
    },
    child(root, index) {
      if (Text.isText(root)) {
        throw new Error("Cannot get the child of a text node: ".concat(Scrubber.stringify(root)));
      }
      var c2 = root.children[index];
      if (c2 == null) {
        throw new Error("Cannot get child at index `".concat(index, "` in node: ").concat(Scrubber.stringify(root)));
      }
      return c2;
    },
    *children(root, path) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var {
        reverse = false
      } = options;
      var ancestor = Node.ancestor(root, path);
      var {
        children
      } = ancestor;
      var index = reverse ? children.length - 1 : 0;
      while (reverse ? index >= 0 : index < children.length) {
        var child = Node.child(ancestor, index);
        var childPath = path.concat(index);
        yield [child, childPath];
        index = reverse ? index - 1 : index + 1;
      }
    },
    common(root, path, another) {
      var p2 = Path.common(path, another);
      var n2 = Node.get(root, p2);
      return [n2, p2];
    },
    descendant(root, path) {
      var node = Node.get(root, path);
      if (Editor.isEditor(node)) {
        throw new Error("Cannot get the descendant node at path [".concat(path, "] because it refers to the root editor node instead: ").concat(Scrubber.stringify(node)));
      }
      return node;
    },
    *descendants(root) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      for (var [node, path] of Node.nodes(root, options)) {
        if (path.length !== 0) {
          yield [node, path];
        }
      }
    },
    *elements(root) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      for (var [node, path] of Node.nodes(root, options)) {
        if (Element.isElement(node)) {
          yield [node, path];
        }
      }
    },
    extractProps(node) {
      if (Element.isAncestor(node)) {
        var properties = _objectWithoutProperties(node, _excluded$3);
        return properties;
      } else {
        var properties = _objectWithoutProperties(node, _excluded2$2);
        return properties;
      }
    },
    first(root, path) {
      var p2 = path.slice();
      var n2 = Node.get(root, p2);
      while (n2) {
        if (Text.isText(n2) || n2.children.length === 0) {
          break;
        } else {
          n2 = n2.children[0];
          p2.push(0);
        }
      }
      return [n2, p2];
    },
    fragment(root, range) {
      if (Text.isText(root)) {
        throw new Error("Cannot get a fragment starting from a root text node: ".concat(Scrubber.stringify(root)));
      }
      var newRoot = fn({
        children: root.children
      }, (r2) => {
        var [start, end] = Range.edges(range);
        var nodeEntries = Node.nodes(r2, {
          reverse: true,
          pass: (_ref) => {
            var [, path2] = _ref;
            return !Range.includes(range, path2);
          }
        });
        for (var [, path] of nodeEntries) {
          if (!Range.includes(range, path)) {
            var parent = Node.parent(r2, path);
            var index = path[path.length - 1];
            parent.children.splice(index, 1);
          }
          if (Path.equals(path, end.path)) {
            var leaf = Node.leaf(r2, path);
            leaf.text = leaf.text.slice(0, end.offset);
          }
          if (Path.equals(path, start.path)) {
            var _leaf = Node.leaf(r2, path);
            _leaf.text = _leaf.text.slice(start.offset);
          }
        }
        if (Editor.isEditor(r2)) {
          r2.selection = null;
        }
      });
      return newRoot.children;
    },
    get(root, path) {
      var node = root;
      for (var i2 = 0; i2 < path.length; i2++) {
        var p2 = path[i2];
        if (Text.isText(node) || !node.children[p2]) {
          throw new Error("Cannot find a descendant at path [".concat(path, "] in node: ").concat(Scrubber.stringify(root)));
        }
        node = node.children[p2];
      }
      return node;
    },
    has(root, path) {
      var node = root;
      for (var i2 = 0; i2 < path.length; i2++) {
        var p2 = path[i2];
        if (Text.isText(node) || !node.children[p2]) {
          return false;
        }
        node = node.children[p2];
      }
      return true;
    },
    isNode(value) {
      return Text.isText(value) || Element.isElement(value) || Editor.isEditor(value);
    },
    isNodeList(value) {
      if (!Array.isArray(value)) {
        return false;
      }
      var cachedResult = IS_NODE_LIST_CACHE.get(value);
      if (cachedResult !== void 0) {
        return cachedResult;
      }
      var isNodeList = value.every((val) => Node.isNode(val));
      IS_NODE_LIST_CACHE.set(value, isNodeList);
      return isNodeList;
    },
    last(root, path) {
      var p2 = path.slice();
      var n2 = Node.get(root, p2);
      while (n2) {
        if (Text.isText(n2) || n2.children.length === 0) {
          break;
        } else {
          var i2 = n2.children.length - 1;
          n2 = n2.children[i2];
          p2.push(i2);
        }
      }
      return [n2, p2];
    },
    leaf(root, path) {
      var node = Node.get(root, path);
      if (!Text.isText(node)) {
        throw new Error("Cannot get the leaf node at path [".concat(path, "] because it refers to a non-leaf node: ").concat(Scrubber.stringify(node)));
      }
      return node;
    },
    *levels(root, path) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      for (var p2 of Path.levels(path, options)) {
        var n2 = Node.get(root, p2);
        yield [n2, p2];
      }
    },
    matches(node, props) {
      return Element.isElement(node) && Element.isElementProps(props) && Element.matches(node, props) || Text.isText(node) && Text.isTextProps(props) && Text.matches(node, props);
    },
    *nodes(root) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var {
        pass,
        reverse = false
      } = options;
      var {
        from: from2 = [],
        to
      } = options;
      var visited = /* @__PURE__ */ new Set();
      var p2 = [];
      var n2 = root;
      while (true) {
        if (to && (reverse ? Path.isBefore(p2, to) : Path.isAfter(p2, to))) {
          break;
        }
        if (!visited.has(n2)) {
          yield [n2, p2];
        }
        if (!visited.has(n2) && !Text.isText(n2) && n2.children.length !== 0 && (pass == null || pass([n2, p2]) === false)) {
          visited.add(n2);
          var nextIndex = reverse ? n2.children.length - 1 : 0;
          if (Path.isAncestor(p2, from2)) {
            nextIndex = from2[p2.length];
          }
          p2 = p2.concat(nextIndex);
          n2 = Node.get(root, p2);
          continue;
        }
        if (p2.length === 0) {
          break;
        }
        if (!reverse) {
          var newPath = Path.next(p2);
          if (Node.has(root, newPath)) {
            p2 = newPath;
            n2 = Node.get(root, p2);
            continue;
          }
        }
        if (reverse && p2[p2.length - 1] !== 0) {
          var _newPath = Path.previous(p2);
          p2 = _newPath;
          n2 = Node.get(root, p2);
          continue;
        }
        p2 = Path.parent(p2);
        n2 = Node.get(root, p2);
        visited.add(n2);
      }
    },
    parent(root, path) {
      var parentPath = Path.parent(path);
      var p2 = Node.get(root, parentPath);
      if (Text.isText(p2)) {
        throw new Error("Cannot get the parent of path [".concat(path, "] because it does not exist in the root."));
      }
      return p2;
    },
    string(node) {
      if (Text.isText(node)) {
        return node.text;
      } else {
        return node.children.map(Node.string).join("");
      }
    },
    *texts(root) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      for (var [node, path] of Node.nodes(root, options)) {
        if (Text.isText(node)) {
          yield [node, path];
        }
      }
    }
  };
  function ownKeys$7(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$7(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys$7(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$7(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  var Operation = {
    isNodeOperation(value) {
      return Operation.isOperation(value) && value.type.endsWith("_node");
    },
    isOperation(value) {
      if (!isPlainObject(value)) {
        return false;
      }
      switch (value.type) {
        case "insert_node":
          return Path.isPath(value.path) && Node.isNode(value.node);
        case "insert_text":
          return typeof value.offset === "number" && typeof value.text === "string" && Path.isPath(value.path);
        case "merge_node":
          return typeof value.position === "number" && Path.isPath(value.path) && isPlainObject(value.properties);
        case "move_node":
          return Path.isPath(value.path) && Path.isPath(value.newPath);
        case "remove_node":
          return Path.isPath(value.path) && Node.isNode(value.node);
        case "remove_text":
          return typeof value.offset === "number" && typeof value.text === "string" && Path.isPath(value.path);
        case "set_node":
          return Path.isPath(value.path) && isPlainObject(value.properties) && isPlainObject(value.newProperties);
        case "set_selection":
          return value.properties === null && Range.isRange(value.newProperties) || value.newProperties === null && Range.isRange(value.properties) || isPlainObject(value.properties) && isPlainObject(value.newProperties);
        case "split_node":
          return Path.isPath(value.path) && typeof value.position === "number" && isPlainObject(value.properties);
        default:
          return false;
      }
    },
    isOperationList(value) {
      return Array.isArray(value) && value.every((val) => Operation.isOperation(val));
    },
    isSelectionOperation(value) {
      return Operation.isOperation(value) && value.type.endsWith("_selection");
    },
    isTextOperation(value) {
      return Operation.isOperation(value) && value.type.endsWith("_text");
    },
    inverse(op) {
      switch (op.type) {
        case "insert_node": {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: "remove_node"
          });
        }
        case "insert_text": {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: "remove_text"
          });
        }
        case "merge_node": {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: "split_node",
            path: Path.previous(op.path)
          });
        }
        case "move_node": {
          var {
            newPath,
            path
          } = op;
          if (Path.equals(newPath, path)) {
            return op;
          }
          if (Path.isSibling(path, newPath)) {
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              path: newPath,
              newPath: path
            });
          }
          var inversePath = Path.transform(path, op);
          var inverseNewPath = Path.transform(Path.next(path), op);
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            path: inversePath,
            newPath: inverseNewPath
          });
        }
        case "remove_node": {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: "insert_node"
          });
        }
        case "remove_text": {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: "insert_text"
          });
        }
        case "set_node": {
          var {
            properties,
            newProperties
          } = op;
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            properties: newProperties,
            newProperties: properties
          });
        }
        case "set_selection": {
          var {
            properties: _properties,
            newProperties: _newProperties
          } = op;
          if (_properties == null) {
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              properties: _newProperties,
              newProperties: null
            });
          } else if (_newProperties == null) {
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              properties: null,
              newProperties: _properties
            });
          } else {
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              properties: _newProperties,
              newProperties: _properties
            });
          }
        }
        case "split_node": {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: "merge_node",
            path: Path.next(op.path)
          });
        }
      }
    }
  };
  var Path = {
    ancestors(path) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var {
        reverse = false
      } = options;
      var paths = Path.levels(path, options);
      if (reverse) {
        paths = paths.slice(1);
      } else {
        paths = paths.slice(0, -1);
      }
      return paths;
    },
    common(path, another) {
      var common = [];
      for (var i2 = 0; i2 < path.length && i2 < another.length; i2++) {
        var av = path[i2];
        var bv = another[i2];
        if (av !== bv) {
          break;
        }
        common.push(av);
      }
      return common;
    },
    compare(path, another) {
      var min2 = Math.min(path.length, another.length);
      for (var i2 = 0; i2 < min2; i2++) {
        if (path[i2] < another[i2])
          return -1;
        if (path[i2] > another[i2])
          return 1;
      }
      return 0;
    },
    endsAfter(path, another) {
      var i2 = path.length - 1;
      var as = path.slice(0, i2);
      var bs = another.slice(0, i2);
      var av = path[i2];
      var bv = another[i2];
      return Path.equals(as, bs) && av > bv;
    },
    endsAt(path, another) {
      var i2 = path.length;
      var as = path.slice(0, i2);
      var bs = another.slice(0, i2);
      return Path.equals(as, bs);
    },
    endsBefore(path, another) {
      var i2 = path.length - 1;
      var as = path.slice(0, i2);
      var bs = another.slice(0, i2);
      var av = path[i2];
      var bv = another[i2];
      return Path.equals(as, bs) && av < bv;
    },
    equals(path, another) {
      return path.length === another.length && path.every((n2, i2) => n2 === another[i2]);
    },
    hasPrevious(path) {
      return path[path.length - 1] > 0;
    },
    isAfter(path, another) {
      return Path.compare(path, another) === 1;
    },
    isAncestor(path, another) {
      return path.length < another.length && Path.compare(path, another) === 0;
    },
    isBefore(path, another) {
      return Path.compare(path, another) === -1;
    },
    isChild(path, another) {
      return path.length === another.length + 1 && Path.compare(path, another) === 0;
    },
    isCommon(path, another) {
      return path.length <= another.length && Path.compare(path, another) === 0;
    },
    isDescendant(path, another) {
      return path.length > another.length && Path.compare(path, another) === 0;
    },
    isParent(path, another) {
      return path.length + 1 === another.length && Path.compare(path, another) === 0;
    },
    isPath(value) {
      return Array.isArray(value) && (value.length === 0 || typeof value[0] === "number");
    },
    isSibling(path, another) {
      if (path.length !== another.length) {
        return false;
      }
      var as = path.slice(0, -1);
      var bs = another.slice(0, -1);
      var al = path[path.length - 1];
      var bl = another[another.length - 1];
      return al !== bl && Path.equals(as, bs);
    },
    levels(path) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var {
        reverse = false
      } = options;
      var list = [];
      for (var i2 = 0; i2 <= path.length; i2++) {
        list.push(path.slice(0, i2));
      }
      if (reverse) {
        list.reverse();
      }
      return list;
    },
    next(path) {
      if (path.length === 0) {
        throw new Error("Cannot get the next path of a root path [".concat(path, "], because it has no next index."));
      }
      var last2 = path[path.length - 1];
      return path.slice(0, -1).concat(last2 + 1);
    },
    operationCanTransformPath(operation) {
      switch (operation.type) {
        case "insert_node":
        case "remove_node":
        case "merge_node":
        case "split_node":
        case "move_node":
          return true;
        default:
          return false;
      }
    },
    parent(path) {
      if (path.length === 0) {
        throw new Error("Cannot get the parent path of the root path [".concat(path, "]."));
      }
      return path.slice(0, -1);
    },
    previous(path) {
      if (path.length === 0) {
        throw new Error("Cannot get the previous path of a root path [".concat(path, "], because it has no previous index."));
      }
      var last2 = path[path.length - 1];
      if (last2 <= 0) {
        throw new Error("Cannot get the previous path of a first child path [".concat(path, "] because it would result in a negative index."));
      }
      return path.slice(0, -1).concat(last2 - 1);
    },
    relative(path, ancestor) {
      if (!Path.isAncestor(ancestor, path) && !Path.equals(path, ancestor)) {
        throw new Error("Cannot get the relative path of [".concat(path, "] inside ancestor [").concat(ancestor, "], because it is not above or equal to the path."));
      }
      return path.slice(ancestor.length);
    },
    transform(path, operation) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return fn(path, (p2) => {
        var {
          affinity = "forward"
        } = options;
        if (!path || (path === null || path === void 0 ? void 0 : path.length) === 0) {
          return;
        }
        if (p2 === null) {
          return null;
        }
        switch (operation.type) {
          case "insert_node": {
            var {
              path: op
            } = operation;
            if (Path.equals(op, p2) || Path.endsBefore(op, p2) || Path.isAncestor(op, p2)) {
              p2[op.length - 1] += 1;
            }
            break;
          }
          case "remove_node": {
            var {
              path: _op
            } = operation;
            if (Path.equals(_op, p2) || Path.isAncestor(_op, p2)) {
              return null;
            } else if (Path.endsBefore(_op, p2)) {
              p2[_op.length - 1] -= 1;
            }
            break;
          }
          case "merge_node": {
            var {
              path: _op2,
              position
            } = operation;
            if (Path.equals(_op2, p2) || Path.endsBefore(_op2, p2)) {
              p2[_op2.length - 1] -= 1;
            } else if (Path.isAncestor(_op2, p2)) {
              p2[_op2.length - 1] -= 1;
              p2[_op2.length] += position;
            }
            break;
          }
          case "split_node": {
            var {
              path: _op3,
              position: _position
            } = operation;
            if (Path.equals(_op3, p2)) {
              if (affinity === "forward") {
                p2[p2.length - 1] += 1;
              } else if (affinity === "backward")
                ;
              else {
                return null;
              }
            } else if (Path.endsBefore(_op3, p2)) {
              p2[_op3.length - 1] += 1;
            } else if (Path.isAncestor(_op3, p2) && path[_op3.length] >= _position) {
              p2[_op3.length - 1] += 1;
              p2[_op3.length] -= _position;
            }
            break;
          }
          case "move_node": {
            var {
              path: _op4,
              newPath: onp
            } = operation;
            if (Path.equals(_op4, onp)) {
              return;
            }
            if (Path.isAncestor(_op4, p2) || Path.equals(_op4, p2)) {
              var copy2 = onp.slice();
              if (Path.endsBefore(_op4, onp) && _op4.length < onp.length) {
                copy2[_op4.length - 1] -= 1;
              }
              return copy2.concat(p2.slice(_op4.length));
            } else if (Path.isSibling(_op4, onp) && (Path.isAncestor(onp, p2) || Path.equals(onp, p2))) {
              if (Path.endsBefore(_op4, p2)) {
                p2[_op4.length - 1] -= 1;
              } else {
                p2[_op4.length - 1] += 1;
              }
            } else if (Path.endsBefore(onp, p2) || Path.equals(onp, p2) || Path.isAncestor(onp, p2)) {
              if (Path.endsBefore(_op4, p2)) {
                p2[_op4.length - 1] -= 1;
              }
              p2[onp.length - 1] += 1;
            } else if (Path.endsBefore(_op4, p2)) {
              if (Path.equals(onp, p2)) {
                p2[onp.length - 1] += 1;
              }
              p2[_op4.length - 1] -= 1;
            }
            break;
          }
        }
      });
    }
  };
  function ownKeys$6(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$6(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys$6(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$6(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  var Point = {
    compare(point, another) {
      var result = Path.compare(point.path, another.path);
      if (result === 0) {
        if (point.offset < another.offset)
          return -1;
        if (point.offset > another.offset)
          return 1;
        return 0;
      }
      return result;
    },
    isAfter(point, another) {
      return Point.compare(point, another) === 1;
    },
    isBefore(point, another) {
      return Point.compare(point, another) === -1;
    },
    equals(point, another) {
      return point.offset === another.offset && Path.equals(point.path, another.path);
    },
    isPoint(value) {
      return isPlainObject(value) && typeof value.offset === "number" && Path.isPath(value.path);
    },
    transform(point, op) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return fn(point, (p2) => {
        if (p2 === null) {
          return null;
        }
        var {
          affinity = "forward"
        } = options;
        var {
          path,
          offset
        } = p2;
        switch (op.type) {
          case "insert_node":
          case "move_node": {
            p2.path = Path.transform(path, op, options);
            break;
          }
          case "insert_text": {
            if (Path.equals(op.path, path) && (op.offset < offset || op.offset === offset && affinity === "forward")) {
              p2.offset += op.text.length;
            }
            break;
          }
          case "merge_node": {
            if (Path.equals(op.path, path)) {
              p2.offset += op.position;
            }
            p2.path = Path.transform(path, op, options);
            break;
          }
          case "remove_text": {
            if (Path.equals(op.path, path) && op.offset <= offset) {
              p2.offset -= Math.min(offset - op.offset, op.text.length);
            }
            break;
          }
          case "remove_node": {
            if (Path.equals(op.path, path) || Path.isAncestor(op.path, path)) {
              return null;
            }
            p2.path = Path.transform(path, op, options);
            break;
          }
          case "split_node": {
            if (Path.equals(op.path, path)) {
              if (op.position === offset && affinity == null) {
                return null;
              } else if (op.position < offset || op.position === offset && affinity === "forward") {
                p2.offset -= op.position;
                p2.path = Path.transform(path, op, _objectSpread$6(_objectSpread$6({}, options), {}, {
                  affinity: "forward"
                }));
              }
            } else {
              p2.path = Path.transform(path, op, options);
            }
            break;
          }
        }
      });
    }
  };
  var _excluded$2 = ["anchor", "focus"];
  function ownKeys$5(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$5(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys$5(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$5(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  var Range = {
    edges(range) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var {
        reverse = false
      } = options;
      var {
        anchor,
        focus
      } = range;
      return Range.isBackward(range) === reverse ? [anchor, focus] : [focus, anchor];
    },
    end(range) {
      var [, end] = Range.edges(range);
      return end;
    },
    equals(range, another) {
      return Point.equals(range.anchor, another.anchor) && Point.equals(range.focus, another.focus);
    },
    includes(range, target) {
      if (Range.isRange(target)) {
        if (Range.includes(range, target.anchor) || Range.includes(range, target.focus)) {
          return true;
        }
        var [rs, re] = Range.edges(range);
        var [ts, te] = Range.edges(target);
        return Point.isBefore(rs, ts) && Point.isAfter(re, te);
      }
      var [start, end] = Range.edges(range);
      var isAfterStart = false;
      var isBeforeEnd = false;
      if (Point.isPoint(target)) {
        isAfterStart = Point.compare(target, start) >= 0;
        isBeforeEnd = Point.compare(target, end) <= 0;
      } else {
        isAfterStart = Path.compare(target, start.path) >= 0;
        isBeforeEnd = Path.compare(target, end.path) <= 0;
      }
      return isAfterStart && isBeforeEnd;
    },
    intersection(range, another) {
      var rest = _objectWithoutProperties(range, _excluded$2);
      var [s1, e1] = Range.edges(range);
      var [s2, e2] = Range.edges(another);
      var start = Point.isBefore(s1, s2) ? s2 : s1;
      var end = Point.isBefore(e1, e2) ? e1 : e2;
      if (Point.isBefore(end, start)) {
        return null;
      } else {
        return _objectSpread$5({
          anchor: start,
          focus: end
        }, rest);
      }
    },
    isBackward(range) {
      var {
        anchor,
        focus
      } = range;
      return Point.isAfter(anchor, focus);
    },
    isCollapsed(range) {
      var {
        anchor,
        focus
      } = range;
      return Point.equals(anchor, focus);
    },
    isExpanded(range) {
      return !Range.isCollapsed(range);
    },
    isForward(range) {
      return !Range.isBackward(range);
    },
    isRange(value) {
      return isPlainObject(value) && Point.isPoint(value.anchor) && Point.isPoint(value.focus);
    },
    *points(range) {
      yield [range.anchor, "anchor"];
      yield [range.focus, "focus"];
    },
    start(range) {
      var [start] = Range.edges(range);
      return start;
    },
    transform(range, op) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return fn(range, (r2) => {
        if (r2 === null) {
          return null;
        }
        var {
          affinity = "inward"
        } = options;
        var affinityAnchor;
        var affinityFocus;
        if (affinity === "inward") {
          var isCollapsed = Range.isCollapsed(r2);
          if (Range.isForward(r2)) {
            affinityAnchor = "forward";
            affinityFocus = isCollapsed ? affinityAnchor : "backward";
          } else {
            affinityAnchor = "backward";
            affinityFocus = isCollapsed ? affinityAnchor : "forward";
          }
        } else if (affinity === "outward") {
          if (Range.isForward(r2)) {
            affinityAnchor = "backward";
            affinityFocus = "forward";
          } else {
            affinityAnchor = "forward";
            affinityFocus = "backward";
          }
        } else {
          affinityAnchor = affinity;
          affinityFocus = affinity;
        }
        var anchor = Point.transform(r2.anchor, op, {
          affinity: affinityAnchor
        });
        var focus = Point.transform(r2.focus, op, {
          affinity: affinityFocus
        });
        if (!anchor || !focus) {
          return null;
        }
        r2.anchor = anchor;
        r2.focus = focus;
      });
    }
  };
  var _scrubber = void 0;
  var Scrubber = {
    setScrubber(scrubber) {
      _scrubber = scrubber;
    },
    stringify(value) {
      return JSON.stringify(value, _scrubber);
    }
  };
  var isDeepEqual = (node, another) => {
    for (var key in node) {
      var a2 = node[key];
      var b2 = another[key];
      if (isPlainObject(a2) && isPlainObject(b2)) {
        if (!isDeepEqual(a2, b2))
          return false;
      } else if (Array.isArray(a2) && Array.isArray(b2)) {
        if (a2.length !== b2.length)
          return false;
        for (var i2 = 0; i2 < a2.length; i2++) {
          if (a2[i2] !== b2[i2])
            return false;
        }
      } else if (a2 !== b2) {
        return false;
      }
    }
    for (var _key in another) {
      if (node[_key] === void 0 && another[_key] !== void 0) {
        return false;
      }
    }
    return true;
  };
  var _excluded$1 = ["text"];
  var _excluded2$1 = ["anchor", "focus"];
  function ownKeys$4(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$4(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys$4(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$4(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  var Text = {
    equals(text2, another) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var {
        loose = false
      } = options;
      function omitText(obj) {
        var rest = _objectWithoutProperties(obj, _excluded$1);
        return rest;
      }
      return isDeepEqual(loose ? omitText(text2) : text2, loose ? omitText(another) : another);
    },
    isText(value) {
      return isPlainObject(value) && typeof value.text === "string";
    },
    isTextList(value) {
      return Array.isArray(value) && value.every((val) => Text.isText(val));
    },
    isTextProps(props) {
      return props.text !== void 0;
    },
    matches(text2, props) {
      for (var key in props) {
        if (key === "text") {
          continue;
        }
        if (!text2.hasOwnProperty(key) || text2[key] !== props[key]) {
          return false;
        }
      }
      return true;
    },
    decorations(node, decorations) {
      var leaves = [_objectSpread$4({}, node)];
      for (var dec of decorations) {
        var rest = _objectWithoutProperties(dec, _excluded2$1);
        var [start, end] = Range.edges(dec);
        var next = [];
        var leafEnd = 0;
        var decorationStart = start.offset;
        var decorationEnd = end.offset;
        for (var leaf of leaves) {
          var {
            length: length3
          } = leaf.text;
          var leafStart = leafEnd;
          leafEnd += length3;
          if (decorationStart <= leafStart && leafEnd <= decorationEnd) {
            Object.assign(leaf, rest);
            next.push(leaf);
            continue;
          }
          if (decorationStart !== decorationEnd && (decorationStart === leafEnd || decorationEnd === leafStart) || decorationStart > leafEnd || decorationEnd < leafStart || decorationEnd === leafStart && leafStart !== 0) {
            next.push(leaf);
            continue;
          }
          var middle = leaf;
          var before = void 0;
          var after = void 0;
          if (decorationEnd < leafEnd) {
            var off = decorationEnd - leafStart;
            after = _objectSpread$4(_objectSpread$4({}, middle), {}, {
              text: middle.text.slice(off)
            });
            middle = _objectSpread$4(_objectSpread$4({}, middle), {}, {
              text: middle.text.slice(0, off)
            });
          }
          if (decorationStart > leafStart) {
            var _off = decorationStart - leafStart;
            before = _objectSpread$4(_objectSpread$4({}, middle), {}, {
              text: middle.text.slice(0, _off)
            });
            middle = _objectSpread$4(_objectSpread$4({}, middle), {}, {
              text: middle.text.slice(_off)
            });
          }
          Object.assign(middle, rest);
          if (before) {
            next.push(before);
          }
          next.push(middle);
          if (after) {
            next.push(after);
          }
        }
        leaves = next;
      }
      return leaves;
    }
  };
  function ownKeys$3(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$3(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys$3(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$3(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  var applyToDraft = (editor, selection, op) => {
    switch (op.type) {
      case "insert_node": {
        var {
          path,
          node
        } = op;
        var parent = Node.parent(editor, path);
        var index = path[path.length - 1];
        if (index > parent.children.length) {
          throw new Error('Cannot apply an "insert_node" operation at path ['.concat(path, "] because the destination is past the end of the node."));
        }
        parent.children.splice(index, 0, node);
        if (selection) {
          for (var [point, key] of Range.points(selection)) {
            selection[key] = Point.transform(point, op);
          }
        }
        break;
      }
      case "insert_text": {
        var {
          path: _path,
          offset,
          text: text2
        } = op;
        if (text2.length === 0)
          break;
        var _node = Node.leaf(editor, _path);
        var before = _node.text.slice(0, offset);
        var after = _node.text.slice(offset);
        _node.text = before + text2 + after;
        if (selection) {
          for (var [_point, _key] of Range.points(selection)) {
            selection[_key] = Point.transform(_point, op);
          }
        }
        break;
      }
      case "merge_node": {
        var {
          path: _path2
        } = op;
        var _node2 = Node.get(editor, _path2);
        var prevPath = Path.previous(_path2);
        var prev = Node.get(editor, prevPath);
        var _parent = Node.parent(editor, _path2);
        var _index = _path2[_path2.length - 1];
        if (Text.isText(_node2) && Text.isText(prev)) {
          prev.text += _node2.text;
        } else if (!Text.isText(_node2) && !Text.isText(prev)) {
          prev.children.push(..._node2.children);
        } else {
          throw new Error('Cannot apply a "merge_node" operation at path ['.concat(_path2, "] to nodes of different interfaces: ").concat(Scrubber.stringify(_node2), " ").concat(Scrubber.stringify(prev)));
        }
        _parent.children.splice(_index, 1);
        if (selection) {
          for (var [_point2, _key2] of Range.points(selection)) {
            selection[_key2] = Point.transform(_point2, op);
          }
        }
        break;
      }
      case "move_node": {
        var {
          path: _path3,
          newPath
        } = op;
        if (Path.isAncestor(_path3, newPath)) {
          throw new Error("Cannot move a path [".concat(_path3, "] to new path [").concat(newPath, "] because the destination is inside itself."));
        }
        var _node3 = Node.get(editor, _path3);
        var _parent2 = Node.parent(editor, _path3);
        var _index2 = _path3[_path3.length - 1];
        _parent2.children.splice(_index2, 1);
        var truePath = Path.transform(_path3, op);
        var newParent = Node.get(editor, Path.parent(truePath));
        var newIndex = truePath[truePath.length - 1];
        newParent.children.splice(newIndex, 0, _node3);
        if (selection) {
          for (var [_point3, _key3] of Range.points(selection)) {
            selection[_key3] = Point.transform(_point3, op);
          }
        }
        break;
      }
      case "remove_node": {
        var {
          path: _path4
        } = op;
        var _index3 = _path4[_path4.length - 1];
        var _parent3 = Node.parent(editor, _path4);
        _parent3.children.splice(_index3, 1);
        if (selection) {
          for (var [_point4, _key4] of Range.points(selection)) {
            var result = Point.transform(_point4, op);
            if (selection != null && result != null) {
              selection[_key4] = result;
            } else {
              var _prev = void 0;
              var next = void 0;
              for (var [n2, p2] of Node.texts(editor)) {
                if (Path.compare(p2, _path4) === -1) {
                  _prev = [n2, p2];
                } else {
                  next = [n2, p2];
                  break;
                }
              }
              var preferNext = false;
              if (_prev && next) {
                if (Path.equals(next[1], _path4)) {
                  preferNext = !Path.hasPrevious(next[1]);
                } else {
                  preferNext = Path.common(_prev[1], _path4).length < Path.common(next[1], _path4).length;
                }
              }
              if (_prev && !preferNext) {
                _point4.path = _prev[1];
                _point4.offset = _prev[0].text.length;
              } else if (next) {
                _point4.path = next[1];
                _point4.offset = 0;
              } else {
                selection = null;
              }
            }
          }
        }
        break;
      }
      case "remove_text": {
        var {
          path: _path5,
          offset: _offset,
          text: _text
        } = op;
        if (_text.length === 0)
          break;
        var _node4 = Node.leaf(editor, _path5);
        var _before = _node4.text.slice(0, _offset);
        var _after = _node4.text.slice(_offset + _text.length);
        _node4.text = _before + _after;
        if (selection) {
          for (var [_point5, _key5] of Range.points(selection)) {
            selection[_key5] = Point.transform(_point5, op);
          }
        }
        break;
      }
      case "set_node": {
        var {
          path: _path6,
          properties,
          newProperties
        } = op;
        if (_path6.length === 0) {
          throw new Error("Cannot set properties on the root node!");
        }
        var _node5 = Node.get(editor, _path6);
        for (var _key6 in newProperties) {
          if (_key6 === "children" || _key6 === "text") {
            throw new Error('Cannot set the "'.concat(_key6, '" property of nodes!'));
          }
          var value = newProperties[_key6];
          if (value == null) {
            delete _node5[_key6];
          } else {
            _node5[_key6] = value;
          }
        }
        for (var _key7 in properties) {
          if (!newProperties.hasOwnProperty(_key7)) {
            delete _node5[_key7];
          }
        }
        break;
      }
      case "set_selection": {
        var {
          newProperties: _newProperties
        } = op;
        if (_newProperties == null) {
          selection = _newProperties;
        } else {
          if (selection == null) {
            if (!Range.isRange(_newProperties)) {
              throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(Scrubber.stringify(_newProperties), " when there is no current selection."));
            }
            selection = _objectSpread$3({}, _newProperties);
          }
          for (var _key8 in _newProperties) {
            var _value = _newProperties[_key8];
            if (_value == null) {
              if (_key8 === "anchor" || _key8 === "focus") {
                throw new Error('Cannot remove the "'.concat(_key8, '" selection property'));
              }
              delete selection[_key8];
            } else {
              selection[_key8] = _value;
            }
          }
        }
        break;
      }
      case "split_node": {
        var {
          path: _path7,
          position,
          properties: _properties
        } = op;
        if (_path7.length === 0) {
          throw new Error('Cannot apply a "split_node" operation at path ['.concat(_path7, "] because the root node cannot be split."));
        }
        var _node6 = Node.get(editor, _path7);
        var _parent4 = Node.parent(editor, _path7);
        var _index4 = _path7[_path7.length - 1];
        var newNode;
        if (Text.isText(_node6)) {
          var _before2 = _node6.text.slice(0, position);
          var _after2 = _node6.text.slice(position);
          _node6.text = _before2;
          newNode = _objectSpread$3(_objectSpread$3({}, _properties), {}, {
            text: _after2
          });
        } else {
          var _before3 = _node6.children.slice(0, position);
          var _after3 = _node6.children.slice(position);
          _node6.children = _before3;
          newNode = _objectSpread$3(_objectSpread$3({}, _properties), {}, {
            children: _after3
          });
        }
        _parent4.children.splice(_index4 + 1, 0, newNode);
        if (selection) {
          for (var [_point6, _key9] of Range.points(selection)) {
            selection[_key9] = Point.transform(_point6, op);
          }
        }
        break;
      }
    }
    return selection;
  };
  var GeneralTransforms = {
    transform(editor, op) {
      editor.children = ln(editor.children);
      var selection = editor.selection && ln(editor.selection);
      try {
        selection = applyToDraft(editor, selection, op);
      } finally {
        editor.children = dn(editor.children);
        if (selection) {
          editor.selection = t(selection) ? dn(selection) : selection;
        } else {
          editor.selection = null;
        }
      }
    }
  };
  var _excluded = ["text"];
  var _excluded2 = ["children"];
  function ownKeys$2(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$2(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys$2(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$2(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  var NodeTransforms = {
    insertNodes(editor, nodes) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      Editor.withoutNormalizing(editor, () => {
        var {
          hanging = false,
          voids = false,
          mode = "lowest"
        } = options;
        var {
          at,
          match,
          select
        } = options;
        if (Node.isNode(nodes)) {
          nodes = [nodes];
        }
        if (nodes.length === 0) {
          return;
        }
        var [node] = nodes;
        if (!at) {
          if (editor.selection) {
            at = editor.selection;
          } else if (editor.children.length > 0) {
            at = Editor.end(editor, []);
          } else {
            at = [0];
          }
          select = true;
        }
        if (select == null) {
          select = false;
        }
        if (Range.isRange(at)) {
          if (!hanging) {
            at = Editor.unhangRange(editor, at);
          }
          if (Range.isCollapsed(at)) {
            at = at.anchor;
          } else {
            var [, end] = Range.edges(at);
            var pointRef = Editor.pointRef(editor, end);
            Transforms.delete(editor, {
              at
            });
            at = pointRef.unref();
          }
        }
        if (Point.isPoint(at)) {
          if (match == null) {
            if (Text.isText(node)) {
              match = (n2) => Text.isText(n2);
            } else if (editor.isInline(node)) {
              match = (n2) => Text.isText(n2) || Editor.isInline(editor, n2);
            } else {
              match = (n2) => Editor.isBlock(editor, n2);
            }
          }
          var [entry] = Editor.nodes(editor, {
            at: at.path,
            match,
            mode,
            voids
          });
          if (entry) {
            var [, _matchPath] = entry;
            var pathRef = Editor.pathRef(editor, _matchPath);
            var isAtEnd = Editor.isEnd(editor, at, _matchPath);
            Transforms.splitNodes(editor, {
              at,
              match,
              mode,
              voids
            });
            var path = pathRef.unref();
            at = isAtEnd ? Path.next(path) : path;
          } else {
            return;
          }
        }
        var parentPath = Path.parent(at);
        var index = at[at.length - 1];
        if (!voids && Editor.void(editor, {
          at: parentPath
        })) {
          return;
        }
        for (var _node of nodes) {
          var _path = parentPath.concat(index);
          index++;
          editor.apply({
            type: "insert_node",
            path: _path,
            node: _node
          });
          at = Path.next(at);
        }
        at = Path.previous(at);
        if (select) {
          var point = Editor.end(editor, at);
          if (point) {
            Transforms.select(editor, point);
          }
        }
      });
    },
    liftNodes(editor) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      Editor.withoutNormalizing(editor, () => {
        var {
          at = editor.selection,
          mode = "lowest",
          voids = false
        } = options;
        var {
          match
        } = options;
        if (match == null) {
          match = Path.isPath(at) ? matchPath(editor, at) : (n2) => Editor.isBlock(editor, n2);
        }
        if (!at) {
          return;
        }
        var matches = Editor.nodes(editor, {
          at,
          match,
          mode,
          voids
        });
        var pathRefs = Array.from(matches, (_ref) => {
          var [, p2] = _ref;
          return Editor.pathRef(editor, p2);
        });
        for (var pathRef of pathRefs) {
          var path = pathRef.unref();
          if (path.length < 2) {
            throw new Error("Cannot lift node at a path [".concat(path, "] because it has a depth of less than `2`."));
          }
          var parentNodeEntry = Editor.node(editor, Path.parent(path));
          var [parent, parentPath] = parentNodeEntry;
          var index = path[path.length - 1];
          var {
            length: length3
          } = parent.children;
          if (length3 === 1) {
            var toPath = Path.next(parentPath);
            Transforms.moveNodes(editor, {
              at: path,
              to: toPath,
              voids
            });
            Transforms.removeNodes(editor, {
              at: parentPath,
              voids
            });
          } else if (index === 0) {
            Transforms.moveNodes(editor, {
              at: path,
              to: parentPath,
              voids
            });
          } else if (index === length3 - 1) {
            var _toPath = Path.next(parentPath);
            Transforms.moveNodes(editor, {
              at: path,
              to: _toPath,
              voids
            });
          } else {
            var splitPath = Path.next(path);
            var _toPath2 = Path.next(parentPath);
            Transforms.splitNodes(editor, {
              at: splitPath,
              voids
            });
            Transforms.moveNodes(editor, {
              at: path,
              to: _toPath2,
              voids
            });
          }
        }
      });
    },
    mergeNodes(editor) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      Editor.withoutNormalizing(editor, () => {
        var {
          match,
          at = editor.selection
        } = options;
        var {
          hanging = false,
          voids = false,
          mode = "lowest"
        } = options;
        if (!at) {
          return;
        }
        if (match == null) {
          if (Path.isPath(at)) {
            var [parent] = Editor.parent(editor, at);
            match = (n2) => parent.children.includes(n2);
          } else {
            match = (n2) => Editor.isBlock(editor, n2);
          }
        }
        if (!hanging && Range.isRange(at)) {
          at = Editor.unhangRange(editor, at);
        }
        if (Range.isRange(at)) {
          if (Range.isCollapsed(at)) {
            at = at.anchor;
          } else {
            var [, end] = Range.edges(at);
            var pointRef = Editor.pointRef(editor, end);
            Transforms.delete(editor, {
              at
            });
            at = pointRef.unref();
            if (options.at == null) {
              Transforms.select(editor, at);
            }
          }
        }
        var [current] = Editor.nodes(editor, {
          at,
          match,
          voids,
          mode
        });
        var prev = Editor.previous(editor, {
          at,
          match,
          voids,
          mode
        });
        if (!current || !prev) {
          return;
        }
        var [node, path] = current;
        var [prevNode, prevPath] = prev;
        if (path.length === 0 || prevPath.length === 0) {
          return;
        }
        var newPath = Path.next(prevPath);
        var commonPath = Path.common(path, prevPath);
        var isPreviousSibling = Path.isSibling(path, prevPath);
        var levels = Array.from(Editor.levels(editor, {
          at: path
        }), (_ref2) => {
          var [n2] = _ref2;
          return n2;
        }).slice(commonPath.length).slice(0, -1);
        var emptyAncestor = Editor.above(editor, {
          at: path,
          mode: "highest",
          match: (n2) => levels.includes(n2) && hasSingleChildNest(editor, n2)
        });
        var emptyRef = emptyAncestor && Editor.pathRef(editor, emptyAncestor[1]);
        var properties;
        var position;
        if (Text.isText(node) && Text.isText(prevNode)) {
          var rest = _objectWithoutProperties(node, _excluded);
          position = prevNode.text.length;
          properties = rest;
        } else if (Element.isElement(node) && Element.isElement(prevNode)) {
          var rest = _objectWithoutProperties(node, _excluded2);
          position = prevNode.children.length;
          properties = rest;
        } else {
          throw new Error("Cannot merge the node at path [".concat(path, "] with the previous sibling because it is not the same kind: ").concat(Scrubber.stringify(node), " ").concat(Scrubber.stringify(prevNode)));
        }
        if (!isPreviousSibling) {
          Transforms.moveNodes(editor, {
            at: path,
            to: newPath,
            voids
          });
        }
        if (emptyRef) {
          Transforms.removeNodes(editor, {
            at: emptyRef.current,
            voids
          });
        }
        if (Element.isElement(prevNode) && Editor.isEmpty(editor, prevNode) || Text.isText(prevNode) && prevNode.text === "" && prevPath[prevPath.length - 1] !== 0) {
          Transforms.removeNodes(editor, {
            at: prevPath,
            voids
          });
        } else {
          editor.apply({
            type: "merge_node",
            path: newPath,
            position,
            properties
          });
        }
        if (emptyRef) {
          emptyRef.unref();
        }
      });
    },
    moveNodes(editor, options) {
      Editor.withoutNormalizing(editor, () => {
        var {
          to,
          at = editor.selection,
          mode = "lowest",
          voids = false
        } = options;
        var {
          match
        } = options;
        if (!at) {
          return;
        }
        if (match == null) {
          match = Path.isPath(at) ? matchPath(editor, at) : (n2) => Editor.isBlock(editor, n2);
        }
        var toRef = Editor.pathRef(editor, to);
        var targets = Editor.nodes(editor, {
          at,
          match,
          mode,
          voids
        });
        var pathRefs = Array.from(targets, (_ref3) => {
          var [, p2] = _ref3;
          return Editor.pathRef(editor, p2);
        });
        for (var pathRef of pathRefs) {
          var path = pathRef.unref();
          var newPath = toRef.current;
          if (path.length !== 0) {
            editor.apply({
              type: "move_node",
              path,
              newPath
            });
          }
          if (toRef.current && Path.isSibling(newPath, path) && Path.isAfter(newPath, path)) {
            toRef.current = Path.next(toRef.current);
          }
        }
        toRef.unref();
      });
    },
    removeNodes(editor) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      Editor.withoutNormalizing(editor, () => {
        var {
          hanging = false,
          voids = false,
          mode = "lowest"
        } = options;
        var {
          at = editor.selection,
          match
        } = options;
        if (!at) {
          return;
        }
        if (match == null) {
          match = Path.isPath(at) ? matchPath(editor, at) : (n2) => Editor.isBlock(editor, n2);
        }
        if (!hanging && Range.isRange(at)) {
          at = Editor.unhangRange(editor, at);
        }
        var depths = Editor.nodes(editor, {
          at,
          match,
          mode,
          voids
        });
        var pathRefs = Array.from(depths, (_ref4) => {
          var [, p2] = _ref4;
          return Editor.pathRef(editor, p2);
        });
        for (var pathRef of pathRefs) {
          var path = pathRef.unref();
          if (path) {
            var [node] = Editor.node(editor, path);
            editor.apply({
              type: "remove_node",
              path,
              node
            });
          }
        }
      });
    },
    setNodes(editor, props) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      Editor.withoutNormalizing(editor, () => {
        var {
          match,
          at = editor.selection,
          compare,
          merge
        } = options;
        var {
          hanging = false,
          mode = "lowest",
          split = false,
          voids = false
        } = options;
        if (!at) {
          return;
        }
        if (match == null) {
          match = Path.isPath(at) ? matchPath(editor, at) : (n2) => Editor.isBlock(editor, n2);
        }
        if (!hanging && Range.isRange(at)) {
          at = Editor.unhangRange(editor, at);
        }
        if (split && Range.isRange(at)) {
          if (Range.isCollapsed(at) && Editor.leaf(editor, at.anchor)[0].text.length > 0) {
            return;
          }
          var rangeRef = Editor.rangeRef(editor, at, {
            affinity: "inward"
          });
          var [start, end] = Range.edges(at);
          var splitMode = mode === "lowest" ? "lowest" : "highest";
          var endAtEndOfNode = Editor.isEnd(editor, end, end.path);
          Transforms.splitNodes(editor, {
            at: end,
            match,
            mode: splitMode,
            voids,
            always: !endAtEndOfNode
          });
          var startAtStartOfNode = Editor.isStart(editor, start, start.path);
          Transforms.splitNodes(editor, {
            at: start,
            match,
            mode: splitMode,
            voids,
            always: !startAtStartOfNode
          });
          at = rangeRef.unref();
          if (options.at == null) {
            Transforms.select(editor, at);
          }
        }
        if (!compare) {
          compare = (prop, nodeProp) => prop !== nodeProp;
        }
        for (var [node, path] of Editor.nodes(editor, {
          at,
          match,
          mode,
          voids
        })) {
          var properties = {};
          var newProperties = {};
          if (path.length === 0) {
            continue;
          }
          var hasChanges = false;
          for (var k2 in props) {
            if (k2 === "children" || k2 === "text") {
              continue;
            }
            if (compare(props[k2], node[k2])) {
              hasChanges = true;
              if (node.hasOwnProperty(k2))
                properties[k2] = node[k2];
              if (merge) {
                if (props[k2] != null)
                  newProperties[k2] = merge(node[k2], props[k2]);
              } else {
                if (props[k2] != null)
                  newProperties[k2] = props[k2];
              }
            }
          }
          if (hasChanges) {
            editor.apply({
              type: "set_node",
              path,
              properties,
              newProperties
            });
          }
        }
      });
    },
    splitNodes(editor) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      Editor.withoutNormalizing(editor, () => {
        var {
          mode = "lowest",
          voids = false
        } = options;
        var {
          match,
          at = editor.selection,
          height = 0,
          always = false
        } = options;
        if (match == null) {
          match = (n2) => Editor.isBlock(editor, n2);
        }
        if (Range.isRange(at)) {
          at = deleteRange(editor, at);
        }
        if (Path.isPath(at)) {
          var path = at;
          var point = Editor.point(editor, path);
          var [parent] = Editor.parent(editor, path);
          match = (n2) => n2 === parent;
          height = point.path.length - path.length + 1;
          at = point;
          always = true;
        }
        if (!at) {
          return;
        }
        var beforeRef = Editor.pointRef(editor, at, {
          affinity: "backward"
        });
        var afterRef;
        try {
          var [highest] = Editor.nodes(editor, {
            at,
            match,
            mode,
            voids
          });
          if (!highest) {
            return;
          }
          var voidMatch = Editor.void(editor, {
            at,
            mode: "highest"
          });
          var nudge = 0;
          if (!voids && voidMatch) {
            var [voidNode, voidPath] = voidMatch;
            if (Element.isElement(voidNode) && editor.isInline(voidNode)) {
              var after = Editor.after(editor, voidPath);
              if (!after) {
                var text2 = {
                  text: ""
                };
                var afterPath = Path.next(voidPath);
                Transforms.insertNodes(editor, text2, {
                  at: afterPath,
                  voids
                });
                after = Editor.point(editor, afterPath);
              }
              at = after;
              always = true;
            }
            var siblingHeight = at.path.length - voidPath.length;
            height = siblingHeight + 1;
            always = true;
          }
          afterRef = Editor.pointRef(editor, at);
          var depth = at.path.length - height;
          var [, highestPath] = highest;
          var lowestPath = at.path.slice(0, depth);
          var position = height === 0 ? at.offset : at.path[depth] + nudge;
          for (var [node, _path2] of Editor.levels(editor, {
            at: lowestPath,
            reverse: true,
            voids
          })) {
            var split = false;
            if (_path2.length < highestPath.length || _path2.length === 0 || !voids && Editor.isVoid(editor, node)) {
              break;
            }
            var _point = beforeRef.current;
            var isEnd = Editor.isEnd(editor, _point, _path2);
            if (always || !beforeRef || !Editor.isEdge(editor, _point, _path2)) {
              split = true;
              var properties = Node.extractProps(node);
              editor.apply({
                type: "split_node",
                path: _path2,
                position,
                properties
              });
            }
            position = _path2[_path2.length - 1] + (split || isEnd ? 1 : 0);
          }
          if (options.at == null) {
            var _point2 = afterRef.current || Editor.end(editor, []);
            Transforms.select(editor, _point2);
          }
        } finally {
          var _afterRef;
          beforeRef.unref();
          (_afterRef = afterRef) === null || _afterRef === void 0 ? void 0 : _afterRef.unref();
        }
      });
    },
    unsetNodes(editor, props) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (!Array.isArray(props)) {
        props = [props];
      }
      var obj = {};
      for (var key of props) {
        obj[key] = null;
      }
      Transforms.setNodes(editor, obj, options);
    },
    unwrapNodes(editor) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      Editor.withoutNormalizing(editor, () => {
        var {
          mode = "lowest",
          split = false,
          voids = false
        } = options;
        var {
          at = editor.selection,
          match
        } = options;
        if (!at) {
          return;
        }
        if (match == null) {
          match = Path.isPath(at) ? matchPath(editor, at) : (n2) => Editor.isBlock(editor, n2);
        }
        if (Path.isPath(at)) {
          at = Editor.range(editor, at);
        }
        var rangeRef = Range.isRange(at) ? Editor.rangeRef(editor, at) : null;
        var matches = Editor.nodes(editor, {
          at,
          match,
          mode,
          voids
        });
        var pathRefs = Array.from(matches, (_ref5) => {
          var [, p2] = _ref5;
          return Editor.pathRef(editor, p2);
        }).reverse();
        var _loop = function _loop2(pathRef2) {
          var path = pathRef2.unref();
          var [node] = Editor.node(editor, path);
          var range = Editor.range(editor, path);
          if (split && rangeRef) {
            range = Range.intersection(rangeRef.current, range);
          }
          Transforms.liftNodes(editor, {
            at: range,
            match: (n2) => Element.isAncestor(node) && node.children.includes(n2),
            voids
          });
        };
        for (var pathRef of pathRefs) {
          _loop(pathRef);
        }
        if (rangeRef) {
          rangeRef.unref();
        }
      });
    },
    wrapNodes(editor, element2) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      Editor.withoutNormalizing(editor, () => {
        var {
          mode = "lowest",
          split = false,
          voids = false
        } = options;
        var {
          match,
          at = editor.selection
        } = options;
        if (!at) {
          return;
        }
        if (match == null) {
          if (Path.isPath(at)) {
            match = matchPath(editor, at);
          } else if (editor.isInline(element2)) {
            match = (n2) => Editor.isInline(editor, n2) || Text.isText(n2);
          } else {
            match = (n2) => Editor.isBlock(editor, n2);
          }
        }
        if (split && Range.isRange(at)) {
          var [start, end] = Range.edges(at);
          var rangeRef = Editor.rangeRef(editor, at, {
            affinity: "inward"
          });
          Transforms.splitNodes(editor, {
            at: end,
            match,
            voids
          });
          Transforms.splitNodes(editor, {
            at: start,
            match,
            voids
          });
          at = rangeRef.unref();
          if (options.at == null) {
            Transforms.select(editor, at);
          }
        }
        var roots = Array.from(Editor.nodes(editor, {
          at,
          match: editor.isInline(element2) ? (n2) => Editor.isBlock(editor, n2) : (n2) => Editor.isEditor(n2),
          mode: "lowest",
          voids
        }));
        for (var [, rootPath] of roots) {
          var a2 = Range.isRange(at) ? Range.intersection(at, Editor.range(editor, rootPath)) : at;
          if (!a2) {
            continue;
          }
          var matches = Array.from(Editor.nodes(editor, {
            at: a2,
            match,
            mode,
            voids
          }));
          if (matches.length > 0) {
            var _ret = function() {
              var [first] = matches;
              var last2 = matches[matches.length - 1];
              var [, firstPath] = first;
              var [, lastPath] = last2;
              if (firstPath.length === 0 && lastPath.length === 0) {
                return "continue";
              }
              var commonPath = Path.equals(firstPath, lastPath) ? Path.parent(firstPath) : Path.common(firstPath, lastPath);
              var range = Editor.range(editor, firstPath, lastPath);
              var commonNodeEntry = Editor.node(editor, commonPath);
              var [commonNode] = commonNodeEntry;
              var depth = commonPath.length + 1;
              var wrapperPath = Path.next(lastPath.slice(0, depth));
              var wrapper = _objectSpread$2(_objectSpread$2({}, element2), {}, {
                children: []
              });
              Transforms.insertNodes(editor, wrapper, {
                at: wrapperPath,
                voids
              });
              Transforms.moveNodes(editor, {
                at: range,
                match: (n2) => Element.isAncestor(commonNode) && commonNode.children.includes(n2),
                to: wrapperPath.concat(0),
                voids
              });
            }();
            if (_ret === "continue")
              continue;
          }
        }
      });
    }
  };
  var hasSingleChildNest = (editor, node) => {
    if (Element.isElement(node)) {
      var element2 = node;
      if (Editor.isVoid(editor, node)) {
        return true;
      } else if (element2.children.length === 1) {
        return hasSingleChildNest(editor, element2.children[0]);
      } else {
        return false;
      }
    } else if (Editor.isEditor(node)) {
      return false;
    } else {
      return true;
    }
  };
  var deleteRange = (editor, range) => {
    if (Range.isCollapsed(range)) {
      return range.anchor;
    } else {
      var [, end] = Range.edges(range);
      var pointRef = Editor.pointRef(editor, end);
      Transforms.delete(editor, {
        at: range
      });
      return pointRef.unref();
    }
  };
  var matchPath = (editor, path) => {
    var [node] = Editor.node(editor, path);
    return (n2) => n2 === node;
  };
  function ownKeys$1(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$1(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys$1(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$1(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  var SelectionTransforms = {
    collapse(editor) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var {
        edge = "anchor"
      } = options;
      var {
        selection
      } = editor;
      if (!selection) {
        return;
      } else if (edge === "anchor") {
        Transforms.select(editor, selection.anchor);
      } else if (edge === "focus") {
        Transforms.select(editor, selection.focus);
      } else if (edge === "start") {
        var [start] = Range.edges(selection);
        Transforms.select(editor, start);
      } else if (edge === "end") {
        var [, end] = Range.edges(selection);
        Transforms.select(editor, end);
      }
    },
    deselect(editor) {
      var {
        selection
      } = editor;
      if (selection) {
        editor.apply({
          type: "set_selection",
          properties: selection,
          newProperties: null
        });
      }
    },
    move(editor) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var {
        selection
      } = editor;
      var {
        distance = 1,
        unit = "character",
        reverse = false
      } = options;
      var {
        edge = null
      } = options;
      if (!selection) {
        return;
      }
      if (edge === "start") {
        edge = Range.isBackward(selection) ? "focus" : "anchor";
      }
      if (edge === "end") {
        edge = Range.isBackward(selection) ? "anchor" : "focus";
      }
      var {
        anchor,
        focus
      } = selection;
      var opts = {
        distance,
        unit
      };
      var props = {};
      if (edge == null || edge === "anchor") {
        var point = reverse ? Editor.before(editor, anchor, opts) : Editor.after(editor, anchor, opts);
        if (point) {
          props.anchor = point;
        }
      }
      if (edge == null || edge === "focus") {
        var _point = reverse ? Editor.before(editor, focus, opts) : Editor.after(editor, focus, opts);
        if (_point) {
          props.focus = _point;
        }
      }
      Transforms.setSelection(editor, props);
    },
    select(editor, target) {
      var {
        selection
      } = editor;
      target = Editor.range(editor, target);
      if (selection) {
        Transforms.setSelection(editor, target);
        return;
      }
      if (!Range.isRange(target)) {
        throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(Scrubber.stringify(target)));
      }
      editor.apply({
        type: "set_selection",
        properties: selection,
        newProperties: target
      });
    },
    setPoint(editor, props) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var {
        selection
      } = editor;
      var {
        edge = "both"
      } = options;
      if (!selection) {
        return;
      }
      if (edge === "start") {
        edge = Range.isBackward(selection) ? "focus" : "anchor";
      }
      if (edge === "end") {
        edge = Range.isBackward(selection) ? "anchor" : "focus";
      }
      var {
        anchor,
        focus
      } = selection;
      var point = edge === "anchor" ? anchor : focus;
      Transforms.setSelection(editor, {
        [edge === "anchor" ? "anchor" : "focus"]: _objectSpread$1(_objectSpread$1({}, point), props)
      });
    },
    setSelection(editor, props) {
      var {
        selection
      } = editor;
      var oldProps = {};
      var newProps = {};
      if (!selection) {
        return;
      }
      for (var k2 in props) {
        if (k2 === "anchor" && props.anchor != null && !Point.equals(props.anchor, selection.anchor) || k2 === "focus" && props.focus != null && !Point.equals(props.focus, selection.focus) || k2 !== "anchor" && k2 !== "focus" && props[k2] !== selection[k2]) {
          oldProps[k2] = selection[k2];
          newProps[k2] = props[k2];
        }
      }
      if (Object.keys(oldProps).length > 0) {
        editor.apply({
          type: "set_selection",
          properties: oldProps,
          newProperties: newProps
        });
      }
    }
  };
  var TextTransforms = {
    delete(editor) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      Editor.withoutNormalizing(editor, () => {
        var {
          reverse = false,
          unit = "character",
          distance = 1,
          voids = false
        } = options;
        var {
          at = editor.selection,
          hanging = false
        } = options;
        if (!at) {
          return;
        }
        var isCollapsed = false;
        if (Range.isRange(at) && Range.isCollapsed(at)) {
          isCollapsed = true;
          at = at.anchor;
        }
        if (Point.isPoint(at)) {
          var furthestVoid = Editor.void(editor, {
            at,
            mode: "highest"
          });
          if (!voids && furthestVoid) {
            var [, voidPath] = furthestVoid;
            at = voidPath;
          } else {
            var opts = {
              unit,
              distance
            };
            var target = reverse ? Editor.before(editor, at, opts) || Editor.start(editor, []) : Editor.after(editor, at, opts) || Editor.end(editor, []);
            at = {
              anchor: at,
              focus: target
            };
            hanging = true;
          }
        }
        if (Path.isPath(at)) {
          Transforms.removeNodes(editor, {
            at,
            voids
          });
          return;
        }
        if (Range.isCollapsed(at)) {
          return;
        }
        if (!hanging) {
          var [, _end] = Range.edges(at);
          var endOfDoc = Editor.end(editor, []);
          if (!Point.equals(_end, endOfDoc)) {
            at = Editor.unhangRange(editor, at, {
              voids
            });
          }
        }
        var [start, end] = Range.edges(at);
        var startBlock = Editor.above(editor, {
          match: (n2) => Editor.isBlock(editor, n2),
          at: start,
          voids
        });
        var endBlock = Editor.above(editor, {
          match: (n2) => Editor.isBlock(editor, n2),
          at: end,
          voids
        });
        var isAcrossBlocks = startBlock && endBlock && !Path.equals(startBlock[1], endBlock[1]);
        var isSingleText = Path.equals(start.path, end.path);
        var startVoid = voids ? null : Editor.void(editor, {
          at: start,
          mode: "highest"
        });
        var endVoid = voids ? null : Editor.void(editor, {
          at: end,
          mode: "highest"
        });
        if (startVoid) {
          var before = Editor.before(editor, start);
          if (before && startBlock && Path.isAncestor(startBlock[1], before.path)) {
            start = before;
          }
        }
        if (endVoid) {
          var after = Editor.after(editor, end);
          if (after && endBlock && Path.isAncestor(endBlock[1], after.path)) {
            end = after;
          }
        }
        var matches = [];
        var lastPath;
        for (var entry of Editor.nodes(editor, {
          at,
          voids
        })) {
          var [node, path] = entry;
          if (lastPath && Path.compare(path, lastPath) === 0) {
            continue;
          }
          if (!voids && Editor.isVoid(editor, node) || !Path.isCommon(path, start.path) && !Path.isCommon(path, end.path)) {
            matches.push(entry);
            lastPath = path;
          }
        }
        var pathRefs = Array.from(matches, (_ref) => {
          var [, p2] = _ref;
          return Editor.pathRef(editor, p2);
        });
        var startRef = Editor.pointRef(editor, start);
        var endRef = Editor.pointRef(editor, end);
        var removedText = "";
        if (!isSingleText && !startVoid) {
          var _point = startRef.current;
          var [_node] = Editor.leaf(editor, _point);
          var {
            path: _path
          } = _point;
          var {
            offset
          } = start;
          var text2 = _node.text.slice(offset);
          if (text2.length > 0) {
            editor.apply({
              type: "remove_text",
              path: _path,
              offset,
              text: text2
            });
            removedText = text2;
          }
        }
        for (var pathRef of pathRefs) {
          var _path2 = pathRef.unref();
          Transforms.removeNodes(editor, {
            at: _path2,
            voids
          });
        }
        if (!endVoid) {
          var _point2 = endRef.current;
          var [_node2] = Editor.leaf(editor, _point2);
          var {
            path: _path3
          } = _point2;
          var _offset = isSingleText ? start.offset : 0;
          var _text = _node2.text.slice(_offset, end.offset);
          if (_text.length > 0) {
            editor.apply({
              type: "remove_text",
              path: _path3,
              offset: _offset,
              text: _text
            });
            removedText = _text;
          }
        }
        if (!isSingleText && isAcrossBlocks && endRef.current && startRef.current) {
          Transforms.mergeNodes(editor, {
            at: endRef.current,
            hanging: true,
            voids
          });
        }
        if (isCollapsed && reverse && unit === "character" && removedText.length > 1 && removedText.match(/[\u0E00-\u0E7F]+/)) {
          Transforms.insertText(editor, removedText.slice(0, removedText.length - distance));
        }
        var startUnref = startRef.unref();
        var endUnref = endRef.unref();
        var point = reverse ? startUnref || endUnref : endUnref || startUnref;
        if (options.at == null && point) {
          Transforms.select(editor, point);
        }
      });
    },
    insertFragment(editor, fragment) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      Editor.withoutNormalizing(editor, () => {
        var {
          hanging = false,
          voids = false
        } = options;
        var {
          at = editor.selection
        } = options;
        if (!fragment.length) {
          return;
        }
        if (!at) {
          return;
        } else if (Range.isRange(at)) {
          if (!hanging) {
            at = Editor.unhangRange(editor, at);
          }
          if (Range.isCollapsed(at)) {
            at = at.anchor;
          } else {
            var [, end] = Range.edges(at);
            if (!voids && Editor.void(editor, {
              at: end
            })) {
              return;
            }
            var pointRef = Editor.pointRef(editor, end);
            Transforms.delete(editor, {
              at
            });
            at = pointRef.unref();
          }
        } else if (Path.isPath(at)) {
          at = Editor.start(editor, at);
        }
        if (!voids && Editor.void(editor, {
          at
        })) {
          return;
        }
        var inlineElementMatch = Editor.above(editor, {
          at,
          match: (n2) => Editor.isInline(editor, n2),
          mode: "highest",
          voids
        });
        if (inlineElementMatch) {
          var [, _inlinePath] = inlineElementMatch;
          if (Editor.isEnd(editor, at, _inlinePath)) {
            var after = Editor.after(editor, _inlinePath);
            at = after;
          } else if (Editor.isStart(editor, at, _inlinePath)) {
            var before = Editor.before(editor, _inlinePath);
            at = before;
          }
        }
        var blockMatch = Editor.above(editor, {
          match: (n2) => Editor.isBlock(editor, n2),
          at,
          voids
        });
        var [, blockPath] = blockMatch;
        var isBlockStart = Editor.isStart(editor, at, blockPath);
        var isBlockEnd = Editor.isEnd(editor, at, blockPath);
        var isBlockEmpty = isBlockStart && isBlockEnd;
        var mergeStart = !isBlockStart || isBlockStart && isBlockEnd;
        var mergeEnd = !isBlockEnd;
        var [, firstPath] = Node.first({
          children: fragment
        }, []);
        var [, lastPath] = Node.last({
          children: fragment
        }, []);
        var matches = [];
        var matcher = (_ref2) => {
          var [n2, p2] = _ref2;
          var isRoot = p2.length === 0;
          if (isRoot) {
            return false;
          }
          if (isBlockEmpty) {
            return true;
          }
          if (mergeStart && Path.isAncestor(p2, firstPath) && Element.isElement(n2) && !editor.isVoid(n2) && !editor.isInline(n2)) {
            return false;
          }
          if (mergeEnd && Path.isAncestor(p2, lastPath) && Element.isElement(n2) && !editor.isVoid(n2) && !editor.isInline(n2)) {
            return false;
          }
          return true;
        };
        for (var entry of Node.nodes({
          children: fragment
        }, {
          pass: matcher
        })) {
          if (matcher(entry)) {
            matches.push(entry);
          }
        }
        var starts = [];
        var middles = [];
        var ends = [];
        var starting = true;
        var hasBlocks = false;
        for (var [node] of matches) {
          if (Element.isElement(node) && !editor.isInline(node)) {
            starting = false;
            hasBlocks = true;
            middles.push(node);
          } else if (starting) {
            starts.push(node);
          } else {
            ends.push(node);
          }
        }
        var [inlineMatch] = Editor.nodes(editor, {
          at,
          match: (n2) => Text.isText(n2) || Editor.isInline(editor, n2),
          mode: "highest",
          voids
        });
        var [, inlinePath] = inlineMatch;
        var isInlineStart = Editor.isStart(editor, at, inlinePath);
        var isInlineEnd = Editor.isEnd(editor, at, inlinePath);
        var middleRef = Editor.pathRef(editor, isBlockEnd && !ends.length ? Path.next(blockPath) : blockPath);
        var endRef = Editor.pathRef(editor, isInlineEnd ? Path.next(inlinePath) : inlinePath);
        Transforms.splitNodes(editor, {
          at,
          match: (n2) => hasBlocks ? Editor.isBlock(editor, n2) : Text.isText(n2) || Editor.isInline(editor, n2),
          mode: hasBlocks ? "lowest" : "highest",
          always: hasBlocks && (!isBlockStart || starts.length > 0) && (!isBlockEnd || ends.length > 0),
          voids
        });
        var startRef = Editor.pathRef(editor, !isInlineStart || isInlineStart && isInlineEnd ? Path.next(inlinePath) : inlinePath);
        Transforms.insertNodes(editor, starts, {
          at: startRef.current,
          match: (n2) => Text.isText(n2) || Editor.isInline(editor, n2),
          mode: "highest",
          voids
        });
        if (isBlockEmpty && !starts.length && middles.length && !ends.length) {
          Transforms.delete(editor, {
            at: blockPath,
            voids
          });
        }
        Transforms.insertNodes(editor, middles, {
          at: middleRef.current,
          match: (n2) => Editor.isBlock(editor, n2),
          mode: "lowest",
          voids
        });
        Transforms.insertNodes(editor, ends, {
          at: endRef.current,
          match: (n2) => Text.isText(n2) || Editor.isInline(editor, n2),
          mode: "highest",
          voids
        });
        if (!options.at) {
          var path;
          if (ends.length > 0 && endRef.current) {
            path = Path.previous(endRef.current);
          } else if (middles.length > 0 && middleRef.current) {
            path = Path.previous(middleRef.current);
          } else if (startRef.current) {
            path = Path.previous(startRef.current);
          }
          if (path) {
            var _end2 = Editor.end(editor, path);
            Transforms.select(editor, _end2);
          }
        }
        startRef.unref();
        middleRef.unref();
        endRef.unref();
      });
    },
    insertText(editor, text2) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      Editor.withoutNormalizing(editor, () => {
        var {
          voids = false
        } = options;
        var {
          at = editor.selection
        } = options;
        if (!at) {
          return;
        }
        if (Path.isPath(at)) {
          at = Editor.range(editor, at);
        }
        if (Range.isRange(at)) {
          if (Range.isCollapsed(at)) {
            at = at.anchor;
          } else {
            var end = Range.end(at);
            if (!voids && Editor.void(editor, {
              at: end
            })) {
              return;
            }
            var start = Range.start(at);
            var startRef = Editor.pointRef(editor, start);
            var endRef = Editor.pointRef(editor, end);
            Transforms.delete(editor, {
              at,
              voids
            });
            var startPoint = startRef.unref();
            var endPoint = endRef.unref();
            at = startPoint || endPoint;
            Transforms.setSelection(editor, {
              anchor: at,
              focus: at
            });
          }
        }
        if (!voids && Editor.void(editor, {
          at
        })) {
          return;
        }
        var {
          path,
          offset
        } = at;
        if (text2.length > 0)
          editor.apply({
            type: "insert_text",
            path,
            offset,
            text: text2
          });
      });
    }
  };
  function ownKeys(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  var Transforms = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, GeneralTransforms), NodeTransforms), SelectionTransforms), TextTransforms);

  // ../../node_modules/lib0/map.js
  var create = () => /* @__PURE__ */ new Map();
  var copy = (m) => {
    const r2 = create();
    m.forEach((v2, k2) => {
      r2.set(k2, v2);
    });
    return r2;
  };
  var setIfUndefined = (map2, key, createT) => {
    let set = map2.get(key);
    if (set === void 0) {
      map2.set(key, set = createT());
    }
    return set;
  };
  var map = (m, f2) => {
    const res = [];
    for (const [key, value] of m) {
      res.push(f2(value, key));
    }
    return res;
  };
  var any = (m, f2) => {
    for (const [key, value] of m) {
      if (f2(value, key)) {
        return true;
      }
    }
    return false;
  };

  // ../../node_modules/lib0/set.js
  var create2 = () => /* @__PURE__ */ new Set();

  // ../../node_modules/lib0/array.js
  var last = (arr) => arr[arr.length - 1];
  var appendTo = (dest, src) => {
    for (let i2 = 0; i2 < src.length; i2++) {
      dest.push(src[i2]);
    }
  };
  var from = Array.from;
  var isArray = Array.isArray;

  // ../../node_modules/lib0/observable.js
  var Observable = class {
    constructor() {
      this._observers = create();
    }
    on(name, f2) {
      setIfUndefined(this._observers, name, create2).add(f2);
    }
    once(name, f2) {
      const _f = (...args2) => {
        this.off(name, _f);
        f2(...args2);
      };
      this.on(name, _f);
    }
    off(name, f2) {
      const observers = this._observers.get(name);
      if (observers !== void 0) {
        observers.delete(f2);
        if (observers.size === 0) {
          this._observers.delete(name);
        }
      }
    }
    emit(name, args2) {
      return from((this._observers.get(name) || create()).values()).forEach((f2) => f2(...args2));
    }
    destroy() {
      this._observers = create();
    }
  };

  // ../../node_modules/lib0/math.js
  var floor = Math.floor;
  var abs = Math.abs;
  var min = (a2, b2) => a2 < b2 ? a2 : b2;
  var max = (a2, b2) => a2 > b2 ? a2 : b2;
  var isNaN2 = Number.isNaN;
  var isNegativeZero = (n2) => n2 !== 0 ? n2 < 0 : 1 / n2 < 0;

  // ../../node_modules/lib0/string.js
  var fromCharCode = String.fromCharCode;
  var fromCodePoint = String.fromCodePoint;
  var toLowerCase = (s2) => s2.toLowerCase();
  var trimLeftRegex = /^\s*/g;
  var trimLeft = (s2) => s2.replace(trimLeftRegex, "");
  var fromCamelCaseRegex = /([A-Z])/g;
  var fromCamelCase = (s2, separator) => trimLeft(s2.replace(fromCamelCaseRegex, (match) => `${separator}${toLowerCase(match)}`));
  var utf8TextEncoder = typeof TextEncoder !== "undefined" ? new TextEncoder() : null;
  var utf8TextDecoder = typeof TextDecoder === "undefined" ? null : new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
  if (utf8TextDecoder && utf8TextDecoder.decode(new Uint8Array()).length === 1) {
    utf8TextDecoder = null;
  }

  // ../../node_modules/lib0/conditions.js
  var undefinedToNull = (v2) => v2 === void 0 ? null : v2;

  // ../../node_modules/lib0/storage.js
  var VarStoragePolyfill = class {
    constructor() {
      this.map = /* @__PURE__ */ new Map();
    }
    setItem(key, newValue) {
      this.map.set(key, newValue);
    }
    getItem(key) {
      return this.map.get(key);
    }
  };
  var _localStorage = new VarStoragePolyfill();
  var usePolyfill = true;
  try {
    if (typeof localStorage !== "undefined") {
      _localStorage = localStorage;
      usePolyfill = false;
    }
  } catch (e) {
  }
  var varStorage = _localStorage;

  // ../../node_modules/lib0/environment.js
  var isNode = typeof process !== "undefined" && process.release && /node|io\.js/.test(process.release.name);
  var isMac = typeof navigator !== "undefined" ? /Mac/.test(navigator.platform) : false;
  var params;
  var args = [];
  var computeParams = () => {
    if (params === void 0) {
      if (isNode) {
        params = create();
        const pargs = process.argv;
        let currParamName = null;
        for (let i2 = 0; i2 < pargs.length; i2++) {
          const parg = pargs[i2];
          if (parg[0] === "-") {
            if (currParamName !== null) {
              params.set(currParamName, "");
            }
            currParamName = parg;
          } else {
            if (currParamName !== null) {
              params.set(currParamName, parg);
              currParamName = null;
            } else {
              args.push(parg);
            }
          }
        }
        if (currParamName !== null) {
          params.set(currParamName, "");
        }
      } else if (typeof location === "object") {
        params = create();
        (location.search || "?").slice(1).split("&").forEach((kv) => {
          if (kv.length !== 0) {
            const [key, value] = kv.split("=");
            params.set(`--${fromCamelCase(key, "-")}`, value);
            params.set(`-${fromCamelCase(key, "-")}`, value);
          }
        });
      } else {
        params = create();
      }
    }
    return params;
  };
  var hasParam = (name) => computeParams().has(name);
  var getVariable = (name) => isNode ? undefinedToNull(process.env[name.toUpperCase()]) : undefinedToNull(varStorage.getItem(name));
  var hasConf = (name) => hasParam("--" + name) || getVariable(name) !== null;
  var production = hasConf("production");

  // ../../node_modules/lib0/binary.js
  var BIT1 = 1;
  var BIT2 = 2;
  var BIT3 = 4;
  var BIT4 = 8;
  var BIT6 = 32;
  var BIT7 = 64;
  var BIT8 = 128;
  var BIT18 = 1 << 17;
  var BIT19 = 1 << 18;
  var BIT20 = 1 << 19;
  var BIT21 = 1 << 20;
  var BIT22 = 1 << 21;
  var BIT23 = 1 << 22;
  var BIT24 = 1 << 23;
  var BIT25 = 1 << 24;
  var BIT26 = 1 << 25;
  var BIT27 = 1 << 26;
  var BIT28 = 1 << 27;
  var BIT29 = 1 << 28;
  var BIT30 = 1 << 29;
  var BIT31 = 1 << 30;
  var BIT32 = 1 << 31;
  var BITS5 = 31;
  var BITS6 = 63;
  var BITS7 = 127;
  var BITS17 = BIT18 - 1;
  var BITS18 = BIT19 - 1;
  var BITS19 = BIT20 - 1;
  var BITS20 = BIT21 - 1;
  var BITS21 = BIT22 - 1;
  var BITS22 = BIT23 - 1;
  var BITS23 = BIT24 - 1;
  var BITS24 = BIT25 - 1;
  var BITS25 = BIT26 - 1;
  var BITS26 = BIT27 - 1;
  var BITS27 = BIT28 - 1;
  var BITS28 = BIT29 - 1;
  var BITS29 = BIT30 - 1;
  var BITS30 = BIT31 - 1;
  var BITS31 = 2147483647;

  // ../../node_modules/lib0/decoding.js
  var Decoder = class {
    constructor(uint8Array) {
      this.arr = uint8Array;
      this.pos = 0;
    }
  };
  var createDecoder = (uint8Array) => new Decoder(uint8Array);
  var hasContent = (decoder) => decoder.pos !== decoder.arr.length;
  var readUint8 = (decoder) => decoder.arr[decoder.pos++];
  var readVarUint = (decoder) => {
    let num = 0;
    let len = 0;
    while (true) {
      const r2 = decoder.arr[decoder.pos++];
      num = num | (r2 & BITS7) << len;
      len += 7;
      if (r2 < BIT8) {
        return num >>> 0;
      }
      if (len > 35) {
        throw new Error("Integer out of range!");
      }
    }
  };
  var readVarInt = (decoder) => {
    let r2 = decoder.arr[decoder.pos++];
    let num = r2 & BITS6;
    let len = 6;
    const sign = (r2 & BIT7) > 0 ? -1 : 1;
    if ((r2 & BIT8) === 0) {
      return sign * num;
    }
    while (true) {
      r2 = decoder.arr[decoder.pos++];
      num = num | (r2 & BITS7) << len;
      len += 7;
      if (r2 < BIT8) {
        return sign * (num >>> 0);
      }
      if (len > 41) {
        throw new Error("Integer out of range!");
      }
    }
  };
  var readVarString = (decoder) => {
    let remainingLen = readVarUint(decoder);
    if (remainingLen === 0) {
      return "";
    } else {
      let encodedString = String.fromCodePoint(readUint8(decoder));
      if (--remainingLen < 100) {
        while (remainingLen--) {
          encodedString += String.fromCodePoint(readUint8(decoder));
        }
      } else {
        while (remainingLen > 0) {
          const nextLen = remainingLen < 1e4 ? remainingLen : 1e4;
          const bytes = decoder.arr.subarray(decoder.pos, decoder.pos + nextLen);
          decoder.pos += nextLen;
          encodedString += String.fromCodePoint.apply(null, bytes);
          remainingLen -= nextLen;
        }
      }
      return decodeURIComponent(escape(encodedString));
    }
  };

  // ../../node_modules/lib0/buffer.js
  var createUint8ArrayViewFromArrayBuffer = (buffer, byteOffset, length3) => new Uint8Array(buffer, byteOffset, length3);

  // ../../node_modules/lib0/number.js
  var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
  var MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
  var LOWEST_INT32 = 1 << 31;
  var isInteger = Number.isInteger || ((num) => typeof num === "number" && isFinite(num) && floor(num) === num);
  var isNaN3 = Number.isNaN;
  var parseInt2 = Number.parseInt;

  // ../../node_modules/lib0/encoding.js
  var Encoder = class {
    constructor() {
      this.cpos = 0;
      this.cbuf = new Uint8Array(100);
      this.bufs = [];
    }
  };
  var createEncoder = () => new Encoder();
  var length = (encoder) => {
    let len = encoder.cpos;
    for (let i2 = 0; i2 < encoder.bufs.length; i2++) {
      len += encoder.bufs[i2].length;
    }
    return len;
  };
  var toUint8Array = (encoder) => {
    const uint8arr = new Uint8Array(length(encoder));
    let curPos = 0;
    for (let i2 = 0; i2 < encoder.bufs.length; i2++) {
      const d2 = encoder.bufs[i2];
      uint8arr.set(d2, curPos);
      curPos += d2.length;
    }
    uint8arr.set(createUint8ArrayViewFromArrayBuffer(encoder.cbuf.buffer, 0, encoder.cpos), curPos);
    return uint8arr;
  };
  var verifyLen = (encoder, len) => {
    const bufferLen = encoder.cbuf.length;
    if (bufferLen - encoder.cpos < len) {
      encoder.bufs.push(createUint8ArrayViewFromArrayBuffer(encoder.cbuf.buffer, 0, encoder.cpos));
      encoder.cbuf = new Uint8Array(max(bufferLen, len) * 2);
      encoder.cpos = 0;
    }
  };
  var write = (encoder, num) => {
    const bufferLen = encoder.cbuf.length;
    if (encoder.cpos === bufferLen) {
      encoder.bufs.push(encoder.cbuf);
      encoder.cbuf = new Uint8Array(bufferLen * 2);
      encoder.cpos = 0;
    }
    encoder.cbuf[encoder.cpos++] = num;
  };
  var writeUint8 = write;
  var writeVarUint = (encoder, num) => {
    while (num > BITS7) {
      write(encoder, BIT8 | BITS7 & num);
      num >>>= 7;
    }
    write(encoder, BITS7 & num);
  };
  var writeVarInt = (encoder, num) => {
    const isNegative = isNegativeZero(num);
    if (isNegative) {
      num = -num;
    }
    write(encoder, (num > BITS6 ? BIT8 : 0) | (isNegative ? BIT7 : 0) | BITS6 & num);
    num >>>= 6;
    while (num > 0) {
      write(encoder, (num > BITS7 ? BIT8 : 0) | BITS7 & num);
      num >>>= 7;
    }
  };
  var writeVarString = (encoder, str) => {
    const encodedString = unescape(encodeURIComponent(str));
    const len = encodedString.length;
    writeVarUint(encoder, len);
    for (let i2 = 0; i2 < len; i2++) {
      write(encoder, encodedString.codePointAt(i2));
    }
  };
  var writeUint8Array = (encoder, uint8Array) => {
    const bufferLen = encoder.cbuf.length;
    const cpos = encoder.cpos;
    const leftCopyLen = min(bufferLen - cpos, uint8Array.length);
    const rightCopyLen = uint8Array.length - leftCopyLen;
    encoder.cbuf.set(uint8Array.subarray(0, leftCopyLen), cpos);
    encoder.cpos += leftCopyLen;
    if (rightCopyLen > 0) {
      encoder.bufs.push(encoder.cbuf);
      encoder.cbuf = new Uint8Array(max(bufferLen * 2, rightCopyLen));
      encoder.cbuf.set(uint8Array.subarray(leftCopyLen));
      encoder.cpos = rightCopyLen;
    }
  };
  var writeVarUint8Array = (encoder, uint8Array) => {
    writeVarUint(encoder, uint8Array.byteLength);
    writeUint8Array(encoder, uint8Array);
  };
  var writeOnDataView = (encoder, len) => {
    verifyLen(encoder, len);
    const dview = new DataView(encoder.cbuf.buffer, encoder.cpos, len);
    encoder.cpos += len;
    return dview;
  };
  var writeFloat32 = (encoder, num) => writeOnDataView(encoder, 4).setFloat32(0, num, false);
  var writeFloat64 = (encoder, num) => writeOnDataView(encoder, 8).setFloat64(0, num, false);
  var writeBigInt64 = (encoder, num) => writeOnDataView(encoder, 8).setBigInt64(0, num, false);
  var floatTestBed = new DataView(new ArrayBuffer(4));
  var isFloat32 = (num) => {
    floatTestBed.setFloat32(0, num);
    return floatTestBed.getFloat32(0) === num;
  };
  var writeAny = (encoder, data) => {
    switch (typeof data) {
      case "string":
        write(encoder, 119);
        writeVarString(encoder, data);
        break;
      case "number":
        if (isInteger(data) && data <= BITS31) {
          write(encoder, 125);
          writeVarInt(encoder, data);
        } else if (isFloat32(data)) {
          write(encoder, 124);
          writeFloat32(encoder, data);
        } else {
          write(encoder, 123);
          writeFloat64(encoder, data);
        }
        break;
      case "bigint":
        write(encoder, 122);
        writeBigInt64(encoder, data);
        break;
      case "object":
        if (data === null) {
          write(encoder, 126);
        } else if (data instanceof Array) {
          write(encoder, 117);
          writeVarUint(encoder, data.length);
          for (let i2 = 0; i2 < data.length; i2++) {
            writeAny(encoder, data[i2]);
          }
        } else if (data instanceof Uint8Array) {
          write(encoder, 116);
          writeVarUint8Array(encoder, data);
        } else {
          write(encoder, 118);
          const keys2 = Object.keys(data);
          writeVarUint(encoder, keys2.length);
          for (let i2 = 0; i2 < keys2.length; i2++) {
            const key = keys2[i2];
            writeVarString(encoder, key);
            writeAny(encoder, data[key]);
          }
        }
        break;
      case "boolean":
        write(encoder, data ? 120 : 121);
        break;
      default:
        write(encoder, 127);
    }
  };
  var RleEncoder = class extends Encoder {
    constructor(writer) {
      super();
      this.w = writer;
      this.s = null;
      this.count = 0;
    }
    write(v2) {
      if (this.s === v2) {
        this.count++;
      } else {
        if (this.count > 0) {
          writeVarUint(this, this.count - 1);
        }
        this.count = 1;
        this.w(this, v2);
        this.s = v2;
      }
    }
  };
  var flushUintOptRleEncoder = (encoder) => {
    if (encoder.count > 0) {
      writeVarInt(encoder.encoder, encoder.count === 1 ? encoder.s : -encoder.s);
      if (encoder.count > 1) {
        writeVarUint(encoder.encoder, encoder.count - 2);
      }
    }
  };
  var UintOptRleEncoder = class {
    constructor() {
      this.encoder = new Encoder();
      this.s = 0;
      this.count = 0;
    }
    write(v2) {
      if (this.s === v2) {
        this.count++;
      } else {
        flushUintOptRleEncoder(this);
        this.count = 1;
        this.s = v2;
      }
    }
    toUint8Array() {
      flushUintOptRleEncoder(this);
      return toUint8Array(this.encoder);
    }
  };
  var flushIntDiffOptRleEncoder = (encoder) => {
    if (encoder.count > 0) {
      const encodedDiff = encoder.diff << 1 | (encoder.count === 1 ? 0 : 1);
      writeVarInt(encoder.encoder, encodedDiff);
      if (encoder.count > 1) {
        writeVarUint(encoder.encoder, encoder.count - 2);
      }
    }
  };
  var IntDiffOptRleEncoder = class {
    constructor() {
      this.encoder = new Encoder();
      this.s = 0;
      this.count = 0;
      this.diff = 0;
    }
    write(v2) {
      if (this.diff === v2 - this.s) {
        this.s = v2;
        this.count++;
      } else {
        flushIntDiffOptRleEncoder(this);
        this.count = 1;
        this.diff = v2 - this.s;
        this.s = v2;
      }
    }
    toUint8Array() {
      flushIntDiffOptRleEncoder(this);
      return toUint8Array(this.encoder);
    }
  };
  var StringEncoder = class {
    constructor() {
      this.sarr = [];
      this.s = "";
      this.lensE = new UintOptRleEncoder();
    }
    write(string) {
      this.s += string;
      if (this.s.length > 19) {
        this.sarr.push(this.s);
        this.s = "";
      }
      this.lensE.write(string.length);
    }
    toUint8Array() {
      const encoder = new Encoder();
      this.sarr.push(this.s);
      this.s = "";
      writeVarString(encoder, this.sarr.join(""));
      writeUint8Array(encoder, this.lensE.toUint8Array());
      return toUint8Array(encoder);
    }
  };

  // ../../node_modules/isomorphic.js/browser.mjs
  var performance = typeof window === "undefined" ? null : typeof window.performance !== "undefined" && window.performance || null;
  var isoCrypto = typeof crypto === "undefined" ? null : crypto;
  var cryptoRandomBuffer = isoCrypto !== null ? (len) => {
    const buf = new ArrayBuffer(len);
    const arr = new Uint8Array(buf);
    isoCrypto.getRandomValues(arr);
    return buf;
  } : (len) => {
    const buf = new ArrayBuffer(len);
    const arr = new Uint8Array(buf);
    for (let i2 = 0; i2 < len; i2++) {
      arr[i2] = Math.ceil(Math.random() * 4294967295 >>> 0);
    }
    return buf;
  };

  // ../../node_modules/lib0/random.js
  var uint32 = () => new Uint32Array(cryptoRandomBuffer(4))[0];
  var uuidv4Template = [1e7] + -1e3 + -4e3 + -8e3 + -1e11;
  var uuidv4 = () => uuidv4Template.replace(/[018]/g, (c2) => (c2 ^ uint32() & 15 >> c2 / 4).toString(16));

  // ../../node_modules/lib0/time.js
  var getUnixTime = Date.now;

  // ../../node_modules/lib0/promise.js
  var create3 = (f2) => new Promise(f2);

  // ../../node_modules/lib0/error.js
  var create4 = (s2) => new Error(s2);
  var methodUnimplemented = () => {
    throw create4("Method unimplemented");
  };
  var unexpectedCase = () => {
    throw create4("Unexpected case");
  };

  // ../../node_modules/lib0/object.js
  var keys = Object.keys;
  var length2 = (obj) => keys(obj).length;
  var every = (obj, f2) => {
    for (const key in obj) {
      if (!f2(obj[key], key)) {
        return false;
      }
    }
    return true;
  };
  var hasProperty = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
  var equalFlat = (a2, b2) => a2 === b2 || length2(a2) === length2(b2) && every(a2, (val, key) => (val !== void 0 || hasProperty(b2, key)) && b2[key] === val);

  // ../../node_modules/lib0/function.js
  var callAll = (fs, args2, i2 = 0) => {
    try {
      for (; i2 < fs.length; i2++) {
        fs[i2](...args2);
      }
    } finally {
      if (i2 < fs.length) {
        callAll(fs, args2, i2 + 1);
      }
    }
  };

  // ../../node_modules/lib0/symbol.js
  var create5 = Symbol;

  // ../../node_modules/lib0/pair.js
  var Pair = class {
    constructor(left, right) {
      this.left = left;
      this.right = right;
    }
  };
  var create6 = (left, right) => new Pair(left, right);

  // ../../node_modules/lib0/dom.js
  var doc = typeof document !== "undefined" ? document : {};
  var domParser = typeof DOMParser !== "undefined" ? new DOMParser() : null;
  var mapToStyleString = (m) => map(m, (value, key) => `${key}:${value};`).join("");
  var ELEMENT_NODE = doc.ELEMENT_NODE;
  var TEXT_NODE = doc.TEXT_NODE;
  var CDATA_SECTION_NODE = doc.CDATA_SECTION_NODE;
  var COMMENT_NODE = doc.COMMENT_NODE;
  var DOCUMENT_NODE = doc.DOCUMENT_NODE;
  var DOCUMENT_TYPE_NODE = doc.DOCUMENT_TYPE_NODE;
  var DOCUMENT_FRAGMENT_NODE = doc.DOCUMENT_FRAGMENT_NODE;

  // ../../node_modules/lib0/logging.js
  var BOLD = create5();
  var UNBOLD = create5();
  var BLUE = create5();
  var GREY = create5();
  var GREEN = create5();
  var RED = create5();
  var PURPLE = create5();
  var ORANGE = create5();
  var UNCOLOR = create5();
  var _browserStyleMap = {
    [BOLD]: create6("font-weight", "bold"),
    [UNBOLD]: create6("font-weight", "normal"),
    [BLUE]: create6("color", "blue"),
    [GREEN]: create6("color", "green"),
    [GREY]: create6("color", "grey"),
    [RED]: create6("color", "red"),
    [PURPLE]: create6("color", "purple"),
    [ORANGE]: create6("color", "orange"),
    [UNCOLOR]: create6("color", "black")
  };
  var _nodeStyleMap = {
    [BOLD]: "\x1B[1m",
    [UNBOLD]: "\x1B[2m",
    [BLUE]: "\x1B[34m",
    [GREEN]: "\x1B[32m",
    [GREY]: "\x1B[37m",
    [RED]: "\x1B[31m",
    [PURPLE]: "\x1B[35m",
    [ORANGE]: "\x1B[38;5;208m",
    [UNCOLOR]: "\x1B[0m"
  };
  var computeBrowserLoggingArgs = (args2) => {
    const strBuilder = [];
    const styles = [];
    const currentStyle = create();
    let logArgs = [];
    let i2 = 0;
    for (; i2 < args2.length; i2++) {
      const arg = args2[i2];
      const style = _browserStyleMap[arg];
      if (style !== void 0) {
        currentStyle.set(style.left, style.right);
      } else {
        if (arg.constructor === String || arg.constructor === Number) {
          const style2 = mapToStyleString(currentStyle);
          if (i2 > 0 || style2.length > 0) {
            strBuilder.push("%c" + arg);
            styles.push(style2);
          } else {
            strBuilder.push(arg);
          }
        } else {
          break;
        }
      }
    }
    if (i2 > 0) {
      logArgs = styles;
      logArgs.unshift(strBuilder.join(""));
    }
    for (; i2 < args2.length; i2++) {
      const arg = args2[i2];
      if (!(arg instanceof Symbol)) {
        logArgs.push(arg);
      }
    }
    return logArgs;
  };
  var computeNodeLoggingArgs = (args2) => {
    const strBuilder = [];
    const logArgs = [];
    let i2 = 0;
    for (; i2 < args2.length; i2++) {
      const arg = args2[i2];
      const style = _nodeStyleMap[arg];
      if (style !== void 0) {
        strBuilder.push(style);
      } else {
        if (arg.constructor === String || arg.constructor === Number) {
          strBuilder.push(arg);
        } else {
          break;
        }
      }
    }
    if (i2 > 0) {
      strBuilder.push("\x1B[0m");
      logArgs.push(strBuilder.join(""));
    }
    for (; i2 < args2.length; i2++) {
      const arg = args2[i2];
      if (!(arg instanceof Symbol)) {
        logArgs.push(arg);
      }
    }
    return logArgs;
  };
  var computeLoggingArgs = isNode ? computeNodeLoggingArgs : computeBrowserLoggingArgs;
  var print = (...args2) => {
    console.log(...computeLoggingArgs(args2));
    vconsoles.forEach((vc) => vc.print(args2));
  };
  var vconsoles = /* @__PURE__ */ new Set();
  var lastLoggingTime = getUnixTime();

  // ../../node_modules/lib0/iterator.js
  var createIterator = (next) => ({
    [Symbol.iterator]() {
      return this;
    },
    next
  });
  var iteratorFilter = (iterator, filter) => createIterator(() => {
    let res;
    do {
      res = iterator.next();
    } while (!res.done && !filter(res.value));
    return res;
  });
  var iteratorMap = (iterator, fmap) => createIterator(() => {
    const { done, value } = iterator.next();
    return { done, value: done ? void 0 : fmap(value) };
  });

  // ../../node_modules/yjs/dist/yjs.mjs
  var DeleteItem = class {
    constructor(clock, len) {
      this.clock = clock;
      this.len = len;
    }
  };
  var DeleteSet = class {
    constructor() {
      this.clients = /* @__PURE__ */ new Map();
    }
  };
  var iterateDeletedStructs = (transaction, ds, f2) => ds.clients.forEach((deletes, clientid) => {
    const structs = transaction.doc.store.clients.get(clientid);
    for (let i2 = 0; i2 < deletes.length; i2++) {
      const del = deletes[i2];
      iterateStructs(transaction, structs, del.clock, del.len, f2);
    }
  });
  var findIndexDS = (dis, clock) => {
    let left = 0;
    let right = dis.length - 1;
    while (left <= right) {
      const midindex = floor((left + right) / 2);
      const mid = dis[midindex];
      const midclock = mid.clock;
      if (midclock <= clock) {
        if (clock < midclock + mid.len) {
          return midindex;
        }
        left = midindex + 1;
      } else {
        right = midindex - 1;
      }
    }
    return null;
  };
  var isDeleted = (ds, id) => {
    const dis = ds.clients.get(id.client);
    return dis !== void 0 && findIndexDS(dis, id.clock) !== null;
  };
  var sortAndMergeDeleteSet = (ds) => {
    ds.clients.forEach((dels) => {
      dels.sort((a2, b2) => a2.clock - b2.clock);
      let i2, j2;
      for (i2 = 1, j2 = 1; i2 < dels.length; i2++) {
        const left = dels[j2 - 1];
        const right = dels[i2];
        if (left.clock + left.len >= right.clock) {
          left.len = max(left.len, right.clock + right.len - left.clock);
        } else {
          if (j2 < i2) {
            dels[j2] = right;
          }
          j2++;
        }
      }
      dels.length = j2;
    });
  };
  var mergeDeleteSets = (dss) => {
    const merged = new DeleteSet();
    for (let dssI = 0; dssI < dss.length; dssI++) {
      dss[dssI].clients.forEach((delsLeft, client) => {
        if (!merged.clients.has(client)) {
          const dels = delsLeft.slice();
          for (let i2 = dssI + 1; i2 < dss.length; i2++) {
            appendTo(dels, dss[i2].clients.get(client) || []);
          }
          merged.clients.set(client, dels);
        }
      });
    }
    sortAndMergeDeleteSet(merged);
    return merged;
  };
  var addToDeleteSet = (ds, client, clock, length3) => {
    setIfUndefined(ds.clients, client, () => []).push(new DeleteItem(clock, length3));
  };
  var createDeleteSet = () => new DeleteSet();
  var writeDeleteSet = (encoder, ds) => {
    writeVarUint(encoder.restEncoder, ds.clients.size);
    ds.clients.forEach((dsitems, client) => {
      encoder.resetDsCurVal();
      writeVarUint(encoder.restEncoder, client);
      const len = dsitems.length;
      writeVarUint(encoder.restEncoder, len);
      for (let i2 = 0; i2 < len; i2++) {
        const item = dsitems[i2];
        encoder.writeDsClock(item.clock);
        encoder.writeDsLen(item.len);
      }
    });
  };
  var generateNewClientId = uint32;
  var Doc = class extends Observable {
    constructor({ guid = uuidv4(), collectionid = null, gc = true, gcFilter = () => true, meta = null, autoLoad = false, shouldLoad = true } = {}) {
      super();
      this.gc = gc;
      this.gcFilter = gcFilter;
      this.clientID = generateNewClientId();
      this.guid = guid;
      this.collectionid = collectionid;
      this.share = /* @__PURE__ */ new Map();
      this.store = new StructStore();
      this._transaction = null;
      this._transactionCleanups = [];
      this.subdocs = /* @__PURE__ */ new Set();
      this._item = null;
      this.shouldLoad = shouldLoad;
      this.autoLoad = autoLoad;
      this.meta = meta;
      this.isLoaded = false;
      this.whenLoaded = create3((resolve) => {
        this.on("load", () => {
          this.isLoaded = true;
          resolve(this);
        });
      });
    }
    load() {
      const item = this._item;
      if (item !== null && !this.shouldLoad) {
        transact(item.parent.doc, (transaction) => {
          transaction.subdocsLoaded.add(this);
        }, null, true);
      }
      this.shouldLoad = true;
    }
    getSubdocs() {
      return this.subdocs;
    }
    getSubdocGuids() {
      return new Set(Array.from(this.subdocs).map((doc2) => doc2.guid));
    }
    transact(f2, origin = null) {
      transact(this, f2, origin);
    }
    get(name, TypeConstructor = AbstractType) {
      const type = setIfUndefined(this.share, name, () => {
        const t2 = new TypeConstructor();
        t2._integrate(this, null);
        return t2;
      });
      const Constr = type.constructor;
      if (TypeConstructor !== AbstractType && Constr !== TypeConstructor) {
        if (Constr === AbstractType) {
          const t2 = new TypeConstructor();
          t2._map = type._map;
          type._map.forEach((n2) => {
            for (; n2 !== null; n2 = n2.left) {
              n2.parent = t2;
            }
          });
          t2._start = type._start;
          for (let n2 = t2._start; n2 !== null; n2 = n2.right) {
            n2.parent = t2;
          }
          t2._length = type._length;
          this.share.set(name, t2);
          t2._integrate(this, null);
          return t2;
        } else {
          throw new Error(`Type with the name ${name} has already been defined with a different constructor`);
        }
      }
      return type;
    }
    getArray(name = "") {
      return this.get(name, YArray);
    }
    getText(name = "") {
      return this.get(name, YText);
    }
    getMap(name = "") {
      return this.get(name, YMap);
    }
    getXmlFragment(name = "") {
      return this.get(name, YXmlFragment);
    }
    toJSON() {
      const doc2 = {};
      this.share.forEach((value, key) => {
        doc2[key] = value.toJSON();
      });
      return doc2;
    }
    destroy() {
      from(this.subdocs).forEach((subdoc) => subdoc.destroy());
      const item = this._item;
      if (item !== null) {
        this._item = null;
        const content = item.content;
        content.doc = new Doc(__spreadProps(__spreadValues({ guid: this.guid }, content.opts), { shouldLoad: false }));
        content.doc._item = item;
        transact(item.parent.doc, (transaction) => {
          const doc2 = content.doc;
          if (!item.deleted) {
            transaction.subdocsAdded.add(doc2);
          }
          transaction.subdocsRemoved.add(this);
        }, null, true);
      }
      this.emit("destroyed", [true]);
      this.emit("destroy", [this]);
      super.destroy();
    }
    on(eventName, f2) {
      super.on(eventName, f2);
    }
    off(eventName, f2) {
      super.off(eventName, f2);
    }
  };
  var DSEncoderV1 = class {
    constructor() {
      this.restEncoder = createEncoder();
    }
    toUint8Array() {
      return toUint8Array(this.restEncoder);
    }
    resetDsCurVal() {
    }
    writeDsClock(clock) {
      writeVarUint(this.restEncoder, clock);
    }
    writeDsLen(len) {
      writeVarUint(this.restEncoder, len);
    }
  };
  var UpdateEncoderV1 = class extends DSEncoderV1 {
    writeLeftID(id) {
      writeVarUint(this.restEncoder, id.client);
      writeVarUint(this.restEncoder, id.clock);
    }
    writeRightID(id) {
      writeVarUint(this.restEncoder, id.client);
      writeVarUint(this.restEncoder, id.clock);
    }
    writeClient(client) {
      writeVarUint(this.restEncoder, client);
    }
    writeInfo(info) {
      writeUint8(this.restEncoder, info);
    }
    writeString(s2) {
      writeVarString(this.restEncoder, s2);
    }
    writeParentInfo(isYKey) {
      writeVarUint(this.restEncoder, isYKey ? 1 : 0);
    }
    writeTypeRef(info) {
      writeVarUint(this.restEncoder, info);
    }
    writeLen(len) {
      writeVarUint(this.restEncoder, len);
    }
    writeAny(any2) {
      writeAny(this.restEncoder, any2);
    }
    writeBuf(buf) {
      writeVarUint8Array(this.restEncoder, buf);
    }
    writeJSON(embed) {
      writeVarString(this.restEncoder, JSON.stringify(embed));
    }
    writeKey(key) {
      writeVarString(this.restEncoder, key);
    }
  };
  var DSEncoderV2 = class {
    constructor() {
      this.restEncoder = createEncoder();
      this.dsCurrVal = 0;
    }
    toUint8Array() {
      return toUint8Array(this.restEncoder);
    }
    resetDsCurVal() {
      this.dsCurrVal = 0;
    }
    writeDsClock(clock) {
      const diff = clock - this.dsCurrVal;
      this.dsCurrVal = clock;
      writeVarUint(this.restEncoder, diff);
    }
    writeDsLen(len) {
      if (len === 0) {
        unexpectedCase();
      }
      writeVarUint(this.restEncoder, len - 1);
      this.dsCurrVal += len;
    }
  };
  var UpdateEncoderV2 = class extends DSEncoderV2 {
    constructor() {
      super();
      this.keyMap = /* @__PURE__ */ new Map();
      this.keyClock = 0;
      this.keyClockEncoder = new IntDiffOptRleEncoder();
      this.clientEncoder = new UintOptRleEncoder();
      this.leftClockEncoder = new IntDiffOptRleEncoder();
      this.rightClockEncoder = new IntDiffOptRleEncoder();
      this.infoEncoder = new RleEncoder(writeUint8);
      this.stringEncoder = new StringEncoder();
      this.parentInfoEncoder = new RleEncoder(writeUint8);
      this.typeRefEncoder = new UintOptRleEncoder();
      this.lenEncoder = new UintOptRleEncoder();
    }
    toUint8Array() {
      const encoder = createEncoder();
      writeVarUint(encoder, 0);
      writeVarUint8Array(encoder, this.keyClockEncoder.toUint8Array());
      writeVarUint8Array(encoder, this.clientEncoder.toUint8Array());
      writeVarUint8Array(encoder, this.leftClockEncoder.toUint8Array());
      writeVarUint8Array(encoder, this.rightClockEncoder.toUint8Array());
      writeVarUint8Array(encoder, toUint8Array(this.infoEncoder));
      writeVarUint8Array(encoder, this.stringEncoder.toUint8Array());
      writeVarUint8Array(encoder, toUint8Array(this.parentInfoEncoder));
      writeVarUint8Array(encoder, this.typeRefEncoder.toUint8Array());
      writeVarUint8Array(encoder, this.lenEncoder.toUint8Array());
      writeUint8Array(encoder, toUint8Array(this.restEncoder));
      return toUint8Array(encoder);
    }
    writeLeftID(id) {
      this.clientEncoder.write(id.client);
      this.leftClockEncoder.write(id.clock);
    }
    writeRightID(id) {
      this.clientEncoder.write(id.client);
      this.rightClockEncoder.write(id.clock);
    }
    writeClient(client) {
      this.clientEncoder.write(client);
    }
    writeInfo(info) {
      this.infoEncoder.write(info);
    }
    writeString(s2) {
      this.stringEncoder.write(s2);
    }
    writeParentInfo(isYKey) {
      this.parentInfoEncoder.write(isYKey ? 1 : 0);
    }
    writeTypeRef(info) {
      this.typeRefEncoder.write(info);
    }
    writeLen(len) {
      this.lenEncoder.write(len);
    }
    writeAny(any2) {
      writeAny(this.restEncoder, any2);
    }
    writeBuf(buf) {
      writeVarUint8Array(this.restEncoder, buf);
    }
    writeJSON(embed) {
      writeAny(this.restEncoder, embed);
    }
    writeKey(key) {
      const clock = this.keyMap.get(key);
      if (clock === void 0) {
        this.keyClockEncoder.write(this.keyClock++);
        this.stringEncoder.write(key);
      } else {
        this.keyClockEncoder.write(clock);
      }
    }
  };
  var writeStructs = (encoder, structs, client, clock) => {
    clock = max(clock, structs[0].id.clock);
    const startNewStructs = findIndexSS(structs, clock);
    writeVarUint(encoder.restEncoder, structs.length - startNewStructs);
    encoder.writeClient(client);
    writeVarUint(encoder.restEncoder, clock);
    const firstStruct = structs[startNewStructs];
    firstStruct.write(encoder, clock - firstStruct.id.clock);
    for (let i2 = startNewStructs + 1; i2 < structs.length; i2++) {
      structs[i2].write(encoder, 0);
    }
  };
  var writeClientsStructs = (encoder, store, _sm) => {
    const sm = /* @__PURE__ */ new Map();
    _sm.forEach((clock, client) => {
      if (getState(store, client) > clock) {
        sm.set(client, clock);
      }
    });
    getStateVector(store).forEach((clock, client) => {
      if (!_sm.has(client)) {
        sm.set(client, 0);
      }
    });
    writeVarUint(encoder.restEncoder, sm.size);
    Array.from(sm.entries()).sort((a2, b2) => b2[0] - a2[0]).forEach(([client, clock]) => {
      writeStructs(encoder, store.clients.get(client), client, clock);
    });
  };
  var writeStructsFromTransaction = (encoder, transaction) => writeClientsStructs(encoder, transaction.doc.store, transaction.beforeState);
  var EventHandler = class {
    constructor() {
      this.l = [];
    }
  };
  var createEventHandler = () => new EventHandler();
  var addEventHandlerListener = (eventHandler, f2) => eventHandler.l.push(f2);
  var removeEventHandlerListener = (eventHandler, f2) => {
    const l2 = eventHandler.l;
    const len = l2.length;
    eventHandler.l = l2.filter((g2) => f2 !== g2);
    if (len === eventHandler.l.length) {
      console.error("[yjs] Tried to remove event handler that doesn't exist.");
    }
  };
  var callEventHandlerListeners = (eventHandler, arg0, arg1) => callAll(eventHandler.l, [arg0, arg1]);
  var ID = class {
    constructor(client, clock) {
      this.client = client;
      this.clock = clock;
    }
  };
  var compareIDs = (a2, b2) => a2 === b2 || a2 !== null && b2 !== null && a2.client === b2.client && a2.clock === b2.clock;
  var createID = (client, clock) => new ID(client, clock);
  var writeID = (encoder, id) => {
    writeVarUint(encoder, id.client);
    writeVarUint(encoder, id.clock);
  };
  var readID = (decoder) => createID(readVarUint(decoder), readVarUint(decoder));
  var findRootTypeKey = (type) => {
    for (const [key, value] of type.doc.share.entries()) {
      if (value === type) {
        return key;
      }
    }
    throw unexpectedCase();
  };
  var isParentOf = (parent, child) => {
    while (child !== null) {
      if (child.parent === parent) {
        return true;
      }
      child = child.parent._item;
    }
    return false;
  };
  var RelativePosition = class {
    constructor(type, tname, item, assoc = 0) {
      this.type = type;
      this.tname = tname;
      this.item = item;
      this.assoc = assoc;
    }
  };
  var createRelativePositionFromJSON = (json) => new RelativePosition(json.type == null ? null : createID(json.type.client, json.type.clock), json.tname || null, json.item == null ? null : createID(json.item.client, json.item.clock), json.assoc == null ? 0 : json.assoc);
  var AbsolutePosition = class {
    constructor(type, index, assoc = 0) {
      this.type = type;
      this.index = index;
      this.assoc = assoc;
    }
  };
  var createAbsolutePosition = (type, index, assoc = 0) => new AbsolutePosition(type, index, assoc);
  var createRelativePosition = (type, item, assoc) => {
    let typeid = null;
    let tname = null;
    if (type._item === null) {
      tname = findRootTypeKey(type);
    } else {
      typeid = createID(type._item.id.client, type._item.id.clock);
    }
    return new RelativePosition(typeid, tname, item, assoc);
  };
  var createRelativePositionFromTypeIndex = (type, index, assoc = 0) => {
    let t2 = type._start;
    if (assoc < 0) {
      if (index === 0) {
        return createRelativePosition(type, null, assoc);
      }
      index--;
    }
    while (t2 !== null) {
      if (!t2.deleted && t2.countable) {
        if (t2.length > index) {
          return createRelativePosition(type, createID(t2.id.client, t2.id.clock + index), assoc);
        }
        index -= t2.length;
      }
      if (t2.right === null && assoc < 0) {
        return createRelativePosition(type, t2.lastId, assoc);
      }
      t2 = t2.right;
    }
    return createRelativePosition(type, null, assoc);
  };
  var writeRelativePosition = (encoder, rpos) => {
    const { type, tname, item, assoc } = rpos;
    if (item !== null) {
      writeVarUint(encoder, 0);
      writeID(encoder, item);
    } else if (tname !== null) {
      writeUint8(encoder, 1);
      writeVarString(encoder, tname);
    } else if (type !== null) {
      writeUint8(encoder, 2);
      writeID(encoder, type);
    } else {
      throw unexpectedCase();
    }
    writeVarInt(encoder, assoc);
    return encoder;
  };
  var encodeRelativePosition = (rpos) => {
    const encoder = createEncoder();
    writeRelativePosition(encoder, rpos);
    return toUint8Array(encoder);
  };
  var readRelativePosition = (decoder) => {
    let type = null;
    let tname = null;
    let itemID = null;
    switch (readVarUint(decoder)) {
      case 0:
        itemID = readID(decoder);
        break;
      case 1:
        tname = readVarString(decoder);
        break;
      case 2: {
        type = readID(decoder);
      }
    }
    const assoc = hasContent(decoder) ? readVarInt(decoder) : 0;
    return new RelativePosition(type, tname, itemID, assoc);
  };
  var decodeRelativePosition = (uint8Array) => readRelativePosition(createDecoder(uint8Array));
  var createAbsolutePositionFromRelativePosition = (rpos, doc2) => {
    const store = doc2.store;
    const rightID = rpos.item;
    const typeID = rpos.type;
    const tname = rpos.tname;
    const assoc = rpos.assoc;
    let type = null;
    let index = 0;
    if (rightID !== null) {
      if (getState(store, rightID.client) <= rightID.clock) {
        return null;
      }
      const res = followRedone(store, rightID);
      const right = res.item;
      if (!(right instanceof Item)) {
        return null;
      }
      type = right.parent;
      if (type._item === null || !type._item.deleted) {
        index = right.deleted || !right.countable ? 0 : res.diff + (assoc >= 0 ? 0 : 1);
        let n2 = right.left;
        while (n2 !== null) {
          if (!n2.deleted && n2.countable) {
            index += n2.length;
          }
          n2 = n2.left;
        }
      }
    } else {
      if (tname !== null) {
        type = doc2.get(tname);
      } else if (typeID !== null) {
        if (getState(store, typeID.client) <= typeID.clock) {
          return null;
        }
        const { item } = followRedone(store, typeID);
        if (item instanceof Item && item.content instanceof ContentType) {
          type = item.content.type;
        } else {
          return null;
        }
      } else {
        throw unexpectedCase();
      }
      if (assoc >= 0) {
        index = type._length;
      } else {
        index = 0;
      }
    }
    return createAbsolutePosition(type, index, rpos.assoc);
  };
  var compareRelativePositions = (a2, b2) => a2 === b2 || a2 !== null && b2 !== null && a2.tname === b2.tname && compareIDs(a2.item, b2.item) && compareIDs(a2.type, b2.type) && a2.assoc === b2.assoc;
  var Snapshot = class {
    constructor(ds, sv) {
      this.ds = ds;
      this.sv = sv;
    }
  };
  var createSnapshot = (ds, sm) => new Snapshot(ds, sm);
  var emptySnapshot = createSnapshot(createDeleteSet(), /* @__PURE__ */ new Map());
  var isVisible = (item, snapshot) => snapshot === void 0 ? !item.deleted : snapshot.sv.has(item.id.client) && (snapshot.sv.get(item.id.client) || 0) > item.id.clock && !isDeleted(snapshot.ds, item.id);
  var splitSnapshotAffectedStructs = (transaction, snapshot) => {
    const meta = setIfUndefined(transaction.meta, splitSnapshotAffectedStructs, create2);
    const store = transaction.doc.store;
    if (!meta.has(snapshot)) {
      snapshot.sv.forEach((clock, client) => {
        if (clock < getState(store, client)) {
          getItemCleanStart(transaction, createID(client, clock));
        }
      });
      iterateDeletedStructs(transaction, snapshot.ds, (item) => {
      });
      meta.add(snapshot);
    }
  };
  var StructStore = class {
    constructor() {
      this.clients = /* @__PURE__ */ new Map();
      this.pendingStructs = null;
      this.pendingDs = null;
    }
  };
  var getStateVector = (store) => {
    const sm = /* @__PURE__ */ new Map();
    store.clients.forEach((structs, client) => {
      const struct = structs[structs.length - 1];
      sm.set(client, struct.id.clock + struct.length);
    });
    return sm;
  };
  var getState = (store, client) => {
    const structs = store.clients.get(client);
    if (structs === void 0) {
      return 0;
    }
    const lastStruct = structs[structs.length - 1];
    return lastStruct.id.clock + lastStruct.length;
  };
  var addStruct = (store, struct) => {
    let structs = store.clients.get(struct.id.client);
    if (structs === void 0) {
      structs = [];
      store.clients.set(struct.id.client, structs);
    } else {
      const lastStruct = structs[structs.length - 1];
      if (lastStruct.id.clock + lastStruct.length !== struct.id.clock) {
        throw unexpectedCase();
      }
    }
    structs.push(struct);
  };
  var findIndexSS = (structs, clock) => {
    let left = 0;
    let right = structs.length - 1;
    let mid = structs[right];
    let midclock = mid.id.clock;
    if (midclock === clock) {
      return right;
    }
    let midindex = floor(clock / (midclock + mid.length - 1) * right);
    while (left <= right) {
      mid = structs[midindex];
      midclock = mid.id.clock;
      if (midclock <= clock) {
        if (clock < midclock + mid.length) {
          return midindex;
        }
        left = midindex + 1;
      } else {
        right = midindex - 1;
      }
      midindex = floor((left + right) / 2);
    }
    throw unexpectedCase();
  };
  var find = (store, id) => {
    const structs = store.clients.get(id.client);
    return structs[findIndexSS(structs, id.clock)];
  };
  var getItem = find;
  var findIndexCleanStart = (transaction, structs, clock) => {
    const index = findIndexSS(structs, clock);
    const struct = structs[index];
    if (struct.id.clock < clock && struct instanceof Item) {
      structs.splice(index + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
      return index + 1;
    }
    return index;
  };
  var getItemCleanStart = (transaction, id) => {
    const structs = transaction.doc.store.clients.get(id.client);
    return structs[findIndexCleanStart(transaction, structs, id.clock)];
  };
  var getItemCleanEnd = (transaction, store, id) => {
    const structs = store.clients.get(id.client);
    const index = findIndexSS(structs, id.clock);
    const struct = structs[index];
    if (id.clock !== struct.id.clock + struct.length - 1 && struct.constructor !== GC) {
      structs.splice(index + 1, 0, splitItem(transaction, struct, id.clock - struct.id.clock + 1));
    }
    return struct;
  };
  var replaceStruct = (store, struct, newStruct) => {
    const structs = store.clients.get(struct.id.client);
    structs[findIndexSS(structs, struct.id.clock)] = newStruct;
  };
  var iterateStructs = (transaction, structs, clockStart, len, f2) => {
    if (len === 0) {
      return;
    }
    const clockEnd = clockStart + len;
    let index = findIndexCleanStart(transaction, structs, clockStart);
    let struct;
    do {
      struct = structs[index++];
      if (clockEnd < struct.id.clock + struct.length) {
        findIndexCleanStart(transaction, structs, clockEnd);
      }
      f2(struct);
    } while (index < structs.length && structs[index].id.clock < clockEnd);
  };
  var Transaction = class {
    constructor(doc2, origin, local) {
      this.doc = doc2;
      this.deleteSet = new DeleteSet();
      this.beforeState = getStateVector(doc2.store);
      this.afterState = /* @__PURE__ */ new Map();
      this.changed = /* @__PURE__ */ new Map();
      this.changedParentTypes = /* @__PURE__ */ new Map();
      this._mergeStructs = [];
      this.origin = origin;
      this.meta = /* @__PURE__ */ new Map();
      this.local = local;
      this.subdocsAdded = /* @__PURE__ */ new Set();
      this.subdocsRemoved = /* @__PURE__ */ new Set();
      this.subdocsLoaded = /* @__PURE__ */ new Set();
    }
  };
  var writeUpdateMessageFromTransaction = (encoder, transaction) => {
    if (transaction.deleteSet.clients.size === 0 && !any(transaction.afterState, (clock, client) => transaction.beforeState.get(client) !== clock)) {
      return false;
    }
    sortAndMergeDeleteSet(transaction.deleteSet);
    writeStructsFromTransaction(encoder, transaction);
    writeDeleteSet(encoder, transaction.deleteSet);
    return true;
  };
  var addChangedTypeToTransaction = (transaction, type, parentSub) => {
    const item = type._item;
    if (item === null || item.id.clock < (transaction.beforeState.get(item.id.client) || 0) && !item.deleted) {
      setIfUndefined(transaction.changed, type, create2).add(parentSub);
    }
  };
  var tryToMergeWithLeft = (structs, pos) => {
    const left = structs[pos - 1];
    const right = structs[pos];
    if (left.deleted === right.deleted && left.constructor === right.constructor) {
      if (left.mergeWith(right)) {
        structs.splice(pos, 1);
        if (right instanceof Item && right.parentSub !== null && right.parent._map.get(right.parentSub) === right) {
          right.parent._map.set(right.parentSub, left);
        }
      }
    }
  };
  var tryGcDeleteSet = (ds, store, gcFilter) => {
    for (const [client, deleteItems] of ds.clients.entries()) {
      const structs = store.clients.get(client);
      for (let di = deleteItems.length - 1; di >= 0; di--) {
        const deleteItem = deleteItems[di];
        const endDeleteItemClock = deleteItem.clock + deleteItem.len;
        for (let si = findIndexSS(structs, deleteItem.clock), struct = structs[si]; si < structs.length && struct.id.clock < endDeleteItemClock; struct = structs[++si]) {
          const struct2 = structs[si];
          if (deleteItem.clock + deleteItem.len <= struct2.id.clock) {
            break;
          }
          if (struct2 instanceof Item && struct2.deleted && !struct2.keep && gcFilter(struct2)) {
            struct2.gc(store, false);
          }
        }
      }
    }
  };
  var tryMergeDeleteSet = (ds, store) => {
    ds.clients.forEach((deleteItems, client) => {
      const structs = store.clients.get(client);
      for (let di = deleteItems.length - 1; di >= 0; di--) {
        const deleteItem = deleteItems[di];
        const mostRightIndexToCheck = min(structs.length - 1, 1 + findIndexSS(structs, deleteItem.clock + deleteItem.len - 1));
        for (let si = mostRightIndexToCheck, struct = structs[si]; si > 0 && struct.id.clock >= deleteItem.clock; struct = structs[--si]) {
          tryToMergeWithLeft(structs, si);
        }
      }
    });
  };
  var cleanupTransactions = (transactionCleanups, i2) => {
    if (i2 < transactionCleanups.length) {
      const transaction = transactionCleanups[i2];
      const doc2 = transaction.doc;
      const store = doc2.store;
      const ds = transaction.deleteSet;
      const mergeStructs = transaction._mergeStructs;
      try {
        sortAndMergeDeleteSet(ds);
        transaction.afterState = getStateVector(transaction.doc.store);
        doc2._transaction = null;
        doc2.emit("beforeObserverCalls", [transaction, doc2]);
        const fs = [];
        transaction.changed.forEach((subs, itemtype) => fs.push(() => {
          if (itemtype._item === null || !itemtype._item.deleted) {
            itemtype._callObserver(transaction, subs);
          }
        }));
        fs.push(() => {
          transaction.changedParentTypes.forEach((events, type) => fs.push(() => {
            if (type._item === null || !type._item.deleted) {
              events = events.filter((event) => event.target._item === null || !event.target._item.deleted);
              events.forEach((event) => {
                event.currentTarget = type;
              });
              events.sort((event1, event2) => event1.path.length - event2.path.length);
              callEventHandlerListeners(type._dEH, events, transaction);
            }
          }));
          fs.push(() => doc2.emit("afterTransaction", [transaction, doc2]));
        });
        callAll(fs, []);
      } finally {
        if (doc2.gc) {
          tryGcDeleteSet(ds, store, doc2.gcFilter);
        }
        tryMergeDeleteSet(ds, store);
        transaction.afterState.forEach((clock, client) => {
          const beforeClock = transaction.beforeState.get(client) || 0;
          if (beforeClock !== clock) {
            const structs = store.clients.get(client);
            const firstChangePos = max(findIndexSS(structs, beforeClock), 1);
            for (let i3 = structs.length - 1; i3 >= firstChangePos; i3--) {
              tryToMergeWithLeft(structs, i3);
            }
          }
        });
        for (let i3 = 0; i3 < mergeStructs.length; i3++) {
          const { client, clock } = mergeStructs[i3].id;
          const structs = store.clients.get(client);
          const replacedStructPos = findIndexSS(structs, clock);
          if (replacedStructPos + 1 < structs.length) {
            tryToMergeWithLeft(structs, replacedStructPos + 1);
          }
          if (replacedStructPos > 0) {
            tryToMergeWithLeft(structs, replacedStructPos);
          }
        }
        if (!transaction.local && transaction.afterState.get(doc2.clientID) !== transaction.beforeState.get(doc2.clientID)) {
          print(ORANGE, BOLD, "[yjs] ", UNBOLD, RED, "Changed the client-id because another client seems to be using it.");
          doc2.clientID = generateNewClientId();
        }
        doc2.emit("afterTransactionCleanup", [transaction, doc2]);
        if (doc2._observers.has("update")) {
          const encoder = new UpdateEncoderV1();
          const hasContent2 = writeUpdateMessageFromTransaction(encoder, transaction);
          if (hasContent2) {
            doc2.emit("update", [encoder.toUint8Array(), transaction.origin, doc2, transaction]);
          }
        }
        if (doc2._observers.has("updateV2")) {
          const encoder = new UpdateEncoderV2();
          const hasContent2 = writeUpdateMessageFromTransaction(encoder, transaction);
          if (hasContent2) {
            doc2.emit("updateV2", [encoder.toUint8Array(), transaction.origin, doc2, transaction]);
          }
        }
        const { subdocsAdded, subdocsLoaded, subdocsRemoved } = transaction;
        if (subdocsAdded.size > 0 || subdocsRemoved.size > 0 || subdocsLoaded.size > 0) {
          subdocsAdded.forEach((subdoc) => {
            subdoc.clientID = doc2.clientID;
            if (subdoc.collectionid == null) {
              subdoc.collectionid = doc2.collectionid;
            }
            doc2.subdocs.add(subdoc);
          });
          subdocsRemoved.forEach((subdoc) => doc2.subdocs.delete(subdoc));
          doc2.emit("subdocs", [{ loaded: subdocsLoaded, added: subdocsAdded, removed: subdocsRemoved }, doc2, transaction]);
          subdocsRemoved.forEach((subdoc) => subdoc.destroy());
        }
        if (transactionCleanups.length <= i2 + 1) {
          doc2._transactionCleanups = [];
          doc2.emit("afterAllTransactions", [doc2, transactionCleanups]);
        } else {
          cleanupTransactions(transactionCleanups, i2 + 1);
        }
      }
    }
  };
  var transact = (doc2, f2, origin = null, local = true) => {
    const transactionCleanups = doc2._transactionCleanups;
    let initialCall = false;
    if (doc2._transaction === null) {
      initialCall = true;
      doc2._transaction = new Transaction(doc2, origin, local);
      transactionCleanups.push(doc2._transaction);
      if (transactionCleanups.length === 1) {
        doc2.emit("beforeAllTransactions", [doc2]);
      }
      doc2.emit("beforeTransaction", [doc2._transaction, doc2]);
    }
    try {
      f2(doc2._transaction);
    } finally {
      if (initialCall && transactionCleanups[0] === doc2._transaction) {
        cleanupTransactions(transactionCleanups, 0);
      }
    }
  };
  var StackItem = class {
    constructor(deletions, insertions) {
      this.insertions = insertions;
      this.deletions = deletions;
      this.meta = /* @__PURE__ */ new Map();
    }
  };
  var clearUndoManagerStackItem = (tr, um, stackItem) => {
    iterateDeletedStructs(tr, stackItem.deletions, (item) => {
      if (item instanceof Item && um.scope.some((type) => isParentOf(type, item))) {
        keepItem(item, false);
      }
    });
  };
  var popStackItem = (undoManager, stack, eventType) => {
    let result = null;
    let _tr = null;
    const doc2 = undoManager.doc;
    const scope = undoManager.scope;
    transact(doc2, (transaction) => {
      while (stack.length > 0 && result === null) {
        const store = doc2.store;
        const stackItem = stack.pop();
        const itemsToRedo = /* @__PURE__ */ new Set();
        const itemsToDelete = [];
        let performedChange = false;
        iterateDeletedStructs(transaction, stackItem.insertions, (struct) => {
          if (struct instanceof Item) {
            if (struct.redone !== null) {
              let { item, diff } = followRedone(store, struct.id);
              if (diff > 0) {
                item = getItemCleanStart(transaction, createID(item.id.client, item.id.clock + diff));
              }
              struct = item;
            }
            if (!struct.deleted && scope.some((type) => isParentOf(type, struct))) {
              itemsToDelete.push(struct);
            }
          }
        });
        iterateDeletedStructs(transaction, stackItem.deletions, (struct) => {
          if (struct instanceof Item && scope.some((type) => isParentOf(type, struct)) && !isDeleted(stackItem.insertions, struct.id)) {
            itemsToRedo.add(struct);
          }
        });
        itemsToRedo.forEach((struct) => {
          performedChange = redoItem(transaction, struct, itemsToRedo, stackItem.insertions) !== null || performedChange;
        });
        for (let i2 = itemsToDelete.length - 1; i2 >= 0; i2--) {
          const item = itemsToDelete[i2];
          if (undoManager.deleteFilter(item)) {
            item.delete(transaction);
            performedChange = true;
          }
        }
        result = performedChange ? stackItem : null;
      }
      transaction.changed.forEach((subProps, type) => {
        if (subProps.has(null) && type._searchMarker) {
          type._searchMarker.length = 0;
        }
      });
      _tr = transaction;
    }, undoManager);
    if (result != null) {
      const changedParentTypes = _tr.changedParentTypes;
      undoManager.emit("stack-item-popped", [{ stackItem: result, type: eventType, changedParentTypes }, undoManager]);
    }
    return result;
  };
  var UndoManager = class extends Observable {
    constructor(typeScope, { captureTimeout = 500, deleteFilter = () => true, trackedOrigins = /* @__PURE__ */ new Set([null]) } = {}) {
      super();
      this.scope = [];
      this.addToScope(typeScope);
      this.deleteFilter = deleteFilter;
      trackedOrigins.add(this);
      this.trackedOrigins = trackedOrigins;
      this.undoStack = [];
      this.redoStack = [];
      this.undoing = false;
      this.redoing = false;
      this.doc = this.scope[0].doc;
      this.lastChange = 0;
      this.doc.on("afterTransaction", (transaction) => {
        if (!this.scope.some((type) => transaction.changedParentTypes.has(type)) || !this.trackedOrigins.has(transaction.origin) && (!transaction.origin || !this.trackedOrigins.has(transaction.origin.constructor))) {
          return;
        }
        const undoing = this.undoing;
        const redoing = this.redoing;
        const stack = undoing ? this.redoStack : this.undoStack;
        if (undoing) {
          this.stopCapturing();
        } else if (!redoing) {
          this.clear(false, true);
        }
        const insertions = new DeleteSet();
        transaction.afterState.forEach((endClock, client) => {
          const startClock = transaction.beforeState.get(client) || 0;
          const len = endClock - startClock;
          if (len > 0) {
            addToDeleteSet(insertions, client, startClock, len);
          }
        });
        const now = getUnixTime();
        let didAdd = false;
        if (now - this.lastChange < captureTimeout && stack.length > 0 && !undoing && !redoing) {
          const lastOp = stack[stack.length - 1];
          lastOp.deletions = mergeDeleteSets([lastOp.deletions, transaction.deleteSet]);
          lastOp.insertions = mergeDeleteSets([lastOp.insertions, insertions]);
        } else {
          stack.push(new StackItem(transaction.deleteSet, insertions));
          didAdd = true;
        }
        if (!undoing && !redoing) {
          this.lastChange = now;
        }
        iterateDeletedStructs(transaction, transaction.deleteSet, (item) => {
          if (item instanceof Item && this.scope.some((type) => isParentOf(type, item))) {
            keepItem(item, true);
          }
        });
        const changeEvent = [{ stackItem: stack[stack.length - 1], origin: transaction.origin, type: undoing ? "redo" : "undo", changedParentTypes: transaction.changedParentTypes }, this];
        if (didAdd) {
          this.emit("stack-item-added", changeEvent);
        } else {
          this.emit("stack-item-updated", changeEvent);
        }
      });
      this.doc.on("destroy", () => {
        this.destroy();
      });
    }
    addToScope(ytypes) {
      ytypes = isArray(ytypes) ? ytypes : [ytypes];
      ytypes.forEach((ytype) => {
        if (this.scope.every((yt) => yt !== ytype)) {
          this.scope.push(ytype);
        }
      });
    }
    clear(clearUndoStack = true, clearRedoStack = true) {
      if (clearUndoStack && this.canUndo() || clearRedoStack && this.canRedo()) {
        this.doc.transact((tr) => {
          if (clearUndoStack) {
            this.undoStack.forEach((item) => clearUndoManagerStackItem(tr, this, item));
            this.undoStack = [];
          }
          if (clearRedoStack) {
            this.redoStack.forEach((item) => clearUndoManagerStackItem(tr, this, item));
            this.redoStack = [];
          }
          this.emit("stack-cleared", [{ undoStackCleared: clearUndoStack, redoStackCleared: clearRedoStack }]);
        });
      }
    }
    stopCapturing() {
      this.lastChange = 0;
    }
    undo() {
      this.undoing = true;
      let res;
      try {
        res = popStackItem(this, this.undoStack, "undo");
      } finally {
        this.undoing = false;
      }
      return res;
    }
    redo() {
      this.redoing = true;
      let res;
      try {
        res = popStackItem(this, this.redoStack, "redo");
      } finally {
        this.redoing = false;
      }
      return res;
    }
    canUndo() {
      return this.undoStack.length > 0;
    }
    canRedo() {
      return this.redoStack.length > 0;
    }
  };
  var YEvent = class {
    constructor(target, transaction) {
      this.target = target;
      this.currentTarget = target;
      this.transaction = transaction;
      this._changes = null;
      this._keys = null;
      this._delta = null;
    }
    get path() {
      return getPathTo(this.currentTarget, this.target);
    }
    deletes(struct) {
      return isDeleted(this.transaction.deleteSet, struct.id);
    }
    get keys() {
      if (this._keys === null) {
        const keys2 = /* @__PURE__ */ new Map();
        const target = this.target;
        const changed = this.transaction.changed.get(target);
        changed.forEach((key) => {
          if (key !== null) {
            const item = target._map.get(key);
            let action;
            let oldValue;
            if (this.adds(item)) {
              let prev = item.left;
              while (prev !== null && this.adds(prev)) {
                prev = prev.left;
              }
              if (this.deletes(item)) {
                if (prev !== null && this.deletes(prev)) {
                  action = "delete";
                  oldValue = last(prev.content.getContent());
                } else {
                  return;
                }
              } else {
                if (prev !== null && this.deletes(prev)) {
                  action = "update";
                  oldValue = last(prev.content.getContent());
                } else {
                  action = "add";
                  oldValue = void 0;
                }
              }
            } else {
              if (this.deletes(item)) {
                action = "delete";
                oldValue = last(item.content.getContent());
              } else {
                return;
              }
            }
            keys2.set(key, { action, oldValue });
          }
        });
        this._keys = keys2;
      }
      return this._keys;
    }
    get delta() {
      return this.changes.delta;
    }
    adds(struct) {
      return struct.id.clock >= (this.transaction.beforeState.get(struct.id.client) || 0);
    }
    get changes() {
      let changes = this._changes;
      if (changes === null) {
        const target = this.target;
        const added = create2();
        const deleted = create2();
        const delta = [];
        changes = {
          added,
          deleted,
          delta,
          keys: this.keys
        };
        const changed = this.transaction.changed.get(target);
        if (changed.has(null)) {
          let lastOp = null;
          const packOp = () => {
            if (lastOp) {
              delta.push(lastOp);
            }
          };
          for (let item = target._start; item !== null; item = item.right) {
            if (item.deleted) {
              if (this.deletes(item) && !this.adds(item)) {
                if (lastOp === null || lastOp.delete === void 0) {
                  packOp();
                  lastOp = { delete: 0 };
                }
                lastOp.delete += item.length;
                deleted.add(item);
              }
            } else {
              if (this.adds(item)) {
                if (lastOp === null || lastOp.insert === void 0) {
                  packOp();
                  lastOp = { insert: [] };
                }
                lastOp.insert = lastOp.insert.concat(item.content.getContent());
                added.add(item);
              } else {
                if (lastOp === null || lastOp.retain === void 0) {
                  packOp();
                  lastOp = { retain: 0 };
                }
                lastOp.retain += item.length;
              }
            }
          }
          if (lastOp !== null && lastOp.retain === void 0) {
            packOp();
          }
        }
        this._changes = changes;
      }
      return changes;
    }
  };
  var getPathTo = (parent, child) => {
    const path = [];
    while (child._item !== null && child !== parent) {
      if (child._item.parentSub !== null) {
        path.unshift(child._item.parentSub);
      } else {
        let i2 = 0;
        let c2 = child._item.parent._start;
        while (c2 !== child._item && c2 !== null) {
          if (!c2.deleted) {
            i2++;
          }
          c2 = c2.right;
        }
        path.unshift(i2);
      }
      child = child._item.parent;
    }
    return path;
  };
  var maxSearchMarker = 80;
  var globalSearchMarkerTimestamp = 0;
  var ArraySearchMarker = class {
    constructor(p2, index) {
      p2.marker = true;
      this.p = p2;
      this.index = index;
      this.timestamp = globalSearchMarkerTimestamp++;
    }
  };
  var refreshMarkerTimestamp = (marker) => {
    marker.timestamp = globalSearchMarkerTimestamp++;
  };
  var overwriteMarker = (marker, p2, index) => {
    marker.p.marker = false;
    marker.p = p2;
    p2.marker = true;
    marker.index = index;
    marker.timestamp = globalSearchMarkerTimestamp++;
  };
  var markPosition = (searchMarker, p2, index) => {
    if (searchMarker.length >= maxSearchMarker) {
      const marker = searchMarker.reduce((a2, b2) => a2.timestamp < b2.timestamp ? a2 : b2);
      overwriteMarker(marker, p2, index);
      return marker;
    } else {
      const pm = new ArraySearchMarker(p2, index);
      searchMarker.push(pm);
      return pm;
    }
  };
  var findMarker = (yarray, index) => {
    if (yarray._start === null || index === 0 || yarray._searchMarker === null) {
      return null;
    }
    const marker = yarray._searchMarker.length === 0 ? null : yarray._searchMarker.reduce((a2, b2) => abs(index - a2.index) < abs(index - b2.index) ? a2 : b2);
    let p2 = yarray._start;
    let pindex = 0;
    if (marker !== null) {
      p2 = marker.p;
      pindex = marker.index;
      refreshMarkerTimestamp(marker);
    }
    while (p2.right !== null && pindex < index) {
      if (!p2.deleted && p2.countable) {
        if (index < pindex + p2.length) {
          break;
        }
        pindex += p2.length;
      }
      p2 = p2.right;
    }
    while (p2.left !== null && pindex > index) {
      p2 = p2.left;
      if (!p2.deleted && p2.countable) {
        pindex -= p2.length;
      }
    }
    while (p2.left !== null && p2.left.id.client === p2.id.client && p2.left.id.clock + p2.left.length === p2.id.clock) {
      p2 = p2.left;
      if (!p2.deleted && p2.countable) {
        pindex -= p2.length;
      }
    }
    if (marker !== null && abs(marker.index - pindex) < p2.parent.length / maxSearchMarker) {
      overwriteMarker(marker, p2, pindex);
      return marker;
    } else {
      return markPosition(yarray._searchMarker, p2, pindex);
    }
  };
  var updateMarkerChanges = (searchMarker, index, len) => {
    for (let i2 = searchMarker.length - 1; i2 >= 0; i2--) {
      const m = searchMarker[i2];
      if (len > 0) {
        let p2 = m.p;
        p2.marker = false;
        while (p2 && (p2.deleted || !p2.countable)) {
          p2 = p2.left;
          if (p2 && !p2.deleted && p2.countable) {
            m.index -= p2.length;
          }
        }
        if (p2 === null || p2.marker === true) {
          searchMarker.splice(i2, 1);
          continue;
        }
        m.p = p2;
        p2.marker = true;
      }
      if (index < m.index || len > 0 && index === m.index) {
        m.index = max(index, m.index + len);
      }
    }
  };
  var callTypeObservers = (type, transaction, event) => {
    const changedType = type;
    const changedParentTypes = transaction.changedParentTypes;
    while (true) {
      setIfUndefined(changedParentTypes, type, () => []).push(event);
      if (type._item === null) {
        break;
      }
      type = type._item.parent;
    }
    callEventHandlerListeners(changedType._eH, event, transaction);
  };
  var AbstractType = class {
    constructor() {
      this._item = null;
      this._map = /* @__PURE__ */ new Map();
      this._start = null;
      this.doc = null;
      this._length = 0;
      this._eH = createEventHandler();
      this._dEH = createEventHandler();
      this._searchMarker = null;
    }
    get parent() {
      return this._item ? this._item.parent : null;
    }
    _integrate(y2, item) {
      this.doc = y2;
      this._item = item;
    }
    _copy() {
      throw methodUnimplemented();
    }
    clone() {
      throw methodUnimplemented();
    }
    _write(encoder) {
    }
    get _first() {
      let n2 = this._start;
      while (n2 !== null && n2.deleted) {
        n2 = n2.right;
      }
      return n2;
    }
    _callObserver(transaction, parentSubs) {
      if (!transaction.local && this._searchMarker) {
        this._searchMarker.length = 0;
      }
    }
    observe(f2) {
      addEventHandlerListener(this._eH, f2);
    }
    observeDeep(f2) {
      addEventHandlerListener(this._dEH, f2);
    }
    unobserve(f2) {
      removeEventHandlerListener(this._eH, f2);
    }
    unobserveDeep(f2) {
      removeEventHandlerListener(this._dEH, f2);
    }
    toJSON() {
    }
  };
  var typeListSlice = (type, start, end) => {
    if (start < 0) {
      start = type._length + start;
    }
    if (end < 0) {
      end = type._length + end;
    }
    let len = end - start;
    const cs = [];
    let n2 = type._start;
    while (n2 !== null && len > 0) {
      if (n2.countable && !n2.deleted) {
        const c2 = n2.content.getContent();
        if (c2.length <= start) {
          start -= c2.length;
        } else {
          for (let i2 = start; i2 < c2.length && len > 0; i2++) {
            cs.push(c2[i2]);
            len--;
          }
          start = 0;
        }
      }
      n2 = n2.right;
    }
    return cs;
  };
  var typeListToArray = (type) => {
    const cs = [];
    let n2 = type._start;
    while (n2 !== null) {
      if (n2.countable && !n2.deleted) {
        const c2 = n2.content.getContent();
        for (let i2 = 0; i2 < c2.length; i2++) {
          cs.push(c2[i2]);
        }
      }
      n2 = n2.right;
    }
    return cs;
  };
  var typeListForEach = (type, f2) => {
    let index = 0;
    let n2 = type._start;
    while (n2 !== null) {
      if (n2.countable && !n2.deleted) {
        const c2 = n2.content.getContent();
        for (let i2 = 0; i2 < c2.length; i2++) {
          f2(c2[i2], index++, type);
        }
      }
      n2 = n2.right;
    }
  };
  var typeListMap = (type, f2) => {
    const result = [];
    typeListForEach(type, (c2, i2) => {
      result.push(f2(c2, i2, type));
    });
    return result;
  };
  var typeListCreateIterator = (type) => {
    let n2 = type._start;
    let currentContent = null;
    let currentContentIndex = 0;
    return {
      [Symbol.iterator]() {
        return this;
      },
      next: () => {
        if (currentContent === null) {
          while (n2 !== null && n2.deleted) {
            n2 = n2.right;
          }
          if (n2 === null) {
            return {
              done: true,
              value: void 0
            };
          }
          currentContent = n2.content.getContent();
          currentContentIndex = 0;
          n2 = n2.right;
        }
        const value = currentContent[currentContentIndex++];
        if (currentContent.length <= currentContentIndex) {
          currentContent = null;
        }
        return {
          done: false,
          value
        };
      }
    };
  };
  var typeListGet = (type, index) => {
    const marker = findMarker(type, index);
    let n2 = type._start;
    if (marker !== null) {
      n2 = marker.p;
      index -= marker.index;
    }
    for (; n2 !== null; n2 = n2.right) {
      if (!n2.deleted && n2.countable) {
        if (index < n2.length) {
          return n2.content.getContent()[index];
        }
        index -= n2.length;
      }
    }
  };
  var typeListInsertGenericsAfter = (transaction, parent, referenceItem, content) => {
    let left = referenceItem;
    const doc2 = transaction.doc;
    const ownClientId = doc2.clientID;
    const store = doc2.store;
    const right = referenceItem === null ? parent._start : referenceItem.right;
    let jsonContent = [];
    const packJsonContent = () => {
      if (jsonContent.length > 0) {
        left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentAny(jsonContent));
        left.integrate(transaction, 0);
        jsonContent = [];
      }
    };
    content.forEach((c2) => {
      if (c2 === null) {
        jsonContent.push(c2);
      } else {
        switch (c2.constructor) {
          case Number:
          case Object:
          case Boolean:
          case Array:
          case String:
            jsonContent.push(c2);
            break;
          default:
            packJsonContent();
            switch (c2.constructor) {
              case Uint8Array:
              case ArrayBuffer:
                left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentBinary(new Uint8Array(c2)));
                left.integrate(transaction, 0);
                break;
              case Doc:
                left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentDoc(c2));
                left.integrate(transaction, 0);
                break;
              default:
                if (c2 instanceof AbstractType) {
                  left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentType(c2));
                  left.integrate(transaction, 0);
                } else {
                  throw new Error("Unexpected content type in insert operation");
                }
            }
        }
      }
    });
    packJsonContent();
  };
  var lengthExceeded = create4("Length exceeded!");
  var typeListInsertGenerics = (transaction, parent, index, content) => {
    if (index > parent._length) {
      throw lengthExceeded;
    }
    if (index === 0) {
      if (parent._searchMarker) {
        updateMarkerChanges(parent._searchMarker, index, content.length);
      }
      return typeListInsertGenericsAfter(transaction, parent, null, content);
    }
    const startIndex = index;
    const marker = findMarker(parent, index);
    let n2 = parent._start;
    if (marker !== null) {
      n2 = marker.p;
      index -= marker.index;
      if (index === 0) {
        n2 = n2.prev;
        index += n2 && n2.countable && !n2.deleted ? n2.length : 0;
      }
    }
    for (; n2 !== null; n2 = n2.right) {
      if (!n2.deleted && n2.countable) {
        if (index <= n2.length) {
          if (index < n2.length) {
            getItemCleanStart(transaction, createID(n2.id.client, n2.id.clock + index));
          }
          break;
        }
        index -= n2.length;
      }
    }
    if (parent._searchMarker) {
      updateMarkerChanges(parent._searchMarker, startIndex, content.length);
    }
    return typeListInsertGenericsAfter(transaction, parent, n2, content);
  };
  var typeListPushGenerics = (transaction, parent, content) => {
    const marker = (parent._searchMarker || []).reduce((maxMarker, currMarker) => currMarker.index > maxMarker.index ? currMarker : maxMarker, { index: 0, p: parent._start });
    let n2 = marker.p;
    if (n2) {
      while (n2.right) {
        n2 = n2.right;
      }
    }
    return typeListInsertGenericsAfter(transaction, parent, n2, content);
  };
  var typeListDelete = (transaction, parent, index, length3) => {
    if (length3 === 0) {
      return;
    }
    const startIndex = index;
    const startLength = length3;
    const marker = findMarker(parent, index);
    let n2 = parent._start;
    if (marker !== null) {
      n2 = marker.p;
      index -= marker.index;
    }
    for (; n2 !== null && index > 0; n2 = n2.right) {
      if (!n2.deleted && n2.countable) {
        if (index < n2.length) {
          getItemCleanStart(transaction, createID(n2.id.client, n2.id.clock + index));
        }
        index -= n2.length;
      }
    }
    while (length3 > 0 && n2 !== null) {
      if (!n2.deleted) {
        if (length3 < n2.length) {
          getItemCleanStart(transaction, createID(n2.id.client, n2.id.clock + length3));
        }
        n2.delete(transaction);
        length3 -= n2.length;
      }
      n2 = n2.right;
    }
    if (length3 > 0) {
      throw lengthExceeded;
    }
    if (parent._searchMarker) {
      updateMarkerChanges(parent._searchMarker, startIndex, -startLength + length3);
    }
  };
  var typeMapDelete = (transaction, parent, key) => {
    const c2 = parent._map.get(key);
    if (c2 !== void 0) {
      c2.delete(transaction);
    }
  };
  var typeMapSet = (transaction, parent, key, value) => {
    const left = parent._map.get(key) || null;
    const doc2 = transaction.doc;
    const ownClientId = doc2.clientID;
    let content;
    if (value == null) {
      content = new ContentAny([value]);
    } else {
      switch (value.constructor) {
        case Number:
        case Object:
        case Boolean:
        case Array:
        case String:
          content = new ContentAny([value]);
          break;
        case Uint8Array:
          content = new ContentBinary(value);
          break;
        case Doc:
          content = new ContentDoc(value);
          break;
        default:
          if (value instanceof AbstractType) {
            content = new ContentType(value);
          } else {
            throw new Error("Unexpected content type");
          }
      }
    }
    new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, null, null, parent, key, content).integrate(transaction, 0);
  };
  var typeMapGet = (parent, key) => {
    const val = parent._map.get(key);
    return val !== void 0 && !val.deleted ? val.content.getContent()[val.length - 1] : void 0;
  };
  var typeMapGetAll = (parent) => {
    const res = {};
    parent._map.forEach((value, key) => {
      if (!value.deleted) {
        res[key] = value.content.getContent()[value.length - 1];
      }
    });
    return res;
  };
  var typeMapHas = (parent, key) => {
    const val = parent._map.get(key);
    return val !== void 0 && !val.deleted;
  };
  var createMapIterator = (map2) => iteratorFilter(map2.entries(), (entry) => !entry[1].deleted);
  var YArrayEvent = class extends YEvent {
    constructor(yarray, transaction) {
      super(yarray, transaction);
      this._transaction = transaction;
    }
  };
  var YArray = class extends AbstractType {
    constructor() {
      super();
      this._prelimContent = [];
      this._searchMarker = [];
    }
    static from(items) {
      const a2 = new YArray();
      a2.push(items);
      return a2;
    }
    _integrate(y2, item) {
      super._integrate(y2, item);
      this.insert(0, this._prelimContent);
      this._prelimContent = null;
    }
    _copy() {
      return new YArray();
    }
    clone() {
      const arr = new YArray();
      arr.insert(0, this.toArray().map((el) => el instanceof AbstractType ? el.clone() : el));
      return arr;
    }
    get length() {
      return this._prelimContent === null ? this._length : this._prelimContent.length;
    }
    _callObserver(transaction, parentSubs) {
      super._callObserver(transaction, parentSubs);
      callTypeObservers(this, transaction, new YArrayEvent(this, transaction));
    }
    insert(index, content) {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          typeListInsertGenerics(transaction, this, index, content);
        });
      } else {
        this._prelimContent.splice(index, 0, ...content);
      }
    }
    push(content) {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          typeListPushGenerics(transaction, this, content);
        });
      } else {
        this._prelimContent.push(...content);
      }
    }
    unshift(content) {
      this.insert(0, content);
    }
    delete(index, length3 = 1) {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          typeListDelete(transaction, this, index, length3);
        });
      } else {
        this._prelimContent.splice(index, length3);
      }
    }
    get(index) {
      return typeListGet(this, index);
    }
    toArray() {
      return typeListToArray(this);
    }
    slice(start = 0, end = this.length) {
      return typeListSlice(this, start, end);
    }
    toJSON() {
      return this.map((c2) => c2 instanceof AbstractType ? c2.toJSON() : c2);
    }
    map(f2) {
      return typeListMap(this, f2);
    }
    forEach(f2) {
      typeListForEach(this, f2);
    }
    [Symbol.iterator]() {
      return typeListCreateIterator(this);
    }
    _write(encoder) {
      encoder.writeTypeRef(YArrayRefID);
    }
  };
  var YMapEvent = class extends YEvent {
    constructor(ymap, transaction, subs) {
      super(ymap, transaction);
      this.keysChanged = subs;
    }
  };
  var YMap = class extends AbstractType {
    constructor(entries) {
      super();
      this._prelimContent = null;
      if (entries === void 0) {
        this._prelimContent = /* @__PURE__ */ new Map();
      } else {
        this._prelimContent = new Map(entries);
      }
    }
    _integrate(y2, item) {
      super._integrate(y2, item);
      this._prelimContent.forEach((value, key) => {
        this.set(key, value);
      });
      this._prelimContent = null;
    }
    _copy() {
      return new YMap();
    }
    clone() {
      const map2 = new YMap();
      this.forEach((value, key) => {
        map2.set(key, value instanceof AbstractType ? value.clone() : value);
      });
      return map2;
    }
    _callObserver(transaction, parentSubs) {
      callTypeObservers(this, transaction, new YMapEvent(this, transaction, parentSubs));
    }
    toJSON() {
      const map2 = {};
      this._map.forEach((item, key) => {
        if (!item.deleted) {
          const v2 = item.content.getContent()[item.length - 1];
          map2[key] = v2 instanceof AbstractType ? v2.toJSON() : v2;
        }
      });
      return map2;
    }
    get size() {
      return [...createMapIterator(this._map)].length;
    }
    keys() {
      return iteratorMap(createMapIterator(this._map), (v2) => v2[0]);
    }
    values() {
      return iteratorMap(createMapIterator(this._map), (v2) => v2[1].content.getContent()[v2[1].length - 1]);
    }
    entries() {
      return iteratorMap(createMapIterator(this._map), (v2) => [v2[0], v2[1].content.getContent()[v2[1].length - 1]]);
    }
    forEach(f2) {
      const map2 = {};
      this._map.forEach((item, key) => {
        if (!item.deleted) {
          f2(item.content.getContent()[item.length - 1], key, this);
        }
      });
      return map2;
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    delete(key) {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          typeMapDelete(transaction, this, key);
        });
      } else {
        this._prelimContent.delete(key);
      }
    }
    set(key, value) {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          typeMapSet(transaction, this, key, value);
        });
      } else {
        this._prelimContent.set(key, value);
      }
      return value;
    }
    get(key) {
      return typeMapGet(this, key);
    }
    has(key) {
      return typeMapHas(this, key);
    }
    clear() {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          this.forEach(function(value, key, map2) {
            typeMapDelete(transaction, map2, key);
          });
        });
      } else {
        this._prelimContent.clear();
      }
    }
    _write(encoder) {
      encoder.writeTypeRef(YMapRefID);
    }
  };
  var equalAttrs = (a2, b2) => a2 === b2 || typeof a2 === "object" && typeof b2 === "object" && a2 && b2 && equalFlat(a2, b2);
  var ItemTextListPosition = class {
    constructor(left, right, index, currentAttributes) {
      this.left = left;
      this.right = right;
      this.index = index;
      this.currentAttributes = currentAttributes;
    }
    forward() {
      if (this.right === null) {
        unexpectedCase();
      }
      switch (this.right.content.constructor) {
        case ContentFormat:
          if (!this.right.deleted) {
            updateCurrentAttributes(this.currentAttributes, this.right.content);
          }
          break;
        default:
          if (!this.right.deleted) {
            this.index += this.right.length;
          }
          break;
      }
      this.left = this.right;
      this.right = this.right.right;
    }
  };
  var findNextPosition = (transaction, pos, count) => {
    while (pos.right !== null && count > 0) {
      switch (pos.right.content.constructor) {
        case ContentFormat:
          if (!pos.right.deleted) {
            updateCurrentAttributes(pos.currentAttributes, pos.right.content);
          }
          break;
        default:
          if (!pos.right.deleted) {
            if (count < pos.right.length) {
              getItemCleanStart(transaction, createID(pos.right.id.client, pos.right.id.clock + count));
            }
            pos.index += pos.right.length;
            count -= pos.right.length;
          }
          break;
      }
      pos.left = pos.right;
      pos.right = pos.right.right;
    }
    return pos;
  };
  var findPosition = (transaction, parent, index) => {
    const currentAttributes = /* @__PURE__ */ new Map();
    const marker = findMarker(parent, index);
    if (marker) {
      const pos = new ItemTextListPosition(marker.p.left, marker.p, marker.index, currentAttributes);
      return findNextPosition(transaction, pos, index - marker.index);
    } else {
      const pos = new ItemTextListPosition(null, parent._start, 0, currentAttributes);
      return findNextPosition(transaction, pos, index);
    }
  };
  var insertNegatedAttributes = (transaction, parent, currPos, negatedAttributes) => {
    while (currPos.right !== null && (currPos.right.deleted === true || currPos.right.content.constructor === ContentFormat && equalAttrs(negatedAttributes.get(currPos.right.content.key), currPos.right.content.value))) {
      if (!currPos.right.deleted) {
        negatedAttributes.delete(currPos.right.content.key);
      }
      currPos.forward();
    }
    const doc2 = transaction.doc;
    const ownClientId = doc2.clientID;
    negatedAttributes.forEach((val, key) => {
      const left = currPos.left;
      const right = currPos.right;
      const nextFormat = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
      nextFormat.integrate(transaction, 0);
      currPos.right = nextFormat;
      currPos.forward();
    });
  };
  var updateCurrentAttributes = (currentAttributes, format) => {
    const { key, value } = format;
    if (value === null) {
      currentAttributes.delete(key);
    } else {
      currentAttributes.set(key, value);
    }
  };
  var minimizeAttributeChanges = (currPos, attributes) => {
    while (true) {
      if (currPos.right === null) {
        break;
      } else if (currPos.right.deleted || currPos.right.content.constructor === ContentFormat && equalAttrs(attributes[currPos.right.content.key] || null, currPos.right.content.value))
        ;
      else {
        break;
      }
      currPos.forward();
    }
  };
  var insertAttributes = (transaction, parent, currPos, attributes) => {
    const doc2 = transaction.doc;
    const ownClientId = doc2.clientID;
    const negatedAttributes = /* @__PURE__ */ new Map();
    for (const key in attributes) {
      const val = attributes[key];
      const currentVal = currPos.currentAttributes.get(key) || null;
      if (!equalAttrs(currentVal, val)) {
        negatedAttributes.set(key, currentVal);
        const { left, right } = currPos;
        currPos.right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
        currPos.right.integrate(transaction, 0);
        currPos.forward();
      }
    }
    return negatedAttributes;
  };
  var insertText = (transaction, parent, currPos, text2, attributes) => {
    currPos.currentAttributes.forEach((val, key) => {
      if (attributes[key] === void 0) {
        attributes[key] = null;
      }
    });
    const doc2 = transaction.doc;
    const ownClientId = doc2.clientID;
    minimizeAttributeChanges(currPos, attributes);
    const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
    const content = text2.constructor === String ? new ContentString(text2) : text2 instanceof AbstractType ? new ContentType(text2) : new ContentEmbed(text2);
    let { left, right, index } = currPos;
    if (parent._searchMarker) {
      updateMarkerChanges(parent._searchMarker, currPos.index, content.getLength());
    }
    right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, content);
    right.integrate(transaction, 0);
    currPos.right = right;
    currPos.index = index;
    currPos.forward();
    insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
  };
  var formatText = (transaction, parent, currPos, length3, attributes) => {
    const doc2 = transaction.doc;
    const ownClientId = doc2.clientID;
    minimizeAttributeChanges(currPos, attributes);
    const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
    while (currPos.right !== null && (length3 > 0 || currPos.right.content.constructor === ContentFormat)) {
      if (!currPos.right.deleted) {
        switch (currPos.right.content.constructor) {
          case ContentFormat: {
            const { key, value } = currPos.right.content;
            const attr = attributes[key];
            if (attr !== void 0) {
              if (equalAttrs(attr, value)) {
                negatedAttributes.delete(key);
              } else {
                negatedAttributes.set(key, value);
              }
              currPos.right.delete(transaction);
            }
            break;
          }
          default:
            if (length3 < currPos.right.length) {
              getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length3));
            }
            length3 -= currPos.right.length;
            break;
        }
      }
      currPos.forward();
    }
    if (length3 > 0) {
      let newlines = "";
      for (; length3 > 0; length3--) {
        newlines += "\n";
      }
      currPos.right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), currPos.left, currPos.left && currPos.left.lastId, currPos.right, currPos.right && currPos.right.id, parent, null, new ContentString(newlines));
      currPos.right.integrate(transaction, 0);
      currPos.forward();
    }
    insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
  };
  var cleanupFormattingGap = (transaction, start, curr, startAttributes, currAttributes) => {
    let end = curr;
    const endAttributes = copy(currAttributes);
    while (end && (!end.countable || end.deleted)) {
      if (!end.deleted && end.content.constructor === ContentFormat) {
        updateCurrentAttributes(endAttributes, end.content);
      }
      end = end.right;
    }
    let cleanups = 0;
    let reachedEndOfCurr = false;
    while (start !== end) {
      if (curr === start) {
        reachedEndOfCurr = true;
      }
      if (!start.deleted) {
        const content = start.content;
        switch (content.constructor) {
          case ContentFormat: {
            const { key, value } = content;
            if ((endAttributes.get(key) || null) !== value || (startAttributes.get(key) || null) === value) {
              start.delete(transaction);
              cleanups++;
              if (!reachedEndOfCurr && (currAttributes.get(key) || null) === value && (startAttributes.get(key) || null) !== value) {
                currAttributes.delete(key);
              }
            }
            break;
          }
        }
      }
      start = start.right;
    }
    return cleanups;
  };
  var cleanupContextlessFormattingGap = (transaction, item) => {
    while (item && item.right && (item.right.deleted || !item.right.countable)) {
      item = item.right;
    }
    const attrs = /* @__PURE__ */ new Set();
    while (item && (item.deleted || !item.countable)) {
      if (!item.deleted && item.content.constructor === ContentFormat) {
        const key = item.content.key;
        if (attrs.has(key)) {
          item.delete(transaction);
        } else {
          attrs.add(key);
        }
      }
      item = item.left;
    }
  };
  var cleanupYTextFormatting = (type) => {
    let res = 0;
    transact(type.doc, (transaction) => {
      let start = type._start;
      let end = type._start;
      let startAttributes = create();
      const currentAttributes = copy(startAttributes);
      while (end) {
        if (end.deleted === false) {
          switch (end.content.constructor) {
            case ContentFormat:
              updateCurrentAttributes(currentAttributes, end.content);
              break;
            default:
              res += cleanupFormattingGap(transaction, start, end, startAttributes, currentAttributes);
              startAttributes = copy(currentAttributes);
              start = end;
              break;
          }
        }
        end = end.right;
      }
    });
    return res;
  };
  var deleteText = (transaction, currPos, length3) => {
    const startLength = length3;
    const startAttrs = copy(currPos.currentAttributes);
    const start = currPos.right;
    while (length3 > 0 && currPos.right !== null) {
      if (currPos.right.deleted === false) {
        switch (currPos.right.content.constructor) {
          case ContentType:
          case ContentEmbed:
          case ContentString:
            if (length3 < currPos.right.length) {
              getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length3));
            }
            length3 -= currPos.right.length;
            currPos.right.delete(transaction);
            break;
        }
      }
      currPos.forward();
    }
    if (start) {
      cleanupFormattingGap(transaction, start, currPos.right, startAttrs, currPos.currentAttributes);
    }
    const parent = (currPos.left || currPos.right).parent;
    if (parent._searchMarker) {
      updateMarkerChanges(parent._searchMarker, currPos.index, -startLength + length3);
    }
    return currPos;
  };
  var YTextEvent = class extends YEvent {
    constructor(ytext, transaction, subs) {
      super(ytext, transaction);
      this.childListChanged = false;
      this.keysChanged = /* @__PURE__ */ new Set();
      subs.forEach((sub) => {
        if (sub === null) {
          this.childListChanged = true;
        } else {
          this.keysChanged.add(sub);
        }
      });
    }
    get changes() {
      if (this._changes === null) {
        const changes = {
          keys: this.keys,
          delta: this.delta,
          added: /* @__PURE__ */ new Set(),
          deleted: /* @__PURE__ */ new Set()
        };
        this._changes = changes;
      }
      return this._changes;
    }
    get delta() {
      if (this._delta === null) {
        const y2 = this.target.doc;
        const delta = [];
        transact(y2, (transaction) => {
          const currentAttributes = /* @__PURE__ */ new Map();
          const oldAttributes = /* @__PURE__ */ new Map();
          let item = this.target._start;
          let action = null;
          const attributes = {};
          let insert = "";
          let retain = 0;
          let deleteLen = 0;
          const addOp = () => {
            if (action !== null) {
              let op;
              switch (action) {
                case "delete":
                  op = { delete: deleteLen };
                  deleteLen = 0;
                  break;
                case "insert":
                  op = { insert };
                  if (currentAttributes.size > 0) {
                    op.attributes = {};
                    currentAttributes.forEach((value, key) => {
                      if (value !== null) {
                        op.attributes[key] = value;
                      }
                    });
                  }
                  insert = "";
                  break;
                case "retain":
                  op = { retain };
                  if (Object.keys(attributes).length > 0) {
                    op.attributes = {};
                    for (const key in attributes) {
                      op.attributes[key] = attributes[key];
                    }
                  }
                  retain = 0;
                  break;
              }
              delta.push(op);
              action = null;
            }
          };
          while (item !== null) {
            switch (item.content.constructor) {
              case ContentType:
              case ContentEmbed:
                if (this.adds(item)) {
                  if (!this.deletes(item)) {
                    addOp();
                    action = "insert";
                    insert = item.content.getContent()[0];
                    addOp();
                  }
                } else if (this.deletes(item)) {
                  if (action !== "delete") {
                    addOp();
                    action = "delete";
                  }
                  deleteLen += 1;
                } else if (!item.deleted) {
                  if (action !== "retain") {
                    addOp();
                    action = "retain";
                  }
                  retain += 1;
                }
                break;
              case ContentString:
                if (this.adds(item)) {
                  if (!this.deletes(item)) {
                    if (action !== "insert") {
                      addOp();
                      action = "insert";
                    }
                    insert += item.content.str;
                  }
                } else if (this.deletes(item)) {
                  if (action !== "delete") {
                    addOp();
                    action = "delete";
                  }
                  deleteLen += item.length;
                } else if (!item.deleted) {
                  if (action !== "retain") {
                    addOp();
                    action = "retain";
                  }
                  retain += item.length;
                }
                break;
              case ContentFormat: {
                const { key, value } = item.content;
                if (this.adds(item)) {
                  if (!this.deletes(item)) {
                    const curVal = currentAttributes.get(key) || null;
                    if (!equalAttrs(curVal, value)) {
                      if (action === "retain") {
                        addOp();
                      }
                      if (equalAttrs(value, oldAttributes.get(key) || null)) {
                        delete attributes[key];
                      } else {
                        attributes[key] = value;
                      }
                    } else if (value !== null) {
                      item.delete(transaction);
                    }
                  }
                } else if (this.deletes(item)) {
                  oldAttributes.set(key, value);
                  const curVal = currentAttributes.get(key) || null;
                  if (!equalAttrs(curVal, value)) {
                    if (action === "retain") {
                      addOp();
                    }
                    attributes[key] = curVal;
                  }
                } else if (!item.deleted) {
                  oldAttributes.set(key, value);
                  const attr = attributes[key];
                  if (attr !== void 0) {
                    if (!equalAttrs(attr, value)) {
                      if (action === "retain") {
                        addOp();
                      }
                      if (value === null) {
                        delete attributes[key];
                      } else {
                        attributes[key] = value;
                      }
                    } else if (attr !== null) {
                      item.delete(transaction);
                    }
                  }
                }
                if (!item.deleted) {
                  if (action === "insert") {
                    addOp();
                  }
                  updateCurrentAttributes(currentAttributes, item.content);
                }
                break;
              }
            }
            item = item.right;
          }
          addOp();
          while (delta.length > 0) {
            const lastOp = delta[delta.length - 1];
            if (lastOp.retain !== void 0 && lastOp.attributes === void 0) {
              delta.pop();
            } else {
              break;
            }
          }
        });
        this._delta = delta;
      }
      return this._delta;
    }
  };
  var YText = class extends AbstractType {
    constructor(string) {
      super();
      this._pending = string !== void 0 ? [() => this.insert(0, string)] : [];
      this._searchMarker = [];
    }
    get length() {
      return this._length;
    }
    _integrate(y2, item) {
      super._integrate(y2, item);
      try {
        this._pending.forEach((f2) => f2());
      } catch (e) {
        console.error(e);
      }
      this._pending = null;
    }
    _copy() {
      return new YText();
    }
    clone() {
      const text2 = new YText();
      text2.applyDelta(this.toDelta());
      return text2;
    }
    _callObserver(transaction, parentSubs) {
      super._callObserver(transaction, parentSubs);
      const event = new YTextEvent(this, transaction, parentSubs);
      const doc2 = transaction.doc;
      callTypeObservers(this, transaction, event);
      if (!transaction.local) {
        let foundFormattingItem = false;
        for (const [client, afterClock] of transaction.afterState.entries()) {
          const clock = transaction.beforeState.get(client) || 0;
          if (afterClock === clock) {
            continue;
          }
          iterateStructs(transaction, doc2.store.clients.get(client), clock, afterClock, (item) => {
            if (!item.deleted && item.content.constructor === ContentFormat) {
              foundFormattingItem = true;
            }
          });
          if (foundFormattingItem) {
            break;
          }
        }
        if (!foundFormattingItem) {
          iterateDeletedStructs(transaction, transaction.deleteSet, (item) => {
            if (item instanceof GC || foundFormattingItem) {
              return;
            }
            if (item.parent === this && item.content.constructor === ContentFormat) {
              foundFormattingItem = true;
            }
          });
        }
        transact(doc2, (t2) => {
          if (foundFormattingItem) {
            cleanupYTextFormatting(this);
          } else {
            iterateDeletedStructs(t2, t2.deleteSet, (item) => {
              if (item instanceof GC) {
                return;
              }
              if (item.parent === this) {
                cleanupContextlessFormattingGap(t2, item);
              }
            });
          }
        });
      }
    }
    toString() {
      let str = "";
      let n2 = this._start;
      while (n2 !== null) {
        if (!n2.deleted && n2.countable && n2.content.constructor === ContentString) {
          str += n2.content.str;
        }
        n2 = n2.right;
      }
      return str;
    }
    toJSON() {
      return this.toString();
    }
    applyDelta(delta, { sanitize = true } = {}) {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          const currPos = new ItemTextListPosition(null, this._start, 0, /* @__PURE__ */ new Map());
          for (let i2 = 0; i2 < delta.length; i2++) {
            const op = delta[i2];
            if (op.insert !== void 0) {
              const ins = !sanitize && typeof op.insert === "string" && i2 === delta.length - 1 && currPos.right === null && op.insert.slice(-1) === "\n" ? op.insert.slice(0, -1) : op.insert;
              if (typeof ins !== "string" || ins.length > 0) {
                insertText(transaction, this, currPos, ins, op.attributes || {});
              }
            } else if (op.retain !== void 0) {
              formatText(transaction, this, currPos, op.retain, op.attributes || {});
            } else if (op.delete !== void 0) {
              deleteText(transaction, currPos, op.delete);
            }
          }
        });
      } else {
        this._pending.push(() => this.applyDelta(delta));
      }
    }
    toDelta(snapshot, prevSnapshot, computeYChange) {
      const ops = [];
      const currentAttributes = /* @__PURE__ */ new Map();
      const doc2 = this.doc;
      let str = "";
      let n2 = this._start;
      function packStr() {
        if (str.length > 0) {
          const attributes = {};
          let addAttributes = false;
          currentAttributes.forEach((value, key) => {
            addAttributes = true;
            attributes[key] = value;
          });
          const op = { insert: str };
          if (addAttributes) {
            op.attributes = attributes;
          }
          ops.push(op);
          str = "";
        }
      }
      transact(doc2, (transaction) => {
        if (snapshot) {
          splitSnapshotAffectedStructs(transaction, snapshot);
        }
        if (prevSnapshot) {
          splitSnapshotAffectedStructs(transaction, prevSnapshot);
        }
        while (n2 !== null) {
          if (isVisible(n2, snapshot) || prevSnapshot !== void 0 && isVisible(n2, prevSnapshot)) {
            switch (n2.content.constructor) {
              case ContentString: {
                const cur = currentAttributes.get("ychange");
                if (snapshot !== void 0 && !isVisible(n2, snapshot)) {
                  if (cur === void 0 || cur.user !== n2.id.client || cur.state !== "removed") {
                    packStr();
                    currentAttributes.set("ychange", computeYChange ? computeYChange("removed", n2.id) : { type: "removed" });
                  }
                } else if (prevSnapshot !== void 0 && !isVisible(n2, prevSnapshot)) {
                  if (cur === void 0 || cur.user !== n2.id.client || cur.state !== "added") {
                    packStr();
                    currentAttributes.set("ychange", computeYChange ? computeYChange("added", n2.id) : { type: "added" });
                  }
                } else if (cur !== void 0) {
                  packStr();
                  currentAttributes.delete("ychange");
                }
                str += n2.content.str;
                break;
              }
              case ContentType:
              case ContentEmbed: {
                packStr();
                const op = {
                  insert: n2.content.getContent()[0]
                };
                if (currentAttributes.size > 0) {
                  const attrs = {};
                  op.attributes = attrs;
                  currentAttributes.forEach((value, key) => {
                    attrs[key] = value;
                  });
                }
                ops.push(op);
                break;
              }
              case ContentFormat:
                if (isVisible(n2, snapshot)) {
                  packStr();
                  updateCurrentAttributes(currentAttributes, n2.content);
                }
                break;
            }
          }
          n2 = n2.right;
        }
        packStr();
      }, splitSnapshotAffectedStructs);
      return ops;
    }
    insert(index, text2, attributes) {
      if (text2.length <= 0) {
        return;
      }
      const y2 = this.doc;
      if (y2 !== null) {
        transact(y2, (transaction) => {
          const pos = findPosition(transaction, this, index);
          if (!attributes) {
            attributes = {};
            pos.currentAttributes.forEach((v2, k2) => {
              attributes[k2] = v2;
            });
          }
          insertText(transaction, this, pos, text2, attributes);
        });
      } else {
        this._pending.push(() => this.insert(index, text2, attributes));
      }
    }
    insertEmbed(index, embed, attributes = {}) {
      const y2 = this.doc;
      if (y2 !== null) {
        transact(y2, (transaction) => {
          const pos = findPosition(transaction, this, index);
          insertText(transaction, this, pos, embed, attributes);
        });
      } else {
        this._pending.push(() => this.insertEmbed(index, embed, attributes));
      }
    }
    delete(index, length3) {
      if (length3 === 0) {
        return;
      }
      const y2 = this.doc;
      if (y2 !== null) {
        transact(y2, (transaction) => {
          deleteText(transaction, findPosition(transaction, this, index), length3);
        });
      } else {
        this._pending.push(() => this.delete(index, length3));
      }
    }
    format(index, length3, attributes) {
      if (length3 === 0) {
        return;
      }
      const y2 = this.doc;
      if (y2 !== null) {
        transact(y2, (transaction) => {
          const pos = findPosition(transaction, this, index);
          if (pos.right === null) {
            return;
          }
          formatText(transaction, this, pos, length3, attributes);
        });
      } else {
        this._pending.push(() => this.format(index, length3, attributes));
      }
    }
    removeAttribute(attributeName) {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          typeMapDelete(transaction, this, attributeName);
        });
      } else {
        this._pending.push(() => this.removeAttribute(attributeName));
      }
    }
    setAttribute(attributeName, attributeValue) {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          typeMapSet(transaction, this, attributeName, attributeValue);
        });
      } else {
        this._pending.push(() => this.setAttribute(attributeName, attributeValue));
      }
    }
    getAttribute(attributeName) {
      return typeMapGet(this, attributeName);
    }
    getAttributes(snapshot) {
      return typeMapGetAll(this);
    }
    _write(encoder) {
      encoder.writeTypeRef(YTextRefID);
    }
  };
  var YXmlTreeWalker = class {
    constructor(root, f2 = () => true) {
      this._filter = f2;
      this._root = root;
      this._currentNode = root._start;
      this._firstCall = true;
    }
    [Symbol.iterator]() {
      return this;
    }
    next() {
      let n2 = this._currentNode;
      let type = n2 && n2.content && n2.content.type;
      if (n2 !== null && (!this._firstCall || n2.deleted || !this._filter(type))) {
        do {
          type = n2.content.type;
          if (!n2.deleted && (type.constructor === YXmlElement || type.constructor === YXmlFragment) && type._start !== null) {
            n2 = type._start;
          } else {
            while (n2 !== null) {
              if (n2.right !== null) {
                n2 = n2.right;
                break;
              } else if (n2.parent === this._root) {
                n2 = null;
              } else {
                n2 = n2.parent._item;
              }
            }
          }
        } while (n2 !== null && (n2.deleted || !this._filter(n2.content.type)));
      }
      this._firstCall = false;
      if (n2 === null) {
        return { value: void 0, done: true };
      }
      this._currentNode = n2;
      return { value: n2.content.type, done: false };
    }
  };
  var YXmlFragment = class extends AbstractType {
    constructor() {
      super();
      this._prelimContent = [];
    }
    get firstChild() {
      const first = this._first;
      return first ? first.content.getContent()[0] : null;
    }
    _integrate(y2, item) {
      super._integrate(y2, item);
      this.insert(0, this._prelimContent);
      this._prelimContent = null;
    }
    _copy() {
      return new YXmlFragment();
    }
    clone() {
      const el = new YXmlFragment();
      el.insert(0, this.toArray().map((item) => item instanceof AbstractType ? item.clone() : item));
      return el;
    }
    get length() {
      return this._prelimContent === null ? this._length : this._prelimContent.length;
    }
    createTreeWalker(filter) {
      return new YXmlTreeWalker(this, filter);
    }
    querySelector(query) {
      query = query.toUpperCase();
      const iterator = new YXmlTreeWalker(this, (element2) => element2.nodeName && element2.nodeName.toUpperCase() === query);
      const next = iterator.next();
      if (next.done) {
        return null;
      } else {
        return next.value;
      }
    }
    querySelectorAll(query) {
      query = query.toUpperCase();
      return Array.from(new YXmlTreeWalker(this, (element2) => element2.nodeName && element2.nodeName.toUpperCase() === query));
    }
    _callObserver(transaction, parentSubs) {
      callTypeObservers(this, transaction, new YXmlEvent(this, parentSubs, transaction));
    }
    toString() {
      return typeListMap(this, (xml) => xml.toString()).join("");
    }
    toJSON() {
      return this.toString();
    }
    toDOM(_document = document, hooks = {}, binding) {
      const fragment = _document.createDocumentFragment();
      if (binding !== void 0) {
        binding._createAssociation(fragment, this);
      }
      typeListForEach(this, (xmlType) => {
        fragment.insertBefore(xmlType.toDOM(_document, hooks, binding), null);
      });
      return fragment;
    }
    insert(index, content) {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          typeListInsertGenerics(transaction, this, index, content);
        });
      } else {
        this._prelimContent.splice(index, 0, ...content);
      }
    }
    insertAfter(ref, content) {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          const refItem = ref && ref instanceof AbstractType ? ref._item : ref;
          typeListInsertGenericsAfter(transaction, this, refItem, content);
        });
      } else {
        const pc = this._prelimContent;
        const index = ref === null ? 0 : pc.findIndex((el) => el === ref) + 1;
        if (index === 0 && ref !== null) {
          throw create4("Reference item not found");
        }
        pc.splice(index, 0, ...content);
      }
    }
    delete(index, length3 = 1) {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          typeListDelete(transaction, this, index, length3);
        });
      } else {
        this._prelimContent.splice(index, length3);
      }
    }
    toArray() {
      return typeListToArray(this);
    }
    push(content) {
      this.insert(this.length, content);
    }
    unshift(content) {
      this.insert(0, content);
    }
    get(index) {
      return typeListGet(this, index);
    }
    slice(start = 0, end = this.length) {
      return typeListSlice(this, start, end);
    }
    _write(encoder) {
      encoder.writeTypeRef(YXmlFragmentRefID);
    }
  };
  var YXmlElement = class extends YXmlFragment {
    constructor(nodeName = "UNDEFINED") {
      super();
      this.nodeName = nodeName;
      this._prelimAttrs = /* @__PURE__ */ new Map();
    }
    get nextSibling() {
      const n2 = this._item ? this._item.next : null;
      return n2 ? n2.content.type : null;
    }
    get prevSibling() {
      const n2 = this._item ? this._item.prev : null;
      return n2 ? n2.content.type : null;
    }
    _integrate(y2, item) {
      super._integrate(y2, item);
      this._prelimAttrs.forEach((value, key) => {
        this.setAttribute(key, value);
      });
      this._prelimAttrs = null;
    }
    _copy() {
      return new YXmlElement(this.nodeName);
    }
    clone() {
      const el = new YXmlElement(this.nodeName);
      const attrs = this.getAttributes();
      for (const key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
      el.insert(0, this.toArray().map((item) => item instanceof AbstractType ? item.clone() : item));
      return el;
    }
    toString() {
      const attrs = this.getAttributes();
      const stringBuilder = [];
      const keys2 = [];
      for (const key in attrs) {
        keys2.push(key);
      }
      keys2.sort();
      const keysLen = keys2.length;
      for (let i2 = 0; i2 < keysLen; i2++) {
        const key = keys2[i2];
        stringBuilder.push(key + '="' + attrs[key] + '"');
      }
      const nodeName = this.nodeName.toLocaleLowerCase();
      const attrsString = stringBuilder.length > 0 ? " " + stringBuilder.join(" ") : "";
      return `<${nodeName}${attrsString}>${super.toString()}</${nodeName}>`;
    }
    removeAttribute(attributeName) {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          typeMapDelete(transaction, this, attributeName);
        });
      } else {
        this._prelimAttrs.delete(attributeName);
      }
    }
    setAttribute(attributeName, attributeValue) {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          typeMapSet(transaction, this, attributeName, attributeValue);
        });
      } else {
        this._prelimAttrs.set(attributeName, attributeValue);
      }
    }
    getAttribute(attributeName) {
      return typeMapGet(this, attributeName);
    }
    hasAttribute(attributeName) {
      return typeMapHas(this, attributeName);
    }
    getAttributes(snapshot) {
      return typeMapGetAll(this);
    }
    toDOM(_document = document, hooks = {}, binding) {
      const dom = _document.createElement(this.nodeName);
      const attrs = this.getAttributes();
      for (const key in attrs) {
        dom.setAttribute(key, attrs[key]);
      }
      typeListForEach(this, (yxml) => {
        dom.appendChild(yxml.toDOM(_document, hooks, binding));
      });
      if (binding !== void 0) {
        binding._createAssociation(dom, this);
      }
      return dom;
    }
    _write(encoder) {
      encoder.writeTypeRef(YXmlElementRefID);
      encoder.writeKey(this.nodeName);
    }
  };
  var YXmlEvent = class extends YEvent {
    constructor(target, subs, transaction) {
      super(target, transaction);
      this.childListChanged = false;
      this.attributesChanged = /* @__PURE__ */ new Set();
      subs.forEach((sub) => {
        if (sub === null) {
          this.childListChanged = true;
        } else {
          this.attributesChanged.add(sub);
        }
      });
    }
  };
  var YXmlText = class extends YText {
    get nextSibling() {
      const n2 = this._item ? this._item.next : null;
      return n2 ? n2.content.type : null;
    }
    get prevSibling() {
      const n2 = this._item ? this._item.prev : null;
      return n2 ? n2.content.type : null;
    }
    _copy() {
      return new YXmlText();
    }
    clone() {
      const text2 = new YXmlText();
      text2.applyDelta(this.toDelta());
      return text2;
    }
    toDOM(_document = document, hooks, binding) {
      const dom = _document.createTextNode(this.toString());
      if (binding !== void 0) {
        binding._createAssociation(dom, this);
      }
      return dom;
    }
    toString() {
      return this.toDelta().map((delta) => {
        const nestedNodes = [];
        for (const nodeName in delta.attributes) {
          const attrs = [];
          for (const key in delta.attributes[nodeName]) {
            attrs.push({ key, value: delta.attributes[nodeName][key] });
          }
          attrs.sort((a2, b2) => a2.key < b2.key ? -1 : 1);
          nestedNodes.push({ nodeName, attrs });
        }
        nestedNodes.sort((a2, b2) => a2.nodeName < b2.nodeName ? -1 : 1);
        let str = "";
        for (let i2 = 0; i2 < nestedNodes.length; i2++) {
          const node = nestedNodes[i2];
          str += `<${node.nodeName}`;
          for (let j2 = 0; j2 < node.attrs.length; j2++) {
            const attr = node.attrs[j2];
            str += ` ${attr.key}="${attr.value}"`;
          }
          str += ">";
        }
        str += delta.insert;
        for (let i2 = nestedNodes.length - 1; i2 >= 0; i2--) {
          str += `</${nestedNodes[i2].nodeName}>`;
        }
        return str;
      }).join("");
    }
    toJSON() {
      return this.toString();
    }
    _write(encoder) {
      encoder.writeTypeRef(YXmlTextRefID);
    }
  };
  var AbstractStruct = class {
    constructor(id, length3) {
      this.id = id;
      this.length = length3;
    }
    get deleted() {
      throw methodUnimplemented();
    }
    mergeWith(right) {
      return false;
    }
    write(encoder, offset, encodingRef) {
      throw methodUnimplemented();
    }
    integrate(transaction, offset) {
      throw methodUnimplemented();
    }
  };
  var structGCRefNumber = 0;
  var GC = class extends AbstractStruct {
    get deleted() {
      return true;
    }
    delete() {
    }
    mergeWith(right) {
      if (this.constructor !== right.constructor) {
        return false;
      }
      this.length += right.length;
      return true;
    }
    integrate(transaction, offset) {
      if (offset > 0) {
        this.id.clock += offset;
        this.length -= offset;
      }
      addStruct(transaction.doc.store, this);
    }
    write(encoder, offset) {
      encoder.writeInfo(structGCRefNumber);
      encoder.writeLen(this.length - offset);
    }
    getMissing(transaction, store) {
      return null;
    }
  };
  var ContentBinary = class {
    constructor(content) {
      this.content = content;
    }
    getLength() {
      return 1;
    }
    getContent() {
      return [this.content];
    }
    isCountable() {
      return true;
    }
    copy() {
      return new ContentBinary(this.content);
    }
    splice(offset) {
      throw methodUnimplemented();
    }
    mergeWith(right) {
      return false;
    }
    integrate(transaction, item) {
    }
    delete(transaction) {
    }
    gc(store) {
    }
    write(encoder, offset) {
      encoder.writeBuf(this.content);
    }
    getRef() {
      return 3;
    }
  };
  var ContentDeleted = class {
    constructor(len) {
      this.len = len;
    }
    getLength() {
      return this.len;
    }
    getContent() {
      return [];
    }
    isCountable() {
      return false;
    }
    copy() {
      return new ContentDeleted(this.len);
    }
    splice(offset) {
      const right = new ContentDeleted(this.len - offset);
      this.len = offset;
      return right;
    }
    mergeWith(right) {
      this.len += right.len;
      return true;
    }
    integrate(transaction, item) {
      addToDeleteSet(transaction.deleteSet, item.id.client, item.id.clock, this.len);
      item.markDeleted();
    }
    delete(transaction) {
    }
    gc(store) {
    }
    write(encoder, offset) {
      encoder.writeLen(this.len - offset);
    }
    getRef() {
      return 1;
    }
  };
  var createDocFromOpts = (guid, opts) => new Doc(__spreadProps(__spreadValues({ guid }, opts), { shouldLoad: opts.shouldLoad || opts.autoLoad || false }));
  var ContentDoc = class {
    constructor(doc2) {
      if (doc2._item) {
        console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid.");
      }
      this.doc = doc2;
      const opts = {};
      this.opts = opts;
      if (!doc2.gc) {
        opts.gc = false;
      }
      if (doc2.autoLoad) {
        opts.autoLoad = true;
      }
      if (doc2.meta !== null) {
        opts.meta = doc2.meta;
      }
    }
    getLength() {
      return 1;
    }
    getContent() {
      return [this.doc];
    }
    isCountable() {
      return true;
    }
    copy() {
      return new ContentDoc(createDocFromOpts(this.doc.guid, this.opts));
    }
    splice(offset) {
      throw methodUnimplemented();
    }
    mergeWith(right) {
      return false;
    }
    integrate(transaction, item) {
      this.doc._item = item;
      transaction.subdocsAdded.add(this.doc);
      if (this.doc.shouldLoad) {
        transaction.subdocsLoaded.add(this.doc);
      }
    }
    delete(transaction) {
      if (transaction.subdocsAdded.has(this.doc)) {
        transaction.subdocsAdded.delete(this.doc);
      } else {
        transaction.subdocsRemoved.add(this.doc);
      }
    }
    gc(store) {
    }
    write(encoder, offset) {
      encoder.writeString(this.doc.guid);
      encoder.writeAny(this.opts);
    }
    getRef() {
      return 9;
    }
  };
  var ContentEmbed = class {
    constructor(embed) {
      this.embed = embed;
    }
    getLength() {
      return 1;
    }
    getContent() {
      return [this.embed];
    }
    isCountable() {
      return true;
    }
    copy() {
      return new ContentEmbed(this.embed);
    }
    splice(offset) {
      throw methodUnimplemented();
    }
    mergeWith(right) {
      return false;
    }
    integrate(transaction, item) {
    }
    delete(transaction) {
    }
    gc(store) {
    }
    write(encoder, offset) {
      encoder.writeJSON(this.embed);
    }
    getRef() {
      return 5;
    }
  };
  var ContentFormat = class {
    constructor(key, value) {
      this.key = key;
      this.value = value;
    }
    getLength() {
      return 1;
    }
    getContent() {
      return [];
    }
    isCountable() {
      return false;
    }
    copy() {
      return new ContentFormat(this.key, this.value);
    }
    splice(offset) {
      throw methodUnimplemented();
    }
    mergeWith(right) {
      return false;
    }
    integrate(transaction, item) {
      item.parent._searchMarker = null;
    }
    delete(transaction) {
    }
    gc(store) {
    }
    write(encoder, offset) {
      encoder.writeKey(this.key);
      encoder.writeJSON(this.value);
    }
    getRef() {
      return 6;
    }
  };
  var ContentAny = class {
    constructor(arr) {
      this.arr = arr;
    }
    getLength() {
      return this.arr.length;
    }
    getContent() {
      return this.arr;
    }
    isCountable() {
      return true;
    }
    copy() {
      return new ContentAny(this.arr);
    }
    splice(offset) {
      const right = new ContentAny(this.arr.slice(offset));
      this.arr = this.arr.slice(0, offset);
      return right;
    }
    mergeWith(right) {
      this.arr = this.arr.concat(right.arr);
      return true;
    }
    integrate(transaction, item) {
    }
    delete(transaction) {
    }
    gc(store) {
    }
    write(encoder, offset) {
      const len = this.arr.length;
      encoder.writeLen(len - offset);
      for (let i2 = offset; i2 < len; i2++) {
        const c2 = this.arr[i2];
        encoder.writeAny(c2);
      }
    }
    getRef() {
      return 8;
    }
  };
  var ContentString = class {
    constructor(str) {
      this.str = str;
    }
    getLength() {
      return this.str.length;
    }
    getContent() {
      return this.str.split("");
    }
    isCountable() {
      return true;
    }
    copy() {
      return new ContentString(this.str);
    }
    splice(offset) {
      const right = new ContentString(this.str.slice(offset));
      this.str = this.str.slice(0, offset);
      const firstCharCode = this.str.charCodeAt(offset - 1);
      if (firstCharCode >= 55296 && firstCharCode <= 56319) {
        this.str = this.str.slice(0, offset - 1) + "\uFFFD";
        right.str = "\uFFFD" + right.str.slice(1);
      }
      return right;
    }
    mergeWith(right) {
      this.str += right.str;
      return true;
    }
    integrate(transaction, item) {
    }
    delete(transaction) {
    }
    gc(store) {
    }
    write(encoder, offset) {
      encoder.writeString(offset === 0 ? this.str : this.str.slice(offset));
    }
    getRef() {
      return 4;
    }
  };
  var YArrayRefID = 0;
  var YMapRefID = 1;
  var YTextRefID = 2;
  var YXmlElementRefID = 3;
  var YXmlFragmentRefID = 4;
  var YXmlTextRefID = 6;
  var ContentType = class {
    constructor(type) {
      this.type = type;
    }
    getLength() {
      return 1;
    }
    getContent() {
      return [this.type];
    }
    isCountable() {
      return true;
    }
    copy() {
      return new ContentType(this.type._copy());
    }
    splice(offset) {
      throw methodUnimplemented();
    }
    mergeWith(right) {
      return false;
    }
    integrate(transaction, item) {
      this.type._integrate(transaction.doc, item);
    }
    delete(transaction) {
      let item = this.type._start;
      while (item !== null) {
        if (!item.deleted) {
          item.delete(transaction);
        } else {
          transaction._mergeStructs.push(item);
        }
        item = item.right;
      }
      this.type._map.forEach((item2) => {
        if (!item2.deleted) {
          item2.delete(transaction);
        } else {
          transaction._mergeStructs.push(item2);
        }
      });
      transaction.changed.delete(this.type);
    }
    gc(store) {
      let item = this.type._start;
      while (item !== null) {
        item.gc(store, true);
        item = item.right;
      }
      this.type._start = null;
      this.type._map.forEach((item2) => {
        while (item2 !== null) {
          item2.gc(store, true);
          item2 = item2.left;
        }
      });
      this.type._map = /* @__PURE__ */ new Map();
    }
    write(encoder, offset) {
      this.type._write(encoder);
    }
    getRef() {
      return 7;
    }
  };
  var followRedone = (store, id) => {
    let nextID = id;
    let diff = 0;
    let item;
    do {
      if (diff > 0) {
        nextID = createID(nextID.client, nextID.clock + diff);
      }
      item = getItem(store, nextID);
      diff = nextID.clock - item.id.clock;
      nextID = item.redone;
    } while (nextID !== null && item instanceof Item);
    return {
      item,
      diff
    };
  };
  var keepItem = (item, keep) => {
    while (item !== null && item.keep !== keep) {
      item.keep = keep;
      item = item.parent._item;
    }
  };
  var splitItem = (transaction, leftItem, diff) => {
    const { client, clock } = leftItem.id;
    const rightItem = new Item(createID(client, clock + diff), leftItem, createID(client, clock + diff - 1), leftItem.right, leftItem.rightOrigin, leftItem.parent, leftItem.parentSub, leftItem.content.splice(diff));
    if (leftItem.deleted) {
      rightItem.markDeleted();
    }
    if (leftItem.keep) {
      rightItem.keep = true;
    }
    if (leftItem.redone !== null) {
      rightItem.redone = createID(leftItem.redone.client, leftItem.redone.clock + diff);
    }
    leftItem.right = rightItem;
    if (rightItem.right !== null) {
      rightItem.right.left = rightItem;
    }
    transaction._mergeStructs.push(rightItem);
    if (rightItem.parentSub !== null && rightItem.right === null) {
      rightItem.parent._map.set(rightItem.parentSub, rightItem);
    }
    leftItem.length = diff;
    return rightItem;
  };
  var redoItem = (transaction, item, redoitems, itemsToDelete) => {
    const doc2 = transaction.doc;
    const store = doc2.store;
    const ownClientID = doc2.clientID;
    const redone = item.redone;
    if (redone !== null) {
      return getItemCleanStart(transaction, redone);
    }
    let parentItem = item.parent._item;
    let left = null;
    let right;
    if (parentItem !== null && parentItem.deleted === true) {
      if (parentItem.redone === null && (!redoitems.has(parentItem) || redoItem(transaction, parentItem, redoitems, itemsToDelete) === null)) {
        return null;
      }
      while (parentItem.redone !== null) {
        parentItem = getItemCleanStart(transaction, parentItem.redone);
      }
    }
    const parentType = parentItem === null ? item.parent : parentItem.content.type;
    if (item.parentSub === null) {
      left = item.left;
      right = item;
      while (left !== null) {
        let leftTrace = left;
        while (leftTrace !== null && leftTrace.parent._item !== parentItem) {
          leftTrace = leftTrace.redone === null ? null : getItemCleanStart(transaction, leftTrace.redone);
        }
        if (leftTrace !== null && leftTrace.parent._item === parentItem) {
          left = leftTrace;
          break;
        }
        left = left.left;
      }
      while (right !== null) {
        let rightTrace = right;
        while (rightTrace !== null && rightTrace.parent._item !== parentItem) {
          rightTrace = rightTrace.redone === null ? null : getItemCleanStart(transaction, rightTrace.redone);
        }
        if (rightTrace !== null && rightTrace.parent._item === parentItem) {
          right = rightTrace;
          break;
        }
        right = right.right;
      }
    } else {
      right = null;
      if (item.right) {
        left = item;
        while (left !== null && left.right !== null && isDeleted(itemsToDelete, left.right.id)) {
          left = left.right;
        }
        while (left !== null && left.redone !== null) {
          left = getItemCleanStart(transaction, left.redone);
        }
        if (left === null || left.parent._item !== parentItem) {
          return null;
        }
        if (left && left.right !== null) {
          return null;
        }
      } else {
        left = parentType._map.get(item.parentSub) || null;
      }
    }
    const nextClock = getState(store, ownClientID);
    const nextId = createID(ownClientID, nextClock);
    const redoneItem = new Item(nextId, left, left && left.lastId, right, right && right.id, parentType, item.parentSub, item.content.copy());
    item.redone = nextId;
    keepItem(redoneItem, true);
    redoneItem.integrate(transaction, 0);
    return redoneItem;
  };
  var Item = class extends AbstractStruct {
    constructor(id, left, origin, right, rightOrigin, parent, parentSub, content) {
      super(id, content.getLength());
      this.origin = origin;
      this.left = left;
      this.right = right;
      this.rightOrigin = rightOrigin;
      this.parent = parent;
      this.parentSub = parentSub;
      this.redone = null;
      this.content = content;
      this.info = this.content.isCountable() ? BIT2 : 0;
    }
    set marker(isMarked) {
      if ((this.info & BIT4) > 0 !== isMarked) {
        this.info ^= BIT4;
      }
    }
    get marker() {
      return (this.info & BIT4) > 0;
    }
    get keep() {
      return (this.info & BIT1) > 0;
    }
    set keep(doKeep) {
      if (this.keep !== doKeep) {
        this.info ^= BIT1;
      }
    }
    get countable() {
      return (this.info & BIT2) > 0;
    }
    get deleted() {
      return (this.info & BIT3) > 0;
    }
    set deleted(doDelete) {
      if (this.deleted !== doDelete) {
        this.info ^= BIT3;
      }
    }
    markDeleted() {
      this.info |= BIT3;
    }
    getMissing(transaction, store) {
      if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= getState(store, this.origin.client)) {
        return this.origin.client;
      }
      if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= getState(store, this.rightOrigin.client)) {
        return this.rightOrigin.client;
      }
      if (this.parent && this.parent.constructor === ID && this.id.client !== this.parent.client && this.parent.clock >= getState(store, this.parent.client)) {
        return this.parent.client;
      }
      if (this.origin) {
        this.left = getItemCleanEnd(transaction, store, this.origin);
        this.origin = this.left.lastId;
      }
      if (this.rightOrigin) {
        this.right = getItemCleanStart(transaction, this.rightOrigin);
        this.rightOrigin = this.right.id;
      }
      if (this.left && this.left.constructor === GC || this.right && this.right.constructor === GC) {
        this.parent = null;
      }
      if (!this.parent) {
        if (this.left && this.left.constructor === Item) {
          this.parent = this.left.parent;
          this.parentSub = this.left.parentSub;
        }
        if (this.right && this.right.constructor === Item) {
          this.parent = this.right.parent;
          this.parentSub = this.right.parentSub;
        }
      } else if (this.parent.constructor === ID) {
        const parentItem = getItem(store, this.parent);
        if (parentItem.constructor === GC) {
          this.parent = null;
        } else {
          this.parent = parentItem.content.type;
        }
      }
      return null;
    }
    integrate(transaction, offset) {
      if (offset > 0) {
        this.id.clock += offset;
        this.left = getItemCleanEnd(transaction, transaction.doc.store, createID(this.id.client, this.id.clock - 1));
        this.origin = this.left.lastId;
        this.content = this.content.splice(offset);
        this.length -= offset;
      }
      if (this.parent) {
        if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
          let left = this.left;
          let o2;
          if (left !== null) {
            o2 = left.right;
          } else if (this.parentSub !== null) {
            o2 = this.parent._map.get(this.parentSub) || null;
            while (o2 !== null && o2.left !== null) {
              o2 = o2.left;
            }
          } else {
            o2 = this.parent._start;
          }
          const conflictingItems = /* @__PURE__ */ new Set();
          const itemsBeforeOrigin = /* @__PURE__ */ new Set();
          while (o2 !== null && o2 !== this.right) {
            itemsBeforeOrigin.add(o2);
            conflictingItems.add(o2);
            if (compareIDs(this.origin, o2.origin)) {
              if (o2.id.client < this.id.client) {
                left = o2;
                conflictingItems.clear();
              } else if (compareIDs(this.rightOrigin, o2.rightOrigin)) {
                break;
              }
            } else if (o2.origin !== null && itemsBeforeOrigin.has(getItem(transaction.doc.store, o2.origin))) {
              if (!conflictingItems.has(getItem(transaction.doc.store, o2.origin))) {
                left = o2;
                conflictingItems.clear();
              }
            } else {
              break;
            }
            o2 = o2.right;
          }
          this.left = left;
        }
        if (this.left !== null) {
          const right = this.left.right;
          this.right = right;
          this.left.right = this;
        } else {
          let r2;
          if (this.parentSub !== null) {
            r2 = this.parent._map.get(this.parentSub) || null;
            while (r2 !== null && r2.left !== null) {
              r2 = r2.left;
            }
          } else {
            r2 = this.parent._start;
            this.parent._start = this;
          }
          this.right = r2;
        }
        if (this.right !== null) {
          this.right.left = this;
        } else if (this.parentSub !== null) {
          this.parent._map.set(this.parentSub, this);
          if (this.left !== null) {
            this.left.delete(transaction);
          }
        }
        if (this.parentSub === null && this.countable && !this.deleted) {
          this.parent._length += this.length;
        }
        addStruct(transaction.doc.store, this);
        this.content.integrate(transaction, this);
        addChangedTypeToTransaction(transaction, this.parent, this.parentSub);
        if (this.parent._item !== null && this.parent._item.deleted || this.parentSub !== null && this.right !== null) {
          this.delete(transaction);
        }
      } else {
        new GC(this.id, this.length).integrate(transaction, 0);
      }
    }
    get next() {
      let n2 = this.right;
      while (n2 !== null && n2.deleted) {
        n2 = n2.right;
      }
      return n2;
    }
    get prev() {
      let n2 = this.left;
      while (n2 !== null && n2.deleted) {
        n2 = n2.left;
      }
      return n2;
    }
    get lastId() {
      return this.length === 1 ? this.id : createID(this.id.client, this.id.clock + this.length - 1);
    }
    mergeWith(right) {
      if (this.constructor === right.constructor && compareIDs(right.origin, this.lastId) && this.right === right && compareIDs(this.rightOrigin, right.rightOrigin) && this.id.client === right.id.client && this.id.clock + this.length === right.id.clock && this.deleted === right.deleted && this.redone === null && right.redone === null && this.content.constructor === right.content.constructor && this.content.mergeWith(right.content)) {
        const searchMarker = this.parent._searchMarker;
        if (searchMarker) {
          searchMarker.forEach((marker) => {
            if (marker.p === right) {
              marker.p = this;
              if (!this.deleted && this.countable) {
                marker.index -= this.length;
              }
            }
          });
        }
        if (right.keep) {
          this.keep = true;
        }
        this.right = right.right;
        if (this.right !== null) {
          this.right.left = this;
        }
        this.length += right.length;
        return true;
      }
      return false;
    }
    delete(transaction) {
      if (!this.deleted) {
        const parent = this.parent;
        if (this.countable && this.parentSub === null) {
          parent._length -= this.length;
        }
        this.markDeleted();
        addToDeleteSet(transaction.deleteSet, this.id.client, this.id.clock, this.length);
        addChangedTypeToTransaction(transaction, parent, this.parentSub);
        this.content.delete(transaction);
      }
    }
    gc(store, parentGCd) {
      if (!this.deleted) {
        throw unexpectedCase();
      }
      this.content.gc(store);
      if (parentGCd) {
        replaceStruct(store, this, new GC(this.id, this.length));
      } else {
        this.content = new ContentDeleted(this.length);
      }
    }
    write(encoder, offset) {
      const origin = offset > 0 ? createID(this.id.client, this.id.clock + offset - 1) : this.origin;
      const rightOrigin = this.rightOrigin;
      const parentSub = this.parentSub;
      const info = this.content.getRef() & BITS5 | (origin === null ? 0 : BIT8) | (rightOrigin === null ? 0 : BIT7) | (parentSub === null ? 0 : BIT6);
      encoder.writeInfo(info);
      if (origin !== null) {
        encoder.writeLeftID(origin);
      }
      if (rightOrigin !== null) {
        encoder.writeRightID(rightOrigin);
      }
      if (origin === null && rightOrigin === null) {
        const parent = this.parent;
        if (parent._item !== void 0) {
          const parentItem = parent._item;
          if (parentItem === null) {
            const ykey = findRootTypeKey(parent);
            encoder.writeParentInfo(true);
            encoder.writeString(ykey);
          } else {
            encoder.writeParentInfo(false);
            encoder.writeLeftID(parentItem.id);
          }
        } else if (parent.constructor === String) {
          encoder.writeParentInfo(true);
          encoder.writeString(parent);
        } else if (parent.constructor === ID) {
          encoder.writeParentInfo(false);
          encoder.writeLeftID(parent);
        } else {
          unexpectedCase();
        }
        if (parentSub !== null) {
          encoder.writeString(parentSub);
        }
      }
      this.content.write(encoder, offset);
    }
  };
  var glo = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  var importIdentifier = "__ $YJS$ __";
  if (glo[importIdentifier] === true) {
    console.warn("Yjs was already imported. Importing different versions of Yjs often leads to issues.");
  }
  glo[importIdentifier] = true;

  // src/utils/object.ts
  function isObject2(o2) {
    return Object.prototype.toString.call(o2) === "[object Object]";
  }
  function isPlainObject2(o2) {
    if (!isObject2(o2)) {
      return false;
    }
    const ctor = o2.constructor;
    if (ctor === void 0) {
      return true;
    }
    const prot = ctor.prototype;
    if (isObject2(prot) === false) {
      return false;
    }
    if (prot.hasOwnProperty("isPrototypeOf") === false) {
      return false;
    }
    return true;
  }
  function deepEquals(node, another) {
    for (const key in node) {
      const a2 = node[key];
      const b2 = another[key];
      if (isPlainObject2(a2) && isPlainObject2(b2)) {
        if (!deepEquals(a2, b2)) {
          return false;
        }
      } else if (Array.isArray(a2) && Array.isArray(b2)) {
        if (a2.length !== b2.length)
          return false;
        for (let i2 = 0; i2 < a2.length; i2++) {
          if (a2[i2] !== b2[i2]) {
            return false;
          }
        }
      } else if (a2 !== b2) {
        return false;
      }
    }
    for (const key in another) {
      if (node[key] === void 0 && another[key] !== void 0) {
        return false;
      }
    }
    return true;
  }
  function pick(obj, ...keys2) {
    return Object.fromEntries(Object.entries(obj).filter(([key]) => keys2.includes(key)));
  }
  function omit(obj, ...keys2) {
    return Object.fromEntries(Object.entries(obj).filter(([key]) => !keys2.includes(key)));
  }
  function omitNullEntries(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([, value]) => value !== null));
  }

  // src/utils/delta.ts
  function normalizeInsertDelta(delta) {
    var _a, _b;
    const normalized = [];
    for (const element2 of delta) {
      if (typeof element2.insert === "string" && element2.insert.length === 0) {
        continue;
      }
      const prev = normalized[normalized.length - 1];
      if (!prev || typeof prev.insert !== "string" || typeof element2.insert !== "string") {
        normalized.push(element2);
        continue;
      }
      const merge = prev.attributes === element2.attributes || !prev.attributes === !element2.attributes && deepEquals((_a = prev.attributes) != null ? _a : {}, (_b = element2.attributes) != null ? _b : {});
      if (merge) {
        prev.insert += element2.insert;
        continue;
      }
      normalized.push(element2);
    }
    return normalized;
  }
  function yTextToInsertDelta(yText) {
    return normalizeInsertDelta(yText.toDelta());
  }
  function getInsertLength({ insert }) {
    return typeof insert === "string" ? insert.length : 1;
  }
  function getInsertDeltaLength(delta) {
    return delta.reduce((curr, element2) => curr + getInsertLength(element2), 0);
  }
  function sliceInsertDelta(delta, start, length3) {
    if (length3 < 1) {
      return [];
    }
    let currentOffset = 0;
    const sliced = [];
    const end = start + length3;
    for (let i2 = 0; i2 < delta.length; i2++) {
      if (currentOffset >= end) {
        break;
      }
      const element2 = delta[i2];
      const elementLength = getInsertLength(element2);
      if (currentOffset + elementLength <= start) {
        currentOffset += elementLength;
        continue;
      }
      if (typeof element2.insert !== "string") {
        currentOffset += elementLength;
        sliced.push(element2);
        continue;
      }
      const startOffset = Math.max(0, start - currentOffset);
      const endOffset = Math.min(elementLength, elementLength - (currentOffset + elementLength - end));
      sliced.push(__spreadProps(__spreadValues({}, element2), {
        insert: element2.insert.slice(startOffset, endOffset)
      }));
      currentOffset += elementLength;
    }
    return sliced;
  }

  // src/utils/slate.ts
  function getProperties(node) {
    return omit(node, Text.isText(node) ? "text" : "children");
  }

  // src/utils/convert.ts
  function yTextToSlateElement(yText) {
    const delta = yTextToInsertDelta(yText);
    const children = delta.length > 0 ? delta.map(deltaInsertToSlateNode) : [{ text: "" }];
    return __spreadProps(__spreadValues({}, yText.getAttributes()), { children });
  }
  function deltaInsertToSlateNode(insert) {
    if (typeof insert.insert === "string") {
      return __spreadProps(__spreadValues({}, insert.attributes), { text: insert.insert });
    }
    return yTextToSlateElement(insert.insert);
  }
  function slateNodesToInsertDelta(nodes) {
    return nodes.map((node) => {
      if (Text.isText(node)) {
        return { insert: node.text, attributes: getProperties(node) };
      }
      return { insert: slateElementToYText(node) };
    });
  }
  function slateElementToYText(_a) {
    var _b = _a, {
      children
    } = _b, attributes = __objRest(_b, [
      "children"
    ]);
    const yElement = new YXmlText();
    Object.entries(attributes).forEach(([key, value]) => {
      yElement.setAttribute(key, value);
    });
    yElement.applyDelta(slateNodesToInsertDelta(children), { sanitize: false });
    return yElement;
  }

  // src/utils/location.ts
  function getSlateNodeYLength(node) {
    if (!node) {
      return 0;
    }
    return Text.isText(node) ? node.text.length : 1;
  }
  function slatePathOffsetToYOffset(element2, pathOffset) {
    return element2.children.slice(0, pathOffset).reduce((yOffset, node) => yOffset + getSlateNodeYLength(node), 0);
  }
  function getYTarget(yRoot, slateRoot, path) {
    var _a;
    if (path.length === 0) {
      throw new Error("Path has to a have a length >= 1");
    }
    if (Text.isText(slateRoot)) {
      throw new Error("Cannot descent into slate text");
    }
    const [pathOffset, ...childPath] = path;
    const yOffset = slatePathOffsetToYOffset(slateRoot, pathOffset);
    const targetNode = slateRoot.children[pathOffset];
    const delta = yTextToInsertDelta(yRoot);
    const targetLength = getSlateNodeYLength(targetNode);
    const targetDelta = sliceInsertDelta(delta, yOffset, targetLength);
    if (targetDelta.length > 1) {
      throw new Error("Path doesn't match yText, yTarget spans multiple nodes");
    }
    const yTarget = (_a = targetDelta[0]) == null ? void 0 : _a.insert;
    if (childPath.length > 0) {
      if (!(yTarget instanceof YXmlText)) {
        throw new Error("Path doesn't match yText, cannot descent into non-yText");
      }
      return getYTarget(yTarget, targetNode, childPath);
    }
    return {
      yParent: yRoot,
      textRange: { start: yOffset, end: yOffset + targetLength },
      yTarget: yTarget instanceof YXmlText ? yTarget : void 0,
      slateParent: slateRoot,
      slateTarget: targetNode,
      targetDelta
    };
  }
  function yOffsetToSlateOffsets(parent, yOffset, opts = {}) {
    const { assoc = 0, insert = false } = opts;
    let currentOffset = 0;
    let lastNonEmptyPathOffset = 0;
    for (let pathOffset = 0; pathOffset < parent.children.length; pathOffset++) {
      const child2 = parent.children[pathOffset];
      const nodeLength = Text.isText(child2) ? child2.text.length : 1;
      if (nodeLength > 0) {
        lastNonEmptyPathOffset = pathOffset;
      }
      const endOffset = currentOffset + nodeLength;
      if (nodeLength > 0 && (assoc >= 0 ? endOffset > yOffset : endOffset >= yOffset)) {
        return [pathOffset, yOffset - currentOffset];
      }
      currentOffset += nodeLength;
    }
    if (yOffset > currentOffset + (insert ? 1 : 0)) {
      throw new Error("yOffset out of bounds");
    }
    if (insert) {
      return [parent.children.length, 0];
    }
    const child = parent.children[lastNonEmptyPathOffset];
    const textOffset = Text.isText(child) ? child.text.length : 1;
    return [lastNonEmptyPathOffset, textOffset];
  }
  function getSlatePath(sharedRoot, slateRoot, yText) {
    const yNodePath = [yText];
    while (yNodePath[0] !== sharedRoot) {
      const { parent: yParent } = yNodePath[0];
      if (!yParent) {
        throw new Error("yText isn't a descendant of root element");
      }
      if (!(yParent instanceof YXmlText)) {
        throw new Error("Unexpected y parent type");
      }
      yNodePath.unshift(yParent);
    }
    if (yNodePath.length < 2) {
      return [];
    }
    let slateParent = slateRoot;
    return yNodePath.reduce((path, yParent, idx) => {
      const yChild = yNodePath[idx + 1];
      if (!yChild) {
        return path;
      }
      let yOffset = 0;
      const currentDelta = yTextToInsertDelta(yParent);
      for (const element2 of currentDelta) {
        if (element2.insert === yChild) {
          break;
        }
        yOffset += typeof element2.insert === "string" ? element2.insert.length : 1;
      }
      if (Text.isText(slateParent)) {
        throw new Error("Cannot descent into slate text");
      }
      const [pathOffset] = yOffsetToSlateOffsets(slateParent, yOffset);
      slateParent = slateParent.children[pathOffset];
      return path.concat(pathOffset);
    }, []);
  }

  // src/applyToSlate/textEvent.ts
  function applyDelta(node, slatePath, delta) {
    const ops = [];
    let yOffset = delta.reduce((length3, change) => {
      if ("retain" in change) {
        return length3 + change.retain;
      }
      if ("delete" in change) {
        return length3 + change.delete;
      }
      return length3;
    }, 0);
    delta.reverse().forEach((change) => {
      var _a;
      if ("attributes" in change && "retain" in change) {
        const [startPathOffset, startTextOffset] = yOffsetToSlateOffsets(node, yOffset - change.retain);
        const [endPathOffset, endTextOffset] = yOffsetToSlateOffsets(node, yOffset, { assoc: -1 });
        for (let pathOffset = endPathOffset; pathOffset >= startPathOffset; pathOffset--) {
          const child = node.children[pathOffset];
          const childPath = [...slatePath, pathOffset];
          if (!Text.isText(child)) {
            continue;
          }
          const newProperties = change.attributes;
          const properties = pick(node, ...Object.keys(change.attributes));
          if (pathOffset === startPathOffset || pathOffset === endPathOffset) {
            const start = pathOffset === startPathOffset ? startTextOffset : 0;
            const end = pathOffset === endPathOffset ? endTextOffset : child.text.length;
            if (end !== child.text.length) {
              ops.push({
                type: "split_node",
                path: childPath,
                position: end,
                properties: getProperties(child)
              });
            }
            if (start !== 0) {
              ops.push({
                type: "split_node",
                path: childPath,
                position: start,
                properties: omitNullEntries(__spreadValues(__spreadValues({}, getProperties(child)), newProperties))
              });
              continue;
            }
          }
          ops.push({
            type: "set_node",
            newProperties,
            path: childPath,
            properties
          });
        }
      }
      if ("retain" in change) {
        yOffset -= change.retain;
      }
      if ("delete" in change) {
        const [startPathOffset, startTextOffset] = yOffsetToSlateOffsets(node, yOffset - change.delete);
        const [endPathOffset, endTextOffset] = yOffsetToSlateOffsets(node, yOffset, { assoc: -1 });
        for (let pathOffset = endTextOffset === 0 ? endPathOffset - 1 : endPathOffset; pathOffset >= startPathOffset; pathOffset--) {
          const child = node.children[pathOffset];
          const childPath = [...slatePath, pathOffset];
          if (Text.isText(child) && (pathOffset === startPathOffset || pathOffset === endPathOffset)) {
            const start = pathOffset === startPathOffset ? startTextOffset : 0;
            const end = pathOffset === endPathOffset ? endTextOffset : child.text.length;
            ops.push({
              type: "remove_text",
              offset: start,
              text: child.text.slice(start, end),
              path: childPath
            });
            yOffset -= end - start;
            continue;
          }
          ops.push({
            type: "remove_node",
            node: child,
            path: childPath
          });
          yOffset -= getSlateNodeYLength(child);
        }
        return;
      }
      if ("insert" in change) {
        const [pathOffset, textOffset] = yOffsetToSlateOffsets(node, yOffset, {
          insert: true
        });
        const child = node.children[pathOffset];
        const childPath = [...slatePath, pathOffset];
        if (Text.isText(child)) {
          const lastOp = ops[ops.length - 1];
          const currentProps = lastOp != null && lastOp.type === "insert_node" ? lastOp.node : getProperties(child);
          let lastPath = [];
          if (lastOp != null && (lastOp.type === "insert_node" || lastOp.type === "insert_text" || lastOp.type === "split_node" || lastOp.type === "set_node")) {
            lastPath = lastOp.path;
          }
          if (typeof change.insert === "string" && deepEquals((_a = change.attributes) != null ? _a : {}, currentProps) && Path.equals(childPath, lastPath)) {
            return ops.push({
              type: "insert_text",
              offset: textOffset,
              text: change.insert,
              path: childPath
            });
          }
          const toInsert = deltaInsertToSlateNode(change);
          if (textOffset === 0) {
            return ops.push({
              type: "insert_node",
              path: childPath,
              node: toInsert
            });
          }
          if (textOffset < child.text.length) {
            ops.push({
              type: "split_node",
              path: childPath,
              position: textOffset,
              properties: getProperties(child)
            });
          }
          return ops.push({
            type: "insert_node",
            path: Path.next(childPath),
            node: toInsert
          });
        }
        return ops.push({
          type: "insert_node",
          path: childPath,
          node: deltaInsertToSlateNode(change)
        });
      }
    });
    return ops;
  }
  function translateYTextEvent(sharedRoot, editor, event) {
    const { target, changes } = event;
    const delta = event.delta;
    if (!(target instanceof YXmlText)) {
      throw new Error("Unexpected target node type");
    }
    const ops = [];
    const slatePath = getSlatePath(sharedRoot, editor, target);
    const targetElement = Node.get(editor, slatePath);
    if (Text.isText(targetElement)) {
      throw new Error("Cannot apply yTextEvent to text node");
    }
    const keyChanges = Array.from(changes.keys.entries());
    if (slatePath.length > 0 && keyChanges.length > 0) {
      const newProperties = Object.fromEntries(keyChanges.map(([key, info]) => [
        key,
        info.action === "delete" ? null : target.getAttribute(key)
      ]));
      const properties = Object.fromEntries(keyChanges.map(([key]) => [key, targetElement[key]]));
      ops.push({ type: "set_node", newProperties, properties, path: slatePath });
    }
    if (delta.length > 0) {
      ops.push(...applyDelta(targetElement, slatePath, delta));
    }
    return ops;
  }

  // src/applyToSlate/index.ts
  function translateYjsEvent(sharedRoot, editor, event) {
    if (event instanceof YTextEvent) {
      return translateYTextEvent(sharedRoot, editor, event);
    }
    throw new Error("Unexpected Y event type");
  }
  function applyYjsEvents(sharedRoot, editor, events) {
    Editor.withoutNormalizing(editor, () => {
      events.forEach((event) => {
        translateYjsEvent(sharedRoot, editor, event).forEach((op) => {
          editor.apply(op);
        });
      });
    });
  }

  // src/applyToYjs/node/insertNode.ts
  function insertNode(sharedRoot, slateRoot, op) {
    const { yParent, textRange } = getYTarget(sharedRoot, slateRoot, op.path);
    if (Text.isText(op.node)) {
      return yParent.insert(textRange.start, op.node.text, getProperties(op.node));
    }
    yParent.insertEmbed(textRange.start, slateElementToYText(op.node));
  }

  // src/utils/clone.ts
  function cloneInsertDeltaDeep(delta) {
    return delta.map((element2) => {
      if (typeof element2.insert === "string") {
        return element2;
      }
      return __spreadProps(__spreadValues({}, element2), { insert: cloneDeep(element2.insert) });
    });
  }
  function cloneDeep(yText) {
    const clone = new YXmlText();
    const attributes = yText.getAttributes();
    Object.entries(attributes).forEach(([key, value]) => {
      clone.setAttribute(key, value);
    });
    clone.applyDelta(cloneInsertDeltaDeep(yTextToInsertDelta(yText)), {
      sanitize: false
    });
    return clone;
  }

  // src/utils/yjs.ts
  function assertDocumentAttachment(sharedType) {
    if (!sharedType.doc) {
      throw new Error("shared type isn't attached to a document");
    }
  }

  // src/utils/position.ts
  var STORED_POSITION_PREFIX = "__slateYjsStoredPosition_";
  function slatePointToRelativePosition(sharedRoot, slateRoot, point) {
    const { yTarget, yParent, textRange } = getYTarget(sharedRoot, slateRoot, point.path);
    if (yTarget) {
      throw new Error("Slate point points to a non-text element inside sharedRoot");
    }
    const index = textRange.start + point.offset;
    return createRelativePositionFromTypeIndex(yParent, index, index === textRange.end ? -1 : 0);
  }
  function absolutePositionToSlatePoint(sharedRoot, slateRoot, { type, index, assoc }) {
    if (!(type instanceof YXmlText)) {
      throw new Error("Absolute position points to a non-XMLText");
    }
    const parentPath = getSlatePath(sharedRoot, slateRoot, type);
    const parent = Node.get(slateRoot, parentPath);
    if (Text.isText(parent)) {
      throw new Error("Absolute position doesn't match slateRoot, cannot descent into text");
    }
    const [pathOffset, textOffset] = yOffsetToSlateOffsets(parent, index, {
      assoc
    });
    const target = parent.children[pathOffset];
    if (!Text.isText(target)) {
      return null;
    }
    return { path: [...parentPath, pathOffset], offset: textOffset };
  }
  function relativePositionToSlatePoint(sharedRoot, slateRoot, pos) {
    if (!sharedRoot.doc) {
      throw new Error("sharedRoot isn't attach to a yDoc");
    }
    const absPos = createAbsolutePositionFromRelativePosition(pos, sharedRoot.doc);
    return absPos && absolutePositionToSlatePoint(sharedRoot, slateRoot, absPos);
  }
  function getStoredPosition(sharedRoot, key) {
    const rawPosition = sharedRoot.getAttribute(STORED_POSITION_PREFIX + key);
    if (!rawPosition) {
      return null;
    }
    return decodeRelativePosition(rawPosition);
  }
  function getStoredPositions(sharedRoot) {
    return Object.fromEntries(Object.entries(sharedRoot.getAttributes()).filter(([key]) => key.startsWith(STORED_POSITION_PREFIX)).map(([key, position]) => [
      key.slice(STORED_POSITION_PREFIX.length),
      createRelativePositionFromJSON(position)
    ]));
  }
  function getStoredPositionsAbsolute(sharedRoot) {
    assertDocumentAttachment(sharedRoot);
    return Object.fromEntries(Object.entries(sharedRoot.getAttributes()).filter(([key]) => key.startsWith(STORED_POSITION_PREFIX)).map(([key, position]) => [
      key.slice(STORED_POSITION_PREFIX.length),
      createAbsolutePositionFromRelativePosition(decodeRelativePosition(position), sharedRoot.doc)
    ]).filter(([, position]) => position));
  }
  function removeStoredPosition(sharedRoot, key) {
    sharedRoot.removeAttribute(STORED_POSITION_PREFIX + key);
  }
  function setStoredPosition(sharedRoot, key, position) {
    sharedRoot.setAttribute(STORED_POSITION_PREFIX + key, encodeRelativePosition(position));
  }
  function getAbsolutePositionsInTextRange(absolutePositions, yTarget, textRange) {
    return Object.fromEntries(Object.entries(absolutePositions).filter(([, position]) => {
      if (position.type !== yTarget) {
        return false;
      }
      if (!textRange) {
        return true;
      }
      return position.assoc >= 0 ? position.index >= textRange.start && position.index < textRange.end : position.index > textRange.start && position.index >= textRange.end;
    }));
  }
  function getAbsolutePositionsInYText(absolutePositions, yText, parentPath = "") {
    const positions = {
      [parentPath]: getAbsolutePositionsInTextRange(absolutePositions, yText)
    };
    const insertDelta = yTextToInsertDelta(yText);
    insertDelta.forEach(({ insert }, i2) => {
      if (insert instanceof YXmlText) {
        Object.assign(positions, getAbsolutePositionsInYText(absolutePositions, insert, parentPath ? `${parentPath}.${i2}` : i2.toString()));
      }
    });
    return positions;
  }
  function getStoredPositionsInDeltaAbsolute(sharedRoot, yText, delta, deltaOffset = 0) {
    const absolutePositions = getStoredPositionsAbsolute(sharedRoot);
    const positions = {
      "": getAbsolutePositionsInTextRange(absolutePositions, yText, {
        start: deltaOffset,
        end: deltaOffset + getInsertDeltaLength(delta)
      })
    };
    delta.forEach(({ insert }, i2) => {
      if (insert instanceof YXmlText) {
        Object.assign(positions, getAbsolutePositionsInYText(absolutePositions, insert, i2.toString()));
      }
    });
    return positions;
  }
  function restoreStoredPositionsWithDeltaAbsolute(sharedRoot, yText, absolutePositions, delta, newDeltaOffset = 0, previousDeltaOffset = 0, path = "") {
    const toRestore = absolutePositions[path];
    if (toRestore) {
      Object.entries(toRestore).forEach(([key, position]) => {
        setStoredPosition(sharedRoot, key, createRelativePositionFromTypeIndex(yText, position.index - previousDeltaOffset + newDeltaOffset, position.assoc));
      });
    }
    delta.forEach(({ insert }, i2) => {
      if (insert instanceof YXmlText) {
        restoreStoredPositionsWithDeltaAbsolute(sharedRoot, insert, absolutePositions, yTextToInsertDelta(insert), 0, 0, path ? `${path}.${i2}` : i2.toString());
      }
    });
  }
  function slateRangeToRelativeRange(sharedRoot, slateRoot, range) {
    return {
      anchor: slatePointToRelativePosition(sharedRoot, slateRoot, range.anchor),
      focus: slatePointToRelativePosition(sharedRoot, slateRoot, range.focus)
    };
  }
  function relativeRangeToSlateRange(sharedRoot, slateRoot, range) {
    const anchor = relativePositionToSlatePoint(sharedRoot, slateRoot, range.anchor);
    if (!anchor) {
      return null;
    }
    const focus = relativePositionToSlatePoint(sharedRoot, slateRoot, range.focus);
    if (!focus) {
      return null;
    }
    return { anchor, focus };
  }

  // src/applyToYjs/node/mergeNode.ts
  function mergeNode(sharedRoot, slateRoot, op) {
    const target = getYTarget(sharedRoot, slateRoot, op.path);
    const prev = getYTarget(target.yParent, target.slateParent, Path.previous(op.path.slice(-1)));
    if (!target.yTarget !== !prev.yTarget) {
      throw new Error("Cannot merge y text with y element");
    }
    if (!prev.yTarget || !target.yTarget) {
      const { yParent: parent, textRange, slateTarget } = target;
      if (!slateTarget) {
        throw new Error("Expected Slate target node for merge op.");
      }
      const prevSibling = Node.get(slateRoot, Path.previous(op.path));
      if (!Text.isText(prevSibling)) {
        throw new Error("Path points to Y.Text but not a Slate text node.");
      }
      const targetProps = getProperties(slateTarget);
      const prevSiblingProps = getProperties(prevSibling);
      const unsetProps = Object.keys(targetProps).reduce((acc, key) => {
        const prevSiblingHasProp = key in prevSiblingProps;
        return prevSiblingHasProp ? acc : __spreadProps(__spreadValues({}, acc), { [key]: null });
      }, {});
      return parent.format(textRange.start, textRange.end - textRange.start, __spreadValues(__spreadValues({}, unsetProps), prevSiblingProps));
    }
    const deltaApplyYOffset = prev.yTarget.length;
    const targetDelta = yTextToInsertDelta(target.yTarget);
    const clonedDelta = cloneInsertDeltaDeep(targetDelta);
    const storedPositions = getStoredPositionsInDeltaAbsolute(sharedRoot, target.yTarget, targetDelta, deltaApplyYOffset);
    const applyDelta2 = [{ retain: deltaApplyYOffset }, ...clonedDelta];
    prev.yTarget.applyDelta(applyDelta2, {
      sanitize: false
    });
    target.yParent.delete(target.textRange.start, target.textRange.end - target.textRange.start);
    restoreStoredPositionsWithDeltaAbsolute(sharedRoot, prev.yTarget, storedPositions, clonedDelta, deltaApplyYOffset);
  }

  // src/applyToYjs/node/moveNode.ts
  function moveNode(sharedRoot, slateRoot, op) {
    const newParentPath = Path.parent(op.newPath);
    const newPathOffset = op.newPath[op.newPath.length - 1];
    const parent = Node.get(slateRoot, newParentPath);
    if (Text.isText(parent)) {
      throw new Error("Cannot move slate node into text element");
    }
    const normalizedNewPath = [
      ...newParentPath,
      Math.min(newPathOffset, parent.children.length)
    ];
    const origin = getYTarget(sharedRoot, slateRoot, op.path);
    const target = getYTarget(sharedRoot, slateRoot, normalizedNewPath);
    const insertDelta = cloneInsertDeltaDeep(origin.targetDelta);
    const storedPositions = getStoredPositionsInDeltaAbsolute(sharedRoot, origin.yParent, origin.targetDelta);
    origin.yParent.delete(origin.textRange.start, origin.textRange.end - origin.textRange.start);
    const targetLength = getInsertDeltaLength(yTextToInsertDelta(target.yParent));
    const deltaApplyYOffset = Math.min(target.textRange.start, targetLength);
    const applyDelta2 = [{ retain: deltaApplyYOffset }, ...insertDelta];
    target.yParent.applyDelta(applyDelta2, { sanitize: false });
    restoreStoredPositionsWithDeltaAbsolute(sharedRoot, target.yParent, storedPositions, insertDelta, deltaApplyYOffset, origin.textRange.start);
  }

  // src/applyToYjs/node/removeNode.ts
  function removeNode(sharedRoot, slateRoot, op) {
    const { yParent: parent, textRange } = getYTarget(sharedRoot, slateRoot, op.path);
    parent.delete(textRange.start, textRange.end - textRange.start);
  }

  // src/applyToYjs/node/setNode.ts
  function setNode(sharedRoot, slateRoot, op) {
    const { yTarget, textRange, yParent } = getYTarget(sharedRoot, slateRoot, op.path);
    if (yTarget) {
      Object.entries(op.newProperties).forEach(([key, value]) => {
        if (value === null) {
          return yTarget.removeAttribute(key);
        }
        yTarget.setAttribute(key, value);
      });
      return Object.entries(op.properties).forEach(([key]) => {
        if (!op.newProperties.hasOwnProperty(key)) {
          yTarget.removeAttribute(key);
        }
      });
    }
    const unset = Object.fromEntries(Object.keys(op.properties).map((key) => [key, null]));
    const newProperties = __spreadValues(__spreadValues({}, unset), op.newProperties);
    yParent.format(textRange.start, textRange.end - textRange.start, newProperties);
  }

  // src/applyToYjs/node/splitNode.ts
  function splitNode(sharedRoot, slateRoot, op) {
    const target = getYTarget(sharedRoot, slateRoot, op.path);
    if (!target.slateTarget) {
      throw new Error("Y target without corresponding slate node");
    }
    if (!target.yTarget) {
      if (!Text.isText(target.slateTarget)) {
        throw new Error("Mismatch node type between y target and slate node");
      }
      const unset = {};
      target.targetDelta.forEach((element2) => {
        if (element2.attributes) {
          Object.keys(element2.attributes).forEach((key) => {
            unset[key] = null;
          });
        }
      });
      return target.yParent.format(target.textRange.start, target.textRange.end - target.textRange.start, __spreadValues(__spreadValues({}, unset), op.properties));
    }
    if (Text.isText(target.slateTarget)) {
      throw new Error("Mismatch node type between y target and slate node");
    }
    const splitTarget = getYTarget(target.yTarget, target.slateTarget, [
      op.position
    ]);
    const ySplitOffset = target.slateTarget.children.slice(0, op.position).reduce((length4, child) => length4 + getSlateNodeYLength(child), 0);
    const length3 = target.slateTarget.children.reduce((current, child) => current + getSlateNodeYLength(child), 0);
    const splitDelta = sliceInsertDelta(yTextToInsertDelta(target.yTarget), ySplitOffset, length3 - ySplitOffset);
    const clonedDelta = cloneInsertDeltaDeep(splitDelta);
    const storedPositions = getStoredPositionsInDeltaAbsolute(sharedRoot, target.yTarget, splitDelta, ySplitOffset);
    const toInsert = new YXmlText();
    toInsert.applyDelta(clonedDelta, {
      sanitize: false
    });
    Object.entries(op.properties).forEach(([key, value]) => {
      toInsert.setAttribute(key, value);
    });
    target.yTarget.delete(splitTarget.textRange.start, target.yTarget.length - splitTarget.textRange.start);
    target.yParent.insertEmbed(target.textRange.end, toInsert);
    restoreStoredPositionsWithDeltaAbsolute(sharedRoot, toInsert, storedPositions, clonedDelta, 0, ySplitOffset);
  }

  // src/applyToYjs/node/index.ts
  var NODE_MAPPER = {
    insert_node: insertNode,
    remove_node: removeNode,
    set_node: setNode,
    merge_node: mergeNode,
    move_node: moveNode,
    split_node: splitNode
  };

  // src/applyToYjs/text/insertText.ts
  function insertText2(sharedRoot, slateRoot, op) {
    const { yParent: target, textRange } = getYTarget(sharedRoot, slateRoot, op.path);
    const targetNode = Node.get(slateRoot, op.path);
    if (!Text.isText(targetNode)) {
      throw new Error("Cannot insert text into non-text node");
    }
    target.insert(textRange.start + op.offset, op.text, getProperties(targetNode));
  }

  // src/applyToYjs/text/removeText.ts
  function removeText(sharedRoot, slateRoot, op) {
    const { yParent: target, textRange } = getYTarget(sharedRoot, slateRoot, op.path);
    target.delete(textRange.start + op.offset, op.text.length);
  }

  // src/applyToYjs/text/index.ts
  var TEXT_MAPPER = {
    insert_text: insertText2,
    remove_text: removeText
  };

  // src/applyToYjs/index.ts
  var NOOP = () => {
  };
  var opMappers = __spreadProps(__spreadValues(__spreadValues({}, TEXT_MAPPER), NODE_MAPPER), {
    set_selection: NOOP
  });
  function applySlateOp(sharedRoot, slateRoot, op) {
    const apply = opMappers[op.type];
    if (!apply) {
      throw new Error(`Unknown operation: ${op.type}`);
    }
    apply(sharedRoot, slateRoot, op);
  }

  // src/plugins/withYjs.ts
  var DEFAULT_LOCAL_ORIGIN = Symbol("slate-yjs-operation");
  var DEFAULT_POSITION_STORAGE_ORIGIN = Symbol("slate-yjs-position-storage");
  var ORIGIN = /* @__PURE__ */ new WeakMap();
  var LOCAL_CHANGES = /* @__PURE__ */ new WeakMap();
  var CONNECTED = /* @__PURE__ */ new WeakSet();
  var YjsEditor = {
    isYjsEditor(value) {
      return Editor.isEditor(value) && value.sharedRoot instanceof YXmlText && "localOrigin" in value && "positionStorageOrigin" in value && typeof value.applyRemoteEvents === "function" && typeof value.storeLocalChange === "function" && typeof value.flushLocalChanges === "function" && typeof value.isLocalOrigin === "function" && typeof value.connect === "function" && typeof value.disconnect === "function";
    },
    localChanges(editor) {
      var _a;
      return (_a = LOCAL_CHANGES.get(editor)) != null ? _a : [];
    },
    applyRemoteEvents(editor, events, origin) {
      editor.applyRemoteEvents(events, origin);
    },
    storeLocalChange(editor, op) {
      editor.storeLocalChange(op);
    },
    flushLocalChanges(editor) {
      editor.flushLocalChanges();
    },
    connected(editor) {
      return CONNECTED.has(editor);
    },
    connect(editor) {
      editor.connect();
    },
    disconnect(editor) {
      editor.disconnect();
    },
    isLocal(editor) {
      return editor.isLocalOrigin(YjsEditor.origin(editor));
    },
    origin(editor) {
      const origin = ORIGIN.get(editor);
      return origin !== void 0 ? origin : editor.localOrigin;
    },
    withOrigin(editor, origin, fn2) {
      const prev = YjsEditor.origin(editor);
      ORIGIN.set(editor, origin);
      fn2();
      ORIGIN.set(editor, prev);
    },
    storePosition(editor, key, point) {
      const { sharedRoot, positionStorageOrigin: locationStorageOrigin } = editor;
      assertDocumentAttachment(sharedRoot);
      const position = slatePointToRelativePosition(sharedRoot, editor, point);
      sharedRoot.doc.transact(() => {
        setStoredPosition(sharedRoot, key, position);
      }, locationStorageOrigin);
    },
    removeStoredPosition(editor, key) {
      const { sharedRoot, positionStorageOrigin: locationStorageOrigin } = editor;
      assertDocumentAttachment(sharedRoot);
      sharedRoot.doc.transact(() => {
        removeStoredPosition(sharedRoot, key);
      }, locationStorageOrigin);
    },
    position(editor, key) {
      const position = getStoredPosition(editor.sharedRoot, key);
      if (!position) {
        return void 0;
      }
      return relativePositionToSlatePoint(editor.sharedRoot, editor, position);
    },
    storedPositionsRelative(editor) {
      return getStoredPositions(editor.sharedRoot);
    }
  };
  function withYjs(editor, sharedRoot, {
    localOrigin,
    positionStorageOrigin,
    autoConnect = false
  } = {}) {
    const e = editor;
    e.sharedRoot = sharedRoot;
    e.localOrigin = localOrigin != null ? localOrigin : DEFAULT_LOCAL_ORIGIN;
    e.positionStorageOrigin = positionStorageOrigin != null ? positionStorageOrigin : DEFAULT_POSITION_STORAGE_ORIGIN;
    e.applyRemoteEvents = (events, origin) => {
      YjsEditor.flushLocalChanges(e);
      Editor.withoutNormalizing(e, () => {
        YjsEditor.withOrigin(e, origin, () => {
          applyYjsEvents(e.sharedRoot, e, events);
        });
      });
    };
    e.isLocalOrigin = (origin) => origin === e.localOrigin;
    const handleYEvents = (events, transaction) => {
      if (e.isLocalOrigin(transaction.origin)) {
        return;
      }
      YjsEditor.applyRemoteEvents(e, events, transaction.origin);
    };
    let autoConnectTimeoutId = null;
    if (autoConnect) {
      autoConnectTimeoutId = setTimeout(() => {
        autoConnectTimeoutId = null;
        YjsEditor.connect(e);
      });
    }
    e.connect = () => {
      if (YjsEditor.connected(e)) {
        throw new Error("already connected");
      }
      e.sharedRoot.observeDeep(handleYEvents);
      const content = yTextToSlateElement(e.sharedRoot);
      e.children = content.children;
      CONNECTED.add(e);
      Editor.normalize(editor, { force: true });
      if (!editor.operations.length) {
        editor.onChange();
      }
    };
    e.disconnect = () => {
      if (autoConnectTimeoutId) {
        clearTimeout(autoConnectTimeoutId);
      }
      YjsEditor.flushLocalChanges(e);
      e.sharedRoot.unobserveDeep(handleYEvents);
      CONNECTED.delete(e);
    };
    e.storeLocalChange = (op) => {
      LOCAL_CHANGES.set(e, [
        ...YjsEditor.localChanges(e),
        { op, doc: editor.children, origin: YjsEditor.origin(e) }
      ]);
    };
    e.flushLocalChanges = () => {
      assertDocumentAttachment(e.sharedRoot);
      const localChanges = YjsEditor.localChanges(e);
      LOCAL_CHANGES.delete(e);
      const txGroups = [];
      localChanges.forEach((change) => {
        const currentGroup = txGroups[txGroups.length - 1];
        if (currentGroup && currentGroup[0].origin === change.origin) {
          return currentGroup.push(change);
        }
        txGroups.push([change]);
      });
      txGroups.forEach((txGroup) => {
        assertDocumentAttachment(e.sharedRoot);
        e.sharedRoot.doc.transact(() => {
          txGroup.forEach((change) => {
            assertDocumentAttachment(e.sharedRoot);
            applySlateOp(e.sharedRoot, { children: change.doc }, change.op);
          });
        }, txGroup[0].origin);
      });
    };
    const { apply, onChange } = e;
    e.apply = (op) => {
      if (YjsEditor.connected(e) && YjsEditor.isLocal(e)) {
        YjsEditor.storeLocalChange(e, op);
      }
      apply(op);
    };
    e.onChange = () => {
      if (YjsEditor.connected(e)) {
        YjsEditor.flushLocalChanges(e);
      }
      onChange();
    };
    return e;
  }

  // src/plugins/withYHistory.ts
  var LAST_SELECTION = /* @__PURE__ */ new WeakMap();
  var DEFAULT_WITHOUT_SAVING_ORIGIN = Symbol("slate-yjs-history-without-saving");
  var YHistoryEditor = {
    isYHistoryEditor(value) {
      return YjsEditor.isYjsEditor(value) && value.undoManager instanceof UndoManager && typeof value.undo === "function" && typeof value.redo === "function" && "withoutSavingOrigin" in value;
    },
    canUndo(editor) {
      return editor.undoManager.undoStack.length > 0;
    },
    canRedo(editor) {
      return editor.undoManager.redoStack.length > 0;
    },
    isSaving(editor) {
      return editor.undoManager.trackedOrigins.has(YjsEditor.origin(editor));
    },
    withoutSaving(editor, fn2) {
      YjsEditor.withOrigin(editor, editor.withoutSavingOrigin, fn2);
    }
  };
  function withYHistory(editor, _a = {}) {
    var _b = _a, {
      withoutSavingOrigin = DEFAULT_WITHOUT_SAVING_ORIGIN,
      trackedOrigins = /* @__PURE__ */ new Set([editor.localOrigin])
    } = _b, options = __objRest(_b, [
      "withoutSavingOrigin",
      "trackedOrigins"
    ]);
    const e = editor;
    const undoManager = new UndoManager(e.sharedRoot, __spreadValues({
      trackedOrigins
    }, options));
    e.undoManager = undoManager;
    e.withoutSavingOrigin = withoutSavingOrigin;
    const { onChange, isLocalOrigin } = e;
    e.onChange = () => {
      onChange();
      LAST_SELECTION.set(e, e.selection && slateRangeToRelativeRange(e.sharedRoot, e, e.selection));
    };
    e.isLocalOrigin = (origin) => origin === e.withoutSavingOrigin || isLocalOrigin(origin);
    const handleStackItemAdded = ({
      stackItem
    }) => {
      stackItem.meta.set("selection", e.selection && slateRangeToRelativeRange(e.sharedRoot, e, e.selection));
      stackItem.meta.set("selectionBefore", LAST_SELECTION.get(e));
    };
    const handleStackItemUpdated = ({
      stackItem
    }) => {
      stackItem.meta.set("selection", e.selection && slateRangeToRelativeRange(e.sharedRoot, e, e.selection));
    };
    const handleStackItemPopped = ({
      stackItem,
      type
    }) => {
      const inverseStack = type === "undo" ? e.undoManager.redoStack : e.undoManager.undoStack;
      const inverseItem = inverseStack[inverseStack.length - 1];
      if (inverseItem) {
        inverseItem.meta.set("selection", stackItem.meta.get("selectionBefore"));
        inverseItem.meta.set("selectionBefore", stackItem.meta.get("selection"));
      }
      const relativeSelection = stackItem.meta.get("selectionBefore");
      if (!relativeSelection) {
        return;
      }
      const selection = relativeRangeToSlateRange(e.sharedRoot, e, relativeSelection);
      if (!selection) {
        return;
      }
      Transforms.select(e, selection);
    };
    const { connect, disconnect } = e;
    e.connect = () => {
      connect();
      e.undoManager.on("stack-item-added", handleStackItemAdded);
      e.undoManager.on("stack-item-popped", handleStackItemPopped);
      e.undoManager.on("stack-item-updated", handleStackItemUpdated);
    };
    e.disconnect = () => {
      e.undoManager.off("stack-item-added", handleStackItemAdded);
      e.undoManager.off("stack-item-popped", handleStackItemPopped);
      e.undoManager.off("stack-item-updated", handleStackItemUpdated);
      disconnect();
    };
    e.undo = () => {
      if (YjsEditor.connected(e)) {
        YjsEditor.flushLocalChanges(e);
        e.undoManager.undo();
      }
    };
    e.redo = () => {
      if (YjsEditor.connected(e)) {
        YjsEditor.flushLocalChanges(e);
        e.undoManager.redo();
      }
    };
    return e;
  }

  // src/plugins/withCursors.ts
  var CURSOR_CHANGE_EVENT_LISTENERS = /* @__PURE__ */ new WeakMap();
  var CursorEditor = {
    isCursorEditor(value) {
      return YjsEditor.isYjsEditor(value) && value.awareness && typeof value.cursorDataField === "string" && typeof value.selectionStateField === "string" && typeof value.sendCursorPosition === "function" && typeof value.sendCursorData === "function";
    },
    sendCursorPosition(editor, range = editor.selection) {
      editor.sendCursorPosition(range);
    },
    sendCursorData(editor, data) {
      editor.sendCursorData(data);
    },
    on(editor, event, handler) {
      var _a;
      if (event !== "change") {
        return;
      }
      const listeners = (_a = CURSOR_CHANGE_EVENT_LISTENERS.get(editor)) != null ? _a : /* @__PURE__ */ new Set();
      listeners.add(handler);
      CURSOR_CHANGE_EVENT_LISTENERS.set(editor, listeners);
    },
    off(editor, event, listener) {
      if (event !== "change") {
        return;
      }
      const listeners = CURSOR_CHANGE_EVENT_LISTENERS.get(editor);
      if (listeners) {
        listeners.delete(listener);
      }
    },
    cursorState(editor, clientId) {
      var _a;
      if (clientId === editor.awareness.clientID || !YjsEditor.connected(editor)) {
        return null;
      }
      const state = editor.awareness.getStates().get(clientId);
      if (!state) {
        return null;
      }
      return {
        relativeSelection: (_a = state[editor.selectionStateField]) != null ? _a : null,
        data: state[editor.cursorDataField],
        clientId
      };
    },
    cursorStates(editor) {
      if (!YjsEditor.connected(editor)) {
        return {};
      }
      return Object.fromEntries(Array.from(editor.awareness.getStates().entries(), ([id, state]) => {
        if (id === editor.awareness.clientID || !state) {
          return null;
        }
        return [
          id,
          {
            relativeSelection: state[editor.selectionStateField],
            data: state[editor.cursorDataField]
          }
        ];
      }).filter(Array.isArray));
    }
  };
  function withCursors(editor, awareness, {
    cursorStateField: selectionStateField = "selection",
    cursorDataField = "data",
    autoSend = true,
    data
  } = {}) {
    const e = editor;
    e.awareness = awareness;
    e.cursorDataField = cursorDataField;
    e.selectionStateField = selectionStateField;
    e.sendCursorData = (cursorData) => {
      e.awareness.setLocalStateField(e.cursorDataField, cursorData);
    };
    e.sendCursorPosition = (range) => {
      const localState = e.awareness.getLocalState();
      const currentRange = localState == null ? void 0 : localState[selectionStateField];
      if (!range) {
        if (currentRange) {
          e.awareness.setLocalStateField(e.selectionStateField, null);
        }
        return;
      }
      const { anchor, focus } = slateRangeToRelativeRange(e.sharedRoot, e, range);
      if (!currentRange || !compareRelativePositions(anchor, currentRange) || !compareRelativePositions(focus, currentRange)) {
        e.awareness.setLocalStateField(e.selectionStateField, { anchor, focus });
      }
    };
    const awarenessChangeListener = (yEvent) => {
      const listeners = CURSOR_CHANGE_EVENT_LISTENERS.get(e);
      if (!listeners) {
        return;
      }
      const localId = e.awareness.clientID;
      const event = {
        added: yEvent.added.filter((id) => id !== localId),
        removed: yEvent.removed.filter((id) => id !== localId),
        updated: yEvent.updated.filter((id) => id !== localId)
      };
      if (event.added.length > 0 || event.removed.length > 0 || event.updated.length > 0) {
        listeners.forEach((listener) => listener(event));
      }
    };
    const { connect, disconnect } = e;
    e.connect = () => {
      connect();
      e.awareness.on("change", awarenessChangeListener);
      awarenessChangeListener({
        removed: [],
        added: Array.from(e.awareness.getStates().keys()),
        updated: []
      });
      if (autoSend) {
        if (data) {
          CursorEditor.sendCursorData(e, data);
        }
        const { onChange } = e;
        e.onChange = () => {
          onChange();
          if (YjsEditor.connected(e)) {
            CursorEditor.sendCursorPosition(e);
          }
        };
      }
    };
    e.disconnect = () => {
      e.awareness.off("change", awarenessChangeListener);
      awarenessChangeListener({
        removed: Array.from(e.awareness.getStates().keys()),
        added: [],
        updated: []
      });
      disconnect();
    };
    return e;
  }
  return __toCommonJS(src_exports);
})();
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
//# sourceMappingURL=index.global.js.map