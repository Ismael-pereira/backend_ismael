let numeroSecreto = 7;
let tentativa;

console.log("=== JOGO: ADIVINHE O NUMERO ===");

tentativa = parseInt(prompt("Tente adivinhar o numero de 1 a 10: "));

if (tentativa == numeroSecreto) {

    console.log("Parabens! Voce acertou o numero.");

} else {

    console.log("Voce errou.");
    console.log("O numero secreto era: " + numeroSecreto);

}
