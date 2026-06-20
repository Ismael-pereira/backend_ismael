let produtos = [
  { id: 1, nome: "Caderno", preco: 15.50 },
  { id: 2, nome: "Caneta", preco: 2.50 },
  { id: 3, nome: "Mochila", preco: 120.00 },
  { id: 4, nome: "Estojo", preco: 20.00 }
];

console.log("--- Lista de Produtos Inicial ---");
for (let i = 0; i < produtos.length; i++) {
  console.log("ID: " + produtos[i].id + " | Nome: " + produtos[i].nome + " | Preço: R$ " + produtos[i].preco);
}

console.log("\n---------------------------------");

produtos.push({ id: 5, nome: "Régua", preco: 5.00 });

console.log("Novo tamanho do array após o .push(): " + produtos.length);
