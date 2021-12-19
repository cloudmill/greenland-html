import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);

export default function watchedSlider() {

  const $watchedSlider = document.querySelector('[data-watched-slider]');
  const $watchedControls = document.querySelector('[data-watched-controls]');

  // console.log('yo1');

  const watchedSlider = new Swiper($watchedSlider, {
    slidesPerView: 'auto',
    // spaceBetween: 172,
    loop: true,
    navigation: {
      prevEl: $watchedControls.querySelector('[data-watched-prev]'),
      nextEl: $watchedControls.querySelector('[data-watched-next]')
    }

    
  });
  // console.log('yo2');
  window.sliders.push(watchedSlider);

}