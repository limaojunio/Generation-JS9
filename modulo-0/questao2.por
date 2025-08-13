programa
{
	
	funcao inicio()
	{
		inteiro vet[10]
	     cadeia par = ""
	     inteiro soma = 0
	     real media
	     
		para (inteiro i = 0; i<10; i++){
			escreva("Insira um número: ")
			leia(vet[i]) 
		}

		escreva("\nTodos os elementos nos indices impares do vetor: ")
		para (inteiro i = 0; i<10; i++){

			soma += vet[i]
			
			se (i%2 != 0){
				escreva(vet[i], " ")
			}
			
			se (vet[i]%2 == 0){
				par = par + vet[i] + " "
			}
			
		}

		escreva("\nTodos os elementos do vetor que são números pares: ")
		escreva(par)


		escreva("\n")

			
		media = soma/10.0
		escreva("Soma: ", soma, "\n")
		escreva("Media: ", media, "\n")

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 560; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */