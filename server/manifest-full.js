export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "gubasso.xyz/_app",
	assets: new Set([".nojekyll","favicon.ico","favicon.png","resume/companies.yaml","resume/contact.yaml","resume/education.yaml","resume/experience.yaml","resume/languages.yaml","resume/main.yaml","resume/projects.yaml","resume/publications.yaml","resume/roles.yaml","resume/skills-org.yaml","resume/skills.yaml","resume/summary.yaml","resume/teaching.yaml","resume.pdf","svelte-favicon.png"]),
	mimeTypes: {".png":"image/png",".yaml":"text/yaml",".pdf":"application/pdf"},
	_: {
		client: {"start":"_app/immutable/entry/start.41aacb73.js","app":"_app/immutable/entry/app.4a5348fb.js","imports":["_app/immutable/entry/start.41aacb73.js","_app/immutable/chunks/scheduler.779a6c84.js","_app/immutable/chunks/singletons.e0a10952.js","_app/immutable/chunks/paths.6d1a9b5a.js","_app/immutable/entry/app.4a5348fb.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.779a6c84.js","_app/immutable/chunks/index.65e1d6df.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/categories",
				pattern: /^\/api\/categories\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/categories/_server.js'))
			},
			{
				id: "/api/posts",
				pattern: /^\/api\/posts\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/posts/_server.js'))
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog/categories",
				pattern: /^\/blog\/categories\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/blog/categories/[category]",
				pattern: /^\/blog\/categories\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/resume",
				pattern: /^\/resume\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/rss",
				pattern: /^\/rss\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/rss/_server.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
