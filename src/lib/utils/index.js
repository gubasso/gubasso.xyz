import yaml from 'js-yaml'
import { base } from '$app/paths'
import path from 'path'

const loadYaml = async (fetch, path) => {
  const resp = await fetch(`${base}/${path}`)
  const text = await resp.text()
  return yaml.load(text)
}

export const fetchResumesData = async (fetch) => {
  const yamlFiles = [
    'resume/companies.yaml',
    'resume/competencies.yaml',
    'resume/contact.yaml',
    'resume/education.yaml',
    'resume/experience.yaml',
    'resume/languages.yaml',
    'resume/projects.yaml',
    'resume/publications.yaml',
    'resume/roles.yaml',
    'resume/skills.yaml',
    'resume/summary.yaml',
    'resume/tags.yaml',
    'resume/teaching.yaml'
  ]
  // const yamlFiles = await fg('resume/*.yaml', { cwd: 'static' })
  const resumeData = {}
  for (const yamlFile of yamlFiles) {
    const basename = path.basename(yamlFile, path.extname(yamlFile))
    const yamlData = await loadYaml(fetch, yamlFile)
    resumeData[basename] = yamlData
  }
  return resumeData
}

export const fetchMarkdownPostsRaw = async () => {
  const allPostFiles = import.meta.glob('/posts/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)

  const allPosts = async () => {
    return await Promise.all(
      iterablePostFiles.map(async ([filepath, globEntry]) => {
        const { metadata } = await globEntry()
        // const slug = filepath.slice(17, -3)
        const slug = filepath.slice(7, -3)
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
