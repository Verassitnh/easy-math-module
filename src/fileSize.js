// sizes b,kb,mb,gb,tb,pb,eb,zb,yb
module.exports = (array, max) => 

{
	let sizes = [];

	for (x in array) {
		sizes.push(getFilesizeInBytes(array[x]));
	}
	if (max) {
		return module.exports.percent(module.exports.addMany(sizes), maxBytes);
	} else return module.exports.addMany(sizes);


	function getFilesizeInBytes(filename) {
		var stats = fs.statSync(filename)
		var fileSizeInBytes = stats["size"]
		return fileSizeInBytes
	}


}