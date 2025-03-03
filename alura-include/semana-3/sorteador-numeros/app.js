function obterNumeroAleatorio(min, max, numerosSorteados) {
    let numeroGerado = parseInt(Math.random() * (max - min) + min);

    if (numerosSorteados.includes(numeroGerado)) {
        return gerarNumeroAleatorio(min,max,numerosSorteados);
    }

    // Poderia ser assim
    // while (numerosSorteados.includes(numeroGerado)) {
    //     numeroGerado = gerarNumeroAleatorio(min,max,numerosSorteados);
    // }

    return numeroGerado;
}

function alterarStatusBotao (botao, classeHabilitado, classeDesabilitado) {
    let botaoReiniciar = document.getElementById(botao);
    if (botaoReiniciar.classList.contains(classeDesabilitado)) {
        botaoReiniciar.classList.remove(classeDesabilitado);
        botaoReiniciar.classList.add(classeHabilitado);
    } else {
        botaoReiniciar.classList.remove(classeHabilitado);
        botaoReiniciar.classList.add(classeDesabilitado);
    }
}

function sortear() {
    let quantidadeNumeros = parseInt(document.getElementById('quantidade').value);
    let numeroInicial     = parseInt(document.getElementById('de').value);
    let numeroFinal       = parseInt(document.getElementById('ate').value);
    
    let numerosSorteados = [];

    for (let i = 0; i < quantidadeNumeros; i++) {
        let numeroAleatorio = obterNumeroAleatorio(numeroInicial, numeroFinal, numerosSorteados);
        numerosSorteados.push(numeroAleatorio);
    }

    let resultado = document.getElementsByTagName('label')[3];
    resultado.innerHTML = `Números Sorteados: ${numerosSorteados}`;

    // Poderia ser assim
    // let resultado = document.getElementById('resultado');
    // resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`

    alterarStatusBotao('btn-reiniciar', 'container__botao', 'container__botao-desabilitado');
}

function reiniciar() {
    let campos = document.getElementsByTagName('input');

    for (let i = 0; i < campos.length; i++) {
        campos[i].value = '';
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: Nenhum até agora.</label>`

    alterarStatusBotao('btn-reiniciar', 'container__botao', 'container__botao-desabilitado');
}