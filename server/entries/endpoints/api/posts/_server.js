import { a as fetchMarkdownPosts } from "../../../../chunks/index2.js";
import { j as json } from "../../../../chunks/index.js";
const GET = async () => {
  const allPosts = await fetchMarkdownPosts();
  return json(allPosts);
};
export {
  GET
};
