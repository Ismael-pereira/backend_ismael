const input = require("readline-sync");

let array = [];

function reverter(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

for (let i = 0; i < 10; i++) {
    let a = input.questionInt(`Digite o valor: `);
    array.push(a);
}

reverter(array);