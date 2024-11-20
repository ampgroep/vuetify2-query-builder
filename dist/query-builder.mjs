var Mt = Object.defineProperty;
var Dt = (e, t, i) => t in e ? Mt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var R = (e, t, i) => (Dt(e, typeof t != "symbol" ? t + "" : t, i), i);
import p from "vue";
const y = p.extend().extend({
  name: "themeable",
  provide() {
    return {
      theme: this.themeableProvide
    };
  },
  inject: {
    theme: {
      default: {
        isDark: !1
      }
    }
  },
  props: {
    dark: {
      type: Boolean,
      default: null
    },
    light: {
      type: Boolean,
      default: null
    }
  },
  data() {
    return {
      themeableProvide: {
        isDark: !1
      }
    };
  },
  computed: {
    appIsDark() {
      return this.$vuetify.theme.dark || !1;
    },
    isDark() {
      return this.dark === !0 ? !0 : this.light === !0 ? !1 : this.theme.isDark;
    },
    themeClasses() {
      return {
        "theme--dark": this.isDark,
        "theme--light": !this.isDark
      };
    },
    /** Used by menus and dialogs, inherits from v-app instead of the parent */
    rootIsDark() {
      return this.dark === !0 ? !0 : this.light === !0 ? !1 : this.appIsDark;
    },
    rootThemeClasses() {
      return {
        "theme--dark": this.rootIsDark,
        "theme--light": !this.rootIsDark
      };
    }
  },
  watch: {
    isDark: {
      handler(e, t) {
        e !== t && (this.themeableProvide.isDark = this.isDark);
      },
      immediate: !0
    }
  }
});
function Fe(e) {
  const t = {
    ...e.props,
    ...e.injections
  }, i = y.options.computed.isDark.call(t);
  return y.options.computed.themeClasses.call({
    isDark: i
  });
}
function g(...e) {
  return p.extend({
    mixins: e
  });
}
function U(e, t = "div", i) {
  return p.extend({
    name: e.replace(/__/g, "-"),
    functional: !0,
    props: {
      tag: {
        type: String,
        default: t
      }
    },
    render(s, {
      data: n,
      props: r,
      children: o
    }) {
      return n.staticClass = `${e} ${n.staticClass || ""}`.trim(), s(r.tag, n, o);
    }
  });
}
let Ot = !1;
try {
  if (typeof window < "u") {
    const e = Object.defineProperty({}, "passive", {
      get: () => {
        Ot = !0;
      }
    });
    window.addEventListener("testListener", e, e), window.removeEventListener("testListener", e, e);
  }
} catch (e) {
  console.warn(e);
}
function ge(e, t, i) {
  const s = t.length - 1;
  if (s < 0)
    return e === void 0 ? i : e;
  for (let n = 0; n < s; n++) {
    if (e == null)
      return i;
    e = e[t[n]];
  }
  return e == null || e[t[s]] === void 0 ? i : e[t[s]];
}
function ve(e, t) {
  if (e === t)
    return !0;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
    return !1;
  const i = Object.keys(e);
  return i.length !== Object.keys(t).length ? !1 : i.every((s) => ve(e[s], t[s]));
}
function k(e, t, i) {
  return e == null || !t || typeof t != "string" ? i : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), ge(e, t.split("."), i));
}
function A(e, t, i) {
  if (t == null)
    return e === void 0 ? i : e;
  if (e !== Object(e))
    return i === void 0 ? e : i;
  if (typeof t == "string")
    return k(e, t, i);
  if (Array.isArray(t))
    return ge(e, t, i);
  if (typeof t != "function")
    return i;
  const s = t(e, i);
  return typeof s > "u" ? i : s;
}
function W(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return 0;
  const t = +window.getComputedStyle(e).getPropertyValue("z-index");
  return t || W(e.parentNode);
}
function Vt(e, t) {
  const i = {};
  for (let s = 0; s < t.length; s++) {
    const n = t[s];
    typeof e[n] < "u" && (i[n] = e[n]);
  }
  return i;
}
function d(e, t = "px") {
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : `${Number(e)}${t}`;
}
function he(e) {
  return (e || "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function Ie(e) {
  return e !== null && typeof e == "object";
}
const h = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
});
function Bt(e, t) {
  const i = e.$vuetify.icons.component;
  if (t.startsWith("$")) {
    const s = `$vuetify.icons.values.${t.split("$").pop().split(".").pop()}`, n = k(e, s, t);
    if (typeof n == "string")
      t = n;
    else
      return n;
  }
  return i == null ? t : {
    component: i,
    props: {
      icon: t
    }
  };
}
function ze(e) {
  return Object.keys(e);
}
const Et = /-(\w)/g, Pt = (e) => e.replace(Et, (t, i) => i ? i.toUpperCase() : "");
function Nt(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function ye(e) {
  return e != null ? Array.isArray(e) ? e : [e] : [];
}
function Ht(e, t, i) {
  if (e.$slots.hasOwnProperty(t) && e.$scopedSlots.hasOwnProperty(t) && e.$scopedSlots[t].name)
    return "v-slot";
  if (e.$slots.hasOwnProperty(t))
    return "normal";
  if (e.$scopedSlots.hasOwnProperty(t))
    return "scoped";
}
function b(e, t = "default", i, s = !1) {
  const n = he(t);
  if (e.$scopedSlots.hasOwnProperty(t))
    return e.$scopedSlots[t](i instanceof Function ? i() : i);
  if (e.$scopedSlots.hasOwnProperty(n))
    return e.$scopedSlots[n](i instanceof Function ? i() : i);
  if (e.$slots.hasOwnProperty(t) && (!i || s))
    return e.$slots[t];
  if (e.$slots.hasOwnProperty(n) && (!i || s))
    return e.$slots[n];
}
function Ft(e, t = 0, i = 1) {
  return Math.max(t, Math.min(i, e));
}
function E(e = {}, t = {}) {
  for (const i in t) {
    const s = e[i], n = t[i];
    if (Ie(s) && Ie(n)) {
      e[i] = E(s, n);
      continue;
    }
    e[i] = n;
  }
  return e;
}
function ke(e) {
  return function(t, i) {
    for (const s in i)
      Object.prototype.hasOwnProperty.call(t, s) || this.$delete(this.$data[e], s);
    for (const s in t)
      this.$set(this.$data[e], s, t[s]);
  };
}
const be = p.extend({
  data: () => ({
    attrs$: {},
    listeners$: {}
  }),
  created() {
    this.$watch("$attrs", ke("attrs$"), {
      immediate: !0
    }), this.$watch("$listeners", ke("listeners$"), {
      immediate: !0
    });
  }
});
function ce(e, t = {}) {
  if (ce.installed)
    return;
  ce.installed = !0, p !== e && w(`Multiple instances of Vue detected
See https://github.com/vuetifyjs/vuetify/issues/4068

If you're seeing "$attrs is readonly", it's caused by this`);
  const i = t.components || {}, s = t.directives || {};
  for (const n in s) {
    const r = s[n];
    e.directive(n, r);
  }
  (function n(r) {
    if (r) {
      for (const o in r) {
        const a = r[o];
        a && !n(a.$_vuetify_subcomponents) && e.component(o, a);
      }
      return !0;
    }
    return !1;
  })(i), !e.$_vuetify_installed && (e.$_vuetify_installed = !0, e.mixin({
    beforeCreate() {
      const n = this.$options;
      n.vuetify ? (n.vuetify.init(this, this.$ssrContext), this.$vuetify = e.observable(n.vuetify.framework)) : this.$vuetify = n.parent && n.parent.$vuetify || this;
    },
    beforeMount() {
      this.$options.vuetify && this.$el && this.$el.hasAttribute("data-server-rendered") && (this.$vuetify.isHydrating = !0, this.$vuetify.breakpoint.update(!0));
    },
    mounted() {
      this.$options.vuetify && this.$vuetify.isHydrating && (this.$vuetify.isHydrating = !1, this.$vuetify.breakpoint.update());
    }
  }));
}
class D {
  constructor() {
    this.framework = {};
  }
  init(t, i) {
  }
}
class Re extends D {
  constructor() {
    super(...arguments), this.bar = 0, this.top = 0, this.left = 0, this.insetFooter = 0, this.right = 0, this.bottom = 0, this.footer = 0, this.application = {
      bar: {},
      top: {},
      left: {},
      insetFooter: {},
      right: {},
      bottom: {},
      footer: {}
    };
  }
  register(t, i, s) {
    this.application[i][t] = s, this.update(i);
  }
  unregister(t, i) {
    this.application[i][t] != null && (delete this.application[i][t], this.update(i));
  }
  update(t) {
    this[t] = Object.values(this.application[t]).reduce((i, s) => i + s, 0);
  }
}
Re.property = "application";
class Q extends D {
  constructor(t) {
    super(), this.xs = !1, this.sm = !1, this.md = !1, this.lg = !1, this.xl = !1, this.xsOnly = !1, this.smOnly = !1, this.smAndDown = !1, this.smAndUp = !1, this.mdOnly = !1, this.mdAndDown = !1, this.mdAndUp = !1, this.lgOnly = !1, this.lgAndDown = !1, this.lgAndUp = !1, this.xlOnly = !1, this.name = "xs", this.height = 0, this.width = 0, this.mobile = !0, this.resizeTimeout = 0;
    const {
      mobileBreakpoint: i,
      scrollBarWidth: s,
      thresholds: n
    } = t[Q.property];
    this.mobileBreakpoint = i, this.scrollBarWidth = s, this.thresholds = n;
  }
  init() {
    this.update(), !(typeof window > "u") && window.addEventListener("resize", this.onResize.bind(this), {
      passive: !0
    });
  }
  /* eslint-disable-next-line max-statements */
  update(t = !1) {
    const i = t ? 0 : this.getClientHeight(), s = t ? 0 : this.getClientWidth(), n = s < this.thresholds.xs, r = s < this.thresholds.sm && !n, o = s < this.thresholds.md - this.scrollBarWidth && !(r || n), a = s < this.thresholds.lg - this.scrollBarWidth && !(o || r || n), l = s >= this.thresholds.lg - this.scrollBarWidth;
    switch (this.height = i, this.width = s, this.xs = n, this.sm = r, this.md = o, this.lg = a, this.xl = l, this.xsOnly = n, this.smOnly = r, this.smAndDown = (n || r) && !(o || a || l), this.smAndUp = !n && (r || o || a || l), this.mdOnly = o, this.mdAndDown = (n || r || o) && !(a || l), this.mdAndUp = !(n || r) && (o || a || l), this.lgOnly = a, this.lgAndDown = (n || r || o || a) && !l, this.lgAndUp = !(n || r || o) && (a || l), this.xlOnly = l, !0) {
      case n:
        this.name = "xs";
        break;
      case r:
        this.name = "sm";
        break;
      case o:
        this.name = "md";
        break;
      case a:
        this.name = "lg";
        break;
      default:
        this.name = "xl";
        break;
    }
    if (typeof this.mobileBreakpoint == "number") {
      this.mobile = s < parseInt(this.mobileBreakpoint, 10);
      return;
    }
    const c = {
      xs: 0,
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4
    }, u = c[this.name], f = c[this.mobileBreakpoint];
    this.mobile = u <= f;
  }
  onResize() {
    clearTimeout(this.resizeTimeout), this.resizeTimeout = window.setTimeout(this.update.bind(this), 200);
  }
  // Cross-browser support as described in:
  // https://stackoverflow.com/questions/1248081
  getClientWidth() {
    return typeof document > "u" ? 0 : Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }
  getClientHeight() {
    return typeof document > "u" ? 0 : Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }
}
Q.property = "breakpoint";
const zt = (e) => e, Rt = (e) => e ** 2, Wt = (e) => e * (2 - e), qt = (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e, jt = (e) => e ** 3, Yt = (e) => --e ** 3 + 1, Zt = (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1, Gt = (e) => e ** 4, Kt = (e) => 1 - --e ** 4, Xt = (e) => e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e, Ut = (e) => e ** 5, Qt = (e) => 1 + --e ** 5, Jt = (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5, ei = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  easeInCubic: jt,
  easeInOutCubic: Zt,
  easeInOutQuad: qt,
  easeInOutQuart: Xt,
  easeInOutQuint: Jt,
  easeInQuad: Rt,
  easeInQuart: Gt,
  easeInQuint: Ut,
  easeOutCubic: Yt,
  easeOutQuad: Wt,
  easeOutQuart: Kt,
  easeOutQuint: Qt,
  linear: zt
}, Symbol.toStringTag, { value: "Module" }));
function ne(e) {
  if (typeof e == "number")
    return e;
  let t = qe(e);
  if (!t)
    throw typeof e == "string" ? new Error(`Target element "${e}" not found.`) : new TypeError(`Target must be a Number/Selector/HTMLElement/VueComponent, received ${We(e)} instead.`);
  let i = 0;
  for (; t; )
    i += t.offsetTop, t = t.offsetParent;
  return i;
}
function ti(e) {
  const t = qe(e);
  if (t)
    return t;
  throw typeof e == "string" ? new Error(`Container element "${e}" not found.`) : new TypeError(`Container must be a Selector/HTMLElement/VueComponent, received ${We(e)} instead.`);
}
function We(e) {
  return e == null ? e : e.constructor.name;
}
function qe(e) {
  return typeof e == "string" ? document.querySelector(e) : e && e._isVue ? e.$el : e instanceof HTMLElement ? e : null;
}
function M(e, t = {}) {
  const i = {
    container: document.scrollingElement || document.body || document.documentElement,
    duration: 500,
    offset: 0,
    easing: "easeInOutCubic",
    appOffset: !0,
    ...t
  }, s = ti(i.container);
  if (i.appOffset && M.framework.application) {
    const l = s.classList.contains("v-navigation-drawer"), c = s.classList.contains("v-navigation-drawer--clipped"), {
      bar: u,
      top: f
    } = M.framework.application;
    i.offset += u, (!l || c) && (i.offset += f);
  }
  const n = performance.now();
  let r;
  typeof e == "number" ? r = ne(e) - i.offset : r = ne(e) - ne(s) - i.offset;
  const o = s.scrollTop;
  if (r === o)
    return Promise.resolve(r);
  const a = typeof i.easing == "function" ? i.easing : ei[i.easing];
  if (!a)
    throw new TypeError(`Easing function "${i.easing}" not found.`);
  return new Promise((l) => requestAnimationFrame(function c(u) {
    const f = u - n, v = Math.abs(i.duration ? Math.min(f / i.duration, 1) : 1);
    s.scrollTop = Math.floor(o + (r - o) * a(v));
    const z = (s === document.body ? document.documentElement.clientHeight : s.clientHeight) + s.scrollTop >= s.scrollHeight;
    if (v === 1 || // Need to go lower but reach bottom
    r > s.scrollTop && z)
      return l(r);
    requestAnimationFrame(c);
  }));
}
M.framework = {};
M.init = () => {
};
class je extends D {
  constructor() {
    return super(), M;
  }
}
je.property = "goTo";
const ii = {
  complete: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",
  cancel: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
  close: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
  delete: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
  clear: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
  success: "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",
  info: "M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2ZM13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
  warning: "M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
  error: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
  prev: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",
  next: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",
  checkboxOn: "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",
  checkboxOff: "M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",
  checkboxIndeterminate: "M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",
  delimiter: "M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",
  sort: "M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",
  expand: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",
  menu: "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",
  subgroup: "M7,10L12,15L17,10H7Z",
  dropdown: "M7,10L12,15L17,10H7Z",
  radioOn: "M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",
  radioOff: "M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",
  edit: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",
  ratingEmpty: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",
  ratingFull: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",
  ratingHalf: "M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",
  loading: "M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",
  first: "M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",
  last: "M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",
  unfold: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",
  file: "M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",
  plus: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",
  minus: "M19,13H5V11H19V13Z"
}, si = {
  complete: "check",
  cancel: "cancel",
  close: "close",
  delete: "cancel",
  clear: "clear",
  success: "check_circle",
  info: "info",
  warning: "priority_high",
  error: "warning",
  prev: "chevron_left",
  next: "chevron_right",
  checkboxOn: "check_box",
  checkboxOff: "check_box_outline_blank",
  checkboxIndeterminate: "indeterminate_check_box",
  delimiter: "fiber_manual_record",
  sort: "arrow_upward",
  expand: "keyboard_arrow_down",
  menu: "menu",
  subgroup: "arrow_drop_down",
  dropdown: "arrow_drop_down",
  radioOn: "radio_button_checked",
  radioOff: "radio_button_unchecked",
  edit: "edit",
  ratingEmpty: "star_border",
  ratingFull: "star",
  ratingHalf: "star_half",
  loading: "cached",
  first: "first_page",
  last: "last_page",
  unfold: "unfold_more",
  file: "attach_file",
  plus: "add",
  minus: "remove"
}, ni = {
  complete: "mdi-check",
  cancel: "mdi-close-circle",
  close: "mdi-close",
  delete: "mdi-close-circle",
  clear: "mdi-close",
  success: "mdi-check-circle",
  info: "mdi-information",
  warning: "mdi-exclamation",
  error: "mdi-alert",
  prev: "mdi-chevron-left",
  next: "mdi-chevron-right",
  checkboxOn: "mdi-checkbox-marked",
  checkboxOff: "mdi-checkbox-blank-outline",
  checkboxIndeterminate: "mdi-minus-box",
  delimiter: "mdi-circle",
  sort: "mdi-arrow-up",
  expand: "mdi-chevron-down",
  menu: "mdi-menu",
  subgroup: "mdi-menu-down",
  dropdown: "mdi-menu-down",
  radioOn: "mdi-radiobox-marked",
  radioOff: "mdi-radiobox-blank",
  edit: "mdi-pencil",
  ratingEmpty: "mdi-star-outline",
  ratingFull: "mdi-star",
  ratingHalf: "mdi-star-half-full",
  loading: "mdi-cached",
  first: "mdi-page-first",
  last: "mdi-page-last",
  unfold: "mdi-unfold-more-horizontal",
  file: "mdi-paperclip",
  plus: "mdi-plus",
  minus: "mdi-minus"
}, Ye = {
  complete: "fas fa-check",
  cancel: "fas fa-times-circle",
  close: "fas fa-times",
  delete: "fas fa-times-circle",
  clear: "fas fa-times-circle",
  success: "fas fa-check-circle",
  info: "fas fa-info-circle",
  warning: "fas fa-exclamation-circle",
  error: "fas fa-exclamation-triangle",
  prev: "fas fa-chevron-left",
  next: "fas fa-chevron-right",
  checkboxOn: "fas fa-check-square",
  checkboxOff: "far fa-square",
  checkboxIndeterminate: "fas fa-minus-square",
  delimiter: "fas fa-circle",
  sort: "fas fa-sort-up",
  expand: "fas fa-chevron-down",
  menu: "fas fa-bars",
  subgroup: "fas fa-caret-down",
  dropdown: "fas fa-caret-down",
  radioOn: "far fa-dot-circle",
  radioOff: "far fa-circle",
  edit: "fas fa-edit",
  ratingEmpty: "far fa-star",
  ratingFull: "fas fa-star",
  ratingHalf: "fas fa-star-half",
  loading: "fas fa-sync",
  first: "fas fa-step-backward",
  last: "fas fa-step-forward",
  unfold: "fas fa-arrows-alt-v",
  file: "fas fa-paperclip",
  plus: "fas fa-plus",
  minus: "fas fa-minus"
}, ri = {
  complete: "fa fa-check",
  cancel: "fa fa-times-circle",
  close: "fa fa-times",
  delete: "fa fa-times-circle",
  clear: "fa fa-times-circle",
  success: "fa fa-check-circle",
  info: "fa fa-info-circle",
  warning: "fa fa-exclamation",
  error: "fa fa-exclamation-triangle",
  prev: "fa fa-chevron-left",
  next: "fa fa-chevron-right",
  checkboxOn: "fa fa-check-square",
  checkboxOff: "fa fa-square-o",
  checkboxIndeterminate: "fa fa-minus-square",
  delimiter: "fa fa-circle",
  sort: "fa fa-sort-up",
  expand: "fa fa-chevron-down",
  menu: "fa fa-bars",
  subgroup: "fa fa-caret-down",
  dropdown: "fa fa-caret-down",
  radioOn: "fa fa-dot-circle-o",
  radioOff: "fa fa-circle-o",
  edit: "fa fa-pencil",
  ratingEmpty: "fa fa-star-o",
  ratingFull: "fa fa-star",
  ratingHalf: "fa fa-star-half-o",
  loading: "fa fa-refresh",
  first: "fa fa-step-backward",
  last: "fa fa-step-forward",
  unfold: "fa fa-angle-double-down",
  file: "fa fa-paperclip",
  plus: "fa fa-plus",
  minus: "fa fa-minus"
};
function oi(e, t) {
  const i = {};
  for (const s in t)
    i[s] = {
      component: e,
      props: {
        icon: t[s].split(" fa-")
      }
    };
  return i;
}
const ai = oi("font-awesome-icon", Ye), li = Object.freeze({
  mdiSvg: ii,
  md: si,
  mdi: ni,
  fa: Ye,
  fa4: ri,
  faSvg: ai
});
class J extends D {
  constructor(t) {
    super();
    const {
      iconfont: i,
      values: s,
      component: n
    } = t[J.property];
    this.component = n, this.iconfont = i, this.values = E(li[i], s);
  }
}
J.property = "icons";
const Ze = "$vuetify.", Le = Symbol("Lang fallback");
function Ge(e, t, i = !1, s) {
  const n = t.replace(Ze, "");
  let r = k(e, n, Le);
  return r === Le && (i ? (w(`Translation key "${n}" not found in fallback`), r = t) : (S(`Translation key "${n}" not found, falling back to default`), r = Ge(s, t, !0, s))), r;
}
class ee extends D {
  constructor(t) {
    super(), this.defaultLocale = "en";
    const {
      current: i,
      locales: s,
      t: n
    } = t[ee.property];
    this.current = i, this.locales = s, this.translator = n || this.defaultTranslator;
  }
  currentLocale(t) {
    const i = this.locales[this.current], s = this.locales[this.defaultLocale];
    return Ge(i, t, !1, s);
  }
  t(t, ...i) {
    return t.startsWith(Ze) ? this.translator(t, ...i) : this.replace(t, i);
  }
  defaultTranslator(t, ...i) {
    return this.replace(this.currentLocale(t), i);
  }
  replace(t, i) {
    return t.replace(/\{(\d+)\}/g, (s, n) => String(i[+n]));
  }
}
ee.property = "lang";
const hi = {
  badge: "Badge",
  close: "Close",
  dataIterator: {
    noResultsText: "No matching records found",
    loadingText: "Loading items..."
  },
  dataTable: {
    itemsPerPageText: "Rows per page:",
    ariaLabel: {
      sortDescending: "Sorted descending.",
      sortAscending: "Sorted ascending.",
      sortNone: "Not sorted.",
      activateNone: "Activate to remove sorting.",
      activateDescending: "Activate to sort descending.",
      activateAscending: "Activate to sort ascending."
    },
    sortBy: "Sort by"
  },
  dataFooter: {
    itemsPerPageText: "Items per page:",
    itemsPerPageAll: "All",
    nextPage: "Next page",
    prevPage: "Previous page",
    firstPage: "First page",
    lastPage: "Last page",
    pageText: "{0}-{1} of {2}"
  },
  datePicker: {
    itemsSelected: "{0} selected",
    nextMonthAriaLabel: "Next month",
    nextYearAriaLabel: "Next year",
    prevMonthAriaLabel: "Previous month",
    prevYearAriaLabel: "Previous year"
  },
  noDataText: "No data available",
  carousel: {
    prev: "Previous visual",
    next: "Next visual",
    ariaLabel: {
      delimiter: "Carousel slide {0} of {1}"
    }
  },
  calendar: {
    moreEvents: "{0} more"
  },
  input: {
    clear: "Clear {0}",
    prependAction: "{0} prepended action",
    appendAction: "{0} appended action"
  },
  fileInput: {
    counter: "{0} files",
    counterSize: "{0} files ({1} in total)"
  },
  timePicker: {
    am: "AM",
    pm: "PM"
  },
  pagination: {
    ariaLabel: {
      wrapper: "Pagination Navigation",
      next: "Next page",
      previous: "Previous page",
      page: "Goto Page {0}",
      currentPage: "Current Page, Page {0}"
    }
  },
  rating: {
    ariaLabel: {
      icon: "Rating {0} of {1}"
    }
  },
  loading: "Loading..."
}, ci = {
  breakpoint: {
    // TODO: update to MD2 spec in v3 - 1280
    mobileBreakpoint: 1264,
    scrollBarWidth: 16,
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1280,
      lg: 1920
    }
  },
  icons: {
    // TODO: remove v3
    iconfont: "mdi",
    values: {}
  },
  lang: {
    current: "en",
    locales: {
      en: hi
    },
    // Default translator exists in lang service
    t: void 0
  },
  rtl: !1,
  theme: {
    dark: !1,
    default: "light",
    disable: !1,
    options: {
      cspNonce: void 0,
      customProperties: void 0,
      minifyTheme: void 0,
      themeCache: void 0,
      variations: !0
    },
    themes: {
      light: {
        primary: "#1976D2",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00"
      },
      dark: {
        primary: "#2196F3",
        secondary: "#424242",
        accent: "#FF4081",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00"
      }
    }
  }
};
class Ke extends D {
  constructor(t, i) {
    super();
    const s = E({}, ci), {
      userPreset: n
    } = i, {
      preset: r = {},
      ...o
    } = n;
    r.preset != null && S("Global presets do not support the **preset** option, it can be safely omitted"), i.preset = E(E(s, r), o);
  }
}
Ke.property = "presets";
const ui = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], di = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, pi = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], fi = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function Xe(e) {
  const t = Array(3), i = di, s = ui;
  for (let n = 0; n < 3; ++n)
    t[n] = Math.round(Ft(i(s[n][0] * e[0] + s[n][1] * e[1] + s[n][2] * e[2])) * 255);
  return (t[0] << 16) + (t[1] << 8) + (t[2] << 0);
}
function Ue(e) {
  const t = [0, 0, 0], i = fi, s = pi, n = i((e >> 16 & 255) / 255), r = i((e >> 8 & 255) / 255), o = i((e >> 0 & 255) / 255);
  for (let a = 0; a < 3; ++a)
    t[a] = s[a][0] * n + s[a][1] * r + s[a][2] * o;
  return t;
}
function _e(e) {
  return !!e && !!e.match(/^(#|var\(--|(rgb|hsl)a?\()/);
}
function ue(e) {
  let t;
  if (typeof e == "number")
    t = e;
  else if (typeof e == "string") {
    let i = e[0] === "#" ? e.substring(1) : e;
    i.length === 3 && (i = i.split("").map((s) => s + s).join("")), i.length !== 6 && S(`'${e}' is not a valid rgb color`), t = parseInt(i, 16);
  } else
    throw new TypeError(`Colors can only be numbers or strings, recieved ${e == null ? e : e.constructor.name} instead`);
  return t < 0 ? (S(`Colors cannot be negative: '${e}'`), t = 0) : (t > 16777215 || isNaN(t)) && (S(`'${e}' is not a valid rgb color`), t = 16777215), t;
}
function P(e) {
  let t = e.toString(16);
  return t.length < 6 && (t = "0".repeat(6 - t.length) + t), "#" + t;
}
function mi(e) {
  return P(ue(e));
}
const j = 0.20689655172413793, gi = (e) => e > j ** 3 ? Math.cbrt(e) : e / (3 * j ** 2) + 4 / 29, vi = (e) => e > j ? e ** 3 : 3 * j ** 2 * (e - 4 / 29);
function Qe(e) {
  const t = gi, i = t(e[1]);
  return [116 * i - 16, 500 * (t(e[0] / 0.95047) - i), 200 * (i - t(e[2] / 1.08883))];
}
function Je(e) {
  const t = vi, i = (e[0] + 16) / 116;
  return [t(i + e[1] / 500) * 0.95047, t(i), t(i - e[2] / 200) * 1.08883];
}
function et(e, t = !1, i = !0) {
  const {
    anchor: s,
    ...n
  } = e, r = Object.keys(n), o = {};
  for (let a = 0; a < r.length; ++a) {
    const l = r[a], c = e[l];
    c != null && (i ? t ? (l === "base" || l.startsWith("lighten") || l.startsWith("darken")) && (o[l] = mi(c)) : typeof c == "object" ? o[l] = et(c, !0, i) : o[l] = $i(l, ue(c)) : o[l] = {
      base: P(ue(c))
    });
  }
  return t || (o.anchor = s || o.base || o.primary.base), o;
}
const yi = (e, t) => `
.v-application .${e} {
  background-color: ${t} !important;
  border-color: ${t} !important;
}
.v-application .${e}--text {
  color: ${t} !important;
  caret-color: ${t} !important;
}`, bi = (e, t, i) => {
  const [s, n] = t.split(/(\d)/, 2);
  return `
.v-application .${e}.${s}-${n} {
  background-color: ${i} !important;
  border-color: ${i} !important;
}
.v-application .${e}--text.text--${s}-${n} {
  color: ${i} !important;
  caret-color: ${i} !important;
}`;
}, q = (e, t = "base") => `--v-${e}-${t}`, re = (e, t = "base") => `var(${q(e, t)})`;
function xi(e, t = !1) {
  const {
    anchor: i,
    ...s
  } = e, n = Object.keys(s);
  if (!n.length)
    return "";
  let r = "", o = "";
  const a = t ? re("anchor") : i;
  o += `.v-application a { color: ${a}; }`, t && (r += `  ${q("anchor")}: ${i};
`);
  for (let l = 0; l < n.length; ++l) {
    const c = n[l], u = e[c];
    o += yi(c, t ? re(c) : u.base), t && (r += `  ${q(c)}: ${u.base};
`);
    const f = ze(u);
    for (let v = 0; v < f.length; ++v) {
      const L = f[v], z = u[L];
      L !== "base" && (o += bi(c, L, t ? re(c, L) : z), t && (r += `  ${q(c, L)}: ${z};
`));
    }
  }
  return t && (r = `:root {
${r}}

`), r + o;
}
function $i(e, t) {
  const i = {
    base: P(t)
  };
  for (let s = 5; s > 0; --s)
    i[`lighten${s}`] = P(Ci(t, s));
  for (let s = 1; s <= 4; ++s)
    i[`darken${s}`] = P(wi(t, s));
  return i;
}
function Ci(e, t) {
  const i = Qe(Ue(e));
  return i[0] = i[0] + t * 10, Xe(Je(i));
}
function wi(e, t) {
  const i = Qe(Ue(e));
  return i[0] = i[0] - t * 10, Xe(Je(i));
}
class te extends D {
  constructor(t) {
    super(), this.disabled = !1, this.isDark = null, this.unwatch = null, this.vueMeta = null;
    const {
      dark: i,
      disable: s,
      options: n,
      themes: r
    } = t[te.property];
    if (this.dark = !!i, this.defaults = this.themes = r, this.options = n, s) {
      this.disabled = !0;
      return;
    }
    this.themes = {
      dark: this.fillVariant(r.dark, !0),
      light: this.fillVariant(r.light, !1)
    };
  }
  // When setting css, check for element and apply new values
  /* eslint-disable-next-line accessor-pairs */
  set css(t) {
    if (this.vueMeta) {
      this.isVueMeta23 && this.applyVueMeta23();
      return;
    }
    this.checkOrCreateStyleElement() && (this.styleEl.innerHTML = t);
  }
  set dark(t) {
    const i = this.isDark;
    this.isDark = t, i != null && this.applyTheme();
  }
  get dark() {
    return !!this.isDark;
  }
  // Apply current theme default
  // only called on client side
  applyTheme() {
    if (this.disabled)
      return this.clearCss();
    this.css = this.generatedStyles;
  }
  clearCss() {
    this.css = "";
  }
  // Initialize theme for SSR and SPA
  // Attach to ssrContext head or
  // apply new theme to document
  init(t, i) {
    this.disabled || (t.$meta ? this.initVueMeta(t) : i && this.initSSR(i), this.initTheme(t));
  }
  // Allows for you to set target theme
  setTheme(t, i) {
    this.themes[t] = Object.assign(this.themes[t], i), this.applyTheme();
  }
  // Reset theme defaults
  resetThemes() {
    this.themes.light = Object.assign({}, this.defaults.light), this.themes.dark = Object.assign({}, this.defaults.dark), this.applyTheme();
  }
  // Check for existence of style element
  checkOrCreateStyleElement() {
    return this.styleEl = document.getElementById("vuetify-theme-stylesheet"), this.styleEl ? !0 : (this.genStyleElement(), !!this.styleEl);
  }
  fillVariant(t = {}, i) {
    const s = this.themes[i ? "dark" : "light"];
    return Object.assign({}, s, t);
  }
  // Generate the style element
  // if applicable
  genStyleElement() {
    typeof document > "u" || (this.styleEl = document.createElement("style"), this.styleEl.type = "text/css", this.styleEl.id = "vuetify-theme-stylesheet", this.options.cspNonce && this.styleEl.setAttribute("nonce", this.options.cspNonce), document.head.appendChild(this.styleEl));
  }
  initVueMeta(t) {
    if (this.vueMeta = t.$meta(), this.isVueMeta23) {
      t.$nextTick(() => {
        this.applyVueMeta23();
      });
      return;
    }
    const i = typeof this.vueMeta.getOptions == "function" ? this.vueMeta.getOptions().keyName : "metaInfo", s = t.$options[i] || {};
    t.$options[i] = () => {
      s.style = s.style || [];
      const n = s.style.find((r) => r.id === "vuetify-theme-stylesheet");
      return n ? n.cssText = this.generatedStyles : s.style.push({
        cssText: this.generatedStyles,
        type: "text/css",
        id: "vuetify-theme-stylesheet",
        nonce: (this.options || {}).cspNonce
      }), s;
    };
  }
  applyVueMeta23() {
    const {
      set: t
    } = this.vueMeta.addApp("vuetify");
    t({
      style: [{
        cssText: this.generatedStyles,
        type: "text/css",
        id: "vuetify-theme-stylesheet",
        nonce: this.options.cspNonce
      }]
    });
  }
  initSSR(t) {
    const i = this.options.cspNonce ? ` nonce="${this.options.cspNonce}"` : "";
    t.head = t.head || "", t.head += `<style type="text/css" id="vuetify-theme-stylesheet"${i}>${this.generatedStyles}</style>`;
  }
  initTheme(t) {
    typeof document > "u" || (this.unwatch && (this.unwatch(), this.unwatch = null), t.$once("hook:created", () => {
      const i = p.observable({
        themes: this.themes
      });
      this.unwatch = t.$watch(() => i.themes, () => this.applyTheme(), {
        deep: !0
      });
    }), this.applyTheme());
  }
  get currentTheme() {
    const t = this.dark ? "dark" : "light";
    return this.themes[t];
  }
  get generatedStyles() {
    const t = this.parsedTheme, i = this.options || {};
    let s;
    return i.themeCache != null && (s = i.themeCache.get(t), s != null) || (s = xi(t, i.customProperties), i.minifyTheme != null && (s = i.minifyTheme(s)), i.themeCache != null && i.themeCache.set(t, s)), s;
  }
  get parsedTheme() {
    return et(this.currentTheme || {}, void 0, ge(this.options, ["variations"], !0));
  }
  // Is using v2.3 of vue-meta
  // https://github.com/nuxt/vue-meta/releases/tag/v2.3.0
  get isVueMeta23() {
    return typeof this.vueMeta.addApp == "function";
  }
}
te.property = "theme";
class F {
  constructor(t = {}) {
    this.framework = {
      isHydrating: !1
    }, this.installed = [], this.preset = {}, this.userPreset = {}, this.userPreset = t, this.use(Ke), this.use(Re), this.use(Q), this.use(je), this.use(J), this.use(ee), this.use(te);
  }
  // Called on the new vuetify instance
  // bootstrap in install beforeCreate
  // Exposes ssrContext if available
  init(t, i) {
    this.installed.forEach((s) => {
      const n = this.framework[s];
      n.framework = this.framework, n.init(t, i);
    }), this.framework.rtl = !!this.preset.rtl;
  }
  // Instantiate a VuetifyService
  use(t) {
    const i = t.property;
    this.installed.includes(i) || (this.framework[i] = new t(this.preset, this), this.installed.push(i));
  }
}
F.install = ce;
F.installed = !1;
F.version = "2.7.2";
F.config = {
  silent: !1
};
function tt(e, t, i) {
  if (!F.config.silent) {
    if (i && (t = {
      _isVue: !0,
      $parent: i,
      $options: t
    }), t) {
      if (t.$_alreadyWarned = t.$_alreadyWarned || [], t.$_alreadyWarned.includes(e))
        return;
      t.$_alreadyWarned.push(e);
    }
    return `[Vuetify] ${e}` + (t ? ki(t) : "");
  }
}
function S(e, t, i) {
  const s = tt(e, t, i);
  s != null && console.warn(s);
}
function w(e, t, i) {
  const s = tt(e, t, i);
  s != null && console.error(s);
}
function Y(e, t, i, s) {
  w(`[BREAKING] '${e}' has been removed, use '${t}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`, i, s);
}
function xe(e, t, i) {
  S(`[REMOVED] '${e}' has been removed. You can safely omit it.`, t, i);
}
const Si = /(?:^|[-_])(\w)/g, Ii = (e) => e.replace(Si, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function oe(e, t) {
  if (e.$root === e)
    return "<Root>";
  const i = typeof e == "function" && e.cid != null ? e.options : e._isVue ? e.$options || e.constructor.options : e || {};
  let s = i.name || i._componentTag;
  const n = i.__file;
  if (!s && n) {
    const r = n.match(/([^/\\]+)\.vue$/);
    s = r && r[1];
  }
  return (s ? `<${Ii(s)}>` : "<Anonymous>") + (n && t !== !1 ? ` at ${n}` : "");
}
function ki(e) {
  if (e._isVue && e.$parent) {
    const t = [];
    let i = 0;
    for (; e; ) {
      if (t.length > 0) {
        const s = t[t.length - 1];
        if (s.constructor === e.constructor) {
          i++, e = e.$parent;
          continue;
        } else
          i > 0 && (t[t.length - 1] = [s, i], i = 0);
      }
      t.push(e), e = e.$parent;
    }
    return `

found in

` + t.map((s, n) => `${n === 0 ? "---> " : " ".repeat(5 + n * 2)}${Array.isArray(s) ? `${oe(s[0])}... (${s[1]} recursive calls)` : oe(s)}`).join(`
`);
  } else
    return `

(found in ${oe(e)})`;
}
const $ = p.extend({
  name: "colorable",
  props: {
    color: String
  },
  methods: {
    setBackgroundColor(e, t = {}) {
      return typeof t.style == "string" ? (w("style must be an object", this), t) : typeof t.class == "string" ? (w("class must be an object", this), t) : (_e(e) ? t.style = {
        ...t.style,
        "background-color": `${e}`,
        "border-color": `${e}`
      } : e && (t.class = {
        ...t.class,
        [e]: !0
      }), t);
    },
    setTextColor(e, t = {}) {
      if (typeof t.style == "string")
        return w("style must be an object", this), t;
      if (typeof t.class == "string")
        return w("class must be an object", this), t;
      if (_e(e))
        t.style = {
          ...t.style,
          color: `${e}`,
          "caret-color": `${e}`
        };
      else if (e) {
        const [i, s] = e.toString().trim().split(" ", 2);
        t.class = {
          ...t.class,
          [i + "--text"]: !0
        }, s && (t.class["text--" + s] = !0);
      }
      return t;
    }
  }
}), it = p.extend({
  name: "elevatable",
  props: {
    elevation: [Number, String]
  },
  computed: {
    computedElevation() {
      return this.elevation;
    },
    elevationClasses() {
      const e = this.computedElevation;
      return e == null ? {} : isNaN(parseInt(e)) ? {} : {
        [`elevation-${this.elevation}`]: !0
      };
    }
  }
}), Li = p.extend({
  name: "measurable",
  props: {
    height: [Number, String],
    maxHeight: [Number, String],
    maxWidth: [Number, String],
    minHeight: [Number, String],
    minWidth: [Number, String],
    width: [Number, String]
  },
  computed: {
    measurableStyles() {
      const e = {}, t = d(this.height), i = d(this.minHeight), s = d(this.minWidth), n = d(this.maxHeight), r = d(this.maxWidth), o = d(this.width);
      return t && (e.height = t), i && (e.minHeight = i), s && (e.minWidth = s), n && (e.maxHeight = n), r && (e.maxWidth = r), o && (e.width = o), e;
    }
  }
}), st = p.extend({
  name: "roundable",
  props: {
    rounded: [Boolean, String],
    tile: Boolean
  },
  computed: {
    roundedClasses() {
      const e = [], t = typeof this.rounded == "string" ? String(this.rounded) : this.rounded === !0;
      if (this.tile)
        e.push("rounded-0");
      else if (typeof t == "string") {
        const i = t.split(" ");
        for (const s of i)
          e.push(`rounded-${s}`);
      } else
        t && e.push("rounded");
      return e.length > 0 ? {
        [e.join(" ")]: !0
      } : {};
    }
  }
}), de = g(be, $, it, Li, st, y).extend({
  name: "v-sheet",
  props: {
    outlined: Boolean,
    shaped: Boolean,
    tag: {
      type: String,
      default: "div"
    }
  },
  computed: {
    classes() {
      return {
        "v-sheet": !0,
        "v-sheet--outlined": this.outlined,
        "v-sheet--shaped": this.shaped,
        ...this.themeClasses,
        ...this.elevationClasses,
        ...this.roundedClasses
      };
    },
    styles() {
      return this.measurableStyles;
    }
  },
  render(e) {
    const t = {
      class: this.classes,
      style: this.styles,
      on: this.listeners$
    };
    return e(this.tag, this.setBackgroundColor(this.color, t), this.$slots.default);
  }
});
function _i(e, t, i) {
  if (typeof window > "u" || !("IntersectionObserver" in window))
    return;
  const s = t.modifiers || {}, n = t.value, {
    handler: r,
    options: o
  } = typeof n == "object" ? n : {
    handler: n,
    options: {}
  }, a = new IntersectionObserver((l = [], c) => {
    var u;
    const f = (u = e._observe) === null || u === void 0 ? void 0 : u[i.context._uid];
    if (!f)
      return;
    const v = l.some((L) => L.isIntersecting);
    r && (!s.quiet || f.init) && (!s.once || v || f.init) && r(l, c, v), v && s.once ? nt(e, t, i) : f.init = !0;
  }, o);
  e._observe = Object(e._observe), e._observe[i.context._uid] = {
    init: !1,
    observer: a
  }, a.observe(e);
}
function nt(e, t, i) {
  var s;
  const n = (s = e._observe) === null || s === void 0 ? void 0 : s[i.context._uid];
  n && (n.observer.unobserve(e), delete e._observe[i.context._uid]);
}
const Z = {
  inserted: _i,
  unbind: nt
}, Te = {
  styleList: /;(?![^(]*\))/g,
  styleProp: /:(.*)/
};
function Ae(e) {
  const t = {};
  for (const i of e.split(Te.styleList)) {
    let [s, n] = i.split(Te.styleProp);
    s = s.trim(), s && (typeof n == "string" && (n = n.trim()), t[Pt(s)] = n);
  }
  return t;
}
function T() {
  const e = {};
  let t = arguments.length, i;
  for (; t--; )
    for (i of Object.keys(arguments[t]))
      switch (i) {
        case "class":
        case "directives":
          arguments[t][i] && (e[i] = Ai(e[i], arguments[t][i]));
          break;
        case "style":
          arguments[t][i] && (e[i] = Ti(e[i], arguments[t][i]));
          break;
        case "staticClass":
          if (!arguments[t][i])
            break;
          e[i] === void 0 && (e[i] = ""), e[i] && (e[i] += " "), e[i] += arguments[t][i].trim();
          break;
        case "on":
        case "nativeOn":
          arguments[t][i] && (e[i] = Mi(e[i], arguments[t][i]));
          break;
        case "attrs":
        case "props":
        case "domProps":
        case "scopedSlots":
        case "staticStyle":
        case "hook":
        case "transition":
          if (!arguments[t][i])
            break;
          e[i] || (e[i] = {}), e[i] = {
            ...arguments[t][i],
            ...e[i]
          };
          break;
        default:
          e[i] || (e[i] = arguments[t][i]);
      }
  return e;
}
function Ti(e, t) {
  return e ? t ? (e = ye(typeof e == "string" ? Ae(e) : e), e.concat(typeof t == "string" ? Ae(t) : t)) : e : t;
}
function Ai(e, t) {
  return t ? e && e ? ye(e).concat(t) : t : e;
}
function Mi(...e) {
  if (!e[0])
    return e[1];
  if (!e[1])
    return e[0];
  const t = {};
  for (let i = 2; i--; ) {
    const s = e[i];
    for (const n in s)
      s[n] && (t[n] ? t[n] = [].concat(s[n], t[n]) : t[n] = s[n]);
  }
  return t;
}
const Me = {
  absolute: Boolean,
  bottom: Boolean,
  fixed: Boolean,
  left: Boolean,
  right: Boolean,
  top: Boolean
};
function $e(e = []) {
  return p.extend({
    name: "positionable",
    props: e.length ? Vt(Me, e) : Me
  });
}
const Di = $e();
function G(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({
    composed: !0
  }) !== document ? null : t;
}
function Oi() {
  return !0;
}
function rt(e, t, i) {
  if (!e || ot(e, i) === !1)
    return !1;
  const s = G(t);
  if (typeof ShadowRoot < "u" && s instanceof ShadowRoot && s.host === e.target)
    return !1;
  const n = (typeof i.value == "object" && i.value.include || (() => []))();
  return n.push(t), !n.some((r) => r.contains(e.target));
}
function ot(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || Oi)(e);
}
function Vi(e, t, i) {
  const s = typeof i.value == "function" ? i.value : i.value.handler;
  t._clickOutside.lastMousedownWasOutside && rt(e, t, i) && setTimeout(() => {
    ot(e, i) && s && s(e);
  }, 0);
}
function De(e, t) {
  const i = G(e);
  t(document), typeof ShadowRoot < "u" && i instanceof ShadowRoot && t(i);
}
const at = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  inserted(e, t, i) {
    const s = (r) => Vi(r, e, t), n = (r) => {
      e._clickOutside.lastMousedownWasOutside = rt(r, e, t);
    };
    De(e, (r) => {
      r.addEventListener("click", s, !0), r.addEventListener("mousedown", n, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !0
    }), e._clickOutside[i.context._uid] = {
      onClick: s,
      onMousedown: n
    };
  },
  unbind(e, t, i) {
    e._clickOutside && (De(e, (s) => {
      var n;
      if (!s || !(!((n = e._clickOutside) === null || n === void 0) && n[i.context._uid]))
        return;
      const {
        onClick: r,
        onMousedown: o
      } = e._clickOutside[i.context._uid];
      s.removeEventListener("click", r, !0), s.removeEventListener("mousedown", o, !0);
    }), delete e._clickOutside[i.context._uid]);
  }
};
function Bi(e, t, i) {
  const s = t.value, n = t.options || {
    passive: !0
  };
  window.addEventListener("resize", s, n), e._onResize = Object(e._onResize), e._onResize[i.context._uid] = {
    callback: s,
    options: n
  }, (!t.modifiers || !t.modifiers.quiet) && s();
}
function Ei(e, t, i) {
  var s;
  if (!(!((s = e._onResize) === null || s === void 0) && s[i.context._uid]))
    return;
  const {
    callback: n,
    options: r
  } = e._onResize[i.context._uid];
  window.removeEventListener("resize", n, r), delete e._onResize[i.context._uid];
}
const lt = {
  inserted: Bi,
  unbind: Ei
}, Pi = 80;
function Oe(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function pe(e) {
  return e.constructor.name === "TouchEvent";
}
function ht(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Ni = (e, t, i = {}) => {
  let s = 0, n = 0;
  if (!ht(e)) {
    const f = t.getBoundingClientRect(), v = pe(e) ? e.touches[e.touches.length - 1] : e;
    s = v.clientX - f.left, n = v.clientY - f.top;
  }
  let r = 0, o = 0.3;
  t._ripple && t._ripple.circle ? (o = 0.15, r = t.clientWidth / 2, r = i.center ? r : r + Math.sqrt((s - r) ** 2 + (n - r) ** 2) / 4) : r = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const a = `${(t.clientWidth - r * 2) / 2}px`, l = `${(t.clientHeight - r * 2) / 2}px`, c = i.center ? a : `${s - r}px`, u = i.center ? l : `${n - r}px`;
  return {
    radius: r,
    scale: o,
    x: c,
    y: u,
    centerX: a,
    centerY: l
  };
}, K = {
  /* eslint-disable max-statements */
  show(e, t, i = {}) {
    if (!t._ripple || !t._ripple.enabled)
      return;
    const s = document.createElement("span"), n = document.createElement("span");
    s.appendChild(n), s.className = "v-ripple__container", i.class && (s.className += ` ${i.class}`);
    const {
      radius: r,
      scale: o,
      x: a,
      y: l,
      centerX: c,
      centerY: u
    } = Ni(e, t, i), f = `${r * 2}px`;
    n.className = "v-ripple__animation", n.style.width = f, n.style.height = f, t.appendChild(s);
    const v = window.getComputedStyle(t);
    v && v.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), n.classList.add("v-ripple__animation--enter"), n.classList.add("v-ripple__animation--visible"), Oe(n, `translate(${a}, ${l}) scale3d(${o},${o},${o})`), n.dataset.activated = String(performance.now()), setTimeout(() => {
      n.classList.remove("v-ripple__animation--enter"), n.classList.add("v-ripple__animation--in"), Oe(n, `translate(${c}, ${u}) scale3d(1,1,1)`);
    }, 0);
  },
  hide(e) {
    if (!e || !e._ripple || !e._ripple.enabled)
      return;
    const t = e.getElementsByClassName("v-ripple__animation");
    if (t.length === 0)
      return;
    const i = t[t.length - 1];
    if (i.dataset.isHiding)
      return;
    i.dataset.isHiding = "true";
    const s = performance.now() - Number(i.dataset.activated), n = Math.max(250 - s, 0);
    setTimeout(() => {
      i.classList.remove("v-ripple__animation--in"), i.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var r;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((r = i.parentNode) === null || r === void 0 ? void 0 : r.parentNode) === e && e.removeChild(i.parentNode);
      }, 300);
    }, n);
  }
};
function ct(e) {
  return typeof e > "u" || !!e;
}
function N(e) {
  const t = {}, i = e.currentTarget;
  if (!(!i || !i._ripple || i._ripple.touched || e.rippleStop)) {
    if (e.rippleStop = !0, pe(e))
      i._ripple.touched = !0, i._ripple.isTouch = !0;
    else if (i._ripple.isTouch)
      return;
    if (t.center = i._ripple.centered || ht(e), i._ripple.class && (t.class = i._ripple.class), pe(e)) {
      if (i._ripple.showTimerCommit)
        return;
      i._ripple.showTimerCommit = () => {
        K.show(e, i, t);
      }, i._ripple.showTimer = window.setTimeout(() => {
        i && i._ripple && i._ripple.showTimerCommit && (i._ripple.showTimerCommit(), i._ripple.showTimerCommit = null);
      }, Pi);
    } else
      K.show(e, i, t);
  }
}
function x(e) {
  const t = e.currentTarget;
  if (!(!t || !t._ripple)) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = setTimeout(() => {
        x(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), K.hide(t);
  }
}
function ut(e) {
  const t = e.currentTarget;
  !t || !t._ripple || (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let H = !1;
function dt(e) {
  !H && (e.keyCode === h.enter || e.keyCode === h.space) && (H = !0, N(e));
}
function pt(e) {
  H = !1, x(e);
}
function ft(e) {
  H === !0 && (H = !1, x(e));
}
function mt(e, t, i) {
  const s = ct(t.value);
  s || K.hide(e), e._ripple = e._ripple || {}, e._ripple.enabled = s;
  const n = t.value || {};
  n.center && (e._ripple.centered = !0), n.class && (e._ripple.class = t.value.class), n.circle && (e._ripple.circle = n.circle), s && !i ? (e.addEventListener("touchstart", N, {
    passive: !0
  }), e.addEventListener("touchend", x, {
    passive: !0
  }), e.addEventListener("touchmove", ut, {
    passive: !0
  }), e.addEventListener("touchcancel", x), e.addEventListener("mousedown", N), e.addEventListener("mouseup", x), e.addEventListener("mouseleave", x), e.addEventListener("keydown", dt), e.addEventListener("keyup", pt), e.addEventListener("blur", ft), e.addEventListener("dragstart", x, {
    passive: !0
  })) : !s && i && gt(e);
}
function gt(e) {
  e.removeEventListener("mousedown", N), e.removeEventListener("touchstart", N), e.removeEventListener("touchend", x), e.removeEventListener("touchmove", ut), e.removeEventListener("touchcancel", x), e.removeEventListener("mouseup", x), e.removeEventListener("mouseleave", x), e.removeEventListener("keydown", dt), e.removeEventListener("keyup", pt), e.removeEventListener("dragstart", x), e.removeEventListener("blur", ft);
}
function Hi(e, t, i) {
  mt(e, t, !1), process.env.NODE_ENV === "development" && i.context && i.context.$nextTick(() => {
    const s = window.getComputedStyle(e);
    if (s && s.display === "inline") {
      const n = i.fnOptions ? [i.fnOptions, i.context] : [i.componentInstance];
      S("v-ripple can only be used on block-level elements", ...n);
    }
  });
}
function Fi(e) {
  delete e._ripple, gt(e);
}
function zi(e, t) {
  if (t.value === t.oldValue)
    return;
  const i = ct(t.oldValue);
  mt(e, t, i);
}
const V = {
  bind: Hi,
  unbind: Fi,
  update: zi
};
function ie(e = "value", t = "input") {
  return p.extend({
    name: "toggleable",
    model: {
      prop: e,
      event: t
    },
    props: {
      [e]: {
        required: !1
      }
    },
    data() {
      return {
        isActive: !!this[e]
      };
    },
    watch: {
      [e](i) {
        this.isActive = !!i;
      },
      isActive(i) {
        !!i !== this[e] && this.$emit(t, i);
      }
    }
  });
}
const Ri = ie(), Ce = p.extend({
  name: "sizeable",
  props: {
    large: Boolean,
    small: Boolean,
    xLarge: Boolean,
    xSmall: Boolean
  },
  computed: {
    medium() {
      return !this.xSmall && !this.small && !this.large && !this.xLarge;
    },
    sizeableClasses() {
      return {
        "v-size--x-small": this.xSmall,
        "v-size--small": this.small,
        "v-size--default": this.medium,
        "v-size--large": this.large,
        "v-size--x-large": this.xLarge
      };
    }
  }
});
var fe;
(function(e) {
  e.xSmall = "12px", e.small = "16px", e.default = "24px", e.medium = "28px", e.large = "36px", e.xLarge = "40px";
})(fe || (fe = {}));
function Wi(e) {
  return ["fas", "far", "fal", "fab", "fad", "fak"].some((t) => e.includes(t));
}
function qi(e) {
  return /^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e) && /[\dz]$/i.test(e) && e.length > 4;
}
const Ve = g(
  be,
  $,
  Ce,
  y
  /* @vue/component */
).extend({
  name: "v-icon",
  props: {
    dense: Boolean,
    disabled: Boolean,
    left: Boolean,
    right: Boolean,
    size: [Number, String],
    tag: {
      type: String,
      required: !1,
      default: "i"
    }
  },
  computed: {
    medium() {
      return !1;
    },
    hasClickListener() {
      return !!(this.listeners$.click || this.listeners$["!click"]);
    }
  },
  methods: {
    getIcon() {
      let e = "";
      return this.$slots.default && (e = this.$slots.default[0].text.trim()), Bt(this, e);
    },
    getSize() {
      const e = {
        xSmall: this.xSmall,
        small: this.small,
        medium: this.medium,
        large: this.large,
        xLarge: this.xLarge
      }, t = ze(e).find((i) => e[i]);
      return t && fe[t] || d(this.size);
    },
    // Component data for both font icon and SVG wrapper span
    getDefaultData() {
      return {
        staticClass: "v-icon notranslate",
        class: {
          "v-icon--disabled": this.disabled,
          "v-icon--left": this.left,
          "v-icon--link": this.hasClickListener,
          "v-icon--right": this.right,
          "v-icon--dense": this.dense
        },
        attrs: {
          "aria-hidden": !this.hasClickListener,
          disabled: this.hasClickListener && this.disabled,
          type: this.hasClickListener ? "button" : void 0,
          ...this.attrs$
        },
        on: this.listeners$
      };
    },
    getSvgWrapperData() {
      const e = this.getSize(), t = {
        ...this.getDefaultData(),
        style: e ? {
          fontSize: e,
          height: e,
          width: e
        } : void 0
      };
      return this.applyColors(t), t;
    },
    applyColors(e) {
      e.class = {
        ...e.class,
        ...this.themeClasses
      }, this.setTextColor(this.color, e);
    },
    renderFontIcon(e, t) {
      const i = [], s = this.getDefaultData();
      let n = "material-icons";
      const r = e.indexOf("-"), o = r <= -1;
      o ? i.push(e) : (n = e.slice(0, r), Wi(n) && (n = "")), s.class[n] = !0, s.class[e] = !o;
      const a = this.getSize();
      return a && (s.style = {
        fontSize: a
      }), this.applyColors(s), t(this.hasClickListener ? "button" : this.tag, s, i);
    },
    renderSvgIcon(e, t) {
      const i = {
        class: "v-icon__svg",
        attrs: {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          role: "img",
          "aria-hidden": !0
        }
      }, s = this.getSize();
      return s && (i.style = {
        fontSize: s,
        height: s,
        width: s
      }), t(this.hasClickListener ? "button" : "span", this.getSvgWrapperData(), [t("svg", i, [t("path", {
        attrs: {
          d: e
        }
      })])]);
    },
    renderSvgIconComponent(e, t) {
      const i = {
        class: {
          "v-icon__component": !0
        }
      }, s = this.getSize();
      s && (i.style = {
        fontSize: s,
        height: s,
        width: s
      }), this.applyColors(i);
      const n = e.component;
      return i.props = e.props, i.nativeOn = i.on, t(this.hasClickListener ? "button" : "span", this.getSvgWrapperData(), [t(n, i)]);
    }
  },
  render(e) {
    const t = this.getIcon();
    return typeof t == "string" ? qi(t) ? this.renderSvgIcon(t, e) : this.renderFontIcon(t, e) : this.renderSvgIconComponent(t, e);
  }
}), X = p.extend({
  name: "v-icon",
  $_wrapperFor: Ve,
  functional: !0,
  render(e, {
    data: t,
    children: i
  }) {
    let s = "";
    return t.domProps && (s = t.domProps.textContent || t.domProps.innerHTML || s, delete t.domProps.textContent, delete t.domProps.innerHTML), e(Ve, t, s ? [s] : i);
  }
}), ji = $.extend({
  name: "v-progress-circular",
  directives: {
    intersect: Z
  },
  props: {
    button: Boolean,
    indeterminate: Boolean,
    rotate: {
      type: [Number, String],
      default: 0
    },
    size: {
      type: [Number, String],
      default: 32
    },
    width: {
      type: [Number, String],
      default: 4
    },
    value: {
      type: [Number, String],
      default: 0
    }
  },
  data: () => ({
    radius: 20,
    isVisible: !0
  }),
  computed: {
    calculatedSize() {
      return Number(this.size) + (this.button ? 8 : 0);
    },
    circumference() {
      return 2 * Math.PI * this.radius;
    },
    classes() {
      return {
        "v-progress-circular--visible": this.isVisible,
        "v-progress-circular--indeterminate": this.indeterminate,
        "v-progress-circular--button": this.button
      };
    },
    normalizedValue() {
      return this.value < 0 ? 0 : this.value > 100 ? 100 : parseFloat(this.value);
    },
    strokeDashArray() {
      return Math.round(this.circumference * 1e3) / 1e3;
    },
    strokeDashOffset() {
      return (100 - this.normalizedValue) / 100 * this.circumference + "px";
    },
    strokeWidth() {
      return Number(this.width) / +this.size * this.viewBoxSize * 2;
    },
    styles() {
      return {
        height: d(this.calculatedSize),
        width: d(this.calculatedSize)
      };
    },
    svgStyles() {
      return {
        transform: `rotate(${Number(this.rotate)}deg)`
      };
    },
    viewBoxSize() {
      return this.radius / (1 - Number(this.width) / +this.size);
    }
  },
  methods: {
    genCircle(e, t) {
      return this.$createElement("circle", {
        class: `v-progress-circular__${e}`,
        attrs: {
          fill: "transparent",
          cx: 2 * this.viewBoxSize,
          cy: 2 * this.viewBoxSize,
          r: this.radius,
          "stroke-width": this.strokeWidth,
          "stroke-dasharray": this.strokeDashArray,
          "stroke-dashoffset": t
        }
      });
    },
    genSvg() {
      const e = [this.indeterminate || this.genCircle("underlay", 0), this.genCircle("overlay", this.strokeDashOffset)];
      return this.$createElement("svg", {
        style: this.svgStyles,
        attrs: {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: `${this.viewBoxSize} ${this.viewBoxSize} ${2 * this.viewBoxSize} ${2 * this.viewBoxSize}`
        }
      }, e);
    },
    genInfo() {
      return this.$createElement("div", {
        staticClass: "v-progress-circular__info"
      }, b(this));
    },
    onObserve(e, t, i) {
      this.isVisible = i;
    }
  },
  render(e) {
    return e("div", this.setTextColor(this.color, {
      staticClass: "v-progress-circular",
      attrs: {
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": this.indeterminate ? void 0 : this.normalizedValue
      },
      class: this.classes,
      directives: [{
        name: "intersect",
        value: this.onObserve
      }],
      style: this.styles,
      on: this.$listeners
    }), [this.genSvg(), this.genInfo()]);
  }
});
function vt(e, t, i) {
  return p.extend({
    name: "registrable-inject",
    inject: {
      [e]: {
        default: null
      }
    }
  });
}
function se(e, t, i) {
  return vt(e).extend({
    name: "groupable",
    props: {
      activeClass: {
        type: String,
        default() {
          if (this[e])
            return this[e].activeClass;
        }
      },
      disabled: Boolean
    },
    data() {
      return {
        isActive: !1
      };
    },
    computed: {
      groupClasses() {
        return this.activeClass ? {
          [this.activeClass]: this.isActive
        } : {};
      }
    },
    created() {
      this[e] && this[e].register(this);
    },
    beforeDestroy() {
      this[e] && this[e].unregister(this);
    },
    methods: {
      toggle(s) {
        if (this.disabled && s) {
          s.preventDefault();
          return;
        }
        this.$emit("change");
      }
    }
  });
}
se("itemGroup");
const _ = p.extend({
  name: "routable",
  directives: {
    Ripple: V
  },
  props: {
    activeClass: String,
    append: Boolean,
    disabled: Boolean,
    exact: {
      type: Boolean,
      default: void 0
    },
    exactPath: Boolean,
    exactActiveClass: String,
    link: Boolean,
    href: [String, Object],
    to: [String, Object],
    nuxt: Boolean,
    replace: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: null
    },
    tag: String,
    target: String
  },
  data: () => ({
    isActive: !1,
    proxyClass: ""
  }),
  computed: {
    classes() {
      const e = {};
      return this.to || (this.activeClass && (e[this.activeClass] = this.isActive), this.proxyClass && (e[this.proxyClass] = this.isActive)), e;
    },
    computedRipple() {
      var e;
      return (e = this.ripple) !== null && e !== void 0 ? e : !this.disabled && this.isClickable;
    },
    isClickable() {
      return this.disabled ? !1 : !!(this.isLink || this.$listeners.click || this.$listeners["!click"] || this.$attrs.tabindex);
    },
    isLink() {
      return this.to || this.href || this.link;
    },
    styles: () => ({})
  },
  watch: {
    $route: "onRouteChange"
  },
  mounted() {
    this.onRouteChange();
  },
  methods: {
    generateRouteLink() {
      let e = this.exact, t;
      const i = {
        attrs: {
          tabindex: "tabindex" in this.$attrs ? this.$attrs.tabindex : void 0
        },
        class: this.classes,
        style: this.styles,
        props: {},
        directives: [{
          name: "ripple",
          value: this.computedRipple
        }],
        [this.to ? "nativeOn" : "on"]: {
          ...this.$listeners,
          ..."click" in this ? {
            click: this.click
          } : void 0
          // #14447
        },
        ref: "link"
      };
      if (typeof this.exact > "u" && (e = this.to === "/" || this.to === Object(this.to) && this.to.path === "/"), this.to) {
        let s = this.activeClass, n = this.exactActiveClass || s;
        this.proxyClass && (s = `${s} ${this.proxyClass}`.trim(), n = `${n} ${this.proxyClass}`.trim()), t = this.nuxt ? "nuxt-link" : "router-link", Object.assign(i.props, {
          to: this.to,
          exact: e,
          exactPath: this.exactPath,
          activeClass: s,
          exactActiveClass: n,
          append: this.append,
          replace: this.replace
        });
      } else
        t = this.href && "a" || this.tag || "div", t === "a" && this.href && (i.attrs.href = this.href);
      return this.target && (i.attrs.target = this.target), {
        tag: t,
        data: i
      };
    },
    onRouteChange() {
      if (!this.to || !this.$refs.link || !this.$route)
        return;
      const e = `${this.activeClass || ""} ${this.proxyClass || ""}`.trim(), t = `${this.exactActiveClass || ""} ${this.proxyClass || ""}`.trim() || e, i = "_vnode.data.class." + (this.exact ? t : e);
      this.$nextTick(() => {
        !k(this.$refs.link, i) === this.isActive && this.toggle();
      });
    },
    toggle() {
      this.isActive = !this.isActive;
    }
  }
}), Yi = g(
  de,
  _,
  Di,
  Ce,
  se("btnToggle"),
  ie("inputValue")
  /* @vue/component */
), Be = Yi.extend().extend({
  name: "v-btn",
  props: {
    activeClass: {
      type: String,
      default() {
        return this.btnToggle ? this.btnToggle.activeClass : "";
      }
    },
    block: Boolean,
    depressed: Boolean,
    fab: Boolean,
    icon: Boolean,
    loading: Boolean,
    outlined: Boolean,
    plain: Boolean,
    retainFocusOnClick: Boolean,
    rounded: Boolean,
    tag: {
      type: String,
      default: "button"
    },
    text: Boolean,
    tile: Boolean,
    type: {
      type: String,
      default: "button"
    },
    value: null
  },
  data: () => ({
    proxyClass: "v-btn--active"
  }),
  computed: {
    classes() {
      return {
        "v-btn": !0,
        ..._.options.computed.classes.call(this),
        "v-btn--absolute": this.absolute,
        "v-btn--block": this.block,
        "v-btn--bottom": this.bottom,
        "v-btn--disabled": this.disabled,
        "v-btn--is-elevated": this.isElevated,
        "v-btn--fab": this.fab,
        "v-btn--fixed": this.fixed,
        "v-btn--has-bg": this.hasBg,
        "v-btn--icon": this.icon,
        "v-btn--left": this.left,
        "v-btn--loading": this.loading,
        "v-btn--outlined": this.outlined,
        "v-btn--plain": this.plain,
        "v-btn--right": this.right,
        "v-btn--round": this.isRound,
        "v-btn--rounded": this.rounded,
        "v-btn--router": this.to,
        "v-btn--text": this.text,
        "v-btn--tile": this.tile,
        "v-btn--top": this.top,
        ...this.themeClasses,
        ...this.groupClasses,
        ...this.elevationClasses,
        ...this.sizeableClasses
      };
    },
    computedElevation() {
      if (!this.disabled)
        return it.options.computed.computedElevation.call(this);
    },
    computedRipple() {
      var e;
      const t = this.icon || this.fab ? {
        circle: !0
      } : !0;
      return this.disabled ? !1 : (e = this.ripple) !== null && e !== void 0 ? e : t;
    },
    hasBg() {
      return !this.text && !this.plain && !this.outlined && !this.icon;
    },
    isElevated() {
      return !this.icon && !this.text && !this.outlined && !this.depressed && !this.disabled && !this.plain && (this.elevation == null || Number(this.elevation) > 0);
    },
    isRound() {
      return !!(this.icon || this.fab);
    },
    styles() {
      return {
        ...this.measurableStyles
      };
    }
  },
  created() {
    [["flat", "text"], ["outline", "outlined"], ["round", "rounded"]].forEach(([t, i]) => {
      this.$attrs.hasOwnProperty(t) && Y(t, i, this);
    });
  },
  methods: {
    click(e) {
      !this.retainFocusOnClick && !this.fab && e.detail && this.$el.blur(), this.$emit("click", e), this.btnToggle && this.toggle();
    },
    genContent() {
      return this.$createElement("span", {
        staticClass: "v-btn__content"
      }, b(this));
    },
    genLoader() {
      return this.$createElement("span", {
        class: "v-btn__loader"
      }, b(this, "loader") || [this.$createElement(ji, {
        props: {
          indeterminate: !0,
          size: 23,
          width: 2
        }
      })]);
    }
  },
  render(e) {
    const t = [this.genContent(), this.loading && this.genLoader()], {
      tag: i,
      data: s
    } = this.generateRouteLink(), n = this.hasBg ? this.setBackgroundColor : this.setTextColor;
    return i === "button" && (s.attrs.type = this.type, s.attrs.disabled = this.disabled), s.attrs.value = ["string", "number"].includes(typeof this.value) ? this.value : JSON.stringify(this.value), e(i, this.disabled ? s : n(this.color, s), t);
  }
});
function ae(e = [], ...t) {
  return Array().concat(e, ...t);
}
function yt(e, t = "top center 0", i) {
  return {
    name: e,
    functional: !0,
    props: {
      group: {
        type: Boolean,
        default: !1
      },
      hideOnLeave: {
        type: Boolean,
        default: !1
      },
      leaveAbsolute: {
        type: Boolean,
        default: !1
      },
      mode: {
        type: String,
        default: i
      },
      origin: {
        type: String,
        default: t
      }
    },
    render(s, n) {
      const r = `transition${n.props.group ? "-group" : ""}`, o = {
        props: {
          name: e,
          mode: n.props.mode
        },
        on: {
          beforeEnter(a) {
            a.style.transformOrigin = n.props.origin, a.style.webkitTransformOrigin = n.props.origin;
          }
        }
      };
      return n.props.leaveAbsolute && (o.on.leave = ae(o.on.leave, (a) => {
        const {
          offsetTop: l,
          offsetLeft: c,
          offsetWidth: u,
          offsetHeight: f
        } = a;
        a._transitionInitialStyles = {
          position: a.style.position,
          top: a.style.top,
          left: a.style.left,
          width: a.style.width,
          height: a.style.height
        }, a.style.position = "absolute", a.style.top = l + "px", a.style.left = c + "px", a.style.width = u + "px", a.style.height = f + "px";
      }), o.on.afterLeave = ae(o.on.afterLeave, (a) => {
        if (a && a._transitionInitialStyles) {
          const {
            position: l,
            top: c,
            left: u,
            width: f,
            height: v
          } = a._transitionInitialStyles;
          delete a._transitionInitialStyles, a.style.position = l || "", a.style.top = c || "", a.style.left = u || "", a.style.width = f || "", a.style.height = v || "";
        }
      })), n.props.hideOnLeave && (o.on.leave = ae(o.on.leave, (a) => {
        a.style.setProperty("display", "none", "important");
      })), s(r, T(n.data, o), n.children);
    }
  };
}
function bt(e, t, i = "in-out") {
  return {
    name: e,
    functional: !0,
    props: {
      mode: {
        type: String,
        default: i
      }
    },
    render(s, n) {
      return s("transition", T(n.data, {
        props: {
          name: e
        },
        on: t
      }), n.children);
    }
  };
}
function xt(e = "", t = !1) {
  const i = t ? "width" : "height", s = `offset${Nt(i)}`;
  return {
    beforeEnter(o) {
      o._parent = o.parentNode, o._initialStyle = {
        transition: o.style.transition,
        overflow: o.style.overflow,
        [i]: o.style[i]
      };
    },
    enter(o) {
      const a = o._initialStyle;
      o.style.setProperty("transition", "none", "important"), o.style.overflow = "hidden";
      const l = `${o[s]}px`;
      o.style[i] = "0", o.offsetHeight, o.style.transition = a.transition, e && o._parent && o._parent.classList.add(e), requestAnimationFrame(() => {
        o.style[i] = l;
      });
    },
    afterEnter: r,
    enterCancelled: r,
    leave(o) {
      o._initialStyle = {
        transition: "",
        overflow: o.style.overflow,
        [i]: o.style[i]
      }, o.style.overflow = "hidden", o.style[i] = `${o[s]}px`, o.offsetHeight, requestAnimationFrame(() => o.style[i] = "0");
    },
    afterLeave: n,
    leaveCancelled: n
  };
  function n(o) {
    e && o._parent && o._parent.classList.remove(e), r(o);
  }
  function r(o) {
    const a = o._initialStyle[i];
    o.style.overflow = o._initialStyle.overflow, a != null && (o.style[i] = a), delete o._initialStyle;
  }
}
const Zi = yt("fade-transition"), Gi = yt("slide-x-transition"), js = bt("expand-transition", xt()), Ki = bt("expand-x-transition", xt("", !0)), $t = g($, Ce, _, y, se("chipGroup"), ie("inputValue")).extend({
  name: "v-chip",
  props: {
    active: {
      type: Boolean,
      default: !0
    },
    activeClass: {
      type: String,
      default() {
        return this.chipGroup ? this.chipGroup.activeClass : "";
      }
    },
    close: Boolean,
    closeIcon: {
      type: String,
      default: "$delete"
    },
    closeLabel: {
      type: String,
      default: "$vuetify.close"
    },
    disabled: Boolean,
    draggable: Boolean,
    filter: Boolean,
    filterIcon: {
      type: String,
      default: "$complete"
    },
    label: Boolean,
    link: Boolean,
    outlined: Boolean,
    pill: Boolean,
    tag: {
      type: String,
      default: "span"
    },
    textColor: String,
    value: null
  },
  data: () => ({
    proxyClass: "v-chip--active"
  }),
  computed: {
    classes() {
      return {
        "v-chip": !0,
        ..._.options.computed.classes.call(this),
        "v-chip--clickable": this.isClickable,
        "v-chip--disabled": this.disabled,
        "v-chip--draggable": this.draggable,
        "v-chip--label": this.label,
        "v-chip--link": this.isLink,
        "v-chip--no-color": !this.color,
        "v-chip--outlined": this.outlined,
        "v-chip--pill": this.pill,
        "v-chip--removable": this.hasClose,
        ...this.themeClasses,
        ...this.sizeableClasses,
        ...this.groupClasses
      };
    },
    hasClose() {
      return !!this.close;
    },
    isClickable() {
      return !!(_.options.computed.isClickable.call(this) || this.chipGroup);
    }
  },
  created() {
    [["outline", "outlined"], ["selected", "input-value"], ["value", "active"], ["@input", "@active.sync"]].forEach(([t, i]) => {
      this.$attrs.hasOwnProperty(t) && Y(t, i, this);
    });
  },
  methods: {
    click(e) {
      this.$emit("click", e), this.chipGroup && this.toggle();
    },
    genFilter() {
      const e = [];
      return this.isActive && e.push(this.$createElement(X, {
        staticClass: "v-chip__filter",
        props: {
          left: !0
        }
      }, this.filterIcon)), this.$createElement(Ki, e);
    },
    genClose() {
      return this.$createElement(X, {
        staticClass: "v-chip__close",
        props: {
          right: !0,
          size: 18
        },
        attrs: {
          "aria-label": this.$vuetify.lang.t(this.closeLabel)
        },
        on: {
          click: (e) => {
            e.stopPropagation(), e.preventDefault(), this.$emit("click:close"), this.$emit("update:active", !1);
          }
        }
      }, this.closeIcon);
    },
    genContent() {
      return this.$createElement("span", {
        staticClass: "v-chip__content"
      }, [this.filter && this.genFilter(), b(this), this.hasClose && this.genClose()]);
    }
  },
  render(e) {
    const t = [this.genContent()];
    let {
      tag: i,
      data: s
    } = this.generateRouteLink();
    s.attrs = {
      ...s.attrs,
      draggable: this.draggable ? "true" : void 0,
      tabindex: this.chipGroup && !this.disabled ? 0 : s.attrs.tabindex
    }, s.directives.push({
      name: "show",
      value: this.active
    }), s = this.setBackgroundColor(this.color, s);
    const n = this.textColor || this.outlined && this.color;
    return e(i, this.setTextColor(n, s), t);
  }
}), Xi = y.extend({
  name: "v-theme-provider",
  props: {
    root: Boolean
  },
  computed: {
    isDark() {
      return this.root ? this.rootIsDark : y.options.computed.isDark.call(this);
    }
  },
  render() {
    return this.$slots.default && this.$slots.default.find((e) => !e.isComment && e.text !== " ");
  }
}), Ct = p.extend().extend({
  name: "delayable",
  props: {
    openDelay: {
      type: [Number, String],
      default: 0
    },
    closeDelay: {
      type: [Number, String],
      default: 0
    }
  },
  data: () => ({
    openTimeout: void 0,
    closeTimeout: void 0
  }),
  methods: {
    /**
     * Clear any pending delay timers from executing
     */
    clearDelay() {
      clearTimeout(this.openTimeout), clearTimeout(this.closeTimeout);
    },
    /**
     * Runs callback after a specified delay
     */
    runDelay(e, t) {
      this.clearDelay();
      const i = parseInt(this[`${e}Delay`], 10);
      this[`${e}Timeout`] = setTimeout(t || (() => {
        this.isActive = {
          open: !0,
          close: !1
        }[e];
      }), i);
    }
  }
}), Ui = g(Ct, Ri), we = Ui.extend({
  name: "activatable",
  props: {
    activator: {
      default: null,
      validator: (e) => ["string", "object"].includes(typeof e)
    },
    disabled: Boolean,
    internalActivator: Boolean,
    openOnClick: {
      type: Boolean,
      default: !0
    },
    openOnHover: Boolean,
    openOnFocus: Boolean
  },
  data: () => ({
    // Do not use this directly, call getActivator() instead
    activatorElement: null,
    activatorNode: [],
    events: ["click", "mouseenter", "mouseleave", "focus"],
    listeners: {}
  }),
  watch: {
    activator: "resetActivator",
    openOnFocus: "resetActivator",
    openOnHover: "resetActivator"
  },
  mounted() {
    const e = Ht(this, "activator");
    e && ["v-slot", "normal"].includes(e) && w(`The activator slot must be bound, try '<template v-slot:activator="{ on }"><v-btn v-on="on">'`, this), this.addActivatorEvents();
  },
  beforeDestroy() {
    this.removeActivatorEvents();
  },
  methods: {
    addActivatorEvents() {
      if (!this.activator || this.disabled || !this.getActivator())
        return;
      this.listeners = this.genActivatorListeners();
      const e = Object.keys(this.listeners);
      for (const t of e)
        this.getActivator().addEventListener(t, this.listeners[t]);
    },
    genActivator() {
      const e = b(this, "activator", Object.assign(this.getValueProxy(), {
        on: this.genActivatorListeners(),
        attrs: this.genActivatorAttributes()
      })) || [];
      return this.activatorNode = e, e;
    },
    genActivatorAttributes() {
      return {
        role: this.openOnClick && !this.openOnHover ? "button" : void 0,
        "aria-haspopup": !0,
        "aria-expanded": String(this.isActive)
      };
    },
    genActivatorListeners() {
      if (this.disabled)
        return {};
      const e = {};
      return this.openOnHover ? (e.mouseenter = (t) => {
        this.getActivator(t), this.runDelay("open");
      }, e.mouseleave = (t) => {
        this.getActivator(t), this.runDelay("close");
      }) : this.openOnClick && (e.click = (t) => {
        const i = this.getActivator(t);
        i && i.focus(), t.stopPropagation(), this.isActive = !this.isActive;
      }), this.openOnFocus && (e.focus = (t) => {
        this.getActivator(t), t.stopPropagation(), this.isActive = !this.isActive;
      }), e;
    },
    getActivator(e) {
      if (this.activatorElement)
        return this.activatorElement;
      let t = null;
      if (this.activator) {
        const i = this.internalActivator ? this.$el : document;
        typeof this.activator == "string" ? t = i.querySelector(this.activator) : this.activator.$el ? t = this.activator.$el : t = this.activator;
      } else if (this.activatorNode.length === 1 || this.activatorNode.length && !e) {
        const i = this.activatorNode[0].componentInstance;
        i && i.$options.mixins && //                         Activatable is indirectly used via Menuable
        i.$options.mixins.some((s) => s.options && ["activatable", "menuable"].includes(s.options.name)) ? t = i.getActivator() : t = this.activatorNode[0].elm;
      } else
        e && (t = e.currentTarget || e.target);
      return this.activatorElement = (t == null ? void 0 : t.nodeType) === Node.ELEMENT_NODE ? t : null, this.activatorElement;
    },
    getContentSlot() {
      return b(this, "default", this.getValueProxy(), !0);
    },
    getValueProxy() {
      const e = this;
      return {
        get value() {
          return e.isActive;
        },
        set value(t) {
          e.isActive = t;
        }
      };
    },
    removeActivatorEvents() {
      if (!this.activator || !this.activatorElement)
        return;
      const e = Object.keys(this.listeners);
      for (const t of e)
        this.activatorElement.removeEventListener(t, this.listeners[t]);
      this.listeners = {};
    },
    resetActivator() {
      this.removeActivatorEvents(), this.activatorElement = null, this.getActivator(), this.addActivatorEvents();
    }
  }
});
function wt(e) {
  const t = [];
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    s.isActive && s.isDependent ? t.push(s) : t.push(...wt(s.$children));
  }
  return t;
}
const St = g().extend({
  name: "dependent",
  data() {
    return {
      closeDependents: !0,
      isActive: !1,
      isDependent: !0
    };
  },
  watch: {
    isActive(e) {
      if (e)
        return;
      const t = this.getOpenDependents();
      for (let i = 0; i < t.length; i++)
        t[i].isActive = !1;
    }
  },
  methods: {
    getOpenDependents() {
      return this.closeDependents ? wt(this.$children) : [];
    },
    getOpenDependentElements() {
      const e = [], t = this.getOpenDependents();
      for (let i = 0; i < t.length; i++)
        e.push(...t[i].getClickableDependentElements());
      return e;
    },
    getClickableDependentElements() {
      const e = [this.$el];
      return this.$refs.content && e.push(this.$refs.content), this.overlay && e.push(this.overlay.$el), e.push(...this.getOpenDependentElements()), e;
    }
  }
}), Qi = p.extend().extend({
  name: "stackable",
  data() {
    return {
      stackElement: null,
      stackExclude: null,
      stackMinZIndex: 0,
      isActive: !1
    };
  },
  computed: {
    activeZIndex() {
      if (typeof window > "u")
        return 0;
      const e = this.stackElement || this.$refs.content, t = this.isActive ? this.getMaxZIndex(this.stackExclude || [e]) + 2 : W(e);
      return t == null ? t : parseInt(t);
    }
  },
  methods: {
    getMaxZIndex(e = []) {
      const t = this.$el, i = [this.stackMinZIndex, W(t)], s = [...document.getElementsByClassName("v-menu__content--active"), ...document.getElementsByClassName("v-dialog__content--active")];
      for (let n = 0; n < s.length; n++)
        e.includes(s[n]) || i.push(W(s[n]));
      return Math.max(...i);
    }
  }
}), Ji = p.extend().extend({
  name: "bootable",
  props: {
    eager: Boolean
  },
  data: () => ({
    isBooted: !1
  }),
  computed: {
    hasContent() {
      return this.isBooted || this.eager || this.isActive;
    }
  },
  watch: {
    isActive() {
      this.isBooted = !0;
    }
  },
  created() {
    "lazy" in this.$attrs && xe("lazy", this);
  },
  methods: {
    showLazyContent(e) {
      return this.hasContent && e ? e() : [this.$createElement()];
    }
  }
});
function es(e) {
  const t = typeof e;
  return t === "boolean" || t === "string" ? !0 : e.nodeType === Node.ELEMENT_NODE;
}
function Ee(e) {
  e.forEach((t) => {
    t.elm && t.elm.parentNode && t.elm.parentNode.removeChild(t.elm);
  });
}
const ts = g(Ji).extend({
  name: "detachable",
  props: {
    attach: {
      default: !1,
      validator: es
    },
    contentClass: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    activatorNode: null,
    hasDetached: !1
  }),
  watch: {
    attach() {
      this.hasDetached = !1, this.initDetach();
    },
    hasContent() {
      this.$nextTick(this.initDetach);
    }
  },
  beforeMount() {
    this.$nextTick(() => {
      this.activatorNode && (Array.isArray(this.activatorNode) ? this.activatorNode : [this.activatorNode]).forEach((t) => {
        if (!t.elm || !this.$el.parentNode)
          return;
        const i = this.$el === this.$el.parentNode.firstChild ? this.$el : this.$el.nextSibling;
        this.$el.parentNode.insertBefore(t.elm, i);
      });
    });
  },
  mounted() {
    this.hasContent && this.initDetach();
  },
  deactivated() {
    this.isActive = !1;
  },
  beforeDestroy() {
    this.$refs.content && this.$refs.content.parentNode && this.$refs.content.parentNode.removeChild(this.$refs.content);
  },
  destroyed() {
    if (this.activatorNode) {
      const e = Array.isArray(this.activatorNode) ? this.activatorNode : [this.activatorNode];
      if (this.$el.isConnected) {
        const t = new MutationObserver((i) => {
          i.some((s) => Array.from(s.removedNodes).includes(this.$el)) && (t.disconnect(), Ee(e));
        });
        t.observe(this.$el.parentNode, {
          subtree: !1,
          childList: !0
        });
      } else
        Ee(e);
    }
  },
  methods: {
    getScopeIdAttrs() {
      const e = k(this.$vnode, "context.$options._scopeId");
      return e && {
        [e]: ""
      };
    },
    initDetach() {
      if (this._isDestroyed || !this.$refs.content || this.hasDetached || // Leave menu in place if attached
      // and dev has not changed target
      this.attach === "" || // If used as a boolean prop (<v-menu attach>)
      this.attach === !0 || // If bound to a boolean (<v-menu :attach="true">)
      this.attach === "attach")
        return;
      let e;
      if (this.attach === !1 ? e = document.querySelector("[data-app]") : typeof this.attach == "string" ? e = document.querySelector(this.attach) : e = this.attach, !e) {
        S(`Unable to locate target ${this.attach || "[data-app]"}`, this);
        return;
      }
      e.appendChild(this.$refs.content), this.hasDetached = !0;
    }
  }
}), is = g(Qi, $e(["top", "right", "bottom", "left", "absolute"]), we, ts), It = is.extend().extend({
  name: "menuable",
  props: {
    allowOverflow: Boolean,
    light: Boolean,
    dark: Boolean,
    maxWidth: {
      type: [Number, String],
      default: "auto"
    },
    minWidth: [Number, String],
    nudgeBottom: {
      type: [Number, String],
      default: 0
    },
    nudgeLeft: {
      type: [Number, String],
      default: 0
    },
    nudgeRight: {
      type: [Number, String],
      default: 0
    },
    nudgeTop: {
      type: [Number, String],
      default: 0
    },
    nudgeWidth: {
      type: [Number, String],
      default: 0
    },
    offsetOverflow: Boolean,
    positionX: {
      type: Number,
      default: null
    },
    positionY: {
      type: Number,
      default: null
    },
    zIndex: {
      type: [Number, String],
      default: null
    }
  },
  data: () => ({
    activatorNode: [],
    absoluteX: 0,
    absoluteY: 0,
    activatedBy: null,
    activatorFixed: !1,
    dimensions: {
      activator: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: 0,
        height: 0,
        offsetTop: 0,
        scrollHeight: 0,
        offsetLeft: 0
      },
      content: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: 0,
        height: 0,
        offsetTop: 0,
        scrollHeight: 0
      }
    },
    relativeYOffset: 0,
    hasJustFocused: !1,
    hasWindow: !1,
    inputActivator: !1,
    isContentActive: !1,
    pageWidth: 0,
    pageYOffset: 0,
    stackClass: "v-menu__content--active",
    stackMinZIndex: 6
  }),
  computed: {
    computedLeft() {
      const e = this.dimensions.activator, t = this.dimensions.content, i = (this.attach !== !1 ? e.offsetLeft : e.left) || 0, s = Math.max(e.width, t.width);
      let n = 0;
      if (n += i, (this.left || this.$vuetify.rtl && !this.right) && (n -= s - e.width), this.offsetX) {
        const r = isNaN(Number(this.maxWidth)) ? e.width : Math.min(e.width, Number(this.maxWidth));
        n += this.left ? -r : e.width;
      }
      return this.nudgeLeft && (n -= parseInt(this.nudgeLeft)), this.nudgeRight && (n += parseInt(this.nudgeRight)), n;
    },
    computedTop() {
      const e = this.dimensions.activator, t = this.dimensions.content;
      let i = 0;
      return this.top && (i += e.height - t.height), this.attach !== !1 ? i += e.offsetTop : i += e.top + this.pageYOffset, this.offsetY && (i += this.top ? -e.height : e.height), this.nudgeTop && (i -= parseInt(this.nudgeTop)), this.nudgeBottom && (i += parseInt(this.nudgeBottom)), i;
    },
    hasActivator() {
      return !!this.$slots.activator || !!this.$scopedSlots.activator || !!this.activator || !!this.inputActivator;
    },
    absoluteYOffset() {
      return this.pageYOffset - this.relativeYOffset;
    }
  },
  watch: {
    disabled(e) {
      e && this.callDeactivate();
    },
    isActive(e) {
      this.disabled || (e ? this.callActivate() : this.callDeactivate());
    },
    positionX: "updateDimensions",
    positionY: "updateDimensions"
  },
  beforeMount() {
    this.hasWindow = typeof window < "u", this.hasWindow && window.addEventListener("resize", this.updateDimensions, !1);
  },
  beforeDestroy() {
    this.hasWindow && window.removeEventListener("resize", this.updateDimensions, !1);
  },
  methods: {
    absolutePosition() {
      return {
        offsetTop: this.positionY || this.absoluteY,
        offsetLeft: this.positionX || this.absoluteX,
        scrollHeight: 0,
        top: this.positionY || this.absoluteY,
        bottom: this.positionY || this.absoluteY,
        left: this.positionX || this.absoluteX,
        right: this.positionX || this.absoluteX,
        height: 0,
        width: 0
      };
    },
    activate() {
    },
    calcLeft(e) {
      return d(this.attach !== !1 ? this.computedLeft : this.calcXOverflow(this.computedLeft, e));
    },
    calcTop() {
      return d(this.attach !== !1 ? this.computedTop : this.calcYOverflow(this.computedTop));
    },
    calcXOverflow(e, t) {
      const i = e + t - this.pageWidth + 12;
      return (!this.left || this.right) && i > 0 ? e = Math.max(e - i, 0) : e = Math.max(e, 12), e + this.getOffsetLeft();
    },
    calcYOverflow(e) {
      const t = this.getInnerHeight(), i = this.absoluteYOffset + t, s = this.dimensions.activator, n = this.dimensions.content.height, r = e + n, o = i < r;
      return o && this.offsetOverflow && // If we don't have enough room to offset
      // the overflow, don't offset
      s.top > n ? e = this.pageYOffset + (s.top - n) : o && !this.allowOverflow ? e = i - n - 12 : e < this.absoluteYOffset && !this.allowOverflow && (e = this.absoluteYOffset + 12), e < 12 ? 12 : e;
    },
    callActivate() {
      this.hasWindow && this.activate();
    },
    callDeactivate() {
      this.isContentActive = !1, this.deactivate();
    },
    checkForPageYOffset() {
      this.hasWindow && (this.pageYOffset = this.activatorFixed ? 0 : this.getOffsetTop());
    },
    checkActivatorFixed() {
      if (this.attach !== !1) {
        this.activatorFixed = !1;
        return;
      }
      let e = this.getActivator();
      for (; e; ) {
        if (window.getComputedStyle(e).position === "fixed") {
          this.activatorFixed = !0;
          return;
        }
        e = e.offsetParent;
      }
      this.activatorFixed = !1;
    },
    deactivate() {
    },
    genActivatorListeners() {
      const e = we.options.methods.genActivatorListeners.call(this), t = e.click;
      return t && (e.click = (i) => {
        this.openOnClick && t && t(i), this.absoluteX = i.clientX, this.absoluteY = i.clientY;
      }), e;
    },
    getInnerHeight() {
      return this.hasWindow ? window.innerHeight || document.documentElement.clientHeight : 0;
    },
    getOffsetLeft() {
      return this.hasWindow ? window.pageXOffset || document.documentElement.scrollLeft : 0;
    },
    getOffsetTop() {
      return this.hasWindow ? window.pageYOffset || document.documentElement.scrollTop : 0;
    },
    getRoundedBoundedClientRect(e) {
      const t = e.getBoundingClientRect();
      return {
        top: Math.round(t.top),
        left: Math.round(t.left),
        bottom: Math.round(t.bottom),
        right: Math.round(t.right),
        width: Math.round(t.width),
        height: Math.round(t.height)
      };
    },
    measure(e) {
      if (!e || !this.hasWindow)
        return null;
      const t = this.getRoundedBoundedClientRect(e);
      if (this.attach !== !1) {
        const i = window.getComputedStyle(e);
        t.left = parseInt(i.marginLeft), t.top = parseInt(i.marginTop);
      }
      return t;
    },
    sneakPeek(e) {
      requestAnimationFrame(() => {
        const t = this.$refs.content;
        if (!t || t.style.display !== "none") {
          e();
          return;
        }
        t.style.display = "inline-block", e(), t.style.display = "none";
      });
    },
    startTransition() {
      return new Promise((e) => requestAnimationFrame(() => {
        this.isContentActive = this.hasJustFocused = this.isActive, e();
      }));
    },
    updateDimensions() {
      this.hasWindow = typeof window < "u", this.checkActivatorFixed(), this.checkForPageYOffset(), this.pageWidth = document.documentElement.clientWidth;
      const e = {
        activator: {
          ...this.dimensions.activator
        },
        content: {
          ...this.dimensions.content
        }
      };
      if (!this.hasActivator || this.absolute)
        e.activator = this.absolutePosition();
      else {
        const t = this.getActivator();
        if (!t)
          return;
        e.activator = this.measure(t), e.activator.offsetLeft = t.offsetLeft, this.attach !== !1 ? e.activator.offsetTop = t.offsetTop : e.activator.offsetTop = 0;
      }
      this.sneakPeek(() => {
        if (this.$refs.content) {
          if (this.$refs.content.offsetParent) {
            const t = this.getRoundedBoundedClientRect(this.$refs.content.offsetParent);
            this.relativeYOffset = window.pageYOffset + t.top, e.activator.top -= this.relativeYOffset, e.activator.left -= window.pageXOffset + t.left;
          }
          e.content = this.measure(this.$refs.content);
        }
        this.dimensions = e;
      });
    }
  }
}), ss = p.extend({
  name: "returnable",
  props: {
    returnValue: null
  },
  data: () => ({
    isActive: !1,
    originalValue: null
  }),
  watch: {
    isActive(e) {
      e ? this.originalValue = this.returnValue : this.$emit("update:return-value", this.originalValue);
    }
  },
  methods: {
    save(e) {
      this.originalValue = e, setTimeout(() => {
        this.isActive = !1;
      });
    }
  }
}), ns = g(St, Ct, ss, st, y, It), rs = ns.extend({
  name: "v-menu",
  directives: {
    ClickOutside: at,
    Resize: lt
  },
  provide() {
    return {
      isInMenu: !0,
      // Pass theme through to default slot
      theme: this.theme
    };
  },
  props: {
    auto: Boolean,
    closeOnClick: {
      type: Boolean,
      default: !0
    },
    closeOnContentClick: {
      type: Boolean,
      default: !0
    },
    disabled: Boolean,
    disableKeys: Boolean,
    maxHeight: {
      type: [Number, String],
      default: "auto"
    },
    offsetX: Boolean,
    offsetY: Boolean,
    openOnHover: Boolean,
    origin: {
      type: String,
      default: "top left"
    },
    transition: {
      type: [Boolean, String],
      default: "v-menu-transition"
    },
    contentProps: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      calculatedTopAuto: 0,
      defaultOffset: 8,
      hasJustFocused: !1,
      listIndex: -1,
      resizeTimeout: 0,
      selectedIndex: null,
      tiles: []
    };
  },
  computed: {
    activeTile() {
      return this.tiles[this.listIndex];
    },
    calculatedLeft() {
      const e = Math.max(this.dimensions.content.width, parseFloat(this.calculatedMinWidth));
      return this.auto ? d(this.calcXOverflow(this.calcLeftAuto(), e)) || "0" : this.calcLeft(e) || "0";
    },
    calculatedMaxHeight() {
      return (this.auto ? "200px" : d(this.maxHeight)) || "0";
    },
    calculatedMaxWidth() {
      return d(this.maxWidth) || "0";
    },
    calculatedMinWidth() {
      if (this.minWidth)
        return d(this.minWidth) || "0";
      const e = Math.min(this.dimensions.activator.width + Number(this.nudgeWidth) + (this.auto ? 16 : 0), Math.max(this.pageWidth - 24, 0)), t = isNaN(parseInt(this.calculatedMaxWidth)) ? e : parseInt(this.calculatedMaxWidth);
      return d(Math.min(t, e)) || "0";
    },
    calculatedTop() {
      return (this.auto ? d(this.calcYOverflow(this.calculatedTopAuto)) : this.calcTop()) || "0";
    },
    hasClickableTiles() {
      return !!this.tiles.find((e) => e.tabIndex > -1);
    },
    styles() {
      return {
        maxHeight: this.calculatedMaxHeight,
        minWidth: this.calculatedMinWidth,
        maxWidth: this.calculatedMaxWidth,
        top: this.calculatedTop,
        left: this.calculatedLeft,
        transformOrigin: this.origin,
        zIndex: this.zIndex || this.activeZIndex
      };
    }
  },
  watch: {
    isActive(e) {
      e || (this.listIndex = -1);
    },
    isContentActive(e) {
      this.hasJustFocused = e;
    },
    listIndex(e, t) {
      if (e in this.tiles) {
        const i = this.tiles[e];
        i.classList.add("v-list-item--highlighted");
        const s = this.$refs.content.scrollTop, n = this.$refs.content.clientHeight;
        s > i.offsetTop - 8 ? M(i.offsetTop - i.clientHeight, {
          appOffset: !1,
          duration: 300,
          container: this.$refs.content
        }) : s + n < i.offsetTop + i.clientHeight + 8 && M(i.offsetTop - n + i.clientHeight * 2, {
          appOffset: !1,
          duration: 300,
          container: this.$refs.content
        });
      }
      t in this.tiles && this.tiles[t].classList.remove("v-list-item--highlighted");
    }
  },
  created() {
    this.$attrs.hasOwnProperty("full-width") && xe("full-width", this);
  },
  mounted() {
    this.isActive && this.callActivate();
  },
  methods: {
    activate() {
      this.updateDimensions(), requestAnimationFrame(() => {
        this.startTransition().then(() => {
          this.$refs.content && (this.calculatedTopAuto = this.calcTopAuto(), this.auto && (this.$refs.content.scrollTop = this.calcScrollPosition()));
        });
      });
    },
    calcScrollPosition() {
      const e = this.$refs.content, t = e.querySelector(".v-list-item--active"), i = e.scrollHeight - e.offsetHeight;
      return t ? Math.min(i, Math.max(0, t.offsetTop - e.offsetHeight / 2 + t.offsetHeight / 2)) : e.scrollTop;
    },
    calcLeftAuto() {
      return parseInt(this.dimensions.activator.left - this.defaultOffset * 2);
    },
    calcTopAuto() {
      const e = this.$refs.content, t = e.querySelector(".v-list-item--active");
      if (t || (this.selectedIndex = null), this.offsetY || !t)
        return this.computedTop;
      this.selectedIndex = Array.from(this.tiles).indexOf(t);
      const i = t.offsetTop - this.calcScrollPosition(), s = e.querySelector(".v-list-item").offsetTop;
      return this.computedTop - i - s - 1;
    },
    changeListIndex(e) {
      if (this.getTiles(), !(!this.isActive || !this.hasClickableTiles)) {
        if (e.keyCode === h.tab) {
          this.isActive = !1;
          return;
        } else if (e.keyCode === h.down)
          this.nextTile();
        else if (e.keyCode === h.up)
          this.prevTile();
        else if (e.keyCode === h.end)
          this.lastTile();
        else if (e.keyCode === h.home)
          this.firstTile();
        else if (e.keyCode === h.enter && this.listIndex !== -1)
          this.tiles[this.listIndex].click();
        else
          return;
        e.preventDefault();
      }
    },
    closeConditional(e) {
      const t = e.target;
      return this.isActive && !this._isDestroyed && this.closeOnClick && !this.$refs.content.contains(t);
    },
    genActivatorAttributes() {
      const e = we.options.methods.genActivatorAttributes.call(this);
      return this.activeTile && this.activeTile.id ? {
        ...e,
        "aria-activedescendant": this.activeTile.id
      } : e;
    },
    genActivatorListeners() {
      const e = It.options.methods.genActivatorListeners.call(this);
      return this.disableKeys || (e.keydown = this.onKeyDown), e;
    },
    genTransition() {
      const e = this.genContent();
      return this.transition ? this.$createElement("transition", {
        props: {
          name: this.transition
        }
      }, [e]) : e;
    },
    genDirectives() {
      const e = [{
        name: "show",
        value: this.isContentActive
      }];
      return !this.openOnHover && this.closeOnClick && e.push({
        name: "click-outside",
        value: {
          handler: () => {
            this.isActive = !1;
          },
          closeConditional: this.closeConditional,
          include: () => [this.$el, ...this.getOpenDependentElements()]
        }
      }), e;
    },
    genContent() {
      const e = {
        attrs: {
          ...this.getScopeIdAttrs(),
          ...this.contentProps,
          role: "role" in this.$attrs ? this.$attrs.role : "menu"
        },
        staticClass: "v-menu__content",
        class: {
          ...this.rootThemeClasses,
          ...this.roundedClasses,
          "v-menu__content--auto": this.auto,
          "v-menu__content--fixed": this.activatorFixed,
          menuable__content__active: this.isActive,
          [this.contentClass.trim()]: !0
        },
        style: this.styles,
        directives: this.genDirectives(),
        ref: "content",
        on: {
          click: (t) => {
            t.target.getAttribute("disabled") || this.closeOnContentClick && (this.isActive = !1);
          },
          keydown: this.onKeyDown
        }
      };
      return this.$listeners.scroll && (e.on = e.on || {}, e.on.scroll = this.$listeners.scroll), !this.disabled && this.openOnHover && (e.on = e.on || {}, e.on.mouseenter = this.mouseEnterHandler), this.openOnHover && (e.on = e.on || {}, e.on.mouseleave = this.mouseLeaveHandler), this.$createElement("div", e, this.getContentSlot());
    },
    getTiles() {
      this.$refs.content && (this.tiles = Array.from(this.$refs.content.querySelectorAll(".v-list-item, .v-divider, .v-subheader")));
    },
    mouseEnterHandler() {
      this.runDelay("open", () => {
        this.hasJustFocused || (this.hasJustFocused = !0);
      });
    },
    mouseLeaveHandler(e) {
      this.runDelay("close", () => {
        var t;
        !((t = this.$refs.content) === null || t === void 0) && t.contains(e.relatedTarget) || requestAnimationFrame(() => {
          this.isActive = !1, this.callDeactivate();
        });
      });
    },
    nextTile() {
      const e = this.tiles[this.listIndex + 1];
      if (!e) {
        if (!this.tiles.length)
          return;
        this.listIndex = -1, this.nextTile();
        return;
      }
      this.listIndex++, e.tabIndex === -1 && this.nextTile();
    },
    prevTile() {
      const e = this.tiles[this.listIndex - 1];
      if (!e) {
        if (!this.tiles.length)
          return;
        this.listIndex = this.tiles.length, this.prevTile();
        return;
      }
      this.listIndex--, e.tabIndex === -1 && this.prevTile();
    },
    lastTile() {
      const e = this.tiles[this.tiles.length - 1];
      e && (this.listIndex = this.tiles.length - 1, e.tabIndex === -1 && this.prevTile());
    },
    firstTile() {
      const e = this.tiles[0];
      e && (this.listIndex = 0, e.tabIndex === -1 && this.nextTile());
    },
    onKeyDown(e) {
      if (!this.disableKeys) {
        if (e.keyCode === h.esc) {
          setTimeout(() => {
            this.isActive = !1;
          });
          const t = this.getActivator();
          this.$nextTick(() => t && t.focus());
        } else
          !this.isActive && [h.up, h.down].includes(e.keyCode) && (this.isActive = !0);
        this.$nextTick(() => this.changeListIndex(e));
      }
    },
    onResize() {
      this.isActive && (this.$refs.content.offsetWidth, this.updateDimensions(), clearTimeout(this.resizeTimeout), this.resizeTimeout = window.setTimeout(this.updateDimensions, 100));
    }
  },
  render(e) {
    const t = {
      staticClass: "v-menu",
      class: {
        "v-menu--attached": this.attach === "" || this.attach === !0 || this.attach === "attach"
      },
      directives: [{
        arg: "500",
        name: "resize",
        value: this.onResize
      }]
    };
    return e("div", t, [!this.activator && this.genActivator(), this.showLazyContent(() => [this.$createElement(Xi, {
      props: {
        root: !0,
        light: this.light,
        dark: this.dark
      }
    }, [this.genTransition()])])]);
  }
}), os = p.extend({
  name: "v-simple-checkbox",
  functional: !0,
  directives: {
    Ripple: V
  },
  props: {
    ...$.options.props,
    ...y.options.props,
    disabled: Boolean,
    ripple: {
      type: Boolean,
      default: !0
    },
    value: Boolean,
    indeterminate: Boolean,
    indeterminateIcon: {
      type: String,
      default: "$checkboxIndeterminate"
    },
    onIcon: {
      type: String,
      default: "$checkboxOn"
    },
    offIcon: {
      type: String,
      default: "$checkboxOff"
    }
  },
  render(e, {
    props: t,
    data: i,
    listeners: s
  }) {
    const n = [];
    let r = t.offIcon;
    if (t.indeterminate ? r = t.indeterminateIcon : t.value && (r = t.onIcon), n.push(e(X, $.options.methods.setTextColor(t.value && t.color, {
      props: {
        disabled: t.disabled,
        dark: t.dark,
        light: t.light
      }
    }), r)), t.ripple && !t.disabled) {
      const o = e("div", $.options.methods.setTextColor(t.color, {
        staticClass: "v-input--selection-controls__ripple",
        directives: [{
          def: V,
          name: "ripple",
          value: {
            center: !0
          }
        }]
      }));
      n.push(o);
    }
    return e("div", T(i, {
      class: {
        "v-simple-checkbox": !0,
        "v-simple-checkbox--disabled": t.disabled
      },
      on: {
        click: (o) => {
          o.stopPropagation(), i.on && i.on.input && !t.disabled && ye(i.on.input).forEach((a) => a(!t.value));
        }
      }
    }), [e("div", {
      staticClass: "v-input--selection-controls__input"
    }, n)]);
  }
}), as = y.extend({
  name: "v-divider",
  props: {
    inset: Boolean,
    vertical: Boolean
  },
  render(e) {
    let t;
    return (!this.$attrs.role || this.$attrs.role === "separator") && (t = this.vertical ? "vertical" : "horizontal"), e("hr", {
      class: {
        "v-divider": !0,
        "v-divider--inset": this.inset,
        "v-divider--vertical": this.vertical,
        ...this.themeClasses
      },
      attrs: {
        role: "separator",
        "aria-orientation": t,
        ...this.$attrs
      },
      on: this.$listeners
    });
  }
}), ls = g(
  y
  /* @vue/component */
).extend({
  name: "v-subheader",
  props: {
    inset: Boolean
  },
  render(e) {
    return e("div", {
      staticClass: "v-subheader",
      class: {
        "v-subheader--inset": this.inset,
        ...this.themeClasses
      },
      attrs: this.$attrs,
      on: this.$listeners
    }, b(this));
  }
}), hs = de.extend().extend({
  name: "v-list",
  provide() {
    return {
      isInList: !0,
      list: this
    };
  },
  inject: {
    isInMenu: {
      default: !1
    },
    isInNav: {
      default: !1
    }
  },
  props: {
    dense: Boolean,
    disabled: Boolean,
    expand: Boolean,
    flat: Boolean,
    nav: Boolean,
    rounded: Boolean,
    subheader: Boolean,
    threeLine: Boolean,
    twoLine: Boolean
  },
  data: () => ({
    groups: []
  }),
  computed: {
    classes() {
      return {
        ...de.options.computed.classes.call(this),
        "v-list--dense": this.dense,
        "v-list--disabled": this.disabled,
        "v-list--flat": this.flat,
        "v-list--nav": this.nav,
        "v-list--rounded": this.rounded,
        "v-list--subheader": this.subheader,
        "v-list--two-line": this.twoLine,
        "v-list--three-line": this.threeLine
      };
    }
  },
  methods: {
    register(e) {
      this.groups.push(e);
    },
    unregister(e) {
      const t = this.groups.findIndex((i) => i._uid === e._uid);
      t > -1 && this.groups.splice(t, 1);
    },
    listClick(e) {
      if (!this.expand)
        for (const t of this.groups)
          t.toggle(e);
    }
  },
  render(e) {
    const t = {
      staticClass: "v-list",
      class: this.classes,
      style: this.styles,
      attrs: {
        role: this.isInNav || this.isInMenu ? void 0 : "list",
        ...this.attrs$
      },
      on: this.listeners$
    };
    return e(this.tag, this.setBackgroundColor(this.color, t), b(this));
  }
}), cs = g($, _, y, se("listItemGroup"), ie("inputValue")), le = cs.extend().extend({
  name: "v-list-item",
  directives: {
    Ripple: V
  },
  inject: {
    isInGroup: {
      default: !1
    },
    isInList: {
      default: !1
    },
    isInMenu: {
      default: !1
    },
    isInNav: {
      default: !1
    }
  },
  inheritAttrs: !1,
  props: {
    activeClass: {
      type: String,
      default() {
        return this.listItemGroup ? this.listItemGroup.activeClass : "";
      }
    },
    dense: Boolean,
    inactive: Boolean,
    link: Boolean,
    selectable: {
      type: Boolean
    },
    tag: {
      type: String,
      default: "div"
    },
    threeLine: Boolean,
    twoLine: Boolean,
    value: null
  },
  data: () => ({
    proxyClass: "v-list-item--active"
  }),
  computed: {
    classes() {
      return {
        "v-list-item": !0,
        ..._.options.computed.classes.call(this),
        "v-list-item--dense": this.dense,
        "v-list-item--disabled": this.disabled,
        "v-list-item--link": this.isClickable && !this.inactive,
        "v-list-item--selectable": this.selectable,
        "v-list-item--three-line": this.threeLine,
        "v-list-item--two-line": this.twoLine,
        ...this.themeClasses
      };
    },
    isClickable() {
      return !!(_.options.computed.isClickable.call(this) || this.listItemGroup);
    }
  },
  created() {
    this.$attrs.hasOwnProperty("avatar") && xe("avatar", this);
  },
  methods: {
    click(e) {
      e.detail && this.$el.blur(), this.$emit("click", e), this.to || this.toggle();
    },
    genAttrs() {
      const e = {
        "aria-disabled": this.disabled ? !0 : void 0,
        tabindex: this.isClickable && !this.disabled ? 0 : -1,
        ...this.$attrs
      };
      return this.$attrs.hasOwnProperty("role") || this.isInNav || (this.isInGroup ? (e.role = "option", e["aria-selected"] = String(this.isActive)) : this.isInMenu ? (e.role = this.isClickable ? "menuitem" : void 0, e.id = e.id || `list-item-${this._uid}`) : this.isInList && (e.role = "listitem")), e;
    },
    toggle() {
      this.to && this.inputValue === void 0 && (this.isActive = !this.isActive), this.$emit("change");
    }
  },
  render(e) {
    let {
      tag: t,
      data: i
    } = this.generateRouteLink();
    i.attrs = {
      ...i.attrs,
      ...this.genAttrs()
    }, i[this.to ? "nativeOn" : "on"] = {
      ...i[this.to ? "nativeOn" : "on"],
      keydown: (n) => {
        this.disabled || (n.keyCode === h.enter && this.click(n), this.$emit("keydown", n));
      }
    }, this.inactive && (t = "div"), this.inactive && this.to && (i.on = i.nativeOn, delete i.nativeOn);
    const s = b(this, "default", {
      active: this.isActive,
      toggle: this.toggle
    });
    return e(t, this.isActive ? this.setTextColor(this.color, i) : i, s);
  }
}), us = p.extend({
  name: "comparable",
  props: {
    valueComparator: {
      type: Function,
      default: ve
    }
  }
});
function ds(e = "value", t = "change") {
  return p.extend({
    name: "proxyable",
    model: {
      prop: e,
      event: t
    },
    props: {
      [e]: {
        required: !1
      }
    },
    data() {
      return {
        internalLazyValue: this[e]
      };
    },
    computed: {
      internalValue: {
        get() {
          return this.internalLazyValue;
        },
        set(i) {
          i !== this.internalLazyValue && (this.internalLazyValue = i, this.$emit(t, i));
        }
      }
    },
    watch: {
      [e](i) {
        this.internalLazyValue = i;
      }
    }
  });
}
const ps = ds(), fs = p.extend({
  name: "v-list-item-action",
  functional: !0,
  render(e, {
    data: t,
    children: i = []
  }) {
    return t.staticClass = t.staticClass ? `v-list-item__action ${t.staticClass}` : "v-list-item__action", i.filter((n) => n.isComment === !1 && n.text !== " ").length > 1 && (t.staticClass += " v-list-item__action--stack"), e("div", t, i);
  }
});
U("v-list-item__action-text", "span");
const ms = U("v-list-item__content", "div"), gs = U("v-list-item__title", "div");
U("v-list-item__subtitle", "div");
const Pe = g($, y).extend({
  name: "v-select-list",
  // https://github.com/vuejs/vue/issues/6872
  directives: {
    ripple: V
  },
  props: {
    action: Boolean,
    dense: Boolean,
    hideSelected: Boolean,
    items: {
      type: Array,
      default: () => []
    },
    itemDisabled: {
      type: [String, Array, Function],
      default: "disabled"
    },
    itemText: {
      type: [String, Array, Function],
      default: "text"
    },
    itemValue: {
      type: [String, Array, Function],
      default: "value"
    },
    noDataText: String,
    noFilter: Boolean,
    searchInput: null,
    selectedItems: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    parsedItems() {
      return this.selectedItems.map((e) => this.getValue(e));
    },
    tileActiveClass() {
      return Object.keys(this.setTextColor(this.color).class || {}).join(" ");
    },
    staticNoDataTile() {
      const e = {
        attrs: {
          role: void 0
        },
        on: {
          mousedown: (t) => t.preventDefault()
          // Prevent onBlur from being called
        }
      };
      return this.$createElement(le, e, [this.genTileContent(this.noDataText)]);
    }
  },
  methods: {
    genAction(e, t) {
      return this.$createElement(fs, [this.$createElement(os, {
        props: {
          color: this.color,
          value: t,
          ripple: !1
        },
        on: {
          input: () => this.$emit("select", e)
        }
      })]);
    },
    genDivider(e) {
      return this.$createElement(as, {
        props: e
      });
    },
    genFilteredText(e) {
      if (e = e || "", !this.searchInput || this.noFilter)
        return e;
      const {
        start: t,
        middle: i,
        end: s
      } = this.getMaskedCharacters(e);
      return [t, this.genHighlight(i), s];
    },
    genHeader(e) {
      return this.$createElement(ls, {
        props: e
      }, e.header);
    },
    genHighlight(e) {
      return this.$createElement("span", {
        staticClass: "v-list-item__mask"
      }, e);
    },
    getMaskedCharacters(e) {
      const t = (this.searchInput || "").toString().toLocaleLowerCase(), i = e.toLocaleLowerCase().indexOf(t);
      if (i < 0)
        return {
          start: e,
          middle: "",
          end: ""
        };
      const s = e.slice(0, i), n = e.slice(i, i + t.length), r = e.slice(i + t.length);
      return {
        start: s,
        middle: n,
        end: r
      };
    },
    genTile({
      item: e,
      index: t,
      disabled: i = null,
      value: s = !1
    }) {
      s || (s = this.hasItem(e)), e === Object(e) && (i = i !== null ? i : this.getDisabled(e));
      const n = {
        attrs: {
          // Default behavior in list does not
          // contain aria-selected by default
          "aria-selected": String(s),
          id: `list-item-${this._uid}-${t}`,
          role: "option"
        },
        on: {
          mousedown: (a) => {
            a.preventDefault();
          },
          click: () => i || this.$emit("select", e)
        },
        props: {
          activeClass: this.tileActiveClass,
          disabled: i,
          ripple: !0,
          inputValue: s
        }
      };
      if (!this.$scopedSlots.item)
        return this.$createElement(le, n, [this.action && !this.hideSelected && this.items.length > 0 ? this.genAction(e, s) : null, this.genTileContent(e, t)]);
      const r = this, o = this.$scopedSlots.item({
        parent: r,
        item: e,
        attrs: {
          ...n.attrs,
          ...n.props
        },
        on: n.on
      });
      return this.needsTile(o) ? this.$createElement(le, n, o) : o;
    },
    genTileContent(e, t = 0) {
      return this.$createElement(ms, [this.$createElement(gs, [this.genFilteredText(this.getText(e))])]);
    },
    hasItem(e) {
      return this.parsedItems.indexOf(this.getValue(e)) > -1;
    },
    needsTile(e) {
      return e.length !== 1 || e[0].componentOptions == null || e[0].componentOptions.Ctor.options.name !== "v-list-item";
    },
    getDisabled(e) {
      return !!A(e, this.itemDisabled, !1);
    },
    getText(e) {
      return String(A(e, this.itemText, e));
    },
    getValue(e) {
      return A(e, this.itemValue, this.getText(e));
    }
  },
  render() {
    const e = [], t = this.items.length;
    for (let i = 0; i < t; i++) {
      const s = this.items[i];
      this.hideSelected && this.hasItem(s) || (s == null ? e.push(this.genTile({
        item: s,
        index: i
      })) : s.header ? e.push(this.genHeader(s)) : s.divider ? e.push(this.genDivider(s)) : e.push(this.genTile({
        item: s,
        index: i
      })));
    }
    return e.length || e.push(this.$slots["no-data"] || this.staticNoDataTile), this.$slots["prepend-item"] && e.unshift(this.$slots["prepend-item"]), this.$slots["append-item"] && e.push(this.$slots["append-item"]), this.$createElement(hs, {
      staticClass: "v-select-list",
      class: this.themeClasses,
      attrs: {
        role: "listbox",
        tabindex: -1
      },
      on: {
        mousedown: (i) => {
          i.preventDefault();
        }
      },
      props: {
        dense: this.dense
      }
    }, e);
  }
}), kt = g(y).extend({
  name: "v-label",
  functional: !0,
  props: {
    absolute: Boolean,
    color: {
      type: String,
      default: "primary"
    },
    disabled: Boolean,
    focused: Boolean,
    for: String,
    left: {
      type: [Number, String],
      default: 0
    },
    right: {
      type: [Number, String],
      default: "auto"
    },
    value: Boolean
  },
  render(e, t) {
    const {
      children: i,
      listeners: s,
      props: n,
      data: r
    } = t, o = T({
      staticClass: "v-label",
      class: {
        "v-label--active": n.value,
        "v-label--is-disabled": n.disabled,
        ...Fe(t)
      },
      attrs: {
        for: n.for,
        "aria-hidden": !n.for
      },
      on: s,
      style: {
        left: d(n.left),
        right: d(n.right),
        position: n.absolute ? "absolute" : "relative"
      },
      ref: "label"
    }, r);
    return e("label", $.options.methods.setTextColor(n.focused && n.color, o), i);
  }
}), vs = g($, y).extend({
  name: "v-messages",
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    genChildren() {
      return this.$createElement("transition-group", {
        staticClass: "v-messages__wrapper",
        attrs: {
          name: "message-transition",
          tag: "div"
        }
      }, this.value.map(this.genMessage));
    },
    genMessage(e, t) {
      return this.$createElement("div", {
        staticClass: "v-messages__message",
        key: t
      }, b(this, "default", {
        message: e,
        key: t
      }) || [e]);
    }
  },
  render(e) {
    return e("div", this.setTextColor(this.color, {
      staticClass: "v-messages",
      class: this.themeClasses
    }), [this.genChildren()]);
  }
}), ys = g($, vt("form"), y), Lt = ys.extend({
  name: "validatable",
  props: {
    disabled: {
      type: Boolean,
      default: null
    },
    error: Boolean,
    errorCount: {
      type: [Number, String],
      default: 1
    },
    errorMessages: {
      type: [String, Array],
      default: () => []
    },
    messages: {
      type: [String, Array],
      default: () => []
    },
    readonly: {
      type: Boolean,
      default: null
    },
    rules: {
      type: Array,
      default: () => []
    },
    success: Boolean,
    successMessages: {
      type: [String, Array],
      default: () => []
    },
    validateOnBlur: Boolean,
    value: {
      required: !1
    }
  },
  data() {
    return {
      errorBucket: [],
      hasColor: !1,
      hasFocused: !1,
      hasInput: !1,
      isFocused: !1,
      isResetting: !1,
      lazyValue: this.value,
      valid: !1
    };
  },
  computed: {
    computedColor() {
      if (!this.isDisabled)
        return this.color ? this.color : this.isDark && !this.appIsDark ? "white" : "primary";
    },
    hasError() {
      return this.internalErrorMessages.length > 0 || this.errorBucket.length > 0 || this.error;
    },
    // TODO: Add logic that allows the user to enable based
    // upon a good validation
    hasSuccess() {
      return this.internalSuccessMessages.length > 0 || this.success;
    },
    externalError() {
      return this.internalErrorMessages.length > 0 || this.error;
    },
    hasMessages() {
      return this.validationTarget.length > 0;
    },
    hasState() {
      return this.isDisabled ? !1 : this.hasSuccess || this.shouldValidate && this.hasError;
    },
    internalErrorMessages() {
      return this.genInternalMessages(this.errorMessages);
    },
    internalMessages() {
      return this.genInternalMessages(this.messages);
    },
    internalSuccessMessages() {
      return this.genInternalMessages(this.successMessages);
    },
    internalValue: {
      get() {
        return this.lazyValue;
      },
      set(e) {
        this.lazyValue = e, this.$emit("input", e);
      }
    },
    isDisabled() {
      var e;
      return (e = this.disabled) !== null && e !== void 0 ? e : !!this.form && this.form.disabled;
    },
    isInteractive() {
      return !this.isDisabled && !this.isReadonly;
    },
    isReadonly() {
      var e;
      return (e = this.readonly) !== null && e !== void 0 ? e : !!this.form && this.form.readonly;
    },
    shouldValidate() {
      return this.externalError ? !0 : this.isResetting ? !1 : this.validateOnBlur ? this.hasFocused && !this.isFocused : this.hasInput || this.hasFocused;
    },
    validations() {
      return this.validationTarget.slice(0, Number(this.errorCount));
    },
    validationState() {
      if (!this.isDisabled) {
        if (this.hasError && this.shouldValidate)
          return "error";
        if (this.hasSuccess)
          return "success";
        if (this.hasColor)
          return this.computedColor;
      }
    },
    validationTarget() {
      return this.internalErrorMessages.length > 0 ? this.internalErrorMessages : this.successMessages && this.successMessages.length > 0 ? this.internalSuccessMessages : this.messages && this.messages.length > 0 ? this.internalMessages : this.shouldValidate ? this.errorBucket : [];
    }
  },
  watch: {
    rules: {
      handler(e, t) {
        ve(e, t) || this.validate();
      },
      deep: !0
    },
    internalValue() {
      this.hasInput = !0, this.validateOnBlur || this.$nextTick(this.validate);
    },
    isFocused(e) {
      !e && !this.isDisabled && (this.hasFocused = !0, this.validateOnBlur && this.$nextTick(this.validate));
    },
    isResetting() {
      setTimeout(() => {
        this.hasInput = !1, this.hasFocused = !1, this.isResetting = !1, this.validate();
      }, 0);
    },
    hasError(e) {
      this.shouldValidate && this.$emit("update:error", e);
    },
    value(e) {
      this.lazyValue = e;
    }
  },
  beforeMount() {
    this.validate();
  },
  created() {
    this.form && this.form.register(this);
  },
  beforeDestroy() {
    this.form && this.form.unregister(this);
  },
  methods: {
    genInternalMessages(e) {
      return e ? Array.isArray(e) ? e : [e] : [];
    },
    /** @public */
    reset() {
      this.isResetting = !0, this.internalValue = Array.isArray(this.internalValue) ? [] : null;
    },
    /** @public */
    resetValidation() {
      this.isResetting = !0;
    },
    /** @public */
    validate(e = !1, t) {
      const i = [];
      t = t || this.internalValue, e && (this.hasInput = this.hasFocused = !0);
      for (let s = 0; s < this.rules.length; s++) {
        const n = this.rules[s], r = typeof n == "function" ? n(t) : n;
        r === !1 || typeof r == "string" ? i.push(r || "") : typeof r != "boolean" && w(`Rules should return a string or boolean, received '${typeof r}' instead`, this);
      }
      return this.errorBucket = i, this.valid = i.length === 0, this.valid;
    }
  }
}), bs = g(be, Lt), I = bs.extend().extend({
  name: "v-input",
  inheritAttrs: !1,
  props: {
    appendIcon: String,
    backgroundColor: {
      type: String,
      default: ""
    },
    dense: Boolean,
    height: [Number, String],
    hideDetails: [Boolean, String],
    hideSpinButtons: Boolean,
    hint: String,
    id: String,
    label: String,
    loading: Boolean,
    persistentHint: Boolean,
    prependIcon: String,
    value: null
  },
  data() {
    return {
      lazyValue: this.value,
      hasMouseDown: !1
    };
  },
  computed: {
    classes() {
      return {
        "v-input--has-state": this.hasState,
        "v-input--hide-details": !this.showDetails,
        "v-input--is-label-active": this.isLabelActive,
        "v-input--is-dirty": this.isDirty,
        "v-input--is-disabled": this.isDisabled,
        "v-input--is-focused": this.isFocused,
        // <v-switch loading>.loading === '' so we can't just cast to boolean
        "v-input--is-loading": this.loading !== !1 && this.loading != null,
        "v-input--is-readonly": this.isReadonly,
        "v-input--dense": this.dense,
        "v-input--hide-spin-buttons": this.hideSpinButtons,
        ...this.themeClasses
      };
    },
    computedId() {
      return this.id || `input-${this._uid}`;
    },
    hasDetails() {
      return this.messagesToDisplay.length > 0;
    },
    hasHint() {
      return !this.hasMessages && !!this.hint && (this.persistentHint || this.isFocused);
    },
    hasLabel() {
      return !!(this.$slots.label || this.label);
    },
    // Proxy for `lazyValue`
    // This allows an input
    // to function without
    // a provided model
    internalValue: {
      get() {
        return this.lazyValue;
      },
      set(e) {
        this.lazyValue = e, this.$emit(this.$_modelEvent, e);
      }
    },
    isDirty() {
      return !!this.lazyValue;
    },
    isLabelActive() {
      return this.isDirty;
    },
    messagesToDisplay() {
      return this.hasHint ? [this.hint] : this.hasMessages ? this.validations.map((e) => {
        if (typeof e == "string")
          return e;
        const t = e(this.internalValue);
        return typeof t == "string" ? t : "";
      }).filter((e) => e !== "") : [];
    },
    showDetails() {
      return this.hideDetails === !1 || this.hideDetails === "auto" && this.hasDetails;
    }
  },
  watch: {
    value(e) {
      this.lazyValue = e;
    }
  },
  beforeCreate() {
    this.$_modelEvent = this.$options.model && this.$options.model.event || "input";
  },
  methods: {
    genContent() {
      return [this.genPrependSlot(), this.genControl(), this.genAppendSlot()];
    },
    genControl() {
      return this.$createElement("div", {
        staticClass: "v-input__control",
        attrs: {
          title: this.attrs$.title
        }
      }, [this.genInputSlot(), this.genMessages()]);
    },
    genDefaultSlot() {
      return [this.genLabel(), b(this)];
    },
    genIcon(e, t, i = {}) {
      var s;
      const n = this[`${e}Icon`], r = `click:${he(e)}`, o = !!(this.listeners$[r] || t), a = {
        prepend: "prependAction",
        prependInner: "prependAction",
        append: "appendAction",
        appendOuter: "appendAction",
        clear: "clear"
      }[e], l = o && a ? this.$vuetify.lang.t(`$vuetify.input.${a}`, (s = this.label) !== null && s !== void 0 ? s : "") : void 0, c = T({
        attrs: {
          "aria-label": l,
          color: this.validationState,
          dark: this.dark,
          disabled: this.isDisabled,
          light: this.light,
          tabindex: e === "clear" ? -1 : void 0
        },
        on: o ? {
          click: (u) => {
            u.preventDefault(), u.stopPropagation(), this.$emit(r, u), t && t(u);
          },
          // Container has g event that will
          // trigger menu open if enclosed
          mouseup: (u) => {
            u.preventDefault(), u.stopPropagation();
          }
        } : void 0
      }, i);
      return this.$createElement("div", {
        staticClass: "v-input__icon",
        class: e ? `v-input__icon--${he(e)}` : void 0
      }, [this.$createElement(X, c, n)]);
    },
    genInputSlot() {
      return this.$createElement("div", this.setBackgroundColor(this.backgroundColor, {
        staticClass: "v-input__slot",
        style: {
          height: d(this.height)
        },
        on: {
          click: this.onClick,
          mousedown: this.onMouseDown,
          mouseup: this.onMouseUp
        },
        ref: "input-slot"
      }), [this.genDefaultSlot()]);
    },
    genLabel() {
      return this.hasLabel ? this.$createElement(kt, {
        props: {
          color: this.validationState,
          dark: this.dark,
          disabled: this.isDisabled,
          focused: this.hasState,
          for: this.computedId,
          light: this.light
        }
      }, b(this, "label") || this.label) : null;
    },
    genMessages() {
      return this.showDetails ? this.$createElement(vs, {
        props: {
          color: this.hasHint ? "" : this.validationState,
          dark: this.dark,
          light: this.light,
          value: this.messagesToDisplay
        },
        attrs: {
          role: this.hasMessages ? "alert" : null
        },
        scopedSlots: {
          default: (e) => b(this, "message", e)
        }
      }) : null;
    },
    genSlot(e, t, i) {
      if (!i.length)
        return null;
      const s = `${e}-${t}`;
      return this.$createElement("div", {
        staticClass: `v-input__${s}`,
        ref: s
      }, i);
    },
    genPrependSlot() {
      const e = [];
      return this.$slots.prepend ? e.push(this.$slots.prepend) : this.prependIcon && e.push(this.genIcon("prepend")), this.genSlot("prepend", "outer", e);
    },
    genAppendSlot() {
      const e = [];
      return this.$slots.append ? e.push(this.$slots.append) : this.appendIcon && e.push(this.genIcon("append")), this.genSlot("append", "outer", e);
    },
    onClick(e) {
      this.$emit("click", e);
    },
    onMouseDown(e) {
      this.hasMouseDown = !0, this.$emit("mousedown", e);
    },
    onMouseUp(e) {
      this.hasMouseDown = !1, this.$emit("mouseup", e);
    }
  },
  render(e) {
    return e("div", this.setTextColor(this.validationState, {
      staticClass: "v-input",
      class: this.classes
    }), this.genContent());
  }
}), xs = g(y).extend({
  name: "v-counter",
  functional: !0,
  props: {
    value: {
      type: [Number, String],
      default: ""
    },
    max: [Number, String]
  },
  render(e, t) {
    const {
      props: i
    } = t, s = parseInt(i.max, 10), n = parseInt(i.value, 10), r = s ? `${n} / ${s}` : String(i.value), o = s && n > s;
    return e("div", {
      staticClass: "v-counter",
      class: {
        "error--text": o,
        ...Fe(t)
      }
    }, r);
  }
});
function $s(e) {
  return p.extend({
    name: "intersectable",
    data: () => ({
      isIntersecting: !1
    }),
    mounted() {
      Z.inserted(this.$el, {
        name: "intersect",
        value: this.onObserve
      }, this.$vnode);
    },
    destroyed() {
      Z.unbind(this.$el, {
        name: "intersect",
        value: this.onObserve
      }, this.$vnode);
    },
    methods: {
      onObserve(t, i, s) {
        if (this.isIntersecting = s, !!s)
          for (let n = 0, r = e.onVisible.length; n < r; n++) {
            const o = this[e.onVisible[n]];
            if (typeof o == "function") {
              o();
              continue;
            }
            S(e.onVisible[n] + " method is not available on the instance but referenced in intersectable mixin options");
          }
      }
    }
  });
}
const Cs = g($, $e(["absolute", "fixed", "top", "bottom"]), ps, y), ws = Cs.extend({
  name: "v-progress-linear",
  directives: {
    intersect: Z
  },
  props: {
    active: {
      type: Boolean,
      default: !0
    },
    backgroundColor: {
      type: String,
      default: null
    },
    backgroundOpacity: {
      type: [Number, String],
      default: null
    },
    bufferValue: {
      type: [Number, String],
      default: 100
    },
    color: {
      type: String,
      default: "primary"
    },
    height: {
      type: [Number, String],
      default: 4
    },
    indeterminate: Boolean,
    query: Boolean,
    reverse: Boolean,
    rounded: Boolean,
    stream: Boolean,
    striped: Boolean,
    value: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      internalLazyValue: this.value || 0,
      isVisible: !0
    };
  },
  computed: {
    __cachedBackground() {
      return this.$createElement("div", this.setBackgroundColor(this.backgroundColor || this.color, {
        staticClass: "v-progress-linear__background",
        style: this.backgroundStyle
      }));
    },
    __cachedBar() {
      return this.$createElement(this.computedTransition, [this.__cachedBarType]);
    },
    __cachedBarType() {
      return this.indeterminate ? this.__cachedIndeterminate : this.__cachedDeterminate;
    },
    __cachedBuffer() {
      return this.$createElement("div", {
        staticClass: "v-progress-linear__buffer",
        style: this.styles
      });
    },
    __cachedDeterminate() {
      return this.$createElement("div", this.setBackgroundColor(this.color, {
        staticClass: "v-progress-linear__determinate",
        style: {
          width: d(this.normalizedValue, "%")
        }
      }));
    },
    __cachedIndeterminate() {
      return this.$createElement("div", {
        staticClass: "v-progress-linear__indeterminate",
        class: {
          "v-progress-linear__indeterminate--active": this.active
        }
      }, [this.genProgressBar("long"), this.genProgressBar("short")]);
    },
    __cachedStream() {
      return this.stream ? this.$createElement("div", this.setTextColor(this.color, {
        staticClass: "v-progress-linear__stream",
        style: {
          width: d(100 - this.normalizedBuffer, "%")
        }
      })) : null;
    },
    backgroundStyle() {
      return {
        opacity: this.backgroundOpacity == null ? this.backgroundColor ? 1 : 0.3 : parseFloat(this.backgroundOpacity),
        [this.isReversed ? "right" : "left"]: d(this.normalizedValue, "%"),
        width: d(Math.max(0, this.normalizedBuffer - this.normalizedValue), "%")
      };
    },
    classes() {
      return {
        "v-progress-linear--absolute": this.absolute,
        "v-progress-linear--fixed": this.fixed,
        "v-progress-linear--query": this.query,
        "v-progress-linear--reactive": this.reactive,
        "v-progress-linear--reverse": this.isReversed,
        "v-progress-linear--rounded": this.rounded,
        "v-progress-linear--striped": this.striped,
        "v-progress-linear--visible": this.isVisible,
        ...this.themeClasses
      };
    },
    computedTransition() {
      return this.indeterminate ? Zi : Gi;
    },
    isReversed() {
      return this.$vuetify.rtl !== this.reverse;
    },
    normalizedBuffer() {
      return this.normalize(this.bufferValue);
    },
    normalizedValue() {
      return this.normalize(this.internalLazyValue);
    },
    reactive() {
      return !!this.$listeners.change;
    },
    styles() {
      const e = {};
      return this.active || (e.height = 0), !this.indeterminate && parseFloat(this.normalizedBuffer) !== 100 && (e.width = d(this.normalizedBuffer, "%")), e;
    }
  },
  methods: {
    genContent() {
      const e = b(this, "default", {
        value: this.internalLazyValue
      });
      return e ? this.$createElement("div", {
        staticClass: "v-progress-linear__content"
      }, e) : null;
    },
    genListeners() {
      const e = this.$listeners;
      return this.reactive && (e.click = this.onClick), e;
    },
    genProgressBar(e) {
      return this.$createElement("div", this.setBackgroundColor(this.color, {
        staticClass: "v-progress-linear__indeterminate",
        class: {
          [e]: !0
        }
      }));
    },
    onClick(e) {
      if (!this.reactive)
        return;
      const {
        width: t
      } = this.$el.getBoundingClientRect();
      this.internalValue = e.offsetX / t * 100;
    },
    onObserve(e, t, i) {
      this.isVisible = i;
    },
    normalize(e) {
      return e < 0 ? 0 : e > 100 ? 100 : parseFloat(e);
    }
  },
  render(e) {
    const t = {
      staticClass: "v-progress-linear",
      attrs: {
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": this.normalizedBuffer,
        "aria-valuenow": this.indeterminate ? void 0 : this.normalizedValue
      },
      class: this.classes,
      directives: [{
        name: "intersect",
        value: this.onObserve
      }],
      style: {
        bottom: this.bottom ? 0 : void 0,
        height: this.active ? d(this.height) : 0,
        top: this.top ? 0 : void 0
      },
      on: this.genListeners()
    };
    return e("div", t, [this.__cachedStream, this.__cachedBackground, this.__cachedBuffer, this.__cachedBar, this.genContent()]);
  }
}), Ss = p.extend().extend({
  name: "loadable",
  props: {
    loading: {
      type: [Boolean, String],
      default: !1
    },
    loaderHeight: {
      type: [Number, String],
      default: 2
    }
  },
  methods: {
    genProgress() {
      return this.loading === !1 ? null : b(this, "progress") || this.$createElement(ws, {
        props: {
          absolute: !0,
          color: this.loading === !0 || this.loading === "" ? this.color || "primary" : this.loading,
          height: this.loaderHeight,
          indeterminate: !0
        }
      });
    }
  }
}), Is = g(I, $s({
  onVisible: ["onResize", "tryAutofocus"]
}), Ss), ks = ["color", "file", "time", "date", "datetime-local", "week", "month"], C = Is.extend().extend({
  name: "v-text-field",
  directives: {
    resize: lt,
    ripple: V
  },
  inheritAttrs: !1,
  props: {
    appendOuterIcon: String,
    autofocus: Boolean,
    clearable: Boolean,
    clearIcon: {
      type: String,
      default: "$clear"
    },
    counter: [Boolean, Number, String],
    counterValue: Function,
    filled: Boolean,
    flat: Boolean,
    fullWidth: Boolean,
    label: String,
    outlined: Boolean,
    placeholder: String,
    prefix: String,
    prependInnerIcon: String,
    persistentPlaceholder: Boolean,
    reverse: Boolean,
    rounded: Boolean,
    shaped: Boolean,
    singleLine: Boolean,
    solo: Boolean,
    soloInverted: Boolean,
    suffix: String,
    type: {
      type: String,
      default: "text"
    }
  },
  data: () => ({
    badInput: !1,
    labelWidth: 0,
    prefixWidth: 0,
    prependWidth: 0,
    initialValue: null,
    isBooted: !1,
    isClearing: !1
  }),
  computed: {
    classes() {
      return {
        ...I.options.computed.classes.call(this),
        "v-text-field": !0,
        "v-text-field--full-width": this.fullWidth,
        "v-text-field--prefix": this.prefix,
        "v-text-field--single-line": this.isSingle,
        "v-text-field--solo": this.isSolo,
        "v-text-field--solo-inverted": this.soloInverted,
        "v-text-field--solo-flat": this.flat,
        "v-text-field--filled": this.filled,
        "v-text-field--is-booted": this.isBooted,
        "v-text-field--enclosed": this.isEnclosed,
        "v-text-field--reverse": this.reverse,
        "v-text-field--outlined": this.outlined,
        "v-text-field--placeholder": this.placeholder,
        "v-text-field--rounded": this.rounded,
        "v-text-field--shaped": this.shaped
      };
    },
    computedColor() {
      const e = Lt.options.computed.computedColor.call(this);
      return !this.soloInverted || !this.isFocused ? e : this.color || "primary";
    },
    computedCounterValue() {
      return typeof this.counterValue == "function" ? this.counterValue(this.internalValue) : [...(this.internalValue || "").toString()].length;
    },
    hasCounter() {
      return this.counter !== !1 && this.counter != null;
    },
    hasDetails() {
      return I.options.computed.hasDetails.call(this) || this.hasCounter;
    },
    internalValue: {
      get() {
        return this.lazyValue;
      },
      set(e) {
        this.lazyValue = e, this.$emit("input", this.lazyValue);
      }
    },
    isDirty() {
      var e;
      return ((e = this.lazyValue) === null || e === void 0 ? void 0 : e.toString().length) > 0 || this.badInput;
    },
    isEnclosed() {
      return this.filled || this.isSolo || this.outlined;
    },
    isLabelActive() {
      return this.isDirty || ks.includes(this.type);
    },
    isSingle() {
      return this.isSolo || this.singleLine || this.fullWidth || // https://material.io/components/text-fields/#filled-text-field
      this.filled && !this.hasLabel;
    },
    isSolo() {
      return this.solo || this.soloInverted;
    },
    labelPosition() {
      let e = this.prefix && !this.labelValue ? this.prefixWidth : 0;
      return this.labelValue && this.prependWidth && (e -= this.prependWidth), this.$vuetify.rtl === this.reverse ? {
        left: e,
        right: "auto"
      } : {
        left: "auto",
        right: e
      };
    },
    showLabel() {
      return this.hasLabel && !(this.isSingle && this.labelValue);
    },
    labelValue() {
      return this.isFocused || this.isLabelActive || this.persistentPlaceholder;
    }
  },
  watch: {
    // labelValue: 'setLabelWidth', // moved to mounted, see #11533
    outlined: "setLabelWidth",
    label() {
      this.$nextTick(this.setLabelWidth);
    },
    prefix() {
      this.$nextTick(this.setPrefixWidth);
    },
    isFocused: "updateValue",
    value(e) {
      this.lazyValue = e;
    }
  },
  created() {
    this.$attrs.hasOwnProperty("box") && Y("box", "filled", this), this.$attrs.hasOwnProperty("browser-autocomplete") && Y("browser-autocomplete", "autocomplete", this), this.shaped && !(this.filled || this.outlined || this.isSolo) && S("shaped should be used with either filled or outlined", this);
  },
  mounted() {
    this.$watch(() => this.labelValue, this.setLabelWidth), this.autofocus && this.tryAutofocus(), requestAnimationFrame(() => {
      this.isBooted = !0, requestAnimationFrame(() => {
        this.isIntersecting || this.onResize();
      });
    });
  },
  methods: {
    /** @public */
    focus() {
      this.onFocus();
    },
    /** @public */
    blur(e) {
      window.requestAnimationFrame(() => {
        this.$refs.input && this.$refs.input.blur();
      });
    },
    clearableCallback() {
      this.$refs.input && this.$refs.input.focus(), this.$nextTick(() => this.internalValue = null);
    },
    genAppendSlot() {
      const e = [];
      return this.$slots["append-outer"] ? e.push(this.$slots["append-outer"]) : this.appendOuterIcon && e.push(this.genIcon("appendOuter")), this.genSlot("append", "outer", e);
    },
    genPrependInnerSlot() {
      const e = [];
      return this.$slots["prepend-inner"] ? e.push(this.$slots["prepend-inner"]) : this.prependInnerIcon && e.push(this.genIcon("prependInner")), this.genSlot("prepend", "inner", e);
    },
    genIconSlot() {
      const e = [];
      return this.$slots.append ? e.push(this.$slots.append) : this.appendIcon && e.push(this.genIcon("append")), this.genSlot("append", "inner", e);
    },
    genInputSlot() {
      const e = I.options.methods.genInputSlot.call(this), t = this.genPrependInnerSlot();
      return t && (e.children = e.children || [], e.children.unshift(t)), e;
    },
    genClearIcon() {
      return this.clearable ? this.isDirty ? this.genSlot("append", "inner", [this.genIcon("clear", this.clearableCallback)]) : this.genSlot("append", "inner", [this.$createElement("div")]) : null;
    },
    genCounter() {
      var e, t, i;
      if (!this.hasCounter)
        return null;
      const s = this.counter === !0 ? this.attrs$.maxlength : this.counter, n = {
        dark: this.dark,
        light: this.light,
        max: s,
        value: this.computedCounterValue
      };
      return (i = (t = (e = this.$scopedSlots).counter) === null || t === void 0 ? void 0 : t.call(e, {
        props: n
      })) !== null && i !== void 0 ? i : this.$createElement(xs, {
        props: n
      });
    },
    genControl() {
      return I.options.methods.genControl.call(this);
    },
    genDefaultSlot() {
      return [this.genFieldset(), this.genTextFieldSlot(), this.genClearIcon(), this.genIconSlot(), this.genProgress()];
    },
    genFieldset() {
      return this.outlined ? this.$createElement("fieldset", {
        attrs: {
          "aria-hidden": !0
        }
      }, [this.genLegend()]) : null;
    },
    genLabel() {
      if (!this.showLabel)
        return null;
      const e = {
        props: {
          absolute: !0,
          color: this.validationState,
          dark: this.dark,
          disabled: this.isDisabled,
          focused: !this.isSingle && (this.isFocused || !!this.validationState),
          for: this.computedId,
          left: this.labelPosition.left,
          light: this.light,
          right: this.labelPosition.right,
          value: this.labelValue
        }
      };
      return this.$createElement(kt, e, b(this, "label") || this.label);
    },
    genLegend() {
      const e = !this.singleLine && (this.labelValue || this.isDirty) ? this.labelWidth : 0, t = this.$createElement("span", {
        domProps: {
          innerHTML: "&#8203;"
        },
        staticClass: "notranslate"
      });
      return this.$createElement("legend", {
        style: {
          width: this.isSingle ? void 0 : d(e)
        }
      }, [t]);
    },
    genInput() {
      const e = Object.assign({}, this.listeners$);
      delete e.change;
      const {
        title: t,
        ...i
      } = this.attrs$;
      return this.$createElement("input", {
        style: {},
        domProps: {
          value: this.type === "number" && Object.is(this.lazyValue, -0) ? "-0" : this.lazyValue
        },
        attrs: {
          ...i,
          autofocus: this.autofocus,
          disabled: this.isDisabled,
          id: this.computedId,
          placeholder: this.persistentPlaceholder || this.isFocused || !this.hasLabel ? this.placeholder : void 0,
          readonly: this.isReadonly,
          type: this.type
        },
        on: Object.assign(e, {
          blur: this.onBlur,
          input: this.onInput,
          focus: this.onFocus,
          keydown: this.onKeyDown
        }),
        ref: "input",
        directives: [{
          name: "resize",
          modifiers: {
            quiet: !0
          },
          value: this.onResize
        }]
      });
    },
    genMessages() {
      if (!this.showDetails)
        return null;
      const e = I.options.methods.genMessages.call(this), t = this.genCounter();
      return this.$createElement("div", {
        staticClass: "v-text-field__details"
      }, [e, t]);
    },
    genTextFieldSlot() {
      return this.$createElement("div", {
        staticClass: "v-text-field__slot"
      }, [this.genLabel(), this.prefix ? this.genAffix("prefix") : null, this.genInput(), this.suffix ? this.genAffix("suffix") : null]);
    },
    genAffix(e) {
      return this.$createElement("div", {
        class: `v-text-field__${e}`,
        ref: e
      }, this[e]);
    },
    onBlur(e) {
      this.isFocused = !1, e && this.$nextTick(() => this.$emit("blur", e));
    },
    onClick() {
      this.isFocused || this.isDisabled || !this.$refs.input || this.$refs.input.focus();
    },
    onFocus(e) {
      if (!this.$refs.input)
        return;
      const t = G(this.$el);
      if (t) {
        if (t.activeElement !== this.$refs.input)
          return this.$refs.input.focus();
        this.isFocused || (this.isFocused = !0, e && this.$emit("focus", e));
      }
    },
    onInput(e) {
      const t = e.target;
      this.internalValue = t.value, this.badInput = t.validity && t.validity.badInput;
    },
    onKeyDown(e) {
      e.keyCode === h.enter && this.lazyValue !== this.initialValue && (this.initialValue = this.lazyValue, this.$emit("change", this.initialValue)), this.$emit("keydown", e);
    },
    onMouseDown(e) {
      e.target !== this.$refs.input && (e.preventDefault(), e.stopPropagation()), I.options.methods.onMouseDown.call(this, e);
    },
    onMouseUp(e) {
      this.hasMouseDown && this.focus(), I.options.methods.onMouseUp.call(this, e);
    },
    setLabelWidth() {
      this.outlined && (this.labelWidth = this.$refs.label ? Math.min(this.$refs.label.scrollWidth * 0.75 + 6, this.$el.offsetWidth - 24) : 0);
    },
    setPrefixWidth() {
      this.$refs.prefix && (this.prefixWidth = this.$refs.prefix.offsetWidth);
    },
    setPrependWidth() {
      !this.outlined || !this.$refs["prepend-inner"] || (this.prependWidth = this.$refs["prepend-inner"].offsetWidth);
    },
    tryAutofocus() {
      if (!this.autofocus || typeof document > "u" || !this.$refs.input)
        return !1;
      const e = G(this.$el);
      return !e || e.activeElement === this.$refs.input ? !1 : (this.$refs.input.focus(), !0);
    },
    updateValue(e) {
      this.hasColor = e, e ? this.initialValue = this.lazyValue : this.initialValue !== this.lazyValue && this.$emit("change", this.lazyValue);
    },
    onResize() {
      this.setLabelWidth(), this.setPrefixWidth(), this.setPrependWidth();
    }
  }
}), Ls = p.extend({
  name: "filterable",
  props: {
    noDataText: {
      type: String,
      default: "$vuetify.noDataText"
    }
  }
}), me = {
  closeOnClick: !1,
  closeOnContentClick: !1,
  disableKeys: !0,
  openOnClick: !1,
  maxHeight: 304
}, _s = g(C, us, St, Ls), m = _s.extend().extend({
  name: "v-select",
  directives: {
    ClickOutside: at
  },
  props: {
    appendIcon: {
      type: String,
      default: "$dropdown"
    },
    attach: {
      type: null,
      default: !1
    },
    cacheItems: Boolean,
    chips: Boolean,
    clearable: Boolean,
    deletableChips: Boolean,
    disableLookup: Boolean,
    eager: Boolean,
    hideSelected: Boolean,
    items: {
      type: Array,
      default: () => []
    },
    itemColor: {
      type: String,
      default: "primary"
    },
    itemDisabled: {
      type: [String, Array, Function],
      default: "disabled"
    },
    itemText: {
      type: [String, Array, Function],
      default: "text"
    },
    itemValue: {
      type: [String, Array, Function],
      default: "value"
    },
    menuProps: {
      type: [String, Array, Object],
      default: () => me
    },
    multiple: Boolean,
    openOnClear: Boolean,
    returnObject: Boolean,
    smallChips: Boolean
  },
  data() {
    return {
      cachedItems: this.cacheItems ? this.items : [],
      menuIsBooted: !1,
      isMenuActive: !1,
      lastItem: 20,
      // As long as a value is defined, show it
      // Otherwise, check if multiple
      // to determine which default to provide
      lazyValue: this.value !== void 0 ? this.value : this.multiple ? [] : void 0,
      selectedIndex: -1,
      selectedItems: [],
      keyboardLookupPrefix: "",
      keyboardLookupLastTime: 0
    };
  },
  computed: {
    /* All items that the select has */
    allItems() {
      return this.filterDuplicates(this.cachedItems.concat(this.items));
    },
    classes() {
      return {
        ...C.options.computed.classes.call(this),
        "v-select": !0,
        "v-select--chips": this.hasChips,
        "v-select--chips--small": this.smallChips,
        "v-select--is-menu-active": this.isMenuActive,
        "v-select--is-multi": this.multiple
      };
    },
    /* Used by other components to overwrite */
    computedItems() {
      return this.allItems;
    },
    computedOwns() {
      return `list-${this._uid}`;
    },
    computedCounterValue() {
      var e;
      const t = this.multiple ? this.selectedItems : ((e = this.getText(this.selectedItems[0])) !== null && e !== void 0 ? e : "").toString();
      return typeof this.counterValue == "function" ? this.counterValue(t) : t.length;
    },
    directives() {
      return this.isFocused ? [{
        name: "click-outside",
        value: {
          handler: this.blur,
          closeConditional: this.closeConditional,
          include: () => this.getOpenDependentElements()
        }
      }] : void 0;
    },
    dynamicHeight() {
      return "auto";
    },
    hasChips() {
      return this.chips || this.smallChips;
    },
    hasSlot() {
      return !!(this.hasChips || this.$scopedSlots.selection);
    },
    isDirty() {
      return this.selectedItems.length > 0;
    },
    listData() {
      const e = this.$vnode && this.$vnode.context.$options._scopeId;
      return {
        attrs: {
          ...e ? {
            [e]: !0
          } : {},
          id: this.computedOwns
        },
        props: {
          action: this.multiple,
          color: this.itemColor,
          dense: this.dense,
          hideSelected: this.hideSelected,
          items: this.virtualizedItems,
          itemDisabled: this.itemDisabled,
          itemText: this.itemText,
          itemValue: this.itemValue,
          noDataText: this.$vuetify.lang.t(this.noDataText),
          selectedItems: this.selectedItems
        },
        on: {
          select: this.selectItem
        },
        scopedSlots: {
          item: this.$scopedSlots.item
        }
      };
    },
    staticList() {
      return (this.$slots["no-data"] || this.$slots["prepend-item"] || this.$slots["append-item"]) && w("assert: staticList should not be called if slots are used"), this.$createElement(Pe, this.listData);
    },
    virtualizedItems() {
      return this.$_menuProps.auto ? this.computedItems : this.computedItems.slice(0, this.lastItem);
    },
    menuCanShow: () => !0,
    $_menuProps() {
      let e = typeof this.menuProps == "string" ? this.menuProps.split(",") : this.menuProps;
      return Array.isArray(e) && (e = e.reduce((t, i) => (t[i.trim()] = !0, t), {})), {
        ...me,
        eager: this.eager,
        value: this.menuCanShow && this.isMenuActive,
        nudgeBottom: e.offsetY ? 1 : 0,
        ...e
      };
    }
  },
  watch: {
    internalValue(e) {
      this.initialValue = e, this.setSelectedItems(), this.multiple && this.$nextTick(() => {
        var t;
        (t = this.$refs.menu) === null || t === void 0 || t.updateDimensions();
      }), this.hideSelected && this.$nextTick(() => {
        this.onScroll();
      });
    },
    isMenuActive(e) {
      window.setTimeout(() => this.onMenuActiveChange(e));
    },
    items: {
      immediate: !0,
      handler(e) {
        this.cacheItems && this.$nextTick(() => {
          this.cachedItems = this.filterDuplicates(this.cachedItems.concat(e));
        }), this.setSelectedItems();
      }
    }
  },
  methods: {
    /** @public */
    blur(e) {
      C.options.methods.blur.call(this, e), this.isMenuActive = !1, this.isFocused = !1, this.selectedIndex = -1, this.setMenuIndex(-1);
    },
    /** @public */
    activateMenu() {
      !this.isInteractive || this.isMenuActive || (this.isMenuActive = !0);
    },
    clearableCallback() {
      this.setValue(this.multiple ? [] : null), this.setMenuIndex(-1), this.$nextTick(() => this.$refs.input && this.$refs.input.focus()), this.openOnClear && (this.isMenuActive = !0);
    },
    closeConditional(e) {
      return this.isMenuActive ? !this._isDestroyed && // Click originates from outside the menu content
      // Multiple selects don't close when an item is clicked
      (!this.getContent() || !this.getContent().contains(e.target)) && // Click originates from outside the element
      this.$el && !this.$el.contains(e.target) && e.target !== this.$el : !0;
    },
    filterDuplicates(e) {
      const t = /* @__PURE__ */ new Map();
      for (let i = 0; i < e.length; ++i) {
        const s = e[i];
        if (s == null)
          continue;
        if (s.header || s.divider) {
          t.set(s, s);
          continue;
        }
        const n = this.getValue(s);
        !t.has(n) && t.set(n, s);
      }
      return Array.from(t.values());
    },
    findExistingIndex(e) {
      const t = this.getValue(e);
      return (this.internalValue || []).findIndex((i) => this.valueComparator(this.getValue(i), t));
    },
    getContent() {
      return this.$refs.menu && this.$refs.menu.$refs.content;
    },
    genChipSelection(e, t) {
      const i = this.isDisabled || this.getDisabled(e), s = !i && this.isInteractive;
      return this.$createElement($t, {
        staticClass: "v-chip--select",
        attrs: {
          tabindex: -1
        },
        props: {
          close: this.deletableChips && s,
          disabled: i,
          inputValue: t === this.selectedIndex,
          small: this.smallChips
        },
        on: {
          click: (n) => {
            s && (n.stopPropagation(), this.selectedIndex = t);
          },
          "click:close": () => this.onChipInput(e)
        },
        key: JSON.stringify(this.getValue(e))
      }, this.getText(e));
    },
    genCommaSelection(e, t, i) {
      const s = t === this.selectedIndex && this.computedColor, n = this.isDisabled || this.getDisabled(e);
      return this.$createElement("div", this.setTextColor(s, {
        staticClass: "v-select__selection v-select__selection--comma",
        class: {
          "v-select__selection--disabled": n
        },
        key: JSON.stringify(this.getValue(e))
      }), `${this.getText(e)}${i ? "" : ", "}`);
    },
    genDefaultSlot() {
      const e = this.genSelections(), t = this.genInput();
      return Array.isArray(e) ? e.push(t) : (e.children = e.children || [], e.children.push(t)), [this.genFieldset(), this.$createElement("div", {
        staticClass: "v-select__slot",
        directives: this.directives
      }, [this.genLabel(), this.prefix ? this.genAffix("prefix") : null, e, this.suffix ? this.genAffix("suffix") : null, this.genClearIcon(), this.genIconSlot(), this.genHiddenInput()]), this.genMenu(), this.genProgress()];
    },
    genIcon(e, t, i) {
      const s = I.options.methods.genIcon.call(this, e, t, i);
      return e === "append" && (s.children[0].data = T(s.children[0].data, {
        attrs: {
          tabindex: s.children[0].componentOptions.listeners && "-1",
          "aria-hidden": "true",
          "aria-label": void 0
        }
      })), s;
    },
    genInput() {
      const e = C.options.methods.genInput.call(this);
      return delete e.data.attrs.name, e.data = T(e.data, {
        domProps: {
          value: null
        },
        attrs: {
          readonly: !0,
          type: "text",
          "aria-readonly": String(this.isReadonly),
          "aria-activedescendant": k(this.$refs.menu, "activeTile.id"),
          autocomplete: k(e.data, "attrs.autocomplete", "off"),
          placeholder: !this.isDirty && (this.persistentPlaceholder || this.isFocused || !this.hasLabel) ? this.placeholder : void 0
        },
        on: {
          keypress: this.onKeyPress
        }
      }), e;
    },
    genHiddenInput() {
      return this.$createElement("input", {
        domProps: {
          value: this.lazyValue
        },
        attrs: {
          type: "hidden",
          name: this.attrs$.name
        }
      });
    },
    genInputSlot() {
      const e = C.options.methods.genInputSlot.call(this);
      return e.data.attrs = {
        ...e.data.attrs,
        role: "button",
        "aria-haspopup": "listbox",
        "aria-expanded": String(this.isMenuActive),
        "aria-owns": this.computedOwns
      }, e;
    },
    genList() {
      return this.$slots["no-data"] || this.$slots["prepend-item"] || this.$slots["append-item"] ? this.genListWithSlot() : this.staticList;
    },
    genListWithSlot() {
      const e = ["prepend-item", "no-data", "append-item"].filter((t) => this.$slots[t]).map((t) => this.$createElement("template", {
        slot: t
      }, this.$slots[t]));
      return this.$createElement(Pe, {
        ...this.listData
      }, e);
    },
    genMenu() {
      const e = this.$_menuProps;
      return e.activator = this.$refs["input-slot"], "attach" in e || (// TODO: make this a computed property or helper or something
      this.attach === "" || // If used as a boolean prop (<v-menu attach>)
      this.attach === !0 || // If bound to a boolean (<v-menu :attach="true">)
      this.attach === "attach" ? e.attach = this.$el : e.attach = this.attach), this.$createElement(rs, {
        attrs: {
          role: void 0
        },
        props: e,
        on: {
          input: (t) => {
            this.isMenuActive = t, this.isFocused = t;
          },
          scroll: this.onScroll
        },
        ref: "menu"
      }, [this.genList()]);
    },
    genSelections() {
      let e = this.selectedItems.length;
      const t = new Array(e);
      let i;
      for (this.$scopedSlots.selection ? i = this.genSlotSelection : this.hasChips ? i = this.genChipSelection : i = this.genCommaSelection; e--; )
        t[e] = i(this.selectedItems[e], e, e === t.length - 1);
      return this.$createElement("div", {
        staticClass: "v-select__selections"
      }, t);
    },
    genSlotSelection(e, t) {
      return this.$scopedSlots.selection({
        attrs: {
          class: "v-chip--select"
        },
        parent: this,
        item: e,
        index: t,
        select: (i) => {
          i.stopPropagation(), this.selectedIndex = t;
        },
        selected: t === this.selectedIndex,
        disabled: !this.isInteractive
      });
    },
    getMenuIndex() {
      return this.$refs.menu ? this.$refs.menu.listIndex : -1;
    },
    getDisabled(e) {
      return A(e, this.itemDisabled, !1);
    },
    getText(e) {
      return A(e, this.itemText, e);
    },
    getValue(e) {
      return A(e, this.itemValue, this.getText(e));
    },
    onBlur(e) {
      e && this.$emit("blur", e);
    },
    onChipInput(e) {
      this.multiple ? this.selectItem(e) : this.setValue(null), this.selectedItems.length === 0 ? this.isMenuActive = !0 : this.isMenuActive = !1, this.selectedIndex = -1;
    },
    onClick(e) {
      this.isInteractive && (this.isAppendInner(e.target) || (this.isMenuActive = !0), this.isFocused || (this.isFocused = !0, this.$emit("focus")), this.$emit("click", e));
    },
    onEscDown(e) {
      e.preventDefault(), this.isMenuActive && (e.stopPropagation(), this.isMenuActive = !1);
    },
    onKeyPress(e) {
      if (this.multiple || !this.isInteractive || this.disableLookup || e.key.length > 1 || e.ctrlKey || e.metaKey || e.altKey)
        return;
      const t = 1e3, i = performance.now();
      i - this.keyboardLookupLastTime > t && (this.keyboardLookupPrefix = ""), this.keyboardLookupPrefix += e.key.toLowerCase(), this.keyboardLookupLastTime = i;
      const s = this.allItems.findIndex((r) => {
        var o;
        return ((o = this.getText(r)) !== null && o !== void 0 ? o : "").toString().toLowerCase().startsWith(this.keyboardLookupPrefix);
      }), n = this.allItems[s];
      s !== -1 && (this.lastItem = Math.max(this.lastItem, s + 5), this.setValue(this.returnObject ? n : this.getValue(n)), this.$nextTick(() => this.$refs.menu.getTiles()), setTimeout(() => this.setMenuIndex(s)));
    },
    onKeyDown(e) {
      if (this.isReadonly && e.keyCode !== h.tab)
        return;
      const t = e.keyCode, i = this.$refs.menu;
      if (this.$emit("keydown", e), !!i) {
        if (this.isMenuActive && [h.up, h.down, h.home, h.end, h.enter].includes(t) && this.$nextTick(() => {
          i.changeListIndex(e), this.$emit("update:list-index", i.listIndex);
        }), [h.enter, h.space].includes(t) && this.activateMenu(), !this.isMenuActive && [h.up, h.down, h.home, h.end].includes(t))
          return this.onUpDown(e);
        if (t === h.esc)
          return this.onEscDown(e);
        if (t === h.tab)
          return this.onTabDown(e);
        if (t === h.space)
          return this.onSpaceDown(e);
      }
    },
    onMenuActiveChange(e) {
      if (this.multiple && !e || this.getMenuIndex() > -1)
        return;
      const t = this.$refs.menu;
      if (!(!t || !this.isDirty)) {
        this.$refs.menu.getTiles();
        for (let i = 0; i < t.tiles.length; i++)
          if (t.tiles[i].getAttribute("aria-selected") === "true") {
            this.setMenuIndex(i);
            break;
          }
      }
    },
    onMouseUp(e) {
      this.hasMouseDown && e.which !== 3 && this.isInteractive && this.isAppendInner(e.target) && this.$nextTick(() => this.isMenuActive = !this.isMenuActive), C.options.methods.onMouseUp.call(this, e);
    },
    onScroll() {
      if (!this.isMenuActive)
        requestAnimationFrame(() => {
          const e = this.getContent();
          e && (e.scrollTop = 0);
        });
      else {
        if (this.lastItem > this.computedItems.length)
          return;
        this.getContent().scrollHeight - (this.getContent().scrollTop + this.getContent().clientHeight) < 200 && (this.lastItem += 20);
      }
    },
    onSpaceDown(e) {
      e.preventDefault();
    },
    onTabDown(e) {
      const t = this.$refs.menu;
      if (!t)
        return;
      const i = t.activeTile;
      !this.multiple && i && this.isMenuActive ? (e.preventDefault(), e.stopPropagation(), i.click()) : this.blur(e);
    },
    onUpDown(e) {
      const t = this.$refs.menu;
      if (!t)
        return;
      if (e.preventDefault(), this.multiple)
        return this.activateMenu();
      const i = e.keyCode;
      t.isBooted = !0, window.requestAnimationFrame(() => {
        if (t.getTiles(), !t.hasClickableTiles)
          return this.activateMenu();
        switch (i) {
          case h.up:
            t.prevTile();
            break;
          case h.down:
            t.nextTile();
            break;
          case h.home:
            t.firstTile();
            break;
          case h.end:
            t.lastTile();
            break;
        }
        this.selectItem(this.allItems[this.getMenuIndex()]);
      });
    },
    selectItem(e) {
      if (!this.multiple)
        this.setValue(this.returnObject ? e : this.getValue(e)), this.isMenuActive = !1;
      else {
        const t = (this.internalValue || []).slice(), i = this.findExistingIndex(e);
        if (i !== -1 ? t.splice(i, 1) : t.push(e), this.setValue(t.map((s) => this.returnObject ? s : this.getValue(s))), this.hideSelected)
          this.setMenuIndex(-1);
        else {
          const s = this.computedItems.indexOf(e);
          ~s && (this.$nextTick(() => this.$refs.menu.getTiles()), setTimeout(() => this.setMenuIndex(s)));
        }
      }
    },
    setMenuIndex(e) {
      this.$refs.menu && (this.$refs.menu.listIndex = e);
    },
    setSelectedItems() {
      const e = [], t = !this.multiple || !Array.isArray(this.internalValue) ? [this.internalValue] : this.internalValue;
      for (const i of t) {
        const s = this.allItems.findIndex((n) => this.valueComparator(this.getValue(n), this.getValue(i)));
        s > -1 && e.push(this.allItems[s]);
      }
      this.selectedItems = e;
    },
    setValue(e) {
      this.valueComparator(e, this.internalValue) || (this.internalValue = e, this.$emit("change", e));
    },
    isAppendInner(e) {
      const t = this.$refs["append-inner"];
      return t && (t === e || t.contains(e));
    }
  }
}), Ne = {
  ...me,
  offsetY: !0,
  offsetOverflow: !0,
  transition: !1
}, B = m.extend({
  name: "v-autocomplete",
  props: {
    autoSelectFirst: {
      type: Boolean,
      default: !1
    },
    filter: {
      type: Function,
      default: (e, t, i) => i.toLocaleLowerCase().indexOf(t.toLocaleLowerCase()) > -1
    },
    hideNoData: Boolean,
    menuProps: {
      type: m.options.props.menuProps.type,
      default: () => Ne
    },
    noFilter: Boolean,
    searchInput: {
      type: String
    }
  },
  data() {
    return {
      lazySearch: this.searchInput
    };
  },
  computed: {
    classes() {
      return {
        ...m.options.computed.classes.call(this),
        "v-autocomplete": !0,
        "v-autocomplete--is-selecting-index": this.selectedIndex > -1
      };
    },
    computedItems() {
      return this.filteredItems;
    },
    selectedValues() {
      return this.selectedItems.map((e) => this.getValue(e));
    },
    hasDisplayedItems() {
      return this.hideSelected ? this.filteredItems.some((e) => !this.hasItem(e)) : this.filteredItems.length > 0;
    },
    currentRange() {
      return this.selectedItem == null ? 0 : String(this.getText(this.selectedItem)).length;
    },
    filteredItems() {
      return !this.isSearching || this.noFilter || this.internalSearch == null ? this.allItems : this.allItems.filter((e) => {
        const t = A(e, this.itemText), i = t != null ? String(t) : "";
        return this.filter(e, String(this.internalSearch), i);
      });
    },
    internalSearch: {
      get() {
        return this.lazySearch;
      },
      set(e) {
        this.lazySearch !== e && (this.lazySearch = e, this.$emit("update:search-input", e));
      }
    },
    isAnyValueAllowed() {
      return !1;
    },
    isDirty() {
      return this.searchIsDirty || this.selectedItems.length > 0;
    },
    isSearching() {
      return this.multiple && this.searchIsDirty || this.searchIsDirty && this.internalSearch !== this.getText(this.selectedItem);
    },
    menuCanShow() {
      return this.isFocused ? this.hasDisplayedItems || !this.hideNoData : !1;
    },
    $_menuProps() {
      const e = m.options.computed.$_menuProps.call(this);
      return e.contentClass = `v-autocomplete__content ${e.contentClass || ""}`.trim(), {
        ...Ne,
        ...e
      };
    },
    searchIsDirty() {
      return this.internalSearch != null && this.internalSearch !== "";
    },
    selectedItem() {
      return this.multiple ? null : this.selectedItems.find((e) => this.valueComparator(this.getValue(e), this.getValue(this.internalValue)));
    },
    listData() {
      const e = m.options.computed.listData.call(this);
      return e.props = {
        ...e.props,
        items: this.virtualizedItems,
        noFilter: this.noFilter || !this.isSearching || !this.filteredItems.length,
        searchInput: this.internalSearch
      }, e;
    }
  },
  watch: {
    filteredItems: "onFilteredItemsChanged",
    internalValue: "setSearch",
    isFocused(e) {
      e ? (document.addEventListener("copy", this.onCopy), this.$refs.input && this.$refs.input.select()) : (document.removeEventListener("copy", this.onCopy), this.blur(), this.updateSelf());
    },
    isMenuActive(e) {
      e || !this.hasSlot || (this.lazySearch = null);
    },
    items(e, t) {
      !(t && t.length) && this.hideNoData && this.isFocused && !this.isMenuActive && e.length && this.activateMenu();
    },
    searchInput(e) {
      this.lazySearch = e;
    },
    internalSearch: "onInternalSearchChanged",
    itemText: "updateSelf"
  },
  created() {
    this.setSearch();
  },
  destroyed() {
    document.removeEventListener("copy", this.onCopy);
  },
  methods: {
    onFilteredItemsChanged(e, t) {
      if (e !== t) {
        if (!this.autoSelectFirst) {
          const i = t[this.$refs.menu.listIndex];
          i ? this.setMenuIndex(e.findIndex((s) => s === i)) : this.setMenuIndex(-1), this.$emit("update:list-index", this.$refs.menu.listIndex);
        }
        this.$nextTick(() => {
          !this.internalSearch || e.length !== 1 && !this.autoSelectFirst || (this.$refs.menu.getTiles(), this.autoSelectFirst && e.length && (this.setMenuIndex(0), this.$emit("update:list-index", this.$refs.menu.listIndex)));
        });
      }
    },
    onInternalSearchChanged() {
      this.updateMenuDimensions();
    },
    updateMenuDimensions() {
      this.isMenuActive && this.$refs.menu && this.$refs.menu.updateDimensions();
    },
    changeSelectedIndex(e) {
      this.searchIsDirty || (this.multiple && e === h.left ? this.selectedIndex === -1 ? this.selectedIndex = this.selectedItems.length - 1 : this.selectedIndex-- : this.multiple && e === h.right ? this.selectedIndex >= this.selectedItems.length - 1 ? this.selectedIndex = -1 : this.selectedIndex++ : (e === h.backspace || e === h.delete) && this.deleteCurrentItem());
    },
    deleteCurrentItem() {
      const e = this.selectedIndex, t = this.selectedItems[e];
      if (!this.isInteractive || this.getDisabled(t))
        return;
      const i = this.selectedItems.length - 1;
      if (this.selectedIndex === -1 && i !== 0) {
        this.selectedIndex = i;
        return;
      }
      const s = this.selectedItems.length, n = e !== s - 1 ? e : e - 1;
      this.selectedItems[n] ? this.selectItem(t) : this.setValue(this.multiple ? [] : null), this.selectedIndex = n;
    },
    clearableCallback() {
      this.internalSearch = null, m.options.methods.clearableCallback.call(this);
    },
    genInput() {
      const e = C.options.methods.genInput.call(this);
      return e.data = T(e.data, {
        attrs: {
          "aria-activedescendant": k(this.$refs.menu, "activeTile.id"),
          autocomplete: k(e.data, "attrs.autocomplete", "off")
        },
        domProps: {
          value: this.internalSearch
        }
      }), e;
    },
    genInputSlot() {
      const e = m.options.methods.genInputSlot.call(this);
      return e.data.attrs.role = "combobox", e;
    },
    genSelections() {
      return this.hasSlot || this.multiple ? m.options.methods.genSelections.call(this) : [];
    },
    onClick(e) {
      this.isInteractive && (this.selectedIndex > -1 ? this.selectedIndex = -1 : this.onFocus(), this.isAppendInner(e.target) || this.activateMenu());
    },
    onInput(e) {
      if (this.selectedIndex > -1 || !e.target)
        return;
      const t = e.target, i = t.value;
      t.value && this.activateMenu(), !this.multiple && i === "" && this.deleteCurrentItem(), this.internalSearch = i, this.badInput = t.validity && t.validity.badInput;
    },
    onKeyDown(e) {
      const t = e.keyCode;
      (e.ctrlKey || ![h.home, h.end].includes(t)) && m.options.methods.onKeyDown.call(this, e), this.changeSelectedIndex(t);
    },
    onSpaceDown(e) {
    },
    onTabDown(e) {
      m.options.methods.onTabDown.call(this, e), this.updateSelf();
    },
    onUpDown(e) {
      e.preventDefault(), this.activateMenu();
    },
    selectItem(e) {
      m.options.methods.selectItem.call(this, e), this.setSearch();
    },
    setSelectedItems() {
      m.options.methods.setSelectedItems.call(this), this.isFocused || this.setSearch();
    },
    setSearch() {
      this.$nextTick(() => {
        (!this.multiple || !this.internalSearch || !this.isMenuActive) && (this.internalSearch = !this.selectedItems.length || this.multiple || this.hasSlot ? null : this.getText(this.selectedItem));
      });
    },
    updateSelf() {
      !this.searchIsDirty && !this.internalValue || !this.multiple && !this.valueComparator(this.internalSearch, this.getValue(this.internalValue)) && this.setSearch();
    },
    hasItem(e) {
      return this.selectedValues.indexOf(this.getValue(e)) > -1;
    },
    onCopy(e) {
      var t, i;
      if (this.selectedIndex === -1)
        return;
      const s = this.selectedItems[this.selectedIndex], n = this.getText(s);
      (t = e.clipboardData) === null || t === void 0 || t.setData("text/plain", n), (i = e.clipboardData) === null || i === void 0 || i.setData("text/vnd.vuetify.autocomplete.item+plain", n), e.preventDefault();
    }
  }
}), Ts = B.extend({
  name: "v-combobox",
  props: {
    delimiters: {
      type: Array,
      default: () => []
    },
    returnObject: {
      type: Boolean,
      default: !0
    }
  },
  data: () => ({
    editingIndex: -1
  }),
  computed: {
    computedCounterValue() {
      return this.multiple ? this.selectedItems.length : (this.internalSearch || "").toString().length;
    },
    hasSlot() {
      return m.options.computed.hasSlot.call(this) || this.multiple;
    },
    isAnyValueAllowed() {
      return !0;
    },
    menuCanShow() {
      return this.isFocused ? this.hasDisplayedItems || !!this.$slots["no-data"] && !this.hideNoData : !1;
    },
    searchIsDirty() {
      return this.internalSearch != null;
    }
  },
  methods: {
    onInternalSearchChanged(e) {
      if (e && this.multiple && this.delimiters.length) {
        const t = this.delimiters.find((i) => e.endsWith(i));
        t != null && (this.internalSearch = e.slice(0, e.length - t.length), this.updateTags());
      }
      this.updateMenuDimensions();
    },
    genInput() {
      const e = B.options.methods.genInput.call(this);
      return delete e.data.attrs.name, e.data.on.paste = this.onPaste, e;
    },
    genChipSelection(e, t) {
      const i = m.options.methods.genChipSelection.call(this, e, t);
      return this.multiple && (i.componentOptions.listeners = {
        ...i.componentOptions.listeners,
        dblclick: () => {
          this.editingIndex = t, this.internalSearch = this.getText(e), this.selectedIndex = -1;
        }
      }), i;
    },
    onChipInput(e) {
      m.options.methods.onChipInput.call(this, e), this.editingIndex = -1;
    },
    // Requires a manual definition
    // to overwrite removal in v-autocomplete
    onEnterDown(e) {
      e.preventDefault(), !(this.getMenuIndex() > -1) && this.$nextTick(this.updateSelf);
    },
    onKeyDown(e) {
      const t = e.keyCode;
      (e.ctrlKey || ![h.home, h.end].includes(t)) && m.options.methods.onKeyDown.call(this, e), this.multiple && t === h.left && this.$refs.input.selectionStart === 0 ? this.updateSelf() : t === h.enter && this.onEnterDown(e), this.changeSelectedIndex(t);
    },
    onTabDown(e) {
      if (this.multiple && this.internalSearch && this.getMenuIndex() === -1)
        return e.preventDefault(), e.stopPropagation(), this.updateTags();
      B.options.methods.onTabDown.call(this, e);
    },
    selectItem(e) {
      this.editingIndex > -1 ? this.updateEditing() : (B.options.methods.selectItem.call(this, e), this.internalSearch && this.multiple && this.getText(e).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase()) && (this.internalSearch = null));
    },
    setSelectedItems() {
      this.internalValue == null || this.internalValue === "" ? this.selectedItems = [] : this.selectedItems = this.multiple ? this.internalValue : [this.internalValue];
    },
    setValue(e) {
      m.options.methods.setValue.call(this, e === void 0 ? this.internalSearch : e);
    },
    updateEditing() {
      const e = this.internalValue.slice(), t = this.selectedItems.findIndex((i) => this.getText(i) === this.internalSearch);
      if (t > -1) {
        const i = typeof e[t] == "object" ? Object.assign({}, e[t]) : e[t];
        e.splice(t, 1), e.push(i);
      } else
        e[this.editingIndex] = this.internalSearch;
      this.setValue(e), this.editingIndex = -1, this.internalSearch = null;
    },
    updateCombobox() {
      if (!this.searchIsDirty)
        return;
      this.internalSearch !== this.getText(this.internalValue) && this.setValue(), (!!this.$scopedSlots.selection || this.hasChips) && (this.internalSearch = null);
    },
    updateSelf() {
      this.multiple ? this.updateTags() : this.updateCombobox();
    },
    updateTags() {
      const e = this.getMenuIndex();
      if (e < 0 && !this.searchIsDirty || !this.internalSearch)
        return;
      if (this.editingIndex > -1)
        return this.updateEditing();
      const t = this.selectedItems.findIndex((s) => this.internalSearch === this.getText(s)), i = t > -1 && typeof this.selectedItems[t] == "object" ? Object.assign({}, this.selectedItems[t]) : this.internalSearch;
      if (t > -1) {
        const s = this.internalValue.slice();
        s.splice(t, 1), this.setValue(s);
      }
      if (e > -1)
        return this.internalSearch = null;
      this.selectItem(i), this.internalSearch = null;
    },
    onPaste(e) {
      var t;
      if (this.$emit("paste", e), !this.multiple || this.searchIsDirty)
        return;
      const i = (t = e.clipboardData) === null || t === void 0 ? void 0 : t.getData("text/vnd.vuetify.autocomplete.item+plain");
      i && this.findExistingIndex(i) === -1 && (e.preventDefault(), m.options.methods.selectItem.call(this, i));
    },
    clearableCallback() {
      this.editingIndex = -1, B.options.methods.clearableCallback.call(this);
    }
  }
});
class O {
  constructor(t, i = "query-builder-group", s = 1) {
    R(this, "query");
    R(this, "type");
    R(this, "originalIndex");
    this.query = t, this.type = i, this.originalIndex = s;
  }
}
const As = {
  name: "QueryBuilderRule",
  data() {
    return {
      // @ts-ignore
      operator: this.getOperator()
    };
  },
  props: {
    rule: {
      type: O,
      required: !0
    },
    id: {
      type: Number,
      required: !0
    },
    fields: {
      type: Array,
      required: !0
    },
    operators: {
      type: Array,
      required: !0
    }
  },
  computed: {
    value: {
      get: function() {
        let e = this.rule.query.value;
        if (this.operator.type === "array" && typeof e != "object")
          try {
            typeof e == "string" ? e = [...new Set(JSON.parse(e))] : e = [e];
          } catch {
            e = [];
          }
        else if (this.operator.type === "regexp")
          return e ? e.toString().replace(/^\/|\/g$/g, "") : "";
        return e;
      },
      set: function(e) {
        if (typeof e == "object")
          e = JSON.stringify(e);
        else if (this.operator.type === "regexp") {
          if (!this.validRegexp(e.toString()))
            return;
          e = "/" + e + "/g";
        }
        this.rule.query.value = e;
      }
    },
    hideValue() {
      return this.operator.type === "none";
    },
    showTextField() {
      return this.operator.type === "string";
    },
    showCombobox() {
      return this.operator.type === "array";
    },
    showRegexpField() {
      return this.operator.type === "regexp";
    },
    showPlaceHolder() {
      return this.operator.type === "placeholder";
    }
  },
  watch: {
    operator(e, t) {
      e.type !== t.type && (this.value = ""), this.rule.query.operator = e.value;
    }
  },
  methods: {
    removeRule() {
      this.$emit("remove-rule", this.id);
    },
    validRegexp(e) {
      try {
        return new RegExp(e), !0;
      } catch {
        return !1;
      }
    },
    validRegexpInput(e) {
      return this.validRegexp(e) || "Invalid regexp format";
    },
    getOperator() {
      let e = this.rule.query.value;
      if (typeof this.rule.query.value == "string")
        try {
          e = JSON.parse(e != null && e.toString() ? e == null ? void 0 : e.toString() : "");
        } catch {
          e = this.rule.query.value;
        }
      const t = this.rule.query.operator.toLowerCase(), i = typeof e != "object", s = t === "in" || t === "not in", n = this.operators.find(
        (r) => r.value === t && (i && s ? r.type === "placeholder" : !0)
      );
      return n || this.operators[0];
    }
  }
}, _t = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20d='M9,3V4H4V6H5V19A2,2%200%200,0%207,21H17A2,2%200%200,0%2019,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z'%20/%3e%3c/svg%3e";
function Se(e, t, i, s, n, r, o, a) {
  var l = typeof e == "function" ? e.options : e;
  return t && (l.render = t, l.staticRenderFns = i, l._compiled = !0), {
    exports: e,
    options: l
  };
}
var Ms = function() {
  var t = this, i = t._self._c;
  return i("div", { staticClass: "rule-hover", style: t.id === 0 ? "margin-top: 20px" : "margin-top: 0px" }, [i("div", [i(m, { staticStyle: { width: "300px" }, attrs: { label: "field", outlined: "", dense: "", "item-value": "id", "item-title": "id", "hide-details": "", items: t.fields }, model: { value: t.rule.query.operand, callback: function(s) {
    t.$set(t.rule.query, "operand", s);
  }, expression: "rule.query.operand" } })], 1), i("div", [i(m, { staticStyle: { width: "200px" }, attrs: { label: "operator", outlined: "", dense: "", "hide-details": "", "item-title": "text", "item-value": "text", "return-object": "", items: t.operators }, model: { value: t.operator, callback: function(s) {
    t.operator = s;
  }, expression: "operator" } })], 1), t.hideValue ? t._e() : i("div", [t.showTextField ? i(C, { staticStyle: { "min-width": "200px" }, attrs: { label: "value", outlined: "", dense: "", "hide-details": "", clearable: "" }, model: { value: t.value, callback: function(s) {
    t.value = s;
  }, expression: "value" } }) : t.showPlaceHolder ? i(C, { staticStyle: { "min-width": "200px" }, attrs: { lable: "value", outlined: "", dense: "", "hide-details": "", clearable: "" }, model: { value: t.value, callback: function(s) {
    t.value = s;
  }, expression: "value" } }) : t.showRegexpField ? i(C, { staticStyle: { "min-width": "200px" }, attrs: { lable: "value", outlined: "", dense: "", "hide-details": "", clearable: "", prefix: "/", suffix: "/g", rules: [t.validRegexpInput] }, model: { value: t.value, callback: function(s) {
    t.value = s;
  }, expression: "value" } }) : t.showCombobox ? i(Ts, { staticStyle: { "max-height": "100px", "min-width": "250px" }, attrs: { items: t.value, label: "value", multiple: "", clearable: "", outlined: "", dense: "", "hide-details": "", "small-chips": "" }, scopedSlots: t._u([{ key: "selection", fn: function({ item: s, index: n }) {
    return [n < 2 ? i($t, { attrs: { small: "" } }, [i("span", [t._v(t._s(s))])]) : t._e(), n === 2 ? i("span", { staticStyle: { color: "grey", "font-size": "small" } }, [t._v("(+" + t._s(t.value.length - 2) + " others)")]) : t._e()];
  } }], null, !1, 1937024531), model: { value: t.value, callback: function(s) {
    t.value = s;
  }, expression: "value" } }) : t._e()], 1), i("div", [i("img", { attrs: { src: _t, alt: "delete", height: "20" }, on: { click: function(s) {
    return t.removeRule();
  } } })])]);
}, Ds = [], Os = /* @__PURE__ */ Se(
  As,
  Ms,
  Ds
);
const Tt = Os.exports, Vs = {
  name: "QueryBuilderGroup",
  components: {
    QueryBuilderRule: Tt
  },
  props: {
    group: {
      type: O,
      required: !0
    },
    id: {
      type: Number,
      default: 1
    },
    fields: {
      type: Array,
      required: !0
    },
    removable: {
      type: Boolean,
      default: !0
    },
    color: {
      type: String
    },
    operators: {
      type: Array,
      required: !0
    },
    maxNestedLevel: {
      type: Number,
      required: !0
    }
  },
  computed: {
    sortedRules() {
      var e;
      return (e = this.group.query.children) == null ? void 0 : e.filter((t, i) => (t.originalIndex = i, t.type === "query-builder-rule")).map((t) => new O(
        t.query,
        t.type,
        t.originalIndex
      ));
    },
    sortedGroups() {
      var e;
      return (e = this.group.query.children) == null ? void 0 : e.filter((t) => t.type === "query-builder-group").map((t) => new O(t.query, t.type, t.originalIndex));
    },
    disableGroupButton() {
      return this.maxNestedLevel != 0 && this.id >= this.maxNestedLevel;
    }
  },
  methods: {
    addGroup() {
      const e = {
        type: "query-builder-group",
        query: {
          logicalOperator: "AND",
          children: []
        }
      };
      this.group.query.children.push(e);
    },
    addRule() {
      const e = {
        type: "query-builder-rule",
        query: {
          rule: "",
          operator: "eq",
          operand: "",
          value: ""
        }
      };
      this.group.query.children.push(e);
    },
    removeGroup() {
      this.$emit("remove-group", this.id);
    },
    removeNestedGroup(e) {
      this.group.query.children.splice(e, 1);
    },
    removeNestedRule(e) {
      this.group.query.children.splice(e, 1);
    }
  },
  mounted() {
    let e;
    this.color ? e = this.color : e = this.$vuetify.theme.themes.light.primary;
    const t = document.documentElement.style.getPropertyValue("--group-color");
    document.documentElement.style.setProperty("--group-color", e ? e.toString() : t.toString());
  }
}, He = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20d='M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z'%20/%3e%3c/svg%3e";
var Bs = function() {
  var t = this, i = t._self._c;
  return i("div", { staticClass: "group-wrap" }, [t.group.query ? i("div", { staticClass: "group-header" }, [i("div", [i(Be, { staticClass: "mr-2", attrs: { disabled: t.disableGroupButton }, on: { click: t.addGroup } }, [i("img", { attrs: { src: He, alt: "add", height: "20" } }), t._v("group ")])], 1), i("div", [i(Be, { staticClass: "mr-2", on: { click: t.addRule } }, [i("img", { attrs: { src: He, alt: "add", height: "20" } }), t._v(" rule ")])], 1), i("div", [t.group.query.children.length > 1 ? i(m, { staticClass: "mr-2", staticStyle: { "max-width": "200px" }, attrs: { label: "logicalOperator", outlined: "", dense: "", "hide-details": "", items: ["AND", "OR"] }, model: { value: t.group.query.logicalOperator, callback: function(s) {
    t.$set(t.group.query, "logicalOperator", s);
  }, expression: "group.query.logicalOperator" } }) : t._e()], 1), t.removable ? i("div", { staticStyle: { "margin-left": "auto" } }, [i("img", { attrs: { src: _t, alt: "delete", height: "20" }, on: { click: function(s) {
    return t.removeGroup();
  } } })]) : t._e()]) : t._e(), i("div", [t._l(t.sortedRules, function(s) {
    return i("div", { staticClass: "child-wrap" }, [i(Tt, { attrs: { rule: s, id: t.id + 1, fields: t.fields, operators: t.operators }, on: { "remove-rule": t.removeNestedRule } })], 1);
  }), t._l(t.sortedGroups, function(s) {
    return i("div", { staticClass: "child-wrap" }, [i("query-builder-group", { attrs: { group: s, id: t.id + 1, fields: t.fields, operators: t.operators, "max-nested-level": t.maxNestedLevel }, on: { "remove-group": t.removeNestedGroup } })], 1);
  })], 2)]);
}, Es = [], Ps = /* @__PURE__ */ Se(
  Vs,
  Bs,
  Es
);
const At = Ps.exports, Ns = [
  { value: "eq", text: "=", type: "string" },
  { value: "ne", text: "!=", type: "string" },
  { value: "gt", text: ">", type: "string" },
  { value: "lt", text: "<", type: "string" },
  { value: "gte", text: ">=", type: "string" },
  { value: "lte", text: "<=", type: "string" },
  { value: "regexp", text: "regexp", type: "regexp" },
  { value: "not regexp", text: "not regexp", type: "regexp" },
  { value: "like", text: "like", type: "string" },
  { value: "not like", text: "not like", type: "string" },
  { value: "exists", text: "exists", type: "none" },
  { value: "not exists", text: "not exists", type: "none" },
  { value: "is null", text: "is null", type: "none" },
  { value: "not null", text: "not null", type: "none" },
  { value: "in", text: "in", type: "array" },
  { value: "not in", text: "not in", type: "array" },
  { value: "in", text: "in placeholder", type: "placeholder" },
  { value: "not in", text: "not in placeholder", type: "placeholder" }
], Hs = {
  components: { QueryBuilderGroup: At },
  props: {
    filterFields: {
      type: Array,
      required: !0
    },
    value: {
      type: Object,
      required: !0
    },
    color: {
      type: String,
      default: null
    },
    operators: {
      type: Array,
      required: !1,
      default() {
        return Ns;
      }
    },
    maxNestedLevel: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      // @ts-ignore Computed value for outerGroup based on value prop
      outerGroup: new O(this.value)
    };
  },
  methods: {
    removeGroup(e) {
      this.value.children.splice(e, 1);
    },
    initializeValue() {
      var e;
      (e = this.value) != null && e.children || this.$emit("update:modelValue", { children: [], logicalOperator: "AND" });
    }
  },
  watch: {
    value: {
      handler(e) {
        this.outerGroup = new O(e);
      },
      deep: !0
    }
  },
  mounted() {
    this.initializeValue();
  }
};
var Fs = function() {
  var t = this, i = t._self._c;
  return i("div", [t.value.children ? i("div", [i(At, { attrs: { group: t.outerGroup, id: 1, fields: t.filterFields, removable: !1, color: t.color, operators: t.operators, "max-nested-level": t.maxNestedLevel }, on: { "remove-group": t.removeGroup } })], 1) : t._e()]);
}, zs = [], Rs = /* @__PURE__ */ Se(
  Hs,
  Fs,
  zs
);
const Ys = Rs.exports;
export {
  Ys as default
};
