{
  $(() => {
    $('.spoiler__button').on('click', event => {
      const currentSpoiler = $(event.target).closest('.spoiler');
      currentSpoiler.toggleClass('spoiler--active');
      currentSpoiler.find('.spoiler__dropdown').slideToggle(500);
    })
  })
}