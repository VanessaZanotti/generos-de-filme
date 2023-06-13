export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.btnAbrir = document.querySelector(botaoAbrir);
    this.btnFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);
    this.activeClass = 'ativo';

    // bind this ao callback para fazer referencia ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // Abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle(this.activeClass);
  }

  // Adiciona o evento de toggle ao Modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // Fecha o modal ao clicar do lado de fora
  cliqueForaModal(event) {
    if (event.target === this.containerModal) this.toggleModal(event);
  }

  // Adiciona os eventos aos elementos do modal
  addModalEvent() {
    this.btnFechar.addEventListener('click', this.eventToggleModal);
    this.btnAbrir.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.btnAbrir && this.btnFechar && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
