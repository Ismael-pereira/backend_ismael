const produtos = [
  { id: 1, nome: "Teclado Mecânico", preco: 150.00 },
  { id: 2, nome: "Mouse Óptico", preco: 45.00 },
  { id: 3, nome: "Monitor 24'", preco: 899.90 },
  { id: 4, nome: "Mousepad Gamer", preco: 30.00 },
  { id: 5, nome: "Fone de Ouvido", preco: 120.50 }
];

const produtoId3 = produtos.find(produto => produto.id === 3);
console.log("a) Produto com ID 3:", produtoId3);

const produtosCaros = produtos.filter(produto => produto.preco > 100);
console.log("b) Produtos acima de R$100:", produtosCaros);

const nomesProdutos = produtos.map(produto => produto.nome);
console.log("c) Nomes dos produtos:", nomesProdutos);

console.log("d) Catálogo Formatado:");
produtos.forEach(produto => {
  console.log(`[ID ${produto.id}] - ${produto.nome} | Preço: R$ ${produto.preco.toFixed(2)}`);
});