import { base } from '$app/paths'

export const load = async ({ fetch }) => {
  const response = await fetch(`${base}/api/resumes-data`)
  const resumesData = await response.json()
  return resumesData
}
