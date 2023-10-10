import { fetchCategories, fetchMarkdownPostsRaw } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allCategories = await fetchCategories()
  return json(allCategories)
}
