const input = require("readline-sync")

let C = input.questionFloat("Digite uma temperatura em celsius: ")

console.log(`Essa temperatura em fahrenheit é = ${C * 1.8 + 32}`)