export class Counter {
  constructor(selector) {
    this.root = selector
    this.plus = this.root.querySelector('.basket-btn-plus')
    this.minus = this.root.querySelector('.basket-btn-minus')
    this.number = this.root.querySelector('[data-count-number]')

    if (this.root) {
      this.init()
    }
  }

  init() {
    window.addEventListener('click', e => {
      const target = e.target.closest('[data-count-item]')

      if (target === this.minus) {
        if (+this.number.textContent > 1) {
          this.number.textContent = +this.number.textContent - 1
        }
      }

      if (target === this.plus) {
        this.number.textContent = +this.number.textContent + 1
      }
    })
  }
}