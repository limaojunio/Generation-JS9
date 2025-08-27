const leia = require('readline-sync');

let item, quantidade, total

item = leia.questionInt('informe o número do item de 1 a 6: ');
quantidade = leia.questionInt('informe a quantidade de itens: ');

switch(item){
    case 1:
        console.log(`Produto: Cachorro Quente, Valor total: ${(10.00 * quantidade).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break;
    case 2:
        console.log(`Produto: X-Salada, Valor total: ${(15.00 * quantidade).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break;
    case 3:
        console.log(`Produto: X-Bacon, Valor total: ${(18.00 * quantidade).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break;
    case 4:
        console.log(`Produto: Bauru, Valor total: ${(12.00 * quantidade).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break;
    case 5:
        console.log(`Produto: Refrigerante, Valor total: ${(8.00 * quantidade).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break;
    case 6:
        console.log(`Produto: Suco de laranja, Valor total: ${(13.00 * quantidade).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break;
    default: 
        console.log('Digite um numero valido.');
}

