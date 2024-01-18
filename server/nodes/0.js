import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.79587083.js","_app/immutable/chunks/scheduler.779a6c84.js","_app/immutable/chunks/index.65e1d6df.js","_app/immutable/chunks/index.6b93fd4f.js","_app/immutable/chunks/paths.6d1a9b5a.js"];
export const stylesheets = ["_app/immutable/assets/0.29dcd890.css"];
export const fonts = [];
