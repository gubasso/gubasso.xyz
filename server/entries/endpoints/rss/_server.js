import { b as fetchMarkdownPostsRaw } from "../../../chunks/index2.js";
import { s as siteTitle, a as siteDescription, b as siteURL } from "../../../chunks/index3.js";
const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
<link>${siteURL}</link>
<atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
${posts.map(
  (post) => `<item>
<guid isPermaLink="true">${siteURL}/blog/${post.slug}</guid>
<title>${post.title}</title>
<link>${siteURL}/blog/${post.slug}</link>
<description>${post.description}</description>
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`
).join("")}
</channel>
</rss>
`;
const GET = async () => {
  const allPosts = await fetchMarkdownPostsRaw();
  const body = render(allPosts);
  const options = {
    headers: {
      "Cache-Control": "max-age=0, s-maxage=3600",
      "Content-Type": "application/xml"
    }
  };
  return new Response(body, options);
};
export {
  GET
};
