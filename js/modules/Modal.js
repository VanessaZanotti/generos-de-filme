export default function initModal() {
  const btnAbrir = document.querySelector('[data-modal="abrir"]');
  const btnFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  const activeClass = 'ativo';

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle(activeClass);
  }

  function cliqueForaModal(event) {
    if (event.target === this) toggleModal(event);
  }

  if (btnAbrir && btnFechar && containerModal) {
    btnFechar.addEventListener('click', toggleModal);
    btnAbrir.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', cliqueForaModal);
  }
}
