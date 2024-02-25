function calcularTempoETroco(valorDepositado) {
    const tabelaParquimetro = [
      { valor: 1.00, tempo: 30 },
      { valor: 1.75, tempo: 60 },
      { valor: 3.00, tempo: 120 }
    ];
  
    let tempoPermanencia = 0;
    let troco = 0;
  
    // Verifica se o valor depositado é suficiente para o tempo mínimo
    if (valorDepositado < tabelaParquimetro[0].valor) {
      console.log("Valor Insuficiente");
      return;
    }
  
    // Calcula o tempo de permanência com base no valor depositado
    for (let i = tabelaParquimetro.length - 1; i >= 0; i--) {
      if (valorDepositado >= tabelaParquimetro[i].valor) {
        tempoPermanencia = tabelaParquimetro[i].tempo;
        troco = valorDepositado - tabelaParquimetro[i].valor;
        break;
      }
    }
  
    console.log(`Tempo de permanência: ${tempoPermanencia} minutos`);
    console.log(`Troco: R$ ${troco.toFixed(2)}`);
  }
  
  // Exemplo de uso
  const valorDepositado = 2.50; // Pode ser ajustado conforme necessário
  calcularTempoETroco(valorDepositado);
  