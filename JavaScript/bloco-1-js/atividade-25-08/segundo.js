const leia = require('readline-sync');

let numero

numero = leia.questionInt('Informe um numero: ');



if(numero % 2 === 0 && numero >= 0){
    console.log('o número'+numero,'é par e positivo');
} else if(numero % 2 === 0 && numero < 0){
    console.log('o número'+numero,'é par e negativo');
} else if(numero % 2 === 1 && numero >= 0){
    console.log('o número'+numero,'é impar e positivo');
}else{
    console.log('o número'+numero,'é impar e negativo');
}