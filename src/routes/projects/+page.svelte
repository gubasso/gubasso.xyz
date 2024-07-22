<script>
  import { base } from '$app/paths'

  import AnchorExt from '$lib/components/AnchorExt.svelte'
  import SkillsGrid from '$lib/components/SkillsGrid.svelte'

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
</script>

<svelte:head>
  <title>gubasso.xyz - Projects</title>
</svelte:head>

<h1>Projects</h1>

<div class="projects-grid">
  {#each Object.entries(projects).sort((a, b) => b[1].year - a[1].year) as [id, proj]}
    <div {id} class="project-item">
      <!-- <img src="{base}/{id}.png" style="max-width: 100%;" alt="{proj.title}"> -->
      <div class="title-links">
        <h2>{proj['short-title']}</h2>
        {#if proj.links}
          <div class="links">
            {#each proj.links as link}
              <AnchorExt url={link.url} label={link.icon} isIconify />
            {/each}
          </div>
        {/if}
      </div>
      <p class="title">{proj.title}</p>
      <p class="summary">{proj.summary}</p>
      <ul class="description">
        {#each proj.bullets as bullet}
          <li>{bullet}</li>
        {/each}
      </ul>
      <SkillsGrid ids={proj.skills} {skills} />
    </div>
  {/each}
</div>

<style>
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 20px;
  }

  .project-item {
    border: 1px solid #ccc;
    padding: 20px;
    transition: transform 0.2s;
  }

  .project-item:hover {
    transform: translateY(-10px);
  }

  .project-item img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  .project-item h2,
  .links {
    font-size: var(--step-2);
    margin: 5px;
  }
  .project-item .title-links {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  .project-item .title-links .links {
    flex-wrap: wrap;
    display: flex;
    gap: 10px;
  }

  .project-item .title {
    font-size: var(--step-1);
    font-style: italic;
    color: #666;
    margin: 0;
    line-height: 1.2;
  }

  .project-item .summary {
    font-size: var(--step-0);
    margin-bottom: 10px;
    line-height: 1.3;
  }

  .project-item .description {
    margin-bottom: 20px;
    padding-left: 20px;
  }
  .project-item .description li {
    font-size: var(--step-0);
    line-height: 1.3;
  }

  .project-item .skills {
    font-weight: bold;
  }
</style>
