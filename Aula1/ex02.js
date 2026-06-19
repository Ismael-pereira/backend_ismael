let operacao;
let n1, n2, resultado;

console.log("--- CALCULADORA ---");

operacao = prompt("Escolha a operacao (+, -, *, /): ");

n1 = parseFloat(prompt("Digite o primeiro numero: "));
n2 = parseFloat(prompt("Digite o segundo numero: "));

switch (operacao) {

    case "+":
        resultado = n1 + n2;
        console.log(n1.toFixed(2) + " + " + n2.toFixed(2) + " = " + resultado.toFixed(2));
        break;

    case "-":
        resultado = n1 - n2;
        console.log(n1.toFixed(2) + " - " + n2.toFixed(2) + " = " + resultado.toFixed(2));
        break;

    case "*":
        resultado = n1 * n2;
        console.log(n1.toFixed(2) + " * " + n2.toFixed(2) + " = " + resultado.toFixed(2));
        break;

    case "/":
        if (n2 != 0) {
            resultado = n1 / n2;
            console.log(n1.toFixed(2) + " / " + n2.toFixed(2) + " = " + resultado.toFixed(2));
        } else {
            console.log("Erro: Divisao por zero nao e permitida.");
        }
        break;

    default:
        console.log("Operacao invalida");
}
