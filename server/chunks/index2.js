const fetchMarkdownPostsRaw = async () => {
  const allPostFiles = /* @__PURE__ */ Object.assign({ "/posts/ripissue-as-a-poor-mans-issue-tracker.md": () => import("./ripissue-as-a-poor-mans-issue-tracker.js") });
  const iterablePostFiles = Object.entries(allPostFiles);
  const allPosts = async () => {
    return await Promise.all(
      iterablePostFiles.map(async ([filepath, globEntry]) => {
        const { metadata } = await globEntry();
        const slug = filepath.slice(7, -3);
        return {
          ...metadata,
          slug
        };
      })
    );
  };
  const sortedPosts = await allPosts();
  sortedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return sortedPosts;
};
const fetchMarkdownPosts = async () => {
  const allRawPosts = await fetchMarkdownPostsRaw();
  return allRawPosts.map((post, index, allPosts) => ({
    ...post,
    next: allPosts[index - 1] || 0,
    previous: allPosts[index + 1] || 0
  }));
};
const fetchCategories = async () => {
  const allRawPosts = await fetchMarkdownPostsRaw();
  const catsSet = /* @__PURE__ */ new Set();
  allRawPosts.forEach((post) => {
    if (post?.categories) {
      post.categories.forEach((cat) => {
        catsSet.add(cat);
      });
    }
  });
  const categories = [...catsSet];
  categories.sort();
  return {
    categories
  };
};
export {
  fetchMarkdownPosts as a,
  fetchMarkdownPostsRaw as b,
  fetchCategories as f
};
