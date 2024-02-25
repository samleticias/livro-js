function calcularPreco() {
    // cria referência aos elementos da página
    var inProd = document.getElementById("inProd");
    var inPreco = document.getElementById("inPreco");
    var outValor = document.getElementById("outValor")
    // obtém conteúdo dos campos de entrada
    var produto = inProd.value;
    var preco = Number(inPreco.value);
    // calcula valor a ser pago
    var valor = preco * 2 + (preco/2);
    // altera o conteúdo da linha de resposta
    outValor.textContent = produto + " - " + "Promoção: Leve 3 por R$: " + valor.toFixed(2) + "\nO 3° produto custa apenas R$: " + (preco/2).toFixed(2);
    }
    // cria referência ao elemento btCalcular
    var btCalcular = document.getElementById("btCalcular");
    // registra um evento associado ao botão, para carregar uma função
    btCalcular.addEventListener("click", calcularPreco);