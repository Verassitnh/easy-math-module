const fs = require('fs');

// Addition
module.exports.add = (a, b) => {
	return a + b;
};

// Subtraction
module.exports.subtract = (a,b) => {
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

// File Size
module.exports.fileSize = (array, max) => {
	let sizes = [];

	for (x in array) {
		sizes.push(getFilesizeInBytes(array[x]));
	}
	if (max) return module.exports.percent(module.exports.addMany(sizes), max);
	else return module.exports.addMany(sizes);
	
	function getFilesizeInBytes(filename) {
		var stats = fs.statSync(filename)
		var fileSizeInBytes = stats["size"]
		return fileSizeInBytes
	}
}

