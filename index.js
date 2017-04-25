function iterativeLog(array) {
	array.forEach((ele, index) => {
		console.log(`${index}: ${ele}`)
	})
}

function iterate(callback) {
	arr = [1,2,3,4];
	arr.forEach(callback);
	return arr;
}

function doToArray(array, callback) {
	array.forEach(callback);
}