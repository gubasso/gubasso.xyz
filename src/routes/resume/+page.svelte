<script>
  import yaml from 'js-yaml'
  import DOMPurify from 'dompurify'
  import { onMount } from 'svelte'

  let main
  let education
  let publications
  let languages
  let experience
  let roles
  let projects
  let skills
  let skillsOrg
  let companies
  let teaching
  let areAllLoaded = false

  const loadYaml = async (path) => {
    const resp = await fetch(path)
    const text = await resp.text()
    return yaml.load(text)
  }

  onMount(async () => {
    main = await loadYaml('/resume/main.yaml')
    education = main.education
    publications = main.publications
    languages = main.languages
    roles = await loadYaml('/resume/roles.yaml')
    skills = await loadYaml('/resume/skills.yaml')
    skillsOrg = await loadYaml('/resume/skills-org.yaml')
    for (const skill in skills) {
      skills[skill].categories.forEach((groupCat) => {
        const group = Object.keys(groupCat)[0]
        const cat = groupCat[group]
        let registeredSkills = skillsOrg[group].categories[cat].skills
        if (registeredSkills) {
          skillsOrg[group].categories[cat].skills.push(skills[skill].title)
        } else {
          skillsOrg[group].categories[cat].skills = [skills[skill].title]
        }
      })
    }
    companies = await loadYaml('/resume/companies.yaml')
    console.log(companies)
    teaching = await loadYaml('/resume/teaching.yaml')
    projects = await loadYaml('/resume/projects.yaml')
    experience = await loadYaml('/resume/experience.yaml')
    experience.forEach((e) => {
      e.roles =
        e.roles?.map((item) => {
          if (!(item in roles)) {
            throw new Error(`Item: ${item} do not exists in roles`)
          }
          return roles[item].title
        }) ?? e.roles
      e.projects =
        e.projects?.map((item) => {
          if (!(item in projects)) {
            throw new Error(`Item: ${item} do not exists in projects`)
          }
          return projects[item].shortTitle
        }) ?? e.projects
      e.skills =
        e.skills?.map((item) => {
          if (!(item in skills)) {
            throw new Error(`Item: ${item} do not exists in skills`)
          }
          return skills[item].title
        }) ?? e.skills
      e.teaching =
        e.teaching?.map((item) => {
          if (!(item in teaching)) {
            throw new Error(`Item: ${item} do not exists in teaching`)
          }
          return teaching[item].title
        }) ?? e.teaching
      if (!(e.company in companies)) {
        throw new Error(`Item: ${e.company} do not exists in companies`)
      }
      e.company = companies[e.company].shortName
    })
    areAllLoaded = true
  })
</script>

<h1>Resume / CV</h1>

{#if areAllLoaded}
  <h2>Contact Information</h2>

  <div class="info">
    <p><b>Full Name: </b> {main.contact.fullname}</p>
    <p><b>Email: </b> {main.contact.fullname}</p>
    <p><b>LinkedIn: </b> <a href={main.contact.linkedin}>{main.contact.linkedin}</a></p>
    <p><b>GitHub: </b> <a href={main.contact.github}>{main.contact.github}</a></p>
    <p><b>GitLab: </b> <a href={main.contact.gitlab}>{main.contact.gitlab}</a></p>
    <p><b>LeetCode: </b> <a href={main.contact.leetcode}>{main.contact.leetcode}</a></p>
    <p><b>Location: </b> {main.contact.location}</p>
  </div>

  <h2>Professional Summary</h2>
  <p>{main.summary.data}</p>

  <h2>Work Experience</h2>
  {#each experience as exp}
    <h3>{exp.jobTitle}</h3>
    <div class="info">
      <p><b>Company: </b> {exp.company}</p>
      <p><b>Dates of Employment: </b> {exp.dateOfEmployment}</p>
      <p><b>Roles: </b> {exp.roles.join(', ')}</p>
      {#if exp.projects}
        <p><b>Projects: </b> {exp.projects.join(', ')}</p>
      {/if}
      <p><b>Skills: </b> {exp.skills.join(', ')}</p>
      {#if exp.teaching}
        <p><b>Teachings: </b> {exp.teaching.join(', ')}</p>
      {/if}
    </div>
  {/each}

  <h2>Education</h2>
  <h3>{education.doctor.title}</h3>
  <div class="info">
    <p><b>University: </b> <a href={education.doctor.link}>{education.doctor.university}</a></p>
    <p><b>Location: </b> {education.doctor.location}</p>
    <p><b>Attended: </b> {education.doctor.attended}</p>
    <p><b>Notes: </b> {education.doctor.notes}</p>
    <p><b>Areas Of Study: </b> {education.doctor.areasOfStudy}</p>
  </div>
  <h3>{education.master.title}</h3>
  <div class="info">
    <p><b>University: </b> <a href={education.master.link}>{education.master.university}</a></p>
    <p><b>Location: </b> {education.master.location}</p>
    <p><b>Graduated: </b> {education.master.graduated}</p>
    <p><b>Dissertation Title: </b> {education.master.dissertationTitle}</p>
    <p><b>Areas Of Study: </b> {education.master.areasOfStudy}</p>
  </div>
  <h3>{education.bachelor.title}</h3>
  <div class="info">
    <p><b>University: </b> <a href={education.bachelor.link}>{education.bachelor.university}</a></p>
    <p><b>Location: </b> {education.bachelor.location}</p>
    <p><b>Graduated: </b> {education.bachelor.graduated}</p>
    <p><b>Monograph Title: </b> {education.bachelor.monographTitle}</p>
    <p><b>Areas Of Study: </b> {education.bachelor.areasOfStudy}</p>
  </div>

  <h2>Publications</h2>
  {#each publications as pub}
    <div class="info">
      <p><b>Title: </b> {pub.title}</p>
      <p><b>English Title: </b> {pub.english}</p>
      <p><b>Area: </b> {pub.area}</p>
      {#if pub.link}
        <p><b>Available at: </b> <a href={pub.link}>{pub.link}</a></p>
      {/if}
    </div>
  {/each}

  <h2>Languages</h2>
  <div class="info">
    <ul>
      {#each languages as lang}
        <li><b>{lang.lang}: </b> {lang.proficiency}</li>
      {/each}
    </ul>
  </div>

  <h2>Projects</h2>
  {#each Object.entries(projects) as [id, proj]}
    <h3 {id}>{proj.shortTitle}</h3>
    <div class="info">
      <p><b>Title: </b> {proj.title}</p>
      <p><b>Project Nature: </b> {proj.types.join(', ')}</p>
      <p><b>Description: </b> {proj.description}</p>
      {#if proj.links}
        <p><b>Links: </b> {@html DOMPurify.sanitize(proj.links.join(', '))}</p>
      {/if}
    </div>
  {/each}

  <h2>Roles</h2>
  {#each Object.entries(roles) as [id, role]}
    <h3 {id}>{role.title}</h3>
    <div class="info">
      <ul>
        {#each role.description as desc}
          <li>{desc}</li>
        {/each}
      </ul>
    </div>
  {/each}

  <h2>Skills</h2>
  {#each Object.entries(skillsOrg) as [id, skillGroup]}
    <h3 {id}>{skillGroup.group}</h3>
    <div class="info">
      {#each Object.entries(skillGroup.categories) as [catId, category]}
        <p id={catId}><b>{category.label}: </b> {category.skills.join(', ')}</p>
      {/each}
    </div>
  {/each}

  <h2>Teachings</h2>
  <div class="info">
    <ul>
      {#each Object.entries(teaching) as [id, teach]}
        <li {id}>
          <b>{teach.title}</b>
          {#if teach.description}
            : {teach.description}
          {/if}
        </li>
      {/each}
    </ul>
  </div>

  <h2>Companies</h2>
  {#each Object.entries(companies) as [id, company]}
    <h3 {id}>{company.shortName}</h3>
    <div class="info">
      <p><b>Company: </b> {company.company}</p>
      <p><b>Location: </b> {company.location}</p>
      {#if company.links}
        <p><b>Links: </b> {@html DOMPurify.sanitize(company.links.join(', '))}</p>
      {/if}
    </div>
  {/each}
{/if}

<style>
  .info {
    margin-top: 1rem;
  }
  .info p {
    margin: 0;
  }
  .info li {
    line-height: 1.5;
  }
</style>
