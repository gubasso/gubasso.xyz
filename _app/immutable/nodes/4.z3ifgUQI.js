import{_ as H}from"../chunks/preload-helper.0HuHagjb.js";import{s as L,n as V}from"../chunks/scheduler.NKj-R0cN.js";import{S as U,i as F,e as d,s as E,t as w,y as G,h as J,a as g,d as m,c as P,f as $,l as A,z as K,k as v,m as f,b as T,A as N,u as Q,q as W,B as X,g as Y,p as Z}from"../chunks/index.jj6YjV4H.js";import{e as B}from"../chunks/each.-oqiv04n.js";import{b as x}from"../chunks/paths.EO9nsjFW.js";const ee=(s,e)=>{const n=s[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((r,t)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))})},te=async({params:s})=>{const e=await ee(Object.assign({"../../../../posts/ripissue-as-a-poor-mans-issue-tracker.md":()=>H(()=>import("../chunks/ripissue-as-a-poor-mans-issue-tracker.JmdJUGK8.js"),__vite__mapDeps([0,1,2]),import.meta.url)}),`../../../../posts/${s.slug}.md`);return{Content:e.default,...e.metadata}},ue=Object.freeze(Object.defineProperty({__proto__:null,load:te},Symbol.toStringTag,{value:"Module"}));function D(s,e,n){const r=s.slice();return r[6]=e[n],r}function ae(s){let e,n,r="Categories:",t,i=B(s[3]),o=[];for(let l=0;l<i.length;l+=1)o[l]=R(D(s,i,l));return{c(){e=d("div"),n=d("p"),n.textContent=r,t=E();for(let l=0;l<o.length;l+=1)o[l].c();this.h()},l(l){e=g(l,"DIV",{class:!0});var c=$(e);n=g(c,"P",{class:!0,"data-svelte-h":!0}),Y(n)!=="svelte-1mux212"&&(n.textContent=r),t=P(c);for(let a=0;a<o.length;a+=1)o[a].l(c);c.forEach(m),this.h()},h(){v(n,"class","svelte-1f4sk7p"),v(e,"class","categories svelte-1f4sk7p")},m(l,c){T(l,e,c),f(e,n),f(e,t);for(let a=0;a<o.length;a+=1)o[a]&&o[a].m(e,null)},p(l,c){if(c&8){i=B(l[3]);let a;for(a=0;a<i.length;a+=1){const k=D(l,i,a);o[a]?o[a].p(k,c):(o[a]=R(k),o[a].c(),o[a].m(e,null))}for(;a<o.length;a+=1)o[a].d(1);o.length=i.length}},d(l){l&&m(e),Z(o,l)}}}function R(s){let e,n=s[6]+"",r;return{c(){e=d("a"),r=w(n),this.h()},l(t){e=g(t,"A",{class:!0,href:!0});var i=$(e);r=A(i,n),i.forEach(m),this.h()},h(){v(e,"class","category svelte-1f4sk7p"),v(e,"href",x+"/blog/categories/"+s[6])},m(t,i){T(t,e,i),f(e,r)},p:V,d(t){t&&m(e)}}}function se(s){let e,n,r,t,i,o,l,c,a,k,b,q,z,I,M,y,C;document.title=e="gubasso.xyz - Blog - "+s[0];let _=s[3]?.length&&ae(s);return y=new s[4]({}),{c(){n=d("meta"),r=E(),t=d("article"),i=d("h1"),o=w(s[0]),l=E(),c=d("p"),a=w(s[2]),k=E(),b=d("p"),q=w("Published at: "),z=w(s[1]),I=E(),_&&_.c(),M=E(),G(y.$$.fragment),this.h()},l(u){const h=J("svelte-y9b6wa",document.head);n=g(h,"META",{property:!0,content:!0}),h.forEach(m),r=P(u),t=g(u,"ARTICLE",{});var p=$(t);i=g(p,"H1",{});var S=$(i);o=A(S,s[0]),S.forEach(m),l=P(p),c=g(p,"P",{class:!0});var j=$(c);a=A(j,s[2]),j.forEach(m),k=P(p),b=g(p,"P",{class:!0});var O=$(b);q=A(O,"Published at: "),z=A(O,s[1]),O.forEach(m),I=P(p),_&&_.l(p),M=P(p),K(y.$$.fragment,p),p.forEach(m),this.h()},h(){v(n,"property","og:title"),v(n,"content",s[0]),v(c,"class","description svelte-1f4sk7p"),v(b,"class","published svelte-1f4sk7p")},m(u,h){f(document.head,n),T(u,r,h),T(u,t,h),f(t,i),f(i,o),f(t,l),f(t,c),f(c,a),f(t,k),f(t,b),f(b,q),f(b,z),f(t,I),_&&_.m(t,null),f(t,M),N(y,t,null),C=!0},p(u,[h]){(!C||h&1)&&e!==(e="gubasso.xyz - Blog - "+u[0])&&(document.title=e),u[3]?.length&&_.p(u,h)},i(u){C||(Q(y.$$.fragment,u),C=!0)},o(u){W(y.$$.fragment,u),C=!1},d(u){u&&(m(r),m(t)),m(n),_&&_.d(),X(y)}}}function ne(s,e,n){let{data:r}=e;const{title:t,date:i,description:o,categories:l,Content:c}=r;return s.$$set=a=>{"data"in a&&n(5,r=a.data)},[t,i,o,l,c,r]}class fe extends U{constructor(e){super(),F(this,e,ne,se,L,{data:5})}}export{fe as component,ue as universal};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/ripissue-as-a-poor-mans-issue-tracker.JmdJUGK8.js","../chunks/scheduler.NKj-R0cN.js","../chunks/index.jj6YjV4H.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
