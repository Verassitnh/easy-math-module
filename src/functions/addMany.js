// Add many numbers
var addMany = (array) => {
	var result = 0;
	for (let i = 0; i < array.length; i++) {
		let x = array[i]
		result += x;
	}
	return result;
};
module.exports = addMany;