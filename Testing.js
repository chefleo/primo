let testArray = [1, 3, 5, 7, 4, 8, 15];
let copyArray = [...testArray];
let copyArray2 = [...testArray];

let MapArray = testArray.map((val) => {
	return val * 4;
});

let SumArray = testArray.reduce((previousValue, currentVal) => {
	return previousValue + currentVal;
});

let ProdArray = testArray.reduce((previousValue, currentVal) => {
	return previousValue * currentVal;
});

let FilterArray = testArray.filter((val) => {
	return val >= 6;
});

let DescendingArray = copyArray.sort((a,b) => {
	return b - a;
});

let fillArray = testArray.fill(0, 2, testArray.length);

let halfArray = parseInt(copyArray2.length / 2);
let firstArray = copyArray2.slice(0, halfArray);
let lastArray = copyArray2.slice(halfArray, copyArray2.length);


const Car = function() {
	var speed = 10;
	this.accelerate = change => {
		speed += change;
	};
	this.decelerate = () => {
		speed -= 5;
	};
	this.getSpeed = () => {
		return speed;
	};
};

let myCar = new Car();
myCar.accelerate(50);

console.log('Speed car = ' + myCar.getSpeed());
console.log('Array before .map ' + testArray);                    // 15, 8, 7, 5, 4, 3, 1
console.log('Array after .map ' + MapArray);                      // 4, 12, 20 , 28, 16, 32, 60
console.log('Array after .reduce (Sum) ' + SumArray);			  // 43
console.log('Array after .reduce (Prod) ' + ProdArray);			  // 50400
console.log('Array after .filter (Only >= 6) ' + FilterArray);    // 7, 8, 15
console.log('Array descending ' + DescendingArray);				  // 15, 8, 7, 5, 4, 3, 1
console.log('Array trasform after the 3th element ' + fillArray); // 1, 3, 0, 0, 0, 0, 0
console.log('First half Array ' + firstArray);
console.log('Last half Array ' + lastArray);
