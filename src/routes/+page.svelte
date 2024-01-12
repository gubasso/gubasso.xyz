<script>
  import { onMount } from 'svelte'
  import { siteTitle, siteDescription } from '$lib'
  import CalHeatmap from '$lib/components/CalHeatmap.svelte'
  import LoadingBar from '$lib/spinners/LoadingBar.svelte'

  let isDataLoaded = false
  let arePostsLoaded = false
  let calHeatmapData = []
  let commitSum = 0
  let posts = []

  const fetchCalHeatmapData = async () => {
    const reqs = [
      fetch('https://brag.gubasso.xyz/count?by=day&author_email=gubasso@eambar.net'),
      fetch('https://brag.gubasso.xyz/count?by=day&author_email=gubasso@cwnt.io')
    ]
    const resps = await Promise.all(reqs)
    if (!resps.every((resps) => resps.ok)) {
      throw new Error('Failed to fetch data from brag.gubasso.xyz')
    }

    calHeatmapData = (await Promise.all(resps.map((resps) => resps.json()))).reduce(
      (acc, array) =>
        acc.concat(
          array.map((i) => ({
            value: i.count,
            date: new Date(i.date_agg).toISOString().split('T')[0]
          }))
        ),
      []
    )
    commitSum = calHeatmapData.reduce((acc, curr) => acc + curr.value, 0)
    isDataLoaded = true
  }

  const fetchPosts = async () => {
    const response = await fetch(`/api/posts`)
    posts = await response.json()
    arePostsLoaded = true
  }

  onMount(() => {
    Promise.all([fetchCalHeatmapData(), fetchPosts()]).catch((e) => {
      console.error('Error fetching data:', e)
    })
  })
</script>

<svelte:head>
  <title>gubasso.xyz</title>
</svelte:head>

<session class="head">
  <h1 class="gubasso">gubasso.[<span class="xyz">xyz</span>]</h1>
  <h2 class="title">{siteTitle}</h2>
  <p class="description">{siteDescription}</p>
</session>

<main>
  {#if isDataLoaded}
    <session class="calheatmap-session">
      <h3>{commitSum} contributions in the last year</h3>
      <div class="calheatmap">
        <CalHeatmap data={calHeatmapData} />
      </div>
    </session>
  {:else}
    <session class="loading-bar">
      <LoadingBar />
    </session>
  {/if}
  {#if arePostsLoaded}
    <session>
      <h3>My Recent Posts</h3>
      <div class="blog-container">
        {#each posts as post}
          <div class="blog-box">
            <h4><a href="/blog/{post.slug}">{post.title}</a></h4>
            <p>{post.description}</p>
            <a href="/blog/{post.slug}">Read more</a>
          </div>
        {/each}
      </div>
    </session>
  {/if}
</main>

<style>
  .blog-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .blog-box {
    width: 350px;
    min-height: 300px;
    background-color: var(--color-canvas-subtle);
    border: 1px solid var(--color-border-default);
    /* box-shadow: var(--boxShadow-thin); */
    margin: 20px;
    padding: 30px;
  }
  .blog-box h4 {
    margin: 10px 0;
  }
  .blog-box p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 20px 0;
  }
  .loading-bar {
    display: flex;
    justify-content: center;
  }
  .calheatmap {
    display: flex;
    justify-content: center;
  }
  .calheatmap-session {
    display: flex;
    flex-direction: column;
  }
  .head {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
  .gubasso {
    font-size: var(--step-6);
    color: var(--color-accent-fg);
    text-align: center;
  }
  .xyz {
    color: var(--color-fg-default);
  }
  .title {
    font-size: var(--step-3);
    text-align: center;
    margin-top: 3rem;
  }
  .description {
    color: var(--color-fg-description);
    text-align: center;
    margin-top: 1.5rem;
  }
</style>
