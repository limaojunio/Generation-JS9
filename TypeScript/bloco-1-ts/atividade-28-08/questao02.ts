import { Stack } from "./../../../stack";
import leia = require("readline-sync");

const pilha = new Stack<string>();
let continuar: boolean = true;
let opcao: number;

do {
  console.log("*************************************************");
  console.log("");
  console.log("      1 - Adicionar um novo livro na pilha:");
  console.log("      2 - Listar todos os livros da pilha");
  console.log("      3 - Retirar um livro da pilha");
  console.log("      0 - Sair");
  console.log("");
  console.log("*************************************************");
  console.log("");
  console.log("Entre com a opção desejada: ");
  opcao = leia.questionInt();

  switch (opcao) {
    case 1:
      let nomeLivro: string = leia.question("Digite o nome do livro:");
      pilha.push(nomeLivro);
      break;
    case 2:
      console.log("--------------------------");
      console.log("Livros na pilha atualmente:");
      pilha.printStack();
      break;
    case 3:
      if (pilha.isEmpty()) {
        console.log("--------------------------");
        console.log("A pilha de livros está vazia!");
      } else {
        let livroRetirar = pilha.peek();
        console.log("--------------------------");
        console.log("Retirando o livro: " + livroRetirar);
        pilha.pop();

        if (pilha.isEmpty()) {
          console.log("--------------------------");
          console.log("A pilha de livros está vazia!");
        } else {
          let livroAtual = pilha.peek();
          console.log("--------------------------");
          console.log("O livro que está no topo é : " + livroAtual);
        }
      }
      break;
      case 0:
        console.log("--------------------------");
        console.log("Você está saindo do menu, tenha uma ótima leitura!");
        continuar = false;
    default:
    console.log("--------------------------");
    console.log("Opção inválida, leia o menu");
  }
} while (continuar);
