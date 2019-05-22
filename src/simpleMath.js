class SimpleMath {
	// Addition
	add(a, b) {
		return a + b;
	};

	// Subtraction
	subtract(a, b) {
		return a - b;
	}

	// Multiplication
	mult(a, b) {
		return a * b;
	};

	// Division
	divide(a, b) {
		return a / b;
	};

	// Modulus
	mod(a, b) {
		return a % b;
	};

	// Percentage
	percent(a, b) {
		return (a / b) * 100;
	};

	// Add many numbers
	addMany(array) {
		var result = 0;
		for (let i = 0; i < array.length; i++) {
			result += array[i]
		}
		return result;
	};

}

module.exports = EMath