const fs = require('fs');



module.exports.fileSize = (array, max) => {
		let sizes = [];

		for (x in array) {
			sizes.push(getFilesizeInBytes(array[x]));
		}
		if (max) {
			parseMax()
			return eMath_simple.percent(eMath_simple.addMany(sizes), max);
		} else return eMath_simple.addMany(sizes);



		function getFilesizeInBytes(filename) {
			var stats = fs.statSync(filename)
			var fileSizeInBytes = stats["size"]
			return fileSizeInBytes
		}

		function parseMax(max) {

			// Create regular expresions for this
			let kb = /\d*\s*KB/
			let mb = /\d+\s*MB/
			let gb = /\d+\s*GB/
			let tb = /\d+\s*TB/
			let pb = /\d+\s*PB/
			let eb = /\d+\s*EB/
			let zb = /\d+\s*ZB/
			let yb = /\d+\s*YB/


			// Check 
			if (kb.test(max)) {
				max = Number(max.match(/\d*/)[0])
				max = max / 1000;

			} else if (mb.test(max)) {
				max = max / 1000;

				max = Number(max.match(/\d*/)[0])
				max = max / 1000;

			} else if (gb.test(max)) {
				max = max / 1000
				max = max / 1000;

				max = Number(max.match(/\d*/)[0])
				max = max / 1000;

			} else if (tb.test(max)) {
				max = max / 1000
				max = max / 1000
				max = max / 1000

				max = Number(max.match(/\d*/)[0])
				max = max / 1000;

			} else if (pb.test(max)) {
				max = max / 1000
				max = max / 1000
				max = max / 1000
				max = max / 1000

				max = Number(max.match(/\d*/)[0])
				max = max / 1000;

			} else if (eb.test(max)) {
				max = max / 1000
				max = max / 1000
				max = max / 1000
				max = max / 1000
				max = max / 1000

				max = Number(max.match(/\d*/)[0])
				max = max / 1000;

			} else if (zb.test(max)) {
				max = max / 1000
				max = max / 1000;
				max = max / 1000;
				max = max / 1000;
				max = max / 1000;
				max = max / 1000;

				max = Number(max.match(/\d*/)[0])
				max = max / 1000;

			} else if (yb.test(max)) {
				max = max / 1000
				max = max / 1000;
				max = max / 1000;
				max = max / 1000;
				max = max / 1000;
				max = max / 1000;
				max = max / 1000;

				max = Number(max.match(/\d*/)[0])
				max = max / 1000;



			}
			return max;
		}
	}