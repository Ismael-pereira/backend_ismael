const input = require("readline-sync");

function calcular(a, b, operacao) {
    return operacao(a, b);
}

const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

let num1 = input.questionInt("Digite o primeiro numero: ");
let num2 = input.questionInt("Digite o segundo numero: ");

console.log("Soma:", calcular(num1, num2, somar));
console.log("Subtracao:", calcular(num1, num2, subtrair));
console.log("Multiplicacao:", calcular(num1, num2, multiplicar));