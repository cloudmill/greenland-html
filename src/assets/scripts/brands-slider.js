import Swiper, {Navigation} from "swiper";

export default function initBrandsSlider() {

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
  });

  window.sliders.push(brandsSlider);

}