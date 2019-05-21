
module.exports.add = (a,b) => {
	return a + b;
};

module.exports.mult = (a,b) => {
	return a * b;
};

module.exports.divide = (a,b) => {
	return a / b;
};

module.exports.mod = (a,b) => {
	return a % b;
};

module.exports.percent = (a,b) => {
	return (a / b) * 100;
};

module.exports.addMany = (array) => {
	var result = 0;
	for (let i = 0; i < array.length; i++) {
		 result +=array[i]
	}
	return result;
};