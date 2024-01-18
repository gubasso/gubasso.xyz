

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.1ad16768.js","_app/immutable/chunks/scheduler.779a6c84.js","_app/immutable/chunks/index.65e1d6df.js"];
export const stylesheets = [];
export const fonts = [];
