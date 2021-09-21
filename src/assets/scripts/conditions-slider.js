import Swiper, {Navigation, Pagination, Mousewheel} from 'swiper';
Swiper.use([Navigation, Pagination, Mousewheel]);

const conditions = [
  {
    "title": "с дизайнерами",
    "bullet": "дизайнерам"
  },
  {
    "title": "для объектов",
    "bullet": "объектам"
  },
  {
    "title": "для объектов",
    "bullet": "дистрибьютерам и оптовым покупателям"
  }
]

export default function initConditionsSlider() {

  const $conditionsSlider = document.querySelector('[data-conditions-slider]');
  const $conditionsSliderBullets = $conditionsSlider.querySelector('[data-conditions-slider-bullets]');

  const conditionsSlider = new Swiper($conditionsSlider, {
    mousewheel: {
      releaseOnEdges: true
    },
    pagination: {
      el: $conditionsSliderBullets,
      clickable: true,
      renderBullet: function(index, className) {
        return `
          <div class="${className} conditions__slider-bullet">

            <div class="conditions__slider-bullet-line"></div>
            <div class="conditions__slider-bullet-square">
              <div class="conditions__slider-bullet-text text__md text--uppercase">
                <div class="conditions__slider-bullet-text-number">${index + 1}</div>
                ${conditions[index].bullet}</div>
            </div>
          </div>
        `;
      }
    },
    on: {
      slideChangeTransitionEnd: function() {
        if (this.isBeginning || this.isEnd) {
          this.params.mousewheel.releaseOnEdges = true;
        } else {
          this.params.mousewheel.releaseOnEdges = false;
        }
      }
    }
  });

  window.sliders.push(conditionsSlider);
}