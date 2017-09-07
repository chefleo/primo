var numero = 1;
var numero_2=2;
var finale;
var passi = 5;

function Fibonacci(numero,numero_2){
	for(var i=1;i<=passi;i++){
		finale = numero+numero_2;
		numero = numero_2;
		numero_2 = finale;
	}
}

Fibonacci(numero,numero_2);

console.log(finale);