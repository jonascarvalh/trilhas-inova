function alterarStatus(id) {
    let classeImagemRetida = 'dashboard__item__img--rented';
    let classeBotaoRetido = 'dashboard__item__button--return';

    let gameClicado = document.getElementById(`game-${id}`);
    let imagem      = gameClicado.querySelector('.dashboard__item__img');
    let botao       = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo    = gameClicado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains(classeImagemRetida)) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove(classeImagemRetida);
            botao.classList.remove(classeBotaoRetido);
            botao.innerText = 'Alugar';
        };
    } else {
        imagem.classList.add(classeImagemRetida);
        botao.classList.add(classeBotaoRetido);
        botao.innerText = 'Devolver';
    }

    jogosAlugados();
}

function jogosAlugados() {
    let gamesRented = document.querySelectorAll('.dashboard__item__img--rented');
    console.log(`Jogos alugados: ${gamesRented.length}`);
}

function verificarPalindromo(sentenca) {
    sentenca = sentenca.replaceAll(' ', '');
    
    let sentencaInvertida = '';
    for (let i = (sentenca.length-1); i >= 0; i--) {
        sentencaInvertida += sentenca[i];
    }

    sentencaInvertida = sentencaInvertida.replaceAll(' ', '');
    return sentenca == sentencaInvertida;
}

// Fiz assim
function compararNumeros(a, b) {
    return a - b;
}

function ordernarNumeros(num1, num2, num3) {
    let numeros = [num1, num2, num3];
    return numeros.sort(compararNumeros);
}

// O instrutor sugeriu assim
// Javascript é estranho
function ordernarNumeros(a, b, c) {
    const numerosOrdenados = [a, b, c];
    console.log(`Números ordenados: ${numerosOrdenados.sort((a,b) => a-b)}`);
}