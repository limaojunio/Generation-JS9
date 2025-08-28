
import readlinesync = require("readline-sync");

let setNumeros: Set<number> = new Set<number> ([2,5,1,3,4,9,7,8,10,6]);

let numeroEncontrar: number = readlinesync.questionInt("Digite um numero do tipo Inteiro: ");



if(setNumeros.has(numeroEncontrar)){
    console.log('O numero '+numeroEncontrar+' foi encontrado!')
}else{
    console.log('O numero '+numeroEncontrar+' não foi encontrado!')
}
