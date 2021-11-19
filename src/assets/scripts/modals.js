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