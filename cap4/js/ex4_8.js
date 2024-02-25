document.getElementById("btRepetir").addEventListener("click", repetirFrutas);

function repetirFrutas() {
    var inFruta = document.getElementById("inFruta");
    var inNumero = document.getElementById("inNumero");
    var outEspacos = document.getElementById("outEspacos");

    var fruta = inFruta.value.trim();
    var numero = Number(inNumero.value);

    // Verifica se o número inserido é válido
    if (isNaN(numero) || numero < 1) {
        alert("Por favor, insira um número válido maior que zero.");
        return;
    }

    // Verifica se uma fruta foi inserida
    if (fruta === " ") {
        alert("Por favor, digite o nome da fruta.");
        return;
    }

    // Lógica para repetir a fruta o número de vezes especificado
    var resultado = fruta.repeat(numero).split(' ').join('  ');

    // Exibe o resultado no elemento outEspacos
    outEspacos.textContent = resultado;
}



    