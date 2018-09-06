
function intToRoman(num) {
  if (num === "") {
    return "Digite um número";
  }

  if (num === 0) {
    return "Não existe 0 em romanos";
  }

  if (num > 4000) {
    return "Não converte acima de 4000 em romanos";
  }

  var resultado = "";
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romano = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  for (let i = 0; i<=decimal.length; i++) {
    while (num%decimal[i] < num) {     
      resultado += romano[i];
      num -= decimal[i];
    }
  }
  return resultado;

}

function romanToInt(str) {

  if (typeof str !== "string" || str === " ") {
    return "Digite uma letra correspondente a números romanos";
  }


  var resultado = 0;
  var maiuscula = str.toUpperCase();
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romano = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  for (let i = 0; i <= decimal.length; i++) {
    while (maiuscula.indexOf(romano[i]) === 0) {
      resultado += decimal[i];
      maiuscula = maiuscula.replace(romano[i], "");
    }
  }
  return resultado;
}

module.exports = {intToRoman,
  romanToInt};