<script>
  import { base } from '$app/paths'
  export let data

  const {
    contact,
    summary,
    education,
    publications,
    languages,
    roles,
    skillsOrg,
    companies,
    teaching,
    projectsArray,
    experience
  } = data.resumesData
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

<h2>{contact.title}</h2>
<div class="info">
  <p><b>Full Name: </b> {contact.fullname}</p>
  <p><b>Email: </b> <a href="mailto:gu@gubasso.xyz">{contact.email}</a></p>
  <!-- <p><b>Phone: </b> {@html contact.phone}</p> -->
  <p>
    <b>Phone: </b> <a href="tel:{contact.phone}">{contact.phone}</a> (<a
      href="https://wa.me/{contact.phone}">Whatsapp Me</a
    >)
  </p>

  <p>
    <b>Site: </b>
    <a target="_blank" rel="external noopener noreferrer" href="https://gubasso.xyz"
      >{contact.site}</a
    >
  </p>
  <!-- <p><b>Social: </b> {@html contact.social.join(', ')}</p> -->
  <p>
    <b>Social: </b>
    {#each contact.social as social, i}
      <a target="_blank" rel="external noopener noreferrer" href={social.url}>{social.name}</a
      >{#if i < contact.social.length - 1},&nbsp;{/if}
    {/each}
    .
  </p>
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
