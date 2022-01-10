import '@fancyapps/fancybox';
import { mediaQuery } from './mediaQueries';

export class CatalogFilters {
  constructor(selector, isModal = false) {
    this.root = selector
    
    if (this.root) {
      this.checkboxes = this.root.querySelectorAll('[data-filters-checkbox]')

      this.init(isModal)
    }
  }

  init(isModal) {
    this.generalCount = 0
    const button = this.root.querySelector('[data-accept-button]')

    this.checkboxes.forEach(item => {
      
      item.onchange = () => {
        const count = item.closest('[data-filters-item]').querySelector('[data-filters-count]')

        if (item.checked) {
          count.textContent = +count.textContent + 1
          this.generalCount++
        } else {
          count.textContent = +count.textContent - 1
          this.generalCount--
        }

        if (+count.textContent) {
          count.classList.remove('hidden')
        } else {
          count.classList.add('hidden')
        }

        if (isModal && !mediaQuery.matches) {
          if (this.generalCount) {
            button.classList.remove('hidden')
          } else {
            button.classList.add('hidden')
          }
        }
      }
    })

    if (isModal) {
      this.clear()
      this.accept()
    }
  }

  clear() {
    const button = this.root.querySelector('[data-clear-button]')
    const acceptButton = this.root.querySelector('[data-accept-button]')

    button.onclick = () => {

      this.checkboxes.forEach(item => {
        const count = item.closest('[data-filters-item]').querySelector('[data-filters-count]')

        item.checked = false
        count.textContent = 0
        this.generalCount = 0
        count.classList.add('hidden')
        // acceptButton.classList.add('hidden')
      })
    }
  }

  accept() {
    if (!mediaQuery.matches) {
      const button = this.root.querySelector('[data-accept-button]')
      const count = document.querySelector('[data-general-count]')
  
      button.onclick = () => {
        const modal = button.closest('[data-fancy-modal]')
  
        $.fancybox.close(modal)

        if (this.generalCount) {
          count.classList.remove('hidden')
          count.textContent = this.generalCount
        } else {
          count.classList.add('hidden')
          button.classList.add('hidden')
        }
      }
    }
  }
}