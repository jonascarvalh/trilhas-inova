let livros = []
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
    const response = await fetch(endpointAPI);
    livros = await response.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livros);
}