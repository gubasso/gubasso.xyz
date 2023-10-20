<script>
  import logo from '$lib/images/g.png'
  import { clickOutside } from '$lib/utils'
  let showmenu = false
  let openedMenu = false
  $: closedmenu = !openedMenu
  const closeMenu = () => (openedMenu = false)
  const toggleMenu = () => {
    openedMenu = !openedMenu
  }
</script>

<header>
  <div class="h-1">
    <a href="/"><img src={logo} alt="g logo" /></a>
    <button class:opened-menu-icon={closedmenu} class="menu-btn" on:click={toggleMenu}>
      <iconify-icon icon="material-symbols:menu" />
    </button>
    <button class:opened-menu-icon={openedMenu} class="menu-btn" on:click={closeMenu}>
      <iconify-icon icon="ph:x" />
    </button>
  </div>
  <nav use:clickOutside on:click_outside={closeMenu} class:opened-menu={openedMenu}>
    <ul>
      <li>
        <a href="/blog" on:click={closeMenu}>Blog</a>
      </li>
      <li>
        <a href="/projects" on:click={closeMenu}>Projects</a>
      </li>
      <li>
        <a rel="external" href="https://resume.gubasso.xyz" on:click={closeMenu}>Resume</a>
      </li>
    </ul>
  </nav>
  <div class="top-menu" />
</header>

<style>
  .menu-btn {
    display: none;
    background: none;
    border: none;
    color: var(--color-fg-default);
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
  .opened-menu-icon {
    display: flex;
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
  .opened-menu ul {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .opened-menu li {
    margin-top: 1.5rem;
  }

  .opened-menu a {
    font-size: var(--step-3);
    /* font-weight: bold; */
    text-decoration: underline;
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

  @media screen and (min-width: 600px) {
    .menu-btn,
    .top-menu {
      display: none;
    }
    header,
    nav {
      display: flex;
    }
    header {
      justify-content: space-between;
    }
    nav {
      margin: 0;
      padding: 1rem;
    }
  }
</style>
