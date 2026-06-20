const input = require("readline-sync")

let b = input.questionFloat("Base do triangulo = ")
let a = input.questionFloat("Agora a altura dele = ")

console.log(`A area do mesmo eh de: ${(b*a)/2}`)