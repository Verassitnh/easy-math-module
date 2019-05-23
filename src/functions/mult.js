// Multiplication
let mult = (array, mult) => {
	if (mult) {
		let result = [];

		for (let x in array) {
			result.push(array[x] * mult);
		}
	} else {
		var result = 0;
		for (let i = 0; i < array.length; i++) {
			let x = array[i];
			result *= x;
		}
	}
	return result;
};

module.exports = mult;