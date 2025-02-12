var numeroSecreto = 5;
var numero = 0;

while (numero != numeroSecreto) {
    var numero = prompt("Digite um número: ");

    if (numero == numeroSecreto) {
        alert("Você acertou o número secreto!");
    } else {
        alert("Você errou!");
    }
}