import * as universal from '../entries/pages/blog/_slug_/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/4.a58a788d.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.779a6c84.js","_app/immutable/chunks/index.65e1d6df.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.6d1a9b5a.js"];
export const stylesheets = ["_app/immutable/assets/4.ac8363c0.css"];
export const fonts = [];
