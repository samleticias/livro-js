function calcularPreco() {
    // cria referência aos elementos da página
    var inMedic = document.getElementById("inMedic");
    var inPreco= document.getElementById("inPreco");
    var outValor = document.getElementById("outValor");
    var inQuant = document.getElementById("inQuant")
    // obtém conteúdo dos campos de entrada
    var medicamento = inMedic.value;
    var preco = Number(inPreco.value);
    var quantm = Number(inQuant.value)
    // calcula valor a ser pago
    var valorMultiplicado = quantm * preco;
    var valorArredondado = Math.round(valorMultiplicado);
    var resultadoFinal = valorArredondado
    // altera o conteúdo da linha de resposta
    outValor.textContent = "Promoção de " + medicamento + "\nLeve " + quantm + " por apenas R$: " + resultadoFinal.toFixed(2);
    }
    // cria referência ao elemento btCalcular
    var btMostrar = document.getElementById("btMostrar");
    // registra um evento associado ao botão, para carregar uma função
    btMostrar.addEventListener("click", calcularPreco);