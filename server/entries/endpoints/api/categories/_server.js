import { f as fetchCategories } from "../../../../chunks/index2.js";
import { j as json } from "../../../../chunks/index.js";
const GET = async () => {
  const allCategories = await fetchCategories();
  return json(allCategories);
};
export {
  GET
};
