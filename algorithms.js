let number = 1;
let number_2 = 2;
let fatt = 5;
let tot = 1;
let final, x, i, j;
let steps = 5;
let AlgArray1 = [10, 35, 28, 10, 23, 59, 36];
const AlgArray2 = [...AlgArray1];

function Fibonacci (number,number_2) {
	  for(var i = 1;i <= steps;i++) {
	  	final = number + number_2;
		number = number_2;
		number_2 = final;
	}
}

function Fattoriale(fatt) {
	if(fatt === 1)
		return tot;
	else{
		tot *= fatt;
		return Fattoriale (fatt - 1);
	}
		  
}

function InsertSort(Array) {
	for(j = 2; j < Array.length; j += 1){
		x = Array[j];
		i = j-1;
		while(i >= 1 && x < Array[i]){
			Array[i + 1] = Array[i];
			i = i - 1;
		}
		AlgArray1[i + 1] = x;
	}

	return Array;
}

function Merge(first, last) {
	let result = [];
	let indexFirst = 0;
	let indexLast = 0;

	while (indexFirst < first.length && indexLast < last.length) {
		if(first[indexFirst] < last[indexLast]) {
			result.push(first[indexFirst]);
			indexFirst++;
		} else {
			result.push(last[indexLast]);
			indexLast++;
		}
	}

	return (
		result.concat(first.slice(indexFirst))
		.concat(last.slice(indexLast))
		);
	
}

function MergeSort (Array) {
	if(Array.length === 1) {
		return Array;
	}
	const meta = parseInt(Array.length / 2);
	const first = Array.slice(0, meta);
	const last = Array.slice(meta, Array.length);

	return Merge(
		MergeSort(first),
		MergeSort(last)
		);
}

Fibonacci(number,number_2);
console.log("Array prima dell'algoritmo InsertSort " + AlgArray1);
console.log("Array dopo l'algoritmo InsertSort " + InsertSort(AlgArray1));
console.log("Utilizzo di Fibonacci " + final);
console.log("Il fattoriale di 5 : " + Fattoriale(fatt));
console.log("Array prima dell'algoritmo MergeSort " + AlgArray2);
console.log("Array dopo l'algoritmo MergeSort " + MergeSort(AlgArray2));
