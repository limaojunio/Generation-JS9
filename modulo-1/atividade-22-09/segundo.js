const leia = require('readline-sync');

let nota1, nota2, nota3, nota4;

nota1 = leia.questionFloat('Informe a sua primeira nota: ');
nota2 = leia.questionFloat('Informe a sua segunda nota: ');
nota3 = leia.questionFloat('Informe a sua terceira nota: ');
nota4 = leia.questionFloat('Informe a sua quarta nota: ');

media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log('A sua média é: '+media);