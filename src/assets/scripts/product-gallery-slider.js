import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);

$(window).on('load', () => {

  var galleryColumn = new Swiper('.product-card-gallery__column', {
    direction: 'vertical',
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var mainImg = new Swiper('.product-card-gallery__main', {
    slidesPerView: 1,
    direction: 'vertical',
    thumbs: {
      swiper: galleryColumn
    },
  });

})