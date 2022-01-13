// модалки из бокового блока "поиск" и "меню"

$(
  () => {
    const aside = $('.aside');

    if (aside.length !== 0) {
      const searchButton = aside.find('.aside__center');
      const searchModal = $('.search-modal');

      searchButton.on('click', function () {
        searchModal.toggleClass('modal-active')
      })

      const menuButton = aside.find('.aside-btn');
      const menuModal = $('.menu-modal');

      menuButton.on('click', function () {
        menuModal.toggleClass('modal-active')
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
    const mapBtn = $('.checkout-block__btn');

    if (mapBtn.length) {
      const mapModal = $('.modal-map');
      const body = $('body');

      mapBtn.on('click', () => {
        mapModal.addClass('modal-active');
        body.addClass('hidden');
      })

      $(window).on('click', (event) => {
          
        if (
          mapModal.hasClass('modal-active') && 
          $(event.target).closest('.modal-map__wrapper').length === 0 && 
          $(event.target).closest(mapBtn).length === 0
        ) {
          mapModal.removeClass('modal-active');
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