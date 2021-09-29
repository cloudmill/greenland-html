import Swiper, {Navigation} from "swiper";
Swiper.use([Navigation]);

export default function initBrandsLogosSlider() {
  const $brandsLogosSlider = document.querySelector('[data-brands-logos-slider]');
  const $brandsLogosControls = document.querySelector('[data-brands-logos-controls]');

  const brandsLogosSlider = new Swiper($brandsLogosSlider, {

    navigation: {
      prevEl: $brandsLogosControls.querySelector('[data-brands-logos-prev]'),
      nextEl: $brandsLogosControls.querySelector('[data-brands-logos-next]'),
    },

    loop: true,
    slidesPerView: 'auto',
  
  });

  window.sliders.push(brandsLogosSlider);

}