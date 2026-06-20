const alunos = [
  { nome: "Carlos", nota: 7.5 },
  { nome: "Julia", nota: 5.0 },
  { nome: "Fernanda", nota: 8.8 },
  { nome: "Gabriel", nota: 6.2 },
  { nome: "Mariana", nota: 9.5 }
];

const alunosComSituacao = alunos.map(aluno => {
  return {
    ...aluno,
    situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
  };
});

console.log("Alunos com Situação:", alunosComSituacao);

const aprovados = alunosComSituacao.filter(aluno => aluno.situacao === "Aprovado");
const quantidadeAprovados = aprovados.length;

console.log(`Quantidade de aprovados: ${quantidadeAprovados}`);

const somaNotas = alunos.reduce((acumulador, aluno) => acumulador + aluno.nota, 0);
const mediaGeral = somaNotas / alunos.length;

console.log(`Média geral da turma: ${mediaGeral.toFixed(2)}`);