const fs = require("fs");


// Helper functions
function percent(a, b) {
	return (a / b) * 100;
}

function addMany(array) {
	var result = 0;
	for (let i = 0; i < array.length; i++) {
		result += array[i];
	}
	return result;
}

function getFilesizeInBytes(filename) {
	var stats = fs.statSync(filename);
	var fileSizeInBytes = stats["size"];
	return fileSizeInBytes;
}

function parseMax(max) {

	var finalNum = "1";
	var num = Number(max.match(/\d*/)[0]);
	var suffix = max.match(/[A-Z]+/)[0];

	var array = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB",];

	for (let x in array) {
		if (suffix === array[x]) {
			var x3 = x * 3;
			for (var i = 0; i < x3; i++) {
				finalNum += "0";
			}
		}
	}

	var result = Number(finalNum);
	result *= num;
	return result;
}

function fileSize(array, max) {
	let sizes = [];

	try {
		if (max) {
			max = parseMax(max);
		}

	}
	catch (e) {
		throw new Error(e);
	}
	for (let x in array) {
		sizes.push(getFilesizeInBytes(array[x]));
	}
	if (max) {
		return percent(addMany(sizes), max);
	} else return {  addMany(sizes);  }




	
}



module.exports = fileSize;