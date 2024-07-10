<script>
  import { base } from '$app/paths'
  export let data
  console.log(data)
</script>

<svelte:head>
  <title>gubasso.xyz - Blog</title>
</svelte:head>

<h2>Gubasso's Blog</h2>
<p class="subtitle">Here I share some knowledge about Tech and other (un?)useful stuff.</p>

<!-- arround blogs, with top border -->
<div class="blogs">
  <!-- each loop: one article -->
  {#each data.posts as post}
    <article>
      <!-- little header with date and categories -->
      <div class="time-categories">
        <time datetime={post.date}>{post.date}</time>
        <!-- each loop: categories -->
        {#if post.categories?.length}
          {#each post.categories as cat}
            <a class="category" href="{base}/blog/categories/{cat}">{cat}</a>
          {/each}
        {/if}
      </div>
      <!-- title and brief description -->
      <div>
        <h3><a href="{base}/blog/{post.slug}">{post.title}</a></h3>
        <p class="description">{post.description}</p>
      </div>
    </article>
  {/each}
</div>

<style>
  article {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .time-categories {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 1rem;
    row-gap: 0.5rem;
    color: var(--color-fg-subtle);
    line-height: 1rem;
  }
  .category {
    font-size: var(--step-0);
    border-radius: var(--borderRadius-full);
    background-color: var(--color-canvas-subtle);
    padding: 0.37rem 0.5rem;
  }
  h3 {
    color: var(--color-fg-default);
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    font-weight: 600;
    line-height: 1.2rem;
  }
  a {
    color: inherit;
  }
  .description {
    margin-top: 1.25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  p {
    color: var(--color-fg-description);
  }
  time {
    font-size: 0.75rem;
  }
  .blogs {
    border-top: var(--borderWidth-thin) solid var(--color-border-default);
    margin-top: 2.5rem;
  }
</style>
