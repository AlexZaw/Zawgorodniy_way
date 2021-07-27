const menuControl = document.querySelector('.menu-control');
const menu = document.querySelector('.main-nav');
document.body.classList.remove('no-js');
menuControl.classList.remove('menu-control--hidden');

const showHideMenu = () =>{
  menuControl.classList.toggle('menu-control--close');
  if(menuControl.classList.contains('menu-control--close')){
    menuControl.setAttribute('aria-label', 'Закрыть мобильное меню');
  }else{
    menuControl.setAttribute('aria-label', 'Открыть мобильное меню');
  }
  menu.classList.toggle('main-nav--closed');
};

const onMobileMenuClick = () => menuControl.addEventListener('click', showHideMenu);

export { onMobileMenuClick };
