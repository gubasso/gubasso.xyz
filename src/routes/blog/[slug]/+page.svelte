<script>
  import { base } from '$app/paths'
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
        <a class="category" href="{base}/blog/categories/{cat}">{cat}</a>
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
    font-size: var(--step--1);
    margin-top: 2rem;
    margin-bottom: 0.1rem;
    padding-top: 0.6rem;
    border-top: var(--borderWidth-thin) solid var(--color-border-default);
  }
  .categories {
    font-size: var(--step--1);
    display: flex;
    flex-wrap: wrap;
    column-gap: 1rem;
    align-items: center;
    line-height: 1rem;
    padding-bottom: 0.6rem;
    border-bottom: var(--borderWidth-thin) solid var(--color-border-default);
  }
  .categories p {
    font-size: var(--step--1);
  }
  .category {
    font-size: var(--step--1);
    border-radius: var(--borderRadius-full);
    background-color: var(--color-canvas-subtle);
    padding: 0.7rem;
  }
  a {
    color: inherit;
  }
</style>
