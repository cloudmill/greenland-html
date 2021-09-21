export default function initFadeSliders() {

  document.addEventListener('pointermove', (e) => {

    if (e.target.dataset.fadeItemSliderBullet) {

      const $parent = e.target.closest('[data-fade-item-slider]');
      const $slides = $parent.querySelectorAll('[data-fade-item-slider-item]');
      const $bullets = $parent.querySelectorAll('[data-fade-item-slider-bullet]');

      const activeIndex = Array.prototype.indexOf.call($bullets, e.target);

      $slides.forEach(($slide, index) => {
        if (activeIndex === index) {
          $slide.classList.add('is-active');
        } else {
          $slide.classList.remove('is-active');
        }
      });

      $bullets.forEach(($bullet, index) => {
        if (activeIndex === index) {
          $bullet.classList.add('is-active');
        } else {
          $bullet.classList.remove('is-active');
        }
      });

    }

  });

  document.addEventListener('click', (e) => {

    if (e.target.dataset.fadeItemSliderBullet) {

      const $parent = e.target.closest('[data-fade-item-slider]');
      const $slides = $parent.querySelectorAll('[data-fade-item-slider-item]');
      const $bullets = $parent.querySelectorAll('[data-fade-item-slider-bullet]');

      const activeIndex = Array.prototype.indexOf.call($bullets, e.target);

      $slides.forEach(($slide, index) => {
        if (activeIndex === index) {
          $slide.classList.add('is-active');
        } else {
          $slide.classList.remove('is-active');
        }
      });

      $bullets.forEach(($bullet, index) => {
        if (activeIndex === index) {
          $bullet.classList.add('is-active');
        } else {
          $bullet.classList.remove('is-active');
        }
      });

    }

  });

}