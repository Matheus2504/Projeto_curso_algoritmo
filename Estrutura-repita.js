
/*Var
// Seção de Declarações das variáveis 
   sairLoop: caractere
   valor1, valor2: real
   


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   repita
       escreva ("Digite o primerio valor: ")
       leia(valor1)
       
       escreva ("Digite o segundo valor: ")
       leia(valor2)
       
       escreval("Resultado: ", valor1 + valor2)
       escreval("Deseja sai ? S/N")
       leia(sairLoop)
   ate sairLoop <> "N"
   */


       
function acaoBotao(params){
        
    var valor1, valor2, sairLoop;

      do{
        valor1 =  prompt("Digite o primerio valor: ")
        valor2 =  prompt("Digite o segundo valor: ")
        document.getElementById("paragrafo").innerText = "Resultado: "+ (parseInt(valor1) + parseInt(valor2))
        sairLoop = prompt("Deseja sai ? S/N")
                      

      } while (sairLoop == "N") {
          
    }
    
}



   