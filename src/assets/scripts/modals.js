// модалки из бокового блока "поиск" и "меню"

$(
  () => {
    const aside = $('.aside');

    if (aside.length !== 0) {
      const body = $('.page-main');

      const searchButton = aside.find('.aside__center');
      const searchModal = $('.search-modal');

      const menuButton = aside.find('.aside-btn');
      const menuModal = $('.menu-modal');

      // открытие-закрытие модалки, закрытие другой и блок скролла

      searchButton.on('click', function () {
        searchModal.toggleClass('modal-active');
        menuModal.removeClass('modal-active');
        body.addClass('hidden');
      })

      menuButton.on('click', function () {
        menuModal.toggleClass('modal-active');
        searchModal.removeClass('modal-active');
        body.addClass('hidden');
      })

      $(window).on('click', (event) => {

        // если меню открыто, клик не по меню и не по кнопке - закрыть

        if (
          menuModal.hasClass('modal-active') &&
          $(event.target).closest('.menu-modal').length === 0 && 
          $(event.target).closest('.aside-btn').length === 0
        ) {
          menuModal.removeClass('modal-active');
          body.removeClass('hidden');
        }

        // если поиск открыт и клик не по модалке и не по поиску - закрыть

        if (
          searchModal.hasClass('modal-active') && 
          $(event.target).closest('.search-modal').length === 0 && 
          $(event.target).closest('.aside__center').length === 0
        ) {
          searchModal.removeClass('modal-active');
          body.removeClass('hidden');
        }

        // if (
        //   (!menuModal.hasClass('modal-active') && !searchModal.hasClass('modal-active'))
        //   // && 
        //   // (!$(event.target).closest('.aside-btn').length || !$(event.target).closest('.aside__center').length)
        // ) {
        //   body.removeClass('hidden');
        //   console.log(123);
        // }
      })
    }
  }
)

// модалки из хедера

$(
  () => {
    const headerMenu = $('.header__menu');

    if (headerMenu.length !== 0) {
      const closeBtn = $('.header-modal__close');
      const body = $('.page-main');

      const workBtn = $('[data-work-btn]');
      const workModal = $('[data-work-modal]');

      workBtn.on('click', () => {
        workModal.addClass('active');
        body.addClass('hidden');
      });
      
      const lanscapingBtn = $('[data-landscaping-btn]');
      const lanscapingModal = $('[data-landscaping-modal]');

      lanscapingBtn.on('click', () => {
        lanscapingModal.addClass('active');
        body.addClass('hidden');
      });

      const catalogBtn = $('[data-catalog-btn]');
      const catalogModal = $('[data-catalog-modal]');

      catalogBtn.on('click', () => {
        catalogModal.addClass('active');
        body.addClass('hidden');
      });

      closeBtn.on('click', () => {
        // console.log(123);
        $('.header-modal').removeClass('active');
        body.removeClass('hidden');
      })
    }
  }
)

// модалки по кнопке "задать вопрос" и консультация озеленение

$(() => {
    const askBtn = $('.project-aside-btn');
    const askModal = $('.modal-ask');
    const body = $('body');

    const consultModal = $('.modal-consult');
    const consultBtn = $('.consult-btn'); 

    const faqBtn = $('.faq-ask');

    if (askBtn.length !== 0) {
      askBtn.on('click', () => {
        askModal.addClass('modal-active');
        body.addClass('hidden');
      })

      $(window).on('click', (event) => {
          
        if (
          askModal.hasClass('modal-active') && 
          $(event.target).closest('.modal-ask__wrapper').length === 0 && 
          $(event.target).closest(askBtn).length === 0
        ) {
          askModal.removeClass('modal-active');
          body.removeClass('hidden');
        }
      })
    }

    if (faqBtn.length !== 0) {
      faqBtn.on('click', () => {
        askModal.addClass('modal-active');
        body.addClass('hidden');
      })

      $(window).on('click', (event) => {
          
        if (
          askModal.hasClass('modal-active') && 
          $(event.target).closest('.modal-ask__wrapper').length === 0 && 
          $(event.target).closest(faqBtn).length === 0
        ) {
          askModal.removeClass('modal-active');
          body.removeClass('hidden');
        }
      })
    }

    if (consultBtn.length !== 0) {
      consultBtn.on('click', () => {
        consultModal.addClass('modal-active');
        body.addClass('hidden');
      })

      $(window).on('click', (event) => {
          
        if (
          consultModal.hasClass('modal-active') && 
          $(event.target).closest('.modal-ask__wrapper').length === 0 && 
          $(event.target).closest(consultBtn).length === 0
        ) {
          consultModal.removeClass('modal-active');
          body.removeClass('hidden');
        }
      })
    }
})

// модалка "вход/регистрация"

$(() => {
  const registerBtn = $('.register-btn');
  const registerModal = $('.modal-register');
  const body = $('body');

  if (registerBtn.length !== 0) {
    registerBtn.on('click', () => {
      registerModal.addClass('modal-active');
      body.addClass('hidden');
    })

    $(window).on('click', (event) => {
        
      if (
        registerModal.hasClass('modal-active') && 
        $(event.target).closest('.modal-register__wrapper').length === 0 && 
        $(event.target).closest(registerBtn).length === 0
      ) {
        registerModal.removeClass('modal-active');
        body.removeClass('hidden');
      }
    })
  }
})

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
            main.addClass('modal-cover--open scroll-block');
            modalCover.addClass('modal-cover--active');
          }

        } else {

          if ( $(event.target).closest(closeBtn).length ) {
            main.removeClass('modal-cover--open scroll-block');
            modalCover.removeClass('modal-cover--active');
          }

          if (!$(event.target).closest(modalCover).length) {
            main.removeClass('modal-cover--open scroll-block');
            modalCover.removeClass('modal-cover--active');
          }
        }
      })
    }
  })
}

// модалка с картой в чекауте

{
  $(() => {
    const mapBtn = $('[data-map-btn]');
    const mapInputBtn = $('[data-map-input-btn]');

    if (mapBtn.length) {
      // const mapModal = $('.modal-map');
      const mapModal = $('[data-map-modal]');
      const mapInputModal = $('[data-map-input]')
      const body = $('body');

      mapBtn.on('click', () => {
        mapModal.addClass('modal-active');
        body.addClass('hidden');
      })

      mapInputBtn.on('click', () => {
        mapInputModal.addClass('modal-active');
        body.addClass('hidden');
      })

      $(window).on('click', (event) => {
          
        if ((mapModal.hasClass('modal-active') && 
          $(event.target).closest('.modal-map__wrapper').length === 0 && 
          $(event.target).closest(mapBtn).length === 0) || 
          (mapInputModal.hasClass('modal-active') && 
          $(event.target).closest('.modal-map__body').length === 0 && 
          $(event.target).closest(mapInputBtn).length === 0)
        ) {
          mapModal.removeClass('modal-active');
          mapInputModal.removeClass('modal-active');
          body.removeClass('hidden');
        }
      })
    }
  })
}

// document.addEventListener('DOMContentLoaded', () => {
//   const mapBtn = document.querySelectorAll('.checkout-block__btn');

//   console.log(mapBtn);

//   if (mapBtn.length) {
//     console.log(123);

//     const mapModal = document.querySelectorAll('.modal-map');
//     const body = document.querySelectorAll('body');

//     mapBtn.addEventListener('click', () => {
//       mapModal.classList.add('modal-active');
//       body.classList.add('hidden');
//     })

//     window.addEventListener('click', (event) => {

//       let target = event.target;

//       if (
//         mapModal.classList.contains('modal-active') && 
//         target.closest('.modal-ask__wrapper').length === 0 && 
//         target.closest(faqBtn).length === 0
//       ) {
//         mapModal.classList.remove('modal-active');
//         body.classList.remove('hidden');
//       }

//     })
//   }
// })