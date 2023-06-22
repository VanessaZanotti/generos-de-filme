import outsideClick from './outsideClick.js';

export default class MenuMobile {
  constructor(menuMobile, menuList, events) {
    this.menuMobile = document.querySelector(menuMobile);
    this.menuList = document.querySelector(menuList);

    // Define touchstar e click como argumento padrão
    // de events caso o usuário não defina
    if (events === undefined) this.events = ['click', 'touchstart'];
    else this.events = events;

    this.classe = 'active';

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.classe);
    this.menuMobile.classList.add(this.classe);

    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.classe);
      this.menuMobile.classList.remove(this.classe);
    });
  }

  addEventsMenuMobile() {
    this.events.forEach((evento) =>
      this.menuMobile.addEventListener(evento, this.openMenu),
    );
  }

  init() {
    if (this.menuMobile && this.menuList) {
      this.addEventsMenuMobile();
    }
    return this;
  }
}
