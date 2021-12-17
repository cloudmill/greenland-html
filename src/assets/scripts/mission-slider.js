import Marquee3k from 'marquee3000';
import Swiper, {Navigation, Pagination, Mousewheel} from 'swiper';
Swiper.use([Navigation, Pagination, Mousewheel]);

export default function initMissionSlider() {

  // Marquee3k.init();

  const $missionSlider = document.querySelector('[data-mission-slider]');
  const $missionSliderBullets = $missionSlider.querySelector('[data-mission-slider-bullets]');
  const $missionSliderCounter = $missionSlider.querySelector('[data-mission-slider-counter]');

  const missionSlider = new Swiper($missionSlider, {
    direction: 'vertical',
    mousewheel: {
      releaseOnEdges: true
    },
    touchReleaseOnEdges: true,
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
        const length = this.slides.length;
        const index = this.activeIndex + 1;

        $missionSliderCounter.innerHTML = `
          <div class="mission__slider-counter-active">0${index}</div>
          <div class="mission__slider-counter-length">0${length}</div>
        `;

        if (this.isBeginning || this.isEnd) {
          this.params.mousewheel.releaseOnEdges = true;
        } else {
          this.params.mousewheel.releaseOnEdges = false;
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