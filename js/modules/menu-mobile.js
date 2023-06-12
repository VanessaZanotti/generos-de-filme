import outsideClick from './outsideClick.js';

export default function initMenuMobile() {}

const menuMobile = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');
const events = ['click', 'touchstart'];
const classe = 'active';

function openMenu() {
  menuList.classList.add(classe);
  menuMobile.classList.add(classe);

  outsideClick(menuList, events, () => {
    menuList.classList.remove(classe);
    menuMobile.classList.remove(classe);
  });
}

if (menuMobile) {
  events.forEach((evento) => menuMobile.addEventListener(evento, openMenu));
}
