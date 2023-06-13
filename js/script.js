import ScrollSuave from './modules/ScrollSuave.js';
import Accordion from './modules/Accordion.js';
import TabNav from './modules/TabNav.js';
import initAnimacaoScroll from './modules/AnimacaoScroll.js';
import endOfTheSite from './modules/endOfTheSite.js';
import initModal from './modules/Modal.js';
import initToolTip from './modules/ToolTip.js';
import initDropDownMenu from './modules/dropDownMenu.js';
import outsideClick from './modules/outsideClick.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchFilmes from './modules/fetch-filmes.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section',
);
tabNav.init();

initAnimacaoScroll();
endOfTheSite();
initModal();
initToolTip();
initDropDownMenu();
outsideClick();
initMenuMobile();
initFuncionamento();
initFetchFilmes();
initFetchBitcoin();
