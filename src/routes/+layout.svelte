<script>
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import '$lib/styles/modern-normalize.css'
  import '$lib/styles/style.css'
</script>

<Header />

<main class="container">
  <slot />
</main>

<Footer />
