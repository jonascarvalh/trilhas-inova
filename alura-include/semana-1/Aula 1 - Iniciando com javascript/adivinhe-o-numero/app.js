alert('Boas-vindas ao jogo do número secreto!');

let numeroSecreto = 4;
let valorDigitado = prompt('Escolha um número entre 1 e 10');

if (numeroSecreto == valorDigitado) {
    console.log(`Você descobriu o número secreto: ${numeroSecreto}`)
}