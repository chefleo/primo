let numero = 5;
let totale = 1;

function Fattoriale(numero) {
	if(numero === 1)
		return totale;
	else{
		totale *= numero;
		return Fattoriale(numero-1);
	}
}

Fattoriale(numero);

console.log("Il fattoriale di 5 : " + totale);