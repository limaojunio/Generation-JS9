import readlinesync = require("readline-sync");

let setNumeros: Set<number> = new Set<number> ();


for(let i =0; i<=9; i++){
    let addNumero: number = readlinesync.questionInt("Digite um numero do tipo Inteiro: ");
    setNumeros.add(addNumero)
}

    console.log(setNumeros)



// for(let i = 0; i<=4; i++){

//     let adicionarCores: string = readlinesync.question("Digite o nome de uma cor: ");

//     listaCores.push(adicionarCores)

//     }

//     console.log('\nTodas as cores que foram adicionadas: ' +listaCores )
    
//     listaCores.sort()

//     console.log('\nTodas as cores que foram adicionadas, só que em ordem alfabetica: ' +listaCores )
