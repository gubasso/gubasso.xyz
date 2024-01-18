import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import "js-yaml";
import { b as base } from "../../../chunks/paths.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".info.svelte-35avdz.svelte-35avdz{margin-top:0.6rem;margin-bottom:0.6rem}.info.svelte-35avdz p.svelte-35avdz{margin:0}.info.svelte-35avdz li.svelte-35avdz{line-height:1.5}h2.svelte-35avdz.svelte-35avdz{box-shadow:inset 0 -2px 0 0;margin-bottom:2rem}h3.svelte-35avdz.svelte-35avdz{margin-bottom:0.6rem}.grid-cont.svelte-35avdz.svelte-35avdz{display:grid;grid-template-columns:1fr 1fr}.download-button.svelte-35avdz.svelte-35avdz{display:flex;align-items:center;justify-content:center;width:fit-content;padding:10px;font-size:var(--step-2);background-color:#007bff;color:white;text-decoration:none;border-radius:5px;cursor:pointer}.download-button.svelte-35avdz.svelte-35avdz:hover{background-color:#0056b3}.title-container.svelte-35avdz.svelte-35avdz{display:flex;align-items:center;justify-content:space-between}.exp-title.svelte-35avdz.svelte-35avdz{font-size:var(--step-1)}.date-of-employment.svelte-35avdz.svelte-35avdz{text-align:right}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-qmrtbs_START -->${$$result.title = `<title>gubasso.xyz - Resume / CV</title>`, ""}<!-- HEAD_svelte-qmrtbs_END -->`, ""} <div class="title-container svelte-35avdz" data-svelte-h="svelte-2kd8p7"><h1>Resume / CV</h1> <a href="${escape(base, true) + "/resume.pdf"}" download class="download-button svelte-35avdz" title="Download Resume" aria-label="Download Resume"><iconify-icon icon="ic:baseline-download"></iconify-icon></a></div> ${``}`;
});
export {
  Page as default
};
