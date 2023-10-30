// - for each branch (branch_id: commit.sha): get all commits
//   - https://api.github.com/repos/gubasso/gubasso.xyz/commits?sha={branch_id}&since=YYYY-MM-DDTHH:MM:SSZ&per_page=100&page=1
//   - last page: empty array
//
// for each commit:
//   - filter by: author.login == gubasso
//
// - horizontal spinner while data is loading
//
import { getOneYearAgo, GitRepo } from '$lib/utils'

export const load = async () => {
  // TODO: same thing for cwnt-io
  console.log(getOneYearAgo)
  const user = 'gubasso'
  const gitRepo = new GitRepo('github', user)
  const repos = await gitRepo.getRepos()
  // const repo = repos[5].name
  // const brancheUrl = `https://api.github.com/repos/${user}/${repo}/branches`
  // const branchesResp = await fetch(brancheUrl)
  // const branches = await branchesResp.json()
  // const branchSha = branches[1].commit.sha
  // const oneYearAgo = getOneYearAgo().toISOString()
  // const commitsStr = `https://api.github.com/repos/${user}/${repo}/commits?sha=${branchSha}&since=${oneYearAgo}&per_page=100&page=1`
  // const commitsResp = await fetch(commitsStr)
  // const commits = await commitsResp.json()

  let data = {
    repos
    // oneYearAgo,
    // branches,
    // branchSha,
    // commits
  }
  return data
}
