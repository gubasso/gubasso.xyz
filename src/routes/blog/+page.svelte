<script lang="ts">
  import type { PageData } from './$types'
  export let data: PageData
</script>

<svelte:head>
  <title>gubasso.xyz - Blog</title>
</svelte:head>

<h2>Gubasso's Blog</h2>
<p>Here I share some knowledge about Tech and other (un)useful stuff.</p>

<!-- arround blogs, with top border -->
<div class="blogs">
  <!-- each loop: one article -->
  {#each data.posts as post}
    <article>
      <!-- little header with date and categories -->
      <div>
        <time datetime={post.date}>{post.date}</time>
        <!-- each loop: categories -->
        {#if post.categories?.length}
          {#each post.categories as cat}
            <a href="/blog/categories/{cat}">{cat}</a>
          {/each}
        {/if}
      </div>
      <!-- title and brief description -->
      <div>
        <h3><a href="/blog/{post.slug}">{post.title}</a></h3>
        <p>{post.description}</p>
      </div>
    </article>
  {/each}
</div>

<style>
  .blogs {
    margin-top: 2.5rem;
    border-top: 1px solid var(--gray-200);
    padding-top: 2.5rem;
  }
</style>
