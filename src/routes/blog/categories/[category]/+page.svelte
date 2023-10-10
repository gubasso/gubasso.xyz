<script lang="ts">
  import type { PageData } from './$types'
  export let data: PageData
  const { category, posts } = data
</script>

<h1>Category: {category}</h1>
{#if posts.length}
  <ul>
    {#each posts as post}
      <li>
        <h2>
          <a href={`/blog/${post.slug}`}>{post.title}</a>
        </h2>
        Published: {post.date}
        <p>{post.description}</p>
      </li>
    {/each}
  </ul>
{:else}
  <p>Not a valid category</p>
{/if}
