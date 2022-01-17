import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);

export default function initProjectsSlider() {

  const BREAKPOINT = 1280;

  const $projectsSlider = document.querySelector('[data-projects-slider]');

  const projectsSlider = new Swiper($projectsSlider, {
    slidesPerView: 'auto',
    loop: true,

    breakpoints: {
      [BREAKPOINT]: {
        centeredSlides: true,
      },
    },

    navigation: {
      prevEl: $projectsSlider.querySelector('[data-projects-slider-prev]'),
      nextEl: $projectsSlider.querySelector('[data-projects-slider-next]')
    }
  });

  window.sliders.push(projectsSlider);

}