function areaCirculo(raio) {
    return Math.PI * Math.pow(raio, 2);
}

var raio = 10;
var areaCalculada = areaCirculo(raio);

console.log(`A área do circulo cujo o raio é ${raio} é igual a ${areaCalculada}`);