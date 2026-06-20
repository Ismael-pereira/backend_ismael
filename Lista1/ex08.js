const input = require("readline-sync");

let t = input.questionInt("Digite o tamanho do tabuleiro = ");
let tabuleiro = "";

for (let l = 0; l < t; l++) {
    for (let col = 0; col < t; col++) {
        if ((l + col) % 2 === 0) {
            tabuleiro += " ";
        } else {
            tabuleiro += "#";
        }
    }
    tabuleiro += "\n";
}

console.log(tabuleiro);