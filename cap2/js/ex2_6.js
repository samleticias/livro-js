function calcularPreco() {
    // cria referência aos elementos da página
    var inUso = document.getElementById("inUso");
    var inTempo = document.getElementById("inTempo");
    var outValor = document.getElementById("outValor")
    // obtém conteúdo dos campos de entrada
    var valorm = Number(inUso.value);
    var tempouso = Number(inTempo.value);
    // calcula valor a ser pago
    var valor = valorm * (tempouso/15) ;
    // altera o conteúdo da linha de resposta
    outValor.textContent = "Valor a pagar R$: " + valor.toFixed(2);
    }
    // cria referência ao elemento btCalcular
    var btCalcular = document.getElementById("btCalcular");
    // registra um evento associado ao botão, para carregar uma função
    btCalcular.addEventListener("click", calcularPreco);
    