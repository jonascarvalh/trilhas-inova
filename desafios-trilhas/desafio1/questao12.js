const NUMERO = 20;
console.log(`Números pares de 0 a ${NUMERO}:`);

var i = 0;
do {
    if (i % 2 == 0) {
        console.log(i)
    }
    i++;
} while (i <= NUMERO);