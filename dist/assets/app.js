(()=>{"use strict";var e,t={336:(e,t,i)=>{var r=i(205),s=i(296);r.Z.use([s.Z]);var n=i(689),l=i.n(n),a=i(403),o=i(686);r.Z.use([s.Z,a.Z,o.Z]),r.Z.use([s.Z,a.Z,o.Z]);var d=[{title:"с дизайнерами",bullet:"дизайнерам"},{title:"для объектов",bullet:"объектам"},{title:"для объектов",bullet:"дистрибьютерам и оптовым покупателям"}];r.Z.use([s.Z]),r.Z.use([s.Z]),r.Z.use([s.Z]),r.Z.use([s.Z]);i(985);r.Z.use([s.Z,a.Z,o.Z]),document.addEventListener("DOMContentLoaded",(function(){window.sliders=[];try{!function(){document.querySelector(".main__wrap"),document.querySelector(".aside");var e=document.querySelector("[data-cover-slider]"),t=e.querySelector("[data-cover-slider-counter]"),i=(window.innerWidth,window.innerWidth,window.innerHeight,new r.Z(e,{loop:!0,spaceBetween:20,navigation:{prevEl:e.querySelector("[data-cover-slider-prev]"),nextEl:e.querySelector("[data-cover-slider-next]")},on:{slideChangeTransitionEnd:function(){var e=+this.el.querySelector(".swiper-slide-active").dataset.swiperSlideIndex+1,i=this.slides.filter((function(e){return!e.classList.contains("swiper-slide-duplicate")})).length;t.innerHTML='\n          <div class="cover__slider-counter-active">0'.concat(e,'</div>\n          <div class="cover__slider-counter-length">0').concat(i,"</div>\n        ")}}}));window.sliders.push(i)}()}catch(e){}try{!function(){l().init();var e=document.querySelector("[data-mission-slider]"),t=e.querySelector("[data-mission-slider-bullets]"),i=e.querySelector("[data-mission-slider-counter]"),s=new r.Z(e,{direction:"vertical",mousewheel:{releaseOnEdges:!0},touchReleaseOnEdges:!0,on:{init:function(){var e=this.slides.length,t=this.activeIndex+1;i.innerHTML='\n          <div class="mission__slider-counter-active">0'.concat(t,'</div>\n          <div class="mission__slider-counter-length">0').concat(e,"</div>\n        ")},slideChangeTransitionEnd:function(){var e=this.slides.length,t=this.activeIndex+1;i.innerHTML='\n          <div class="mission__slider-counter-active">0'.concat(t,'</div>\n          <div class="mission__slider-counter-length">0').concat(e,"</div>\n        "),this.isBeginning||this.isEnd?this.params.mousewheel.releaseOnEdges=!0:this.params.mousewheel.releaseOnEdges=!1}},pagination:{el:t,clickable:!0,renderBullet:function(e,t){return'\n          <div class="'.concat(t,' mission__slider-bullet">\n            <div class="mission__slider-bullet-line"></div>\n            <div class="mission__slider-bullet-square"></div>\n          </div>\n        ')}}});window.sliders.push(s)}()}catch(e){}try{e=document.querySelector("[data-conditions-slider]"),t=e.querySelector("[data-conditions-slider-bullets]"),i=new r.Z(e,{mousewheel:{releaseOnEdges:!0},pagination:{el:t,clickable:!0,renderBullet:function(e,t){return'\n          <div class="'.concat(t,' conditions__slider-bullet">\n\n            <div class="conditions__slider-bullet-line"></div>\n            <div class="conditions__slider-bullet-square">\n              <div class="conditions__slider-bullet-text text__md text--uppercase">\n                <div class="conditions__slider-bullet-text-number">').concat(e+1,"</div>\n                ").concat(d[e].bullet,"</div>\n            </div>\n          </div>\n        ")}},on:{slideChangeTransitionEnd:function(){this.isBeginning||this.isEnd?this.params.mousewheel.releaseOnEdges=!0:this.params.mousewheel.releaseOnEdges=!1}}}),window.sliders.push(i)}catch(e){}var e,t,i,s,n,a,o,c,u,v;try{s=document.querySelector("[data-projects-slider]"),n=new r.Z(s,{slidesPerView:3,spaceBetween:172,loop:!0,navigation:{prevEl:s.querySelector("[data-projects-slider-prev]"),nextEl:s.querySelector("[data-projects-slider-next]")}}),window.sliders.push(n)}catch(e){}try{document.addEventListener("pointermove",(function(e){if(e.target.dataset.fadeItemSliderBullet){var t=e.target.closest("[data-fade-item-slider]"),i=t.querySelectorAll("[data-fade-item-slider-item]"),r=t.querySelectorAll("[data-fade-item-slider-bullet]"),s=Array.prototype.indexOf.call(r,e.target);i.forEach((function(e,t){s===t?e.classList.add("is-active"):e.classList.remove("is-active")})),r.forEach((function(e,t){s===t?e.classList.add("is-active"):e.classList.remove("is-active")}))}})),document.addEventListener("click",(function(e){if(e.target.dataset.fadeItemSliderBullet){var t=e.target.closest("[data-fade-item-slider]"),i=t.querySelectorAll("[data-fade-item-slider-item]"),r=t.querySelectorAll("[data-fade-item-slider-bullet]"),s=Array.prototype.indexOf.call(r,e.target);i.forEach((function(e,t){s===t?e.classList.add("is-active"):e.classList.remove("is-active")})),r.forEach((function(e,t){s===t?e.classList.add("is-active"):e.classList.remove("is-active")}))}}))}catch(e){}try{a=document.querySelector("[data-brands-slider]"),o=new r.Z(a,{navigation:{prevEl:a.querySelector("[data-brands-slider-prev]"),nextEl:a.querySelector("[data-brands-slider-next]")},loop:!0,centeredSlides:!0,slidesPerView:"auto",spaceBetween:100}),window.sliders.push(o)}catch(e){}try{!function(){var e=document.querySelector("[data-catalog-slider]"),t=document.querySelector("[data-catalog-slider-controls]");console.log("yo1");var i=new r.Z(e,{slidesPerView:"auto",loop:!0,navigation:{prevEl:t.querySelector("[data-catalog-slider-prev]"),nextEl:t.querySelector("[data-catalog-slider-next]")}});console.log("yo2"),window.sliders.push(i)}()}catch(e){}try{c=document.querySelector("[data-brands-logos-slider]"),u=document.querySelector("[data-brands-logos-controls]"),v=new r.Z(c,{navigation:{prevEl:u.querySelector("[data-brands-logos-prev]"),nextEl:u.querySelector("[data-brands-logos-next]")},loop:!0,slidesPerView:"auto"}),window.sliders.push(v)}catch(e){}}))}},i={};function r(e){var s=i[e];if(void 0!==s)return s.exports;var n=i[e]={exports:{}};return t[e].call(n.exports,n,n.exports,r),n.exports}r.m=t,e=[],r.O=(t,i,s,n)=>{if(!i){var l=1/0;for(d=0;d<e.length;d++){for(var[i,s,n]=e[d],a=!0,o=0;o<i.length;o++)(!1&n||l>=n)&&Object.keys(r.O).every((e=>r.O[e](i[o])))?i.splice(o--,1):(a=!1,n<l&&(l=n));a&&(e.splice(d--,1),t=s())}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[i,s,n]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0};r.O.j=t=>0===e[t];var t=(t,i)=>{var s,n,[l,a,o]=i,d=0;for(s in a)r.o(a,s)&&(r.m[s]=a[s]);if(o)var c=o(r);for(t&&t(i);d<l.length;d++)n=l[d],r.o(e,n)&&e[n]&&e[n][0](),e[l[d]]=0;return r.O(c)},i=self.webpackChunk=self.webpackChunk||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var s=r.O(void 0,[597],(()=>r(336)));s=r.O(s)})();