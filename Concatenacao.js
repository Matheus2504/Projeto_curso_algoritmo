/*Var
// Seção de Declarações das variáveis 
   nome: caractere
   numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("Digite o nome:")
   leia(nome)
   
   Escreval("Digite o número")
   leia(numero)

   escreval(nome, ": ", numero)
   */

   var nome, numero;

   nome = prompt("Digite o nome:")
   numero = prompt("Digite o numero:")

   document.getElementById("paragrafo").innerText = nome + ": " + numero;
