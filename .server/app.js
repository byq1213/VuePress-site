"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var vueRouter = require("vue-router");
var vue = require("vue");
var core = require("@vueuse/core");
var serverRenderer = require("vue/server-renderer");
var moment = require("moment");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var moment__default = /* @__PURE__ */ _interopDefaultLegacy(moment);
const ClientOnly = vue.defineComponent({
  setup(_, ctx) {
    const isMounted = vue.ref(false);
    vue.onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a, _b;
      return isMounted.value ? (_b = (_a = ctx.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a) : null;
    };
  }
});
const pagesComponents = {
  "v-8daa1a0e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$n;
  })),
  "v-1ec69fb0": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return abc_html$2;
  })),
  "v-2b30cdfd": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return demo_html$2;
  })),
  "v-4e9cb81e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return linux_html$2;
  })),
  "v-953546a4": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return test_html$2;
  })),
  "v-541e4bfd": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _______html$2;
  })),
  "v-4bc92a0e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ____html$2;
  })),
  "v-14f0db02": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ____excel_nodejs__html$2;
  })),
  "v-74458d05": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$l;
  })),
  "v-f9aeb140": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Dockerfile_dockerCompose_html$2;
  })),
  "v-51f86e14": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$j;
  })),
  "v-626facc6": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _____html$5;
  })),
  "v-9d4992e4": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return learnNextjsDocs_html$2;
  })),
  "v-e39dae2e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ______html$5;
  })),
  "v-9d62a912": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ________html$2;
  })),
  "v-7cd3a8f0": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ______html$3;
  })),
  "v-14e44e30": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$h;
  })),
  "v-5ebef70d": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return array_remove_duplicarution_html$2;
  })),
  "v-2f231e85": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return operator_html$2;
  })),
  "v-14e62408": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$f;
  })),
  "v-6b37858a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return CI_html$2;
  })),
  "v-2ed1b03f": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return git_html$2;
  })),
  "v-afc5cf42": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return md_example_html$2;
  })),
  "v-b39531ea": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return vue_html$2;
  })),
  "v-eb072ff4": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$d;
  })),
  "v-70ef9ad6": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _20191202_html$2;
  })),
  "v-6f6778ae": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return soft_log_html$2;
  })),
  "v-2e9785c6": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return next_html$2;
  })),
  "v-a91e9eee": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$b;
  })),
  "v-0e281e2a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return README_2019_html$2;
  })),
  "v-59dadc84": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return note_html$2;
  })),
  "v-520a66da": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return patch_html$2;
  })),
  "v-446e95c9": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _20220916_html$2;
  })),
  "v-d50ba494": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$9;
  })),
  "v-2020b026": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return proto2Ts_html$2;
  })),
  "v-671a8e04": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _____html$3;
  })),
  "v-3706649a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404_html$2;
  }))
};
const pagesData$1 = {
  "v-8daa1a0e": () => Promise.resolve().then(function() {
    return index_html$7;
  }).then(({ data: data2 }) => data2),
  "v-1ec69fb0": () => Promise.resolve().then(function() {
    return abc_html;
  }).then(({ data: data2 }) => data2),
  "v-2b30cdfd": () => Promise.resolve().then(function() {
    return demo_html;
  }).then(({ data: data2 }) => data2),
  "v-4e9cb81e": () => Promise.resolve().then(function() {
    return linux_html;
  }).then(({ data: data2 }) => data2),
  "v-953546a4": () => Promise.resolve().then(function() {
    return test_html;
  }).then(({ data: data2 }) => data2),
  "v-541e4bfd": () => Promise.resolve().then(function() {
    return _______html;
  }).then(({ data: data2 }) => data2),
  "v-4bc92a0e": () => Promise.resolve().then(function() {
    return ____html;
  }).then(({ data: data2 }) => data2),
  "v-14f0db02": () => Promise.resolve().then(function() {
    return ____excel_nodejs__html;
  }).then(({ data: data2 }) => data2),
  "v-74458d05": () => Promise.resolve().then(function() {
    return index_html$6;
  }).then(({ data: data2 }) => data2),
  "v-f9aeb140": () => Promise.resolve().then(function() {
    return Dockerfile_dockerCompose_html;
  }).then(({ data: data2 }) => data2),
  "v-51f86e14": () => Promise.resolve().then(function() {
    return index_html$5;
  }).then(({ data: data2 }) => data2),
  "v-626facc6": () => Promise.resolve().then(function() {
    return _____html$1;
  }).then(({ data: data2 }) => data2),
  "v-9d4992e4": () => Promise.resolve().then(function() {
    return learnNextjsDocs_html;
  }).then(({ data: data2 }) => data2),
  "v-e39dae2e": () => Promise.resolve().then(function() {
    return ______html$1;
  }).then(({ data: data2 }) => data2),
  "v-9d62a912": () => Promise.resolve().then(function() {
    return ________html;
  }).then(({ data: data2 }) => data2),
  "v-7cd3a8f0": () => Promise.resolve().then(function() {
    return ______html;
  }).then(({ data: data2 }) => data2),
  "v-14e44e30": () => Promise.resolve().then(function() {
    return index_html$4;
  }).then(({ data: data2 }) => data2),
  "v-5ebef70d": () => Promise.resolve().then(function() {
    return array_remove_duplicarution_html;
  }).then(({ data: data2 }) => data2),
  "v-2f231e85": () => Promise.resolve().then(function() {
    return operator_html;
  }).then(({ data: data2 }) => data2),
  "v-14e62408": () => Promise.resolve().then(function() {
    return index_html$3;
  }).then(({ data: data2 }) => data2),
  "v-6b37858a": () => Promise.resolve().then(function() {
    return CI_html;
  }).then(({ data: data2 }) => data2),
  "v-2ed1b03f": () => Promise.resolve().then(function() {
    return git_html;
  }).then(({ data: data2 }) => data2),
  "v-afc5cf42": () => Promise.resolve().then(function() {
    return md_example_html;
  }).then(({ data: data2 }) => data2),
  "v-b39531ea": () => Promise.resolve().then(function() {
    return vue_html;
  }).then(({ data: data2 }) => data2),
  "v-eb072ff4": () => Promise.resolve().then(function() {
    return index_html$2;
  }).then(({ data: data2 }) => data2),
  "v-70ef9ad6": () => Promise.resolve().then(function() {
    return _20191202_html;
  }).then(({ data: data2 }) => data2),
  "v-6f6778ae": () => Promise.resolve().then(function() {
    return soft_log_html;
  }).then(({ data: data2 }) => data2),
  "v-2e9785c6": () => Promise.resolve().then(function() {
    return next_html;
  }).then(({ data: data2 }) => data2),
  "v-a91e9eee": () => Promise.resolve().then(function() {
    return index_html$1;
  }).then(({ data: data2 }) => data2),
  "v-0e281e2a": () => Promise.resolve().then(function() {
    return README_2019_html;
  }).then(({ data: data2 }) => data2),
  "v-59dadc84": () => Promise.resolve().then(function() {
    return note_html;
  }).then(({ data: data2 }) => data2),
  "v-520a66da": () => Promise.resolve().then(function() {
    return patch_html;
  }).then(({ data: data2 }) => data2),
  "v-446e95c9": () => Promise.resolve().then(function() {
    return _20220916_html;
  }).then(({ data: data2 }) => data2),
  "v-d50ba494": () => Promise.resolve().then(function() {
    return index_html;
  }).then(({ data: data2 }) => data2),
  "v-2020b026": () => Promise.resolve().then(function() {
    return proto2Ts_html;
  }).then(({ data: data2 }) => data2),
  "v-671a8e04": () => Promise.resolve().then(function() {
    return _____html;
  }).then(({ data: data2 }) => data2),
  "v-3706649a": () => Promise.resolve().then(function() {
    return _404_html;
  }).then(({ data: data2 }) => data2)
};
const pagesData = vue.ref(pagesData$1);
const pageDataEmpty = vue.readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
const pageData = vue.ref(pageDataEmpty);
const usePageData = () => pageData;
const resolvePageData = async (pageKey) => {
  const pageDataResolver = pagesData.value[pageKey];
  if (!pageDataResolver) {
    return pageDataEmpty;
  }
  const pageData2 = await pageDataResolver();
  return pageData2 !== null && pageData2 !== void 0 ? pageData2 : pageDataEmpty;
};
if (false) {
  __VUE_HMR_RUNTIME__.updatePageData = (data2) => {
    pagesData.value[data2.key] = () => Promise.resolve(data2);
    if (data2.key === pageData.value.key) {
      pageData.value = data2;
    }
  };
}
const pageFrontmatterSymbol = Symbol("");
const usePageFrontmatter = () => {
  const pageFrontmatter = vue.inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
const resolvePageFrontmatter = (pageData2) => pageData2.frontmatter;
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const resolveHeadIdentifier = ([tag, attrs, content]) => {
  if (tag === "meta" && attrs.name) {
    return `${tag}.${attrs.name}`;
  }
  if (["title", "base"].includes(tag)) {
    return tag;
  }
  if (tag === "template" && attrs.id) {
    return `${tag}.${attrs.id}`;
  }
  return JSON.stringify([tag, attrs, content]);
};
const dedupeHead = (head) => {
  const identifierSet = new Set();
  const result = [];
  head.forEach((item) => {
    const identifier = resolveHeadIdentifier(item);
    if (!identifierSet.has(identifier)) {
      identifierSet.add(identifier);
      result.push(item);
    }
  });
  return result;
};
const isLinkHttp = (link) => /^(https?:)?\/\//.test(link);
const isLinkMailto = (link) => /^mailto:/.test(link);
const isLinkTel = (link) => /^tel:/.test(link);
const isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
const removeEndingSlash = (str) => str.replace(/\/$/, "");
const removeLeadingSlash = (str) => str.replace(/^\//, "");
const resolveLocalePath = (locales, routePath) => {
  const localePaths = Object.keys(locales).sort((a, b) => {
    const levelDelta = b.split("/").length - a.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    }
    return b.length - a.length;
  });
  for (const localePath of localePaths) {
    if (routePath.startsWith(localePath)) {
      return localePath;
    }
  }
  return "/";
};
const pageHeadSymbol = Symbol("");
const usePageHead = () => {
  const pageHead = vue.inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
const resolvePageHead = (headTitle, frontmatter, siteLocale) => {
  const description = isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
  const head = [
    ...isArray(frontmatter.head) ? frontmatter.head : [],
    ...siteLocale.head,
    ["title", {}, headTitle],
    ["meta", { name: "description", content: description }]
  ];
  return dedupeHead(head);
};
const pageHeadTitleSymbol = Symbol("");
const resolvePageHeadTitle = (page, siteLocale) => `${page.title ? `${page.title} | ` : ``}${siteLocale.title}`;
const pageLangSymbol = Symbol("");
const usePageLang = () => {
  const pageLang = vue.inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
const resolvePageLang = (pageData2) => pageData2.lang || "en";
const routeLocaleSymbol = Symbol("");
const useRouteLocale = () => {
  const routeLocale = vue.inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
const resolveRouteLocale = (locales, routePath) => resolveLocalePath(locales, routePath);
const siteData$1 = {
  "base": "/VuePress-site/",
  "lang": "zh-CN",
  "title": "",
  "description": "\u524D\u7AEF\u5C0F\u767D\u5347\u7EA7\u6253\u602A\u7AD9\u70B9",
  "head": [],
  "locales": {}
};
const siteData = vue.ref(siteData$1);
const useSiteData = () => siteData;
if (false) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data2) => {
    siteData.value = data2;
  };
}
const siteLocaleDataSymbol = Symbol("");
const useSiteLocaleData = () => {
  const siteLocaleData = vue.inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
const resolveSiteLocaleData = (site, routeLocale) => __spreadValues(__spreadValues({}, site), site.locales[routeLocale]);
const setupUpdateHead = () => {
  vueRouter.useRoute();
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = vue.useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
const Content = (props) => {
  let key;
  if (props.pageKey) {
    key = props.pageKey;
  } else {
    const page = usePageData();
    key = page.value.key;
  }
  const component = pagesComponents[key];
  if (component) {
    return vue.h(component);
  }
  return vue.h("div", "404 Not Found");
};
Content.displayName = "Content";
Content.props = {
  pageKey: {
    type: String,
    required: false
  }
};
const layoutComponents = {
  "404": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404;
  })),
  "Layout": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Layout;
  }))
};
const Vuepress = vue.defineComponent({
  name: "Vuepress",
  setup() {
    const page = usePageData();
    const layoutComponent = vue.computed(() => {
      let layoutName;
      if (page.value.path) {
        const frontmatterLayout = page.value.frontmatter.layout;
        if (isString(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = "Layout";
        }
      } else {
        layoutName = "404";
      }
      return layoutComponents[layoutName] || vue.resolveComponent(layoutName, false);
    });
    return () => vue.h(layoutComponent.value);
  }
});
const defineClientAppEnhance = (clientAppEnhance) => clientAppEnhance;
const defineClientAppSetup = (clientAppSetup) => clientAppSetup;
const withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  const base = useSiteData().value.base;
  return `${base}${removeLeadingSlash(url)}`;
};
var vars$3 = "";
var externalLinkIcon = "";
const svg = vue.h("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  vue.h("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  vue.h("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = (_, { slots }) => {
  var _a;
  return vue.h("span", [svg, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
};
ExternalLinkIcon.displayName = "ExternalLinkIcon";
var clientAppEnhance0 = defineClientAppEnhance(({ app }) => {
  app.component("ExternalLinkIcon", ExternalLinkIcon);
});
var vars$2 = "";
var mediumZoom = "";
var clientAppEnhance1 = defineClientAppEnhance(({ app, router }) => {
  return;
});
const themeData$1 = {
  "navbar": [
    {
      "text": "\u7B80\u5386",
      "link": "/resume"
    }
  ],
  "sidebarDepth": 2,
  "sidebar": "auto",
  "logo": "/logo.png",
  "lastUpdatedText": "\u6700\u540E\u66F4\u65B0\u4E8E",
  "lastUpdated": false,
  "contributors": false,
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "editLinkText": "Edit this page",
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
};
const themeData = vue.ref(themeData$1);
const useThemeData = () => themeData;
if (false) {
  __VUE_HMR_RUNTIME__.updateThemeData = (data2) => {
    themeData.value = data2;
  };
}
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = vue.inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a;
  return __spreadValues(__spreadValues({}, theme), (_a = theme.locales) === null || _a === void 0 ? void 0 : _a[routeLocale]);
};
var clientAppEnhance2 = defineClientAppEnhance(({ app }) => {
  const themeData2 = useThemeData();
  const routeLocale = app._context.provides[routeLocaleSymbol];
  const themeLocaleData = vue.computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
  app.provide(themeLocaleDataSymbol, themeLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $theme: {
      get() {
        return themeData2.value;
      }
    },
    $themeLocale: {
      get() {
        return themeLocaleData.value;
      }
    }
  });
});
const _sfc_main$Y = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      required: false,
      default: "tip"
    },
    text: {
      type: String,
      required: false,
      default: ""
    },
    vertical: {
      type: String,
      required: false,
      default: void 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["badge", __props.type],
        style: {
          verticalAlign: __props.vertical
        }
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${serverRenderer.ssrInterpolate(__props.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
var CodeGroup = vue.defineComponent({
  name: "CodeGroup",
  setup(_, { slots }) {
    const activeIndex = vue.ref(-1);
    const tabRefs = vue.ref([]);
    const activateNext = (i = activeIndex.value) => {
      if (i < tabRefs.value.length - 1) {
        activeIndex.value = i + 1;
      } else {
        activeIndex.value = 0;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const activatePrev = (i = activeIndex.value) => {
      if (i > 0) {
        activeIndex.value = i - 1;
      } else {
        activeIndex.value = tabRefs.value.length - 1;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const keyboardHandler = (event, i) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        activeIndex.value = i;
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        activateNext(i);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        activatePrev(i);
      }
    };
    return () => {
      var _a;
      const items = (((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || []).filter((vnode) => vnode.type.name === "CodeGroupItem").map((vnode) => {
        if (vnode.props === null) {
          vnode.props = {};
        }
        return vnode;
      });
      if (items.length === 0) {
        return null;
      }
      if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
        activeIndex.value = items.findIndex((vnode) => vnode.props.active === "" || vnode.props.active === true);
        if (activeIndex.value === -1) {
          activeIndex.value = 0;
        }
      } else {
        items.forEach((vnode, i) => {
          vnode.props.active = i === activeIndex.value;
        });
      }
      return vue.h("div", { class: "code-group" }, [
        vue.h("div", { class: "code-group__nav" }, vue.h("ul", { class: "code-group__ul" }, items.map((vnode, i) => {
          const isActive = i === activeIndex.value;
          return vue.h("li", { class: "code-group__li" }, vue.h("button", {
            ref: (element) => {
              if (element) {
                tabRefs.value[i] = element;
              }
            },
            class: {
              "code-group__nav-tab": true,
              "code-group__nav-tab-active": isActive
            },
            ariaPressed: isActive,
            ariaExpanded: isActive,
            onClick: () => activeIndex.value = i,
            onKeydown: (e) => keyboardHandler(e, i)
          }, vnode.props.title));
        }))),
        items
      ]);
    };
  }
});
const __default__$1 = vue.defineComponent({
  name: "CodeGroupItem"
});
const _sfc_main$X = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["code-group-item", { "code-group-item__active": __props.active }],
        "aria-selected": __props.active
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
}));
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const darkModeSymbol = Symbol("");
const useDarkMode = () => {
  const isDarkMode = vue.inject(darkModeSymbol);
  if (!isDarkMode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return isDarkMode;
};
const setupDarkMode = () => {
  const themeLocale = useThemeLocaleData();
  const isDarkPreferred = core.usePreferredDark();
  const darkStorage = core.useStorage("vuepress-color-scheme", "auto");
  const isDarkMode = vue.computed({
    get() {
      if (!themeLocale.value.darkMode) {
        return false;
      }
      if (darkStorage.value === "auto") {
        return isDarkPreferred.value;
      }
      return darkStorage.value === "dark";
    },
    set(val) {
      if (val === isDarkPreferred.value) {
        darkStorage.value = "auto";
      } else {
        darkStorage.value = val ? "dark" : "light";
      }
    }
  });
  vue.provide(darkModeSymbol, isDarkMode);
  updateHtmlDarkClass(isDarkMode);
};
const updateHtmlDarkClass = (isDarkMode) => {
  const update = (value = isDarkMode.value) => {
    const htmlEl = window === null || window === void 0 ? void 0 : window.document.querySelector("html");
    htmlEl === null || htmlEl === void 0 ? void 0 : htmlEl.classList.toggle("dark", value);
  };
  vue.onMounted(() => {
    vue.watch(isDarkMode, update, { immediate: true });
  });
  vue.onUnmounted(() => update());
};
const useResolveRouteWithRedirect = (...args) => {
  const router = vueRouter.useRouter();
  const route = router.resolve(...args);
  const lastMatched = route.matched[route.matched.length - 1];
  if (!(lastMatched === null || lastMatched === void 0 ? void 0 : lastMatched.redirect)) {
    return route;
  }
  const { redirect } = lastMatched;
  const resolvedRedirect = isFunction(redirect) ? redirect(route) : redirect;
  const resolvedRedirectObj = isString(resolvedRedirect) ? { path: resolvedRedirect } : resolvedRedirect;
  return useResolveRouteWithRedirect(__spreadValues({
    hash: route.hash,
    query: route.query,
    params: route.params
  }, resolvedRedirectObj));
};
const useNavLink = (item) => {
  const resolved = useResolveRouteWithRedirect(item);
  return {
    text: resolved.meta.title || item,
    link: resolved.name === "404" ? item : resolved.fullPath
  };
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve === null || promiseResolve === void 0 ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const sidebarItemsSymbol = Symbol("sidebarItems");
const useSidebarItems = () => {
  const sidebarItems = vue.inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
const setupSidebarItems = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  const sidebarItems = vue.computed(() => resolveSidebarItems(frontmatter.value, themeLocale.value));
  vue.provide(sidebarItemsSymbol, sidebarItems);
};
const resolveSidebarItems = (frontmatter, themeLocale) => {
  var _a, _b, _c, _d;
  const sidebarConfig = (_b = (_a = frontmatter.sidebar) !== null && _a !== void 0 ? _a : themeLocale.sidebar) !== null && _b !== void 0 ? _b : "auto";
  const sidebarDepth = (_d = (_c = frontmatter.sidebarDepth) !== null && _c !== void 0 ? _c : themeLocale.sidebarDepth) !== null && _d !== void 0 ? _d : 2;
  if (frontmatter.home || sidebarConfig === false) {
    return [];
  }
  if (sidebarConfig === "auto") {
    return resolveAutoSidebarItems(sidebarDepth);
  }
  if (isArray(sidebarConfig)) {
    return resolveArraySidebarItems(sidebarConfig, sidebarDepth);
  }
  if (isPlainObject(sidebarConfig)) {
    return resolveMultiSidebarItems(sidebarConfig, sidebarDepth);
  }
  return [];
};
const headerToSidebarItem = (header, sidebarDepth) => ({
  text: header.title,
  link: `#${header.slug}`,
  children: headersToSidebarItemChildren(header.children, sidebarDepth)
});
const headersToSidebarItemChildren = (headers, sidebarDepth) => sidebarDepth > 0 ? headers.map((header) => headerToSidebarItem(header, sidebarDepth - 1)) : [];
const resolveAutoSidebarItems = (sidebarDepth) => {
  const page = usePageData();
  return [
    {
      text: page.value.title,
      children: headersToSidebarItemChildren(page.value.headers, sidebarDepth)
    }
  ];
};
const resolveArraySidebarItems = (sidebarConfig, sidebarDepth) => {
  const route = vueRouter.useRoute();
  const page = usePageData();
  const handleChildItem = (item) => {
    var _a;
    let childItem;
    if (isString(item)) {
      childItem = useNavLink(item);
    } else {
      childItem = item;
    }
    if (childItem.children) {
      return __spreadProps(__spreadValues({}, childItem), {
        children: childItem.children.map((item2) => handleChildItem(item2))
      });
    }
    if (childItem.link === route.path) {
      const headers = ((_a = page.value.headers[0]) === null || _a === void 0 ? void 0 : _a.level) === 1 ? page.value.headers[0].children : page.value.headers;
      return __spreadProps(__spreadValues({}, childItem), {
        children: headersToSidebarItemChildren(headers, sidebarDepth)
      });
    }
    return childItem;
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, sidebarDepth) => {
  var _a;
  const route = vueRouter.useRoute();
  const sidebarPath = resolveLocalePath(sidebarConfig, route.path);
  const matchedSidebarConfig = (_a = sidebarConfig[sidebarPath]) !== null && _a !== void 0 ? _a : [];
  return resolveArraySidebarItems(matchedSidebarConfig, sidebarDepth);
};
const useThemeLocaleData = () => useThemeLocaleData$1();
const _sfc_main$W = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(vue.unref(ExternalLinkIcon), _attrs, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(themeLocale).openInNewWindow)}</span>`);
          } else {
            return [
              vue.createVNode("span", { class: "sr-only" }, vue.toDisplayString(vue.unref(themeLocale).openInNewWindow), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/ExternalLinkIcon.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
var index = "";
var clientAppEnhance3 = defineClientAppEnhance(({ app, router }) => {
  app.component("Badge", _sfc_main$Y);
  app.component("CodeGroup", CodeGroup);
  app.component("CodeGroupItem", _sfc_main$X);
  delete app._context.components.ExternalLinkIcon;
  app.component("ExternalLinkIcon", _sfc_main$W);
  app.component("NavbarSearch", () => {
    const SearchComponent = app.component("Docsearch") || app.component("SearchBox");
    if (SearchComponent) {
      return vue.h(SearchComponent);
    }
    return null;
  });
  const scrollBehavior = router.options.scrollBehavior;
  router.options.scrollBehavior = async (...args) => {
    await useScrollPromise().wait();
    return scrollBehavior(...args);
  };
});
const clientAppEnhances = [
  clientAppEnhance0,
  clientAppEnhance1,
  clientAppEnhance2,
  clientAppEnhance3
];
function r(r2, e, n) {
  var i, t, o;
  e === void 0 && (e = 50), n === void 0 && (n = {});
  var a = (i = n.isImmediate) != null && i, u = (t = n.callback) != null && t, c = n.maxWait, v = Date.now(), l = [];
  function f() {
    if (c !== void 0) {
      var r3 = Date.now() - v;
      if (r3 + e >= c)
        return c - r3;
    }
    return e;
  }
  var d = function() {
    var e2 = [].slice.call(arguments), n2 = this;
    return new Promise(function(i2, t2) {
      var c2 = a && o === void 0;
      if (o !== void 0 && clearTimeout(o), o = setTimeout(function() {
        if (o = void 0, v = Date.now(), !a) {
          var i3 = r2.apply(n2, e2);
          u && u(i3), l.forEach(function(r3) {
            return (0, r3.resolve)(i3);
          }), l = [];
        }
      }, f()), c2) {
        var d2 = r2.apply(n2, e2);
        return u && u(d2), i2(d2);
      }
      l.push({ resolve: i2, reject: t2 });
    });
  };
  return d.cancel = function(r3) {
    o !== void 0 && clearTimeout(o), l.forEach(function(e2) {
      return (0, e2.reject)(r3);
    }), l = [];
  }, d;
}
const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
var vars$1 = "";
var backToTop = "";
const BackToTop = vue.defineComponent({
  name: "BackToTop",
  setup() {
    const scrollTop = vue.ref(0);
    const show = vue.computed(() => scrollTop.value > 300);
    const onScroll = r(() => {
      scrollTop.value = getScrollTop();
    }, 100);
    vue.onMounted(() => {
      scrollTop.value = getScrollTop();
      window.addEventListener("scroll", () => onScroll());
    });
    const backToTopEl = vue.h("div", { class: "back-to-top", onClick: scrollToTop });
    return () => vue.h(vue.Transition, {
      name: "back-to-top"
    }, {
      default: () => show.value ? backToTopEl : null
    });
  }
});
const clientAppRootComponents = [
  BackToTop
];
var clientAppSetup0 = defineClientAppSetup(() => {
  return;
});
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var nprogress$1 = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
(function(module, exports2) {
  (function(root, factory) {
    {
      module.exports = factory();
    }
  })(commonjsGlobal, function() {
    var NProgress = {};
    NProgress.version = "0.2.0";
    var Settings = NProgress.settings = {
      minimum: 0.08,
      easing: "ease",
      positionUsing: "",
      speed: 200,
      trickle: true,
      trickleRate: 0.02,
      trickleSpeed: 800,
      showSpinner: true,
      barSelector: '[role="bar"]',
      spinnerSelector: '[role="spinner"]',
      parent: "body",
      template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    NProgress.configure = function(options) {
      var key, value;
      for (key in options) {
        value = options[key];
        if (value !== void 0 && options.hasOwnProperty(key))
          Settings[key] = value;
      }
      return this;
    };
    NProgress.status = null;
    NProgress.set = function(n) {
      var started = NProgress.isStarted();
      n = clamp(n, Settings.minimum, 1);
      NProgress.status = n === 1 ? null : n;
      var progress = NProgress.render(!started), bar = progress.querySelector(Settings.barSelector), speed = Settings.speed, ease = Settings.easing;
      progress.offsetWidth;
      queue(function(next) {
        if (Settings.positionUsing === "")
          Settings.positionUsing = NProgress.getPositioningCSS();
        css(bar, barPositionCSS(n, speed, ease));
        if (n === 1) {
          css(progress, {
            transition: "none",
            opacity: 1
          });
          progress.offsetWidth;
          setTimeout(function() {
            css(progress, {
              transition: "all " + speed + "ms linear",
              opacity: 0
            });
            setTimeout(function() {
              NProgress.remove();
              next();
            }, speed);
          }, speed);
        } else {
          setTimeout(next, speed);
        }
      });
      return this;
    };
    NProgress.isStarted = function() {
      return typeof NProgress.status === "number";
    };
    NProgress.start = function() {
      if (!NProgress.status)
        NProgress.set(0);
      var work = function() {
        setTimeout(function() {
          if (!NProgress.status)
            return;
          NProgress.trickle();
          work();
        }, Settings.trickleSpeed);
      };
      if (Settings.trickle)
        work();
      return this;
    };
    NProgress.done = function(force) {
      if (!force && !NProgress.status)
        return this;
      return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
    };
    NProgress.inc = function(amount) {
      var n = NProgress.status;
      if (!n) {
        return NProgress.start();
      } else {
        if (typeof amount !== "number") {
          amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
        }
        n = clamp(n + amount, 0, 0.994);
        return NProgress.set(n);
      }
    };
    NProgress.trickle = function() {
      return NProgress.inc(Math.random() * Settings.trickleRate);
    };
    (function() {
      var initial = 0, current = 0;
      NProgress.promise = function($promise) {
        if (!$promise || $promise.state() === "resolved") {
          return this;
        }
        if (current === 0) {
          NProgress.start();
        }
        initial++;
        current++;
        $promise.always(function() {
          current--;
          if (current === 0) {
            initial = 0;
            NProgress.done();
          } else {
            NProgress.set((initial - current) / initial);
          }
        });
        return this;
      };
    })();
    NProgress.render = function(fromStart) {
      if (NProgress.isRendered())
        return document.getElementById("nprogress");
      addClass(document.documentElement, "nprogress-busy");
      var progress = document.createElement("div");
      progress.id = "nprogress";
      progress.innerHTML = Settings.template;
      var bar = progress.querySelector(Settings.barSelector), perc = fromStart ? "-100" : toBarPerc(NProgress.status || 0), parent = document.querySelector(Settings.parent), spinner;
      css(bar, {
        transition: "all 0 linear",
        transform: "translate3d(" + perc + "%,0,0)"
      });
      if (!Settings.showSpinner) {
        spinner = progress.querySelector(Settings.spinnerSelector);
        spinner && removeElement(spinner);
      }
      if (parent != document.body) {
        addClass(parent, "nprogress-custom-parent");
      }
      parent.appendChild(progress);
      return progress;
    };
    NProgress.remove = function() {
      removeClass(document.documentElement, "nprogress-busy");
      removeClass(document.querySelector(Settings.parent), "nprogress-custom-parent");
      var progress = document.getElementById("nprogress");
      progress && removeElement(progress);
    };
    NProgress.isRendered = function() {
      return !!document.getElementById("nprogress");
    };
    NProgress.getPositioningCSS = function() {
      var bodyStyle = document.body.style;
      var vendorPrefix = "WebkitTransform" in bodyStyle ? "Webkit" : "MozTransform" in bodyStyle ? "Moz" : "msTransform" in bodyStyle ? "ms" : "OTransform" in bodyStyle ? "O" : "";
      if (vendorPrefix + "Perspective" in bodyStyle) {
        return "translate3d";
      } else if (vendorPrefix + "Transform" in bodyStyle) {
        return "translate";
      } else {
        return "margin";
      }
    };
    function clamp(n, min, max) {
      if (n < min)
        return min;
      if (n > max)
        return max;
      return n;
    }
    function toBarPerc(n) {
      return (-1 + n) * 100;
    }
    function barPositionCSS(n, speed, ease) {
      var barCSS;
      if (Settings.positionUsing === "translate3d") {
        barCSS = { transform: "translate3d(" + toBarPerc(n) + "%,0,0)" };
      } else if (Settings.positionUsing === "translate") {
        barCSS = { transform: "translate(" + toBarPerc(n) + "%,0)" };
      } else {
        barCSS = { "margin-left": toBarPerc(n) + "%" };
      }
      barCSS.transition = "all " + speed + "ms " + ease;
      return barCSS;
    }
    var queue = function() {
      var pending = [];
      function next() {
        var fn = pending.shift();
        if (fn) {
          fn(next);
        }
      }
      return function(fn) {
        pending.push(fn);
        if (pending.length == 1)
          next();
      };
    }();
    var css = function() {
      var cssPrefixes = ["Webkit", "O", "Moz", "ms"], cssProps = {};
      function camelCase(string) {
        return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
          return letter.toUpperCase();
        });
      }
      function getVendorProp(name) {
        var style = document.body.style;
        if (name in style)
          return name;
        var i = cssPrefixes.length, capName = name.charAt(0).toUpperCase() + name.slice(1), vendorName;
        while (i--) {
          vendorName = cssPrefixes[i] + capName;
          if (vendorName in style)
            return vendorName;
        }
        return name;
      }
      function getStyleProp(name) {
        name = camelCase(name);
        return cssProps[name] || (cssProps[name] = getVendorProp(name));
      }
      function applyCss(element, prop, value) {
        prop = getStyleProp(prop);
        element.style[prop] = value;
      }
      return function(element, properties) {
        var args = arguments, prop, value;
        if (args.length == 2) {
          for (prop in properties) {
            value = properties[prop];
            if (value !== void 0 && properties.hasOwnProperty(prop))
              applyCss(element, prop, value);
          }
        } else {
          applyCss(element, args[1], args[2]);
        }
      };
    }();
    function hasClass(element, name) {
      var list = typeof element == "string" ? element : classList(element);
      return list.indexOf(" " + name + " ") >= 0;
    }
    function addClass(element, name) {
      var oldList = classList(element), newList = oldList + name;
      if (hasClass(oldList, name))
        return;
      element.className = newList.substring(1);
    }
    function removeClass(element, name) {
      var oldList = classList(element), newList;
      if (!hasClass(element, name))
        return;
      newList = oldList.replace(" " + name + " ", " ");
      element.className = newList.substring(1, newList.length - 1);
    }
    function classList(element) {
      return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
    }
    function removeElement(element) {
      element && element.parentNode && element.parentNode.removeChild(element);
    }
    return NProgress;
  });
})(nprogress$1);
var vars = "";
var nprogress = "";
const useNprogress = () => {
  vue.onMounted(() => {
    const router = vueRouter.useRouter();
    const loadedPages = new Set();
    loadedPages.add(router.currentRoute.value.path);
    nprogress$1.exports.configure({ showSpinner: false });
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress$1.exports.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress$1.exports.done();
    });
  });
};
var clientAppSetup1 = defineClientAppSetup(() => {
  useNprogress();
});
var clientAppSetup2 = defineClientAppSetup(() => {
  setupDarkMode();
  setupSidebarItems();
});
const clientAppSetups = [
  clientAppSetup0,
  clientAppSetup1,
  clientAppSetup2
];
const routeItems = [
  ["v-8daa1a0e", "/", { "title": "" }, ["/index.html", "/README.md"]],
  ["v-1ec69fb0", "/abc.html", { "title": "ABC" }, ["/abc", "/abc.md"]],
  ["v-2b30cdfd", "/demo.html", { "title": "\u5C1D\u9C9C\u521D\u59CB\u5316" }, ["/demo", "/demo.md"]],
  ["v-4e9cb81e", "/linux.html", { "title": "" }, ["/linux", "/linux.md"]],
  ["v-953546a4", "/test.html", { "title": "" }, ["/test", "/test.md"]],
  ["v-541e4bfd", "/%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E8%A1%A5%E5%85%A8.html", { "title": "" }, ["/\u5355\u5143\u6D4B\u8BD5\u8865\u5168.html", "/%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E8%A1%A5%E5%85%A8", "/\u5355\u5143\u6D4B\u8BD5\u8865\u5168.md", "/%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E8%A1%A5%E5%85%A8.md"]],
  ["v-4bc92a0e", "/%E5%8E%9F%E5%9E%8B%E9%93%BE.html", { "title": "\u539F\u578B\u94FE\u5B66\u4E60" }, ["/\u539F\u578B\u94FE.html", "/%E5%8E%9F%E5%9E%8B%E9%93%BE", "/\u539F\u578B\u94FE.md", "/%E5%8E%9F%E5%9E%8B%E9%93%BE.md"]],
  ["v-14f0db02", "/%E5%A6%82%E4%BD%95%E5%AF%BC%E5%87%BAexcel%E5%9C%A8nodejs%E4%B8%AD.html", { "title": "" }, ["/\u5982\u4F55\u5BFC\u51FAexcel\u5728nodejs\u4E2D.html", "/%E5%A6%82%E4%BD%95%E5%AF%BC%E5%87%BAexcel%E5%9C%A8nodejs%E4%B8%AD", "/\u5982\u4F55\u5BFC\u51FAexcel\u5728nodejs\u4E2D.md", "/%E5%A6%82%E4%BD%95%E5%AF%BC%E5%87%BAexcel%E5%9C%A8nodejs%E4%B8%AD.md"]],
  ["v-74458d05", "/css/", { "title": "" }, ["/css/index.html", "/css/README.md"]],
  ["v-f9aeb140", "/docker/Dockerfile&docker-compose.html", { "title": "Dockerfile&docker-compose" }, ["/docker/Dockerfile&docker-compose", "/docker/Dockerfile&docker-compose.md"]],
  ["v-51f86e14", "/docker/", { "title": "" }, ["/docker/index.html", "/docker/README.md"]],
  ["v-626facc6", "/docker/%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html", { "title": "Docker\u5E38\u7528\u547D\u4EE4\u4EE5\u53CA\u9009\u9879\u89E3\u91CA" }, ["/docker/\u5E38\u7528\u547D\u4EE4.html", "/docker/%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4", "/docker/\u5E38\u7528\u547D\u4EE4.md", "/docker/%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.md"]],
  ["v-9d4992e4", "/english/learn-nextjs-docs.html", { "title": "\u9605\u8BFBNext\u6587\u6863\uFF0C\u957F\u96BE\u53E5\u8BB0\u5F55" }, ["/english/learn-nextjs-docs", "/english/learn-nextjs-docs.md"]],
  ["v-e39dae2e", "/english/%E5%A6%82%E4%BD%95%E8%AE%B0%E5%8D%95%E8%AF%8D.html", { "title": "\u5982\u4F55\u8BB0\u5355\u8BCD" }, ["/english/\u5982\u4F55\u8BB0\u5355\u8BCD.html", "/english/%E5%A6%82%E4%BD%95%E8%AE%B0%E5%8D%95%E8%AF%8D", "/english/\u5982\u4F55\u8BB0\u5355\u8BCD.md", "/english/%E5%A6%82%E4%BD%95%E8%AE%B0%E5%8D%95%E8%AF%8D.md"]],
  ["v-9d62a912", "/idea/%E6%97%A0%E9%9A%9C%E7%A2%8D%E8%B0%83%E8%AF%95%E5%B7%A5%E5%85%B7.html", { "title": "" }, ["/idea/\u65E0\u969C\u788D\u8C03\u8BD5\u5DE5\u5177.html", "/idea/%E6%97%A0%E9%9A%9C%E7%A2%8D%E8%B0%83%E8%AF%95%E5%B7%A5%E5%85%B7", "/idea/\u65E0\u969C\u788D\u8C03\u8BD5\u5DE5\u5177.md", "/idea/%E6%97%A0%E9%9A%9C%E7%A2%8D%E8%B0%83%E8%AF%95%E5%B7%A5%E5%85%B7.md"]],
  ["v-7cd3a8f0", "/js/%E6%90%9E%E6%87%82%E5%8E%9F%E5%9E%8B%E9%93%BE.html", { "title": "" }, ["/js/\u641E\u61C2\u539F\u578B\u94FE.html", "/js/%E6%90%9E%E6%87%82%E5%8E%9F%E5%9E%8B%E9%93%BE", "/js/\u641E\u61C2\u539F\u578B\u94FE.md", "/js/%E6%90%9E%E6%87%82%E5%8E%9F%E5%9E%8B%E9%93%BE.md"]],
  ["v-14e44e30", "/lean/", { "title": "" }, ["/lean/index.html", "/lean/README.md"]],
  ["v-5ebef70d", "/lean/array_remove_duplicarution.html", { "title": "\u6570\u7EC4\u53BB\u91CD" }, ["/lean/array_remove_duplicarution", "/lean/array_remove_duplicarution.md"]],
  ["v-2f231e85", "/lean/operator.html", { "title": "" }, ["/lean/operator", "/lean/operator.md"]],
  ["v-14e62408", "/libs/", { "title": "\u5947\u5947\u602A\u602A\u7684\u5E93" }, ["/libs/index.html", "/libs/README.md"]],
  ["v-6b37858a", "/list/CI.html", { "title": "\u81EA\u52A8\u5316\u8865\u5168" }, ["/list/CI", "/list/CI.md"]],
  ["v-2ed1b03f", "/list/git.html", { "title": "GIT \u76F8\u5173\u63D0\u5347" }, ["/list/git", "/list/git.md"]],
  ["v-afc5cf42", "/list/md_example.html", { "title": "Markdown \u8BED\u6CD5\u53C2\u8003" }, ["/list/md_example", "/list/md_example.md"]],
  ["v-b39531ea", "/list/vue.html", { "title": "Vue \u76F8\u5173\u63D0\u5347" }, ["/list/vue", "/list/vue.md"]],
  ["v-eb072ff4", "/mysql/", { "title": "" }, ["/mysql/index.html", "/mysql/README.md"]],
  ["v-70ef9ad6", "/note-work/2019-12-02.html", { "title": "2019\u5E7412\u670802\u65E5 \u661F\u671F\u4E00" }, ["/note-work/2019-12-02", "/note-work/2019-12-02.md"]],
  ["v-6f6778ae", "/note-work/soft_log.html", { "title": "Soft Install Log" }, ["/note-work/soft_log", "/note-work/soft_log.md"]],
  ["v-2e9785c6", "/react/next.html", { "title": "Next.js" }, ["/react/next", "/react/next.md"]],
  ["v-a91e9eee", "/resume/", { "title": "\u767D\u4E91\u7426-web\u524D\u7AEF" }, ["/resume/index.html", "/resume/README.md"]],
  ["v-0e281e2a", "/resume/README_2019.html", { "title": "\u7B80\u5386" }, ["/resume/README_2019", "/resume/README_2019.md"]],
  ["v-59dadc84", "/resume/note.html", { "title": "" }, ["/resume/note", "/resume/note.md"]],
  ["v-520a66da", "/resume/patch.html", { "title": "" }, ["/resume/patch", "/resume/patch.md"]],
  ["v-446e95c9", "/think/2022-09-16.html", { "title": "" }, ["/think/2022-09-16", "/think/2022-09-16.md"]],
  ["v-d50ba494", "/think/", { "title": "" }, ["/think/index.html", "/think/README.md"]],
  ["v-2020b026", "/tools/proto-2-ts.html", { "title": "proto \u8F6Cts\u7C7B\u578B\u58F0\u660E" }, ["/tools/proto-2-ts", "/tools/proto-2-ts.md"]],
  ["v-671a8e04", "/vue/%E5%A5%87%E6%8A%80%E6%B7%AB%E5%B7%A7.html", { "title": "" }, ["/vue/\u5947\u6280\u6DEB\u5DE7.html", "/vue/%E5%A5%87%E6%8A%80%E6%B7%AB%E5%B7%A7", "/vue/\u5947\u6280\u6DEB\u5DE7.md", "/vue/%E5%A5%87%E6%8A%80%E6%B7%AB%E5%B7%A7.md"]],
  ["v-3706649a", "/404.html", { "title": "" }, ["/404"]]
];
const pagesRoutes = routeItems.reduce((result, [name, path, meta, redirects]) => {
  result.push({
    name,
    path,
    component: Vuepress,
    meta
  }, ...redirects.map((item) => ({
    path: item,
    redirect: path
  })));
  return result;
}, [
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress
  }
]);
const provideGlobalComputed = (app, router) => {
  const routeLocale = vue.computed(() => resolveRouteLocale(siteData.value.locales, router.currentRoute.value.path));
  const siteLocaleData = vue.computed(() => resolveSiteLocaleData(siteData.value, routeLocale.value));
  const pageFrontmatter = vue.computed(() => resolvePageFrontmatter(pageData.value));
  const pageHeadTitle = vue.computed(() => resolvePageHeadTitle(pageData.value, siteLocaleData.value));
  const pageHead = vue.computed(() => resolvePageHead(pageHeadTitle.value, pageFrontmatter.value, siteLocaleData.value));
  const pageLang = vue.computed(() => resolvePageLang(pageData.value));
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
};
const registerGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
const appCreator = vue.createSSRApp;
const historyCreator = vueRouter.createMemoryHistory;
const createVueApp = async () => {
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      setupUpdateHead();
      for (const clientAppSetup of clientAppSetups) {
        clientAppSetup();
      }
      return () => [
        vue.h(vueRouter.RouterView),
        ...clientAppRootComponents.map((comp) => vue.h(comp))
      ];
    }
  });
  const router = vueRouter.createRouter({
    history: historyCreator(removeEndingSlash(siteData.value.base)),
    routes: pagesRoutes,
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a;
    if (to.path !== from.path || from === vueRouter.START_LOCATION) {
      [pageData.value] = await Promise.all([
        resolvePageData(to.name),
        (_a = pagesComponents[to.name]) === null || _a === void 0 ? void 0 : _a.__asyncLoader()
      ]);
    }
  });
  provideGlobalComputed(app, router);
  registerGlobalComponents(app);
  for (const clientAppEnhance of clientAppEnhances) {
    await clientAppEnhance({ app, router, siteData });
  }
  app.use(router);
  return {
    app,
    router
  };
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$V = {};
function _sfc_ssrRender$B(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h2 id="\u524D\u7AEF4\u5E74\u521D\u7EA7\u642C\u7816\u6C11\u5DE5\u{1F9F1}" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF4\u5E74\u521D\u7EA7\u642C\u7816\u6C11\u5DE5\u{1F9F1}" aria-hidden="true">#</a> \u524D\u7AEF4\u5E74\u521D\u7EA7\u642C\u7816\u6C11\u5DE5\u{1F9F1}</h2><ul><li>\u5E38\u642C<code>Vue</code>\uFF0C<code>React</code>\u724C\u7684\u6C34\u6CE5\u{1F477}\u200D\u2642\uFE0F\uFF0C\u591A\u662FPC\u6837\u7684\u697C\u623F\uFF0C\u5076\u5C14\u4F1A\u53BB\u641E\u641E<code>\u5C0F\u7A0B\u5E8F</code>\u7CBE\u88C5\u516C\u5BD3</li><li>\u8DDF\u7740\u9AD8\u7EA7\u5DE5\u81EA\u7814\u8FC7<a href="https://tdesign.tencent.com/" target="_blank" rel="noopener noreferrer">Vue\u7EC4\u4EF6\u74F7\u7816\u{1F9E9}`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><code>Nodejs</code> \u670D\u52A1\u8FD9\u6837\u7684\u786C\u6D3B\u4E5F\u5E94\u4ED8\u5F97\u6765</li><li>\u901A\u8BFB\u5404\u79CD\u8BED\u8A00\uFF08\u4E2D\u3001\u82F1\u3001\u65B9\u8A00\uFF09\u8BF4\u660E\u4E66\uFF0C\u6709<code>\u6587\u6863\u{1F4C3}</code>\u5565\u90FD\u597D\u529E\u{1F90F}</li><li>\u4F1A\u590D\u5236\u7C98\u8D34\u3001\u4F1A\u67E5Google\u{1F64B}\u200D\u2642\uFE0F</li><li>\u6700\u8FD1\u5728\u5C1D\u8BD5\u81EA\u5DF1\u6709\u8F93\u51FA\u7684\u5B66\u4E60\uFF0C\u603B\u7ED3\u6700\u6027\u4EF7\u6BD4\u7684\u6C34\u6CE5\u6DF7\u5408\u6BD4\u4F8B\u548C\u62B9\u5899\u624B\u827A</li></ul><h2 id="\u671F\u5F85\u62C9\u7816\u5C0F\u5DE5\u673A\u4F1A\u{1F92B}" tabindex="-1"><a class="header-anchor" href="#\u671F\u5F85\u62C9\u7816\u5C0F\u5DE5\u673A\u4F1A\u{1F92B}" aria-hidden="true">#</a> \u671F\u5F85\u62C9\u7816\u5C0F\u5DE5\u673A\u4F1A\u{1F92B}</h2><ul><li>base\u{1F30F}\uFF1A<code>\u6DF1\u5733</code> \u4E2D\u5EFA\u7B2C12138\u5DE5\u7A0B\u961F\u8FDB\u95E8\u5DE6\u624B\u8FB9\u9760\u5899\u4E2D\u94FA</li><li>email\u{1F4E9}\uFF1Abyq1213@qq.com</li></ul><!--]-->`);
}
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/index.html.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
var index_html$m = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["ssrRender", _sfc_ssrRender$B]]);
var index_html$n = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$m
});
const _sfc_main$U = {};
function _sfc_ssrRender$A(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/abc.html.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
var abc_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["ssrRender", _sfc_ssrRender$A]]);
var abc_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": abc_html$1
});
const _sfc_main$T = {};
function _sfc_ssrRender$z(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  const _component_Badge = vue.resolveComponent("Badge");
  _push(`<!--[--><h2 id="\u6D4B\u8BD5\u94FE\u63A5-\u652F\u6301\u76F8\u5BF9\u8DEF\u5F84-\u539F\u7406\u4E0A\u4F7F\u7528\u4E86routerlink" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u94FE\u63A5-\u652F\u6301\u76F8\u5BF9\u8DEF\u5F84-\u539F\u7406\u4E0A\u4F7F\u7528\u4E86routerlink" aria-hidden="true">#</a> \u6D4B\u8BD5\u94FE\u63A5,\u652F\u6301\u76F8\u5BF9\u8DEF\u5F84,\u539F\u7406\u4E0A\u4F7F\u7528\u4E86RouterLink</h2><p>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/resume/" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u7B80\u5386`);
      } else {
        return [
          vue.createTextVNode("\u7B80\u5386")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><h2 id="\u6D4B\u8BD5\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u76EE\u5F55" aria-hidden="true">#</a> \u6D4B\u8BD5\u76EE\u5F55</h2><h3 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h3><nav class="table-of-contents"><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "#\u6D4B\u8BD5\u94FE\u63A5-\u652F\u6301\u76F8\u5BF9\u8DEF\u5F84-\u539F\u7406\u4E0A\u4F7F\u7528\u4E86routerlink" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u6D4B\u8BD5\u94FE\u63A5,\u652F\u6301\u76F8\u5BF9\u8DEF\u5F84,\u539F\u7406\u4E0A\u4F7F\u7528\u4E86RouterLink`);
      } else {
        return [
          vue.createTextVNode("\u6D4B\u8BD5\u94FE\u63A5,\u652F\u6301\u76F8\u5BF9\u8DEF\u5F84,\u539F\u7406\u4E0A\u4F7F\u7528\u4E86RouterLink")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "#\u6D4B\u8BD5\u76EE\u5F55" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u6D4B\u8BD5\u76EE\u5F55`);
      } else {
        return [
          vue.createTextVNode("\u6D4B\u8BD5\u76EE\u5F55")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "#\u6D4B\u8BD5" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u6D4B\u8BD5`);
      } else {
        return [
          vue.createTextVNode("\u6D4B\u8BD5")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "#\u4EE3\u7801\u5C40\u90E8\u9AD8\u4EAE" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u4EE3\u7801\u5C40\u90E8\u9AD8\u4EAE`);
      } else {
        return [
          vue.createTextVNode("\u4EE3\u7801\u5C40\u90E8\u9AD8\u4EAE")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "#\u5BFC\u5165\u4EE3\u7801\u5757" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u5BFC\u5165\u4EE3\u7801\u5757`);
      } else {
        return [
          vue.createTextVNode("\u5BFC\u5165\u4EE3\u7801\u5757")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "#vue-\u8BED\u6CD5" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`vue \u8BED\u6CD5`);
      } else {
        return [
          vue.createTextVNode("vue \u8BED\u6CD5")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav><h2 id="\u4EE3\u7801\u5C40\u90E8\u9AD8\u4EAE" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5C40\u90E8\u9AD8\u4EAE" aria-hidden="true">#</a> \u4EE3\u7801\u5C40\u90E8\u9AD8\u4EAE</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> UserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/cli&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> config<span class="token operator">:</span> UserConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&#39;\u4F60\u597D\uFF0C VuePress&#39;</span><span class="token punctuation">,</span>

  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
    logo<span class="token operator">:</span> <span class="token string">&#39;https://vuejs.org/images/logo.png&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u5BFC\u5165\u4EE3\u7801\u5757" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165\u4EE3\u7801\u5757" aria-hidden="true">#</a> \u5BFC\u5165\u4EE3\u7801\u5757</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">13</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="vue-\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#vue-\u8BED\u6CD5" aria-hidden="true">#</a> vue \u8BED\u6CD5</h2><input> \u8FD9\u662F\u9ED8\u8BA4\u4E3B\u9898\u5185\u7F6E\u7684 \``);
  _push(serverRenderer.ssrRenderComponent(_component_Badge, null, null, _parent));
  _push(`\` \u7EC4\u4EF6 `);
  _push(serverRenderer.ssrRenderComponent(_component_Badge, { text: "\u6F14\u793A" }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/demo.html.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
var demo_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["ssrRender", _sfc_ssrRender$z]]);
var demo_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": demo_html$1
});
const _sfc_main$S = {};
function _sfc_ssrRender$y(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h3 id="\u538B\u7F29\u89E3\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#\u538B\u7F29\u89E3\u538B\u7F29" aria-hidden="true">#</a> \u538B\u7F29\u89E3\u538B\u7F29</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u538B\u7F29</span>
<span class="token function">zip</span> -r <span class="token number">1</span>.zip file_dir

<span class="token comment">#-r \u9012\u5F52</span>

<span class="token comment"># \u89E3\u538B</span>
<span class="token function">unzip</span> <span class="token number">1</span>.zip
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u67E5\u770B\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u7AEF\u53E3" aria-hidden="true">#</a> \u67E5\u770B\u7AEF\u53E3</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">lsof</span> -i:8080
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u67E5\u770B\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6587\u4EF6" aria-hidden="true">#</a> \u67E5\u770B\u6587\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>head -n 10 /root/1.txt
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`);
}
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/linux.html.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
var linux_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["ssrRender", _sfc_ssrRender$y]]);
var linux_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": linux_html$1
});
const _sfc_main$R = {};
function _sfc_ssrRender$x(_ctx, _push, _parent, _attrs) {
  _push(`<p${serverRenderer.ssrRenderAttrs(_attrs)}>\u5F20 \u68A6 \u6770 \u5F20 \u6C42\u804C\u5C97\u4F4D\uFF1AWEB\u524D\u7AEF/\u5168\u6808\u5F00\u53D1\u5DE5\u7A0B\u5E08 \u6C42 \u6DF1\u5733 \u4E00\u4E2A\u6708\u5185\u5230\u5C97 \uE609 \u5E74 \u9F84\uFF1A 25\u5C81 \uE625 \u7C4D \u8D2F\uFF1A \u6CB3\u5357\u7701\u7126\u4F5C\u5E02 \uE628 \u653F\u6CBB\u9762\u8C8C\uFF1A \u4E2D\u5171\u515A\u5458 \uE616 \u5DE5\u4F5C\u5E74\u9650\uFF1A 4\u5E74\u7ECF\u9A8C \uE63A \u7535 \u8BDD\uFF1A 13929709806 \uE634 \u90AE \u7BB1\uFF1A 2368143744@qq.com \uE635 \u5B66 \u6821\uFF1A \u5E7F\u4E1C\u77F3\u6CB9\u5316\u5DE5\u5B66\u9662(\u672C\u79D1) \uE642 \u4E13 \u4E1A\uFF1A \u8BA1\u7B97\u673A\u79D1\u5B66\u4E0E\u6280\u672F \uE642 \u5EA7\u53F3\u94ED\uFF1A \u79CD\u4E00\u68F5\u6811\u6700\u597D\u7684\u65F6\u95F4\u662F\u5341\u5E74\u524D\uFF0C\u5176\u6B21\u662F\u73B0\u5728\uFF01 \u2022 \u719F\u6089ES6+\u6807\u51C6\uFF0C\u4F7F\u7528typescript\u5F00\u53D1\u9879\u76EE\uFF0C\u5BF9\u7C7B\u578B\u505A\u4E25\u683C\u7EA6\u675F\uFF1B \u2022 \u719F\u7EC3\u638C\u63E1vue2\u3001vue3\u6846\u67B6\u5E94\u7528\u53CA\u6838\u5FC3\u539F\u7406\uFF1B \u2022 \u719F\u7EC3react,react-router,redux,hooks,antd\u7B49\u76F8\u5173\u6280\u672F\u6808; \u2022 \u719F\u7EC3\u4F7F\u7528git\u4ED3\u5E93\u7BA1\u7406\u4EE3\u7801\uFF1B \u2022 \u719F\u7EC3\u4F7F\u7528webpack\u3001gulp\u5B8C\u6210\u7EAFjs\u9879\u76EE\u538B\u7F29\u3001\u6253\u5305\u3001\u8F6C\u8BD1\u7B49\u57FA\u7840\u64CD\u4F5C\uFF1B \u2022 \u719F\u6089\u7F51\u7EDC\u534F\u8BAE\uFF0C\u638C\u63E1HTTP\u548CTCP/IP\u57FA\u672C\u5DE5\u4F5C\u539F\u7406\uFF0C\u6709\u57FA\u7840\u7684\u5B89\u5168\u9632\u8303\u8BA4\u8BC6\uFF1B \u2022 \u719F\u7EC3\u524D\u7AEF\u6027\u80FD\u8C03\u4F18\uFF0C\u4EE3\u7801\u89C4\u8303\u53CA\u5DE5\u7A0B\u5316\u76F8\u5173\u6280\u672F; \u2022 \u5177\u5907node.js\u6846\u67B6express\u3001egg.js\u5F00\u53D1\u524D\u540E\u7AEF\u4E2D\u53F0\u9879\u76EE\u7BA1\u7406\u63A5\u53E3\uFF0C\u4E86\u89E3nodejs\u57FA\u7840\u77E5\u8BC6\uFF1B \u2022 \u5177\u5907nginx\u3001jenkins\u3001docker\u524D\u7AEF\u81EA\u52A8\u5316\u90E8\u7F72\u7ECF\u9A8C; \u2022 \u5177\u5907\u826F\u597D\u7684\u903B\u8F91\u7406\u89E3\u80FD\u529B\u548C\u5B66\u4E60\u80FD\u529B\uFF0C\u5FEB\u901F\u638C\u63E1\u6846\u67B6\u7684\u4F7F\u7528\u65B9\u5F0F\u53CA\u539F\u7406\uFF1B \u2022 \u5177\u5907\u826F\u597D\u7684\u8BA1\u7B97\u673A\u548C\u7B97\u6CD5\u57FA\u7840\uFF1B \uE657 \u6280\u80FD\u7279\u957F \u62802019-08 ~ \u81F3\u4ECA 2 \u6DF1\u5733\u6DA6\u8FC5\u5546\u52A1\u6709\u9650\u516C\u53F8 \u6DF1 WEB\u5F00\u53D1\u5DE5\u7A0B\u5E08 W 2018-06 ~ 2019-08 2 \u6DF1\u5733\u6587\u601D\u6D77\u8F89\u6709\u9650\u516C\u53F8 \u6DF1 WEB\u5F00\u53D1\u5DE5\u7A0B\u5E08 W \uE656 \u5DE5\u4F5C\u7ECF\u9A8C \u5DE52021-09 ~ \u81F3\u4ECA 2 \u5C0F\u79D8\u7EC4\u4EF6\u753B\u5E03\u7BA1\u7406\u7AEF\uFF08vue3+react\uFF09 \u5C0F \u642D\u5EFA+\u5F00\u53D1 \u642D \u9879\u76EE\u5185\u5BB9\uFF1A \u2022 \u80CC\u666F\uFF1A\u7406\u8D22\u901A\u5BA2\u670D\u201C\u5C0F\u79D8\u201D\u673A\u5668\u4EBA\u4F5C\u4E3A\u4E00\u4E2A\u4E0E\u7528\u6237\u4E92\u52A8\u7684\u5165\u53E3\uFF0C\u5F53\u524D\u7684\u529F\u80FD\u6BD4\u8F83\u7B80\u5355\uFF0C\u901A\u5E38\u5BF9\u4E00\u4E9B\u6536\u96C6\u540E\u7684\u5E38 \u89C1\u95EE\u9898\u8FDB\u884C\u201C\u4E00\u95EE\u4E00\u7B54\u201D\u7684\u5E94\u7B54\u6A21\u5F0F\uFF0C\u4EA4\u4E92\u5C11\uFF0C\u5185\u5BB9\u5C11\uFF0C\u4E00\u822C\u6302\u8F7D\u5728\u57FA\u91D1\u63A8\u8350\u9875\u3002\u6682\u65E0\u6CD5\u5B8C\u6210\u8FC7\u957F\u7684\u590D\u6742\u7684\u4E1A \u52A1\u63A8\u8350\u53CA\u652F\u6301\u8FD0\u8425\u65B0\u4E1A\u52A1\u7684\u63A8\u5E7F\u9700\u8981\uFF0C\u4E3A\u62D3\u5C55\u5C0F\u79D8\u7684\u4EA4\u4E92\u529F\u80FD\uFF0C\u65B9\u4FBF\u8FD0\u8425\u7BA1\u7406\u914D\u7F6E\u65B0\u8FD0\u8425\u4E1A\u52A1\uFF0C\u6545\u542F\u52A8\u8BE5\u9879\u76EE \u8FDB\u884C\u5C0F\u79D8\u4EA4\u4E92\u5267\u672C\u53CA\u5B9A\u70B9\u4F4D\u7F6E\u6295\u653E\u7684\u4F5C\u7528\u3002 \u2022 \u529F\u80FD\uFF1A\u7BA1\u7406\u7AEF\u9996\u5148\u8FDB\u884C\u5C0F\u79D8\u5267\u672C\u521B\u5EFA\u7BA1\u7406\uFF0C\u5176\u4E2D\u53EF\u89C6\u5316\u7684\u5267\u672C\u6D41\u7A0B\u3001\u5267\u672C\u8282\u70B9\uFF08\u6B65\u9AA4\uFF09\u4EA4\u4E92\u7EC4\u4EF6\u914D\u7F6E\u7531vue\u505A \u4E3B\u9875\u9762\u53CA\u5267\u672C\u7EC4\u4EF6\u5F15\u5165\u62D3\u5C55\u5F00\u53D1\u3001react\u505A\u53EF\u89C6\u5316\u6D41\u7A0B\u914D\u7F6E\uFF1B\u5176\u6B21\u5BF9\u5C0F\u79D8\u4E92\u52A8\u5267\u672C\u6295\u653E\u9875\u9762\u3001\u7B56\u7565\u3001\u4F18\u5148\u7EA7\u3001\u89C4 \u5219\u3001\u5BA2\u7FA4\uFF08\u7528\u6237\u4EE3\u7801\u5305\uFF09\u3001\u65F6\u95F4\u3001\u7070\u5EA6\u5206\u522B\u8FDB\u884C\u914D\u7F6E\u7BA1\u7406\uFF0C\u540C\u65F6\u7B26\u5408\u5408\u89C4\u8981\u6C42\u8FDB\u884C\u817E\u5B89\u3001\u817E\u5BCC\u591A\u57DF\u540D\u4E3B\u4F53\u7684\u90E8 \u7F72\u5F00\u53D1\u3002\u60F3\u8981\u5B9E\u73B0\u753B\u5E03\u589E\u52A0\u5267\u4EA4\u4E92\u672C\u8282\u70B9\u53CA\u5173\u8054\u5173\u7CFB\u7BA1\u7406\u573A\u666F\u7EC4\u4EF6\u7684\u8854\u63A5\uFF0C\u901A\u8FC7\u89C4\u5219\u8868\u8FBE\u5F0F\u662F\u5426\u6EE1\u8DB3\u6761\u4EF6\u51B3\u5B9A \u662F\u5426\u5207\u5165\u4E0B\u4E00\u4E2A\u573A\u666F\uFF0C\u901A\u8FC7\u7075\u6D3B\u52FE\u9009\u5F53\u524D\u5267\u672C\u5305\u542B\u7EC4\u4EF6\u53CA\u6761\u4EF6\u7684\u6811\u7ED3\u6784\u51B3\u5B9A\u573A\u666F\u7EC4\u4EF6\u662F\u5426\u88AB\u5E94\u7528\uFF0C\u901A\u8FC7\u5168\u5C40\u3001 \u5C40\u90E8\u53D8\u91CF\u7BA1\u7406\u52A8\u6001\u7BA1\u7406\u8868\u8FBE\u5F0F\u5224\u65AD\u53CA\u7EC4\u4EF6\u901A\u7528\u7B26\u66FF\u6362\uFF0C\u6839\u636E\u6295\u653E\u89C4\u5219\u8FDB\u884C\u9009\u62E9\u6027\u6295\u653E\u3002 \u4E3B\u8981\u804C\u8D23\uFF1A \u2022 \u53C2\u4E0E\u7BA1\u7406\u7AEF\u529F\u80FD\u8BC4\u5BA1\u4F1A\uFF0C\u6839\u636E\u4E1A\u52A1\u5B9E\u73B0\u76EE\u6807\u533A\u5206\u57FA\u7840\u3001\u8FED\u4EE3\u529F\u80FD\uFF0C\u89C4\u5212\u5206\u671F\u5F00\u53D1\u4EFB\u52A1\u53CA\u5F00\u53D1\u5468\u671F\uFF1B \uE616 \u9879\u76EE\u7ECF\u9A8C \u9879 2021-03 ~ 2021-09 2 \u7406\u8D22\u901A\u7EC4\u4EF6\u7BA1\u7406\u7AEF\uFF08vue2 + egg\uFF09 \u7406 \u642D\u5EFA+\u5F00\u53D1 \u642D \u2022 \u5236\u5B9A\u8BE6\u7EC6\u7684\u5F00\u53D1\u7EC6\u8282\uFF0C\u8BC4\u5BA1\u6280\u672F\u5B9E\u73B0\u7EC6\u8282\u53CA\u5B9E\u73B0\u5DE5\u5177\u6574\u7406\u5BF9\u6BD4\u6587\u6863\uFF0C\u6574\u7406\u9700\u6C42\u7591\u96BE\u70B9\uFF0C\u5728\u9879\u76EE\u5F00\u59CB\u5F00\u53D1\u4E4B\u521D\u66B4 \u9732\u4E89\u8BAE\u5927\u7684\u95EE\u9898\u8FDB\u884C\u5347\u7EA7\u8BA8\u8BBA\u6572\u5B9A\uFF0C\u5982\u753B\u5E03\u9009\u5B9A\u6846\u67B6\uFF1B \u2022 \u5E2E\u52A9\u4EA7\u54C1\u68B3\u7406\u4E1A\u52A1\u903B\u8F91\u3001\u6C89\u6DC0\u4E1A\u52A1\u4EA4\u4E92\u56FE\uFF0C\u4E0E\u540E\u53F0\u6C9F\u901A\u63A5\u53E3\u529F\u80FD\u3001\u5B8C\u6210\u63A5\u53E3\u8BBE\u8BA1\u3001\u6821\u9A8C\u63A5\u53E3\u6587\u6863\u7684\u5B8C\u6574\u53CA\u89C4\u8303 \u6027\uFF1B \u2022 \u4F7F\u7528vue\u6280\u672F\u6808\u5F00\u53D1\u7BA1\u7406\u7AEF\u4E3B\u4F53\u529F\u80FD\uFF0C\u5F15\u5165\u7406\u8D22\u901A\u7EC4\u4EF6\uFF0C\u590D\u7528\u7EC4\u4EF6\u7BA1\u7406\u529F\u80FD\uFF1B \u2022 \u4F7F\u7528react\u6280\u672F\u6808\u5F00\u53D1\u753B\u5E03\u529F\u80FD\uFF0C\u8FDB\u884C\u4EA4\u4E92\u5267\u672C\u7684\u6D41\u7A0B\u914D\u7F6E\u53CA\u6B65\u9AA4\u8282\u70B9\u57FA\u672C\u7EC4\u4EF6\u53CA\u89C4\u5219\u914D\u7F6E\uFF0C\u4F7F\u7528iframe\u7684\u5FAE \u524D\u7AEF\u65B9\u5F0F\u5F15\u5165\u9879\u76EE\u4E3B\u4F53\uFF0Cwindow.postMessage\u8FDB\u884C\u901A\u4FE1\uFF1B \u2022 \u4F7F\u7528xboss\u4E00\u4E2A\u62D6\u62FD\u914D\u7F6E\u9875\u9762\u7ED3\u6784\u3001\u4E8B\u4EF6\u638C\u63E1\u6D41\u7A0B\u3001\u63A5\u53E3\u53C2\u4E0E\u63A5\u53E3\u3001\u6761\u4EF6\u5B8C\u6210\u5224\u65AD\u3001\u683C\u5F0F\u6620\u5C04\u663E\u793A\u4F4D\u7F6E\u7684\u7BA1\u7406 \u7AEF\uFF0C\u5F00\u53D1\u57FA\u7840\u589E\u5220\u6539\u67E5\u9875\u9762\uFF0C\u7B80\u5316\u524D\u7AEF\u4EE3\u7801\u5F00\u53D1\u91CF\uFF0C\u5BF9\u4E8E\u5267\u672C\u8BE6\u60C5\u914D\u7F6E\u91C7\u7528\u4EE3\u7801\u5305\u7684\u65B9\u5F0F\u5F15\u5165\uFF1B \u2022 \u4F7F\u7528egg\u6846\u67B6\u5F00\u53D1\u914D\u5408xboss\u7CFB\u7EDF\u7684\u901A\u7528\u4E2D\u53F0\u7CFB\u7EDF\uFF0C\u540C\u540E\u53F0\u8FDB\u884C\u63A5\u53E3\u5BF9\u63A5\uFF0C\u5B9E\u73B0xboss\u914D\u7F6E\u7AEF\u53CA\u540E\u53F0\u4E4B\u95F4\u7684\u6570\u636E \u8F6C\u5316\u5668\u3001\u8BF7\u6C42\u62E6\u622A\u5668\u3001\u63A5\u5165\u6743\u9650auth\u7BA1\u7406\u7B49\u529F\u80FD\uFF0C\u4FDD\u8BC1xboss\u914D\u7F6E\u7AEF\u53CA\u706B\u540E\u53F0\u4E13\u6CE8\u4E8E\u81EA\u8EAB\u5F00\u53D1\u3001\u7B80\u5316\u7BA1\u7406\u7AEF\u529F \u80FD\u53CA\u540E\u53F0\u63A5\u53E3\u5E42\u7B49\u6027\u8BBE\u8BA1\uFF1B \u2022 \u8D1F\u8D23\u7BA1\u7406\u7AEF\u7684\u5F00\u53D1\u3001\u63A8\u8FDB\u3001\u6C47\u62A5\u603B\u7ED3\u5DE5\u4F5C\uFF0C\u53CA\u65F6\u53CD\u9988\u963B\u585E\u95EE\u9898\u70B9\u3001\u5347\u7EA7\u95EE\u9898\u7C7B\u578B\u6307\u5B9A\u65B0\u7684\u65B9\u6848\uFF1B \u2022 \u6C89\u6DC0xboss\u4F7F\u7528\u6587\u6863\u7EC6\u8282\u53CA\u540C\u540E\u53F0\u5BF9\u63A5\u517C\u5BB9\u7684\u914D\u7F6E\u53C2\u6570\uFF0C\u5B8C\u5584\u5E76\u6C89\u6DC0\u4EA7\u54C1\u4E1A\u52A1\u903B\u8F91\u56FE\uFF0C\u4EE5\u4FBF\u540E\u7EED\u5F00\u53D1\u53EF\u4EE5\u5FEB\u901F \u63A5\u5165\uFF1B \u2022 \u4F7F\u7528orange.ci \u81EA\u52A8\u5316\u5DE5\u5177\u90E8\u7F72\u9879\u76EE\u6D4B\u8BD5\u73AF\u5883\u53CA\u6B63\u5F0F\u73AF\u5883\u4E0A\u7EBF\uFF0C\u4F7F\u7528pm2\u7BA1\u7406node\u670D\u52A1\u3002 \u5DE5\u4F5C\u4E1A\u7EE9\uFF1A \u2022 \u7D27\u6025\u4EFB\u52A1\u5F00\u53D1\u4E0B\uFF0C\u4E0D\u5F71\u54CD\u9879\u76EE\u5DE5\u671F\u8FDB\u5C55\u987A\u5229\u5B8C\u6210\u6C9F\u901A\u3002 \u2022 \u5F15\u5165vue3\u3001react\u7BA1\u7406\u7AEF\u65B0\u6280\u672F\uFF0C\u62D3\u5C55\u7BA1\u7406\u7AEF\u7684\u6280\u672F\u6811\uFF0C\u8FDB\u884C\u7B80\u5355\u6280\u672F\u5206\u4EAB\uFF1B \u2022 \u6C89\u6DC0xboss\u4F7F\u7528\u6587\u6863\u7EC6\u8282\u53CA\u540C\u540E\u53F0\u5BF9\u63A5\u517C\u5BB9\u7684\u914D\u7F6E\u53C2\u6570\uFF0C\u5B8C\u5584\u5E76\u6C89\u6DC0\u4EA7\u54C1\u4E1A\u52A1\u903B\u8F91\u56FE\uFF0C\u4F7F\u4EA7\u54C1\u5E94\u7528\u8005\u3001\u5F00\u53D1\u8005 \u53CA\u6709\u5174\u8DA3\u4E86\u89E3\u8005\u53EF\u6E05\u6670\u4E86\u89E3\u60C5\u51B5\uFF1B \u9879\u76EE\u5185\u5BB9\uFF1A \u2022 \u80CC\u666F\uFF1A\u7406\u8D22\u901A\u79FB\u52A8\u7AEF\u4E4B\u524D\u4E3Ah5\u9875\u9762\u5F00\u53D1\uFF0Cvue\u79FB\u52A8\u7AEF\u7684\u6846\u67B6\u51FA\u73B0\u4E4B\u540E\u5BF9\u7CFB\u7EDF\u4EE3\u7801\u7684\u91CD\u7528\u3001\u590D\u7528\u6709\u5F88\u5927\u63D0\u5347\uFF0C\u9010 \u6B65\u8FC1\u79FB\u81F3vue\u6846\u67B6\u5F00\u53D1\uFF1B\u6A21\u5757\u7684\u590D\u7528\u4E4B\u524D\u5E76\u672A\u6709\u7CFB\u7EDF\u7684\u6587\u6863\u8FDB\u884C\u7BA1\u63A7\u548C\u5F15\u5BFC\uFF0C\u591A\u9760\u81EA\u89C9\u7EF4\u62A4\u4E2A\u4EBA\u5F00\u53D1\u6587\u6863\uFF1B\u6280 \u672F\u8FC1\u79FB\u7684\u540C\u65F6\u8FDB\u884C\u6536\u5F55\u7BA1\u7406\uFF0C\u9700\u8981\u4E00\u4E2A\u7EC4\u4EF6\u7BA1\u7406\u7AEF\u8FDB\u884C\u7BA1\u7406\uFF1B \u2022 \u529F\u80FD\uFF1A\u8FDB\u884C\u7EC4\u4EF6\u7684\u57FA\u7840\u4FE1\u606F\u7BA1\u7406\uFF0C\u5982\uFF1A\u7EC4\u4EF6\u540D\u79F0\u3001\u56FE\u7247\u6837\u4F8B\u3001\u4E3E\u4F8B\u5E94\u7528\u4F4D\u7F6E\u3001\u5F00\u53D1\u7EF4\u62A4\u4EBA\u5458\u3001\u7248\u672C\u8BB0\u5F55\u3001\u914D\u7F6E \u6570\u636E\u6837\u4F8B\u3001\u57FA\u672C\u5E94\u7528\u914D\u7F6E\u7B49\uFF1B\u5E76\u914D\u5408\u7EDF\u4E00\u57FA\u7840\u7684form\u8868\u5355\u6E32\u67D3\u65B9\u5F0F\uFF0C\u7EDF\u4E00\u7BA1\u7406\u7B80\u5355\u7684form\u8868\u5355\u7EC4\u4EF6\u8FDB\u884C\u7EC4\u4EF6 \u914D\u7F6E\u7684json\u683C\u5F0F\u7B80\u5316\u7BA1\u7406\u914D\u7F6E\u3002 \u4E3B\u8981\u804C\u8D23\uFF1A \u2022 \u53C2\u4E0E\u9700\u6C42\u8BC4\u4F30\u53CA\u5F00\u53D1\u89C4\u5212\u4F1A\u8BAE\uFF0C\u8BC4\u4F30\u5F00\u53D1\u95EE\u9898\u5E76\u63D0\u524D\u53CD\u9988\u6572\u5B9A\u65B9\u6848\uFF0C\u6C47\u603B\u6C47\u62A5\u8FDB\u5EA6\uFF0C\u4FDD\u8BC1\u9879\u76EE\u7684\u987A\u5229\u63A8\u8FDB\uFF1B \u2022 \u5F00\u53D1\u901A\u7528form-render\u4E00\u7CFB\u5217\u7B80\u5316\u7EC4\u4EF6\u5BF9\u5F15\u5165\u7684\u7EC4\u4EF6json\u8FDB\u884C\u7EC4\u4EF6\u6E32\u67D3\u53CA\u4FEE\u6539\u540C\u6B65\u5DE5\u4F5C\uFF0C\u7B80\u5316\u7EC4\u4EF7\u5F00\u53D1\u6E32\u67D3\u4EE3 \u4EF7\uFF1B \u2022 \u5F00\u53D1\u7EC4\u4EF6\u7BA1\u7406\u7AEF\uFF0C\u7EC4\u4EF6\u57FA\u7840\u4FE1\u606F\u8FDB\u884C\u7BA1\u7406\uFF0C\u901A\u8FC7egg \u4E2D\u53F0\u4E0E\u540E\u53F0\u8FDB\u884C\u5BF9\u63A5\uFF1B \u2022 \u8FC1\u79FB\u6D3B\u52A8\u7EC4\u4EF6\u53CA\u6D3B\u52A8\u6A21\u677F\u90E8\u5206\u7EC4\u4EF6\uFF0C\u5982\u5361\u5238\u7EC4\u4EF6\u3001\u5956\u54C1\u9886\u53D6\u7EC4\u4EF6\u3001\u7EA2\u5305\u9886\u53D6\u6A21\u677F\uFF1B \u2022 \u914D\u7F6E orange.ci \u81EA\u52A8\u5316\u90E8\u7F72\u811A\u672C\uFF0C\u90E8\u7F72\u6D4B\u8BD5\u3001\u6B63\u5F0F\u53CC\u73AF\u5883\u7BA1\u7406\u7AEF\u670D\u52A1\uFF1B \u5DE5\u4F5C\u4E1A\u7EE9\uFF1A \u2022 \u5B8C\u6210\u6D3B\u52A8\u7EC4\u4EF6\u987A\u5229\u8FC1\u79FB\uFF1B \u2022 \u987A\u5229\u5B8C\u6210\u7EC4\u4EF6\u7BA1\u7406\u7AEF\u7684\u642D\u5EFA\u7EF4\u62A4\u90E8\u7F72\u5DE5\u4F5C\uFF0C\u4E3A\u540E\u7EED\u7EC4\u4EF6\u8FC1\u79FB\u7684\u7EDF\u8BA1\u7BA1\u7406\u6253\u597D\u524D\u7F6E\u57FA\u7840\uFF0C\u987A\u5229\u63A8\u8FDB\u7EC4\u4EF6\u7BA1\u7406\u7AEF\u7684 \u4E0A\u7EBF\uFF0C\u4F7F\u5F97\u7EC4\u4EF6\u8FC1\u79FB\u8FDB\u5EA6\u987A\u5229\u53EF\u89C6\u5316\u7BA1\u7406\uFF0C\u5F97\u5230\u4E00\u81F4\u597D\u8BC4\uFF1B \u2022 \u5B66\u4F1A\u5E76\u719F\u7EC3\u638C\u63E1 orange.ci \u81EA\u52A8\u5316\u90E8\u7F72\u5DE5\u5177\u7684\u914D\u7F6E\u7BA1\u7406\uFF0C\u53EF\u81EA\u4E3B\u8FDB\u884C\u9879\u76EE\u5F00\u53D1\u3001CI/CD\u90E8\u7F72\u4E0A\u7EBF\u3001\u9A8C\u8BC1\u529F\u80FD\u6574 \u4E2A\u524D\u7AEF\u7BA1\u7406\u5168\u8FC7\u7A0B\uFF1B 2020-08 ~ 2021-03 2 \u6570\u5B57\u5316\u8FD0\u8425\u7BA1\u7406\u7CFB\u7EDF\uFF08egg+vue2+mysql\uFF09 \u6570 \u642D\u5EFA+\u5F00\u53D1 \u642D 2019-08 ~ 2020-08 2 \u6D3B\u52A8\u7BA1\u7406\u7CFB\u7EDF\uFF08php+vue2+mysql\uFF09 \u6D3B \u5F00\u53D1+\u7EF4\u62A4 \u5F00 \u9879\u76EE\u7B80\u4ECB\uFF1A \u2022 \u80CC\u666F\uFF1A\u7406\u8D22\u901A\u5E38\u4EE5\u9875\u9762\u4E3A\u7EF4\u5EA6\u8FDB\u884C\u5F00\u53D1\uFF0C\u9996\u9875\u3001\u57FA\u91D1\u63A8\u8350\u9875\u3001\u7528\u6237\u9875\u7B49\u6BCF\u4E2A\u9875\u9762\u7684\u7EC4\u6210\u6A21\u5757\u56FA\u5B9A\uFF0C\u4F46\u53EF\u80FD\u56E0\u4E3A \u8FD0\u8425\u63A8\u5E7F\u987A\u5E8F\u539F\u56E0\u9700\u8981\u8FDB\u884C\u4E00\u4E9B\u6295\u653E\u7684\u7BA1\u7406\uFF0C\u5982\u5206\u6279\u6295\u653E\u3001\u5B9A\u65F6\u6295\u653E\u3001\u7070\u5EA6\u8303\u56F4\u3001abTest\u6536\u96C6\u53CD\u9988\u7B49\u89C4\u5219\u7B56\u7565 \u7684\u914D\u7F6E\u7BA1\u7406\u3002 \u2022 \u529F\u80FD\uFF1A\u7BA1\u7406\u5FAE\u4FE1\u7406\u8D22\u901A\u6295\u653E\u4F4D\u7F6E\uFF08\u9875\u9762\u67D0\u5904banner\uFF09\u3001\u6295\u653E\u9875\u9762\u3001\u6295\u653E\u6A21\u677F\u3001\u6295\u653E\u6570\u636E\uFF0C\u5BF9\u6295\u653E\u4F4D\u9700\u8981\u7684\u6807 \u7B7E\u3001\u7D20\u6750\u3001\u4EA7\u54C1\u8FDB\u884C\u7BA1\u7406\uFF0C\u5BF9\u6295\u653E\u7684\u7528\u6237\u5305\u7BA1\u7406\uFF1B\u5F00\u653EabTest\u529F\u80FD\uFF0C\u901A\u8FC7\u4E0D\u540C\u7528\u6237\u4F53\u9A8C\u6570\u636E\u7684\u6536\u96C6\u4E0A\u62A5\u8FDB\u884C\u8FD0 \u8425\u7BA1\u7406\u5206\u6790\uFF1B\u5F00\u53D1\u81EA\u4E3B\u5BA1\u6279\u7CFB\u7EDF\uFF0C\u6295\u653E\u6570\u636E\u8FDB\u884C\uFF1B \u4E3B\u8981\u804C\u8D23\uFF1A \u2022 \u8BC4\u4F30\u5E76\u5B8C\u6210\u6295\u653E\u57FA\u7840\u914D\u7F6E\u9875\u9762\u3001\u6295\u653E\u89C4\u5219\u7BA1\u7406\u90E8\u5206\u3001\u5BA1\u6279\u7CFB\u7EDF\u7684\u5F00\u53D1\uFF1B \u2022 \u4F7F\u7528egg + vue \u5F00\u53D1\u6574\u4E2A\u9879\u76EE\uFF0Ctypeorm\u81EA\u4E3B\u8FDE\u63A5\u6570\u636E\u5E93\u8FDB\u884C\u5E93\u8868\u7684\u521B\u5EFA\u3001\u7EF4\u62A4\u7BA1\u7406\uFF1B \u2022 \u63A5\u5165\u4E2D\u95F4\u4EF6\u3001\u7F51\u5173\u9274\u6743\uFF0C\u5BFC\u5165/\u51FA\u6587\u4EF6\u6279\u91CF\u5904\u7406\uFF0C\u5B9A\u65F6\u4EFB\u52A1\u53D1\u9001\u90AE\u4EF6\uFF1B \u2022 \u63A5\u5165\u516C\u7528\u5BA1\u6279\u7CFB\u7EDF\uFF0C\u54CD\u5E94\u7CFB\u7EDF\u56DE\u8C03\uFF1B\u63A5\u5165\u65E5\u5FD7\u5BA1\u8BA1\u7CFB\u7EDF\u4E2D\u95F4\u4EF6\uFF0C\u7BA1\u7406\u4EBA\u5458\u64CD\u4F5C\u5386\u53F2\uFF1B \u2022 \u4E0E\u540E\u53F0\u6C9F\u901A\u63A5\u53E3\u65B9\u6848\uFF0C\u5E76\u5B8C\u6210\u5BF9\u63A5\uFF1B \u5DE5\u4F5C\u4E1A\u7EE9\uFF1A \u2022 \u63A5\u5165egg\u6846\u67B6\u8FDB\u884C\u5F00\u53D1\u5DE5\u4F5C\uFF0C\u6210\u529F\u5B8C\u5584\u65E5\u5FD7\u3001\u5BA1\u6279\u3001\u9274\u6743\u7B49\u4E2D\u95F4\u4EF6\u7684\u5F00\u53D1\u53CA\u5F15\u7528\uFF1B \u2022 \u68B3\u7406\u903B\u8F91\u8FC7\u7A0B\u4E2D\uFF0C\u53D1\u73B0\u7F3A\u4E4F\u5404\u4F4D\u7F6E\u6295\u653E\u6570\u636E\u515C\u5E95\uFF0C\u63A8\u52A8\u5404\u4F4D\u7F6E\u4FDD\u8BC1\u515C\u5E95\u6570\u636E\u7684\u4E0A\u7EBF\u7BA1\u7406\uFF0C\u5E76\u4E25\u683C\u9650\u5236\u4EC5\u5269\u515C\u5E95 \u6570\u636E\u65F6\u4E0D\u53EF\u8C03\u6574\u66F4\u6539\uFF0C\u907F\u514D\u7EBF\u4E0A\u4E8B\u6545\u7684\u51FA\u73B0\uFF1B \u2022 \u5F00\u53D1\u901A\u7528\u5BA1\u6279\u7CFB\u7EDF\u5305\u53CA\u5F00\u53D1\u6587\u6863\uFF0C\u7ED3\u5408\u6587\u6863\u63D0\u4F9B\u7ED9\u540E\u7EED\u63A5\u5165\u4EBA\u4F7F\u7528\uFF1B \u2022 \u5F00\u53D1\u901A\u7528\u7F51\u5173\u9274\u6743\u516C\u5171npm\u5305\uFF0C\u7ED3\u5408\u6587\u6863\u63D0\u4F9B\u7ED9\u540E\u7EED\u63A5\u5165\u4EBA\u4F7F\u7528\uFF1B \u9879\u76EE\u7B80\u4ECB\uFF1A \u2022 \u80CC\u666F\uFF1A\u7406\u8D22\u901A\u662F\u57FA\u91D1\u6536\u76CA\u7C7B\u4EA7\u54C1\uFF0C\u9700\u8981\u4FDD\u6301\u7528\u6237\u7C98\u6027\u53CA\u5F15\u5BFC\u7528\u6237\u5BF9\u7406\u8D22\u901A\u7684\u4F7F\u7528\u548C\u8D44\u91D1\u5206\u914D\u7BA1\u7406\uFF0C\u8FD0\u8425\u63A8\u5E7F\u6D3B \u52A8\u662F\u7ECF\u9A8C\u8BC1\u7684\u597D\u65B9\u6CD5\u4E4B\u4E00\uFF0C\u9700\u8981\u4E00\u4E2A\u7CFB\u7EDF\u5BF9\u6D3B\u52A8\u7684\u5404\u79CD\u7C7B\u578B\u5361\u5238\u3001\u6D3B\u52A8\u91D1\u989D\u7B49\u8FDB\u884C\u7BA1\u7406\uFF0C\u56E0\u6D89\u53CA\u8D44\u91D1\uFF0C\u4E5F\u9700\u8981 \u4E25\u683C\u7684\u6D3B\u52A8\u4E0A\u7EBF\u63A8\u5E7F\u6D41\u7A0B\u3002 \u2022 \u529F\u80FD\uFF1A\u63D0\u4F9B\u6D3B\u52A8\u57FA\u7840\u4FE1\u606F\u6D3B\u52A8\u540D\u79F0\u3001\u6D3B\u52A8\u751F\u6548\u65F6\u95F4\u8303\u56F4\u3001\u751F\u6548\u7528\u6237\u5305\u8303\u56F4\u3001\u6D3B\u52A8\u91D1\u989D\u3001\u6D3B\u52A8\u6295\u653E\u9875\u9762\u3001\u6D3B\u52A8\u57FA \u91D1\u5217\u8868\u53CA\u8303\u56F4\u7B49\u914D\u7F6E\u7BA1\u7406\uFF1B\u63D0\u4F9B\u6D3B\u52A8\u5956\u5238\u7C7B\u578B\u7BA1\u7406\uFF0C\u5982\u82B1\u8D39\u62B5\u6263\u5238\u3001\u52A0\u606F\u5238\u3001\u73B0\u91D1\u62B5\u6263\u52B5\u3001\u9526\u9CA4\u5956\u5238\u7801\u7B49\uFF1B\u57FA \u91D1\u4EFD\u989D\u7EA2\u5305\u3001 \u5FAE\u4FE1\u7406\u8D22\u901A\u6D3B\u52A8\u7EC6\u8282\u3001\u5956\u54C1\u4FE1\u606F\u3001\u901A\u77E5\u4FE1\u606F\u3001\u6A21\u677F\u6570\u636E\u6536\u62E2\u4FE1\u606F\u7B49\u76F8\u5173\u4FE1\u606F\u7684\u914D\u7F6E\u53D1\u5E03\u7BA1\u7406\uFF1B\u6DFB \u52A0\u4E25\u683C\u5BA1\u6279\u6D41\u7A0B\uFF0C\u4FDD\u8BC1\u6295\u653E\u6D3B\u52A8\u505A\u5230\u7CFB\u7EDF\u5907\u4EFD\u3001\u5BA1\u6279\u8BB0\u5F55\u65F6\u95F4\u5907\u4EFD\uFF0C\u4FBF\u4E8E\u8FFD\u6EAF\u7BA1\u7406\u8BB0\u5F55\uFF1B \u4E3B\u8981\u804C\u8D23\uFF1A \u2022 \u4F7F\u7528vue\u53CA\u5176\u751F\u6001\u5F00\u53D1\u524D\u7AEF\u7BA1\u7406\u914D\u7F6E\u9875\u9762\uFF1B \u2022 \u4F7F\u7528php\u53CACI\u6846\u67B6\u642D\u5EFA\u4E2D\u53F0\u670D\u52A1\uFF0C\u5B8C\u6210\u540E\u53F0\u63A5\u53E3\u83B7\u53D6\u53CA\u6570\u636E\u5E93\u7BA1\u7406\uFF1B \u2022 \u68B3\u7406\u6D3B\u52A8\u53D1\u5238\u903B\u8F91\uFF0C\u901A\u540E\u53F0\u8FDB\u884C\u6C9F\u901A\uFF0C\u7BA1\u7406\u672C\u5730\u9884\u53D1\u5E03\u5E93\uFF0C\u4E0A\u7EBF\u540C\u6B65\u540E\u53F0\u63A5\u53E3\u540E\u53F0\u6570\u636E\u5E93\u7BA1\u7406\uFF1B \u2022 \u4F7F\u7528apache\u672C\u5730\u4EE3\u7406\u670D\u52A1\u8FDB\u884C\u5F00\u53D1\uFF0C\u4F7F\u7528nginx+apache\u8FDB\u884C\u670D\u52A1\u5668\u7684\u4EE3\u7406\u8FD0\u884C\uFF0C\u7BA1\u7406\u57FA\u7840nginx\u914D\u7F6E \u2022 \u5F00\u53D1\u524D\u7AEF\u9875\u9762\u7EC4\u4EF6\uFF0C\u9AD8\u6548\u5B8C\u6210\u9700\u6C42\u5F00\u53D1 \u2022 \u63A5\u5165\u63A5\u53E3\u8C03\u7528\u65E5\u5FD7\u7CFB\u7EDF\uFF0C\u4FDD\u8BC1 \u5DE5\u4F5C\u4E1A\u7EE9\uFF1A \u2022 \u987A\u5229\u63A5\u624BPHP\u6280\u672F\u7684\u4E2D\u53F0\u7BA1\u7406\u7AEF\uFF0C\u4FDD\u8BC1\u7CFB\u7EDF\u4E1A\u52A1\u7684\u589E\u52A0\u53CA\u540E\u7EED\u7684\u7EF4\u62A4\u5DE5\u4F5C\uFF1B \u2022 \u4F7F\u7528nginx+apache\u5B8C\u6210\u9879\u76EE\u7CFB\u7EDF\u914D\u7F6E\u7BA1\u7406\u5DE5\u4F5C\uFF1B \u2022 \u9047\u5230\u5EF6\u65F6\u4EFB\u52A1\u7684\u60C5\u51B5\uFF0C\u901A\u8FC7\u540C\u540E\u53F0\u4E00\u8D77\u534F\u8C03\u52A0\u73ED\u52AA\u529B\uFF0C\u4FDD\u8BC1\u52A0\u606F\u5238\u7B49\u6D3B\u52A8\u5956\u5238\u6295\u653E\u9879\u76EE\u7684\u987A\u5229\u5B8C\u6210\uFF1B 2018-06 ~ 2019-08 2 \u4F17\u6D4B\u5E73\u53F0(vue2+mysql) \u4F17 \u642D\u5EFA+\u5F00\u53D1 \u642D \u9879\u76EE\u7B80\u4ECB\uFF1A \u2022 \u80CC\u666F\uFF1A\u9879\u76EE\u7684\u4E00\u4E9B\u6D4B\u8BD5\u4EFB\u52A1\u9700\u8981\u5927\u91CF\u6709\u7ECF\u9A8C\u4E0D\u4EC5\u5C40\u9650\u4E8E\u516C\u53F8\u5185\u90E8\u7684\u6D4B\u8BD5\u90E8\u95E8\u4EBA\u5458\u6765\u8FDB\u884C\u6D4B\u8BD5\u673A\u95EE\u9898\u53CD\u9988\uFF0C\u56E0\u6B64 \u9700\u8981\u4E00\u4E2A\u5F00\u653E\u7684\u53EF\u4EE5\u4EFB\u52A1\u53CA\u5956\u52B1\u7684\u65B9\u5F0F\u53D1\u5E03\u6D4B\u8BD5\u4EFB\u52A1\uFF0C\u9886\u53D6\u4EFB\u52A1\u4E4B\u540E\u5B8C\u6210\u53CD\u9988\uFF0C\u4F9D\u636E\u95EE\u9898\u7EA7\u522B\u8FDB\u884C\u5956\u52B1\u53CD\u9988\uFF0C \u5F62\u6210\u826F\u597D\u7684\u6D4B\u8BD5\u5E73\u53F0\u4EA4\u6D41\u5FAA\u73AF\u3002 \u2022 \u529F\u80FD\uFF1A\u53D1\u5E03\u6D4B\u8BD5\u4EFB\u52A1\uFF0C\u4E2A\u4EBA\u540D\u4E0B\u8FDB\u884C\u6D4B\u8BD5\u4EFB\u52A1\u7684\u6D41\u8F6C\uFF1A\u9886\u53D6\u4EFB\u52A1-\u67E5\u770B\u6D4B\u8BD5\u4EFB\u52A1\u7EC6\u8282-\u63D0\u4EA4\u53CD\u9988-\u5BA1\u6279\u6D4B\u8BD5\u7ED3\u679C- \u9886\u53D6\u5956\u52B1\uFF1B\u7CFB\u7EDF\u7BA1\u7406\u5458\u8FDB\u884C\u4EFB\u52A1\u7684\u53D1\u5E03\u3001\u6D4B\u8BD5\u53CD\u9988\u7684\u9A8C\u8BC1\uFF0C\u5E76\u5BFC\u51FA\u4FE1\u606F\u63D0\u4EA4\u53CD\u9988\u7ED9\u5F00\u53D1\u4EBA\u5458\u8FDB\u884C\u95EE\u9898\u7684\u4FEE\u590D\u53CD \u9988\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u63D0\u4F9B\u4E86\u95EE\u5BF9\u6D4B\u8BD5\u4EFB\u52A1\u7684\u8C03\u67E5\u95EE\u5377\u529F\u80FD\uFF0C\u5728\u5B8C\u6210\u4EFB\u52A1\u4E4B\u540E\u5B8C\u6210\u95EE\u5377\u5185\u5BB9\u53CD\u9988\uFF0C\u7BA1\u7406\u5458\u901A\u8FC7\u53CD\u9988\u4F18 \u5316\u4EFB\u52A1\u7684\u8BC4\u7EA7\u7B49\u76F8\u5173\u5DE5\u4F5C\u3002 \u804C\u8D23\u5185\u5BB9\uFF1A \u2022 \u4F7F\u7528vue\u5168\u5BB6\u6876\uFF08vue+vuex+vueRouter+axios+webpack\uFF09\u5F00\u53D1\u5E76\u6253\u5305\u6574\u4E2A\u9879\u76EE\uFF0C\u4F7F\u7528photoshop\u5207\u56FE\uFF1B \u2022 \u4F7F\u7528jenkins\u8FDB\u884C\u9879\u76EE\u7684\u81EA\u52A8\u5316\u90E8\u7F72\u3001SVN\u8FDB\u884C\u9879\u76EE\u7BA1\u7406\uFF1B \u5DE5\u4F5C\u4E1A\u7EE9\uFF1A \u2022 \u4F7F\u7528vue\u5168\u5BB6\u6876\u5B8C\u6210\u4EFB\u52A1\u5F00\u53D1 \u2022 \u6210\u529F\u5B66\u4F1A\u5E94\u7528jenkins\u8FDB\u884C\u9879\u76EE\u7684\u81EA\u52A8\u5316\u90E8\u7F72\u53CA\u6784\u5EFA\u4EFB\u52A1\uFF1B 1\u3001\u6297\u538B\u80FD\u529B\u5F3A\u3001\u5177\u5907\u56E2\u961F\u7CBE\u795E\uFF0C\u66F4\u9002\u5E94\u4EAB\u53D7\u56E2\u961F\u5F00\u53D1\u7684\u6C1B\u56F4\uFF0C\u6709\u5F3A\u70C8\u8D23\u4EFB\u611F\uFF0C\u65E5\u5E38\u76EE\u6807\u662F\u80FD\u591F\u5C3D\u53EF\u80FD\u6700\u5FEB\u6700\u597D\u5B8C \u6210\u4EFB\u52A1 2\u3001\u5BF9\u524D\u7AEF\u65B0\u6280\u672F\u6709\u5F88\u5F3A\u70C8\u7684\u5174\u8DA3\u3001\u8BA4\u4E3A\u5B9E\u8DF5\u51FA\u771F\u77E5 3\u3001\u82F1\u8BED\u516D\u7EA7\uFF0C\u5177\u5907\u826F\u597D\u7684\u82F1\u8BED\u6587\u6863\u9605\u8BFB\u80FD\u529B \uE60E \u81EA\u6211\u8BC4\u4EF7 \u81EA</p>`);
}
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/test.html.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
var test_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["ssrRender", _sfc_ssrRender$x]]);
var test_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": test_html$1
});
const _sfc_main$Q = {};
function _sfc_ssrRender$w(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="\u5355\u5143\u6D4B\u8BD5\u8865\u5168" tabindex="-1"><a class="header-anchor" href="#\u5355\u5143\u6D4B\u8BD5\u8865\u5168" aria-hidden="true">#</a> \u5355\u5143\u6D4B\u8BD5\u8865\u5168</h2><ul><li>jsdom https://github.com/jsdom/jsdom</li></ul><!--]-->`);
}
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/\u5355\u5143\u6D4B\u8BD5\u8865\u5168.html.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
var _______html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["ssrRender", _sfc_ssrRender$w]]);
var _______html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _______html$1
});
const _sfc_main$P = {};
function _sfc_ssrRender$v(_ctx, _push, _parent, _attrs) {
  _push(`<p${serverRenderer.ssrRenderAttrs(_attrs)}>https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain</p>`);
}
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/\u539F\u578B\u94FE.html.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
var ____html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["ssrRender", _sfc_ssrRender$v]]);
var ____html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": ____html$1
});
const _sfc_main$O = {};
function _sfc_ssrRender$u(_ctx, _push, _parent, _attrs) {
  _push(`<blockquote${serverRenderer.ssrRenderAttrs(_attrs)}><p>https://medium.com/geekculture/exporting-data-in-excel-file-in-node-js-f1b298997d47</p></blockquote>`);
}
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/\u5982\u4F55\u5BFC\u51FAexcel\u5728nodejs\u4E2D.html.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
var ____excel_nodejs__html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["ssrRender", _sfc_ssrRender$u]]);
var ____excel_nodejs__html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": ____excel_nodejs__html$1
});
var _imports_0 = "/VuePress-site/assets/2022-09-20-10-02-11.a10648e8.png";
const _sfc_main$N = {};
function _sfc_ssrRender$t(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>2022\u5E7409\u670820\u65E5 flex\u5E03\u5C40\u4E0B\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u5C45\u53F3 <img${serverRenderer.ssrRenderAttr("src", _imports_0)} alt=""></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token comment">/* \u4E0A\u4E0B\u5BF9\u9F50 */</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span> 
    <span class="token comment">/* \u6574\u4F53\u504F\u5DE6 */</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
    <span class="token comment">/* \u6700\u540E\u5143\u7D20 */</span>
<span class="token selector">.item-end</span><span class="token punctuation">{</span>
      <span class="token property">margin-left</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><!--]-->`);
}
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/css/index.html.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
var index_html$k = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["ssrRender", _sfc_ssrRender$t]]);
var index_html$l = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$k
});
const _sfc_main$M = {};
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="dockerfile-docker-compose" tabindex="-1"><a class="header-anchor" href="#dockerfile-docker-compose" aria-hidden="true">#</a> Dockerfile&amp;docker-compose</h1><h2 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> Dockerfile</h2><blockquote><p>https://docs.docker.com/engine/reference/builder/</p></blockquote><!--]-->`);
}
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/docker/Dockerfile&docker-compose.html.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
var Dockerfile_dockerCompose_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["ssrRender", _sfc_ssrRender$s]]);
var Dockerfile_dockerCompose_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Dockerfile_dockerCompose_html$1
});
const _sfc_main$L = {};
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/docker/index.html.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
var index_html$i = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["ssrRender", _sfc_ssrRender$r]]);
var index_html$j = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$i
});
const _sfc_main$K = {};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="docker\u5E38\u7528\u547D\u4EE4\u4EE5\u53CA\u9009\u9879\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#docker\u5E38\u7528\u547D\u4EE4\u4EE5\u53CA\u9009\u9879\u89E3\u91CA" aria-hidden="true">#</a> Docker\u5E38\u7528\u547D\u4EE4\u4EE5\u53CA\u9009\u9879\u89E3\u91CA</h1><blockquote><ul><li>\u6240\u6709\u5BB9\u5668id\u90FD\u53EF\u4EE5\u7528\u5BB9\u5668\u540D\u66FF\u4EE3</li><li></li></ul></blockquote><h2 id="\u5E38\u7528\u64CD\u4F5C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u64CD\u4F5C\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u64CD\u4F5C\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> images

<span class="token function">docker</span> container <span class="token function">ls</span>

<span class="token function">docker</span> <span class="token function">ps</span>


<span class="token function">docker</span>

<span class="token comment"># \u505C\u6B62\u5E76\u5220\u9664\u5BB9\u5668</span>
<span class="token function">docker</span> stop 95ad21a0d02c <span class="token operator">&amp;&amp;</span> <span class="token function">docker</span> <span class="token function">rm</span> 95ad21a0d02c
<span class="token comment"># \u6216 \u5F3A\u5236\u5220\u9664</span>
<span class="token function">docker</span> <span class="token function">rm</span> -f 5293103a6609
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> mysql</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u62C9\u6307\u5B9A\u7248\u672Cmysql</span>
<span class="token function">docker</span> run --name mysql-test-volume -d -p <span class="token number">3306</span>:3306 -e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">1234</span> -v /Users/byqbai/Documents/Projects/docker/lamp/mysql/sql:/docker-entrypoint-initdb.d  mysql:8.0.18
<span class="token comment"># 9a448472fbc94fc8b3fb7976ef508f6cd5cb1780f6095351f0f1fb0f278bbed3 </span>
<span class="token comment"># \u{1F53C} \u8FD4\u56DE\u751F\u6210\u7684\u552F\u4E00\u5BB9\u5668id</span>

<span class="token comment"># \u8FDB\u5165\u5BB9\u5668\u5E76\u4E14\u542F\u7528 \`/bin/bash\` \u547D\u4EE4\u884C</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it 3ebad2dcc4d30dcaf6819582c20c630a3e6835cdf334c0bfe04582708684f421 <span class="token function">bash</span>
<span class="token comment"># \u8FDB\u5165\u5BB9\u5668: \u{1F447}\u{1F3FB}</span>
<span class="token comment"># root@3ebad2dcc4d3:/# mysql -uroot -p1234</span>

<span class="token comment"># mysql: [Warning] Using a password on the command line interface can be insecure.</span>
<span class="token comment"># Welcome to the MySQL monitor.  Commands end with ; or \\g.</span>
<span class="token comment"># Your MySQL connection id is 8</span>
<span class="token comment"># Server version: 8.0.18 MySQL Community Server - GPL</span>

<span class="token comment"># Copyright (c) 2000, 2019, Oracle and/or its affiliates. All rights reserved.</span>

<span class="token comment"># Oracle is a registered trademark of Oracle Corporation and/or its</span>
<span class="token comment"># affiliates. Other names may be trademarks of their respective</span>
<span class="token comment"># owners.</span>

<span class="token comment"># Type &#39;help;&#39; or &#39;\\h&#39; for help. Type &#39;\\c&#39; to clear the current input statement.</span>

<span class="token comment"># mysql&gt; </span>

<span class="token comment"># \u672C\u673A\u547D\u4EE4\u884C\u8FDE\u63A5:</span>
mysql -h localhost -P <span class="token number">3306</span> --protocol<span class="token operator">=</span>tcp -u root
<span class="token comment"># from https://stackoverflow.com/questions/33001750/connect-to-mysql-in-a-docker-container-from-the-host</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="docker-run" tabindex="-1"><a class="header-anchor" href="#docker-run" aria-hidden="true">#</a> <code>docker run</code></h3><ul><li><code>--name</code> \u542F\u52A8\u540E\u7684\u5BB9\u5668\u540D</li><li><code>-d</code> \u540E\u53F0\u53D1\u5E03</li><li><code>-p</code> \u7AEF\u53E3\u6620\u5C04 <code>\u672C\u673A:\u5BB9\u5668</code></li><li><code>-e</code> \u73AF\u5883\u53D8\u91CF</li><li><code>-v</code> \u6302\u8F7D\u9879 <code>\u672C\u673A\u8DEF\u5F84:\u5BB9\u5668\u8DEF\u5F84</code></li><li>mysql \u65B0\u5EFA\u540E\u4F1A\u6839\u636E <code>/docker-entrypoint-initdb.d</code> \u91CC\u7684\u6570\u636E\u6587\u4EF6\u5982<code>*.sql</code>\u9010\u4E00\u8FD0\u884C\u521D\u59CB\u5316\u6570\u636E\u5E93</li><li>\u672C\u5730\u5982\u679C\u6709\u5B89\u88C5mysql\u5E76\u4E14\u4E3A\u4E86\u4E0D\u5360\u7528<code>3306</code>\u8BBE\u7F6E\u5173\u95ED\u72B6\u6001, <code>mysql -uroot -pxxxx</code>\u547D\u4EE4\u4E0D\u80FD\u8BBF\u95EE\u5BB9\u5668</li></ul><h3 id="docker-exec" tabindex="-1"><a class="header-anchor" href="#docker-exec" aria-hidden="true">#</a> <code>docker exec</code></h3><blockquote><p>https://docs.docker.com/engine/reference/commandline/exec/</p></blockquote><ul><li><code>-i\`\`--interactive</code> \u4EA4\u4E92\u5F0F</li><li><code>-t\`\`--tty</code> \u53EF\u4EE5\u7406\u89E3\u662F\u5BB9\u5668\u5185\u90E8\u7684\u547D\u4EE4\u884C\u66B4\u9732\u5230\u672C\u5730</li></ul><h2 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> php</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5FEB\u542F\u52A8</span>
<span class="token function">docker</span> run --name scan-php -v <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>/www:/var/www/html -p <span class="token number">80</span>:80 -d php:7.1.7-apache 
<span class="token comment"># \u8FDB\u5165\u5BB9\u5668</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it 8c2e4598426c21dafa6497f0849f7b6fe8ef148cff1c72de1bd422cd4654b857 <span class="token function">bash</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><!--]-->`);
}
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/docker/\u5E38\u7528\u547D\u4EE4.html.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
var _____html$4 = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["ssrRender", _sfc_ssrRender$q]]);
var _____html$5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _____html$4
});
const _sfc_main$J = {};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><ul><li>Bundling is the process of resolving the web of dependencies and merging (or \u2018packaging\u2019) the files (or modules) into optimized bundles for the browser, with the goal of reducing the number of requests for files when a user visits a web page.</li></ul><blockquote><p>\u7ED1\u5B9A \u662F\u89E3\u51B3\u4F9D\u8D56\u5173\u7CFB\u7F51\u7EDC\u5E76\u5C06\u6587\u4EF6\uFF08\u6216\u6A21\u5757\uFF09\u5408\u5E76\uFF08\u6216\u201C\u6253\u5305\u201D\uFF09\u4E3A\u6D4F\u89C8\u5668\u4F18\u5316\u6346\u7ED1\u5305\u7684\u8FC7\u7A0B\uFF0C\u76EE\u7684\u662F\u51CF\u5C11\u7528\u6237\u8BBF\u95EE\u7F51\u9875\u65F6\u5BF9\u6587\u4EF6\u7684\u8BF7\u6C42\u6570\u91CF\u3002</p></blockquote><blockquote><p>Bunding \u662F\u89E3\u51B3web\u4E2D\u7684\u4F9D\u8D56\u5173\u7CFB\u548C\u5408\u5E76\uFF08\u6253\u5305\uFF09\u6587\u4EF6\uFF08\u6A21\u5757\uFF09\u4E3A\u6D4F\u89C8\u5668\u4F18\u5316\u6346\u7ED1\u7684\u8FC7\u7A0B\uFF0C\u76EE\u7684\u662F\u4E3A\u4E86\u51CF\u5C11\u7528\u6237\u8BBF\u95EE\u9875\u9762\u65F6\u8BF7\u6C42\u7684\u6570\u91CF</p></blockquote><ul><li>A framework can solve these problems. But such a framework must have the right level of abstraction \u2014 otherwise it won\u2019t be very useful. It also needs to have great &quot;Developer Experience&quot;, ensuring you and your team have an amazing experience while writing code.</li></ul><blockquote><p>\u4E00\u4E2A\u6846\u67B6\u80FD\u89E3\u51B3\u4E00\u4E9B\u95EE\u9898\uFF0C\u4F46\u662F\u6846\u67B6\u5FC5\u987B\u6709\u6B63\u786E\u7684 \u62BD\u8C61\u7B49\u7EA7 - \u5426\u5219\u4E0D\u4F1A\u975E\u5E38\u597D\u7528\uFF0C\u5B83\u4E5F\u9700\u8981\u6709\u4E0D\u9519\u7684\u201C\u5F00\u53D1\u4F53\u9A8C\u201D\uFF0C\u4FDD\u8BC1\u6CE5\u6CB3\u4F60\u7684\u56E2\u961F\u6709\u60CA\u4EBA\u7684\u7F16\u7801\u4F53\u9A8C</p></blockquote><ul><li>Furthermore, in a production build of Next.js, whenever Link components appear in the browser\u2019s viewport, Next.js automatically prefetches the code for the linked page in the background. By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant!</li></ul><blockquote><p>\u9664\u6B64\u4E4B\u5916\uFF0CNext.js\u6784\u5EFA\u7684\u751F\u4EA7\u73AF\u5883\u4E2D\uFF0C\u53EA\u8981\u6709 Link \u7EC4\u4EF6\u51FA\u73B0\u5728\u6D4F\u89C8\u5668\u7684\u89C6\u7A97\u4E2D\uFF0CNextjs \u4F1A\u5728\u540E\u53F0 \u81EA\u52A8\u5730\u9884\u5148\u8BF7\u6C42\u94FE\u63A5\u9875\u9762\u7684\u4EE3\u7801\u3002<br> \u5F53\u4F60\u70B9\u51FB\u94FE\u63A5\u7684\u65F6\u5019\uFF0C\u76EE\u6807\u9875\u9762\u7684\u4EE3\u7801 \u5728\u540E\u53F0\u5C06\u5DF2\u7ECF\u88AB\u52A0\u8F7D\u5B8C\u6BD5\uFF0C\u9875\u9762\u7684\u8F6C\u6362\u51E0\u4E4E\u5C31\u662F\u5373\u65F6\u7684\uFF01<br></p></blockquote><ul><li>This lesson will also talk about how Next.js handles static assets like images and page metadata like the <code>&lt;title&gt;</code> tag.</li></ul><blockquote><p>\u8FD9\u8282\u8BFE\u4F1A\u544A\u8BC9\u4F60 \u5173\u4E8E\u600E\u6837\u5904\u7406\u56FE\u7247\u9759\u6001\u8D44\u6E90\u548C\u60F3title\u6807\u7B7E\u5143\u6570\u636E</p></blockquote><ul><li>Next.js also has support for Image Optimization by default. This allows for resizing, optimizing, and serving images in modern formats like WebP when the browser supports it. This <em>avoids</em> <em>shipping</em> large images to devices with a smaller viewport. It also allows Next.js to automatically adopt future image formats and serve them to browsers that support those formats.</li></ul><blockquote><p>ship v. \u8FD0\u9001<br> avoid v. \u907F\u514D<br> Nextjs \u9ED8\u8BA4\u4E5F\u652F\u6301\u652F\u6301\u56FE\u7247\u4F18\u5316\uFF0C\u5141\u8BB8\u8C03\u6574\u5927\u5C0F\u3001\u4F18\u5316\u548C\u670D\u52A1\u578B\u56FE\u7247\u50CF WebP \u7684\u73B0\u4EE3\u683C\u5F0F\uFF08\u6D4F\u89C8\u5668\u652F\u6301\u7684\u8BDD\uFF09\uFF0C\u907F\u514D\u4F20\u8F93\u5927\u56FE\u7ED9\u5C0F\u5C4F\u5E55\u3002\u5B83\u4E5F\u5141\u8BB8Next \u81EA\u52A8\u91C7\u7528\u672A\u6765\u56FE\u7247\u683C\u5F0F\u548C\u63D0\u4F9B\u7ED9 \u652F\u6301\u8FD9\u4E9B\u683C\u5F0F\u7684\u6D4F\u89C8\u5668\u3002</p></blockquote><ul><li>This script contains the Facebook SDK which is commonly used to introduce Facebook social plugins and other functionality. Although this approach works, including scripts in this manner does not give a clear idea of when it would load with respect to the other JavaScript code fetched on the same page. If a particular script is render-blocking and can delay page content from loading, this can significantly impact performance.</li></ul><blockquote><p>commonly adv. \u901A\u5E38\u5730<br> approach n. \u65B9\u5F0F\uFF0C\u65B9\u6CD5<br> particular adj. \u8BE6\u7EC6\u7684 \u7279\u6B8A\u7684<br> significantly \u5F15\u4EBA\u6CE8\u76EE\u7684<br> impact n. \u6548\u679C<br> performance \u6027\u80FD<br> \u8FD9\u4E2A\u811A\u672C\u5305\u542B\u4E86Facebook SDK \u901A\u5E38\u7528\u6765\u5F15\u5165 Facebook\u793E\u4EA4\u63D2\u4EF6\u548C\u5176\u4ED6\u529F\u80FD\u3002<br> \u5C3D\u7BA1\u8FD9\u6837\u7684\u65B9\u6CD5\u662F\u8D77\u4F5C\u7528\u7684\uFF0C \u5F53\u540C\u4E00\u4E2A\u9875\u9762\u4F7F\u7528\u5F15\u5165\u811A\u672C\u8FD9\u4E2A\u65B9\u6CD5\u6765\u5F15\u5165\u5176\u4ED6\u811A\u672C\u4EE3\u7801\u4F1A\u4E0D\u6E05\u695A\u5F15\u5165\u7EC6\u8282\u3002\u5982\u679C\u4E00\u4E2A\u7279\u6B8A\u7684\u811A\u672C\u662F\u6E32\u67D3\u963B\u585E\u7684\u5E76\u80FD\u591F\u5728\u5EF6\u65F6\u9875\u9762\u5185\u5BB9\u52A0\u8F7D \uFF0C\u8FD9\u4F1A\u660E\u663E\u63D0\u5347\u6027\u80FD</p></blockquote><!--]-->`);
}
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/english/learn-nextjs-docs.html.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
var learnNextjsDocs_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["ssrRender", _sfc_ssrRender$p]]);
var learnNextjsDocs_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": learnNextjsDocs_html$1
});
const _sfc_main$I = {};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/english/\u5982\u4F55\u8BB0\u5355\u8BCD.html.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
var ______html$4 = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["ssrRender", _sfc_ssrRender$o]]);
var ______html$5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": ______html$4
});
const _sfc_main$H = {};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><blockquote><p>\u65B9\u4FBFWeb\u5F00\u53D1\u4EBA\u5458\u8C03\u8BD5\u65E0\u969C\u788D, \u4E00\u952E\u663E\u793A\u9875\u9762\u4E0A\u7684\u6240\u6709\u65E0\u969C\u788D\u4FE1\u606F, \u5E76\u4E14\u662F\u52A8\u6001\u7684.</p></blockquote><ul><li>\u539F\u751F\u6807\u7B7E\u6717\u8BFB <ul><li>div</li><li>p</li><li>span</li><li>button</li><li>img</li><li>radio</li><li>checkbox</li></ul></li><li>\u7279\u522B\u58F0\u660E\u6717\u8BFB <ul><li>aria-role <ul><li>\u4EFF\u539F\u751F\u540C\u4E0A</li></ul></li><li>aria-label <blockquote><p>ceshi</p></blockquote></li><li>aira-descript</li></ul></li><li>\u8054\u52A8\u58F0\u660E\u6717\u8BFB <ul><li>aria-labledby</li><li>aria-descriptedby <blockquote></blockquote></li></ul></li></ul><!--]-->`);
}
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/idea/\u65E0\u969C\u788D\u8C03\u8BD5\u5DE5\u5177.html.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
var ________html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["ssrRender", _sfc_ssrRender$n]]);
var ________html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": ________html$1
});
const _sfc_main$G = {};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/js/\u641E\u61C2\u539F\u578B\u94FE.html.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
var ______html$2 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["ssrRender", _sfc_ssrRender$m]]);
var ______html$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": ______html$2
});
const _sfc_main$F = {};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  _push(`<!--[--><h3 id="\u524D\u7AEF\u9762\u8BD5\u9898" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u9762\u8BD5\u9898" aria-hidden="true">#</a> \u524D\u7AEF\u9762\u8BD5\u9898</h3><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/lean/operator.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u8FD0\u7B97\u7B26`);
      } else {
        return [
          vue.createTextVNode("\u8FD0\u7B97\u7B26")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><p>&lt;&lt;&lt; ./lean/code/web_interview/js/1.js</p><!--]-->`);
}
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/lean/index.html.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
var index_html$g = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["ssrRender", _sfc_ssrRender$l]]);
var index_html$h = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$g
});
const _sfc_main$E = {};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h4 id="\u7B28\u529E\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7B28\u529E\u6CD5" aria-hidden="true">#</a> \u7B28\u529E\u6CD5</h4><blockquote><p>\u5FAA\u73AF\u5D4C\u5957\uFF0C\u904D\u5386\u6BCF\u4E00\u9879\uFF0C\u7136\u540E\u8DDF\u5F53\u524D\u9879\u7684\u6BCF\u4E00\u9879\u505A\u5BF9\u6BD4\uFF0C\u76F8\u540C\u5C31\u5220\u9664\u90A3\u4E00\u9879\uFF0C \u6709\u53EF\u80FD\u9020\u6210\u6570\u7EC4\u584C\u9677\u3002</p></blockquote><p>&lt;&lt;&lt; @/code/demo/\u6570\u7EC4\u53BB\u91CD3.js</p><h4 id="\u63A8\u8350\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u63A8\u8350\u65B9\u6CD5" aria-hidden="true">#</a> \u63A8\u8350\u65B9\u6CD5</h4><blockquote><p>\u9884\u5B58\u5230\u4E34\u65F6\u5BF9\u8C61\u4E2D\uFF0C\u51CF\u5C11\u5FAA\u73AF\uFF0C\u9047\u5230\u91CD\u590D\u7684\u5C06\u6700\u540E\u7684\u503C\u66FF\u6362\uFF0C\u5E76\u5220\u9664\u6700\u540E\u7684\u7684\u7D22\u5F15\u503C\uFF0C\u6548\u7387\u5F88\u9AD8\uFF0C\u4F46\u662F\u4F1A\u6253\u4E71\u6570\u7EC4\u539F\u5148\u7684\u987A\u5E8F\u3002</p></blockquote><p>&lt;&lt;&lt; @/code/demo/\u6570\u7EC4\u53BB\u91CD1.js</p><h4 id="es6\u7B80\u4FBF\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#es6\u7B80\u4FBF\u65B9\u6CD5" aria-hidden="true">#</a> ES6\u7B80\u4FBF\u65B9\u6CD5</h4><p>&lt;&lt;&lt; @/code/demo/\u6570\u7EC4\u53BB\u91CD2.js</p><!--]-->`);
}
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/lean/array_remove_duplicarution.html.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
var array_remove_duplicarution_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["ssrRender", _sfc_ssrRender$k]]);
var array_remove_duplicarution_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": array_remove_duplicarution_html$1
});
const _sfc_main$D = {};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="\u8FD0\u7B97\u7B26\u76F8\u5173\u9762\u8BD5\u9898" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97\u7B26\u76F8\u5173\u9762\u8BD5\u9898" aria-hidden="true">#</a> \u8FD0\u7B97\u7B26\u76F8\u5173\u9762\u8BD5\u9898</h2><h4 id="\u4EE5\u4E0B\u4EE3\u7801\u8F93\u51FA\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4EE5\u4E0B\u4EE3\u7801\u8F93\u51FA\u4EC0\u4E48" aria-hidden="true">#</a> \u4EE5\u4E0B\u4EE3\u7801\u8F93\u51FA\u4EC0\u4E48</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">+</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">-</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><details><summary>\u89E3\u6790</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">+</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;12&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">-</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">-</span><span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>+</code> \u5177\u6709\u6709\u8FDE\u63A5\u5B57\u7B26\u4E32\u7684\u529F\u80FD\uFF0C\u4ECE\u5DE6\u5230\u53F3\u6267\u884C\uFF0C\u9047\u5230\u5B57\u7B26\u4E32\u5C31\u8FDE\u63A5\u5B57\u7B26\u4E32\u3002 <code>-</code> \u53EA\u5177\u6709\u6570\u5B66\u8FD0\u7B97\u51CF\u6CD5\u7684\u529F\u80FD\uFF0C\u5B57\u7B26\u4E32<code>&quot;2&quot;</code>\u8F6C\u6362\u4E3A\u6570\u5B57<code>2</code></p></details><h4 id="\u4E3A\u4EC0\u4E48-console-log-0-2-0-1-0-3-\u8F93\u51FA-false" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48-console-log-0-2-0-1-0-3-\u8F93\u51FA-false" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48 console.log(0.2+0.1==0.3) \u8F93\u51FA false \uFF1F</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">+</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">-</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><details><summary>\u89E3\u6790</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">+</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;12&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">-</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">-</span><span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>+</code> \u5177\u6709\u6709\u8FDE\u63A5\u5B57\u7B26\u4E32\u7684\u529F\u80FD\uFF0C\u4ECE\u5DE6\u5230\u53F3\u6267\u884C\uFF0C\u9047\u5230\u5B57\u7B26\u4E32\u5C31\u8FDE\u63A5\u5B57\u7B26\u4E32\u3002 <code>-</code> \u53EA\u5177\u6709\u6570\u5B66\u8FD0\u7B97\u51CF\u6CD5\u7684\u529F\u80FD\uFF0C\u5B57\u7B26\u4E32<code>&quot;2&quot;</code>\u8F6C\u6362\u4E3A\u6570\u5B57<code>2</code></p></details><h4 id="\u8BF7\u7528\u4E09\u5143\u8FD0\u7B97\u7B26-\u95EE\u53F7\u5192\u53F7\u8868\u8FBE\u5F0F-\u6539\u5199\u4EE5\u4E0B\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u7528\u4E09\u5143\u8FD0\u7B97\u7B26-\u95EE\u53F7\u5192\u53F7\u8868\u8FBE\u5F0F-\u6539\u5199\u4EE5\u4E0B\u4EE3\u7801" aria-hidden="true">#</a> \u8BF7\u7528\u4E09\u5143\u8FD0\u7B97\u7B26\uFF08\u95EE\u53F7\u5192\u53F7\u8868\u8FBE\u5F0F\uFF09\u6539\u5199\u4EE5\u4E0B\u4EE3\u7801\uFF1A</h4><!--]-->`);
}
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/lean/operator.html.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
var operator_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["ssrRender", _sfc_ssrRender$j]]);
var operator_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": operator_html$1
});
const _sfc_main$C = {};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h1 id="\u5947\u5947\u602A\u602A\u7684\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5947\u5947\u602A\u602A\u7684\u5E93" aria-hidden="true">#</a> \u5947\u5947\u602A\u602A\u7684\u5E93</h1><p><a href="https://www.npmjs.com/package/inflection" target="_blank" rel="noopener noreferrer">\u5355\u6570\u540D\u8BCD\u8F6C\u590D\u6570`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><!--]-->`);
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/libs/index.html.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
var index_html$e = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$i]]);
var index_html$f = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$e
});
const _sfc_main$B = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h3 id="shell\u547D\u4EE4\u8865\u5168" tabindex="-1"><a class="header-anchor" href="#shell\u547D\u4EE4\u8865\u5168" aria-hidden="true">#</a> <code>Shell</code>\u547D\u4EE4\u8865\u5168</h3><blockquote><p>\u8FD8\u662F<code>Unix</code>\u5185\u6838\u7684<code>Shell</code>\u597D\u7528\u554A\uFF0C\u6CA1\u6709\u8D2C\u4F4EWindows[\u{1F436}]</p></blockquote><h4 id="\u5E38\u7528\u5185\u7F6E\u5173\u952E\u8BCD" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u5185\u7F6E\u5173\u952E\u8BCD" aria-hidden="true">#</a> \u5E38\u7528\u5185\u7F6E\u5173\u952E\u8BCD</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">date</span>   
<span class="token comment"># 2021\u5E74 9\u670810\u65E5 \u661F\u671F\u4E94 20\u65F600\u520648\u79D2 CST</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u5173\u952E\u8BCD\u548C\u81EA\u5B9A\u4E49\u53D8\u91CF\u7684\u4F7F\u7528\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u5173\u952E\u8BCD\u548C\u81EA\u5B9A\u4E49\u53D8\u91CF\u7684\u4F7F\u7528\u533A\u522B" aria-hidden="true">#</a> \u5173\u952E\u8BCD\u548C\u81EA\u5B9A\u4E49\u53D8\u91CF\u7684\u4F7F\u7528\u533A\u522B</h4><!--]-->`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/list/CI.html.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
var CI_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$h]]);
var CI_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": CI_html$1
});
const _sfc_main$A = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h3 id="rebase" tabindex="-1"><a class="header-anchor" href="#rebase" aria-hidden="true">#</a> rebase</h3><h3 id="\u5B50\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5B50\u4ED3\u5E93" aria-hidden="true">#</a> \u5B50\u4ED3\u5E93</h3><h3 id="commit-\u63D0\u4EA4\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#commit-\u63D0\u4EA4\u89C4\u8303" aria-hidden="true">#</a> commit \u63D0\u4EA4\u89C4\u8303</h3><h3 id="commit-\u63D0\u4EA4\u524Deslint\u68C0\u67E5-\u5982\u4F55\u8BBE\u7F6E\u89C4\u8303-\u5C31\u50CFtdesign-vue\u9879\u76EE\u90A3\u6837-\u6BCF\u6B21\u63D0\u4EA4\u90FD\u4F1A\u50CF\u4F53\u68C0\u4E00\u6837\u586B\u5199" tabindex="-1"><a class="header-anchor" href="#commit-\u63D0\u4EA4\u524Deslint\u68C0\u67E5-\u5982\u4F55\u8BBE\u7F6E\u89C4\u8303-\u5C31\u50CFtdesign-vue\u9879\u76EE\u90A3\u6837-\u6BCF\u6B21\u63D0\u4EA4\u90FD\u4F1A\u50CF\u4F53\u68C0\u4E00\u6837\u586B\u5199" aria-hidden="true">#</a> commit \u63D0\u4EA4\u524Deslint\u68C0\u67E5\uFF0C\u5982\u4F55\u8BBE\u7F6E\u89C4\u8303\uFF0C\u5C31\u50CF<code>Tdesign-vue</code>\u9879\u76EE\u90A3\u6837\uFF0C\u6BCF\u6B21\u63D0\u4EA4\u90FD\u4F1A\u50CF\u4F53\u68C0\u4E00\u6837\u586B\u5199</h3><h3 id="\u76F8\u540C\u6587\u4EF6\u4FEE\u6539\u5206\u652F\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#\u76F8\u540C\u6587\u4EF6\u4FEE\u6539\u5206\u652F\u5408\u5E76" aria-hidden="true">#</a> \u76F8\u540C\u6587\u4EF6\u4FEE\u6539\u5206\u652F\u5408\u5E76</h3><!--]-->`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/list/git.html.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
var git_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$g]]);
var git_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": git_html$1
});
const _sfc_main$z = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u94FE\u63A5" aria-hidden="true">#</a> \u94FE\u63A5</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token url">[<span class="token content">\u6587\u672C\u5199\u5728\u65B9\u62EC\u53F7</span>](<span class="token url">http://tencent.com</span>)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u6709\u5E8F\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u6709\u5E8F\u5217\u8868" aria-hidden="true">#</a> \u6709\u5E8F\u5217\u8868</h2><blockquote><p>\u{1F923}\u7B11\u6B7B\u771F\u7684\u6CA1\u6709\u81EA\u52A8\u7684\u6709\u5E8F\u5217\u8868\uFF0C\u4EE5\u4E3A\u4F1A\u6709\u4E00\u4E2A\u5B57\u7B26\u6765\u4EE3\u66FF\uFF0C\u7C7B\u4F3C<code>-</code></p></blockquote><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token list punctuation">1.</span> \u8FD9\u662F\u7B2C\u4E00\u9879
<span class="token list punctuation">2.</span> \u8FD9\u662F\u7B2C\u4E8C\u9879

<span class="token title important"><span class="token punctuation">#</span> \u8FD9\u91CC\u7684\`1.\`\u662F\u8D77\u6548\u679C\u7684</span>
<span class="token list punctuation">1.</span> first
<span class="token list punctuation">1.</span> second
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol><li>first</li><li>second</li></ol><!--]-->`);
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/list/md_example.html.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
var md_example_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$f]]);
var md_example_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": md_example_html$1
});
const _sfc_main$y = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h3 id="\u5355\u5143\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u5355\u5143\u6D4B\u8BD5" aria-hidden="true">#</a> \u5355\u5143\u6D4B\u8BD5</h3><blockquote><p>\u4F18\u52BF\uFF1A\u51FD\u6570\u7ED3\u679C\u53EF\u4EE5\u6D4B\u8BD5\u9884\u671F\uFF0Cvue\u662F\u5426\u6B63\u786E\u6E32\u67D3\uFF0C\u6A21\u62DF\u7528\u6237\u64CD\u4F5C\uFF08\u903B\u8F91\u6027\u4E1C\u897F\u4E0D\u7528\u518D\u5237\u65B0\u6D4F\u89C8\u5668\u67E5\u770B\uFF09</p></blockquote><h4 id="\u76F8\u5173\u6280\u672F\u6808" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u6280\u672F\u6808" aria-hidden="true">#</a> \u76F8\u5173\u6280\u672F\u6808\uFF1A</h4><ol><li><a href="https://vue-test-utils.vuejs.org/zh/guides/#%E8%B5%B7%E6%AD%A5" target="_blank" rel="noopener noreferrer">Vue Test Utils`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://vueschool.io/lessons/installing-vue-test-utils?friend=vuejs" target="_blank" rel="noopener noreferrer">Vue School`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> (\u82F1\u6587\u5B57\u5E55\uFF0C\u6D4F\u89C8\u5668\u4E09\u6307\u53EF\u7FFB\u8BD1)</li><li><a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">Jest`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ol><h3 id="babel-webpack" tabindex="-1"><a class="header-anchor" href="#babel-webpack" aria-hidden="true">#</a> Babel(Webpack)</h3><blockquote><p>\u5404\u4E2A\u7248\u672C\u6253\u5305\u533A\u522B</p></blockquote><h3 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> CLI</h3><ol><li><a href="https://cli.vuejs.org/zh/guide/" target="_blank" rel="noopener noreferrer">Doc`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ol><h3 id="loader" tabindex="-1"><a class="header-anchor" href="#loader" aria-hidden="true">#</a> Loader</h3><ol><li><a href="https://vue-loader.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">Doc`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ol><!--]-->`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/list/vue.html.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
var vue_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$e]]);
var vue_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": vue_html$1
});
const _sfc_main$x = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h3 id="\u5907\u4EFD" tabindex="-1"><a class="header-anchor" href="#\u5907\u4EFD" aria-hidden="true">#</a> \u5907\u4EFD</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
mysqldump -P3306 -h127.0.0.1 -uRoot -pPassword --skip-lock-table db_name table_name  <span class="token operator">&gt;</span> /root/file_name.sql
mysqldump -P3306 -h127.0.0.1 -uRoot -pPassword --skip-lock-table db_name table_name  <span class="token operator">&gt;</span> /root/file_name.sql
mysqldump -ulct_db_qry -plct_db_qry -hlct_confdb.tdsql.midas -P3308 --skip-lock-table db_fmp  <span class="token operator">&gt;</span> /root/db_fmp.sql

<span class="token comment"># \u9A9A\u64CD\u4F5C: \u82E5\u516C\u53F8\u5185\u7F51\u6709\u9650\u5236,\u4E0D\u7136\u4F20\u9012\u6587\u4EF6, \u53EF\u4EE5\u653E\u5728 web \u670D\u52A1\u5668\u4E0B\u5F53\u505A\u9759\u6001\u8D44\u6E90\u4E0B\u8F7D\u51FA\u6765.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><!--]-->`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/mysql/index.html.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
var index_html$c = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$d]]);
var index_html$d = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$c
});
const _sfc_main$w = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><blockquote><p>\u8FC1\u79FB\u7BA1\u7406\u7AEF\u9879\u76EE,\u63A5\u53E3\u5DF2\u7ECF\u6709\u4E86,\u65B0\u52A0\u5165\u5BFC\u51FA excel \u529F\u80FD,\u5C1D\u8BD5\u4F7F\u7528\u524D\u7AEF\u6765\u5BFC\u51FA:</p></blockquote><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>let content = \`&quot;id&quot;,&quot;number&quot;,&quot;string&quot;,&quot;smile&quot;
&quot;11&quot;,&quot;111&quot;,&quot;ssd&quot;,&quot;\u563F\u563F&quot;
&quot;22&quot;,&quot;222&quot;,&quot;kk&quot;,&quot;\u54C8\u54C8&quot;
&quot;33&quot;,&quot;333&quot;,&quot;sf&quot;,&quot;\u5475\u5475&quot;\`;
function loadFile(){
    let aLink = document.createElement(&#39;a&#39;);
    let blob = new Blob([content], { // \u8FD9\u91CC\u4F20\u5165\u6570\u7EC4
        type: &#39;text/plain&#39;
    });
    aLink.download = &#39;test.csv&#39;;
    aLink.href = URL.createObjectURL(blob);
    aLink.click();
    URL.revokeObjectURL(blob);
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><!--]-->`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/note-work/2019-12-02.html.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
var _20191202_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$c]]);
var _20191202_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _20191202_html$1
});
const _sfc_main$v = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="soft-install-log" tabindex="-1"><a class="header-anchor" href="#soft-install-log" aria-hidden="true">#</a> Soft Install Log</h1><h3 id="brew-\u5B89\u88C5\u4EE5\u53CA\u5361\u6162\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#brew-\u5B89\u88C5\u4EE5\u53CA\u5361\u6162\u95EE\u9898" aria-hidden="true">#</a> brew \u5B89\u88C5\u4EE5\u53CA\u5361\u6162\u95EE\u9898</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u66FF\u6362brew git</span>
<span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew --repo<span class="token variable">)</span></span>\u201D
git remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git

# \u66FF\u6362homebrew-core git
cd &quot;</span><span class="token variable"><span class="token variable">$(</span>brew --repo<span class="token variable">)</span></span>/Library/Taps/homebrew/homebrew-core&quot;
<span class="token function">git</span> remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git

<span class="token comment"># \u66FF\u6362\u73AF\u5883\u53D8\u91CF</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.zshrc
<span class="token builtin class-name">source</span> ~/.zshrc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="mac-\u5B89\u88C5-n-node" tabindex="-1"><a class="header-anchor" href="#mac-\u5B89\u88C5-n-node" aria-hidden="true">#</a> MAC \u5B89\u88C5 n&amp;node</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u524D\u7F6E\u73AF\u5883\uFF1A\u5B89\u88C5brew</span>
<span class="token comment"># \u5148\u5B89\u88C5\u7248\u672C\u63A7\u5236\u5DE5\u5177 n\uFF0C\u518D\u7528n\u5B89\u88C5\u5236\u5B9A\u7248\u672C\u7684node</span>
brew <span class="token function">install</span> n
<span class="token comment"># /usr/local/bin/n</span>
n i <span class="token number">12.22</span>.2 

<span class="token function">node</span> -v <span class="token comment">#v12.22.2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="npm-cnpm-\u5B89\u88C5\u5168\u5C40\u6A21\u5757\u90FD\u4F1A\u63D0\u793A\u6743\u9650\u4E0D\u8DB3-\u9700\u8981sudo" tabindex="-1"><a class="header-anchor" href="#npm-cnpm-\u5B89\u88C5\u5168\u5C40\u6A21\u5757\u90FD\u4F1A\u63D0\u793A\u6743\u9650\u4E0D\u8DB3-\u9700\u8981sudo" aria-hidden="true">#</a> npm\\cnpm \u5B89\u88C5\u5168\u5C40\u6A21\u5757\u90FD\u4F1A\u63D0\u793A\u6743\u9650\u4E0D\u8DB3\uFF0C\u9700\u8981sudo</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chown</span> -R <span class="token variable"><span class="token variable">$(</span><span class="token function">whoami</span><span class="token variable">)</span></span> <span class="token variable"><span class="token variable">$(</span><span class="token function">npm</span> config get prefix<span class="token variable">)</span></span>/<span class="token punctuation">{</span>lib/node_modules,bin,share<span class="token punctuation">}</span> <span class="token comment"># /usr/local/lib/node_modules/</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/note-work/soft_log.html.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
var soft_log_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$b]]);
var soft_log_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": soft_log_html$1
});
const _sfc_main$u = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> Test</h1><h2 id="abc" tabindex="-1"><a class="header-anchor" href="#abc" aria-hidden="true">#</a> abc</h2><h2 id="abc-1" tabindex="-1"><a class="header-anchor" href="#abc-1" aria-hidden="true">#</a> abc</h2><h3 id="abcd" tabindex="-1"><a class="header-anchor" href="#abcd" aria-hidden="true">#</a> abcd</h3><h3 id="abcd-1" tabindex="-1"><a class="header-anchor" href="#abcd-1" aria-hidden="true">#</a> abcd</h3><!--]-->`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/react/next.html.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
var next_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$a]]);
var next_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": next_html$1
});
const _sfc_main$t = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h3 id="\u57FA\u672C\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4FE1\u606F" aria-hidden="true">#</a> \u57FA\u672C\u4FE1\u606F</h3><table><thead><tr><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u59D3\u540D</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5DE5\u4F5C\u5E74\u9650</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u90AE\u7BB1 \u{1F4E7}</th><th>\u7535\u8BDD \u260E\uFE0F</th><th>\u72B6\u6001</th><th>\u65B9\u5411</th></tr></thead><tbody><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u767D\u4E91\u7426</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">5</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><a href="mailto:byq1213@qq.com">byq1213@qq.com</a></td><td><code>15903488427</code></td><td>\u5728\u804C</td><td>web\u524D\u7AEF</td></tr></tbody></table><h3 id="\u4E13\u4E1A\u6280\u80FD" tabindex="-1"><a class="header-anchor" href="#\u4E13\u4E1A\u6280\u80FD" aria-hidden="true">#</a> \u4E13\u4E1A\u6280\u80FD</h3><div class="skill-list"><ul><li><p>\u719F\u7EC3\u638C\u63E1 <code>JavaScript</code> \u8BED\u8A00\uFF0C\u4EE5\u53CA<code>ES6</code> \u6807\u51C6\uFF1B </p></li><li><p>\u719F\u7EC3\u4F7F\u7528 <code>Vue.js</code>\u6846\u67B6\uFF0C\u5E76\u77E5\u6653\u5176\u4E2D\u6838\u5FC3\u539F\u7406\uFF1B\u4EE5\u53CA\u4F7F\u7528\u8FC7 <code>React</code>\uFF1B</p></li><li><p>\u8F83\u719F\u6089\u4F7F\u7528 <code>Node.js</code> \u5F00\u53D1\uFF0C\u6709<code>Express</code>\u3001<code>Egg.js</code>\u3001<code>Nest.js</code> \u7B49\u540E\u53F0\u5F00\u53D1\u7ECF\u9A8C\uFF1B</p></li><li><p>\u65E5\u5E38\u4F7F\u7528<code>Webpack</code>\u3001<code>Vite</code>\u3001<code>Rollup.js</code> \u7B49\u6253\u5305\u6784\u5EFA\u5DE5\u5177\uFF0C\u5E76\u6709\u4E00\u4E9B\u4F18\u5316\u7ECF\u9A8C\uFF1B</p></li><li><p>\u53EF\u4EE5\u4F7F\u7528 <code>git</code> \u8FDB\u884C\u534F\u540C\u5F00\u53D1\uFF1B</p></li><li><p>\u80FD\u591F\u8BBE\u8BA1\u548C\u5F00\u53D1<code>RESTful</code> API\u63A5\u53E3\uFF1B</p></li><li><p>\u4E4B\u524D\u6709\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u3001\u5FAE\u4FE1\u516C\u4F17\u53F7\u3001\u5FAE\u4FE1\u652F\u4ED8\u3001\u4F01\u4E1A\u5FAE\u4FE1\u7B49\u5FAE\u4FE1\u7CFB\u7684\u524D\u540E\u7AEF\u5F00\u53D1\u7ECF\u9A8C\uFF1B</p></li><li><p>\u5177\u6709\u89C4\u8303\u7684\u7F16\u7A0B\u4E60\u60EF\u4E0E\u6587\u6863\u7F16\u5199\u80FD\u529B\uFF0C\u79EF\u6781\u914D\u5408\u516C\u53F8\u5404\u9879\u89C4\u8303\u5316\u5EFA\u8BBE\u5DE5\u4F5C\uFF1B</p></li><li><p>\u5177\u6709\u8F83\u597D\u7684\u5B66\u4E60\u80FD\u529B\u3001\u95EE\u9898\u5206\u6790\u80FD\u529B\uFF0C\u80FD\u72EC\u7ACB\u8C03\u8BD5\u89E3\u51B3\u95EE\u9898\uFF1B</p></li></ul></div><h3 id="\u5DE5\u4F5C\u7ECF\u5386" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u4F5C\u7ECF\u5386" aria-hidden="true">#</a> \u5DE5\u4F5C\u7ECF\u5386</h3><h4 id="\u6DF1\u5733\u5E02\u817E\u5353\u54A8\u8BE2\u6709\u9650\u516C\u53F8-2023-7-\u81F3\u4ECA-\u524D\u7AEF\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u5733\u5E02\u817E\u5353\u54A8\u8BE2\u6709\u9650\u516C\u53F8-2023-7-\u81F3\u4ECA-\u524D\u7AEF\u5F00\u53D1" aria-hidden="true">#</a> \u6DF1\u5733\u5E02\u817E\u5353\u54A8\u8BE2\u6709\u9650\u516C\u53F8 2023.7 - \u81F3\u4ECA \u524D\u7AEF\u5F00\u53D1</h4><blockquote><p>\u817E\u8BAF\u7406\u8D22\u901A\u5168\u8D44\u5B50\u516C\u53F8\uFF0C\u539F\u5916\u5305\u4E1A\u52A1\u7EC4\u63A8\u8350\u5230\u8BE5\u516C\u53F8\u3002</p></blockquote><h4 id="\u6DF1\u5733\u5E02\u6DA6\u8FC5\u7535\u8BDD\u5546\u52A1\u6709\u9650\u516C\u53F8-2019-9-2023-6-\u524D\u7AEF\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u5733\u5E02\u6DA6\u8FC5\u7535\u8BDD\u5546\u52A1\u6709\u9650\u516C\u53F8-2019-9-2023-6-\u524D\u7AEF\u5F00\u53D1" aria-hidden="true">#</a> \u6DF1\u5733\u5E02\u6DA6\u8FC5\u7535\u8BDD\u5546\u52A1\u6709\u9650\u516C\u53F8 2019.9 - 2023.6 \u524D\u7AEF\u5F00\u53D1</h4><blockquote><p>\u817E\u8BAF\u7406\u8D22\u901A\u5916\u5305\u5C97\uFF0C\u4E3B\u8981\u8D1F\u8D23\u7406\u8D22\u901A\u9879\u76EE\u7EC4\u7684\u5185\u7F51\u7CFB\u7EDF\u7684\u5F00\u53D1\u548C\u7EF4\u62A4\u3002</p></blockquote><h4 id="\u5C71\u897F\u4E00\u515C\u7F51\u7EDC\u79D1\u6280\u6709\u9650\u516C\u53F8-2018-1-2019-6-\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5168\u6808\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u5C71\u897F\u4E00\u515C\u7F51\u7EDC\u79D1\u6280\u6709\u9650\u516C\u53F8-2018-1-2019-6-\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5168\u6808\u5F00\u53D1" aria-hidden="true">#</a> \u5C71\u897F\u4E00\u515C\u7F51\u7EDC\u79D1\u6280\u6709\u9650\u516C\u53F8 2018.1 - 2019.6 \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5168\u6808\u5F00\u53D1</h4><blockquote><p>\u8D1F\u8D23\u672C\u516C\u53F8\u5185\u7684\u5168\u6808\u5F00\u53D1\u5DE5\u4F5C\uFF0C\u6D89\u53CA\u5C0F\u7A0B\u5E8F+Node.js\u6280\u672F\u6808\u3002</p></blockquote><h3 id="\u9879\u76EE\u7ECF\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u7ECF\u9A8C" aria-hidden="true">#</a> \u9879\u76EE\u7ECF\u9A8C</h3><p><strong>\u7406\u8D22\u901A\u524D\u7AEF\u6D3B\u52A8\u8FD0\u8425\u4E2D\u53F0-<code>Vue3</code>+<code>AntUI</code></strong></p><blockquote><p>\u8BE5\u5E73\u53F0\u5305\u542B\u7406\u8D22\u901A\u53CA\u5144\u5F1F\u4E1A\u52A1\u6240\u6709\u7684\u6D3B\u52A8\u521B\u5EFA\u548C\u6295\u653E\u63A8\u5E7F\u3002<br> \u5F00\u53D1\u7AD9\u5916\u6D88\u606F\u529F\u80FD\uFF0C\u5C06\u4E4B\u524D\u7684\u516C\u4F17\u53F7\u63A8\u9001\u529F\u80FD\u8FC1\u79FB\u81F3\u672C\u5E73\u53F0\uFF0C\u5E76\u652F\u6301\u81EA\u6D4B\u3001\u767D\u540D\u5355\u53CA\u5BA1\u6279\u6D41\u7A0B\u7B49\uFF1B<br> \u5F00\u53D1\u4E86\u901A\u7528\u7684\u7EDF\u8BA1\u7EC4\u4EF6\u3001\u5BA1\u6279\u6D41\u7A0B\u7EC4\u4EF6\u548C\u767D\u540D\u5355\u7EC4\u4EF6\uFF0C\u540E\u671F\u7528\u5728\u4E86 APP \u63A8\u9001\u4E0A\uFF1B<br> \u5F00\u53D1\u4E86\u89C4\u5219\u529F\u80FD\u76F8\u5173\u7684\u6807\u7B7E\u3001\u5206\u7C7B\u53CA\u4E8B\u4EF6\u7684\u7BA1\u7406\u7B49\uFF1B<br> \u5F00\u53D1\u4E86\u901A\u7528\u89C4\u5219\u7EC4\u4EF6\uFF0C\u652F\u6301\u6307\u5B9A\u7684\u753B\u50CF\u7684\u7528\u6237\u7B5B\u9009\u548C\u4E8B\u4EF6\u89E6\u53D1\u8BBE\u7F6E\uFF0C\u751F\u6210\u52A8\u6001\u5BA2\u7FA4\uFF0C\u5728\u5176\u4ED6\u4E1A\u52A1\u5C42\u4E5F\u53EF\u590D\u7528\uFF1B<br> \u4F4E\u4EE3\u7801\u7F16\u8F91\u5668\u4E2D\u5404\u4E2A\u7EC4\u4EF6\u7684\u8FED\u4EE3\u7EF4\u62A4\u5DE5\u4F5C\uFF1B<br> \u7EF4\u62A4\u6D3B\u52A8\u7CFB\u7EDF\u7684\u65E5\u5E38\u95EE\u9898\u53CA\u4F53\u9A8C\u4F18\u5316\u95EE\u9898\u3002<br></p></blockquote><p><strong>\u7406\u8D22\u901A\u6D3B\u52A8\u8FD0\u8425\u7CFB\u7EDF-<code>PHP</code>+<code>Vue2</code>+<code>ElementUI</code></strong></p><blockquote><p>\u8BE5\u9879\u76EE\u4E3A\u7406\u8D22\u901A\u5404\u4E2A\u6D3B\u52A8\u63D0\u4F9B\u521B\u5EFA\u3001\u5BA1\u6838\u548C\u4E0A\u7EBF\u7B49\u529F\u80FD\uFF0C<br> \u6D3B\u52A8\u65E5\u62A5\u3001\u7528\u6237\u9886\u5956\u3001\u5546\u6237\u53F7\u7ECF\u8D39\u4EE5\u53CA\u7B49\u67E5\u8BE2\u4EE5\u53CA\u7406\u8D22\u901A\u516C\u4F17\u53F7\u7684\u5173\u6CE8\u7BA1\u7406\u83DC\u5355\u7BA1\u7406\uFF1B<br> \u5728\u8BE5\u9879\u76EE\u4E2D\u8D1F\u8D23\u7EF4\u62A4\u6D3B\u52A8\u548C\u5956\u54C1\u7684\u65E5\u5E38\u95EE\u9898\u3002<br> \u8D1F\u8D23\u63A5\u5165\u4E86\u516C\u53F8\u5185\u7684\u6743\u9650\u7CFB\u7EDF\uFF0C\u652F\u6301\u4E8C\u6B21\u626B\u7801\u767B\u5F55\uFF1B<br> \u5F00\u53D1\u7EA2\u5305\u8865\u53D1\u529F\u80FD\uFF0C\u63A5\u5165\u5185\u90E8\u4F7F\u7528\u7684\u67D0\u52A0\u5BC6\u63A5\u53E3\uFF1B<br> \u5F00\u53D1\u77ED\u4FE1\u6A21\u677F\u7BA1\u7406\u529F\u80FD\uFF0C\u652F\u6301\u77ED\u4FE1\u6A21\u677F\u53CA\u5173\u952E\u8BCD\u7684\u7684\u589E\u5220\u6539\u3002<br></p></blockquote><p><strong>\u7406\u8D22\u901A\u6295\u653E\u4E2D\u53F0-<code>Vue2</code>+<code>Egg.js</code>+<code>TS</code></strong></p><blockquote><p>\u8BE5\u9879\u76EE\u4E3A\u7406\u8D22\u901A\u5404\u4E2A\u6295\u653E\u4F4D\u7F6E\u63D0\u4F9B\u7F16\u8F91\u7B56\u7565\uFF0C\u51E0\u4E4E\u7406\u8D22\u901A\u5BA2\u6237\u7AEF\u6BCF\u4E2A\u9875\u9762\u7684\u5C55\u793A\u90FD\u4F9D\u6258\u4E8E\u8BE5\u7CFB\u7EDF\u3002 <br> \u6BCF\u4E2A\u9875\u9762\u53CA\u91CC\u9762\u7684\u6BCF\u4E2A\u4F4D\u7F6E\u90FD\u53EF\u4EE5\u533A\u5206\u7528\u6237\u6295\u653E\u5408\u9002\u7684\u57FA\u91D1\u3001\u5B9A\u5411\u6D3B\u52A8\u63A8\u9001\u5F39\u6846\u7B49\u3002 <br> \u53EF\u4EE5\u7075\u6D3B\u7F16\u8F91\u4E00\u5B9A\u7684\u7528\u6237\u753B\u50CF\u89C4\u5219\u548C\u4E00\u4E9B\u7528\u6237\u884C\u4E3A\u4E8B\u4EF6\uFF0C\u751F\u6210\u4E00\u5B9A\u7684\u4EFB\u52A1\u89C4\u5219\uFF1B<br> \u8D1F\u8D23\u7EF4\u62A4\u76F8\u5173\u6295\u653E\u4F4D\u7F6E\u4FE1\u606F\uFF1B<br> \u5F00\u53D1\u91CD\u70B9\u6C60\u529F\u80FD\uFF0C\u65B9\u4FBF\u7B5B\u9009\u5F52\u7C7B\u91CD\u70B9\u57FA\u91D1\uFF1B<br> \u5F00\u53D1\u7EF4\u62A4\u516C\u4F17\u53F7\u6A21\u677F\u529F\u80FD\uFF1B<br> \u5C06<strong>\u7406\u8D22\u901A\u793E\u533A\u5E73\u53F0</strong>\u4E2D\u7684\u6295\u653E\u529F\u80FD\u63A5\u5165\u5230\u672C\u7CFB\u7EDF\u4E2D\uFF0C\u590D\u7528\u540E\u53F0\u7684\u6295\u653E\u63A5\u53E3\u3002<br></p></blockquote><p><strong>\u7406\u8D22\u901A\u4F4E\u4EE3\u7801\u5316\u4E50\u9AD8\u5F0F\u7EC4\u4EF6\u62FC\u88C5\u7CFB\u7EDF-<code>Vue2</code>+<code>ElementUI</code>+<code>Expressjs</code></strong></p><blockquote><p>\u8BE5\u9879\u76EE\u9762\u5411\u8FD0\u8425\u4EA7\u54C1\u540C\u5B66\uFF0C\u4E00\u952E\u5F0F\u62D6\u62FD\u7EC4\u4EF6\u751F\u6210\u63A8\u5E7F\u9875\u9762\u3002<br> \u53EF\u652F\u6301\u57FA\u91D1\u6DA8\u5E45\u5C55\u793A\u3001\u7EA2\u5305\u9886\u53D6\u3001\u5173\u6CE8\u516C\u4F17\u53F7\u548C\u4E00\u4E9B\u57FA\u7840\u529F\u80FD\uFF0C<br> \u751F\u6210\u9875\u9762\u65E0\u9700\u5F00\u53D1\u540C\u5B66\u53C2\u4E0E\u53D1\u5E03\uFF0C\u4E00\u952E\u53D1\u5E03\u7EBF\u4E0A\u3002<br> \u8D1F\u8D23\u7EC4\u4EF6\u6A21\u5757\u7684\u5F00\u53D1\u548C\u7EF4\u62A4\uFF1B<br> \u5F00\u53D1\u5BCC\u6587\u672C\u652F\u6301\u57FA\u91D1\u5BF9\u6BD4\u8FDB\u5EA6\u6761\u9009\u9879\uFF1B<br> \u5F00\u53D1\u7EA2\u5305\u9886\u53D6\u7EC4\u4EF6\uFF0C\u652F\u6301\u7528\u6237\u5F39\u7A97\u9886\u53D6\u7EA2\u5305\uFF1B<br> \u5F00\u53D1\u5012\u8BA1\u65F6\u7EC4\u4EF6\u3001\u57FA\u91D1\u5217\u8868\u3001\u7EC4\u5408\u5217\u8868\u7B49\u7EC4\u4EF6\uFF1B<br> \u9875\u9762\u4F53\u9A8C\u4F18\u5316\u7B49\u3002<br></p></blockquote><p><strong>\u7406\u8D22\u901A\u793E\u533A\u5E73\u53F0-<code>Vue2</code>+<code>ElementUI</code>+<code>Expressjs</code></strong></p><blockquote><p>\u4E3A\u7406\u8D22\u901A\u5E73\u53F0\u5185\u7684\u6BCF\u4E00\u652F\u57FA\u91D1\u5F00\u653E\u8BA8\u8BBA\u533A\u5165\u53E3\u3002<br> \u53EF\u5B9E\u65F6\u5BA1\u6838\u7528\u6237\u53D1\u8A00\u89C4\u8303\uFF0C\u53EF\u5F00\u653E\u4E00\u4E9B\u5927V\u53F7\u6765\u6295\u653E\u63A8\u9001\u7406\u8D22\u6587\u7AE0\uFF0C\u63D0\u5347\u5E73\u53F0\u7528\u6237\u7406\u8D22\u7D20\u8D28\u3002<br> \u4E0E\u5144\u5F1F\u90E8\u95E8\u5408\u4F5C\u4E3A\u5176\u5F00\u653E\u7F6E\u9876\u63A5\u53E3\uFF0C\u81EA\u7531\u5BA1\u6838\u673A\u6784\u65B9\u9700\u8981\u66DD\u5149\u7684\u6587\u7AE0\u3002<br> \u4F7F\u7528<code>Expressjs</code> \u670D\u52A1\u8D1F\u8D23\u4E2D\u95F4\u8F6C\u53D1\u540E\u53F0\u63A5\u53E3\u53CA\u5904\u7406\u4E1A\u52A1\u903B\u8F91\uFF1B<br> \u524D\u7AEF\u4F7F\u7528 <code>Vue2</code>+<code>ElementUI</code> \u5B9E\u73B0\u6574\u4F53\u7684\u524D\u7AEF\u9875\u9762\u6784\u9020\u3002<br> \u670D\u52A1\u6784\u5EFA\u4E0A\u901A\u8FC7\u516C\u53F8\u901A\u7528\u7684 CI \u81EA\u52A8\u5316\u65B9\u6848\uFF0C\u5B9E\u73B0\u521D\u59CB\u96F6\u90E8\u7F72\uFF0C\u53D8\u66F4\u81EA\u52A8\u5316\u529F\u80FD\u3002<br></p></blockquote><p><strong>\u817E\u8BAF\u5F00\u6E90\u7EC4\u4EF6\u5E93-<code>TDesign</code>+<code>Vue</code>+<code>TSX</code></strong></p><blockquote><p>2020\u5E74\u5F00\u59CB\u53C2\u4E0E\u8BE5\u9879\u76EEVue\u7248\u672C\u90E8\u5206\u7EC4\u4EF6\u7684\u4F18\u5316\u548C\u529F\u80FD\u8FED\u4EE3\uFF0C<br> \u8BE5\u9879\u76EE\u7EC4\u9879\u76EE\u5DF2\u7531\u5185\u90E8\u5F00\u6E90\u5F00\u653E\u5230github\u5916\u7F51\u5F00\u6E90\uFF0C<br> \u8D1F\u8D23\u90E8\u5206\u7EC4\u4EF6\u5F00\u53D1\uFF0C\u5C0F\u7A0B\u5E8F\u7AEF\u65E0\u969C\u788D\u8986\u76D6\u7F16\u5199\uFF1B  \u4EE5\u53CA\u90E8\u5206\u7EC4\u4EF6\u7684\u6D4B\u8BD5\u7528\u4F8B\u548C\u793A\u4F8B\u4EE3\u7801\u7F16\u5199\uFF1B<br> \u65E5\u5E38\u5728 github issue\u4E0A\u89E3\u7B54\u89E3\u51B3\u7EC4\u4EF6\u76F8\u5173\u95EE\u9898\u3002<br> \u8BE6\u89C1 <a href="https://tdesign.tencent.com/" target="_blank" rel="noopener noreferrer">https://tdesign.tencent.com`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>\u3002</p></blockquote><p><strong>\u201C\u623F\u5C0F\u94FA\u201C \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\uFF08\u623F\u4EA7\u7ECF\u7EAA\u4EBA\u8425\u9500\u5DE5\u5177\uFF09</strong></p><blockquote><p>C\u7AEF\uFF08\u623F\u6E90\u5C55\u793A\uFF09\u548CB\u7AEF\uFF08\u7BA1\u7406\u623F\u6E90\uFF09\u90FD\u4F7F\u7528\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u6846\u67B6 <code>wepy</code> \u5F00\u53D1\uFF1B <br> PC\u7AEF\u4F7F\u7528 <code>Vue2</code> + <code>ElementUI</code> \u5F00\u53D1\uFF1B <br> \u540E\u7AEF\u4F7F\u7528 <code>Egg.js</code>\u6846\u67B6\u5F00\u53D1\uFF1B <br> \u7ECF\u7EAA\u4EBA\u4F7F\u7528\u5C0F\u7A0B\u5E8F\u751F\u6210\u5C5E\u4E8E\u81EA\u5DF1\u7684\u623F\u6E90\u6D77\u62A5\uFF0C\u5728\u670B\u53CB\u5708\u3001\u516C\u4F17\u53F7\u63A8\u5E7F \u3002<br></p></blockquote><h3 id="\u6559\u80B2\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#\u6559\u80B2\u80CC\u666F" aria-hidden="true">#</a> \u6559\u80B2\u80CC\u666F</h3><ul><li>2015.9 - 2018.6 \u592A\u539F\u7406\u5DE5\u5927\u5B66 \u8BA1\u7B97\u673A\u7F51\u7EDC\u4E13\u4E1A</li></ul><!--]-->`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/resume/index.html.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
var index_html$a = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$9]]);
var index_html$b = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$a
});
const _sfc_main$s = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h3 id="\u57FA\u672C\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4FE1\u606F" aria-hidden="true">#</a> \u57FA\u672C\u4FE1\u606F</h3><table><thead><tr><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u59D3\u540D</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u6027\u522B</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5E74\u9F84</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5FAE\u4FE1 \u{1F603}</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u90AE\u7BB1 \u{1F4E7}</th><th>\u7535\u8BDD \u260E\uFE0F</th><th>\u72B6\u6001</th></tr></thead><tbody><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u767D\u4E91\u7426</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u7537</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">23</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>byq_1213</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><a href="mailto:1213567900@qq.com">1213567900@qq.com</a></td><td><code>15903488427</code></td><td>\u5728\u804C</td></tr></tbody></table><h3 id="\u4E13\u4E1A\u6280\u80FD" tabindex="-1"><a class="header-anchor" href="#\u4E13\u4E1A\u6280\u80FD" aria-hidden="true">#</a> \u4E13\u4E1A\u6280\u80FD</h3><ul><li><p>\u7CBE\u901A <code>JavaScript</code> \u8BED\u8A00\uFF0C\u5BF9\u5F02\u6B65\u6A21\u5F0F\u7F16\u7A0B\u6709\u6DF1\u523B\u7406\u89E3\uFF1B</p></li><li><p>\u7CBE\u901A <code>Node.js</code> \u6807\u51C6\u5E93\u7684\u4F7F\u7528\uFF0C\u80FD\u5B8C\u6210\u76F8\u5E94\u7684\u6269\u5C55\u5F00\u53D1\uFF1B</p></li><li><p>\u7CBE\u901A <code>MongoDB</code> \u6570\u636E\u5E93\u7BA1\u7406\u548C\u5F00\u53D1\uFF1B</p></li><li><p>\u7CBE\u901A <code>ES6</code> \u89C4\u8303\uFF1B</p></li><li><p>\u7CBE\u901A <code>Vue.js</code> \u7B49\u6846\u67B6\uFF0C\u5177\u6709\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u7ECF\u9A8C\uFF1B</p></li><li><p>\u6709\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u3001\u5FAE\u4FE1\u516C\u4F17\u53F7\u3001\u5FAE\u4FE1\u652F\u4ED8\u3001\u4F01\u4E1A\u5FAE\u4FE1\u7B49\u5FAE\u4FE1\u7CFB\u7684\u524D\u540E\u7AEF\u5F00\u53D1\u7ECF\u9A8C\uFF1B</p></li><li><p>\u80FD\u591F\u8BBE\u8BA1\u548C\u5F00\u53D1\u5BF9\u5916<code>RESTful</code> API\u63A5\u53E3\uFF1B</p></li><li><p>\u53EF\u4EE5\u4F7F\u7528 <code>git</code> \u8FDB\u884C\u534F\u540C\u5F00\u53D1\uFF1B</p></li><li><p>\u5177\u6709 <code>Express</code>\u3001<code>Koa2</code>\u3001<code>Egg.js</code> \u7B49\u6846\u67B6\u9879\u76EE\u5F00\u53D1\u7ECF\u9A8C\uFF1B</p></li><li><p>\u5177\u6709\u89C4\u8303\u7684\u7F16\u7A0B\u4E60\u60EF\u4E0E\u6587\u6863\u7F16\u5199\u80FD\u529B\uFF0C\u79EF\u6781\u914D\u5408\u516C\u53F8\u5404\u9879\u89C4\u8303\u5316\u5EFA\u8BBE\u5DE5\u4F5C\uFF1B</p></li><li><p>\u5177\u6709\u8F83\u597D\u7684\u5B66\u4E60\u80FD\u529B\u3001\u95EE\u9898\u5206\u6790\u80FD\u529B\uFF0C\u80FD\u72EC\u7ACB\u8C03\u8BD5\u89E3\u51B3\u95EE\u9898\uFF1B</p></li></ul><h3 id="\u9879\u76EE\u7ECF\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u7ECF\u9A8C" aria-hidden="true">#</a> \u9879\u76EE\u7ECF\u9A8C</h3><h4 id="\u5C71\u897F\u4E00\u515C\u7F51\u7EDC\u79D1\u6280\u6709\u9650\u516C\u53F8-2018-1-\u73B0\u4ECA-\u5168\u6808\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u5C71\u897F\u4E00\u515C\u7F51\u7EDC\u79D1\u6280\u6709\u9650\u516C\u53F8-2018-1-\u73B0\u4ECA-\u5168\u6808\u5F00\u53D1" aria-hidden="true">#</a> \u5C71\u897F\u4E00\u515C\u7F51\u7EDC\u79D1\u6280\u6709\u9650\u516C\u53F8 2018.1 - \u73B0\u4ECA \u5168\u6808\u5F00\u53D1</h4><ul><li>\u201C\u623F\u5C0F\u94FA\u201C \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\uFF08\u623F\u4EA7\u7ECF\u7EAA\u4EBA\u8425\u9500\u5DE5\u5177\uFF09</li></ul><blockquote><p>C\u7AEF\uFF08\u623F\u6E90\u5C55\u793A\uFF09\u548CB\u7AEF\uFF08\u7BA1\u7406\u623F\u6E90\uFF09\u90FD\u4F7F\u7528\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u6846\u67B6 <code>wepy</code> \u8FDB\u884C\u5F00\u53D1\u5F00\u53D1 <br> PC\u7AEF\u4F7F\u7528 <code>Vue.js</code> + <code>ElementUI</code> \u5F00\u53D1 <br> \u540E\u7AEF\u4F7F\u7528 <code>Node.js</code> \u5E73\u53F0\uFF0C\u4F7F\u7528 <code>Egg.js</code> \u4F01\u4E1A\u7EA7\u6846\u67B6\u5F00\u53D1 <br> \u7ECF\u7EAA\u4EBA\u4F7F\u7528\u5C0F\u7A0B\u5E8F\u751F\u6210\u5C5E\u4E8E\u81EA\u5DF1\u7684\u623F\u6E90\u6D77\u62A5\uFF0C\u5728\u670B\u53CB\u5708\u3001\u516C\u4F17\u53F7\u63A8\u5E7F <br></p></blockquote><ul><li>\u201CVR\u65F6\u7A7A\u865A\u73B0\u7EBF\u4E0B\u4F53\u9A8C\u4E2D\u5FC3\u201D \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F</li></ul><blockquote><p>\u6280\u672F\u6808\u540C\u4E0A <br> \u7528\u6237\u53EF\u4EE5\u8D2D\u4E70\u4F1A\u5458\u5361\uFF0C\u5728\u7EBF\u9884\u7EA6\u4F53\u9A8C\u673A\u5668 <br> \u5546\u5BB6\u53EF\u4EE5\u4ECE\u4E00\u4E2A\u9690\u85CF\u5165\u53E3\u8FDB\u5165\u76F4\u63A5\u67E5\u770B\u9884\u7EA6\u8BA2\u5355 <br></p></blockquote><ul><li>\u201C\u667A\u6167\u8B66\u52A1\u201D \u89C6\u9891\u62A5\u8B66\u5C0F\u7A0B\u5E8F</li></ul><blockquote><p>\u5C0F\u7A0B\u5E8F\u7AEF\u4F7F\u7528\u539F\u751F\u5F00\u53D1\uFF0C\u540E\u7AEF\u4E3B\u8981\u4F7F\u7528 <code>PHP</code> + <code>ThinkPHP</code> <br> \u89E3\u51B3\u7535\u8BDD\u62A5\u8B66\u65F6\u5371\u9669\u72B6\u51B5\u4E0D\u80FD\u4ED4\u7EC6\u63D0\u4F9B\u7ED9\u8B66\u65B9\u7684\u75DB\u70B9\uFF0C\u6709\u6548\u4E3A\u62A5\u8B66\u4EBA\u63D0\u4F9B\u5E2E\u52A9\uFF0C\u6709\u6548\u6253\u51FB\u72AF\u7F6A <br> \u89C6\u9891\u548C\u97F3\u9891\u901A\u8BDD\u529F\u80FD\u4F7F\u7528\u817E\u8BAF\u4E91\u63D0\u4F9B\u7684 <code>RTC\u4E91\u97F3\u89C6\u9891\u901A\u8BDD</code> <br> \u5B9E\u65F6\u4EA4\u4E92 <code>WebSocket</code> \u4F7F\u7528 <code>Koa</code> + <code>Socket.io</code> \uFF0C\u6765\u914D\u5408\u4E3B\u540E\u7AEF\u7A0B\u5E8F\u6765\u4F7F\u7528 <br></p></blockquote><ul><li>\u201C\u5C0F\u5E97\u4F18\u6C47\u201D \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F</li></ul><blockquote><p>\u4F7F\u7528 <code>TouchUI</code> \u8FDB\u884C\u5C0F\u7A0B\u5E8F\u5FEB\u901F\u6253\u5305 <br> \u4E24\u4EBA\u534F\u540C\u5F00\u53D1\uFF0C\u4E00\u4EBA\u7BA1\u7406\u7AEF\uFF0C\u4E00\u4EBA\u5BA2\u6237\u7AEF\uFF0C\u6700\u540E\u5408\u5E76\u6210\u4E00\u4E2A\u5C0F\u7A0B\u5E8F <br> \u7A0B\u5E8F\u542B\u6709\u73B0\u5728\u6D41\u884C\u7684\u8425\u9500\u6D3B\u52A8\u65B9\u6848\uFF1A\u62FC\u56E2\u3001\u780D\u4EF7\u3001\u79D2\u6740\uFF0C\u4E3A\u5BA2\u6237\u5E26\u6765\u4E30\u539A\u6536\u76CA <br></p></blockquote><ul><li>\u201C\u4E32\u4E32\u53D4\u53D4\u201D \u591A\u5546\u5BB6 \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F</li></ul><blockquote><p>\u5C0F\u7A0B\u5E8F\u7AEF\u4F7F\u7528\u539F\u751F\u5F00\u53D1\uFF0C\u540E\u7AEF\u4F7F\u7528 <code>Express</code> <br> \u7528\u6237\u53EF\u4EE5\u5728\u5C0F\u7A0B\u5E8F\u7AEF\u8FDB\u884C\u6307\u5B9A\u95E8\u5E97\u7684\u9884\u7EA6\u70B9\u9910\u3001\u50A8\u503C\u3001\u6838\u9500\u3001\u5916\u5356 <br> \u5546\u5BB6\u53EF\u4EE5\u5728\u5546\u6237\u7AEF\u5BF9\u7528\u6237\u8FDB\u884C\u626B\u7801\u6838\u9500\u3001\u626B\u7801\u50A8\u503C <br></p></blockquote><ul><li>\u201C\u5FB7\u5B87\u521B\u661F\u201D PC\u7F51\u7AD9</li></ul><blockquote><p>\u4E00\u4E2A\u666E\u901A\u7684\u5C55\u793A\u578B\u7F51\u7AD9<br> \u4F7F\u7528 <code>Grunt</code> \u6784\u5EFA\u524D\u7AEF\u9875\u9762<br> \u6A21\u677F\u5F15\u64CE\u9009\u7528<code>pug</code> \u4E3A\u6A21\u677F\u5F15\u64CE <br><code>Koa</code> \u914D\u5408\u540E\u7AEF\u6E32\u67D3 <br></p></blockquote><h3 id="\u6559\u80B2\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#\u6559\u80B2\u80CC\u666F" aria-hidden="true">#</a> \u6559\u80B2\u80CC\u666F</h3><ul><li>2015.9 - 2018.6 \u592A\u539F\u7406\u5DE5\u5927\u5B66 \u8BA1\u7B97\u673A\u7F51\u7EDC\u4E13\u4E1A</li></ul><!--]-->`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/resume/README_2019.html.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
var README_2019_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$8]]);
var README_2019_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": README_2019_html$1
});
const _sfc_main$r = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="\u81EA\u6211\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u81EA\u6211\u4ECB\u7ECD" aria-hidden="true">#</a> \u81EA\u6211\u4ECB\u7ECD</h2><p>\u5C71\u897F\u4EBA 17 \u5E74\u5927\u4E13\u6BD5\u4E1A\uFF0C \u5728\u592A\u539F\u505A\u4E86 1 \u5E74\u534A\u5C0F\u7A0B\u5E8F\u5168\u6808\u5DE5\u4F5C\u3002\u5B66\u5230\u4E86\u5F88\u591A\u4E1C\u897F\u4F46\u7531\u4E8E\u592A\u539F\u7684\u8F6F\u4EF6\u73AF\u5883\u4E0D\u7406\u60F3\uFF0C\u6CA1\u6709\u8FDB\u6B65\u7A7A\u95F4\u4E5F\u6CA1\u6709\u53D1\u6325\u4EF7\u503C\uFF0C\u9042 \u5728 2019 \u5E74\u6765\u5230\u6DF1\u5733\uFF0C\u5728\u817E\u8BAF\u7406\u8D22\u901A\u524D\u7AEF\u7EC4\u505A\u5916\u5305\u9A7B\u573A\u5DE5\u4F5C\u3002 \u4E3B\u8981\u8D1F\u8D23\u7EF4\u62A4\u7EC4\u5185\u5185\u7F51\u7CFB\u7EDF\uFF0C\u53CA\u4E00\u4E9Bh5 c \u7AEF\u9875\u9762\u7684\u5F00\u53D1\u3002 \u65E5\u5E38\u4F1A\u548C\u540E\u53F0\u5BF9\u63A5\u4E00\u4E9B\u6570\u636E\u63A5\u53E3\u3002\u914D\u5408\u7EC4\u5185\u5BF9\u67D0\u4E9B\u5DE5\u5177\u7CFB\u7EDF\u505A\u4E00\u4E9B\u4F18\u5316\u6539\u9020\uFF08\u56FE\u7247\u4E0A\u4F20\u3001\u6D4B\u8BD5\u8D26\u53F7\u7533\u8BF7\u3001\u65E5\u5FD7\u67E5\u8BE2\uFF09\u7B49\u5DE5\u4F5C \u4E3B\u8981\u6280\u672F\u6808\u662F vue+ nodejs\uFF0C\u90E8\u5206\u7CFB\u7EDF\u4E5F\u7528\u5230\u4E86 react\uFF0C</p><p>\u524D\u7AEF\u8FD9\u8FB9\u4E5F\u4F1A\u81EA\u5DF1\u53BB\u914D\u7F6E\u81EA\u52A8\u5316\u90E8\u7F72 CI,\u8FBE\u5230\u5FEB\u901F\u5F00\u53D1\u3002</p><h2 id="\u9879\u76EE\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u4ECB\u7ECD" aria-hidden="true">#</a> \u9879\u76EE\u4ECB\u7ECD</h2><ul><li><p>\u9700\u6C42\u80CC\u666F</p></li><li><p>\u65B9\u6848\u5236\u5B9A</p></li><li><p>\u5206\u6790\u8FC7\u7A0B</p></li><li><p>\u9879\u76EE\u590D\u76D8</p></li><li><p>\u8D1F\u8D23\u7684\u4E1A\u52A1\u5185\u5BB9</p></li><li><p>\u6280\u672F\u6539\u9020</p></li><li><p>\u62BD\u8C61\u4E0E\u603B\u7ED3</p></li><li><p>\u5BF9\u56E2\u961F\u7684\u8D21\u732E</p></li><li><p>\u5DE5\u4F5C\u5185\u5BB9\u8FDB\u6B65</p></li><li><p>\u5B66\u5230\u4E86\u4EC0\u4E48</p></li><li><p>\u672C\u804C\u5DE5\u4F5C</p></li><li><p>\u73B0\u72B6\u6539\u9020</p></li><li><p>\u603B\u7ED3\u6587\u6863</p></li></ul><h2 id="\u9AD8\u7CBE\u5C16\u9879\u76EE-\u53EF\u8BF4\u9053\u7684\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u7CBE\u5C16\u9879\u76EE-\u53EF\u8BF4\u9053\u7684\u9879\u76EE" aria-hidden="true">#</a> \u9AD8\u7CBE\u5C16\u9879\u76EE\uFF0C\u53EF\u8BF4\u9053\u7684\u9879\u76EE</h2><blockquote><p>\u6682\u65F6\u538C\u70E6\u4E86\u5237\u516B\u80A1\u6587\uFF0C\u9700\u8981\u4ECE\u65B0\u9C9C\u9879\u76EE\u4E0A\u5B66\u4E60\u65B0\u4E1C\u897F\u3002</p></blockquote><h3 id="\u65E5\u5FD7\u5207\u7247\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7\u5207\u7247\u8BB0\u5F55" aria-hidden="true">#</a> \u65E5\u5FD7\u5207\u7247\u8BB0\u5F55</h3><h3 id="\u516C\u53F8\u5185\u90E8\u52A0\u89E3\u5BC6\u63A5\u53E3\u6539\u5199-php" tabindex="-1"><a class="header-anchor" href="#\u516C\u53F8\u5185\u90E8\u52A0\u89E3\u5BC6\u63A5\u53E3\u6539\u5199-php" aria-hidden="true">#</a> \u516C\u53F8\u5185\u90E8\u52A0\u89E3\u5BC6\u63A5\u53E3\u6539\u5199 php</h3><h3 id="\u65E5\u5FD7\u76D1\u63A7-\u5F85\u5B8C\u6210" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7\u76D1\u63A7-\u5F85\u5B8C\u6210" aria-hidden="true">#</a> \u65E5\u5FD7\u76D1\u63A7\uFF08\u5F85\u5B8C\u6210\uFF09</h3><p>\u652F\u6301\u8BF7\u6C42\u4EBA\u8BB0\u5F55</p><h3 id="\u56FE\u7247\u4E0A\u4F20\u7CFB\u7EDF-\u770B\u8FD8\u6709\u5565\u4F18\u5316\u7684\u70B9-\u548C\u96BE\u70B9\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u4E0A\u4F20\u7CFB\u7EDF-\u770B\u8FD8\u6709\u5565\u4F18\u5316\u7684\u70B9-\u548C\u96BE\u70B9\u8BB0\u5F55" aria-hidden="true">#</a> \u56FE\u7247\u4E0A\u4F20\u7CFB\u7EDF\uFF0C\u770B\u8FD8\u6709\u5565\u4F18\u5316\u7684\u70B9\uFF0C\u548C\u96BE\u70B9\u8BB0\u5F55</h3><!--]-->`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/resume/note.html.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
var note_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$7]]);
var note_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": note_html$1
});
const _sfc_main$q = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><blockquote><p>\u9488\u5BF9\u7B80\u5386\u63D0\u5230\u7684\uFF0C\u53EF\u80FD\u51FA\u73B0\u7684\u5751</p></blockquote><ul><li>webapack \u4F18\u5316\u7ECF\u5386\uFF0C\u63D2\u4EF6\u548C loader \u7684\u533A\u522B</li><li>Vite \u548C webpack \u7684\u533A\u522B\uFF0C\u5404\u6709\u4EC0\u4E48\u4F18\u52BF\u3002</li><li>Vue \u548C React \u7684\u533A\u522B\u3001\u58F0\u660E\u5468\u671F\u3001\u5171\u540C\u70B9</li><li>\u5982\u679C\u662F\u504F React \u7684\u9879\u76EE\u7EC4\uFF0C\u53EF\u80FD\u4F1A\u95EE\u5230 Route\u3001redux\u3001Native \u7B49\u95EE\u9898</li></ul><p>\u624B\u5199\u67D0\u4E9B\u5B9E\u73B0</p><ul><li>bind apply call</li><li>new</li><li>\u7EE7\u627F</li></ul><p>\u7EE7\u627F\u548C\u539F\u578B\u94FE \u6D4F\u89C8\u5668\u7F13\u5B58</p><!--]-->`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/resume/patch.html.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
var patch_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$6]]);
var patch_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": patch_html$1
});
const _sfc_main$p = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<ul${serverRenderer.ssrRenderAttrs(_attrs)}><li>\u4E3A\u4EC0\u4E48\u6BD4\u8F83\u5411\u5F80\u505A C \u7AEF? \u4ECA\u5929\u63A5\u7684 C\u7AEF\u9700\u6C42\u660E\u767D\u4E86. \u4EBA C\u7AEF\u7684\u9700\u6C42\u5355\u90FD\u7279\u5B8C\u5584, &quot;\u4E0A\u534A\u5E74\u5565\u6307\u6807&quot;, &quot;\u4ECA\u5E74\u7167\u8FD9\u4E2A\u6570\u636E\u8D70, \u4F1A\u6709\u591A\u5C11\u7528\u6237\u600E\u5730, \u8FD9\u4E9B\u7528\u6237\u80FD\u591F\u8F6C\u5316\u591A\u5C11\u91CF, \u6210\u672C\u662F\u591A\u5C11&quot;. \u8FD9\u4E9B\u8BDD\u8BED B\u7AEF\u5F88\u5C11\u6709, \u4F53\u73B0\u4E0D\u4E86\u81EA\u5DF1\u4EF7\u503C..</li></ul>`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/think/2022-09-16.html.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
var _20220916_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$5]]);
var _20220916_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _20220916_html$1
});
const _sfc_main$o = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/think/index.html.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
var index_html$8 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$4]]);
var index_html$9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$8
});
var proto2Ts_html_vue_vue_type_style_index_0_lang = "";
const RedDiv = (_, ctx) => vue.h("div", {
  class: "red-div"
}, ctx.slots.default());
const _sfc_main$n = {
  components: {
    RedDiv
  },
  setup() {
    const msg = "Markdown \u4E2D\u7684 Vue";
    const count = vue.ref(0);
    return {
      msg,
      count,
      time: moment__default["default"]()
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RedDiv = vue.resolveComponent("RedDiv");
  _push(`<!--[--><p><em>\u4F60\u597D\uFF0C ${serverRenderer.ssrInterpolate($setup.msg)}</em></p>`);
  _push(serverRenderer.ssrRenderComponent(_component_RedDiv, null, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}><em${_scopeId}>\u5F53\u524D\u8BA1\u6570\u4E3A\uFF1A ${serverRenderer.ssrInterpolate($setup.count)}</em> ${serverRenderer.ssrInterpolate($setup.time)}</p>`);
      } else {
        return [
          vue.createVNode("p", null, [
            vue.createVNode("em", null, "\u5F53\u524D\u8BA1\u6570\u4E3A\uFF1A " + vue.toDisplayString($setup.count), 1),
            vue.createTextVNode(" " + vue.toDisplayString($setup.time), 1)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p><button>\u70B9\u6211\uFF01</button></p><!--]-->`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/tools/proto-2-ts.html.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
var proto2Ts_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$3]]);
var proto2Ts_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": proto2Ts_html$1
});
const _sfc_main$m = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<ul${serverRenderer.ssrRenderAttrs(_attrs)}><li><p>\u52A8\u6001\u52A0\u8F7D\u7EC4\u4EF6\u6807\u7B7E\u6CA1\u6E32\u67D3, \u53EF\u4EE5\u5728\u7528v-if\u63A7\u5236, \u5728\u52A0\u8F7D\u5B8C\u6210\u540E\u518D\u663E\u793A(\u6E32\u67D3).</p></li><li><p>\u52A8\u6001\u52A0\u8F7Dts\u6587\u4EF6: <code>const modules = i<wbr>mport.meta.globEager(&#39;./modules/**/*.ts&#39;);</code>. // from TDesign Star</p></li></ul>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/vue/\u5947\u6280\u6DEB\u5DE7.html.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
var _____html$2 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$2]]);
var _____html$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _____html$2
});
const _sfc_main$l = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/404.html.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
var _404_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$1]]);
var _404_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _404_html$1
});
const data$A = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "footer": "footer",
    "footerHtml": false
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u524D\u7AEF4\u5E74\u521D\u7EA7\u642C\u7816\u6C11\u5DE5\u{1F9F1}",
      "slug": "\u524D\u7AEF4\u5E74\u521D\u7EA7\u642C\u7816\u6C11\u5DE5\u{1F9F1}",
      "children": []
    },
    {
      "level": 2,
      "title": "\u671F\u5F85\u62C9\u7816\u5C0F\u5DE5\u673A\u4F1A\u{1F92B}",
      "slug": "\u671F\u5F85\u62C9\u7816\u5C0F\u5DE5\u673A\u4F1A\u{1F92B}",
      "children": []
    }
  ],
  "filePathRelative": "README.md"
};
var index_html$7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$A
});
const data$z = {
  "key": "v-1ec69fb0",
  "path": "/abc.html",
  "title": "ABC",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "ABC"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "abc.md"
};
var abc_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$z
});
const data$y = {
  "key": "v-2b30cdfd",
  "path": "/demo.html",
  "title": "\u5C1D\u9C9C\u521D\u59CB\u5316",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "\u5C1D\u9C9C\u521D\u59CB\u5316",
    "description": "\u6D4B\u8BD5vuepress\u72EC\u6709\u529F\u80FD"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u6D4B\u8BD5\u94FE\u63A5,\u652F\u6301\u76F8\u5BF9\u8DEF\u5F84,\u539F\u7406\u4E0A\u4F7F\u7528\u4E86RouterLink",
      "slug": "\u6D4B\u8BD5\u94FE\u63A5-\u652F\u6301\u76F8\u5BF9\u8DEF\u5F84-\u539F\u7406\u4E0A\u4F7F\u7528\u4E86routerlink",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6D4B\u8BD5\u76EE\u5F55",
      "slug": "\u6D4B\u8BD5\u76EE\u5F55",
      "children": [
        {
          "level": 3,
          "title": "\u6D4B\u8BD5",
          "slug": "\u6D4B\u8BD5",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u4EE3\u7801\u5C40\u90E8\u9AD8\u4EAE",
      "slug": "\u4EE3\u7801\u5C40\u90E8\u9AD8\u4EAE",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5BFC\u5165\u4EE3\u7801\u5757",
      "slug": "\u5BFC\u5165\u4EE3\u7801\u5757",
      "children": []
    },
    {
      "level": 2,
      "title": "vue \u8BED\u6CD5",
      "slug": "vue-\u8BED\u6CD5",
      "children": []
    }
  ],
  "filePathRelative": "demo.md"
};
var demo_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$y
});
const data$x = {
  "key": "v-4e9cb81e",
  "path": "/linux.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "\u538B\u7F29\u89E3\u538B\u7F29",
      "slug": "\u538B\u7F29\u89E3\u538B\u7F29",
      "children": []
    },
    {
      "level": 3,
      "title": "\u67E5\u770B\u7AEF\u53E3",
      "slug": "\u67E5\u770B\u7AEF\u53E3",
      "children": []
    },
    {
      "level": 3,
      "title": "\u67E5\u770B\u6587\u4EF6",
      "slug": "\u67E5\u770B\u6587\u4EF6",
      "children": []
    }
  ],
  "filePathRelative": "linux.md"
};
var linux_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$x
});
const data$w = {
  "key": "v-953546a4",
  "path": "/test.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "test.md"
};
var test_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$w
});
const data$v = {
  "key": "v-541e4bfd",
  "path": "/%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E8%A1%A5%E5%85%A8.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u5355\u5143\u6D4B\u8BD5\u8865\u5168",
      "slug": "\u5355\u5143\u6D4B\u8BD5\u8865\u5168",
      "children": []
    }
  ],
  "filePathRelative": "\u5355\u5143\u6D4B\u8BD5\u8865\u5168.md"
};
var _______html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$v
});
const data$u = {
  "key": "v-4bc92a0e",
  "path": "/%E5%8E%9F%E5%9E%8B%E9%93%BE.html",
  "title": "\u539F\u578B\u94FE\u5B66\u4E60",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "\u539F\u578B\u94FE\u5B66\u4E60"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "\u539F\u578B\u94FE.md"
};
var ____html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$u
});
const data$t = {
  "key": "v-14f0db02",
  "path": "/%E5%A6%82%E4%BD%95%E5%AF%BC%E5%87%BAexcel%E5%9C%A8nodejs%E4%B8%AD.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "\u5982\u4F55\u5BFC\u51FAexcel\u5728nodejs\u4E2D.md"
};
var ____excel_nodejs__html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$t
});
const data$s = {
  "key": "v-74458d05",
  "path": "/css/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "css/README.md"
};
var index_html$6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$s
});
const data$r = {
  "key": "v-f9aeb140",
  "path": "/docker/Dockerfile&docker-compose.html",
  "title": "Dockerfile&docker-compose",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Dockerfile",
      "slug": "dockerfile",
      "children": []
    }
  ],
  "filePathRelative": "docker/Dockerfile&docker-compose.md"
};
var Dockerfile_dockerCompose_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$r
});
const data$q = {
  "key": "v-51f86e14",
  "path": "/docker/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "docker/README.md"
};
var index_html$5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$q
});
const data$p = {
  "key": "v-626facc6",
  "path": "/docker/%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html",
  "title": "Docker\u5E38\u7528\u547D\u4EE4\u4EE5\u53CA\u9009\u9879\u89E3\u91CA",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u5E38\u7528\u64CD\u4F5C\u547D\u4EE4",
      "slug": "\u5E38\u7528\u64CD\u4F5C\u547D\u4EE4",
      "children": []
    },
    {
      "level": 2,
      "title": "mysql",
      "slug": "mysql",
      "children": [
        {
          "level": 3,
          "title": "docker run",
          "slug": "docker-run",
          "children": []
        },
        {
          "level": 3,
          "title": "docker exec",
          "slug": "docker-exec",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "php",
      "slug": "php",
      "children": []
    }
  ],
  "filePathRelative": "docker/\u5E38\u7528\u547D\u4EE4.md"
};
var _____html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$p
});
const data$o = {
  "key": "v-9d4992e4",
  "path": "/english/learn-nextjs-docs.html",
  "title": "\u9605\u8BFBNext\u6587\u6863\uFF0C\u957F\u96BE\u53E5\u8BB0\u5F55",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "\u9605\u8BFBNext\u6587\u6863\uFF0C\u957F\u96BE\u53E5\u8BB0\u5F55"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "english/learn-nextjs-docs.md"
};
var learnNextjsDocs_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$o
});
const data$n = {
  "key": "v-e39dae2e",
  "path": "/english/%E5%A6%82%E4%BD%95%E8%AE%B0%E5%8D%95%E8%AF%8D.html",
  "title": "\u5982\u4F55\u8BB0\u5355\u8BCD",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "\u5982\u4F55\u8BB0\u5355\u8BCD",
    "lesson": "https://www.youtube.com/watch?v=JuoqE2lpRUM&list=PLpLRk365gbPaY0U_9zYYRY5JmStMZ9NSI&index=7&t=1s"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "english/\u5982\u4F55\u8BB0\u5355\u8BCD.md"
};
var ______html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$n
});
const data$m = {
  "key": "v-9d62a912",
  "path": "/idea/%E6%97%A0%E9%9A%9C%E7%A2%8D%E8%B0%83%E8%AF%95%E5%B7%A5%E5%85%B7.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "idea/\u65E0\u969C\u788D\u8C03\u8BD5\u5DE5\u5177.md"
};
var ________html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$m
});
const data$l = {
  "key": "v-7cd3a8f0",
  "path": "/js/%E6%90%9E%E6%87%82%E5%8E%9F%E5%9E%8B%E9%93%BE.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "js/\u641E\u61C2\u539F\u578B\u94FE.md"
};
var ______html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$l
});
const data$k = {
  "key": "v-14e44e30",
  "path": "/lean/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "\u524D\u7AEF\u9762\u8BD5\u9898",
      "slug": "\u524D\u7AEF\u9762\u8BD5\u9898",
      "children": []
    }
  ],
  "filePathRelative": "lean/README.md"
};
var index_html$4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$k
});
const data$j = {
  "key": "v-5ebef70d",
  "path": "/lean/array_remove_duplicarution.html",
  "title": "\u6570\u7EC4\u53BB\u91CD",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "\u6570\u7EC4\u53BB\u91CD"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "lean/array_remove_duplicarution.md"
};
var array_remove_duplicarution_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$j
});
const data$i = {
  "key": "v-2f231e85",
  "path": "/lean/operator.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "sidebar": "auto"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u8FD0\u7B97\u7B26\u76F8\u5173\u9762\u8BD5\u9898",
      "slug": "\u8FD0\u7B97\u7B26\u76F8\u5173\u9762\u8BD5\u9898",
      "children": []
    }
  ],
  "filePathRelative": "lean/operator.md"
};
var operator_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$i
});
const data$h = {
  "key": "v-14e62408",
  "path": "/libs/",
  "title": "\u5947\u5947\u602A\u602A\u7684\u5E93",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "libs/README.md"
};
var index_html$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$h
});
const data$g = {
  "key": "v-6b37858a",
  "path": "/list/CI.html",
  "title": "\u81EA\u52A8\u5316\u8865\u5168",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "\u81EA\u52A8\u5316\u8865\u5168"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "Shell\u547D\u4EE4\u8865\u5168",
      "slug": "shell\u547D\u4EE4\u8865\u5168",
      "children": []
    }
  ],
  "filePathRelative": "list/CI.md"
};
var CI_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$g
});
const data$f = {
  "key": "v-2ed1b03f",
  "path": "/list/git.html",
  "title": "GIT \u76F8\u5173\u63D0\u5347",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "GIT \u76F8\u5173\u63D0\u5347"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "rebase",
      "slug": "rebase",
      "children": []
    },
    {
      "level": 3,
      "title": "\u5B50\u4ED3\u5E93",
      "slug": "\u5B50\u4ED3\u5E93",
      "children": []
    },
    {
      "level": 3,
      "title": "commit \u63D0\u4EA4\u89C4\u8303",
      "slug": "commit-\u63D0\u4EA4\u89C4\u8303",
      "children": []
    },
    {
      "level": 3,
      "title": "commit \u63D0\u4EA4\u524Deslint\u68C0\u67E5\uFF0C\u5982\u4F55\u8BBE\u7F6E\u89C4\u8303\uFF0C\u5C31\u50CFTdesign-vue\u9879\u76EE\u90A3\u6837\uFF0C\u6BCF\u6B21\u63D0\u4EA4\u90FD\u4F1A\u50CF\u4F53\u68C0\u4E00\u6837\u586B\u5199",
      "slug": "commit-\u63D0\u4EA4\u524Deslint\u68C0\u67E5-\u5982\u4F55\u8BBE\u7F6E\u89C4\u8303-\u5C31\u50CFtdesign-vue\u9879\u76EE\u90A3\u6837-\u6BCF\u6B21\u63D0\u4EA4\u90FD\u4F1A\u50CF\u4F53\u68C0\u4E00\u6837\u586B\u5199",
      "children": []
    },
    {
      "level": 3,
      "title": "\u76F8\u540C\u6587\u4EF6\u4FEE\u6539\u5206\u652F\u5408\u5E76",
      "slug": "\u76F8\u540C\u6587\u4EF6\u4FEE\u6539\u5206\u652F\u5408\u5E76",
      "children": []
    }
  ],
  "filePathRelative": "list/git.md"
};
var git_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$f
});
const data$e = {
  "key": "v-afc5cf42",
  "path": "/list/md_example.html",
  "title": "Markdown \u8BED\u6CD5\u53C2\u8003",
  "lang": "zh-Cn",
  "frontmatter": {
    "title": "Markdown \u8BED\u6CD5\u53C2\u8003",
    "lang": "zh-Cn",
    "description": "\u4E0D\u5E38\u7528\u7684\u8BED\u6CD5\uFF0C\u4EE5\u4F9B\u53C2\u8003",
    "meta": [
      {
        "name": "\u53C2\u8003"
      },
      {
        "name": "markdown"
      }
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u94FE\u63A5",
      "slug": "\u94FE\u63A5",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6709\u5E8F\u5217\u8868",
      "slug": "\u6709\u5E8F\u5217\u8868",
      "children": []
    }
  ],
  "filePathRelative": "list/md_example.md"
};
var md_example_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$e
});
const data$d = {
  "key": "v-b39531ea",
  "path": "/list/vue.html",
  "title": "Vue \u76F8\u5173\u63D0\u5347",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "Vue \u76F8\u5173\u63D0\u5347"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "\u5355\u5143\u6D4B\u8BD5",
      "slug": "\u5355\u5143\u6D4B\u8BD5",
      "children": []
    },
    {
      "level": 3,
      "title": "Babel(Webpack)",
      "slug": "babel-webpack",
      "children": []
    },
    {
      "level": 3,
      "title": "CLI",
      "slug": "cli",
      "children": []
    },
    {
      "level": 3,
      "title": "Loader",
      "slug": "loader",
      "children": []
    }
  ],
  "filePathRelative": "list/vue.md"
};
var vue_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$d
});
const data$c = {
  "key": "v-eb072ff4",
  "path": "/mysql/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "\u5907\u4EFD",
      "slug": "\u5907\u4EFD",
      "children": []
    }
  ],
  "filePathRelative": "mysql/README.md"
};
var index_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$c
});
const data$b = {
  "key": "v-70ef9ad6",
  "path": "/note-work/2019-12-02.html",
  "title": "2019\u5E7412\u670802\u65E5 \u661F\u671F\u4E00",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "2019\u5E7412\u670802\u65E5 \u661F\u671F\u4E00",
    "pageClass": "custom-page-class",
    "tag": [
      "note",
      "csv",
      "excel"
    ]
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "note-work/2019-12-02.md"
};
var _20191202_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$b
});
const data$a = {
  "key": "v-6f6778ae",
  "path": "/note-work/soft_log.html",
  "title": "Soft Install Log",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "brew \u5B89\u88C5\u4EE5\u53CA\u5361\u6162\u95EE\u9898",
      "slug": "brew-\u5B89\u88C5\u4EE5\u53CA\u5361\u6162\u95EE\u9898",
      "children": []
    },
    {
      "level": 3,
      "title": "MAC \u5B89\u88C5 n&node",
      "slug": "mac-\u5B89\u88C5-n-node",
      "children": []
    },
    {
      "level": 3,
      "title": "npm\\cnpm \u5B89\u88C5\u5168\u5C40\u6A21\u5757\u90FD\u4F1A\u63D0\u793A\u6743\u9650\u4E0D\u8DB3\uFF0C\u9700\u8981sudo",
      "slug": "npm-cnpm-\u5B89\u88C5\u5168\u5C40\u6A21\u5757\u90FD\u4F1A\u63D0\u793A\u6743\u9650\u4E0D\u8DB3-\u9700\u8981sudo",
      "children": []
    }
  ],
  "filePathRelative": "note-work/soft_log.md"
};
var soft_log_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$a
});
const data$9 = {
  "key": "v-2e9785c6",
  "path": "/react/next.html",
  "title": "Next.js",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "Next.js",
    "sidebar": "auto",
    "sidebarDepth": 2
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "abc",
      "slug": "abc",
      "children": []
    },
    {
      "level": 2,
      "title": "abc",
      "slug": "abc-1",
      "children": [
        {
          "level": 3,
          "title": "abcd",
          "slug": "abcd",
          "children": []
        },
        {
          "level": 3,
          "title": "abcd",
          "slug": "abcd-1",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "react/next.md"
};
var next_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$9
});
const data$8 = {
  "key": "v-a91e9eee",
  "path": "/resume/",
  "title": "\u767D\u4E91\u7426-web\u524D\u7AEF",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "\u767D\u4E91\u7426-web\u524D\u7AEF",
    "pageClass": "resume",
    "sidebar": false,
    "navbar": false,
    "lastUpdated": false
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "\u57FA\u672C\u4FE1\u606F",
      "slug": "\u57FA\u672C\u4FE1\u606F",
      "children": []
    },
    {
      "level": 3,
      "title": "\u4E13\u4E1A\u6280\u80FD",
      "slug": "\u4E13\u4E1A\u6280\u80FD",
      "children": []
    },
    {
      "level": 3,
      "title": "\u5DE5\u4F5C\u7ECF\u5386",
      "slug": "\u5DE5\u4F5C\u7ECF\u5386",
      "children": []
    },
    {
      "level": 3,
      "title": "\u9879\u76EE\u7ECF\u9A8C",
      "slug": "\u9879\u76EE\u7ECF\u9A8C",
      "children": []
    },
    {
      "level": 3,
      "title": "\u6559\u80B2\u80CC\u666F",
      "slug": "\u6559\u80B2\u80CC\u666F",
      "children": []
    }
  ],
  "filePathRelative": "resume/README.md"
};
var index_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$8
});
const data$7 = {
  "key": "v-0e281e2a",
  "path": "/resume/README_2019.html",
  "title": "\u7B80\u5386",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "\u7B80\u5386",
    "pageClass": "custom-page-class"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "\u57FA\u672C\u4FE1\u606F",
      "slug": "\u57FA\u672C\u4FE1\u606F",
      "children": []
    },
    {
      "level": 3,
      "title": "\u4E13\u4E1A\u6280\u80FD",
      "slug": "\u4E13\u4E1A\u6280\u80FD",
      "children": []
    },
    {
      "level": 3,
      "title": "\u9879\u76EE\u7ECF\u9A8C",
      "slug": "\u9879\u76EE\u7ECF\u9A8C",
      "children": []
    },
    {
      "level": 3,
      "title": "\u6559\u80B2\u80CC\u666F",
      "slug": "\u6559\u80B2\u80CC\u666F",
      "children": []
    }
  ],
  "filePathRelative": "resume/README_2019.md"
};
var README_2019_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$7
});
const data$6 = {
  "key": "v-59dadc84",
  "path": "/resume/note.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u81EA\u6211\u4ECB\u7ECD",
      "slug": "\u81EA\u6211\u4ECB\u7ECD",
      "children": []
    },
    {
      "level": 2,
      "title": "\u9879\u76EE\u4ECB\u7ECD",
      "slug": "\u9879\u76EE\u4ECB\u7ECD",
      "children": []
    },
    {
      "level": 2,
      "title": "\u9AD8\u7CBE\u5C16\u9879\u76EE\uFF0C\u53EF\u8BF4\u9053\u7684\u9879\u76EE",
      "slug": "\u9AD8\u7CBE\u5C16\u9879\u76EE-\u53EF\u8BF4\u9053\u7684\u9879\u76EE",
      "children": [
        {
          "level": 3,
          "title": "\u65E5\u5FD7\u5207\u7247\u8BB0\u5F55",
          "slug": "\u65E5\u5FD7\u5207\u7247\u8BB0\u5F55",
          "children": []
        },
        {
          "level": 3,
          "title": "\u516C\u53F8\u5185\u90E8\u52A0\u89E3\u5BC6\u63A5\u53E3\u6539\u5199 php",
          "slug": "\u516C\u53F8\u5185\u90E8\u52A0\u89E3\u5BC6\u63A5\u53E3\u6539\u5199-php",
          "children": []
        },
        {
          "level": 3,
          "title": "\u65E5\u5FD7\u76D1\u63A7\uFF08\u5F85\u5B8C\u6210\uFF09",
          "slug": "\u65E5\u5FD7\u76D1\u63A7-\u5F85\u5B8C\u6210",
          "children": []
        },
        {
          "level": 3,
          "title": "\u56FE\u7247\u4E0A\u4F20\u7CFB\u7EDF\uFF0C\u770B\u8FD8\u6709\u5565\u4F18\u5316\u7684\u70B9\uFF0C\u548C\u96BE\u70B9\u8BB0\u5F55",
          "slug": "\u56FE\u7247\u4E0A\u4F20\u7CFB\u7EDF-\u770B\u8FD8\u6709\u5565\u4F18\u5316\u7684\u70B9-\u548C\u96BE\u70B9\u8BB0\u5F55",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "resume/note.md"
};
var note_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$6
});
const data$5 = {
  "key": "v-520a66da",
  "path": "/resume/patch.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "resume/patch.md"
};
var patch_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$5
});
const data$4 = {
  "key": "v-446e95c9",
  "path": "/think/2022-09-16.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "think/2022-09-16.md"
};
var _20220916_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$4
});
const data$3 = {
  "key": "v-d50ba494",
  "path": "/think/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "think/README.md"
};
var index_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$3
});
const data$2 = {
  "key": "v-2020b026",
  "path": "/tools/proto-2-ts.html",
  "title": "proto \u8F6Cts\u7C7B\u578B\u58F0\u660E",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "proto \u8F6Cts\u7C7B\u578B\u58F0\u660E",
    "sidebar": false
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "tools/proto-2-ts.md"
};
var proto2Ts_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$2
});
const data$1 = {
  "key": "v-671a8e04",
  "path": "/vue/%E5%A5%87%E6%8A%80%E6%B7%AB%E5%B7%A7.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "vue/\u5947\u6280\u6DEB\u5DE7.md"
};
var _____html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$1
});
const data = {
  "key": "v-3706649a",
  "path": "/404.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "layout": "404"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": null
};
var _404_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data
});
const _sfc_main$k = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c;
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const messages = (_a = themeLocale.value.notFound) != null ? _a : ["Not Found"];
    const getMsg = () => messages[Math.floor(Math.random() * messages.length)];
    const homeLink = (_b = themeLocale.value.home) != null ? _b : routeLocale.value;
    const homeText = (_c = themeLocale.value.backToHome) != null ? _c : "Back to home";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-container" }, _attrs))}><div class="theme-default-content"><h1>404</h1><blockquote>${serverRenderer.ssrInterpolate(getMsg())}</blockquote>`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: vue.unref(homeLink) }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(vue.unref(homeText))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(vue.unref(homeText)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/404.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
var _404 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$k
});
const _sfc_main$j = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Content = vue.resolveComponent("Content");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-default-content custom" }, _attrs))}>`);
  _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeContent.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
var HomeContent = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$i = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const features = vue.computed(() => {
      if (isArray(frontmatter.value.features)) {
        return frontmatter.value.features;
      }
      return [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(features).length) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "features" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(features), (feature) => {
          _push(`<div class="feature"><h2>${serverRenderer.ssrInterpolate(feature.title)}</h2><p>${serverRenderer.ssrInterpolate(feature.details)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeFeatures.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const footer = vue.computed(() => frontmatter.value.footer);
    const footerHtml = vue.computed(() => frontmatter.value.footerHtml);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(footer)) {
        _push(`<!--[-->`);
        if (vue.unref(footerHtml)) {
          _push(`<div class="footer">${vue.unref(footer)}</div>`);
        } else {
          _push(`<div class="footer">${serverRenderer.ssrInterpolate(vue.unref(footer))}</div>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeFooter.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __default__ = vue.defineComponent({
  inheritAttrs: false
});
const _sfc_main$g = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = vueRouter.useRoute();
    const site = useSiteData();
    const { item } = vue.toRefs(props);
    const hasHttpProtocol = vue.computed(() => isLinkHttp(item.value.link));
    const hasNonHttpProtocol = vue.computed(() => isLinkMailto(item.value.link) || isLinkTel(item.value.link));
    const linkTarget = vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.target)
        return item.value.target;
      if (hasHttpProtocol.value)
        return "_blank";
      return void 0;
    });
    const isBlankTarget = vue.computed(() => linkTarget.value === "_blank");
    const isRouterLink = vue.computed(() => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value);
    const linkRel = vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.rel)
        return item.value.rel;
      if (isBlankTarget.value)
        return "noopener noreferrer";
      return void 0;
    });
    const linkAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const shouldBeActiveInSubpath = vue.computed(() => {
      const localeKeys = Object.keys(site.value.locales);
      if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.value.link);
      }
      return item.value.link !== "/";
    });
    const isActiveInSubpath = vue.computed(() => {
      if (!shouldBeActiveInSubpath.value) {
        return false;
      }
      return route.path.startsWith(item.value.link);
    });
    const isActive = vue.computed(() => {
      if (!isRouterLink.value) {
        return false;
      }
      if (item.value.activeMatch) {
        return new RegExp(item.value.activeMatch).test(route.path);
      }
      return isActiveInSubpath.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
      if (vue.unref(isRouterLink)) {
        _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({
          class: { "router-link-active": vue.unref(isActive) },
          to: vue.unref(item).link,
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs), {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push2, _parent2, _scopeId);
              _push2(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
              serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "before"),
                vue.createTextVNode(" " + vue.toDisplayString(vue.unref(item).text) + " ", 1),
                vue.renderSlot(_ctx.$slots, "after")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<a${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          class: "external-link",
          href: vue.unref(item).link,
          rel: vue.unref(linkRel),
          target: vue.unref(linkTarget),
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs))}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
        _push(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
        if (vue.unref(isBlankTarget)) {
          _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
        _push(`</a>`);
      }
    };
  }
}));
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/AutoLink.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const isDarkMode = useDarkMode();
    const heroImage = vue.computed(() => {
      if (isDarkMode.value && frontmatter.value.heroImageDark !== void 0) {
        return frontmatter.value.heroImageDark;
      }
      return frontmatter.value.heroImage;
    });
    const heroText = vue.computed(() => {
      if (frontmatter.value.heroText === null) {
        return null;
      }
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const heroAlt = vue.computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const tagline = vue.computed(() => {
      if (frontmatter.value.tagline === null) {
        return null;
      }
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const actions = vue.computed(() => {
      if (!isArray(frontmatter.value.actions)) {
        return [];
      }
      return frontmatter.value.actions.map(({ text, link, type = "primary" }) => ({
        text,
        link,
        type
      }));
    });
    const HomeHeroImage = () => {
      if (!heroImage.value)
        return null;
      const img = vue.h("img", {
        src: withBase(heroImage.value),
        alt: heroAlt.value
      });
      if (frontmatter.value.heroImageDark === void 0) {
        return img;
      }
      return vue.h(ClientOnly, img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "hero" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(HomeHeroImage, null, null, _parent));
      if (vue.unref(heroText)) {
        _push(`<h1 id="main-title">${serverRenderer.ssrInterpolate(vue.unref(heroText))}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(tagline)) {
        _push(`<p class="description">${serverRenderer.ssrInterpolate(vue.unref(tagline))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(actions).length) {
        _push(`<p class="actions"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(actions), (action) => {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$g, {
            key: action.text,
            class: ["action-button", [action.type]],
            item: action
          }, null, _parent));
        });
        _push(`<!--]--></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeHero.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "home" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$f, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$i, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(HomeContent, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$h, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Home.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const navbarBrandLink = vue.computed(() => themeLocale.value.home || routeLocale.value);
    const navbarBrandTitle = vue.computed(() => siteLocale.value.title);
    const navbarBrandLogo = vue.computed(() => {
      if (isDarkMode.value && themeLocale.value.logoDark !== void 0) {
        return themeLocale.value.logoDark;
      }
      return themeLocale.value.logo;
    });
    const NavbarBrandLogo = () => {
      if (!navbarBrandLogo.value)
        return null;
      const img = vue.h("img", {
        class: "logo",
        src: withBase(navbarBrandLogo.value),
        alt: navbarBrandTitle.value
      });
      if (themeLocale.value.logoDark === void 0) {
        return img;
      }
      return vue.h(ClientOnly, img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({ to: vue.unref(navbarBrandLink) }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(NavbarBrandLogo, null, null, _parent2, _scopeId));
            if (vue.unref(navbarBrandTitle)) {
              _push2(`<span class="${serverRenderer.ssrRenderClass([{ "can-hide": vue.unref(navbarBrandLogo) }, "site-name"])}"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(navbarBrandTitle))}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vue.createVNode(NavbarBrandLogo),
              vue.unref(navbarBrandTitle) ? (vue.openBlock(), vue.createBlock("span", {
                key: 0,
                class: ["site-name", { "can-hide": vue.unref(navbarBrandLogo) }]
              }, vue.toDisplayString(vue.unref(navbarBrandTitle)), 3)) : vue.createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarBrand.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/DropdownTransition.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { item } = vue.toRefs(props);
    const dropdownAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const open = vue.ref(false);
    const route = vueRouter.useRoute();
    vue.watch(() => route.path, () => {
      open.value = false;
    });
    const isLastItemOfArray = (item2, arr) => arr[arr.length - 1] === item2;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["navbar-dropdown-wrapper", { open: open.value }]
      }, _attrs))}><button class="navbar-dropdown-title" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="arrow down"></span></button><button class="navbar-dropdown-title-mobile" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="${serverRenderer.ssrRenderClass([open.value ? "down" : "right", "arrow"])}"></span></button>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$c, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul style="${serverRenderer.ssrRenderStyle(open.value ? null : { display: "none" })}" class="navbar-dropdown"${_scopeId}><!--[-->`);
            serverRenderer.ssrRenderList(vue.unref(item).children, (child) => {
              _push2(`<li class="navbar-dropdown-item"${_scopeId}>`);
              if (child.children) {
                _push2(`<!--[--><h4 class="navbar-dropdown-subtitle"${_scopeId}>`);
                if (child.link) {
                  _push2(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: child }, null, _parent2, _scopeId));
                } else {
                  _push2(`<span${_scopeId}>${serverRenderer.ssrInterpolate(child.text)}</span>`);
                }
                _push2(`</h4><ul class="navbar-dropdown-subitem-wrapper"${_scopeId}><!--[-->`);
                serverRenderer.ssrRenderList(child.children, (grandchild) => {
                  _push2(`<li class="navbar-dropdown-subitem"${_scopeId}>`);
                  _push2(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: grandchild }, null, _parent2, _scopeId));
                  _push2(`</li>`);
                });
                _push2(`<!--]--></ul><!--]-->`);
              } else {
                _push2(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: child }, null, _parent2, _scopeId));
              }
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              vue.withDirectives(vue.createVNode("ul", { class: "navbar-dropdown" }, [
                (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child) => {
                  return vue.openBlock(), vue.createBlock("li", {
                    key: child.text,
                    class: "navbar-dropdown-item"
                  }, [
                    child.children ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                      vue.createVNode("h4", { class: "navbar-dropdown-subtitle" }, [
                        child.link ? (vue.openBlock(), vue.createBlock(_sfc_main$g, {
                          key: 0,
                          item: child,
                          onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && child.children.length === 0 && (open.value = false)
                        }, null, 8, ["item", "onFocusout"])) : (vue.openBlock(), vue.createBlock("span", { key: 1 }, vue.toDisplayString(child.text), 1))
                      ]),
                      vue.createVNode("ul", { class: "navbar-dropdown-subitem-wrapper" }, [
                        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(child.children, (grandchild) => {
                          return vue.openBlock(), vue.createBlock("li", {
                            key: grandchild.link,
                            class: "navbar-dropdown-subitem"
                          }, [
                            vue.createVNode(_sfc_main$g, {
                              item: grandchild,
                              onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                            }, null, 8, ["item", "onFocusout"])
                          ]);
                        }), 128))
                      ])
                    ], 64)) : (vue.openBlock(), vue.createBlock(_sfc_main$g, {
                      key: 1,
                      item: child,
                      onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                    }, null, 8, ["item", "onFocusout"]))
                  ]);
                }), 128))
              ], 512), [
                [vue.vShow, open.value]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarDropdown.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const normalizePath = (path) => decodeURI(path).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, "");
const isActiveLink = (link, route) => {
  if (route.hash === link) {
    return true;
  }
  const currentPath = normalizePath(route.path);
  const targetPath = normalizePath(link);
  return currentPath === targetPath;
};
const isActiveSidebarItem = (item, route) => {
  if (item.link && isActiveLink(item.link, route)) {
    return true;
  }
  if (item.children) {
    return item.children.some((child) => isActiveSidebarItem(child, route));
  }
  return false;
};
const resolveRepoType = (repo) => {
  if (!isLinkHttp(repo) || /github\.com/.test(repo))
    return "GitHub";
  if (/bitbucket\.org/.test(repo))
    return "Bitbucket";
  if (/gitlab\.com/.test(repo))
    return "GitLab";
  if (/gitee\.com/.test(repo))
    return "Gitee";
  return null;
};
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLinkPatterns = ({ docsRepo, editLinkPattern }) => {
  if (editLinkPattern) {
    return editLinkPattern;
  }
  const repoType = resolveRepoType(docsRepo);
  if (repoType !== null) {
    return editLinkPatterns[repoType];
  }
  return null;
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const pattern = resolveEditLinkPatterns({ docsRepo, editLinkPattern });
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useNavbarSelectLanguage = () => {
      const router = vueRouter.useRouter();
      const routeLocale = useRouteLocale();
      const siteLocale = useSiteLocaleData();
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => {
        var _a, _b;
        const localePaths = Object.keys(siteLocale.value.locales);
        if (localePaths.length < 2) {
          return [];
        }
        const currentPath = router.currentRoute.value.path;
        const currentFullPath = router.currentRoute.value.fullPath;
        const languageDropdown = {
          text: (_a = themeLocale.value.selectLanguageText) != null ? _a : "unknown language",
          ariaLabel: (_b = themeLocale.value.selectLanguageAriaLabel) != null ? _b : "unkown language",
          children: localePaths.map((targetLocalePath) => {
            var _a2, _b2, _c, _d, _e, _f;
            const targetSiteLocale = (_b2 = (_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) != null ? _b2 : {};
            const targetThemeLocale = (_d = (_c = themeLocale.value.locales) == null ? void 0 : _c[targetLocalePath]) != null ? _d : {};
            const targetLang = `${targetSiteLocale.lang}`;
            const text = (_e = targetThemeLocale.selectLanguageName) != null ? _e : targetLang;
            let link;
            if (targetLang === siteLocale.value.lang) {
              link = currentFullPath;
            } else {
              const targetLocalePage = currentPath.replace(routeLocale.value, targetLocalePath);
              if (router.getRoutes().some((item) => item.path === targetLocalePage)) {
                link = targetLocalePage;
              } else {
                link = (_f = targetThemeLocale.home) != null ? _f : targetLocalePath;
              }
            }
            return {
              text,
              link
            };
          })
        };
        return [languageDropdown];
      });
    };
    const useNavbarRepo = () => {
      const themeLocale = useThemeLocaleData();
      const repo = vue.computed(() => themeLocale.value.repo);
      const repoType = vue.computed(() => repo.value ? resolveRepoType(repo.value) : null);
      const repoLink = vue.computed(() => {
        if (repo.value && !isLinkHttp(repo.value)) {
          return `https://github.com/${repo.value}`;
        }
        return repo.value;
      });
      const repoLabel = vue.computed(() => {
        if (!repoLink.value)
          return null;
        if (themeLocale.value.repoLabel)
          return themeLocale.value.repoLabel;
        if (repoType.value === null)
          return "Source";
        return repoType.value;
      });
      return vue.computed(() => {
        if (!repoLink.value || !repoLabel.value) {
          return [];
        }
        return [
          {
            text: repoLabel.value,
            link: repoLink.value
          }
        ];
      });
    };
    const resolveNavbarItem = (item) => {
      if (isString(item)) {
        return useNavLink(item);
      }
      if (item.children) {
        return __spreadProps(__spreadValues({}, item), {
          children: item.children.map(resolveNavbarItem)
        });
      }
      return item;
    };
    const useNavbarConfig = () => {
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem));
    };
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const navbarLinks = vue.computed(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(navbarLinks).length) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "navbar-items" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(navbarLinks), (item) => {
          _push(`<div class="navbar-item">`);
          if (item.children) {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$b, { item }, null, _parent));
          } else {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$g, { item }, null, _parent));
          }
          _push(`</div>`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarItems.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-dark-button",
        title: vue.unref(themeLocale).toggleDarkMode
      }, _attrs))}><svg style="${serverRenderer.ssrRenderStyle(!vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path></svg><svg style="${serverRenderer.ssrRenderStyle(vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z" fill="currentColor"></path></svg></button>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleDarkModeButton.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-sidebar-button",
        title: vue.unref(themeLocale).toggleSidebar,
        "aria-expanded": "false",
        role: "button",
        tabindex: "0"
      }, _attrs))}><div class="icon" aria-hidden="true"><span></span><span></span><span></span></div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleSidebarButton.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle-sidebar"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const navbar = vue.ref(null);
    const navbarBrand = vue.ref(null);
    const linksWrapperMaxWidth = vue.ref(0);
    const linksWrapperStyle = vue.computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: linksWrapperMaxWidth.value + "px"
      };
    });
    const enableDarkMode = vue.computed(() => themeLocale.value.darkMode);
    vue.onMounted(() => {
      const MOBILE_DESKTOP_BREAKPOINT = 719;
      const navbarHorizontalPadding = getCssValue(navbar.value, "paddingLeft") + getCssValue(navbar.value, "paddingRight");
      const handleLinksWrapWidth = () => {
        var _a;
        if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
          linksWrapperMaxWidth.value = 0;
        } else {
          linksWrapperMaxWidth.value = navbar.value.offsetWidth - navbarHorizontalPadding - (((_a = navbarBrand.value) == null ? void 0 : _a.offsetWidth) || 0);
        }
      };
      handleLinksWrapWidth();
      window.addEventListener("resize", handleLinksWrapWidth, false);
      window.addEventListener("orientationchange", handleLinksWrapWidth, false);
    });
    function getCssValue(el, property) {
      var _a, _b, _c;
      const val = (_c = (_b = (_a = el == null ? void 0 : el.ownerDocument) == null ? void 0 : _a.defaultView) == null ? void 0 : _b.getComputedStyle(el, null)) == null ? void 0 : _c[property];
      const num = Number.parseInt(val, 10);
      return Number.isNaN(num) ? 0 : num;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavbarSearch = vue.resolveComponent("NavbarSearch");
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        ref_key: "navbar",
        ref: navbar,
        class: "navbar"
      }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(`<span>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(`</span><div class="navbar-items-wrapper" style="${serverRenderer.ssrRenderStyle(vue.unref(linksWrapperStyle))}">`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$a, { class: "can-hide" }, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
      if (vue.unref(enableDarkMode)) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$9, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer.ssrRenderComponent(_component_NavbarSearch, null, null, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Navbar.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useEditNavLink = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c;
        const showEditLink = (_b = (_a = frontmatter.value.editLink) != null ? _a : themeLocale2.value.editLink) != null ? _b : true;
        if (!showEditLink) {
          return null;
        }
        const {
          repo,
          docsRepo = repo,
          docsBranch = "main",
          docsDir = "",
          editLinkText
        } = themeLocale2.value;
        if (!docsRepo)
          return null;
        const editLink = resolveEditLink({
          docsRepo,
          docsBranch,
          docsDir,
          filePathRelative: page.value.filePathRelative,
          editLinkPattern: (_c = frontmatter.value.editLinkPattern) != null ? _c : themeLocale2.value.editLinkPattern
        });
        if (!editLink)
          return null;
        return {
          text: editLinkText != null ? editLinkText : "Edit this page",
          link: editLink
        };
      });
    };
    const useLastUpdated = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showLastUpdated = (_b = (_a = frontmatter.value.lastUpdated) != null ? _a : themeLocale2.value.lastUpdated) != null ? _b : true;
        if (!showLastUpdated)
          return null;
        if (!((_c = page.value.git) == null ? void 0 : _c.updatedTime))
          return null;
        const updatedDate = new Date((_d = page.value.git) == null ? void 0 : _d.updatedTime);
        return updatedDate.toLocaleString();
      });
    };
    const useContributors = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showContributors = (_b = (_a = frontmatter.value.contributors) != null ? _a : themeLocale2.value.contributors) != null ? _b : true;
        if (!showContributors)
          return null;
        return (_d = (_c = page.value.git) == null ? void 0 : _c.contributors) != null ? _d : null;
      });
    };
    const themeLocale = useThemeLocaleData();
    const editNavLink = useEditNavLink();
    const lastUpdated = useLastUpdated();
    const contributors = useContributors();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      _push(`<footer${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-meta" }, _attrs))}>`);
      if (vue.unref(editNavLink)) {
        _push(`<div class="meta-item edit-link">`);
        _push(serverRenderer.ssrRenderComponent(_sfc_main$g, {
          class: "meta-item-label",
          item: vue.unref(editNavLink)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(lastUpdated)) {
        _push(`<div class="meta-item last-updated"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).lastUpdatedText)}: </span>`);
        _push(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="meta-item-info"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(lastUpdated))}</span>`);
            } else {
              return [
                vue.createVNode("span", { class: "meta-item-info" }, vue.toDisplayString(vue.unref(lastUpdated)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(contributors) && vue.unref(contributors).length) {
        _push(`<div class="meta-item contributors"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).contributorsText)}: </span><span class="meta-item-info"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(contributors), (contributor, index2) => {
          _push(`<!--[--><span class="contributor"${serverRenderer.ssrRenderAttr("title", `email: ${contributor.email}`)}>${serverRenderer.ssrInterpolate(contributor.name)}</span>`);
          if (index2 !== vue.unref(contributors).length - 1) {
            _push(`<!--[-->, <!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</footer>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageMeta.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const resolveFromFrontmatterConfig = (conf) => {
      if (conf === false) {
        return null;
      }
      if (isString(conf)) {
        return useNavLink(conf);
      }
      if (isPlainObject(conf)) {
        return conf;
      }
      return false;
    };
    const resolveFromSidebarItems = (sidebarItems2, currentPath, offset) => {
      const index2 = sidebarItems2.findIndex((item) => item.link === currentPath);
      if (index2 !== -1) {
        const targetItem = sidebarItems2[index2 + offset];
        if (!(targetItem == null ? void 0 : targetItem.link)) {
          return null;
        }
        return targetItem;
      }
      for (const item of sidebarItems2) {
        if (item.children) {
          const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
          if (childResult) {
            return childResult;
          }
        }
      }
      return null;
    };
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const route = vueRouter.useRoute();
    const prevNavLink = vue.computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) {
        return prevConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = vue.computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) {
        return nextConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(prevNavLink) || vue.unref(nextNavLink)) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-nav" }, _attrs))}><p class="inner">`);
        if (vue.unref(prevNavLink)) {
          _push(`<span class="prev">`);
          _push(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: vue.unref(prevNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        if (vue.unref(nextNavLink)) {
          _push(`<span class="next">`);
          _push(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: vue.unref(nextNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageNav.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = vue.resolveComponent("Content");
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page" }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<div class="theme-default-content">`);
      _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$5, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</main>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Page.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const { item, depth } = vue.toRefs(props);
    const route = vueRouter.useRoute();
    const router = vueRouter.useRouter();
    const isActive = vue.computed(() => isActiveSidebarItem(item.value, route));
    const itemClass = vue.computed(() => ({
      "sidebar-item": true,
      "sidebar-heading": depth.value === 0,
      "active": isActive.value,
      "collapsible": item.value.collapsible
    }));
    const isOpen = vue.ref(true);
    const onClick = vue.ref(void 0);
    if (item.value.collapsible) {
      isOpen.value = isActive.value;
      onClick.value = () => {
        isOpen.value = !isOpen.value;
      };
      router.afterEach(() => {
        isOpen.value = isActive.value;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_SidebarItem = vue.resolveComponent("SidebarItem", true);
      _push(`<li${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      if (vue.unref(item).link) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$g, {
          class: vue.unref(itemClass),
          item: vue.unref(item)
        }, null, _parent));
      } else {
        _push(`<p class="${serverRenderer.ssrRenderClass(vue.unref(itemClass))}">${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
        if (vue.unref(item).collapsible) {
          _push(`<span class="${serverRenderer.ssrRenderClass([isOpen.value ? "down" : "right", "arrow"])}"></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      }
      if ((_a = vue.unref(item).children) == null ? void 0 : _a.length) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$c, null, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<ul style="${serverRenderer.ssrRenderStyle(isOpen.value ? null : { display: "none" })}" class="sidebar-item-children"${_scopeId}><!--[-->`);
              serverRenderer.ssrRenderList(vue.unref(item).children, (child) => {
                _push2(serverRenderer.ssrRenderComponent(_component_SidebarItem, {
                  key: `${vue.unref(depth)}${child.text}${child.link}`,
                  item: child,
                  depth: vue.unref(depth) + 1
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></ul>`);
            } else {
              return [
                vue.withDirectives(vue.createVNode("ul", { class: "sidebar-item-children" }, [
                  (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child) => {
                    return vue.openBlock(), vue.createBlock(_component_SidebarItem, {
                      key: `${vue.unref(depth)}${child.text}${child.link}`,
                      item: child,
                      depth: vue.unref(depth) + 1
                    }, null, 8, ["item", "depth"]);
                  }), 128))
                ], 512), [
                  [vue.vShow, isOpen.value]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/SidebarItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const sidebarItems = useSidebarItems();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(sidebarItems).length) {
        _push(`<ul${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar-items" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(sidebarItems), (item) => {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$3, {
            key: item.link || item.text,
            item
          }, null, _parent));
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/SidebarItems.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$a, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$2, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</aside>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Sidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const shouldShowNavbar = vue.computed(() => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false);
    const sidebarItems = useSidebarItems();
    const isSidebarOpen = vue.ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    const containerClass = vue.computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    vue.onMounted(() => {
      const router = vueRouter.useRouter();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    vue.onUnmounted(() => {
      unregisterRouterHook();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["theme-container", vue.unref(containerClass)]
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar", {}, () => {
        if (vue.unref(shouldShowNavbar)) {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$7, null, {
            before: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-before", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "navbar-before")
                ];
              }
            }),
            after: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-after", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "navbar-after")
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<div class="sidebar-mask"></div>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar", {}, () => {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$1, null, {
          top: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "sidebar-top")
              ];
            }
          }),
          bottom: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "sidebar-bottom")
              ];
            }
          }),
          _: 3
        }, _parent));
      }, _push, _parent);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "page", {}, () => {
        if (vue.unref(frontmatter).home) {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$e, null, null, _parent));
        } else {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$4, vue.mergeProps({
            key: vue.unref(page).path
          }, _attrs), {
            top: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "page-top")
                ];
              }
            }),
            bottom: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "page-bottom")
                ];
              }
            }),
            _: 3
          }, _parent));
        }
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main
});
exports.createVueApp = createVueApp;
