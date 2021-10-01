import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);

export default function initCatalogSlider() {

  const $catalogSlider = document.querySelector('[data-catalog-slider]');
  const $catalogSliderControls = document.querySelector('[data-catalog-slider-controls]');

  // console.log('yo1');

  const catalogSlider = new Swiper($catalogSlider, {
    slidesPerView: 'auto',
    // spaceBetween: 172,
    loop: true,
    navigation: {
      prevEl: $catalogSliderControls.querySelector('[data-catalog-slider-prev]'),
      nextEl: $catalogSliderControls.querySelector('[data-catalog-slider-next]')
    }

    
  });
  // console.log('yo2');
  window.sliders.push(catalogSlider);

}