{
  $(() => {
    const catalogParent = $('[data-catalog]')

    if (catalogParent.length) {
      let currentElem = null

      catalogParent.on('mouseover', event => {
        if (currentElem) return;

        let target = $(event.target).closest('.catalog-list__item');

        if (!target[0]) return;
        const img = target.closest('[data-catalog-card]').find('[data-card-image]')
        const imgSrc = target.data('catalog-image')
        const paginationItems = target.closest('[data-catalog-card]').find('.catalog-pagination__item')

        img.attr('src', imgSrc)
        paginationItems.removeClass('active')
        paginationItems.eq(target.index()).addClass('active')
        currentElem = target.closest('[data-catalog-card]')
      })

      catalogParent.on('mouseout', event => {
        if (!currentElem) return;

        let relatedTarget = $(event.relatedTarget);

        if (relatedTarget.closest('[data-catalog-card]')[0] !== currentElem[0]) {
          const img = currentElem.find('[data-card-image]')
          const imgSrc = currentElem.find('.catalog-list__item')
          const paginationItems = currentElem.find('.catalog-pagination__item')

          paginationItems.removeClass('active')
          paginationItems.eq(0).addClass('active')
          img.attr('src', imgSrc.eq(0).data('catalog-image'))

          currentElem = null;
        } else {
          currentElem = null;
        }
      })
    }
  })
}