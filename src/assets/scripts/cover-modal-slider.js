import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);

export default function coverModal() {

  const BREAKPOINT = 1280;

  const $coverModal = document.querySelector('[data-cover-modal]');
  const $coverModalCntrl = document.querySelector('[modal-cover-controls]');



  const coverModal = new Swiper($coverModal, {
    slidesPerView: 1,
    loop: true,

    navigation: {
      prevEl: $coverModalCntrl.querySelector('[data-cover-modal-prev]'),
      nextEl: $coverModalCntrl.querySelector('[data-cover-modal-next]')
    }
  });

  window.sliders.push(coverModal);

}