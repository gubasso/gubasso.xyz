const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const load = async ({ params }) => {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../../posts/ripissue-as-a-poor-mans-issue-tracker.md": () => import("../../../../chunks/ripissue-as-a-poor-mans-issue-tracker.js") }), `../../../../posts/${params.slug}.md`);
  return {
    Content: post.default,
    ...post.metadata
  };
};
export {
  load
};
