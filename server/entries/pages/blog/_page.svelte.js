import { c as create_ssr_component, f as each, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-2jg841{margin-top:2rem;margin-bottom:2rem}.time-categories.svelte-2jg841{display:flex;flex-wrap:wrap;align-items:center;column-gap:1rem;row-gap:0.5rem;color:var(--color-fg-subtle);line-height:1rem}.category.svelte-2jg841{font-size:var(--step-0);border-radius:var(--borderRadius-full);background-color:var(--color-canvas-subtle);padding:0.37rem 0.5rem}h3.svelte-2jg841{color:var(--color-fg-default);margin-top:0.75rem;margin-bottom:0.75rem;font-weight:600;line-height:1.2rem}a.svelte-2jg841{color:inherit}.description.svelte-2jg841{margin-top:1.25rem;font-size:0.875rem;line-height:1.25rem}p.svelte-2jg841{color:var(--color-fg-description)}time.svelte-2jg841{font-size:0.75rem}.blogs.svelte-2jg841{border-top:var(--borderWidth-thin) solid var(--color-border-default);margin-top:2.5rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-11jrtxr_START -->${$$result.title = `<title>gubasso.xyz - Blog</title>`, ""}<!-- HEAD_svelte-11jrtxr_END -->`, ""} <h2 data-svelte-h="svelte-zy0wuc">Gubasso&#39;s Blog</h2> <p class="subtitle svelte-2jg841" data-svelte-h="svelte-73y0or">Here I share some knowledge about Tech and other (un)useful stuff.</p>  <div class="blogs svelte-2jg841"> ${each(data.posts, (post) => {
    return `<article class="svelte-2jg841"> <div class="time-categories svelte-2jg841"><time${add_attribute("datetime", post.date, 0)} class="svelte-2jg841">${escape(post.date)}</time>  ${post.categories?.length ? `${each(post.categories, (cat) => {
      return `<a class="category svelte-2jg841" href="${escape(base, true) + "/blog/categories/" + escape(cat, true)}">${escape(cat)}</a>`;
    })}` : ``}</div>  <div><h3 class="svelte-2jg841"><a href="${escape(base, true) + "/blog/" + escape(post.slug, true)}" class="svelte-2jg841">${escape(post.title)}</a></h3> <p class="description svelte-2jg841">${escape(post.description)}</p></div> </article>`;
  })} </div>`;
});
export {
  Page as default
};
