import Swiper, {Navigation, Thumbs} from 'swiper';
Swiper.use([Navigation, Thumbs]);

$(window).on('load', () => {

  const BREAKPOINT = 1280;

  var galleryColumn = new Swiper('.product-card-gallery__column', {
    direction: 'vertical',
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    mousewheel: true,

    breakpoints: {
      [BREAKPOINT]: {
        slidesPerView: 3,
      },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var mainImg = new Swiper('.product-card-gallery__main', {
    slidesPerView: 1,
    direction: 'vertical',
    mousewheel: true,
    thumbs: {
      swiper: galleryColumn
    },
  });

})