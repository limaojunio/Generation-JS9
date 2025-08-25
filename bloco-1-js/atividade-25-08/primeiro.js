const leia = require('readline-sync');

let a, b, c;

a = leia.questionInt('Informe A: ');
b = leia.questionInt('Informe B: ');
c = leia.questionInt('Informe C: ');

soma = a+b;

if(soma>c){
    console.log('A Soma de A + B é Maior do que C');
} else if(soma<c){
    console.log('A Soma de A + B é Menor do que C');
} else{
    console.log('A Soma de A + B é Igual a C');
}