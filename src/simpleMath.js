// Addition
module.exports.add = (a, b) => {
	return a + b;
};

// Subtraction
module.exports.subtract = (a, b) => {
	return a - b;
}

// Multiplication
module.exports.mult = (a, b) => {
	return a * b;
};

// Division
module.exports.divide = (a, b) => {
	return a / b;
};

// Modulus
module.exports.mod = (a, b) => {
	return a % b;
};

// Percentage
module.exports.percent = (a, b) => {
	return (a / b) * 100;
};

// Add many numbers
module.exports.addMany = (array) => {
	var result = 0;
	for (let i = 0; i < array.length; i++) {
		result += array[i]
	}
	return result;
};