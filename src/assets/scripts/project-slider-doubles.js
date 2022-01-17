import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);

$(window).on('load', () => {

  const BREAKPOINT = 1280;

  

  const $projectsSlider2 = document.querySelector('[data-projects-slider-2]');

  const projectsSlider2 = new Swiper($projectsSlider2, {
    slidesPerView: 'auto',
    loop: true,

    breakpoints: {
      [BREAKPOINT]: {
        centeredSlides: true,
      },
    },
  });

  $('[data-projects-slider-2-prev]').on('click', () => {
    projectsSlider2.slidePrev();
  });

  $('[data-projects-slider-2-next]').on('click', () => {
    projectsSlider2.slideNext()
  });




  const $projectsSlider3 = document.querySelector('[data-projects-slider-3]');

  const projectsSlider3 = new Swiper($projectsSlider3, {
    slidesPerView: 'auto',
    loop: true,

    breakpoints: {
      [BREAKPOINT]: {
        centeredSlides: true,
      },
    },
  });

  $('[data-projects-slider-3-prev]').on('click', () => {
    projectsSlider3.slidePrev();
  });

  $('[data-projects-slider-3-next]').on('click', () => {
    projectsSlider3.slideNext()
  });

});