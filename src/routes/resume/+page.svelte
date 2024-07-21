<script>
  import AnchorExt from '$lib/components/AnchorExt.svelte'

  export let data
  let {
    contact,
    summary,
    experience,
    projects,
    roles,
    companies,
    skills,
    education,
    publications,
    teaching,
    languages
  } = data
  const currYear = new Date().getFullYear()
  const skillYearsTxt = (sinceYear) => {
    const totalYears = currYear - sinceYear
    const txt = totalYears == 1 ? ' year' : ' years'
    return totalYears + txt
  }
</script>

<svelte:head>
  <title>gubasso.xyz - Resume / CV</title>
</svelte:head>

<div class="title-container">
  <h1>Resume / CV</h1>
  <!-- <a -->
  <!--   href="{base}/resume.pdf" -->
  <!--   download -->
  <!--   class="download-button" -->
  <!--   title="Download Resume" -->
  <!--   aria-label="Download Resume" -->
  <!-- > -->
  <button
    on:click={() => window.print()}
    class="download-button"
    title="Download Resume"
    aria-label="Download Resume"
  >
    <iconify-icon icon="ic:baseline-download" />
  </button>
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
    <AnchorExt url={contact.site} label={contact.site} />
  </p>
  <p>
    <b>Social: </b>
    {#each contact.social as social, i}
      <AnchorExt url={social.url} label={social.name} />
      {#if i < contact.social.length - 1},&nbsp;{/if}
    {/each}.
  </p>
  <p><b>Location: </b> {contact.location}</p>
</div>

<h2>{summary.title}</h2>
<p>{summary.summary}</p>

<h2>Work Experience</h2>
{#each experience as exp}
  <h3 class="exp-title">
    <div class="grid-cont">
      <span
        >{exp.title} at {companies[exp.company].company}
        <a href="#{exp.company}" class="hash-item hash-company">#{exp.company}</a></span
      >
      <span class="date-of-employment">{exp['date-of-employment']}</span>
    </div>
  </h3>
  <div class="info">
    <p class="pdf-info-item">
      <b>Roles: </b>
      {#each exp.roles as role}
        <a href="#{role}" class="hash-item">#{role}</a>
      {/each}
    </p>
    {#if exp.projects}
      <p>
        <b>Projects: </b>
        {#each exp.projects as project}
          <a href="#{project}" class="hash-item">#{project}</a>
        {/each}
      </p>
    {/if}
  </div>
{/each}

<h2>Projects</h2>
{#each Object.entries(projects).sort((a, b) => b[1].year - a[1].year) as [id, proj]}
  <h3 {id}>{proj['short-title']}</h3>
  <span>#{id}</span>
  <div class="info">
    <p><b>Title: </b> {proj.title}</p>
    <p>
      <b>Skills: </b>
      {#each proj.skills as skill}
        <a href="#{skill}" class="hash-item">#{skill}</a>
      {/each}
    </p>
    <p><b>Summary: </b> {proj.summary}</p>
    <ul>
      {#each proj.bullets as bullet}
        <li>{bullet}</li>
      {/each}
    </ul>
    {#if proj.links}
      <p>
        <b>Links: </b>
        {#each proj.links as link, i}
          <AnchorExt url={link.url} label={link.label} />
          {#if i < proj.links.length - 1},&nbsp;{/if}
        {/each}.
      </p>
    {/if}
  </div>
{/each}

<h2>Roles</h2>
{#each Object.entries(roles) as [id, role]}
  <h3 {id}>{role.title}</h3>
  <span>#{id}</span>
  <div class="info">
    <ul>
      {#each role.description as desc}
        <li>{desc}</li>
      {/each}
    </ul>
  </div>
{/each}

<h2>Skills</h2>
<div class="skills-grid">
  {#each Object.entries(skills) as [id, skill]}
    <div class="skill-item" {id}>
      <div class="skill-label">{skill.label}</div>
      <div class="skill-experience">{skillYearsTxt(skill['since-year'])}</div>
      <div class="skill-id">#{id}</div>
    </div>
  {/each}
</div>

<h2>Education</h2>
<div class="info">
  <p><b>Title: </b> {education.doctor.title}</p>
  <p>
    <b>University: </b>
    <AnchorExt url={education.doctor.link} label={education.doctor.university} />
  </p>
  <p><b>Location: </b> {education.doctor.location}</p>
  <p><b>Attended: </b> {education.doctor.attended}</p>
  <p><b>Notes: </b> {education.doctor.notes}</p>
  <p><b>Areas Of Study: </b> {education.doctor['areas-of-study'].join(', ')}.</p>
</div>
<div class="info">
  <p><b>Title: </b> {education.master.title}</p>
  <p>
    <b>University: </b>
    <AnchorExt url={education.master.link} label={education.master.university} />
  </p>
  <p><b>Location: </b> {education.master.location}</p>
  <p><b>Graduated: </b> {education.master.graduated}</p>
  <p><b>Dissertation Title: </b> {education.master.dissertationTitle}</p>
  <p><b>Areas Of Study: </b> {education.master['areas-of-study'].join(', ')}.</p>
</div>
<div class="info">
  <p><b>Title: </b> {education.bachelor.title}</p>
  <p>
    <b>University: </b>
    <AnchorExt url={education.bachelor.link} label={education.bachelor.university} />
  </p>
  <p><b>Location: </b> {education.bachelor.location}</p>
  <p><b>Graduated: </b> {education.bachelor.graduated}</p>
  <p><b>Monograph Title: </b> {education.bachelor.monographTitle}</p>
  <p><b>Areas Of Study: </b> {education.bachelor['areas-of-study'].join(', ')}.</p>
</div>

<h2>Publications</h2>
{#each publications as pub}
  <div class="info">
    <p>
      <b>Title: </b>
      {pub.english}
      {#if pub.link}
        <AnchorExt url={pub.link} label="Access Link" />
      {/if}
    </p>
    <p><b>Area: </b> {pub.area}</p>
  </div>
{/each}

<h2>Teachings / Lectures</h2>
<div class="info">
  <ul>
    {#each Object.entries(teaching) as [id, teach]}
      <li {id}>
        <b>{teach.title}</b>: {teach.description}
      </li>
    {/each}
  </ul>

  <h2>Languages</h2>
  <div class="info">
    <ul>
      {#each languages as lang}
        <li><b>{lang.lang}: </b> {lang.proficiency}</li>
      {/each}
    </ul>
  </div>
</div>

<h2>Companies</h2>
{#each Object.entries(companies) as [id, company]}
  <h3 {id}>{company['short-name']}</h3>
  <span>#{id}</span>
  <div class="info">
    <p><b>Company: </b> {company.company}</p>
    <p><b>Location: </b> {company.location}</p>
    {#if company.links}
      <p>
        <b>Links: </b>
        {#each company.links as link, i}
          <AnchorExt url={link.url} label={link.name} />
          {#if i < company.links.length - 1},&nbsp;{/if}
        {/each}.
      </p>
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
    grid-template-columns: 2fr 1fr;
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

  a {
    word-wrap: normal !important; /* Avoid breaking words */
    overflow-wrap: normal !important; /* Avoid breaking words */
    white-space: normal !important; /* Allows wrapping to the next line */
    word-break: keep-all !important; /* Prevents word breaking */
    hyphens: none !important; /* Prevents hyphenation */
  }

  .hash-item {
    font-size: var(--step-0);
    background-color: var(--color-border-muted);
    padding: 5px 10px;
    margin: 5px 6px;
  }

  .hash-company {
    background-color: transparent;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }

  .skill-item {
    background-color: var(--color-border-muted);
    padding: 20px;
    border-radius: 5px;
    text-align: center;
  }

  .skill-label {
    font-size: var(--step-0);
    font-weight: bold;
    margin-bottom: 10px;
  }

  .skill-experience {
    font-size: var(--step-0);
    color: var(--color-neutral-emphasis);
    margin-bottom: 10px;
  }

  .skill-id {
    font-size: var(--step--1);
    color: var(--color-neutral-muted);
  }

  .date-of-employment {
    text-align: right;
  }
</style>
