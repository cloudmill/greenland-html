import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);

export default function initOtherSlider() {

  const $otherSlider = document.querySelector('[data-other-news]');
  const $otherControls = document.querySelector('.other-news__controls');

  const otherSlider = new Swiper($otherSlider, {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    navigation: {
      prevEl: $otherControls.querySelector('[data-other-slider-prev]'),
      nextEl: $otherControls.querySelector('[data-other-slider-next]')
    }
  });

  window.sliders.push(otherSlider);

}