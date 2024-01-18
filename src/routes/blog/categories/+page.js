import { base } from '$app/paths'

export const load = async ({ fetch }) => {
  const response = await fetch(`${base}/api/categories`)
  const categories = await response.json()
  return categories
}
