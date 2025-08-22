const leia = require('readline-sync');

let salario, abono

salario = leia.questionFloat('Informe o seu salário: ')
abono = leia.questionFloat('Informe o valor do abono: ')


novoSalario = (salario+abono)

console.log('O seu nome salário é: '+novoSalario)