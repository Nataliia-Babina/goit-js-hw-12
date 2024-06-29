import{a as P,S as M,i as L}from"./assets/vendor-b0d10f48.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const $="44448499-e9e25ac25e8b747c6a75d5b6f",H="https://pixabay.com/api/";async function w(e,r,s){const n=new URLSearchParams({key:$,q:e,page:r,per_page:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=`${H}?${n}`;try{const a=(await P.get(t,{params:n})).data;if(a.hits.length===0)throw new Error("Failed to obtain images!");return a}catch(o){throw new Error(o.message)}}let h;function b(e){const r=document.querySelector(".gallery"),s=e.map(n=>`
      <div class="div-info">
        <a href="${n.largeImageURL}">
          <img src="${n.webformatURL}" alt="${n.tags}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <p class="info-title">Likes</p>
            <p class="info-value">${n.likes}</p>
          </div>
          <div class="info-item">
            <p class="info-title">Views</p>
            <p class="info-value">${n.views}</p>
          </div>
          <div class="info-item">
            <p class="info-title">Comments</p>
            <p class="info-value">${n.comments}</p>
          </div>
          <div class="info-item">
            <p class="info-title">Downloads</p>
            <p class="info-value">${n.downloads}</p>
          </div>
        </div>
      </div>
    `).join("");r.insertAdjacentHTML("beforeend",s),h?h.refresh():h=new M(".gallery a",{captionsData:"alt",captionDelay:250})}function S(e,r,s){e>=r?(p(s),r&&L.info({title:"The End!",message:"We're sorry, but you've reached the end of search results."})):E(s)}function l(e){L.error({title:"Error",message:e})}function E(e){e.classList.remove("active")}function p(e){e.classList.add("active")}function q(e){e.classList.remove("hidden")}function y(e){e.classList.add("hidden")}function T(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}const v=document.querySelector(".name-form"),I=document.querySelector('input[name="query"]'),u=document.querySelector(".gallery"),d=document.getElementById("loader"),i=document.querySelector(".btn-load-more");let f="",c=1,m=1,g=15;v.addEventListener("submit",async e=>{if(e.preventDefault(),f=I.value.trim(),f===""){l("Please enter a search query!"),p(i);return}c=1,q(d),p(i),u.innerHTML="";try{const r=await w(f,c,g);if(m=Math.ceil(r.totalHits/g),m===0){l("Empty Result"),y(d),S(c,m,i);return}if(r.hits.length===0){u.innerHTML="",l("Sorry, there are no images matching your search query. Please try again!");return}E(i),b(r.hits)}catch{u.innerHTML="",l("Something went wrong. Please try again later.")}finally{y(d)}v.reset()});i.addEventListener("click",async()=>{c++,p(i),q(d);try{const e=await w(f,c,g);if(e.hits.length===0){l("No more images found");return}b(e.hits)}catch{u.innerHTML="",l("Something went wrong. Please try again later.")}finally{y(d),S(c,m,i),T()}});
//# sourceMappingURL=commonHelpers.js.map