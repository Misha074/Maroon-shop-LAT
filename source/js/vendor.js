// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';

/* eslint-disable */

// swiper-recently
function initSwiperRecently() {
  if (document.querySelector('.swiper-recently') !== null) {
    const swiperPrev1 = document.querySelector('[data-swiper-recently-prev]');
    const swiperNext1 = document.querySelector('[data-swiper-recently-next]');

    const swiper1 = new Swiper('.swiper-recently', {
      direction: 'horizontal',
      slidesPerView: 1,
      loop: true,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });

    swiperPrev1.addEventListener('click', () => {
      swiper1.slidePrev();
    });

    swiperNext1.addEventListener('click', () => {
      swiper1.slideNext();
    });

    const slidesDuplicate = document.querySelectorAll('.swiper-slide-duplicate');
    slidesDuplicate.forEach((el) => {
      el.removeAttribute('tabindex');
    });
  }
}
initSwiperRecently();

// swiper-cognate
function initSwiperCognate() {
  if (document.querySelector('.swiper-cognate') !== null) {
    const swiperPrev2 = document.querySelector('[data-swiper-cognate-prev]');
    const swiperNext2 = document.querySelector('[data-swiper-cognate-next]');

    const swiper2 = new Swiper('.swiper-cognate', {
      direction: 'horizontal',
      slidesPerView: 1,
      loop: true,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });

    swiperPrev2.addEventListener('click', () => {
      swiper2.slidePrev();
    });

    swiperNext2.addEventListener('click', () => {
      swiper2.slideNext();
    });
  }
}
initSwiperCognate();

// swiper-bestsellers
function initSwiperBestsellers() {
  if (document.querySelector('.swiper-bestsellers') !== null) {
    const swiperPrev3 = document.querySelector('[data-swiper-bestsellers-prev]');
    const swiperNext3 = document.querySelector('[data-swiper-bestsellers-next]');

    const swiper3 = new Swiper('.swiper-bestsellers', {
      direction: 'horizontal',
      slidesPerView: 1,
      loop: true,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });

    swiperPrev3.addEventListener('click', () => {
      swiper3.slidePrev();
    });

    swiperNext3.addEventListener('click', () => {
      swiper3.slideNext();
    });
  }
}
initSwiperBestsellers();

// swiper-catalog
function initSwiperCatalog() {
  if (document.querySelector('.swiper-catalog') !== null) {
    const swiperPrev4 = document.querySelector('[data-swiper-catalog-prev]');
    const swiperNext4 = document.querySelector('[data-swiper-catalog-next]');

    const swiper4 = new Swiper('.swiper-catalog', {
      direction: 'horizontal',
      slidesPerView: 1,
      loop: true,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
      },
    });

    swiperPrev4.addEventListener('click', () => {
      swiper4.slidePrev();
    });

    swiperNext4.addEventListener('click', () => {
      swiper4.slideNext();
    });
  }
}
initSwiperCatalog();

// const slidesDuplicate = document.querySelectorAll('.swiper-slide-duplicate');
// slidesDuplicate.forEach((el) => {
//   el.removeAttribute('tabindex');
// });

// const swiperPrev2 = document.querySelector('[data-swiper-cognate-prev]');
// const swiperNext2 = document.querySelector('[data-swiper-cognate-next]');
// const slides2 = document.querySelectorAll('[data-slide-swiper-cognate]');

// const swiper2 = new Swiper('.swiper-cognate', {
//   direction: 'horizontal',
//   autoHeight: true,
//   slidesPerView: 1,
// });

// const disable = (el) => {
//   el.classList.add('disabled');
//   el.setAttribute('disabled', '');
//   el.setAttribute('tabindex', '-1');
// };

// const enable = (el) => {
//   el.classList.remove('disabled');
//   el.removeAttribute('disabled');
//   el.removeAttribute('tabindex');
// };

// const buttonChanger = () => {
//   if (swiper2.realIndex === 0) {
//     disable(swiperPrev2);
//   } else {
//     enable(swiperPrev2);
//   }

//   if (swiper2.realIndex === (slides2.length - 1)) {
//     disable(swiperNext2);
//   } else {
//     enable(swiperNext2);
//   }
// };

// buttonChanger();

// swiper2.on('transitionEnd', () => {
//   buttonChanger();
// });

// swiperPrev2.addEventListener('click', () => {
//   swiper2.slidePrev();
// });

// swiperNext2.addEventListener('click', () => {
//   swiper2.slideNext();
// });
