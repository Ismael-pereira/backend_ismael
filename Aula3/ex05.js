const readline = require('readline-sync');

let produtos = [];

console.log("--- Cadastro de Produtos ---");

for (let i = 0; i < 3; i++) {
  console.log("\nProduto " + (i + 1) + ":");

  let nomeInformado = readline.question("Digite o nome do produto: ");
  let precoInformado = readline.questionFloat("Digite o preco do produto: ");

  let novoProduto = {
    nome: nomeInformado,
    preco: precoInformado
  };
  
  produtos.push(novoProduto);
}

console.log("\n---------------------------------");

let produtosAcimaDe20 = produtos.filter(function(produto) {
  return produto.preco > 20.00;
});

console.log("--- Produtos com preco acima de R$ 20,00 ---");
if (produtosAcimaDe20.length === 0) {
  console.log("Nenhum produto encontrado nessa faixa de preço.");
} else {
  for (let i = 0; i < produtosAcimaDe20.length; i++) {
    console.log("Nome: " + produtosAcimaDe20[i].nome + " | Preço: R$ " + produtosAcimaDe20[i].preco.toFixed(2));
  }
}
