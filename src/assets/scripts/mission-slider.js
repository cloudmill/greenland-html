import Swiper, {Navigation, Pagination, Mousewheel} from 'swiper';
Swiper.use([Navigation, Pagination, Mousewheel]);
import {mediaQuery} from './mediaQueries'

export default function initMissionSlider() {

  let sliderParams
  let DELAY

  if (mediaQuery.matches) {
    DELAY = 1000
    sliderParams = {
      mousewheel: {
        releaseOnEdges: true,
        forceToAxis: true,
        sensitivity: 1,
        thresholdDelta: 40,
      },
      allowTouchMove: false,
      speed: 1000,
    }
  } else {
    DELAY = 500
    sliderParams = {
      mousewheel: {
        releaseOnEdges: true,
        forceToAxis: true,
      },
      speed: 750,
    }
  }

  const $missionSlider = document.querySelector('[data-mission-slider]');
  const $missionSliderBullets = $missionSlider.querySelector('[data-mission-slider-bullets]');
  const $missionSliderCounter = $missionSlider.querySelector('[data-mission-slider-counter]');
  const slider = $('[data-mission-slider]')

  const missionSlider = new Swiper($missionSlider, {
    direction: 'vertical',
    touchReleaseOnEdges: true,
    ...sliderParams,
    on: {
      init: function() {
        const length = this.slides.length;
        const index = this.activeIndex + 1;

        $missionSliderCounter.innerHTML = `
          <div class="mission__slider-counter-active">0${index}</div>
          <div class="mission__slider-counter-length">0${length}</div>
        `;
      },
      slideChangeTransitionEnd: function() {

        if (this.isBeginning || this.isEnd) {
          this.params.mousewheel.releaseOnEdges = true;
        } else {
          this.params.mousewheel.releaseOnEdges = false;
        }
      },
      slideChangeTransitionStart: function() {
        const length = this.slides.length;
        const index = this.activeIndex + 1;

        $missionSliderCounter.innerHTML = `
          <div class="mission__slider-counter-active">0${index}</div>
          <div class="mission__slider-counter-length">0${length}</div>
        `;
      },
      slideChange: function() {
        const sliderOffset = slider.offset().top
        const scrollPos = window.pageYOffset

        if (sliderOffset !== scrollPos) {

          $('html, body').animate({
            scrollTop: sliderOffset 
          }, DELAY);
        }
      }
    },
    pagination: {
      el: $missionSliderBullets,
      clickable: true,
      renderBullet: function (_, className) {
        return `
          <div class="${className} mission__slider-bullet">
            <div class="mission__slider-bullet-line"></div>
            <div class="mission__slider-bullet-square"></div>
          </div>
        `;
      }
    }
  });
  
  window.sliders.push(missionSlider);
}