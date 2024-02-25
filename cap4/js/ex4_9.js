function contarChinchilas() {
    // cria referência aos elementos html manipulados pela function
    var inChinchila = document.getElementById("inChinchila");
    var inAnos = document.getElementById("inAnos");
    var outEspacos = document.getElementById("outEspacos");
    var anos = Number(inAnos.value); 
    var chinchilas = Number(inChinchila.value); 
    if (chinchilas == 0 || isNaN(num)) {
    alert("Número Inválido...");
    inChinchila.focus();
    return;
    }
    var chinchilas = "";
    // cria um laço de repetição de 1 até o número informado
    for (var i = 1; i <= num; i++) {
    if (i % 2 == 0) {
    chinchilas =  (chinchilas * 3) ; // na posição ímpar do i: *
    } else {
    chinchilas = chinchilas + "-"; // na posição par: -
    }
    }
    outEspacos.textContent = chinchilas; // exibe as estrelas
    }
    // cria referência ao botão e após associa function ao evento click
    var btMostrar = document.getElementById("btMostrar");
    btMostrar.addEventListener("click", contarChinchilas);
    