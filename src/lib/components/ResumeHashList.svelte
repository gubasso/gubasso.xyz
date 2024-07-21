<script>
  export let label
  export let list
</script>

<div class="resume-hash-list-block">
  <div class="resume-hash-list-label">
    {label}:
  </div>
  <ul class="resume-hash-list-items">
    {#each list as item}
      <li class="resume-hash-list-item">
        <a href="#{item}">#{item}</a>
      </li>
    {/each}
  </ul>
</div>

<style>
  .resume-hash-list-block {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto 1fr;
    gap: 10px;
    margin: 0;
  }
  .resume-hash-list-label {
    font-size: var(--step-0);
    line-height: 2rem;
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 7px;
  }
  .resume-hash-list-items {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    padding-left: 7px;
    border-left: var(--borderWidth-thick) dashed var(--color-header-search-border);
    border-radius: var(--borderRadius-full);
  }
  .resume-hash-list-item {
    font-size: var(--step-0);
    background-color: var(--color-border-muted);
    padding: 5px 10px;
    margin: 5px 6px;
    line-height: var(--step-1);
  }
  a {
    word-wrap: normal !important; /* Avoid breaking words */
    overflow-wrap: normal !important; /* Avoid breaking words */
    white-space: normal !important; /* Allows wrapping to the next line */
    word-break: keep-all !important; /* Prevents word breaking */
    hyphens: none !important; /* Prevents hyphenation */
  }
</style>
