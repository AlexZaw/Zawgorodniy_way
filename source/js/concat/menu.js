const menuControl = document.querySelector('.main-nav__control');
const menu = document.querySelector('.main-nav');
document.body.classList.remove('no-js');
menuControl.classList.remove('main-nav__control--hidden');

const showHideMenu = () =>{
  menuControl.classList.toggle('main-nav__control--close');
  menu.classList.toggle('main-nav--closed');
};

menuControl.addEventListener('click', showHideMenu);
