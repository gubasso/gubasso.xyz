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

export const getOneYearAgo = () => {
  let oneYearAgo = new Date()
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)
  oneYearAgo.setMonth(oneYearAgo.getMonth() + 1)
  return oneYearAgo
}

export class GitRepo {
  constructor(host, user) {
    this._user = user
    const baseUrls = {
      github: 'https://api.github.com'
    }
    this._urls = {
      base: baseUrls[host]
    }
    const reposUrls = {
      github: `${this._urls.base}/users/${this._user}/repos`
    }
    const branchesUrl = {
      github: (repoName) => {
        return `${this._urls.base}/repos/${this._user}/${repoName}/branches`
      }
    }
    this._urls = {
      ...this._urls,
      repos: reposUrls[host],
      branches: branchesUrl[host]
    }
    this._repos = []
    this._commits = []
  }

  async getData(sourceUrl) {
    const response = await fetch(sourceUrl)
    const data = await response.json()
    return data
  }
  async getRepos() {
    await this.setRepos(this._urls.repos)
    return this._repos
  }
  async setRepos(url) {
    if (this._repos.length) {
      return
    }
    let repos
    try {
      repos = await this.getData(url)
      console.log(repos)
      for (const repo of repos) {
        const branchesResp = await fetch(this._urls.branches(repo.name))
        console.log(branchesResp)
        // repo._branches = await branchesResp.json()
      }
    } catch (e) {
      console.error(e)
    }
    this._repos = repos
  }
}
