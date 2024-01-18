import { c as create_ssr_component, f as each, e as escape } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { categories } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1g7n56z_START -->${$$result.title = `<title>gubasso.xyz - Blog - All Categories</title>`, ""}<!-- HEAD_svelte-1g7n56z_END -->`, ""} ${categories.length ? `<h1 data-svelte-h="svelte-xld1th">All categories:</h1> <ul>${each(categories, (cat) => {
    return `<li>${escape(cat)}</li>`;
  })}</ul>` : `<h1 data-svelte-h="svelte-1ir7yil">No category is registered</h1>`}`;
});
export {
  Page as default
};
