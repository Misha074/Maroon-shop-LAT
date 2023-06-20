// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';

/* eslint-disable */
// swiper-recently
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
