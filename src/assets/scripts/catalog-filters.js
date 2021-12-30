export class CatalogFilters {
  constructor() {
    this.root = document.querySelectorAll('[data-filters-item]')
    this.checkboxes = document.querySelectorAll('[data-filters-checkbox]')

    if (this.checkboxes) {
      this.init()
    }
  }

  init() {
    this.checkboxes.forEach(item => {
      
      item.onchange = function() {
        const count = item.closest('[data-filters-item]').querySelector('[data-filters-count]')

        if (this.checked) {
          count.textContent = +count.textContent + 1
        } else {
          count.textContent = +count.textContent - 1
        }

        if (+count.textContent) {
          console.log(123);
          count.classList.remove('hidden')
        } else {
          console.log(1111);
          count.classList.add('hidden')
        }
      }
    })
  }
}