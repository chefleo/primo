let numero = 1;
let numero_2 = 2;
let fatt = 5;
let totale = 1;
let finale;
let passi = 5;

function Fibonacci(numero,numero_2) {
	for(var i = 1;i <= passi;i++) {
		finale = numero + numero_2;
		numero = numero_2;
		numero_2 = finale;
	}
}

function Fattoriale(fatt) {
	if(fatt === 1)
		return totale;
	else{
		totale *= fatt;
		return Fattoriale (fatt - 1);
	}
}

Fibonacci(numero,numero_2);

console.log("Utilizzo di Fibonacci " + finale);

Fattoriale(fatt);

console.log("Il fattoriale di 5 : " + totale);