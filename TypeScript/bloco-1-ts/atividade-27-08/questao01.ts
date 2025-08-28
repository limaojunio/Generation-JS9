import readlinesync = require("readline-sync");

let listaCores: Array<String> = new Array<String>()


for(let i = 0; i<=4; i++){

    let adicionarCores: string = readlinesync.question("Digite o nome de uma fruta: ");

    listaCores.push(adicionarCores)

    }

    console.log('\nTodas as cores que foram adicionadas: ' +listaCores )
    
    listaCores.sort()

    console.log('\nTodas as cores que foram adicionadas, só que em ordem alfabetica: ' +listaCores )
