import { e as createStaticVNode } from "./app.466ab099.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<blockquote><p>\u8FC1\u79FB\u7BA1\u7406\u7AEF\u9879\u76EE,\u63A5\u53E3\u5DF2\u7ECF\u6709\u4E86,\u65B0\u52A0\u5165\u5BFC\u51FA excel \u529F\u80FD,\u5C1D\u8BD5\u4F7F\u7528\u524D\u7AEF\u6765\u5BFC\u51FA:</p></blockquote><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>let content = `&quot;id&quot;,&quot;number&quot;,&quot;string&quot;,&quot;smile&quot;\n&quot;11&quot;,&quot;111&quot;,&quot;ssd&quot;,&quot;\u563F\u563F&quot;\n&quot;22&quot;,&quot;222&quot;,&quot;kk&quot;,&quot;\u54C8\u54C8&quot;\n&quot;33&quot;,&quot;333&quot;,&quot;sf&quot;,&quot;\u5475\u5475&quot;`;\nfunction loadFile(){\n    let aLink = document.createElement(&#39;a&#39;);\n    let blob = new Blob([content], { // \u8FD9\u91CC\u4F20\u5165\u6570\u7EC4\n        type: &#39;text/plain&#39;\n    });\n    aLink.download = &#39;test.csv&#39;;\n    aLink.href = URL.createObjectURL(blob);\n    aLink.click();\n    URL.revokeObjectURL(blob);\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>', 2);
function _sfc_render(_ctx, _cache) {
  return _hoisted_1;
}
var _20191202_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { _20191202_html as default };
