import type { Post } from '$lib/utils'
import type { ComponentType } from 'svelte'
import type { PageLoad } from './$types'

type PostComponent = Post & {
  Content: ComponentType
}

export const load: PageLoad = async ({ params }): Promise<PostComponent> => {
  /* @vite-ignore */
  const post = await import(`../${params.slug}.md`)
  return {
    Content: post.default,
    ...post.metadata
  }
}
