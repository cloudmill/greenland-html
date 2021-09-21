import {getCoords} from "./utils";

export default class FullPage {

  constructor() {
    this.$items = document.querySelectorAll('.section');
    // this.$active = this.$items[0]
    this.isAnimating = false;

    this.calcCoords();

    let initialScroll = 0;
    let isScrolling;

    window.addEventListener('scroll', () => {

      // console.log(this.prev)

      // console.log(this.next)


      clearTimeout(isScrolling);

      isScrolling = setTimeout(() => {

        // scrolling is stoped

        this.isAnimating = false;

      }, 66);

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollBottom = scrollTop + window.innerHeight;

      this.setActive(scrollTop)

      const bodyTop = document.body.getBoundingClientRect().top;

      if (scrollTop !== 0) {

        if (bodyTop > initialScroll) {

          // up

          if (!this.isAnimating) {

            if (scrollTop <= this.active.top + this.active.$item.offsetHeight) {

              this.goToActive();
            }

          }

        } else {

          // down

          if (!this.isAnimating) {

            if (this.next && scrollBottom >= this.next.top) {
              this.goToNext();
            }
          }

        }
      }

      initialScroll = bodyTop;

    });
  }

  goToActive() {
    this.isAnimating = true;

    window.scrollTo({
      top: this.active.top,
      behavior: 'smooth'
    });
  }

  goToNext() {
    this.isAnimating = true;

    window.scrollTo({
      top: this.next.top,
      behavior: 'smooth'
    });
  }

  goToPrev() {
    this.isAnimating = true;

    window.scrollTo({
      top: this.prev.top,
      behavior: 'smooth'
    });
  }

  calcCoords() {
    this.sections = Array.prototype.map.call(this.$items, ($item) => {
      return {
        $item,
        top: getCoords($item).top
      }
    });

    this.setActive(window.pageYOffset || document.documentElement.scrollTop);
  }

  setActive(scrollTop) {
    this.sections.forEach((section, index, sections) => {

      const nextTop = sections[index + 1] ? sections[index + 1].top : document.body.scrollHeight;

      if (scrollTop >= section.top && scrollTop < nextTop) {
        this.prev = sections[index - 1] ? sections[index - 1] : null;
        this.active = section;
        this.next = sections[index + 1] ? sections[index + 1] : null;
      }

    });

  }

}