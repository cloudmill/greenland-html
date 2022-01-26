import { mediaQuery } from './mediaQueries.js'

$(window).on('load', () => {
  const navLink = $('[data-scroll]')
  
  if (navLink.length && mediaQuery.matches) {
    const headerOffset = $('.header').height() + 10
    const FPS = 60

    const items = $('[data-scroll-item]')

    let positions = [],
    currentActive = null,
    links = navLink;

    // update offset
    upadateOffset()
    $(window).one('resize', handleResize)

    function upadateOffset() {
      positions.length = 0
      $('[data-section]').each(function(){
        positions.push({
          top: $(this).offset().top,
          a: links.filter('[data-scroll="#'+$(this).attr('id')+'"]').closest('[data-scroll-item]')
        });
      });

      positions = positions.reverse();
    }

    function handleResize() {
      setTimeout(() => {
        upadateOffset()

        $(window).one('resize', handleResize)
      }, 1000 / FPS);
    }

    // scroll active change
    updateActive()
    $(window).one('scroll', scrollHandler)

    function updateActive() {
      const winTop = $(window).scrollTop()

      for(let i = 0; i < positions.length; i++){
        if(positions[i].top - headerOffset < winTop + headerOffset){
          if(currentActive !== i){
            currentActive = i;
            items.removeClass('active');
            positions[i].a.addClass('active');
          }
          break;
        }
      }

      // if (positions[positions.length - 1].top - headerOffset > winTop + headerOffset) {
      //   items.removeClass('active');
      //   positions[positions.length - 1].a.addClass('active')
      // }
    }

    function scrollHandler() {
      setTimeout(() => {
        updateActive()

        $(window).one('scroll', scrollHandler)
      }, 1000 / FPS);
    }

    // anchor scroll
    navLink.on('click', function(event) {
      event.preventDefault();
  
      const elementId = $(this).data('scroll');
      const elementOffset = $(elementId).offset().top;
  
      $('html, body').animate({
        scrollTop: elementOffset - headerOffset
      }, 700);
    })
  }
})