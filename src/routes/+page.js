export const load = async ({ fetch }) => {
  try {
    const reqs = [
      fetch('https://brag.gubasso.xyz/count?by=day&author_email=gubasso@eambar.net'),
      fetch('https://brag.gubasso.xyz/count?by=day&author_email=gubasso@cwnt.io')
    ]
    const resps = await Promise.all(reqs)
    if (!resps.every((resps) => resps.ok)) {
      throw new Error('Failed to fetch data from brag.gubasso.xyz')
    }
    const repos_count = (await Promise.all(resps.map((resps) => resps.json()))).reduce(
      (acc, array) =>
        acc.concat(
          array.map((i) => ({
            value: i.count,
            date: new Date(i.date_agg).toISOString().split('T')[0]
          }))
        ),
      []
    )
    return { repos_count }
  } catch (error) {
    return { error }
  }
}
