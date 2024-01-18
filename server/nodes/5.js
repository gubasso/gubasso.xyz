import * as universal from '../entries/pages/blog/categories/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/categories/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/categories/+page.js";
export const imports = ["_app/immutable/nodes/5.f892a8b9.js","_app/immutable/chunks/paths.6d1a9b5a.js","_app/immutable/chunks/scheduler.779a6c84.js","_app/immutable/chunks/index.65e1d6df.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = [];
export const fonts = [];
