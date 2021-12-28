

export class CatalogCard {
  constructor() {
    this.root = document.querySelectorAll('[data-catalog-images]')

    if (this.root) {

      // this.imageChanger = this.imageChanger.bind(this)

      this.init()
    }
  }

  // imageChanger(img, item, items, i) {
  //   img.setAttribute('src', items[i])
  //   item.querySelector('.catalog-card__pagination-item.active').classList.remove('active')
  //   item.querySelectorAll('.catalog-card__pagination-item')[i].classList.add('active')
  // }

  init() {
    this.root.forEach(item => {
      const items = JSON.parse(item.getAttribute('data-catalog-images'))
      const list = item.querySelector('.catalog-card__list')
      const image = item.querySelector('.catalog-card__main-img')
      
      if (items.length > 1) {

        for (let i = 0; i < items.length; i++) {
          // const paginationClone = item.querySelector('.catalog-card__pagination-item').cloneNode()
          // const layerClone = item.querySelector('.catalog-card__item').cloneNode()
          const paginationClone = document.createElement('div')
          paginationClone.className = 'catalog-card__pagination-item'
  
          const layerClone = document.createElement('li')
          layerClone.className = 'catalog-card__item'
  
          layerClone.onmouseenter = function() {
  
            image.setAttribute('src', items[i])
            item.querySelector('.catalog-card__pagination-item.active').classList.remove('active')
            item.querySelectorAll('.catalog-card__pagination-item')[i].classList.add('active')
            // this.imageChanger(image, item, items, i)
          }
  
          item.querySelector('.catalog-card__pagination').append(paginationClone)
          item.querySelector('.catalog-card__list').append(layerClone)
        }
  
        item.querySelector('.catalog-card__pagination-item').classList.add('active')
  
        list.onmouseleave = function() {
          image.setAttribute('src', items[0])
          item.querySelector('.catalog-card__pagination-item.active').classList.remove('active')
          item.querySelectorAll('.catalog-card__pagination-item')[0].classList.add('active')
          // this.imageChanger(image, item, items, 0)
        }
      }
    })
  }
}