let number = 1;
let number_2 = 2;
let fatt = 5;
let tot = 1;
let final, n, n1, n2, x, i, j, first, meta, last;
let steps = 5;
let AlgArray1 = [1, 5, 3, 7, 2, 9, 4, 6];
let AlgArray2 = [...AlgArray1];
let ArrayL = [];
let ArrayR = [];

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

Fibonacci(number,number_2);

console.log("Utilizzo di Fibonacci " + final);

Fattoriale(fatt);

console.log("Il fattoriale di 5 : " + tot);

function InsertSort(Array) {
	n = Array.length;
	for(let j = 2; j < n; j += 1){
		x = Array[j];
		i = j-1;
		while(i >= 1 && x < Array[i]){
			Array[i + 1] = Array[i];
			i = i - 1;
		}
		AlgArray1[i + 1] = x;
	}
}

console.log("Array prima dell'algoritmo InsertSort " + AlgArray1);

InsertSort(AlgArray1);

console.log("Array dopo l'algoritmo InsertSort " + AlgArray1);

Fibonacci(number,number_2);

console.log("Utilizzo di Fibonacci " + final);

Fattoriale(fatt);

console.log("Il fattoriale di 5 : " + tot);


/*
let Merge = function (Array, first, meta, last) {
	n1 = meta - last + 1;
	n2 = last - meta;
	for(i = 1; i < n1; i += 1) {
		ArrayL[i] = Array[first + i - 1];
	}
	for(j = 1; j < n2; j += 1) {
		ArrayR[j] = Array[meta + j];
	}
	ArrayL[n1 + 1] = Infinity;
	ArrayR[n2 + 1] = Infinity;
	i = 1;
	j = 1;
	for(let k = first; k < last; k += 1) {
		if(ArrayL[i] <= ArrayR[j]) {
			Array[k] = ArrayL[i];
			i = i + 1;
		} else {
			Array[k] = ArrayR[j];
			j = j + 1;
		}
	}
}
FIXME : Problem with the algorithm
let MergeSort = function (Array, first, last) {
	if(first < last){
		meta = (first + last) / 2;
		MergeSort(Array, first, meta);
		MergeSort(Array, meta + 1, last);
		Merge(Array, first, meta, last);
	}
}


console.log("Array prima dell'algoritmo " + AlgArray2);

MergeSort(AlgArray2, AlgArray2[0], AlgArray2[AlgArray2.length]);

console.log("Array dopo l'algoritmo " + AlgArray2);
*/
