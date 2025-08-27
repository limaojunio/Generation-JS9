const leia = require('readline-sync');

let num1, num2

let i = 0

num1 = leia.questionInt('Digite o primeiro número do intervalo: ')
num2 = leia.questionInt('Digite o segundo número do intervalo: ')



if(num1<num2){

    for( i = num1; i<=num2; i++){

        if((i%3 === 0) && (i%5 ===0)){
            console.log(i,' é multiplo de 3 e 5')
        }

    }
 
}else{
    console.log('Intervalo inválido!')
}