function verificarLados() {
    var ladoA = parseFloat(document.getElementById("inLadoA").value);
    var ladoB = parseFloat(document.getElementById("inLadoB").value);
    var ladoC = parseFloat(document.getElementById("inLadoC").value);
  
    if ((ladoA + ladoB) > ladoC && (ladoB + ladoC) > ladoA && (ladoC + ladoA) > ladoB) {
      classificarTriangulo(ladoA, ladoB, ladoC);
    } else {
      document.getElementById("outLado").textContent = "Não formam um triângulo";
    }
  }
  
  function classificarTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
      document.getElementById("outLado").textContent = "Triângulo Equilátero";
    } else if (ladoA === ladoB || ladoB === ladoC || ladoC === ladoA) {
      document.getElementById("outLado").textContent = "Triângulo Isósceles";
    } else {
      document.getElementById("outLado").textContent = "Triângulo Escaleno";
    }
  }
  
  // Adiciona o evento de clique ao botão
  var btVerificar = document.getElementById("btVerificar");
  btVerificar.addEventListener("click", verificarLados);
  