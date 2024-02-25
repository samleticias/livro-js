document.getElementById('mostrar').addEventListener('click', function () {
    var nome = document.getElementById('nome').value;
    var resposta = 'Olá, ' + nome + '!';
    document.getElementById('resposta').innerHTML = resposta;
});
