const leia = require('readline-sync');

let i = 0
let par = 0
let impar = 0

for( i = 1; i<=10; i++){

    let numeroDigitado = leia.questionInt('Digite o ' + i + 'º numero: ')

    if(numeroDigitado % 2 === 0){
        par = par+1
    }else{
        impar = impar+1
    }
}

    console.log('Total de números pares: ', par)
    console.log('Total de números impares: ', impar)