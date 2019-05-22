// sizes b,kb,mb,gb,tb,pb,eb,zb,yb
const fs = require('fs');
const eMath_simple = require('./simpleMath')
module.exports = (array, max) => 

{
	let sizes = [];

	for (x in array) {
		sizes.push(getFilesizeInBytes(array[x]));
	}
	if (max) {
		return eMath_simple.percent(eMath_simple.addMany(sizes), max);
	} else return eMath_simple.addMany(sizes);

	

	function getFilesizeInBytes(filename) {
		var stats = fs.statSync(filename)
		var fileSizeInBytes = stats["size"]
		return fileSizeInBytes
	}


}

let re = /[0-9]+(gb)/;