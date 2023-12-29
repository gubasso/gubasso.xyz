<footer class="container">
  <div class="content">
    <div class="left-top">
      <a href="/"><p class="gubasso">gubasso.[<span class="xyz">xyz</span>]</p></a>
      <p class="prof">Software Engineer / Fullstack Programmer / Developer</p>
      <div class="icons">
        <a target="_blank" rel="external noopener noreferrer" href="https://twitter.com/gubasso777"
          ><iconify-icon icon="mdi:twitter" /></a
        >
        <a target="_blank" rel="external noopener noreferrer" href="https://github.com/gubasso"
          ><iconify-icon icon="mdi:github" /></a
        >
        <a
          target="_blank"
          rel="external noopener noreferrer"
          href="https://www.linkedin.com/in/gubasso/"><iconify-icon icon="mdi:linkedin" /></a
        >
      </div>
    </div>
    <div class="sessions">
      <h4>Pages</h4>
      <ul>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a target="_blank" rel="external noopener noreferrer" href="https://resume.gubasso.xyz"
            >Resume / CV</a
          >
        </li>
      </ul>
    </div>
  </div>
  <div class="foot">
    <p>&copy; 2023 Gustavo Basso. All rights reserved.</p>
  </div>
</footer>

<style>
  footer {
    border-top: var(--borderWidth-thin) solid var(--color-border-default);
    margin-top: 5rem;
  }
  .left-top {
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
  }
  .gubasso:hover {
    font-weight: bold;
  }
  .gubasso {
    margin: 0;
    margin-top: 1rem;
    color: var(--color-accent-fg);
  }
  .xyz {
    color: var(--color-fg-default);
  }
  .prof {
    color: var(--color-fg-description);
    font-size: var(--step--1);
    margin: 0;
  }
  .sessions ul {
    list-style: none;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0;
  }
  .sessions a {
    font-size: var(--step-0);
  }
  .foot {
    margin-top: 1.5rem;
    border-top: var(--borderWidth-thin) solid var(--color-border-default);
  }
  .foot p {
    line-height: 1.25rem;
    color: var(--color-fg-muted);
    font-size: var(--step--2);
  }
  .icons {
    display: flex;
    gap: 1rem;
  }
  a {
    text-decoration: none;
    font-size: 1.5rem;
    color: var(--color-fg-muted);
  }
  a:hover {
    color: var(--color-fg-description);
  }
  @media screen and (min-width: 600px) {
    .content {
      display: flex;
      gap: 4rem;
    }
  }
</style>
