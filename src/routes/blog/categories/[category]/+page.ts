import type { Post } from '$lib/utils'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch, params }) => {
  const { category } = params
  const response = await fetch('/api/posts')
  const allPosts = await response.json()
  const posts = allPosts.filter((post: Post) => post.categories?.includes(category))
  return {
    category,
    posts
  }
}
