<script>
  import logo from '$lib/images/g.png'
  let showmenu = false
  let openedMenu = false
  $: closedmenu = !openedMenu
</script>

<header>
  <div class="h-1">
    <a href="/"><img src={logo} alt="g logo" /></a>
    <button class="menu-btn" on:click={() => (openedMenu = !openedMenu)}>
      <iconify-icon class:opened-menu-icon={closedmenu} icon="material-symbols:menu" />
      <iconify-icon class:opened-menu-icon={openedMenu} icon="ph:x" />
    </button>
  </div>
  <nav class:opened-menu={openedMenu}>
    <ul>
      <li>
        <a href="/blog" on:click={() => (openedMenu = false)}>Blog</a>
      </li>
      <li>
        <a href="/projects" on:click={() => (openedMenu = false)}>Projects</a>
      </li>
      <li>
        <a rel="external" href="https://resume.gubasso.xyz" on:click={() => (openedMenu = false)}
          >Resume</a
        >
      </li>
    </ul>
  </nav>
  <div class="top-menu" />
</header>

<style>
  iconify-icon {
    display: none;
  }
  .opened-menu-icon {
    display: block;
  }
  .opened-menu {
    margin: 0;
    padding: 0;
    left: 0px;
    display: block;
    position: absolute;
    height: calc(100vh - 80px);
    width: 100vw;
    max-width: 100%;
    background-color: var(--color-canvas-inset-transparent);
  }
  .opened-menu > ul {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .opened-menu a {
    font-size: var(--step-3);
    font-weight: bold;
  }
  .h-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
  .top-menu {
    position: relative;
  }
  header {
    background-color: var(--color-canvas-inset);
  }
  nav {
    margin-top: 1rem;
    display: none;
  }
  ul {
    list-style: none;
    margin: 0;
    display: flex;
    gap: 1rem;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    width: var(--step-2);
    vertical-align: bottom;
  }

  .menu-btn {
    background: none;
    border: none;
    color: var(--color-fg-default);
    display: flex;
    font-size: var(--step-1);
    cursor: pointer;
    padding: 0.3rem;
    border-radius: var(--borderRadius-small);
  }

  .menu-btn:hover {
    font-size: var(--step-1);
    cursor: pointer;
    background-color: var(--color-canvas-subtle);
  }

  @media screen and (min-width: 600px) {
    /* nav { */
    /*   margin-top: 0; */
    /*   display: block; */
    /* } */
  }
</style>
