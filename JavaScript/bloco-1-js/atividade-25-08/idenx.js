const leia = require('readline-sync');

let nota1, nota2, nota3, nota4;

nota1 = leia.questionFloat('Informe a sua primeira nota: ');
nota2 = leia.questionFloat('Informe a sua segunda nota: ');
nota3 = leia.questionFloat('Informe a sua terceira nota: ');
nota4 = leia.questionFloat('Informe a sua quarta nota: ');

media = (nota1 + nota2 + nota3 + nota4) / 4;


if(media >= 7){
    console.log('Você foi aprovado com a média: '+media );
} else if (media < 7 && media >= 5){
    console.log('Você está em recuperação com a média: '+media)
} else {
    console.log('Aluno reprovado com a média: '+media)
     pix = leia.questionFloat('Informe o valor do pix: ');
     if (pix >= 50){
        console.log('Opa!! Aluno aprovado com a média: ')
     } else {
        console.log('')
     }
}

console.log('Obrigado por utilizar o nosso sistema <3')


