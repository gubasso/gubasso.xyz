import"./paths.DDD6H2g3.js";/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function E(e){return typeof e>"u"||e===null}function O(e){return typeof e=="object"&&e!==null}function S(e){return Array.isArray(e)?e:E(e)?[]:[e]}function I(e,r){var t,i,n,a;if(r)for(a=Object.keys(r),t=0,i=a.length;t<i;t+=1)n=a[t],e[n]=r[n];return e}function _(e,r){var t="",i;for(i=0;i<r;i+=1)t+=e;return t}function b(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var T=E,Y=O,C=S,L=_,j=b,M=I,g={isNothing:T,isObject:Y,toArray:C,repeat:L,isNegativeZero:j,extend:M};function d(e,r){var t="",i=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(t+='in "'+e.mark.name+'" '),t+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!r&&e.mark.snippet&&(t+=`

`+e.mark.snippet),i+" "+t):i}function m(e,r){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=r,this.message=d(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}m.prototype=Object.create(Error.prototype);m.prototype.constructor=m;m.prototype.toString=function(r){return this.name+": "+d(this,r)};var c=m,P=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],U=["scalar","sequence","mapping"];function D(e){var r={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(i){r[String(i)]=t})}),r}function B(e,r){if(r=r||{},Object.keys(r).forEach(function(t){if(P.indexOf(t)===-1)throw new c('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=r,this.tag=e,this.kind=r.kind||null,this.resolve=r.resolve||function(){return!0},this.construct=r.construct||function(t){return t},this.instanceOf=r.instanceOf||null,this.predicate=r.predicate||null,this.represent=r.represent||null,this.representName=r.representName||null,this.defaultStyle=r.defaultStyle||null,this.multi=r.multi||!1,this.styleAliases=D(r.styleAliases||null),U.indexOf(this.kind)===-1)throw new c('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var s=B;function N(e,r){var t=[];return e[r].forEach(function(i){var n=t.length;t.forEach(function(a,l){a.tag===i.tag&&a.kind===i.kind&&a.multi===i.multi&&(n=l)}),t[n]=i}),t}function R(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},r,t;function i(n){n.multi?(e.multi[n.kind].push(n),e.multi.fallback.push(n)):e[n.kind][n.tag]=e.fallback[n.tag]=n}for(r=0,t=arguments.length;r<t;r+=1)arguments[r].forEach(i);return e}function x(e){return this.extend(e)}x.prototype.extend=function(r){var t=[],i=[];if(r instanceof s)i.push(r);else if(Array.isArray(r))i=i.concat(r);else if(r&&(Array.isArray(r.implicit)||Array.isArray(r.explicit)))r.implicit&&(t=t.concat(r.implicit)),r.explicit&&(i=i.concat(r.explicit));else throw new c("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(a){if(!(a instanceof s))throw new c("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(a.loadKind&&a.loadKind!=="scalar")throw new c("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(a.multi)throw new c("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),i.forEach(function(a){if(!(a instanceof s))throw new c("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var n=Object.create(x.prototype);return n.implicit=(this.implicit||[]).concat(t),n.explicit=(this.explicit||[]).concat(i),n.compiledImplicit=N(n,"implicit"),n.compiledExplicit=N(n,"explicit"),n.compiledTypeMap=R(n.compiledImplicit,n.compiledExplicit),n};var K=x,Z=new s("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),q=new s("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),$=new s("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),G=new K({explicit:[Z,q,$]});function V(e){if(e===null)return!0;var r=e.length;return r===1&&e==="~"||r===4&&(e==="null"||e==="Null"||e==="NULL")}function H(){return null}function z(e){return e===null}var X=new s("tag:yaml.org,2002:null",{kind:"scalar",resolve:V,construct:H,predicate:z,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function W(e){if(e===null)return!1;var r=e.length;return r===4&&(e==="true"||e==="True"||e==="TRUE")||r===5&&(e==="false"||e==="False"||e==="FALSE")}function J(e){return e==="true"||e==="True"||e==="TRUE"}function Q(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var ee=new s("tag:yaml.org,2002:bool",{kind:"scalar",resolve:W,construct:J,predicate:Q,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function re(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function te(e){return 48<=e&&e<=55}function ne(e){return 48<=e&&e<=57}function ie(e){if(e===null)return!1;var r=e.length,t=0,i=!1,n;if(!r)return!1;if(n=e[t],(n==="-"||n==="+")&&(n=e[++t]),n==="0"){if(t+1===r)return!0;if(n=e[++t],n==="b"){for(t++;t<r;t++)if(n=e[t],n!=="_"){if(n!=="0"&&n!=="1")return!1;i=!0}return i&&n!=="_"}if(n==="x"){for(t++;t<r;t++)if(n=e[t],n!=="_"){if(!re(e.charCodeAt(t)))return!1;i=!0}return i&&n!=="_"}if(n==="o"){for(t++;t<r;t++)if(n=e[t],n!=="_"){if(!te(e.charCodeAt(t)))return!1;i=!0}return i&&n!=="_"}}if(n==="_")return!1;for(;t<r;t++)if(n=e[t],n!=="_"){if(!ne(e.charCodeAt(t)))return!1;i=!0}return!(!i||n==="_")}function le(e){var r=e,t=1,i;if(r.indexOf("_")!==-1&&(r=r.replace(/_/g,"")),i=r[0],(i==="-"||i==="+")&&(i==="-"&&(t=-1),r=r.slice(1),i=r[0]),r==="0")return 0;if(i==="0"){if(r[1]==="b")return t*parseInt(r.slice(2),2);if(r[1]==="x")return t*parseInt(r.slice(2),16);if(r[1]==="o")return t*parseInt(r.slice(2),8)}return t*parseInt(r,10)}function ae(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!g.isNegativeZero(e)}var ue=new s("tag:yaml.org,2002:int",{kind:"scalar",resolve:ie,construct:le,predicate:ae,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),se=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function ce(e){return!(e===null||!se.test(e)||e[e.length-1]==="_")}function oe(e){var r,t;return r=e.replace(/_/g,"").toLowerCase(),t=r[0]==="-"?-1:1,"+-".indexOf(r[0])>=0&&(r=r.slice(1)),r===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:r===".nan"?NaN:t*parseFloat(r,10)}var fe=/^[-+]?[0-9]+e/;function pe(e,r){var t;if(isNaN(e))switch(r){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(r){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(r){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(g.isNegativeZero(e))return"-0.0";return t=e.toString(10),fe.test(t)?t.replace("e",".e"):t}function me(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||g.isNegativeZero(e))}var he=new s("tag:yaml.org,2002:float",{kind:"scalar",resolve:ce,construct:oe,predicate:me,represent:pe,defaultStyle:"lowercase"}),xe=G.extend({implicit:[X,ee,ue,he]}),ge=xe,A=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),F=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function ve(e){return e===null?!1:A.exec(e)!==null||F.exec(e)!==null}function ye(e){var r,t,i,n,a,l,u,o=0,p=null,y,w,h;if(r=A.exec(e),r===null&&(r=F.exec(e)),r===null)throw new Error("Date resolve error");if(t=+r[1],i=+r[2]-1,n=+r[3],!r[4])return new Date(Date.UTC(t,i,n));if(a=+r[4],l=+r[5],u=+r[6],r[7]){for(o=r[7].slice(0,3);o.length<3;)o+="0";o=+o}return r[9]&&(y=+r[10],w=+(r[11]||0),p=(y*60+w)*6e4,r[9]==="-"&&(p=-p)),h=new Date(Date.UTC(t,i,n,a,l,u,o)),p&&h.setTime(h.getTime()-p),h}function we(e){return e.toISOString()}var Ne=new s("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:ve,construct:ye,instanceOf:Date,represent:we});function ke(e){return e==="<<"||e===null}var Ee=new s("tag:yaml.org,2002:merge",{kind:"scalar",resolve:ke}),v=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function de(e){if(e===null)return!1;var r,t,i=0,n=e.length,a=v;for(t=0;t<n;t++)if(r=a.indexOf(e.charAt(t)),!(r>64)){if(r<0)return!1;i+=6}return i%8===0}function Ae(e){var r,t,i=e.replace(/[\r\n=]/g,""),n=i.length,a=v,l=0,u=[];for(r=0;r<n;r++)r%4===0&&r&&(u.push(l>>16&255),u.push(l>>8&255),u.push(l&255)),l=l<<6|a.indexOf(i.charAt(r));return t=n%4*6,t===0?(u.push(l>>16&255),u.push(l>>8&255),u.push(l&255)):t===18?(u.push(l>>10&255),u.push(l>>2&255)):t===12&&u.push(l>>4&255),new Uint8Array(u)}function Fe(e){var r="",t=0,i,n,a=e.length,l=v;for(i=0;i<a;i++)i%3===0&&i&&(r+=l[t>>18&63],r+=l[t>>12&63],r+=l[t>>6&63],r+=l[t&63]),t=(t<<8)+e[i];return n=a%3,n===0?(r+=l[t>>18&63],r+=l[t>>12&63],r+=l[t>>6&63],r+=l[t&63]):n===2?(r+=l[t>>10&63],r+=l[t>>4&63],r+=l[t<<2&63],r+=l[64]):n===1&&(r+=l[t>>2&63],r+=l[t<<4&63],r+=l[64],r+=l[64]),r}function Oe(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var Se=new s("tag:yaml.org,2002:binary",{kind:"scalar",resolve:de,construct:Ae,predicate:Oe,represent:Fe}),Ie=Object.prototype.hasOwnProperty,_e=Object.prototype.toString;function be(e){if(e===null)return!0;var r=[],t,i,n,a,l,u=e;for(t=0,i=u.length;t<i;t+=1){if(n=u[t],l=!1,_e.call(n)!=="[object Object]")return!1;for(a in n)if(Ie.call(n,a))if(!l)l=!0;else return!1;if(!l)return!1;if(r.indexOf(a)===-1)r.push(a);else return!1}return!0}function Te(e){return e!==null?e:[]}var Ye=new s("tag:yaml.org,2002:omap",{kind:"sequence",resolve:be,construct:Te}),Ce=Object.prototype.toString;function Le(e){if(e===null)return!0;var r,t,i,n,a,l=e;for(a=new Array(l.length),r=0,t=l.length;r<t;r+=1){if(i=l[r],Ce.call(i)!=="[object Object]"||(n=Object.keys(i),n.length!==1))return!1;a[r]=[n[0],i[n[0]]]}return!0}function je(e){if(e===null)return[];var r,t,i,n,a,l=e;for(a=new Array(l.length),r=0,t=l.length;r<t;r+=1)i=l[r],n=Object.keys(i),a[r]=[n[0],i[n[0]]];return a}var Me=new s("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Le,construct:je}),Pe=Object.prototype.hasOwnProperty;function Ue(e){if(e===null)return!0;var r,t=e;for(r in t)if(Pe.call(t,r)&&t[r]!==null)return!1;return!0}function De(e){return e!==null?e:{}}var Be=new s("tag:yaml.org,2002:set",{kind:"mapping",resolve:Ue,construct:De});ge.extend({implicit:[Ne,Ee],explicit:[Se,Ye,Me,Be]});function k(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var Re=new Array(256),Ke=new Array(256);for(var f=0;f<256;f++)Re[f]=k(f)?1:0,Ke[f]=k(f);function qe(e){const r=t=>{e&&!e.contains(t.target)&&!t.defaultPrevented&&e.dispatchEvent(new CustomEvent("click_outside",e))};return document.addEventListener("click",r,!0),{destroy(){document.removeEventListener("click",r,!0)}}}const $e=()=>{let e=new Date;return e.setFullYear(e.getFullYear()-1),e.setMonth(e.getMonth()+1),e};export{qe as c,$e as g};