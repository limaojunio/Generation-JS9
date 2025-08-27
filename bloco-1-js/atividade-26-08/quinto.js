const leia = require('readline-sync');

let num1 
let soma = 0

do{
    num1 = leia.questionInt('Digite um numero: ')
    if (num1 > 0){
        soma = soma + num1
    }
}while(num1 !== 0)

    console.log('A soma dos números positivos é: '+soma)



























    
// while( idade >= 0){

//     if(idade < 21){
//         menorVinteUm = menorVinteUm + 1
//     } else if(idade>50){
//         maiorCinquenta = maiorCinquenta + 1
//     }

//     idade = leia.questionInt('Digite sua idade: ')
// }

// console.log ('Total de pessoas menores de 21 anos: '+menorVinteUm)
// console.log ('Total de pessoas maiores de 50 anos: '+maiorCinquenta)