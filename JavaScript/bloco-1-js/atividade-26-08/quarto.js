const leia = require("readline-sync");

let totalDevBack = 0;
let totalMulheresFront = 0;
let totalHomensMaior40Mobile = 0;
let totalNbMenor30FullStack = 0;
let totalPessoas = 0;
let acumuladorIdade = 0;

let resposta = leia.keyInYN("Oi, você deseja participar da nossa pesquisa?");

while (resposta === true) {
  let idade = leia.questionInt("Digite sua idade: ");
  console.log('---Identidade de Gênero---\n 1 - Mulher Cis\n 2 - Homem Cis\n 3 - Não Binário\n 4 - Mulher Trans\n 5 - Homem Trans\n 6 - Outros')
  let idGenero = leia.questionInt("Qual a sua identidade de genero: ");
  console.log('---Stacks---\n 1 - Backend\n 2 - Fronted\n 3 - Mobile\n 4 - Fullstack')
  let stackDev = leia.questionInt("Digite so seu cargo: ");

  totalPessoas = totalPessoas + 1;
  acumuladorIdade = acumuladorIdade + idade;

  if (stackDev === 1) {
    totalDevBack = totalDevBack + 1;
  }
  if ((idGenero === 1 || idGenero === 4) && stackDev === 2) {
    totalMulheresFront = totalMulheresFront + 1;
  }
  if ((idGenero === 2 || idGenero === 5) && stackDev === 3 && idade > 40) {
    totalHomensMaior40Mobile = totalHomensMaior40Mobile + 1;
  }
  if (idGenero === 3 && stackDev === 4 && idade < 30) {
    totalNbMenor30FullStack = totalNbMenor30FullStack + 1;
  }

  resposta = leia.keyInYN(
    "Oi, você deseja continuar a leitura dos dados de um novo colaborador?"
  );
}

    console.log('O número de pessoas desenvolvedoras Backend é: '+totalDevBack)
    console.log('O número de Mulheres Cis e Trans desenvolvedoras Frontend é: '+totalMulheresFront)
    console.log('O número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos:'+totalHomensMaior40Mobile)
    console.log('O número de Não Binários desenvolvedores FullStack menores de 30 anos '+totalNbMenor30FullStack)
    console.log('O número total de pessoas que responderam à pesquisa: '+totalPessoas)
    console.log('A média de idade das pessoas que responderam à pesquisa é :'+acumuladorIdade/totalPessoas)
