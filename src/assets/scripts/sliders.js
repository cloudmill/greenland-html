import Swiper, {Navigation} from "swiper";

const $brandsSlider = document.querySelector('.brands-pics-slider');

const brandsSlider = new Swiper($brandsSlider, {

  navigation: {
    prevEl: $brandsSlider.querySelector('[data-brands-slider-prev]'),
    nextEl: $brandsSlider.querySelector('[data-brands-slider-next]'),
  },

  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 100,
})