<script>
  import { siteTitle, siteDescription } from '$lib'
  import CalHeatmap from '$lib/components/CalHeatmap.svelte'
  export let data
</script>

<svelte:head>
  <title>gubasso.xyz</title>
</svelte:head>

<div class="head">
  <h1 class="gubasso">gubasso.[<span class="xyz">xyz</span>]</h1>
  <h3 class="title">{siteTitle}</h3>
  <p class="description">{siteDescription}</p>
</div>

<div class="calheatmap">
  <CalHeatmap data={data.repos_count} />
</div>

<style>
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
