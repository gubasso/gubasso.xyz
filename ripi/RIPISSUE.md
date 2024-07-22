# RIPISSUE

<!-- toc -->

- [ongoing](#ongoing)
- [backlog / refactor icp](#backlog--refactor-icp)

<!-- tocstop -->

## ongoing

- [[projectspage-issue]]

## backlog / refactor icp

- implement mermaid.js to blog page (see isma.codes)
  - https://github.com/ismaelpamplona/isma.codes/blob/main/src/routes/blog/%5Bslug%5D/%2Bpage.svelte

- add img to projects page grid
- [ ] adjust footer links of printable resume to absolute addresses (do another footer version?)
- [ ] spinner download resume
- [ ] test iconify pure svg if it prints correctly, if yes, change from all icons
- [ ] make other adjustments (links in resume sections to iconify, etc...)
- navigation buttons: last section... top... download following
- skills: from grid to cloud component (bigger more years)
- tags: add tags to everything
- bring tags from skills (#)
- skills-tags -> add group inside each tag
- tags on skill-item
- [ ] refactor: deploy on icp
  - resume.pdf: deploy with static asset resume.pdf already rendered

- [ ] change link from yaml formats (instead of the complete a tag)
- [ ] set yaml template and validation at compile time
  - [ ] add skills fields for projects.yaml too (optional)
- [ ] social_footer_from_yaml: social footer from yaml
- [ ] footer: get contact infos/icons from resume yaml
- [ ] dynamic posts import from static, not from posts
- [ ] update blog page... add border box to each article and background like landing page
- [ ] gubasso.xyz: rss feed with static site
- [ ] one blog post per week
- [ ] add trainnings?
  - special resume session (not rendered by resume)

interactive tooltips for skills or other?
  - to show tags here?
skills org categories?

```yaml
tech:
  group: 'Technical/Programming Skills'
  categories:
    langs: label: 'Programming Languages'
    backend: label: 'Backend Development'
    gis: label: 'Geographic Information Systems (GIS)'
    webdev: label: 'Web/Frontend Development'
    softdev: label: 'Software Development'
infra:
  group: 'Infrastructure Management Skills'
  categories:
    devops: label: 'DevOps and Infrastructure Management'
    sysadmin: label: 'Systems Administration'
    serverSoft: label: 'Server Software Management'
    cloud: label: 'Cloud'
data:
  group: 'Data Engineering Skills'
  categories:
    database: label: 'Database Management & Storage'
    langs: label: 'Languages for Data Analysis and Manipulation'
financial:
  group: 'Financial/Investment Skills'
  categories:
    analysis: label: 'Financial/Market Analysis'
    investment: label: 'Investment Strategies'
    soft: label: 'Financial Software'
analytical:
  group: 'Analytical/Research Skills'
  categories:
    methodologies: label: 'Research Methodologies'
    statistics: label: 'Statistical Modeling and Methods'
soft:
  group: 'Soft Skills'
  categories:
    comm: label: 'Communication'
    lead: label: 'Leadership'
    problem: label: 'Problem-Solving'
    time: label: 'Time Management'
    collab: label: 'Collaboration'
```
