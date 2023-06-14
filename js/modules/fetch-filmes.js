import AnimaNumeros from './anima-numeros.js';

export default function fetchFilmes(url, target) {
  // Cria a div contendo informações com o total de filmes
  function createFilme(filme) {
    const div = document.createElement('div');
    div.classList.add('numero-filme');
    div.innerHTML = `<h3>${filme.tipo}</h3><span data-numero>${filme.Total}</span>`;
    return div;
  }

  // Preenche cada filme no dom
  const numerosGrid = document.querySelector(target);
  function preencherFilmes(filme) {
    const divFilme = createFilme(filme);
    numerosGrid.appendChild(divFilme);
  }

  // Anima os números de cada filme
  function animaFilmesNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // Puxa os animais através de um arquivo json
  // e cria cada animal utilizando createAnimal()
  async function criarFilmes() {
    try {
      // Fetch, espera resposta e transforma em json
      const filmesResponse = await fetch(url);
      const filmesJSON = await filmesResponse.json();
      // Após a transformação de json, ativa as funções
      // Para preencher e animar os números
      filmesJSON.forEach((filme) => {
        preencherFilmes(filme);
        animaFilmesNumeros();
      });
    } catch (erro) {
      console.error(erro);
    }
  }

  return criarFilmes();
}
