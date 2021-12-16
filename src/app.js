/* src/app.js */

// Styles
import 'Styles/_app.scss';


import FullPage from './assets/scripts/fullpage';


import './assets/scripts/modals';

import './assets/scripts/compare';

import './assets/scripts/3dEffect/index';

import './assets/scripts/spoiler';

import '@fancyapps/fancybox';

import parsley from "parsleyjs";
import "parsleyjs/dist/i18n/ru";

import './assets/scripts/sliders';

import LocomotiveScroll from 'locomotive-scroll';



// модалка с первого экрана главной

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

// стили фокуса в инпутах форм

{
  $(() => {
    const label = $('.designers-form__label');
    const btn = $('.designers-form__form').find('.btn');

    $(window).on('click', event => {

      if ($(event.target).closest(label).length) {
        label.removeClass('input-focus');
        $(event.target).closest(label).removeClass('error');
        $(event.target).closest(label).addClass('input-focus placeholder-top');
      } else {
        label.removeClass('input-focus');
      }

      if ($(event.target).closest(btn).length) {

        setTimeout(() => {
          const error = $('.designers-form__form').find('.parsley-error');

          if (error.length) {
            error.closest(label).addClass('error')
          } else {
            error.closest(label).removeClass('error')
          }
        }, 0);
        
      }
    })
  })
}