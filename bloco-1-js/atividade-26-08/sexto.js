const leia = require('readline-sync');


let lista = [2,5,1,3,4,9,7,8,10,6]

let numero
let posicao = -1 

numero = leia.questionInt('Digite um numero: ')

for(let i = 0; i<=9; i++){

        if(numero == lista[i]){
            posicao = i
        }
}

if(posicao === -1){
    console.log('O numero '+numero+' não foi encontrado!')
}else{
    console.log('O número ' +numero+ ' está localizado na posição: ...'+posicao)
}








// let idade
// let menorVinteUm = 0
// let maiorCinquenta = 0

// idade = leia.questionInt('Digite sua idade: ')

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