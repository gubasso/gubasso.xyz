import{b as O}from"../chunks/paths.6d1a9b5a.js";import{s as A,n as E}from"../chunks/scheduler.779a6c84.js";import{S as I,i as M,s as j,g as p,m as b,e as q,B as N,f as i,c as x,h as m,j as v,n as y,a as g,z as f,x as T,C as U,k as $}from"../chunks/index.65e1d6df.js";import{e as w}from"../chunks/each.e59479a4.js";const D=async({fetch:s,params:t})=>{const{category:o}=t,r=(await(await s(`${O}/api/posts`)).json()).filter(l=>{var _;return(_=l.categories)==null?void 0:_.includes(o)});return{category:o,posts:r}},X=Object.freeze(Object.defineProperty({__proto__:null,load:D},Symbol.toStringTag,{value:"Module"}));function H(s,t,o){const e=s.slice();return e[3]=t[o],e}function F(s){let t,o="Not a valid category";return{c(){t=p("p"),t.textContent=o},l(e){t=m(e,"P",{"data-svelte-h":!0}),T(t)!=="svelte-1sl2560"&&(t.textContent=o)},m(e,a){g(e,t,a)},p:E,d(e){e&&i(t)}}}function G(s){let t,o=w(s[1]),e=[];for(let a=0;a<o.length;a+=1)e[a]=L(H(s,o,a));return{c(){t=p("ul");for(let a=0;a<e.length;a+=1)e[a].c()},l(a){t=m(a,"UL",{});var r=v(t);for(let l=0;l<e.length;l+=1)e[l].l(r);r.forEach(i)},m(a,r){g(a,t,r);for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(t,null)},p(a,r){if(r&2){o=w(a[1]);let l;for(l=0;l<o.length;l+=1){const _=H(a,o,l);e[l]?e[l].p(_,r):(e[l]=L(_),e[l].c(),e[l].m(t,null))}for(;l<e.length;l+=1)e[l].d(1);e.length=o.length}},d(a){a&&i(t),U(e,a)}}}function L(s){let t,o,e,a=s[3].title+"",r,l,_=s[3].date+"",k,P,u,n=s[3].description+"",c,d;return{c(){t=p("li"),o=p("h2"),e=p("a"),r=b(a),l=b(`
        Published: `),k=b(_),P=j(),u=p("p"),c=b(n),d=j(),this.h()},l(C){t=m(C,"LI",{});var h=v(t);o=m(h,"H2",{});var z=v(o);e=m(z,"A",{href:!0});var S=v(e);r=y(S,a),S.forEach(i),z.forEach(i),l=y(h,`
        Published: `),k=y(h,_),P=x(h),u=m(h,"P",{});var B=v(u);c=y(B,n),B.forEach(i),d=x(h),h.forEach(i),this.h()},h(){$(e,"href",O+"/blog/"+s[3].slug)},m(C,h){g(C,t,h),f(t,o),f(o,e),f(e,r),f(t,l),f(t,k),f(t,P),f(t,u),f(u,c),f(t,d)},p:E,d(C){C&&i(t)}}}function J(s){let t,o,e,a,r,l,_;document.title=t="gubasso.xyz - Blog - Category: "+s[0];function k(n,c){return n[1].length?G:F}let u=k(s)(s);return{c(){o=j(),e=p("h1"),a=b("Category: "),r=b(s[0]),l=j(),u.c(),_=q()},l(n){N("svelte-2qknl8",document.head).forEach(i),o=x(n),e=m(n,"H1",{});var d=v(e);a=y(d,"Category: "),r=y(d,s[0]),d.forEach(i),l=x(n),u.l(n),_=q()},m(n,c){g(n,o,c),g(n,e,c),f(e,a),f(e,r),g(n,l,c),u.m(n,c),g(n,_,c)},p(n,[c]){c&1&&t!==(t="gubasso.xyz - Blog - Category: "+n[0])&&(document.title=t),u.p(n,c)},i:E,o:E,d(n){n&&(i(o),i(e),i(l),i(_)),u.d(n)}}}function K(s,t,o){let{data:e}=t;const{category:a,posts:r}=e;return s.$$set=l=>{"data"in l&&o(2,e=l.data)},[a,r,e]}class Y extends I{constructor(t){super(),M(this,t,K,J,A,{data:2})}}export{Y as component,X as universal};
