

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/resume/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.69f6b269.js","_app/immutable/chunks/scheduler.779a6c84.js","_app/immutable/chunks/index.65e1d6df.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.6d1a9b5a.js"];
export const stylesheets = ["_app/immutable/assets/8.3a5b7e4a.css"];
export const fonts = [];
