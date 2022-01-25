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

import './assets/scripts/catalog-card';
import { CatalogFilters } from './assets/scripts/catalog-filters';


import LocomotiveScroll from 'locomotive-scroll';


{
  $(() => {
    const filters = document.querySelectorAll('[data-filters]')
    
    filters.forEach(item => {
      const catalogFilters = new CatalogFilters(item)
    })
    
    const filtersModal = document.querySelector('[data-filters-modal]')
    const catalogFiltersModal = new CatalogFilters(filtersModal, true)
  })

  // $(window).on('load', () => {
  //   const catalogCard = new CatalogCard()
  // })
}

// возвращение транзишна после загрузки страницы

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('.no-transition');
  body.classList.remove('no-transition');
})


// модалка с первого экрана главной

// {
//   $(() => {
//     const openBtn = $('.cober-modal-btn');

//     if (openBtn.length) {
//       const modalCover = $('.modal-cover');
//       const main = $('.main');
//       const closeBtn = $('.modal-cover-close');
//       const body = $('.page-main');

//       $(window).on('click', (event) => {

//         if (!main.hasClass('modal-cover--open')) {

//           if ( $(event.target).closest(openBtn).length ) {
//             main.addClass('modal-cover--open');
//             modalCover.addClass('modal-cover--active');
//             body.addClass('overflow-hidden');
//           }

//         } else {

//           if ( $(event.target).closest(closeBtn).length ) {
//             main.removeClass('modal-cover--open');
//             modalCover.removeClass('modal-cover--active');
//             body.removeClass('overflow-hidden');
//           }

//           if (!$(event.target).closest(modalCover).length) {
//             main.removeClass('modal-cover--open');
//             modalCover.removeClass('modal-cover--active');
//             body.removeClass('overflow-hidden');
//           }
//         }
//       })
//     }
//   })
// }

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

// переключение годов в истории

{
  $(() => {
    const filter = $(".history-years__list");
    const filterBtn = filter.find("li");
    const addressItem = $(".history-years__list-desc-item");

    if (filter.length) {
      filter.on("click", (event) => {
        if ($(event.target).closest(filterBtn).length) {
          const activeBtn = $(event.target).closest(filterBtn);
          const indexBtn = filterBtn.index(activeBtn);

          filterBtn.removeClass("history-years__list--active");
          addressItem.removeClass("is-active");

          activeBtn.addClass("history-years__list--active");
          $(addressItem[indexBtn]).addClass("is-active");
        }
      });
    }
  });
}

// переключение форм в модалке входа и регистрации

{
  $(() => {
    const filter = $(".modal-register__top");
    const filterBtn = filter.find(".modal-register__ttl");
    const formsItem = $(".modal-register__forms").find(".designers-form__form");

    if (filter.length) {
      filter.on("click", (event) => {
        if ($(event.target).closest(filterBtn).length) {
          const activeBtn = $(event.target).closest(filterBtn);
          const indexBtn = filterBtn.index(activeBtn);

          filterBtn.removeClass("is-active");
          formsItem.removeClass("is-active");

          activeBtn.addClass("is-active");
          $(formsItem[indexBtn]).addClass("is-active");
        }
      });
    }
  });
}

// переключение слайдеров по табам

{
  $(() => {
    const slidersList = $('.ready-projects__container');

    if (slidersList.length) {
      const filter = $('.designers-products-filter');
      const filterBtn = filter.find('.filter-tab');
      const sliderItem = slidersList.find('.projects__slider');

      filter.on("click", (event) => {
        if ($(event.target).closest(filterBtn).length) {
          const activeBtn = $(event.target).closest(filterBtn);
          const indexBtn = filterBtn.index(activeBtn);

          filterBtn.removeClass("active-tab");
          sliderItem.removeClass("is-active");

          activeBtn.addClass("is-active");
          $(sliderItem[indexBtn]).addClass("is-active");
        }
      });
    }
  });
}

// ответ форм

$('[data-send-form]').submit(function (e) {
  e.preventDefault();

  const form = $('[data-form]');
  const response = $('.response');
  const responseButton = $('.response__btn');

  setTimeout(() => {
    if (!$(this).find('.parsley-error').length) {
      form.addClass('form--hidden');
      response.addClass('response--active');
    }
  }, 0);

  if (responseButton.length !== 0) {
    responseButton.on('click', function () {
      form.removeClass('form--hidden');
      response.removeClass('response--active');
    });
  }
})

// tel mask

{
  document.addEventListener("DOMContentLoaded", function () {
    var phoneInputs = document.querySelectorAll('input[data-tel-input]');
    // console.log(phoneInputs);

    var getInputNumbersValue = function (input) {
      // Удаление любых символов крме цифр
      return input.value.replace(/\D/g, '');
    }

    // Очистка скопированного и вставленного в поле номера
    var onPhonePaste = function (e) {
      var input = e.target,
        inputNumbersValue = getInputNumbersValue(input);
      var pasted = e.clipboardData || window.clipboardData;
      if (pasted) {
        var pastedText = pasted.getData('Text');
        if (/\D/g.test(pastedText)) {
          input.value = inputNumbersValue;
          return;
        }
      }
    }

    // Обработка вписанного вручную номера
    var onPhoneInput = function (e) {
      var input = e.target,
        inputNumbersValue = getInputNumbersValue(input),
        selectionStart = input.selectionStart,
        formattedInputValue = "";

      if (!inputNumbersValue) {
        return input.value = "";
      }

      if (input.value.length != selectionStart) {
        if (e.data && /\D/g.test(e.data)) {
          input.value = inputNumbersValue;
        }
        return;
      }

      if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
        if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
        var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
        formattedInputValue = input.value = firstSymbols + " ";
        if (inputNumbersValue.length > 1) {
          formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
        }
        if (inputNumbersValue.length >= 5) {
          formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
        }
        if (inputNumbersValue.length >= 8) {
          formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
        }
        if (inputNumbersValue.length >= 10) {
          formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
        }
      } else {
        formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
      }
      input.value = formattedInputValue;
    }
    var onPhoneKeyDown = function (e) {
      // Удаление первого символа после удаления номера
      var inputValue = e.target.value.replace(/\D/g, '');
      if (e.keyCode == 8 && inputValue.length == 1) {
        e.target.value = "";
      }
    }
    for (var phoneInput of phoneInputs) {
      phoneInput.addEventListener('keydown', onPhoneKeyDown);
      phoneInput.addEventListener('input', onPhoneInput, false);
      phoneInput.addEventListener('paste', onPhonePaste, false);
    }
  })
}

// youtube api

$(window).on('load', () => {

  const video = $('[data-video]');

  if (video.length !== 0) {
    const vidNumber = video.length;

    var player = [];

    function onYouTubeIframeAPIReady() {

      for (let i=0; i<vidNumber; i++) {
        player[i] = new YT.Player(`player${i}`, {
          videoId: $(`#player${i}`).attr('data-video-id'),
        });
      }
    }
  
    onYouTubeIframeAPIReady();

    $('.video-preview:not(.video-preview--active)').on('click', (event) => {
      
      let currentVid = $(event.target).closest('.lk-videos__item');
      currentVid.addClass('video-preview--active');

      let activeIndex = $('.lk-videos__item').index(currentVid);

      player[activeIndex].playVideo();
    })
  }
})