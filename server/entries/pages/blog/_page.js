import { b as base } from "../../../chunks/paths.js";
const load = async ({ fetch }) => {
  const response = await fetch(`${base}/api/posts`);
  const posts = await response.json();
  return {
    posts
  };
};
export {
  load
};
