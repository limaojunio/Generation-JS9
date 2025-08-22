const leia = require('readline-sync');

let salarioBruto, adicionalNoturno, horaExtra, desconto;

salarioBruto = leia.questionFloat('Informe o seu salario bruto: ');
adicionalNoturno = leia.questionFloat('Informe o seu adicional noturno: ');
horaExtra = leia.questionFloat('Informe as suas horas extras: ');
desconto = leia.questionFloat('Informe o desconto: ');

salarioLiquido = (salarioBruto + adicionalNoturno + horaExtra - desconto)

console.log('O seu salario liquido é: '+salarioLiquido);