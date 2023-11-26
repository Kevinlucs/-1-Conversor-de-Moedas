var valorEmReal; // Declarando a variável global
var nome = prompt("Informe o seu nome");

function obterValorEmReal() {
  valorEmReal = parseFloat(document.getElementById("valorEmReal").value);
}

function converter() {
  obterValorEmReal(); // Chama a função para obter o valor em real

  var valorBitcoin = valorEmReal / 176.755;
  valorBitcoin = valorBitcoin.toFixed(3);
  document.getElementById("resultado").textContent =
    nome + " o valor em real equivale a BTC " + valorBitcoin;
}
