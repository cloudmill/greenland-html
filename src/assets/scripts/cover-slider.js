import Swiper, {Navigation} from 'swiper';

Swiper.use([Navigation]);

export default function initCoverSlider() {

  const $wrap = document.querySelector('.main__wrap');
  const $aside = document.querySelector('.aside');
  const $coverSlider = document.querySelector('[data-cover-slider]');

  const $coverSliderCounter = $coverSlider.querySelector('[data-cover-slider-counter]');

  const shiftX = (window.innerWidth / 2) - (window.innerWidth * 0.43 / 2);
  const shiftY = window.innerHeight * 0.6627777777777778;

  const coverSlider = new Swiper($coverSlider, {
    loop: true,
    spaceBetween: 20,
    navigation: {
      prevEl: $coverSlider.querySelector('[data-cover-slider-prev]'),
      nextEl: $coverSlider.querySelector('[data-cover-slider-next]'),
    },
    on: {
      slideChangeTransitionEnd: function() {
        const $active = this.el.querySelector('.swiper-slide-active');
        const index = +$active.dataset.swiperSlideIndex + 1;
        const length = this.slides.filter(
          $slide => !$slide.classList.contains('swiper-slide-duplicate')).length;

        $coverSliderCounter.innerHTML = `
          <div class="cover__slider-counter-active">0${index}</div>
          <div class="cover__slider-counter-length">0${length}</div>
        `
      }
    }
  });

  window.sliders.push(coverSlider);

  // $coverSlider.addEventListener('click', () => {
  //   $wrap.classList.toggle('is-scaled');
  //   $aside.classList.toggle('is-hidden');

  //   $wrap.style.transform = !$wrap.style.transform ?
  //     `translate(-${shiftX}px, -${shiftY}px) scale(0.43)` :
  //     null;

  //   window.sliders.forEach(swiper => swiper.update());
  // });

}