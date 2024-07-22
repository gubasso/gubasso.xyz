<script>
  export let ids = []
  export let skills

  const getSelectedSkills = () => {
    let selectedSkills
    if (ids.length > 0) {
      selectedSkills = ids.map((i) => [i, skills[i]])
    } else {
      selectedSkills = Object.entries(skills)
    }
    return selectedSkills
  }

  let selectedSkills = getSelectedSkills()

  const currYear = new Date().getFullYear()
  const skillYearsTxt = (sinceYear) => {
    const totalYears = currYear - sinceYear
    const txt = totalYears == 1 ? ' year' : ' years'
    return totalYears + txt
  }

  // sort skills
  // Object.entries(skills).sort((a, b) => a[1]['since-year'] - b[1]['since-year'])
</script>

<div class="skills-grid">
  {#each selectedSkills as [id, skill]}
    <div class="skill-item" {id}>
      <div class="skill-label">{skill.label}</div>
      <div class="skill-experience">{skillYearsTxt(skill['since-year'])}</div>
      <div class="skill-id">#{id}</div>
    </div>
  {/each}
</div>

<style>
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px;
  }

  .skill-item {
    background-color: var(--color-border-muted);
    padding: 10px;
    border-radius: 5px;
    text-align: center;
  }

  .skill-label {
    font-size: var(--step--2);
    font-weight: bold;
    margin-bottom: 5px;
  }

  .skill-experience {
    font-size: var(--step--2);
    color: var(--color-neutral-emphasis);
    margin-bottom: 5px;
  }

  .skill-id {
    font-size: var(--step--2);
    color: var(--color-neutral-muted);
  }
</style>
