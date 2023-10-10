import { parse } from 'path'

export type Post = {
  title: string
  date: string
  description: string
  categories: string[]
  slug: string
}

type GlobEntry = {
  metadata: Post
  default: unknown
}

export const fetchMarkdownPostsRaw = async () => {
  const allPostFiles = import.meta.glob<GlobEntry>('/src/routes/blog/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)

  const allPosts = async () => {
    return await Promise.all(
      iterablePostFiles.map(async ([filepath, globEntry]) => {
        const { metadata } = await globEntry()
        return {
          ...metadata,
          slug: parse(filepath).name
        }
      })
    )
  }

  const sortedPosts = await allPosts()
  sortedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return sortedPosts
}

export const fetchMarkdownPosts = async () => {
  const allRawPosts = await fetchMarkdownPostsRaw()
  return allRawPosts.map((post, index, allPosts) => ({
    ...post,
    next: allPosts[index - 1] || 0,
    previous: allPosts[index + 1] || 0
  }))
}

export const fetchCategories = async () => {
  const allRawPosts = await fetchMarkdownPostsRaw()
  const catsSet = new Set()
  allRawPosts.forEach((post) => {
    if (post?.categories) {
      post.categories.forEach((cat) => {
        catsSet.add(cat)
      })
    }
  })
  const categories = [...catsSet]
  categories.sort()
  return {
    categories
  }
}
