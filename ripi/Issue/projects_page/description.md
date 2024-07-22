# projects_page (Issue)

- [ ] make other adjustments (links in sections to iconify, etc...)
- [ ] test iconify pure svg if it prints correctly, if yes, change from all icons
- [ ] spinner download resume
- [ ] adjust footer links of printable resume to absolute addresses (do another footer version?)

```css
@media print {
    body {
        font-size: 12pt;
        line-height: 1.5;
    }

    h1, h2, h3 {
        color: black;
    }
}

@media print {
    body, .container {
        background: none;
    }

    img {
        max-width: 100%;
    }
}

@media print {
    .container {
        border: none;
        margin: 0;
        padding: 1in; /* Adjust padding for better layout */
    }
}

@media print {
    a[href]:after {
        content: " (" attr(href) ")";
    }
}

@media print {
    img {
        max-width: 100%;
        height: auto;
    }
}
```

## backlog

- skills-items are the groups!
  - "Skills-grid"
    - grid 1: skills (#tags)
    - grid 2: tags
  - show in a grid

- [ ] refactor yaml structure
  - skills-tags -> add group inside each tag

https://img.shields.io/badge/{label}-{color}?style={style}&logo={logo}&logoColor={logoColor}


- [ ] remove anchor tags from yaml and put only in html

projects_page : project's page
  - [ ] grid model

- [x] projects page
- [x] print resume page from the client
- [x] fix links throughout resume
- [x] companies section -> grid
  - change order
- [x] separate component for a hash-list
- [x] solved eslint / prettier issues after upgrading verions
- [x] add links to #roles #skills, etc
- [x] refactor fetchResumesData
- [x] implement skills-grid
- [x] validate yaml at compile time
- [x] all yaml validated manually
- [x] resume structure refactor
- [x] grammar correction for all yaml
- [x] building yamls schemas for data validation
- [x] review projects.yaml
- [x] review skills: are they really skills or roles?
- [x] change naming conventions
- [x] change skills hardcoded years


skills org categories

```yaml
tech:
  group: 'Technical/Programming Skills'
  categories:
    langs:
      label: 'Programming Languages'
      skills:
    backend:
      label: 'Backend Development'
      skills:
    gis:
      label: 'Geographic Information Systems (GIS)'
      skills:
    webdev:
      label: 'Web/Frontend Development'
      skills:
    softdev:
      label: 'Software Development'
      skills:
infra:
  group: 'Infrastructure Management Skills'
  categories:
    devops:
      label: 'DevOps and Infrastructure Management'
      skills:
    sysadmin:
      label: 'Systems Administration'
      skills:
    serverSoft:
      label: 'Server Software Management'
      skills:
    cloud:
      label: 'Cloud'
      skills:
data:
  group: 'Data Engineering Skills'
  categories:
    database:
      label: 'Database Management & Storage'
      skills:
    langs:
      label: 'Languages for Data Analysis and Manipulation'
      skills:
financial:
  group: 'Financial/Investment Skills'
  categories:
    analysis:
      label: 'Financial/Market Analysis'
      skills:
    investment:
      label: 'Investment Strategies'
      skills:
    soft:
      label: 'Financial Software'
      skills:
analytical:
  group: 'Analytical/Research Skills'
  categories:
    methodologies:
      label: 'Research Methodologies'
      skills:
    statistics:
      label: 'Statistical Modeling and Methods'
      skills:
soft:
  group: 'Soft Skills'
  categories:
    comm:
      label: 'Communication'
      skills:
    lead:
      label: 'Leadership'
      skills:
    problem:
      label: 'Problem-Solving'
      skills:
    time:
      label: 'Time Management'
      skills:
    collab:
      label: 'Collaboration'
      skills:
```



skill grid

interactive tooltips

```
<div class="skill-card" id="python-programming">
  <h3 class="skill-name">Python Programming</h3>
  <p class="skill-experience">5 years</p>
  <ul class="skill-tags">
    <li>Backend</li>
    <li>Scripting</li>
    <li>Data Analysis</li>
  </ul>
</div>

<div class="skill-item">
  <div class="skill-name">React</div>
  <div class="skill-id">react-05</div>
  <div class="skill-experience">1 year</div>
  <div class="skill-tooltip">
    A JavaScript library for building user interfaces
  </div>
</div>

.skill-item {
  position: relative;
}

.skill-tooltip {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;
}

.skill-item:hover .skill-tooltip {
  opacity: 1;
  visibility: visible;
}


```
