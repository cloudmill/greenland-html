import {mediaQuery} from './mediaQueries'

$(() => {

    if (mediaQuery.matches) {

      const header = $('.header')
  
      const fps = 120
  
      let scrollTop = $(window).scrollTop()
      
  
      $(window).one('scroll', scroll)
  
      function scroll() {
        update()
  
        setTimeout(() => {
          update()
  
          $(window).one('scroll', scroll)
        }, 1000 / fps)
      }
  
      function update() {
        const newScrollTop = $(window).scrollTop()
        const transparentSection = $('[data-transparent-section]').closest('[data-scrollmagic-pin-spacer]')
        const transparentSectionEnd = $('[data-transparent-end]')
  
        if (Math.abs(scrollTop - newScrollTop) >= 1) {
          if (newScrollTop > scrollTop) {
            header.addClass('header--up')
          } else {
            header.removeClass('header--up')
          }
        } 

        if (scrollTop > 1) {
          header.addClass('header--scroll')
        } else {
          header.removeClass('header--scroll')
          header.removeClass('header--up')
        }
  
        if ($('[data-header-transparent]').length) {

          if (scrollTop > transparentSection.offset().top && scrollTop < transparentSectionEnd.offset().top) {
            header.addClass('mainHeader')
          } else {
            if (scrollTop < 1) {
              header.addClass('mainHeader')
            } else {
              header.removeClass('mainHeader')
            }
          }
        }
  
        scrollTop = newScrollTop
      }
    }
});