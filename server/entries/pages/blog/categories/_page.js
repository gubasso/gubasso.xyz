import { b as base } from "../../../../chunks/paths.js";
const load = async ({ fetch }) => {
  const response = await fetch(`${base}/api/categories`);
  const categories = await response.json();
  return categories;
};
export {
  load
};
