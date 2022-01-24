import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);

export default function coverModal() {

  const BREAKPOINT = 1280;

  const $coverModal = document.querySelector('[data-cover-modal]');
  const $coverModalCntrl = document.querySelector('[data-modal-cover-controls]');

  const coverModal = new Swiper($coverModal, {
    slidesPerView: 1,
  });

  $('[data-cover-modal-prev]').on('click', () => {
    coverModal.slidePrev();
  });

  $('[data-cover-modal-next]').on('click', () => {
    coverModal.slideNext()
  });

  window.sliders.push(coverModal);

}