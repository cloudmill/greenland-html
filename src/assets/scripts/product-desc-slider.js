import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);

export default function productDesc() {

  const BREAKPOINT = 1280;

  const $productDesc = document.querySelector('[data-product-desc-slider]');
  const $productDescControls = document.querySelector('[data-product-desc-controls]');

  const productDesc = new Swiper($productDesc, {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 10,

    breakpoints: {
      [BREAKPOINT]: {
        spaceBetween: 32,
      },
    },

    navigation: {
      prevEl: $productDescControls.querySelector('[data-product-desc-prev]'),
      nextEl: $productDescControls.querySelector('[data-product-desc-next]')
    }
  });

  window.sliders.push(productDesc);

}