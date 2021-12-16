import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);

// export default function abonementsSlider() {

//   const BREAKPOINT = 1280;

//   const $abonementsSlider = document.querySelector('[data-abonements-slider]');

//   const abonementsSlider = new Swiper($abonementsSlider, {

//     loop: true,

//     // breakpoints: {
//     //   [BREAKPOINT]: {
//     //   },
//     // },

//     // navigation: {
//     //   prevEl: $abonementsSlider.querySelector('[data-abonements-slider-prev]'),
//     //   nextEl: $abonementsSlider.querySelector('[data-abonements-slider-next]')
//     // }

//   });

//   $('[data-abonements-slider-prev]').on('click', () => {
//     abonementsSlider.slidePrev()
//   });

//   $('[data-abonements-slider-next]').on('click', () => {
//     abonementsSlider.slideNext()
//   } );

//   window.sliders.push(abonementsSlider);

// }

$(window).on('load', () => {

  const BREAKPOINT = 1280;

  const $abonementsSlider = document.querySelector('[data-abonements-slider]');

  const abonementsSlider = new Swiper($abonementsSlider, {

    loop: true,

    // breakpoints: {
    //   [BREAKPOINT]: {
    //   },
    // },
  });

  $('[data-abonements-slider-prev]').on('click', () => {
    abonementsSlider.slidePrev();
  });

  $('[data-abonements-slider-next]').on('click', () => {
    abonementsSlider.slideNext()
  });

});