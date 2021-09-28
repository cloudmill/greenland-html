import Swiper, {Navigation} from "swiper";
Swiper.use([Navigation]);

export default function initBrandsSlider() {
  const $brandsSlider = document.querySelector('[data-brands-slider]');

  const brandsSlider = new Swiper($brandsSlider, {

    navigation: {
      prevEl: $brandsSlider.querySelector('[data-brands-slider-prev]'),
      nextEl: $brandsSlider.querySelector('[data-brands-slider-next]'),
    },

    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 100,

    // slidesPerView: 3,
    // spaceBetween: 172,
    // loop: true,
  });

  window.sliders.push(brandsSlider);

}