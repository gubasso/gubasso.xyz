import{b as O}from"../chunks/paths.EO9nsjFW.js";import{s as A,n as E}from"../chunks/scheduler.NKj-R0cN.js";import{S as I,i as M,s as S,e as p,t as b,o as w,h as N,d as i,c as j,a as m,f as v,l as y,b as g,m as u,g as T,p as U,k as $}from"../chunks/index.jj6YjV4H.js";import{e as B}from"../chunks/each.-oqiv04n.js";const D=async({fetch:s,params:t})=>{const{category:o}=t,r=(await(await s(`${O}/api/posts`)).json()).filter(l=>l.categories?.includes(o));return{category:o,posts:r}},X=Object.freeze(Object.defineProperty({__proto__:null,load:D},Symbol.toStringTag,{value:"Module"}));function H(s,t,o){const e=s.slice();return e[3]=t[o],e}function F(s){let t,o="Not a valid category";return{c(){t=p("p"),t.textContent=o},l(e){t=m(e,"P",{"data-svelte-h":!0}),T(t)!=="svelte-1sl2560"&&(t.textContent=o)},m(e,a){g(e,t,a)},p:E,d(e){e&&i(t)}}}function G(s){let t,o=B(s[1]),e=[];for(let a=0;a<o.length;a+=1)e[a]=L(H(s,o,a));return{c(){t=p("ul");for(let a=0;a<e.length;a+=1)e[a].c()},l(a){t=m(a,"UL",{});var r=v(t);for(let l=0;l<e.length;l+=1)e[l].l(r);r.forEach(i)},m(a,r){g(a,t,r);for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(t,null)},p(a,r){if(r&2){o=B(a[1]);let l;for(l=0;l<o.length;l+=1){const f=H(a,o,l);e[l]?e[l].p(f,r):(e[l]=L(f),e[l].c(),e[l].m(t,null))}for(;l<e.length;l+=1)e[l].d(1);e.length=o.length}},d(a){a&&i(t),U(e,a)}}}function L(s){let t,o,e,a=s[3].title+"",r,l,f=s[3].date+"",k,P,_,n=s[3].description+"",c,d;return{c(){t=p("li"),o=p("h2"),e=p("a"),r=b(a),l=b(`
        Published: `),k=b(f),P=S(),_=p("p"),c=b(n),d=S(),this.h()},l(C){t=m(C,"LI",{});var h=v(t);o=m(h,"H2",{});var x=v(o);e=m(x,"A",{href:!0});var z=v(e);r=y(z,a),z.forEach(i),x.forEach(i),l=y(h,`
        Published: `),k=y(h,f),P=j(h),_=m(h,"P",{});var q=v(_);c=y(q,n),q.forEach(i),d=j(h),h.forEach(i),this.h()},h(){$(e,"href",O+"/blog/"+s[3].slug)},m(C,h){g(C,t,h),u(t,o),u(o,e),u(e,r),u(t,l),u(t,k),u(t,P),u(t,_),u(_,c),u(t,d)},p:E,d(C){C&&i(t)}}}function J(s){let t,o,e,a,r,l,f;document.title=t="gubasso.xyz - Blog - Category: "+s[0];function k(n,c){return n[1].length?G:F}let _=k(s)(s);return{c(){o=S(),e=p("h1"),a=b("Category: "),r=b(s[0]),l=S(),_.c(),f=w()},l(n){N("svelte-2qknl8",document.head).forEach(i),o=j(n),e=m(n,"H1",{});var d=v(e);a=y(d,"Category: "),r=y(d,s[0]),d.forEach(i),l=j(n),_.l(n),f=w()},m(n,c){g(n,o,c),g(n,e,c),u(e,a),u(e,r),g(n,l,c),_.m(n,c),g(n,f,c)},p(n,[c]){c&1&&t!==(t="gubasso.xyz - Blog - Category: "+n[0])&&(document.title=t),_.p(n,c)},i:E,o:E,d(n){n&&(i(o),i(e),i(l),i(f)),_.d(n)}}}function K(s,t,o){let{data:e}=t;const{category:a,posts:r}=e;return s.$$set=l=>{"data"in l&&o(2,e=l.data)},[a,r,e]}class Y extends I{constructor(t){super(),M(this,t,K,J,A,{data:2})}}export{Y as component,X as universal};
