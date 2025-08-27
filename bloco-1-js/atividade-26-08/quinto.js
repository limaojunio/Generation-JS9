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
