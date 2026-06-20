let alunos = [
  { id: 1, nome: "Ana", nota: 8.5 },
  { id: 2, nome: "Bruno", nota: 6.0 },
  { id: 3, nome: "Carlos", nota: 7.0 },
  { id: 4, nome: "Diana", nota: 5.5 },
  { id: 5, nome: "Gabriel", nota: 9.0 }
];

let listaSituacao = alunos.map(function(aluno) {
  let status;
  if (aluno.nota >= 7) {
    status = "Aprovado";
  } else {
    status = "Reprovado";
  }
  
  return {
    nome: aluno.nome,
    nota: aluno.nota,
    situacao: status
  };
});

console.log("--- Resultado do .map() ---");
for (let i = 0; i < listaSituacao.length; i++) {
  console.log("Nome: " + listaSituacao[i].nome + " | Nota: " + listaSituacao[i].nota + " | Status: " + listaSituacao[i].situacao);
}
