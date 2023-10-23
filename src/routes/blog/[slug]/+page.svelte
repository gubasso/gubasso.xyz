<script>
  import '$lib/styles/rehype.css'
  import '$lib/styles/prism-vsc-dark-plus.css'
  export let data
  const { title, date, description, categories, Content } = data
</script>

<svelte:head>
  <title>gubasso.xyz - Blog - {title}</title>
  <meta property="og:title" content={title} />
</svelte:head>

<article>
  <h1>{title}</h1>
  <p class="description">{description}</p>
  <p class="published">Published at: {date}</p>
  {#if categories?.length}
    <div class="categories">
      <p>Categories:</p>
      {#each categories as cat}
        <a class="category" href="/blog/categories/{cat}">{cat}</a>
      {/each}
    </div>
  {/if}
  <Content />
</article>

<style>
  .description {
    font-size: var(--step-2);
    color: var(--color-fg-description);
  }
  .published {
    margin-top: 2rem;
    margin-bottom: 0.1rem;
    padding-top: 0.6rem;
    border-top: var(--borderWidth-thin) solid var(--color-border-default);
  }
  .categories {
    display: flex;
    flex-wrap: wrap;
    column-gap: 1rem;
    align-items: center;
    line-height: 1rem;
    padding-bottom: 0.6rem;
    border-bottom: var(--borderWidth-thin) solid var(--color-border-default);
  }
  .category {
    font-size: var(--step-0);
    border-radius: var(--borderRadius-full);
    background-color: var(--color-canvas-subtle);
    padding: 0.7rem;
  }
  a {
    color: inherit;
  }
</style>
