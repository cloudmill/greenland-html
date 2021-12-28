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

$(
  () => {
    const askBtn = $('.project-aside-btn');
    const askModal = $('.modal-ask');
    const body = $('body');

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
          console.log('helo');
          askModal.removeClass('modal-active');
          body.removeClass('hidden');
        }
      })
    }
  })