function c(e){const t=n=>{e&&!e.contains(n.target)&&!n.defaultPrevented&&e.dispatchEvent(new CustomEvent("click_outside",e))};return document.addEventListener("click",t,!0),{destroy(){document.removeEventListener("click",t,!0)}}}const r=()=>{let e=new Date;return e.setFullYear(e.getFullYear()-1),e.setMonth(e.getMonth()+1),e};export{c,r as g};