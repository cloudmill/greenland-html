import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);

export default function initCatalogSlider() {

  const $catalogSlider = document.querySelector('[data-catalog-slider]');
  const $catalogSliderControls = document.querySelector('[data-catalog-slider-controls]');

  // console.log('yo1');

  let sliderParams = {
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      prevEl: $catalogSliderControls.querySelector('[data-catalog-slider-prev]'),
      nextEl: $catalogSliderControls.querySelector('[data-catalog-slider-next]')
    }
  }

  if ($catalogSlider.getAttribute('data-catalog-slider') === 'hold') {
    sliderParams = {
      allowTouchMove: false,
      ...sliderParams
    }
  }

  const catalogSlider = new Swiper($catalogSlider, sliderParams);
  // console.log('yo2');
  window.sliders.push(catalogSlider);

}