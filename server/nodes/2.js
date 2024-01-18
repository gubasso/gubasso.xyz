

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.e23ca449.js","_app/immutable/chunks/scheduler.779a6c84.js","_app/immutable/chunks/index.65e1d6df.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.6d1a9b5a.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.6b93fd4f.js"];
export const stylesheets = ["_app/immutable/assets/2.f4e581ad.css"];
export const fonts = [];
