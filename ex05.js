let numero;
let pares = 0;
let impares = 0;

for (let i = 1; i <= 5; i++) {

    numero = parseInt(prompt("Digite um numero: "));

    if (numero % 2 == 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log("Quantidade de numeros pares: " + pares);
console.log("Quantidade de numeros impares: " + impares);
