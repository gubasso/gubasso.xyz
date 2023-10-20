export const fetchMarkdownPostsRaw = async () => {
  const allPostFiles = import.meta.glob('/src/routes/blog/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)

  const allPosts = async () => {
    return await Promise.all(
      iterablePostFiles.map(async ([filepath, globEntry]) => {
        const { metadata } = await globEntry()
        const slug = filepath.slice(17, -3)
        return {
          ...metadata,
          slug
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

/** Dispatch event on click outside of node */
export function clickOutside(node) {
  const handleClick = (event) => {
    if (node && !node.contains(event.target) && !event.defaultPrevented) {
      node.dispatchEvent(new CustomEvent('click_outside', node))
    }
  }

  document.addEventListener('click', handleClick, true)

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true)
    }
  }
}
