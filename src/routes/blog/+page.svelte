<script lang="ts">
  import type { PageData } from './$types'
  export let data: PageData
</script>

<svelte:head>
  <title>gubasso.xyz - Blog</title>
</svelte:head>

<h1>Blog</h1>
<h2>Main Blog Page</h2>

<ul>
  {#each data.posts as post}
    <li>
      <h2>
        <a href={`blog/${post.slug}`}>{post.title}</a>
      </h2>
      Published: {post.date}
      <p>{post.description}</p>
    </li>
  {/each}
</ul>
