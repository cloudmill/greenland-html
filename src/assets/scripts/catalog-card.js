

export class CatalogCard {
  constructor() {
    this.root = document.querySelectorAll('[data-catalog-images]')

    if (this.root) {
      
      this.init()
    }
  }

  init() {
    this.root.forEach(item => {
      const images = JSON.parse(item.getAttribute('data-catalog-images'))
      const overlay = item.querySelector('.catalog-card__list')
      const mainImage = item.querySelector('.catalog-card__main-img')
      
      if (images.length > 1) {

        for (let i = 0; i < images.length; i++) {
          const paginationItem = document.createElement('div')
          paginationItem.className = 'catalog-card__pagination-item'
  
          const overlayItem = document.createElement('li')
          overlayItem.className = 'catalog-card__item'
  
          overlayItem.onmouseenter = () => {
            this.imageChanger(mainImage, item, images, i)
          }
  
          item.querySelector('.catalog-card__pagination').append(paginationItem)
          overlay.append(overlayItem)
        }
  
        item.querySelector('.catalog-card__pagination-item').classList.add('active')
  
        overlay.onmouseleave = () => {
          this.imageChanger(mainImage, item, images)
        }
      }
    })
  }

  imageChanger(img, item, items, i = 0) {
    img.setAttribute('src', items[i])
    item.querySelector('.catalog-card__pagination-item.active').classList.remove('active')
    item.querySelectorAll('.catalog-card__pagination-item')[i].classList.add('active')
  }
}