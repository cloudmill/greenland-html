import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);

export default function initProjectsSlider() {

  const BREAKPOINT = 1280;

  const $projectsSlider = document.querySelector('[data-projects-slider]');

  const projectsSlider = new Swiper($projectsSlider, {
    // slidesPerView: 3,
    slidesPerView: 'auto',
    // spaceBetween: 172,
    loop: true,

    breakpoints: {
      [BREAKPOINT]: {
        centeredSlides: true,
        // slidesPerView: 'auto',
        
      },
    },

    navigation: {
      prevEl: $projectsSlider.querySelector('[data-projects-slider-prev]'),
      nextEl: $projectsSlider.querySelector('[data-projects-slider-next]')
    }
  });

  window.sliders.push(projectsSlider);

}