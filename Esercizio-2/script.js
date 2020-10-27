var utentePd = prompt('inserisci pari o dispari').toLowerCase();
var utenteNum = prompt('inserisci un numero da 1 a 5');
var numPc = randomNumber(1, 5);
var somma = parseInt(numPc) + parseInt(utenteNum);



function randomNumber(min, max) {
  return (Math.floor(Math.random() * max) + min);
}

function pd(somma) {
    if (somma % 2 == 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}



if(pd(somma) == "pari" && utentePd == "pari"){
  alert("hai vinto!");
} else if(pd(somma) == "dispari" && utentePd == "pari"){
  alert("hai perso!");
}else if(pd(somma) == "dispari" && utentePd == "dispari"){
  alert("hai vinto!");
} else if(pd(somma) == "pari" && utentePd == "dispari"){
  alert("hai perso!");
}



console.log(pd);

console.log(utenteNum, numPc, utentePd, somma);
