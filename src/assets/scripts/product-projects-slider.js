import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);

export default function productProjects() {

  const BREAKPOINT = 1280;

  const $productProjects = document.querySelector('[data-product-projects-slider]');
  const $productProjectsControls = document.querySelector('[data-product-projects-controls]');

  const productProjects = new Swiper($productProjects, {
    slidesPerView: 'auto',
    loop: true,

    breakpoints: {
      [BREAKPOINT]: {
        spaceBetween: 32,
      },
    },

    navigation: {
      prevEl: $productProjects.querySelector('[data-projects-slider-prev]'),
      nextEl: $productProjects.querySelector('[data-projects-slider-next]')
    }
  });

  window.sliders.push(productProjects);

}