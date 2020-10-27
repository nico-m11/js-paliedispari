var utenteWord = prompt('inserisci una parola');
var arrInverse = utenteWord.split("").reverse().join("");
function stringaInversa(utenteWord) {
return stringaInversa.toLowerCase().split("").reverse().join("");
}

  if (utenteWord === stringaInversa) {
    document.getElementById('parola').innerHTML = utenteWord + '  è una palindroma';
  } else {
     document.getElementById('parola').innerHTML = utenteWord + ' non è una palindroma';
  }
