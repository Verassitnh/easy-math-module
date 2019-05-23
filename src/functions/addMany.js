// Add many numbers
module.exports.addMany = (array) => {
	var result = 0;
	for (let i = 0; i < array.length; i++) {
		result += array[i]
	}
	return result;
};