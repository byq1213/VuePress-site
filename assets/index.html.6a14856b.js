import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, d as createTextVNode } from "./app.466ab099.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u524D\u7AEF\u9762\u8BD5\u9898",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u524D\u7AEF\u9762\u8BD5\u9898",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u524D\u7AEF\u9762\u8BD5\u9898")
], -1);
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\u8FD0\u7B97\u7B26");
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "<<< ./lean/code/web_interview/js/1.js", -1);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lean/operator.html" }, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
        })
      ])
    ]),
    _hoisted_3
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
