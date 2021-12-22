/*
Var
// Seção de Declarações das variáveis
   nota1, nota2, media: real
   nome: caractere
   passou: logico

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("Digite o nome do aluno:")
   leia(nome)
   escreval("Digite a nota 1:")
   leia(nota1)
   escreval("Digite a nota 2:")
   leia(nota2)

   media <- (nota1 + nota2)/2

   se media >= 5 entao
            passou := verdadeiro
   fimse

   se passou entao
         escreval("O aluno " , nome , " foi aprovado")
   senao
        escreval("O aluno ", nome , " foi reprovado")
   fimse

*/


//validação Condicional
var nota1, nota2, media, nome, passou;

nome = prompt("Digite o nome:")
nota1 = prompt("Digite a primeira nota:")
nota2 = prompt("Digite a segunda nota:")

passou = false;

media = (parseInt(nota1) + parseInt(nota2))/2

if (media >= 5 )  {
    passou = true;

} if(passou){
    alert("O aluno " + nome + " foi Aprovado")
}else{
    alert("O aluno " + nome + " foi Reprovado")
}

/* validação com negação

var nota1, nota2, media, nome, passou;

nome = prompt("Digite o nome:")
nota1 = prompt("Digite a primeira nota:")
nota2 = prompt("Digite a segunda nota:")

passou = false;

media = (parseInt(nota1) + parseInt(nota2))/2

if (media >= 5 )  {
    passou = true;

} if(!passou){
    alert("O aluno " + nome + " foi Reprovado")
}else{
    alert("O aluno " + nome + " foi Aprovado")

*/

/* validação com Conjunção

var nota1, nota2, media, nome, passou;

nome = prompt("Digite o nome:")
nota1 = prompt("Digite a primeira nota:")
nota2 = prompt("Digite a segunda nota:")

passou = false;

media = (parseInt(nota1) + parseInt(nota2))/2

if (media >= 5 )  {
    passou = true;

} if(passou && media >= 7){
    alert("O aluno " + nome + " foi Aprovado")
}else{
    alert("O aluno " + nome + " foi Reprovado")

*/

/* validação com Disjunção

var nota1, nota2, media, nome, passou;

nome = prompt("Digite o nome:")
nota1 = prompt("Digite a primeira nota:")
nota2 = prompt("Digite a segunda nota:")

passou = false;

media = (parseInt(nota1) + parseInt(nota2))/2

if (media >= 5 )  {
    passou = true;

} if(passou || media >= 7){
    alert("O aluno " + nome + " foi Aprovado")
}else{
    alert("O aluno " + nome + " foi Reprovado")

*/

/* validação com Disjunção Exclusiva

var nota1, nota2, media, nome, passou;

nome = prompt("Digite o nome:")
nota1 = prompt("Digite a primeira nota:")
nota2 = prompt("Digite a segunda nota:")

passou = false;

media = (parseInt(nota1) + parseInt(nota2))/2

if (media >= 5 )  {
    passou = true;

} if(passou && (media >= 7 && media <= 9)){
    alert("O aluno " + nome + " foi Aprovado")
}else{
    alert("O aluno " + nome + " foi Reprovado")

*/




