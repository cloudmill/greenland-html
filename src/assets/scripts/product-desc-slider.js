import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);

export default function productDesc() {

  const BREAKPOINT = 1280;

  const $productDesc = document.querySelector('[data-product-projects-slider]');
  const $productProjectsControls = document.querySelector('[data-product-projects-controls]');

  const productDesc = new Swiper($productDesc, {
    slidesPerView: 'auto',
    loop: true,

    breakpoints: {
      [BREAKPOINT]: {
        spaceBetween: 32,
      },
    },

    navigation: {
      prevEl: $productDesc.querySelector('[data-projects-slider-prev]'),
      nextEl: $productDesc.querySelector('[data-projects-slider-next]')
    }
  });

  window.sliders.push(productDesc);

}