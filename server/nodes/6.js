import * as universal from '../entries/pages/blog/categories/_category_/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/categories/_category_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/categories/[category]/+page.js";
export const imports = ["_app/immutable/nodes/6.32b175d6.js","_app/immutable/chunks/paths.6d1a9b5a.js","_app/immutable/chunks/scheduler.779a6c84.js","_app/immutable/chunks/index.65e1d6df.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = [];
export const fonts = [];
