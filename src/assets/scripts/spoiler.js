{
  $(() => {
    $('.spoiler__button').on('click', event => {
      const currentSpoiler = $(event.target).closest('.spoiler');
      currentSpoiler.toggleClass('spoiler--active');
      currentSpoiler.find('.spoiler__dropdown').slideToggle(500);
    })
  })
}
{
  $(() => {
    $('.catalog-filter-spoilers__button').on('click', event => {
      const currentSpoiler = $(event.target).closest('.catalog-filter-spoilers__item');
      currentSpoiler.toggleClass('spoiler--active');
      currentSpoiler.find('.catalog-filter-spoilers__dropdown').slideToggle(500);
    })
  })
}
{
  $(() => {
    $('[data-accordion-button]').on('click', event => {
      const currentSpoiler = $(event.target).closest('[data-accordion]');
      currentSpoiler.toggleClass('active');
      currentSpoiler.find('[data-accordion-dropdown]').slideToggle(500);
    })
  })
}