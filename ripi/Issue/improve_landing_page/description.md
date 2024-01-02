# improve_landing_page (Issue)

- [x] [[##cal-heatmap]]
- [x] hero sessions
  - [x] loading spinner component
  - [x] latest blog posts

## cal-heatmap

- implemented loading data from brag.gubasso.xyz utilizing https://github.com/cwnt-io/brag-server
(depends on my rust-sql api)
- will no longer request data from github, but from my own api

XXX load data from github


- https://api.github.com/users/gubasso/repos
  - get list of repos

- for each repo: get all branches
  - branches_url

- for each branch (branch_id: commit.sha): get all commits
  - https://api.github.com/repos/gubasso/gubasso.xyz/commits?sha={branch_id}&since=YYYY-MM-DDTHH:MM:SSZ&per_page=100&page=1
  - last page: empty array

for each commit:
  - filter by: author.login == gubasso

- horizontal spinner while data is loading

- https://github.com/wa0x6e/cal-heatmap
  - https://cal-heatmap.com/docs/advanced/scaleType#quantize
    - or quantile
  - layout as gitlab (all squared)
