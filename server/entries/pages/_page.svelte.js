import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { s as siteTitle, a as siteDescription } from "../../chunks/index3.js";
import "cal-heatmap";
import "cal-heatmap/plugins/Tooltip";
import "cal-heatmap/plugins/CalendarLabel";
const calHeatmap = "";
const CalHeatmap_svelte_svelte_type_style_lang = "";
const LoadingBar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".loader.svelte-x3y0tc{display:block;position:relative;height:12px;width:80%;border:1px solid #fff;border-radius:10px;overflow:hidden}.loader.svelte-x3y0tc::after{content:'';width:40%;height:100%;background:var(--color-accent-fg);position:absolute;top:0;left:0;box-sizing:border-box;animation:svelte-x3y0tc-animloader 2s linear infinite}@keyframes svelte-x3y0tc-animloader{0%{left:0;transform:translateX(-100%)}100%{left:100%;transform:translateX(0%)}}",
  map: null
};
const LoadingBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<span class="loader svelte-x3y0tc"></span>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".blog-container.svelte-whrh93.svelte-whrh93{display:flex;justify-content:center;align-items:center;flex-wrap:wrap}.blog-box.svelte-whrh93.svelte-whrh93{width:350px;min-height:300px;background-color:var(--color-canvas-subtle);border:1px solid var(--color-border-default);margin:20px;padding:30px}.blog-box.svelte-whrh93 h4.svelte-whrh93{margin:10px 0}.blog-box.svelte-whrh93 p.svelte-whrh93{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;margin:20px 0}.loading-bar.svelte-whrh93.svelte-whrh93{display:flex;justify-content:center}.calheatmap.svelte-whrh93.svelte-whrh93{display:flex;justify-content:center}.calheatmap-session.svelte-whrh93.svelte-whrh93{display:flex;flex-direction:column}.head.svelte-whrh93.svelte-whrh93{margin-top:4rem;margin-bottom:4rem}.gubasso.svelte-whrh93.svelte-whrh93{font-size:var(--step-6);color:var(--color-accent-fg);text-align:center}.xyz.svelte-whrh93.svelte-whrh93{color:var(--color-fg-default)}.title.svelte-whrh93.svelte-whrh93{font-size:var(--step-3);text-align:center;margin-top:3rem}.description.svelte-whrh93.svelte-whrh93{color:var(--color-fg-description);text-align:center;margin-top:1.5rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-17wlmtg_START -->${$$result.title = `<title>gubasso.xyz</title>`, ""}<!-- HEAD_svelte-17wlmtg_END -->`, ""} <session class="head svelte-whrh93"><h1 class="gubasso svelte-whrh93" data-svelte-h="svelte-28757z">gubasso.[<span class="xyz svelte-whrh93">xyz</span>]</h1> <h2 class="title svelte-whrh93">${escape(siteTitle)}</h2> <p class="description svelte-whrh93">${escape(siteDescription)}</p></session> <main>${`<session class="loading-bar svelte-whrh93">${validate_component(LoadingBar, "LoadingBar").$$render($$result, {}, {}, {})}</session>`} ${``} </main>`;
});
export {
  Page as default
};
