// ex3_6.js

// Função que verifica a penalidade com base na velocidade permitida e velocidade do condutor
    function verificarMulta() {
    var velocidadePermitida = document.getElementById("inVperm");
    var velocidadeCondutor = document.getElementById("inVcond");
    var velocidadep = Number(velocidadePermitida.value);
    var velocidadec = Number(velocidadeCondutor.value);
    var limiteLeve = velocidadep * 1.2; // 20% a mais que a velocidade permitida
    
    if (velocidadec <= velocidadep) {
        document.getElementById("outVelocidade").textContent = "Sem Multa";
    } else if (velocidadec <= limiteLeve) {
        document.getElementById("outVelocidade").textContent = "Multa Leve";
    } else {
        document.getElementById("outVelocidade").textContent = "Multa Grave";
    }
}

// Adiciona o evento de clique ao botão
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarMulta);

