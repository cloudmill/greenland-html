import Swiper, {Navigation, Thumbs} from 'swiper';
Swiper.use([Navigation, Thumbs]);

$(window).on('load', () => {

  const BREAKPOINT = 1280;

  let galleryColumn

  if ($('[data-product-modal-column]').length) {
    galleryColumn = new Swiper('[data-product-modal-column]', {
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      watchSlidesProgress: true,
      mousewheel: true,
  
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else {
    galleryColumn = new Swiper('[data-product-photo-column]', {
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
  }

  var mainImg = new Swiper('.product-card-gallery__main', {
    slidesPerView: 1,
    direction: 'vertical',
    mousewheel: true,
    thumbs: {
      swiper: galleryColumn
    },
  });

})