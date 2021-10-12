$(() => {

  const maxHeight = [];

  $('.compare-table__list').each(function () {

    $(this).find('.compare-table__cell').each(function (index) {
      const cellRect = this.getBoundingClientRect();
      const cellHeight = cellRect.height;

      if (!maxHeight[index] || maxHeight[index] < cellHeight) {
        maxHeight[index] = cellHeight
      }

    })

  })

  console.log(maxHeight);

  $('.compare-table__list').each(function () {

    $(this).find('.compare-table__cell').each(function (index) {
      
      $(this).css('height', Math.ceil(maxHeight[index]) + 'px')

    })
    
  })

})