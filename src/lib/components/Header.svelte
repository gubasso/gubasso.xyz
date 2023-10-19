<script>
  import logo from '$lib/images/g.png'
  let showmenu = false
  let openmenu = false
</script>

<header>
  <a href="/"><img src={logo} alt="g logo" /></a>
  <div class="menu-btn">
    <iconify-icon icon="material-symbols:menu" />
  </div>
  <nav>
    <ul>
      <li>
        <a href="/blog">Blog</a>
      </li>
      <li>
        <a href="/projects">Projects</a>
      </li>
      <li>
        <a rel="external" href="https://resume.gubasso.xyz">Resume</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  img {
    width: var(--step-2);
    object-fit: cover;
    object-position: 50% 50%;
  }
  header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-canvas-inset);
    padding: 1rem;
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
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .menu-btn {
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
    nav {
      margin-top: 0;
      display: block;
    }
  }
</style>
