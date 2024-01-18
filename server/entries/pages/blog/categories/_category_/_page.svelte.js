import { c as create_ssr_component, e as escape, f as each } from "../../../../../chunks/ssr.js";
import { b as base } from "../../../../../chunks/paths.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { category, posts } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-2qknl8_START -->${$$result.title = `<title>gubasso.xyz - Blog - Category: ${escape(category)}</title>`, ""}<!-- HEAD_svelte-2qknl8_END -->`, ""} <h1>Category: ${escape(category)}</h1> ${posts.length ? `<ul>${each(posts, (post) => {
    return `<li><h2><a href="${escape(base, true) + "/blog/" + escape(post.slug, true)}">${escape(post.title)}</a></h2>
        Published: ${escape(post.date)} <p>${escape(post.description)}</p> </li>`;
  })}</ul>` : `<p data-svelte-h="svelte-1sl2560">Not a valid category</p>`}`;
});
export {
  Page as default
};
