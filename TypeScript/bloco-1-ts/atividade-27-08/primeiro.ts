import readlinesync = require("readline-sync");

let lista: number[] = [2,5,1,3,4,9,7,8,10,6]

let numero: number;
let posicao: number = -1

numero = readlinesync.questionInt("Digite um valor do tipo Inteiro: ");

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