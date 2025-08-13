programa
{
	
	funcao inicio()
	{
		inteiro vet[] = {2,5,1,3,4,9,7,8,10,6}
		

		inteiro auxiliar


		para (inteiro j = 0; j < 10; j++){
			para (inteiro i = 0; i < 9; i++){
				se (vet[i] < vet[i+1]){
					auxiliar = vet[i]
					vet[i] = vet[i+1]
					vet[i+1] = auxiliar
				}
			}
		}
		escreva("Vetor ordenado:\n")
		para (inteiro i = 0; i < 10; i++){
			escreva(vet[i], "\n")
		}

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 101; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {vet, 6, 10, 3};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */