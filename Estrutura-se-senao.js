/*Var
// Seção de Declarações das variáveis 
   valor1, valor2, resultado: real
   operacao: caractere
   

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva("Proposta de code é selecionar a operação")
   
   escreva("Digite o valor 1:")
   leia(valor1)
   
   escreva("Digite a operação: Ex: +, -, *, /: ")
   leia(operacao)

   escreva("Digite o valor 2: ")
   leia(valor2)

      se operacao = "+" entao
      resultado := valor1 + valor2
      senao
           se operacao = "-" entao
           resultado := valor1 - valor2
           senao
                se operacao = "*" entao
                resultado := valor1 * valor2
                senao
                     se operacao = "/" entao
                     resultado := valor1 / valor2
                     fimse
                fimse
           fimse
      fimse
      escreva("Resultado do calculo é: ", resultado)
      */

      

    
        
        var valor1, valor2, resultado, operacao, resultado;

      alert("Programa tem como proposta calcular dois valores baseados na operacao que escolher")

      valor1 = prompt("Digite o valor1: ")
      operacao = prompt("Digite a operacao: Ex: +, -, *, /: ")
      valor2 = prompt("Digite o valor2: ")

   

         if (operacao == "+") {
        resultado = parseInt(valor1) + parseInt(valor2)
        } else if (operacao == "-") {
            resultado = parseInt(valor1) - parseInt(valor2)
        } else if (operacao == "*") {
            resultado = parseInt(valor1) * parseInt(valor2)
        } else if (operacao == "/") {
            resultado = parseInt(valor1) / parseInt(valor2)
        }
        document.getElementById("paragrafo").innerText = "o valor do resultado e: " + resultado;
        

      
        
