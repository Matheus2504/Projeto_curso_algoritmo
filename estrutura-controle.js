/*nota1, nota2, media: real
nome: caractere

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
    escreval("O aluno " , nome , " foi aprovado")
senao
     escreval("O aluno ", nome , " foi reprovado")
fimse
*/

var nome, nota1, nota2, media;

nome = prompt("digite seu nome:")
nota1 = prompt("digite a nota1:")
nota2 = prompt("digite a nota2:")

media = (parseInt(nota1) + parseInt(nota2))/2

if (media >= 5) {
    alert("O aluno " + nome + " foi aprovado, pois a sua media foi de : " + media)
} else {
    alert("O aluno " + nome + " foi reprovado, pois a sua media foi de : " + media)
}
