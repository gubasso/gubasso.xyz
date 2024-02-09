import { fetchResumesData } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async ({ fetch }) => {
  const resumesData = await fetchResumesData(fetch)
  return json(resumesData)
}
