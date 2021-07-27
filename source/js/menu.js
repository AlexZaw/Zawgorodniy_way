const menuControl = document.querySelector('.main-nav__control');
const menu = document.querySelector('.main-nav');
document.body.classList.remove('no-js');
menuControl.classList.remove('main-nav__control--hidden');

const showHideMenu = () =>{
  menuControl.classList.toggle('main-nav__control--close');
  if(menuControl.classList.contains('main-nav__control--close')){
    menuControl.setAttribute('aria-label', 'Закрыть мобильное меню');
  }else{
    menuControl.setAttribute('aria-label', 'Открыть мобильное меню');
  }
  menu.classList.toggle('main-nav--closed');
};

const onMobileMenuClick = () => menuControl.addEventListener('click', showHideMenu);

export { onMobileMenuClick };
