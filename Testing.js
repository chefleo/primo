let testArray = [1, 3, 5, 7, 4, 8, 15];

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

let DescendingArray = testArray.sort((a,b) => {
	return b - a;
})

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
console.log('Array before .map ' + testArray);
console.log('Array after .map ' + MapArray);
console.log('Array after .reduce (Sum) ' + SumArray);
console.log('Array after .reduce (Prod) ' + ProdArray);
console.log('Array after .filter (Only >= 6) ' + FilterArray);
console.log('Array descending' + DescendingArray);
