<script>
  import yaml from 'js-yaml'
  import { onMount } from 'svelte'
  import { base } from '$app/paths'

  let contact
  let summary
  let education
  let publications
  let languages
  let experience
  let roles
  let projects
  let projectsArray
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
    contact = await loadYaml(`${base}/resume/contact.yaml`)
    summary = await loadYaml(`${base}/resume/summary.yaml`)
    education = await loadYaml(`${base}/resume/education.yaml`)
    publications = await loadYaml(`${base}/resume/publications.yaml`)
    languages = await loadYaml(`${base}/resume/languages.yaml`)
    roles = await loadYaml(`${base}/resume/roles.yaml`)
    skills = await loadYaml(`${base}/resume/skills.yaml`)
    skillsOrg = await loadYaml(`${base}/resume/skills-org.yaml`)
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
    companies = await loadYaml(`${base}/resume/companies.yaml`)
    teaching = await loadYaml(`${base}/resume/teaching.yaml`)
    projects = await loadYaml(`${base}/resume/projects.yaml`)
    projectsArray = Object.entries(projects)
    projectsArray = projectsArray.sort((a, b) => b[1].year - a[1].year)
    experience = await loadYaml(`${base}/resume/experience.yaml`)
    experience.data.forEach((e) => {
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

<svelte:head>
  <title>gubasso.xyz - Resume / CV</title>
</svelte:head>

<div class="title-container">
  <h1>Resume / CV</h1>
  <a
    href="{base}/resume.pdf"
    download
    class="download-button"
    title="Download Resume"
    aria-label="Download Resume"
  >
    <iconify-icon icon="ic:baseline-download" />
  </a>
</div>

{#if areAllLoaded}
  <h2>{contact.title}</h2>
  <div class="info">
    <p><b>Full Name: </b> {contact.fullname}</p>
    <p><b>Email: </b> {@html contact.email}</p>
    <p><b>Phone: </b> {@html contact.phone}</p>
    <p><b>Site: </b> {@html contact.site}</p>
    <p><b>Social: </b> {@html contact.social.join(', ')}</p>
    <p><b>Location: </b> {contact.location}</p>
  </div>

  <h2>{summary.title}</h2>
  <p>{summary.data}</p>

  <h2>Skills</h2>
  {#each Object.entries(skillsOrg) as [id, skillGroup]}
    <h3 {id}>{skillGroup.group}</h3>
    <div class="info">
      {#each Object.entries(skillGroup.categories) as [catId, category]}
        <p id={catId}><b>{category.label}: </b> {category.skills.join(', ')}</p>
      {/each}
    </div>
  {/each}

  <h2>{experience.title}</h2>
  {#each experience.data as exp}
    <h3 class="exp-title">
      <div class="grid-cont">
        <span>{exp.jobTitle} at {exp.company}</span><span class="date-of-employment"
          >{exp.dateOfEmployment}</span
        >
      </div>
    </h3>
    <div class="info">
      <p><b>Roles: </b> {exp.roles.join(', ')}</p>
      {#if exp.projects}
        <p><b>Projects: </b> {exp.projects.join(', ')}</p>
      {/if}
      <!-- <p><b>Skills: </b> {exp.skills.join(', ')}</p> -->
      {#if exp.teaching}
        <p><b>Teachings: </b> {exp.teaching.join(', ')}</p>
      {/if}
      <ul>
        {#each exp.description as desc}
          <li>{desc}</li>
        {/each}
      </ul>
    </div>
  {/each}

  <h2>Education</h2>
  <div class="info">
    <p><b>Title: </b> {education.doctor.title}</p>
    <p>
      <b>University: </b>
      <a target="_blank" rel="external noopener noreferrer" href={education.doctor.link}
        >{education.doctor.university}</a
      >
    </p>
    <p><b>Location: </b> {education.doctor.location}</p>
    <p><b>Attended: </b> {education.doctor.attended}</p>
    <p><b>Notes: </b> {education.doctor.notes}</p>
    <p><b>Areas Of Study: </b> {education.doctor.areasOfStudy}</p>
  </div>
  <div class="info">
    <p><b>Title: </b> {education.master.title}</p>
    <p>
      <b>University: </b>
      <a target="_blank" rel="external noopener noreferrer" href={education.master.link}
        >{education.master.university}</a
      >
    </p>
    <p><b>Location: </b> {education.master.location}</p>
    <p><b>Graduated: </b> {education.master.graduated}</p>
    <p><b>Dissertation Title: </b> {education.master.dissertationTitle}</p>
    <p><b>Areas Of Study: </b> {education.master.areasOfStudy}</p>
  </div>
  <div class="info">
    <p><b>Title: </b> {education.bachelor.title}</p>
    <p>
      <b>University: </b>
      <a target="_blank" rel="external noopener noreferrer" href={education.bachelor.link}
        >{education.bachelor.university}</a
      >
    </p>
    <p><b>Location: </b> {education.bachelor.location}</p>
    <p><b>Graduated: </b> {education.bachelor.graduated}</p>
    <p><b>Monograph Title: </b> {education.bachelor.monographTitle}</p>
    <p><b>Areas Of Study: </b> {education.bachelor.areasOfStudy}</p>
  </div>

  <h2>Projects</h2>
  {#each projectsArray as [id, proj]}
    <h3 {id}>{proj.shortTitle}</h3>
    <div class="info">
      <p><b>Title: </b> {proj.title}</p>
      <p><b>Project Nature: </b> {proj.types.join(', ')}</p>
      <p><b>Description: </b> {proj.description}</p>
      {#if proj.links}
        <p><b>Links: </b> {@html proj.links.join(', ')}</p>
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

  <h2>Publications</h2>
  {#each publications as pub}
    <div class="info">
      <p>
        <b>Title: </b>
        {pub.english}
        {#if pub.link}
          <a target="_blank" rel="external noopener noreferrer" href={pub.link}>{@html pub.link}</a>
        {/if}
      </p>
      <p><b>Area: </b> {pub.area}</p>
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

  <h2>Languages</h2>
  <div class="info">
    <ul>
      {#each languages as lang}
        <li><b>{lang.lang}: </b> {lang.proficiency}</li>
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
        <p><b>Links: </b> {@html company.links.join(', ')}</p>
      {/if}
    </div>
  {/each}
{/if}

<style>
  .info {
    margin-top: 0.6rem;
    margin-bottom: 0.6rem;
  }

  .info p {
    margin: 0;
  }
  .info li {
    line-height: 1.5;
  }
  h2 {
    box-shadow: inset 0 -2px 0 0; /* Adjust as needed */
    margin-bottom: 2rem;
  }
  h3 {
    margin-bottom: 0.6rem;
  }

  .grid-cont {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .download-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 10px;
    font-size: var(--step-2);
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .download-button:hover {
    background-color: #0056b3;
  }
  .title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .exp-title {
    font-size: var(--step-1);
  }
  .date-of-employment {
    text-align: right;
  }
</style>
