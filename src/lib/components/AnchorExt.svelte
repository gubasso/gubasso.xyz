<script>
  export let url
  export let label
  export let isIconify = false
</script>

{#if isIconify}
  <a target="_blank" rel="external noopener noreferrer" href={url}>
    <iconify-icon icon={label} />
  </a>
{:else}
  <a target="_blank" rel="external noopener noreferrer" href={url}>{label}</a>
{/if}

<style>
  a {
    display: flex;
    align-items: flex-end;
  }
</style>
