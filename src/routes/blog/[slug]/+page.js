export const load = async ({ params }) => {
  /* @vite-ignore */
  const post = await import(`../${params.slug}.md`)
  return {
    Content: post.default,
    ...post.metadata
  }
}
