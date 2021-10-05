import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);

export default function initProjectsSlider() {

  const $projectsSlider = document.querySelector('[data-projects-slider]');

  const projectsSlider = new Swiper($projectsSlider, {
    // slidesPerView: 3,
    slidesPerView: 'auto',
    centeredSlides: true,
    // spaceBetween: 172,
    loop: true,
    navigation: {
      prevEl: $projectsSlider.querySelector('[data-projects-slider-prev]'),
      nextEl: $projectsSlider.querySelector('[data-projects-slider-next]')
    }
  });

  window.sliders.push(projectsSlider);

}