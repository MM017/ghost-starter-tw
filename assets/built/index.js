!function(){"use strict";var e;let t=null===(e=document.querySelector('link[rel="next"]'))||void 0===e?void 0:e.getAttribute("href");document.querySelector(".gh-burger").addEventListener("click",(function(){document.body.classList.toggle("is-menu-open")})),function(){if(!t)return;new IntersectionObserver(((e,r)=>{try{e.forEach((e=>{e.isIntersecting&&t&&async function(e){try{var t;const r=await fetch(e);if(!r.ok)throw new Error("Failed to fetch page");const o=await r.text(),n=(new DOMParser).parseFromString(o,"text/html");return{posts:n.querySelectorAll(".post"),nextLink:null===(t=n.querySelector('link[rel="next"]'))||void 0===t?void 0:t.getAttribute("href")}}catch(e){throw new Error(e)}}(t).then((e=>{let{posts:o,nextLink:n}=e;o.forEach((e=>{document.querySelector(".gh-postfeed").append(e)})),n?(t=n,r.observe(document.querySelector(".post:last-of-type"))):r.disconnect()}))}))}catch(e){console.log(e)}}),{rootMargin:"150px"}).observe(document.querySelector(".post:last-of-type"))}()}();
//# sourceMappingURL=index.js.map
