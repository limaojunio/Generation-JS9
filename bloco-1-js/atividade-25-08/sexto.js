const leia = require('readline-sync');

let nome, cargo, salario

nome = leia.question('informe o seu nome: ');
cargo = leia.questionInt('informe o seu cargo de 1 a 6: ');
salario = leia.questionFloat('informe o valor do seu salario: ')

switch(cargo){
    case 1:
        console.log(`Nome do Colaborador: ` +nome, `, Cargo: Gerente, Salário reajustado: ${(salario + (0.1*salario)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break;
    case 2:
        console.log(`Nome do Colaborador: ` +nome, `, Cargo: Vendedor, Salário reajustado: ${(salario + (0.07*salario)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break;
    case 3:
        console.log(`Nome do Colaborador: ` +nome, `, Cargo: Supervisor, Salário reajustado: ${(salario + (0.09*salario)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break;
    case 4:
        console.log(`Nome do Colaborador: ` +nome, `, Cargo: Motorista, Salário reajustado: ${(salario + (0.06*salario)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break;
    case 5:
        console.log(`Nome do Colaborador: ` +nome, `, Cargo: Estoquista, Salário reajustado: ${(salario + (0.05*salario)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break;
    case 6:
        console.log(`Nome do Colaborador: ` +nome, `, Cargo: Técnico de TI, Salário reajustado: ${(salario + (0.08*salario)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break;
    default: 
        console.log('Digite um numero valido.');
}

