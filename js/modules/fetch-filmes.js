import initAnimaNumeros from './anima-numeros.js';

export default function initFetchFilmes() {}

function createFilme(filme) {
  const div = document.createElement('div');
  div.classList.add('numero-filme');
  div.innerHTML = `<h3>${filme.tipo}</h3><span data-numero>${filme.Total}</span>`;

  return div;
}

async function fetchFilmes(url) {
  try {
    const filmesResponse = await fetch(url);
    const filmesJSON = await filmesResponse.json();
    const numerosGrid = document.querySelector('.numeros-grid');

    filmesJSON.forEach((filme) => {
      const divFilme = createFilme(filme);
      numerosGrid.appendChild(divFilme);
    });
    initAnimaNumeros();
  } catch (erro) {
    console.error(erro);
  }
}

fetchFilmes('./filmesapi.json');
