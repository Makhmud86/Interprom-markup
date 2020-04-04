const burger = document.querySelector('.header-mobmenu');
const navBar = document.querySelector('.navbar');

burger.addEventListener('click', () => {
  navBar.classList.remove('close');
  navBar.classList.add('open');
});