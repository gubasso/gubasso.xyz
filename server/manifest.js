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
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
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
