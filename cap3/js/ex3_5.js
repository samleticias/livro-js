// seu_arquivo.js
function verificarNumero() {
    var inNumero = document.getElementById("inNumero");
    var numero = Number(inNumero.value);

    if (!isNaN(numero)) { // Verifica se a entrada é um número
        if (numero % 2 === 0) {
            alert(numero + " é um número par.");
        } else {
            alert(numero + " é um número ímpar.");
        }
    } else {
        alert("Por favor, insira um número válido.");
    }
}

// Adiciona o evento de clique ao botão
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarNumero);

    