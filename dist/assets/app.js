(()=>{var e,t={241:(e,t,i)=>{"use strict";var r=i(205),n=i(296);r.Z.use([n.Z]);var s=i(689),l=i.n(s),a=i(403),o=i(686);r.Z.use([n.Z,a.Z,o.Z]),r.Z.use([n.Z,a.Z,o.Z]);var d=[{title:"с дизайнерами",bullet:"дизайнерам"},{title:"для объектов",bullet:"объектам"},{title:"для объектов",bullet:"дистрибьютерам и оптовым покупателям"}];r.Z.use([n.Z]),r.Z.use([n.Z]),r.Z.use([n.Z]),r.Z.use([n.Z]),r.Z.use([n.Z]);i(179),i(573),i(985);r.Z.use([n.Z,a.Z,o.Z]),document.addEventListener("DOMContentLoaded",(function(){window.sliders=[];try{!function(){document.querySelector(".main__wrap"),document.querySelector(".aside");var e=document.querySelector("[data-cover-slider]"),t=e.querySelector("[data-cover-slider-counter]"),i=(window.innerWidth,window.innerWidth,window.innerHeight,new r.Z(e,{loop:!0,spaceBetween:20,navigation:{prevEl:e.querySelector("[data-cover-slider-prev]"),nextEl:e.querySelector("[data-cover-slider-next]")},on:{slideChangeTransitionEnd:function(){var e=+this.el.querySelector(".swiper-slide-active").dataset.swiperSlideIndex+1,i=this.slides.filter((function(e){return!e.classList.contains("swiper-slide-duplicate")})).length;t.innerHTML='\n          <div class="cover__slider-counter-active">0'.concat(e,'</div>\n          <div class="cover__slider-counter-length">0').concat(i,"</div>\n        ")}}}));window.sliders.push(i)}()}catch(e){}try{!function(){l().init();var e=document.querySelector("[data-mission-slider]"),t=e.querySelector("[data-mission-slider-bullets]"),i=e.querySelector("[data-mission-slider-counter]"),n=new r.Z(e,{direction:"vertical",mousewheel:{releaseOnEdges:!0},touchReleaseOnEdges:!0,on:{init:function(){var e=this.slides.length,t=this.activeIndex+1;i.innerHTML='\n          <div class="mission__slider-counter-active">0'.concat(t,'</div>\n          <div class="mission__slider-counter-length">0').concat(e,"</div>\n        ")},slideChangeTransitionEnd:function(){var e=this.slides.length,t=this.activeIndex+1;i.innerHTML='\n          <div class="mission__slider-counter-active">0'.concat(t,'</div>\n          <div class="mission__slider-counter-length">0').concat(e,"</div>\n        "),this.isBeginning||this.isEnd?this.params.mousewheel.releaseOnEdges=!0:this.params.mousewheel.releaseOnEdges=!1}},pagination:{el:t,clickable:!0,renderBullet:function(e,t){return'\n          <div class="'.concat(t,' mission__slider-bullet">\n            <div class="mission__slider-bullet-line"></div>\n            <div class="mission__slider-bullet-square"></div>\n          </div>\n        ')}}});window.sliders.push(n)}()}catch(e){}try{e=document.querySelector("[data-conditions-slider]"),t=e.querySelector("[data-conditions-slider-bullets]"),i=new r.Z(e,{mousewheel:{releaseOnEdges:!0},pagination:{el:t,clickable:!0,renderBullet:function(e,t){return'\n          <div class="'.concat(t,' conditions__slider-bullet">\n\n            <div class="conditions__slider-bullet-line"></div>\n            <div class="conditions__slider-bullet-square">\n              <div class="conditions__slider-bullet-text text__md text--uppercase">\n                <div class="conditions__slider-bullet-text-number">').concat(e+1,"</div>\n                ").concat(d[e].bullet,"</div>\n            </div>\n          </div>\n        ")}},on:{slideChangeTransitionEnd:function(){this.isBeginning||this.isEnd?this.params.mousewheel.releaseOnEdges=!0:this.params.mousewheel.releaseOnEdges=!1}}}),window.sliders.push(i)}catch(e){}var e,t,i,n,s,a,o,c,u,v,h,p,f,m,w,g;try{n=document.querySelector("[data-projects-slider]"),s=new r.Z(n,{slidesPerView:"auto",centeredSlides:!0,loop:!0,navigation:{prevEl:n.querySelector("[data-projects-slider-prev]"),nextEl:n.querySelector("[data-projects-slider-next]")}}),window.sliders.push(s)}catch(e){}try{document.addEventListener("pointermove",(function(e){if(e.target.dataset.fadeItemSliderBullet){var t=e.target.closest("[data-fade-item-slider]"),i=t.querySelectorAll("[data-fade-item-slider-item]"),r=t.querySelectorAll("[data-fade-item-slider-bullet]"),n=Array.prototype.indexOf.call(r,e.target);i.forEach((function(e,t){n===t?e.classList.add("is-active"):e.classList.remove("is-active")})),r.forEach((function(e,t){n===t?e.classList.add("is-active"):e.classList.remove("is-active")}))}})),document.addEventListener("click",(function(e){if(e.target.dataset.fadeItemSliderBullet){var t=e.target.closest("[data-fade-item-slider]"),i=t.querySelectorAll("[data-fade-item-slider-item]"),r=t.querySelectorAll("[data-fade-item-slider-bullet]"),n=Array.prototype.indexOf.call(r,e.target);i.forEach((function(e,t){n===t?e.classList.add("is-active"):e.classList.remove("is-active")})),r.forEach((function(e,t){n===t?e.classList.add("is-active"):e.classList.remove("is-active")}))}}))}catch(e){}try{a=document.querySelector("[data-brands-slider]"),o=new r.Z(a,{navigation:{prevEl:a.querySelector("[data-brands-slider-prev]"),nextEl:a.querySelector("[data-brands-slider-next]")},loop:!0,centeredSlides:!0,slidesPerView:"auto",spaceBetween:100}),window.sliders.push(o)}catch(e){}try{c=document.querySelector("[data-catalog-slider]"),u=document.querySelector("[data-catalog-slider-controls]"),v=new r.Z(c,{slidesPerView:"auto",loop:!0,navigation:{prevEl:u.querySelector("[data-catalog-slider-prev]"),nextEl:u.querySelector("[data-catalog-slider-next]")}}),window.sliders.push(v)}catch(e){}try{h=document.querySelector("[data-brands-logos-slider]"),p=document.querySelector("[data-brands-logos-controls]"),f=new r.Z(h,{navigation:{prevEl:p.querySelector("[data-brands-logos-prev]"),nextEl:p.querySelector("[data-brands-logos-next]")},loop:!0,slidesPerView:"auto"}),window.sliders.push(f)}catch(e){}try{m=document.querySelector("[data-other-news]"),w=document.querySelector(".other-news__controls"),g=new r.Z(m,{slidesPerView:"auto",spaceBetween:20,loop:!0,navigation:{prevEl:w.querySelector("[data-other-slider-prev]"),nextEl:w.querySelector("[data-other-slider-next]")}}),window.sliders.push(g)}catch(e){}}))},179:(e,t,i)=>{var r=i(638);r((function(){var e=[];r(".compare-table__list").each((function(){r(this).find(".compare-table__cell").each((function(t){var i=this.getBoundingClientRect().height;(!e[t]||e[t]<i)&&(e[t]=i)}))})),r(".compare-table__list").each((function(){r(this).find(".compare-table__cell").each((function(t){r(this).css("height",Math.ceil(e[t])+"px")}))}))}))},573:(e,t,i)=>{var r=i(638);r((function(){r(".spoiler__button").on("click",(function(e){var t=r(e.target).closest(".spoiler");t.toggleClass("spoiler--active"),t.find(".spoiler__dropdown").slideToggle(500)}))}))}},i={};function r(e){var n=i[e];if(void 0!==n)return n.exports;var s=i[e]={exports:{}};return t[e].call(s.exports,s,s.exports,r),s.exports}r.m=t,e=[],r.O=(t,i,n,s)=>{if(!i){var l=1/0;for(d=0;d<e.length;d++){for(var[i,n,s]=e[d],a=!0,o=0;o<i.length;o++)(!1&s||l>=s)&&Object.keys(r.O).every((e=>r.O[e](i[o])))?i.splice(o--,1):(a=!1,s<l&&(l=s));a&&(e.splice(d--,1),t=n())}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[i,n,s]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0};r.O.j=t=>0===e[t];var t=(t,i)=>{var n,s,[l,a,o]=i,d=0;for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(o)var c=o(r);for(t&&t(i);d<l.length;d++)s=l[d],r.o(e,s)&&e[s]&&e[s][0](),e[l[d]]=0;return r.O(c)},i=self.webpackChunk=self.webpackChunk||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var n=r.O(void 0,[496],(()=>r(241)));n=r.O(n)})();