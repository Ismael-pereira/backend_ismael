const input = require("readline-sync")

let a = input.questionInt("Digite um numero: ")
let decisao = a % 2 === 0 ? "par" : "impar"

console.log(decisao)