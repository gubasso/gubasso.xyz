export const load = async ({ params }) => {
  /* @vite-ignore */
  const post = await import(`../../../../posts/${params.slug}.md`)
  return {
    Content: post.default,
    ...post.metadata
  }
}
