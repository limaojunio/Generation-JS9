const leia = require('readline-sync');

let idade, nome, primeiraVez, resposta

idade = leia.questionInt('Informe sua idade: ');
nome = leia.question('Informe o seu nome: ')
primeiraVez = leia.question('Primeira vez doando? (s/n/sim/nao)')

resposta = false

if (primeiraVez === 's' || primeiraVez === 'sim'){
    resposta = true;
}else if(primeiraVez === 'n' || primeiraVez === 'nao'){
    resposta = false;
}else {
    console.log('Resposta Inválida, digite s, n, sim ou nao.')
}

if(idade >= 18 && idade < 60){
    console.log(nome,'está apto para doar sangue!');
} else if(idade >= 60  && idade <= 69 && resposta === true){
    console.log(nome,'está não está apto para doar sangue!');
} else if(idade >= 60  && idade <= 69 && resposta === false){
    console.log(nome,'está apto para doar sangue!');
}else{
    console.log(nome,'não está apto para doar sangue!');
}