(()=>{var e,t={520:(e,t,r)=>{"use strict";r(624),r(179),r(573),r(917);var i=r(205),n=r(296);i.Z.use([n.Z]);var a=r(689),s=r.n(a),o=r(403),l=r(686);i.Z.use([n.Z,o.Z,l.Z]),i.Z.use([n.Z,o.Z,l.Z]);var c=[{title:"с дизайнерами",bullet:"дизайнерам"},{title:"для объектов",bullet:"объектам"},{title:"для объектов",bullet:"дистрибьютерам и оптовым покупателям"}];i.Z.use([n.Z]),i.Z.use([n.Z]),i.Z.use([n.Z]),i.Z.use([n.Z]),i.Z.use([n.Z]),i.Z.use([n.Z]),i.Z.use([n.Z]),i.Z.use([n.Z]),i.Z.use([n.Z,o.Z,l.Z]),document.addEventListener("DOMContentLoaded",(function(){window.sliders=[];try{!function(){document.querySelector(".main__wrap"),document.querySelector(".aside");var e=document.querySelector("[data-cover-slider]"),t=e.querySelector("[data-cover-slider-counter]"),r=(window.innerWidth,window.innerWidth,window.innerHeight,new i.Z(e,{loop:!0,spaceBetween:20,navigation:{prevEl:e.querySelector("[data-cover-slider-prev]"),nextEl:e.querySelector("[data-cover-slider-next]")},on:{slideChangeTransitionEnd:function(){var e=+this.el.querySelector(".swiper-slide-active").dataset.swiperSlideIndex+1,r=this.slides.filter((function(e){return!e.classList.contains("swiper-slide-duplicate")})).length;t.innerHTML='\n          <div class="cover__slider-counter-active">0'.concat(e,'</div>\n          <div class="cover__slider-counter-length">0').concat(r,"</div>\n        ")}}}));window.sliders.push(r)}()}catch(e){}try{!function(){s().init();var e=document.querySelector("[data-mission-slider]"),t=e.querySelector("[data-mission-slider-bullets]"),r=e.querySelector("[data-mission-slider-counter]"),n=new i.Z(e,{direction:"vertical",mousewheel:{releaseOnEdges:!0},touchReleaseOnEdges:!0,on:{init:function(){var e=this.slides.length,t=this.activeIndex+1;r.innerHTML='\n          <div class="mission__slider-counter-active">0'.concat(t,'</div>\n          <div class="mission__slider-counter-length">0').concat(e,"</div>\n        ")},slideChangeTransitionEnd:function(){var e=this.slides.length,t=this.activeIndex+1;r.innerHTML='\n          <div class="mission__slider-counter-active">0'.concat(t,'</div>\n          <div class="mission__slider-counter-length">0').concat(e,"</div>\n        "),this.isBeginning||this.isEnd?this.params.mousewheel.releaseOnEdges=!0:this.params.mousewheel.releaseOnEdges=!1}},pagination:{el:t,clickable:!0,renderBullet:function(e,t){return'\n          <div class="'.concat(t,' mission__slider-bullet">\n            <div class="mission__slider-bullet-line"></div>\n            <div class="mission__slider-bullet-square"></div>\n          </div>\n        ')}}});window.sliders.push(n)}()}catch(e){}try{e=document.querySelector("[data-conditions-slider]"),t=e.querySelector("[data-conditions-slider-bullets]"),r=new i.Z(e,{mousewheel:{releaseOnEdges:!0},pagination:{el:t,clickable:!0,renderBullet:function(e,t){return'\n          <div class="'.concat(t,' conditions__slider-bullet">\n\n            <div class="conditions__slider-bullet-line"></div>\n            <div class="conditions__slider-bullet-square">\n              <div class="conditions__slider-bullet-text text__md text--uppercase">\n                <div class="conditions__slider-bullet-text-number">').concat(e+1,"</div>\n                ").concat(c[e].bullet,"</div>\n            </div>\n          </div>\n        ")}},on:{slideChangeTransitionEnd:function(){this.isBeginning||this.isEnd?this.params.mousewheel.releaseOnEdges=!0:this.params.mousewheel.releaseOnEdges=!1}}}),window.sliders.push(r)}catch(e){}var e,t,r,n,a,o,l,d,u,v,p,h,m,w,f,g,y,b,S;try{l=document.querySelector("[data-projects-slider]"),d=new i.Z(l,{slidesPerView:"auto",loop:!0,breakpoints:(n={},a=1280,o={spaceBetween:32},a in n?Object.defineProperty(n,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[a]=o,n),navigation:{prevEl:l.querySelector("[data-projects-slider-prev]"),nextEl:l.querySelector("[data-projects-slider-next]")}}),window.sliders.push(d)}catch(e){}try{document.addEventListener("pointermove",(function(e){if(e.target.dataset.fadeItemSliderBullet){var t=e.target.closest("[data-fade-item-slider]"),r=t.querySelectorAll("[data-fade-item-slider-item]"),i=t.querySelectorAll("[data-fade-item-slider-bullet]"),n=Array.prototype.indexOf.call(i,e.target);r.forEach((function(e,t){n===t?e.classList.add("is-active"):e.classList.remove("is-active")})),i.forEach((function(e,t){n===t?e.classList.add("is-active"):e.classList.remove("is-active")}))}})),document.addEventListener("click",(function(e){if(e.target.dataset.fadeItemSliderBullet){var t=e.target.closest("[data-fade-item-slider]"),r=t.querySelectorAll("[data-fade-item-slider-item]"),i=t.querySelectorAll("[data-fade-item-slider-bullet]"),n=Array.prototype.indexOf.call(i,e.target);r.forEach((function(e,t){n===t?e.classList.add("is-active"):e.classList.remove("is-active")})),i.forEach((function(e,t){n===t?e.classList.add("is-active"):e.classList.remove("is-active")}))}}))}catch(e){}try{u=document.querySelector("[data-brands-slider]"),v=new i.Z(u,{navigation:{prevEl:u.querySelector("[data-brands-slider-prev]"),nextEl:u.querySelector("[data-brands-slider-next]")},loop:!0,centeredSlides:!0,slidesPerView:"auto",spaceBetween:100}),window.sliders.push(v)}catch(e){}try{p=document.querySelector("[data-catalog-slider]"),h=document.querySelector("[data-catalog-slider-controls]"),m=new i.Z(p,{slidesPerView:"auto",loop:!0,navigation:{prevEl:h.querySelector("[data-catalog-slider-prev]"),nextEl:h.querySelector("[data-catalog-slider-next]")}}),window.sliders.push(m)}catch(e){}try{w=document.querySelector("[data-brands-logos-slider]"),f=document.querySelector("[data-brands-logos-controls]"),g=new i.Z(w,{navigation:{prevEl:f.querySelector("[data-brands-logos-prev]"),nextEl:f.querySelector("[data-brands-logos-next]")},loop:!0,slidesPerView:"auto"}),window.sliders.push(g)}catch(e){}try{y=document.querySelector("[data-other-news]"),b=document.querySelector(".other-news__controls"),S=new i.Z(y,{slidesPerView:"auto",spaceBetween:20,loop:!0,navigation:{prevEl:b.querySelector("[data-other-slider-prev]"),nextEl:b.querySelector("[data-other-slider-next]")}}),window.sliders.push(S)}catch(e){}try{!function(){var e,t,r,n=document.querySelector("[data-product-projects-slider]"),a=(document.querySelector("[data-product-projects-controls]"),new i.Z(n,{slidesPerView:"auto",loop:!0,breakpoints:(e={},t=1280,r={spaceBetween:32},t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e),navigation:{prevEl:n.querySelector("[data-projects-slider-prev]"),nextEl:n.querySelector("[data-projects-slider-next]")}}));window.sliders.push(a)}()}catch(e){}try{!function(){var e,t,r,n=document.querySelector("[data-product-desc-slider]"),a=document.querySelector("[data-product-desc-controls]"),s=new i.Z(n,{slidesPerView:"auto",loop:!0,spaceBetween:10,breakpoints:(e={},t=1280,r={spaceBetween:32},t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e),navigation:{prevEl:a.querySelector("[data-projects-slider-prev]"),nextEl:a.querySelector("[data-projects-slider-next]")}});window.sliders.push(s)}()}catch(e){}try{!function(){var e=document.querySelector("[data-cover-modal]"),t=document.querySelector("[data-modal-cover-controls]"),r=new i.Z(e,{slidesPerView:1,loop:!0,navigation:{prevEl:t.querySelector("[data-cover-modal-prev]"),nextEl:t.querySelector("[data-cover-modal-next]")}});window.sliders.push(r)}()}catch(e){}}));r(985);var d=r(638);d((function(){var e=d(".cober-modal-btn");if(e.length){var t=d(".modal-cover"),r=d(".main"),i=d(".modal-cover-close"),n=d(".page-main");d(window).on("click",(function(a){r.hasClass("modal-cover--open")?(d(a.target).closest(i).length&&(r.removeClass("modal-cover--open"),t.removeClass("modal-cover--active"),n.removeClass("overflow-hidden")),d(a.target).closest(t).length||(r.removeClass("modal-cover--open"),t.removeClass("modal-cover--active"),n.removeClass("overflow-hidden"))):d(a.target).closest(e).length&&(r.addClass("modal-cover--open"),t.addClass("modal-cover--active"),n.addClass("overflow-hidden"))}))}}))},179:(e,t,r)=>{var i=r(638);i((function(){var e=[];i(".compare-table__list").each((function(){i(this).find(".compare-table__cell").each((function(t){var r=this.getBoundingClientRect().height;(!e[t]||e[t]<r)&&(e[t]=r)}))})),i(".compare-table__list").each((function(){i(this).find(".compare-table__cell").each((function(t){i(this).css("height",Math.ceil(e[t])+"px")}))}))}))},624:(e,t,r)=>{var i=r(638);i((function(){var e=i(".aside");if(0!==e.length){var t=e.find(".aside__center"),r=i(".search-modal");t.on("click",(function(){r.toggleClass("modal-active")}));var n=e.find(".aside-btn"),a=i(".menu-modal");n.on("click",(function(){a.toggleClass("modal-active")}))}}))},573:(e,t,r)=>{var i=r(638);i((function(){i(".spoiler__button").on("click",(function(e){var t=i(e.target).closest(".spoiler");t.toggleClass("spoiler--active"),t.find(".spoiler__dropdown").slideToggle(500)}))}))}},r={};function i(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={exports:{}};return t[e].call(a.exports,a,a.exports,i),a.exports}i.m=t,e=[],i.O=(t,r,n,a)=>{if(!r){var s=1/0;for(c=0;c<e.length;c++){for(var[r,n,a]=e[c],o=!0,l=0;l<r.length;l++)(!1&a||s>=a)&&Object.keys(i.O).every((e=>i.O[e](r[l])))?r.splice(l--,1):(o=!1,a<s&&(s=a));o&&(e.splice(c--,1),t=n())}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,n,a]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0};i.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[s,o,l]=r,c=0;for(n in o)i.o(o,n)&&(i.m[n]=o[n]);if(l)var d=l(i);for(t&&t(r);c<s.length;c++)a=s[c],i.o(e,a)&&e[a]&&e[a][0](),e[s[c]]=0;return i.O(d)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=i.O(void 0,[705],(()=>i(520)));n=i.O(n)})();