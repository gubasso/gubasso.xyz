import { c as create_ssr_component, e as escape, b as add_attribute, f as each, v as validate_component } from "../../../../chunks/ssr.js";
import { b as base } from "../../../../chunks/paths.js";
const rehype = "";
const prismVscDarkPlus = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".description.svelte-1f4sk7p.svelte-1f4sk7p{font-size:var(--step-2);color:var(--color-fg-description)}.published.svelte-1f4sk7p.svelte-1f4sk7p{font-size:var(--step--1);margin-top:2rem;margin-bottom:0.1rem;padding-top:0.6rem;border-top:var(--borderWidth-thin) solid var(--color-border-default)}.categories.svelte-1f4sk7p.svelte-1f4sk7p{font-size:var(--step--1);display:flex;flex-wrap:wrap;column-gap:1rem;align-items:center;line-height:1rem;padding-bottom:0.6rem;border-bottom:var(--borderWidth-thin) solid var(--color-border-default)}.categories.svelte-1f4sk7p p.svelte-1f4sk7p{font-size:var(--step--1)}.category.svelte-1f4sk7p.svelte-1f4sk7p{font-size:var(--step--1);border-radius:var(--borderRadius-full);background-color:var(--color-canvas-subtle);padding:0.7rem}a.svelte-1f4sk7p.svelte-1f4sk7p{color:inherit}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { title, date, description, categories, Content } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-y9b6wa_START -->${$$result.title = `<title>gubasso.xyz - Blog - ${escape(title)}</title>`, ""}<meta property="og:title"${add_attribute("content", title, 0)}><!-- HEAD_svelte-y9b6wa_END -->`, ""} <article><h1>${escape(title)}</h1> <p class="description svelte-1f4sk7p">${escape(description)}</p> <p class="published svelte-1f4sk7p">Published at: ${escape(date)}</p> ${categories?.length ? `<div class="categories svelte-1f4sk7p"><p class="svelte-1f4sk7p" data-svelte-h="svelte-1mux212">Categories:</p> ${each(categories, (cat) => {
    return `<a class="category svelte-1f4sk7p" href="${escape(base, true) + "/blog/categories/" + escape(cat, true)}">${escape(cat)}</a>`;
  })}</div>` : ``} ${validate_component(Content, "Content").$$render($$result, {}, {}, {})} </article>`;
});
export {
  Page as default
};
