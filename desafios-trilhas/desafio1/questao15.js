// Função para somar os números
function somarNumeros(numero1, numero2) {
    return numero1 + numero2;
}

function main() { // Função principal
    // Definição das variáveis
    var numero1 = 11;
    var numero2 = 70;

    // Cálculo da soma
    var soma = somarNumeros(numero1, numero2);

    // Exibindo resultados
    console.log(`${numero1} + ${numero2} = ${soma}`);
}

// Chamada para função principal
main();