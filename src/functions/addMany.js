// Add many numbers
var addMany = (array) => {
	var result = 0;
	for (let i = 0; i < array.length; i++) {
		result += array[i]
	}
	return result;
};
module.exports = addMany;