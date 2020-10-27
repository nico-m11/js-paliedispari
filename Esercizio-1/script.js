var utenteWord = prompt('inserisci una parola');
var arrInverse = utenteWord.split("").reverse().join("");
var message = false;
function stringaInversa(utenteWord) {
return stringaInversa.toLowerCase().split("").reverse().join("");
}

  if (utenteWord === stringaInversa) {
      message = false;
      document.getElementById('parola').innerHTML = message + ' non è una palindroma';
  } else {
     document.getElementById('parola').innerHTML = message + ' è una palindroma';
  }
