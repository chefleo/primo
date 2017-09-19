function getURLSlug(words){
	return words
		.replace(/\s+/g,'-')
		.toLowerCase();
}

function getRandomNumber(max,min) {
	return Math.floor(Math.random()*(max-min+1))+1;
}

const elem = function getRandomElement(arr) {
	return arr[Math.floor(Math.random()*arr.length)];
}