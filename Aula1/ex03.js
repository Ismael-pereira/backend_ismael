let n1, n2, n3;
let p1, p2, p3;
let media;

n1 = parseFloat(prompt("Digite a nota 1: "));
p1 = parseFloat(prompt("Digite o peso da nota 1: "));

n2 = parseFloat(prompt("Digite a nota 2: "));
p2 = parseFloat(prompt("Digite o peso da nota 2: "));

n3 = parseFloat(prompt("Digite a nota 3: "));
p3 = parseFloat(prompt("Digite o peso da nota 3: "));

media = (n1 * p1 + n2 * p2 + n3 * p3) / (p1 + p2 + p3);

console.log("A media ponderada final e: " + media.toFixed(2));
