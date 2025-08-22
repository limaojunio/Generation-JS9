const leia = require('readline-sync');

let n1, n2, n3, n4;

n1 = leia.questionFloat('Informe o numero 1: ');
n2 = leia.questionFloat('Informe o numero 2: ');
n3 = leia.questionFloat('Informe o numero 3: ');
n4 = leia.questionFloat('Informe o numero 4: ');

resultado = (n1*n2) - (n3*n4);

console.log('O resultado é: '+resultado);