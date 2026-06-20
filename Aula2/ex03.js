const somar = (a, b) => a + b;

const subtrair = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => {
    if (b == 0) {
        return "Erro: divisao por zero";
    }
    return a / b;
};

let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

console.log("Soma: " + somar(num1, num2));
console.log("Subtração: " + subtrair(num1, num2));
console.log("Multiplicação: " + multiplicar(num1, num2));
console.log("Divisão: " + dividir(num1, num2));
