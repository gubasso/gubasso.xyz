import { b as base } from "../../../../../chunks/paths.js";
const load = async ({ fetch, params }) => {
  const { category } = params;
  const response = await fetch(`${base}/api/posts`);
  const allPosts = await response.json();
  const posts = allPosts.filter((post) => post.categories?.includes(category));
  return {
    category,
    posts
  };
};
export {
  load
};
