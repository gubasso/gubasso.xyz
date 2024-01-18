import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import "iconify-icon";
import { b as base } from "../../chunks/paths.js";
const logo = "/gubasso.xyz/_app/immutable/assets/g.62fc66aa.png";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".menu-btn.svelte-1giie1l.svelte-1giie1l{display:none;background:none;border:none;color:var(--color-fg-default);font-size:var(--step-1);cursor:pointer;padding:0.3rem;border-radius:var(--borderRadius-small)}.menu-btn.svelte-1giie1l.svelte-1giie1l:hover{font-size:var(--step-1);cursor:pointer;background-color:var(--color-canvas-subtle)}.opened-menu-icon.svelte-1giie1l.svelte-1giie1l{display:flex}.opened-menu.svelte-1giie1l.svelte-1giie1l{margin:0;padding:0;left:0px;display:block;position:absolute;height:calc(100vh - 80px);width:100vw;max-width:100%;background-color:var(--color-canvas-inset-transparent)}.opened-menu.svelte-1giie1l ul.svelte-1giie1l{display:flex;align-items:center;flex-direction:column}.opened-menu.svelte-1giie1l li.svelte-1giie1l{margin-top:1.5rem}.opened-menu.svelte-1giie1l a.svelte-1giie1l{font-size:var(--step-6);font-weight:bold;text-decoration:underline}.h-1.svelte-1giie1l.svelte-1giie1l{display:flex;justify-content:space-between;align-items:center;padding:1rem}.top-menu.svelte-1giie1l.svelte-1giie1l{position:relative}header.svelte-1giie1l.svelte-1giie1l{background-color:var(--color-canvas-inset)}nav.svelte-1giie1l.svelte-1giie1l{margin-top:1rem;display:none}ul.svelte-1giie1l.svelte-1giie1l{list-style:none;margin:0;display:flex;gap:1rem;padding:0}a.svelte-1giie1l.svelte-1giie1l{text-decoration:none;color:inherit}img.svelte-1giie1l.svelte-1giie1l{width:var(--step-5);vertical-align:bottom}@media screen and (min-width: 600px){.menu-btn.svelte-1giie1l.svelte-1giie1l,.top-menu.svelte-1giie1l.svelte-1giie1l{display:none}header.svelte-1giie1l.svelte-1giie1l,nav.svelte-1giie1l.svelte-1giie1l{display:flex}header.svelte-1giie1l.svelte-1giie1l{justify-content:space-between}nav.svelte-1giie1l.svelte-1giie1l{margin:0;padding:1rem}li.svelte-1giie1l.svelte-1giie1l{display:flex;align-items:center}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let closedmenu;
  let openedMenu = false;
  $$result.css.add(css$1);
  closedmenu = !openedMenu;
  return `<header class="svelte-1giie1l"><div class="h-1 svelte-1giie1l"><a href="${escape(base, true) + "/"}" class="svelte-1giie1l" data-svelte-h="svelte-e2fnfy"><img${add_attribute("src", logo, 0)} alt="g logo" class="svelte-1giie1l"></a> <button class="${["menu-btn svelte-1giie1l", closedmenu ? "opened-menu-icon" : ""].join(" ").trim()}" data-svelte-h="svelte-1m3pf85"><iconify-icon icon="material-symbols:menu"></iconify-icon></button> <button class="${["menu-btn svelte-1giie1l", ""].join(" ").trim()}" data-svelte-h="svelte-xbddea"><iconify-icon icon="ph:x"></iconify-icon></button></div> <nav class="${["svelte-1giie1l", ""].join(" ").trim()}"><ul class="svelte-1giie1l"><li class="svelte-1giie1l"><a href="${escape(base, true) + "/blog"}" class="svelte-1giie1l" data-svelte-h="svelte-1ll8vb9">Blog</a></li> <li class="svelte-1giie1l"><a href="${escape(base, true) + "/projects"}" class="svelte-1giie1l" data-svelte-h="svelte-zotc9x">Projects</a></li> <li class="svelte-1giie1l"><a href="${escape(base, true) + "/resume"}" class="svelte-1giie1l" data-svelte-h="svelte-od6tyn">Resume / CV</a></li></ul></nav> <div class="top-menu svelte-1giie1l"></div> </header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-19xq4s9.svelte-19xq4s9{border-top:var(--borderWidth-thin) solid var(--color-border-default);margin-top:5rem}.left-top.svelte-19xq4s9.svelte-19xq4s9{display:flex;flex-direction:column;gap:1.3rem}.gubasso.svelte-19xq4s9.svelte-19xq4s9:hover{font-weight:bold}.gubasso.svelte-19xq4s9.svelte-19xq4s9{margin:0;margin-top:1rem;color:var(--color-accent-fg)}.xyz.svelte-19xq4s9.svelte-19xq4s9{color:var(--color-fg-default)}.prof.svelte-19xq4s9.svelte-19xq4s9{color:var(--color-fg-description);font-size:var(--step--1);margin:0}.sessions.svelte-19xq4s9 ul.svelte-19xq4s9{list-style:none;margin:0;display:flex;flex-direction:column;gap:0.5rem;padding:0}.sessions.svelte-19xq4s9 a.svelte-19xq4s9{font-size:var(--step-0)}.foot.svelte-19xq4s9.svelte-19xq4s9{margin-top:1.5rem;border-top:var(--borderWidth-thin) solid var(--color-border-default)}.foot.svelte-19xq4s9 p.svelte-19xq4s9{line-height:1.25rem;color:var(--color-fg-muted);font-size:var(--step--2)}.icons.svelte-19xq4s9.svelte-19xq4s9{display:flex;gap:1rem}a.svelte-19xq4s9.svelte-19xq4s9{text-decoration:none;font-size:1.5rem;color:var(--color-fg-muted)}a.svelte-19xq4s9.svelte-19xq4s9:hover{color:var(--color-fg-description)}@media screen and (min-width: 600px){.content.svelte-19xq4s9.svelte-19xq4s9{display:flex;gap:4rem}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="container svelte-19xq4s9" data-svelte-h="svelte-1hl3aa8"><div class="content svelte-19xq4s9"><div class="left-top svelte-19xq4s9"><a href="${escape(base, true) + "/"}" class="svelte-19xq4s9"><p class="gubasso svelte-19xq4s9">gubasso.[<span class="xyz svelte-19xq4s9">xyz</span>]</p></a> <p class="prof svelte-19xq4s9">Software Engineer / Fullstack Programmer / Developer</p> <div class="icons svelte-19xq4s9"><a target="_blank" rel="external noopener noreferrer" href="https://twitter.com/gubasso777" class="svelte-19xq4s9"><iconify-icon icon="mdi:twitter"></iconify-icon></a> <a target="_blank" rel="external noopener noreferrer" href="https://github.com/gubasso" class="svelte-19xq4s9"><iconify-icon icon="mdi:github"></iconify-icon></a> <a target="_blank" rel="external noopener noreferrer" href="https://www.linkedin.com/in/gubasso/" class="svelte-19xq4s9"><iconify-icon icon="mdi:linkedin"></iconify-icon></a></div></div> <div class="sessions svelte-19xq4s9"><h4>Pages</h4> <ul class="svelte-19xq4s9"><li><a href="${escape(base, true) + "/blog"}" class="svelte-19xq4s9">Blog</a></li> <li><a href="${escape(base, true) + "/projects"}" class="svelte-19xq4s9">Projects</a></li> <li><a href="${escape(base, true) + "/resume"}" class="svelte-19xq4s9">Resume / CV</a></li></ul></div></div> <div class="foot svelte-19xq4s9"><p class="svelte-19xq4s9">© 2023 Gustavo Basso. All rights reserved.</p></div> </footer>`;
});
const modernNormalize = "";
const primerBorders = "";
const primerBreakpoints = "";
const primerColorsDark = "";
const style = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="container">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
