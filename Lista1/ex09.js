const input = require("readline-sync")

const min = (a, b) => {
    if (a < b) {
        return a;
    } else {
        return b;
    }
};

let num1 = input.questionInt("Digite o primeiro numero: ")
let num2 = input.questionInt("Agora, outro numero: ")

console.log(`O menor entre os dois eh = ${min(num1, num2)}`);