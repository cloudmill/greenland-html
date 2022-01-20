import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);

export default function initbrandsPicsSlider() {

  const BREAKPOINT = 1280;

  brandsPicsSlider
  const $brandsPicsSlider = document.querySelector('[data-brands-pics-slider]');

  const brandsPicsSlider = new Swiper($brandsPicsSlider, {
    slidesPerView: 'auto',
    loop: true,
    centeredSlides: true,

    navigation: {
      prevEl: $brandsPicsSlider.querySelector('[data-projects-slider-prev]'),
      nextEl: $brandsPicsSlider.querySelector('[data-projects-slider-next]')
    }
  });

  window.sliders.push(brandsPicsSlider);

}