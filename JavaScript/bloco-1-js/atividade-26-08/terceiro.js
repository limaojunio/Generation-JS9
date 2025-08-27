const leia = require('readline-sync');

let idade
let menorVinteUm = 0
let maiorCinquenta = 0

idade = leia.questionInt('Digite sua idade: ')

while( idade >= 0){

    if(idade < 21){
        menorVinteUm = menorVinteUm + 1
    } else if(idade>50){
        maiorCinquenta = maiorCinquenta + 1
    }

    idade = leia.questionInt('Digite sua idade: ')
}

console.log ('Total de pessoas menores de 21 anos: '+menorVinteUm)
console.log ('Total de pessoas maiores de 50 anos: '+maiorCinquenta)

