function range(inicio, fim) {
    let sequencia = [];

    while (inicio <= fim) {
        sequencia.push(inicio);
        inicio++;
    }

    return sequencia;
}

function soma(lista) {
    let acumulador = 0;
    let indice = 0;

    while (indice < lista.length) {
        acumulador += lista[indice];
        indice++;
    }

    return acumulador;
}

console.log(soma(range(1, 10)));