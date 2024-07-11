import{b as z}from"../chunks/paths.DDD6H2g3.js";import{s as x,n as F}from"../chunks/scheduler.7nAD2Fpp.js";import{S as ee,i as te,s as y,e as E,h as le,d as f,c as P,a as k,g as J,k as C,f as u,b as I,q as Z,t as H,m as V,n as m,o as q,p as K}from"../chunks/index.1lALXrw2.js";import{e as B}from"../chunks/each.D6YF6ztN.js";const se=async({fetch:n})=>({posts:await(await n(`${z}/api/posts`)).json()}),fe=Object.freeze(Object.defineProperty({__proto__:null,load:se},Symbol.toStringTag,{value:"Module"}));function Q(n,t,s){const e=n.slice();return e[1]=t[s],e}function U(n,t,s){const e=n.slice();return e[4]=t[s],e}function W(n){let t,s=B(n[1].categories),e=[];for(let l=0;l<s.length;l+=1)e[l]=X(U(n,s,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=K()},l(l){for(let i=0;i<e.length;i+=1)e[i].l(l);t=K()},m(l,i){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(l,i);I(l,t,i)},p(l,i){if(i&1){s=B(l[1].categories);let o;for(o=0;o<s.length;o+=1){const b=U(l,s,o);e[o]?e[o].p(b,i):(e[o]=X(b),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=s.length}},d(l){l&&f(t),Z(e,l)}}}function X(n){let t,s=n[4]+"",e,l;return{c(){t=E("a"),e=H(s),this.h()},l(i){t=k(i,"A",{class:!0,href:!0});var o=C(t);e=V(o,s),o.forEach(f),this.h()},h(){u(t,"class","category svelte-2jg841"),u(t,"href",l=z+"/blog/categories/"+n[4])},m(i,o){I(i,t,o),m(t,e)},p(i,o){o&1&&s!==(s=i[4]+"")&&q(e,s),o&1&&l!==(l=z+"/blog/categories/"+i[4])&&u(t,"href",l)},d(i){i&&f(t)}}}function Y(n){var G;let t,s,e,l=n[1].date+"",i,o,b,p,d,c,a,h=n[1].title+"",r,j,M,S,T=n[1].description+"",A,O,_=((G=n[1].categories)==null?void 0:G.length)&&W(n);return{c(){t=E("article"),s=E("div"),e=E("time"),i=H(l),b=y(),_&&_.c(),p=y(),d=E("div"),c=E("h3"),a=E("a"),r=H(h),M=y(),S=E("p"),A=H(T),O=y(),this.h()},l(g){t=k(g,"ARTICLE",{class:!0});var v=C(t);s=k(v,"DIV",{class:!0});var w=C(s);e=k(w,"TIME",{datetime:!0,class:!0});var L=C(e);i=V(L,l),L.forEach(f),b=P(w),_&&_.l(w),w.forEach(f),p=P(v),d=k(v,"DIV",{});var D=C(d);c=k(D,"H3",{class:!0});var N=C(c);a=k(N,"A",{href:!0,class:!0});var R=C(a);r=V(R,h),R.forEach(f),N.forEach(f),M=P(D),S=k(D,"P",{class:!0});var $=C(S);A=V($,T),$.forEach(f),D.forEach(f),O=P(v),v.forEach(f),this.h()},h(){u(e,"datetime",o=n[1].date),u(e,"class","svelte-2jg841"),u(s,"class","time-categories svelte-2jg841"),u(a,"href",j=z+"/blog/"+n[1].slug),u(a,"class","svelte-2jg841"),u(c,"class","svelte-2jg841"),u(S,"class","description svelte-2jg841"),u(t,"class","svelte-2jg841")},m(g,v){I(g,t,v),m(t,s),m(s,e),m(e,i),m(s,b),_&&_.m(s,null),m(t,p),m(t,d),m(d,c),m(c,a),m(a,r),m(d,M),m(d,S),m(S,A),m(t,O)},p(g,v){var w;v&1&&l!==(l=g[1].date+"")&&q(i,l),v&1&&o!==(o=g[1].date)&&u(e,"datetime",o),(w=g[1].categories)!=null&&w.length?_?_.p(g,v):(_=W(g),_.c(),_.m(s,null)):_&&(_.d(1),_=null),v&1&&h!==(h=g[1].title+"")&&q(r,h),v&1&&j!==(j=z+"/blog/"+g[1].slug)&&u(a,"href",j),v&1&&T!==(T=g[1].description+"")&&q(A,T)},d(g){g&&f(t),_&&_.d()}}}function ae(n){let t,s,e="Gubasso's Blog",l,i,o="Here I share some knowledge about Tech and other (un?)useful stuff.",b,p,d=B(n[0].posts),c=[];for(let a=0;a<d.length;a+=1)c[a]=Y(Q(n,d,a));return{c(){t=y(),s=E("h2"),s.textContent=e,l=y(),i=E("p"),i.textContent=o,b=y(),p=E("div");for(let a=0;a<c.length;a+=1)c[a].c();this.h()},l(a){le("svelte-11jrtxr",document.head).forEach(f),t=P(a),s=k(a,"H2",{"data-svelte-h":!0}),J(s)!=="svelte-zy0wuc"&&(s.textContent=e),l=P(a),i=k(a,"P",{class:!0,"data-svelte-h":!0}),J(i)!=="svelte-1yl4epa"&&(i.textContent=o),b=P(a),p=k(a,"DIV",{class:!0});var r=C(p);for(let j=0;j<c.length;j+=1)c[j].l(r);r.forEach(f),this.h()},h(){document.title="gubasso.xyz - Blog",u(i,"class","subtitle svelte-2jg841"),u(p,"class","blogs svelte-2jg841")},m(a,h){I(a,t,h),I(a,s,h),I(a,l,h),I(a,i,h),I(a,b,h),I(a,p,h);for(let r=0;r<c.length;r+=1)c[r]&&c[r].m(p,null)},p(a,[h]){if(h&1){d=B(a[0].posts);let r;for(r=0;r<d.length;r+=1){const j=Q(a,d,r);c[r]?c[r].p(j,h):(c[r]=Y(j),c[r].c(),c[r].m(p,null))}for(;r<c.length;r+=1)c[r].d(1);c.length=d.length}},i:F,o:F,d(a){a&&(f(t),f(s),f(l),f(i),f(b),f(p)),Z(c,a)}}}function oe(n,t,s){let{data:e}=t;return console.log(e),n.$$set=l=>{"data"in l&&s(0,e=l.data)},[e]}class he extends ee{constructor(t){super(),te(this,t,oe,ae,x,{data:0})}}export{he as component,fe as universal};