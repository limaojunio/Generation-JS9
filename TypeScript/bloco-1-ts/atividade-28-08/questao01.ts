import { Queue } from "./../../../queue";
import leia = require("readline-sync");

const fila = new Queue<string>();
let continuar: boolean = true;
let opcao: number;

do {
  console.log("*************************************************");

  console.log("");

  console.log("      1 - Adicionar Cliente na Fila");

  console.log("      2 - Listar todos os Clientes");

  console.log("      3 - Retirar Cliente da Fila");

  console.log("      0 - Sair");

  console.log("");

  console.log("*************************************************");

  console.log("");

  console.log("Entre com a opção desejada: ");

  opcao = leia.questionInt();

  switch (opcao) {
    case 1:
      let nome: string = leia.question("Digite o nome da pessoa:");
      fila.enqueue(nome);
      break;
    case 2:
      console.log("--------------------------");
      console.log("Pessoas na fila atualmente:");
      fila.printQueue();
      break;
    case 3:
      if (fila.isEmpty()) {
        console.log("--------------------------");
        console.log("A Fila está vazia!");
      } else {
        let clienteAtual = fila.peek();
        console.log("--------------------------");
        console.log("Chamando: " + clienteAtual);
        fila.dequeue();

        if (fila.isEmpty()) {
          console.log("--------------------------");
          console.log("A fila está vazia!");
        } else {
          let proximoCliente = fila.peek();
          console.log("--------------------------");
          console.log("Próxima pessoa a ser chamada: " + proximoCliente);
        }
      }
      break;
    case 0:
      console.log("--------------------------");
      console.log("Você está saindo do menu, tenha um ótimo dia!");
      continuar = false;
      break;
    default:
      console.log("--------------------------");
      console.log("Opção inválida, leia o menu");
  }
} while (continuar);
