const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-CYsMPO9B.js","assets/vendor--wXQMN-_.css"])))=>i.map(i=>d[i]);
import{S as w,N as _,P as y,i as x}from"./vendor-CYsMPO9B.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const b="modulepreload",q=function(n){return"/mfisher/"+n},p={},P=function(t,s,i){let e=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),l=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));e=Promise.allSettled(s.map(c=>{if(c=q(c),c in p)return;p[c]=!0;const u=c.endsWith(".css"),E=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${E}`))return;const a=document.createElement("link");if(a.rel=u?"stylesheet":b,u||(a.as="script"),a.crossOrigin="",a.href=c,l&&a.setAttribute("nonce",l),document.head.appendChild(a),u)return new Promise((L,S)=>{a.addEventListener("load",L),a.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return e.then(r=>{for(const l of r||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})},m=document.querySelector(".header__toggle-btn"),O=document.querySelector(".mobile-menu"),h=document.querySelector(".nav__logo_mob");m.addEventListener("click",function(){this.classList.toggle("is-active"),O.classList.toggle("is-open")?(h.classList.add("white"),m.classList.add("white")):(h.classList.remove("white"),m.classList.remove("white")),document.documentElement.classList.toggle("no-scroll")});document.querySelectorAll(".accordion__header").forEach((n,t)=>{const s=i=>{document.querySelectorAll(".accordion__header").forEach(e=>{const o=e.nextElementSibling,r=window.matchMedia("(max-width: 1279px)").matches,l=e===i;e.setAttribute("aria-expanded",l),o&&(l?o.style.maxHeight=r?o.scrollHeight+"px":"none":o.style.maxHeight=null)})};if(t===0){n.setAttribute("aria-expanded","true");const i=n.nextElementSibling;i&&(i.style.maxHeight=window.matchMedia("(max-width: 1279px)").matches?i.scrollHeight+32+"px":"none")}n.addEventListener("click",()=>{n.getAttribute("aria-expanded")==="true"||s(n)})});let f=window.scrollY;const d=document.querySelector("header");window.addEventListener("scroll",()=>{window.scrollY>f?(d.style.transform="translateY(-100%)",d.classList.remove("scroll")):(d.style.transform="translateY(0)",d.classList.add("scroll")),window.scrollY===0&&(d.style.transform="translateY(0)",d.classList.remove("scroll")),f=window.scrollY});new w(".testimonials__list",{modules:[_,y],slidesPerView:"auto",spaceBetween:20,pagination:{el:".swiper-pagination",clickable:!0},watchOverflow:!0,navigation:{nextEl:".swiper__button-next",prevEl:".swiper__button-prev"}});new w(".team__swiper",{modules:[_,y],navigation:{nextEl:".swiper__button-next",prevEl:".swiper__button-prev"},pagination:{el:".swiper-pagination"},mousewheel:!0,keyboard:!0});function v(n,t){document.querySelectorAll(n).forEach(s=>{const e=parseFloat(getComputedStyle(s).lineHeight)*t;if(s.scrollHeight>e){let o=s.textContent;for(;s.scrollHeight>e;)o=o.slice(0,-1),s.textContent=o+"..."}})}v(".testimonials__item-text",5);function A(){console.log("Размер экрана изменился:",window.innerWidth,window.innerHeight),v(".testimonials__item-text",5)}window.addEventListener("resize",A);const g=document.querySelectorAll(".budget-option");g.forEach(n=>{n.addEventListener("click",()=>{g.forEach(t=>t.classList.remove("selected")),n.classList.add("selected")})});document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelectorAll(".hero__btn, .team__btn, .cta__btn, .accordion__btn, .process__btn"),t=document.getElementById("popup"),s=t.querySelector(".popup__close");n.forEach(i=>{i.addEventListener("click",()=>{t.classList.add("is-open"),document.querySelector("html").classList.add("no-scroll")})}),s.addEventListener("click",()=>{t.classList.remove("is-open"),document.querySelector("html").classList.remove("no-scroll")}),t.addEventListener("click",i=>{i.target===t&&(t.classList.remove("is-open"),document.querySelector("html").classList.remove("no-scroll"))})});document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector("#user-phone");x(n,{initialCountry:"auto",geoIpLookup:t=>{fetch("https://ipapi.co/json").then(s=>s.json()).then(s=>t(s.country_code)).catch(()=>t("us"))},loadUtilsOnInit:()=>P(()=>import("./vendor-CYsMPO9B.js").then(t=>t.u),__vite__mapDeps([0,1]))})});
//# sourceMappingURL=main-gZzs1unU.js.map
