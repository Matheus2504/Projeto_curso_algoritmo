function acaoBotao(params){
        
        var valor1, valor2, resultado, operacao, resultado;

      alert("Programa tem como proposta calcular dois valores baseados na operacao que escolher")

      valor1 = prompt("Digite o valor1: ")
      operacao = prompt("Digite a operacao: Ex: +, -, *, /: ")
      valor2 = prompt("Digite o valor2: ")

      switch (operacao) {
            case "+":
                resultado = parseInt(valor1) + parseInt(valor2)
                break;
            
            case "-":
                resultado = parseInt(valor1) - parseInt(valor2)
                break;

            case "*":
                resultado = parseInt(valor1) * parseInt(valor2)
                break;

             case "/":
                resultado = parseInt(valor1) / parseInt(valor2)
                break;
        }

        document.getElementById("paragrafo").innerText = "o valor do resultado e: " + resultado;
    }