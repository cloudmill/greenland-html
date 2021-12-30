export class CatalogFilters {
  constructor() {
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
          count.classList.remove('hidden')
        } else {
          count.classList.add('hidden')
        }
      }
    })
  }
}