export const analyzeArray = (array) => {
	array.sort(function (a, b) {
		return a - b
	})
	const sum = array.reduce((accumulator, index) => {
		return accumulator + index
	})
	const object = {
		min: array[0],
		max: array[array.length - 1],
		average: sum / array.length,
		length: array.length,
	}
	return object
}
