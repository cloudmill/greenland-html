/* src/app.js */

// Styles
import 'Styles/_app.scss';

import FullPage from './assets/scripts/fullpage';

import './assets/scripts/modals';

import './assets/scripts/compare';

import './assets/scripts/3dEffect/index';

import './assets/scripts/spoiler';

import './assets/scripts/header';

import './assets/scripts/fancybox';

import './assets/scripts/aos';

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

// стили фокуса в инпутах корзины

{
  $(() => {
    const label = $('.checkout-block__label');
    const btn = $('.basket-aside__total').find('.btn');

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
          const error = $('.checkout-block').find('.parsley-error');

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

// переключение вариантов доставки в чекауте

{
  $(() => {
    const filter = $(".checkout-address__filter");
    const filterBtn = filter.find(".about-tabs__item");
    const addressItem = $(".checkout-address__item");

    if (filter.length) {
      filter.on("click", (event) => {
        if ($(event.target).closest(filterBtn).length) {
          const activeBtn = $(event.target).closest(filterBtn);
          const indexBtn = filterBtn.index(activeBtn);

          filterBtn.removeClass("about-tabs__item--active");
          addressItem.removeClass("checkout-address__item--active");

          activeBtn.addClass("about-tabs__item--active");
          $(addressItem[indexBtn]).addClass("checkout-address__item--active");
        }
      });
    }
  });
}