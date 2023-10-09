import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params }) => {
  /* @vite-ignore */
  const post = await import(`./${params.slug}.md`)
  const { title, date } = post.metadata
  const content = post.default

  return {
    content,
    title,
    date
  }
}
