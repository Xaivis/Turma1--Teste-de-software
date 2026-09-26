const alunos = [//ADICIONE O TIPO DO ARRAY AQUI = [
    { nome: "Ana", nota: 8 },
    { nome: "Carlos", nota: 5 },
    { nome: "Beatriz", nota: 7 },
    { nome: "Lucas", nota: 4 },
    { nome: "Marina", nota: 9 },
    { nome: "Pedro", nota: 6 }
];

for (let i = 0; i < alunos.length/* COMPLETE */; i++) {

    if (alunos[i].nota >= 7/* COMPLETE A CONDIÇÃO */) {
        console.log(`O(a) aluno(a) ${alunos[i].nome} foi aprovado`/* COMPLETE */);
    } else {
        console.log(`O(a) aluno(a) ${alunos[i].nome} foi reprovado`/* COMPLETE */);
    }

};