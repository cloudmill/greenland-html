/* src/app.js */

// Styles
import 'Styles/_app.scss';


import FullPage from './assets/scripts/fullpage';


import './assets/scripts/modals';

import './assets/scripts/compare';

import './assets/scripts/spoiler';

import '@fancyapps/fancybox';

import './assets/scripts/sliders';

import LocomotiveScroll from 'locomotive-scroll';

{
  $(() => {
    const openBtn = $('.cober-modal-btn');

    if (openBtn.length) {
      const modalCover = $('.modal-cover');
      const main = $('.main');
      const closeBtn = $('.modal-cover-close');
      const body = $('.page-main');

      $(window).on('click', (event) => {

        if (!main.hasClass('modal-cover--open')) {

          if ( $(event.target).closest(openBtn).length ) {
            main.addClass('modal-cover--open');
            modalCover.addClass('modal-cover--active');
            body.addClass('overflow-hidden');
          }

        } else {

          if ( $(event.target).closest(closeBtn).length ) {
            main.removeClass('modal-cover--open');
            modalCover.removeClass('modal-cover--active');
            body.removeClass('overflow-hidden');
          }

          if (!$(event.target).closest(modalCover).length) {
            main.removeClass('modal-cover--open');
            modalCover.removeClass('modal-cover--active');
            body.removeClass('overflow-hidden');
          }
        }
      })
    }
  })
}