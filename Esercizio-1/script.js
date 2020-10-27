var utenteWord = prompt('inserisci una parola');
var arrInverse = stringaInversa(utenteWord);
function stringaInversa(word) {
return word.toLowerCase().split("").reverse().join("");
}

  if (utenteWord === arrInverse) {
    document.getElementById('parola').innerHTML = utenteWord + '  è una palindroma';
  } else {
     document.getElementById('parola').innerHTML = utenteWord + ' non è una palindroma';
  }
