function executoraOperacao(a, b, operacao) {
    let resultado = operacao(a, b);
    console.log(resultado);
}

executoraOperacao(10, 3, (a, b) => a + b);

executoraOperacao(10, 3, (a, b) => a * b);

executoraOperacao(10, 3, (a, b) => a - b); 
