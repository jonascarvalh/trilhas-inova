const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn =>
    btn.addEventListener('click', filtrarLivros)
);

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;

    let livrosFilrados = filtroCategoriaOuDisponibilidade(categoria);
    exibirOsLivrosNaTela(livrosFilrados);
}

function filtroCategoriaOuDisponibilidade(categoria) {
    if (categoria == 'disponivel') {
        return livros.filter(livro => livro.quantidade > 0)
    } else {
        return livros.filter(livro => livro.categoria === categoria)
    }
}