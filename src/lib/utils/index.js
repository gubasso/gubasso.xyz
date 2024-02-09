import yaml from 'js-yaml'
import { base } from '$app/paths'

const loadYaml = async (fetch, path) => {
  const resp = await fetch(`${base}${path}`)
  const text = await resp.text()
  return yaml.load(text)
}

export const fetchResumesData = async (fetch) => {
  const paths = [
    '/resume/contact.yaml',
    '/resume/summary.yaml',
    '/resume/education.yaml',
    '/resume/publications.yaml',
    '/resume/languages.yaml',
    '/resume/roles.yaml',
    '/resume/skills.yaml',
    '/resume/skills-org.yaml',
    '/resume/companies.yaml',
    '/resume/teaching.yaml',
    '/resume/projects.yaml',
    '/resume/experience.yaml'
  ]

  let [
    contact,
    summary,
    education,
    publications,
    languages,
    roles,
    skills,
    skillsOrg,
    companies,
    teaching,
    projects,
    experience
  ] = await Promise.all(paths.map((p) => loadYaml(fetch, p)))

  for (const skill in skills) {
    ;(skills[skill].categories ?? []).forEach((groupCat) => {
      const group = Object.keys(groupCat)[0]
      const cat = groupCat[group]
      let registeredSkills = skillsOrg[group].categories[cat].skills
      if (registeredSkills) {
        skillsOrg[group].categories[cat].skills.push(skills[skill].title)
      } else {
        skillsOrg[group].categories[cat].skills = [skills[skill].title]
      }
    })
  }

  let projectsArray = Object.entries(projects)
  projectsArray = projectsArray.sort((a, b) => b[1].year - a[1].year)
  experience.data.forEach((e) => {
    e.roles =
      e.roles?.map((item) => {
        if (!(item in roles)) {
          throw new Error(`Item: ${item} do not exists in roles`)
        }
        return roles[item].title
      }) ?? e.roles
    e.projects =
      e.projects?.map((item) => {
        if (!(item in projects)) {
          throw new Error(`Item: ${item} do not exists in projects`)
        }
        return projects[item].shortTitle
      }) ?? e.projects
    e.skills =
      e.skills?.map((item) => {
        if (!(item in skills)) {
          throw new Error(`Item: ${item} do not exists in skills`)
        }
        return skills[item].title
      }) ?? e.skills
    e.teaching =
      e.teaching?.map((item) => {
        if (!(item in teaching)) {
          throw new Error(`Item: ${item} do not exists in teaching`)
        }
        return teaching[item].title
      }) ?? e.teaching
    if (!(e.company in companies)) {
      throw new Error(`Item: ${e.company} do not exists in companies`)
    }
    e.company = companies[e.company].shortName
  })

  return {
    contact,
    summary,
    education,
    publications,
    languages,
    roles,
    skills,
    skillsOrg,
    companies,
    teaching,
    projects,
    projectsArray,
    experience
  }
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
