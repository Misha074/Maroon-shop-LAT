let headerNav = document.querySelector('.header__nav');
let navToggle = document.querySelector('.nav__toggle');
let NavWpapper = document.querySelector('.nav__wrapper');

navToggle.addEventListener('click', function () {
  if (headerNav.classList.contains('header__nav--closed')) {
    headerNav.classList.remove('header__nav--closed');
    headerNav.classList.add('header__nav--opened');
    NavWpapper.classList.remove('nav__wrapper--closed');
  } else {
    headerNav.classList.add('header__nav--closed');
    headerNav.classList.remove('header__nav--opened');
    NavWpapper.classList.add('nav__wrapper--closed');
  }
});
