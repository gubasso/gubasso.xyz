<script>
  import { onMount } from 'svelte'
  import { siteTitle, siteDescription } from '$lib'
  import CalHeatmap from '$lib/components/CalHeatmap.svelte'
  import LoadingBar from '$lib/spinners/LoadingBar.svelte'

  let isDataLoaded = false
  let calHeatmapData = {}

  const fetchData = async () => {
    try {
      const reqs = [
        fetch('https://brag.gubasso.xyz/count?by=day&author_email=gubasso@eambar.net'),
        fetch('https://brag.gubasso.xyz/count?by=day&author_email=gubasso@cwnt.io')
      ]
      const resps = await Promise.all(reqs)
      if (!resps.every((resps) => resps.ok)) {
        throw new Error('Failed to fetch data from brag.gubasso.xyz')
      }

      const repos_count = (await Promise.all(resps.map((resps) => resps.json()))).reduce(
        (acc, array) =>
          acc.concat(
            array.map((i) => ({
              value: i.count,
              date: new Date(i.date_agg).toISOString().split('T')[0]
            }))
          ),
        []
      )
      return repos_count
    } catch (error) {
      return error
    }
  }

  onMount(async () => {
    calHeatmapData = await fetchData()
    isDataLoaded = true
  })
</script>

<svelte:head>
  <title>gubasso.xyz</title>
</svelte:head>

<header class="head">
  <h1 class="gubasso">gubasso.[<span class="xyz">xyz</span>]</h1>
  <h2 class="title">{siteTitle}</h2>
  <p class="description">{siteDescription}</p>
</header>

<main>
  {#if isDataLoaded}
    <session class="calheatmap">
      <CalHeatmap data={calHeatmapData} />
    </session>
  {:else}
    <session class="loading-bar">
      <LoadingBar />
    </session>
  {/if}
  <session />
</main>

<style>
  .loading-bar {
    display: flex;
    justify-content: center;
  }
  .calheatmap {
    display: flex;
  }
  .head {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
  .gubasso {
    font-size: var(--step-7);
    color: var(--color-accent-fg);
    text-align: center;
  }
  .xyz {
    color: var(--color-fg-default);
  }
  .title {
    text-align: center;
    margin-top: 3rem;
  }
  .description {
    color: var(--color-fg-description);
    text-align: center;
    margin-top: 1.5rem;
  }
</style>
