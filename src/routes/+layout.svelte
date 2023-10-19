<script>
  import 'iconify-icon'
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import '$lib/styles/modern-normalize.css'
  import '$lib/styles/primer-borders.css'
  import '$lib/styles/primer-breakpoints.css'
  import '$lib/styles/primer-colors-dark.css'
  import '$lib/styles/style.css'
</script>

<Header />

<main class="container">
  <slot />
</main>

<Footer />
