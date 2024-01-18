

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.7b646b66.js","_app/immutable/chunks/scheduler.779a6c84.js","_app/immutable/chunks/index.65e1d6df.js","_app/immutable/chunks/singletons.e0a10952.js","_app/immutable/chunks/paths.6d1a9b5a.js"];
export const stylesheets = [];
export const fonts = [];
