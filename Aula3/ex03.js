let produtos = [
  { id: 1, nome: "Caderno", preco: 15.50 },
  { id: 2, nome: "Caneta", preco: 2.50 },
  { id: 3, nome: "Mochila", preco: 120.00 },
  { id: 4, nome: "Estojo", preco: 20.00 },
  { id: 5, nome: "Régua", preco: 5.00 }
];

let produtoEncontrado = produtos.find(function(produto) {
  return produto.id === 3;
});

console.log("--- Resultado do .find() ---");
console.log("Produto com ID 3: " + produtoEncontrado.nome); 

console.log("\n---------------------------------");

let produtosCaros = produtos.filter(function(produto) {
  return produto.preco > 50.00;
});

console.log("--- Resultado do .filter() (Acima de R$ 50) ---");
for (let i = 0; i < produtosCaros.length; i++) {
  console.log("Nome: " + produtosCaros[i].nome + " | Preço: R$ " + produtosCaros[i].preco);
}
