const menuBtn = document.querySelector('.header__burger')
const header = document.querySelector('header.header')
const headerNav = document.querySelector('.header__nav')

menuBtn.addEventListener('click', function(e) {
  headerNav.classList.toggle('active');
  document.body.classList.toggle('stop-scrolling');
})
