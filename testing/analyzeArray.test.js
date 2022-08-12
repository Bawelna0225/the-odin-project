import { analyzeArray } from './analyzeArray'

test('Array: [4, 6, 1, 9, 10] expect min: 1, max: 10, average: 6, length: 5', () => {
	expect(analyzeArray([4, 6, 1, 9, 10])).toEqual({ min: 1, max: 10, average: 6, length: 5 })
})

test('Array: [1, 7, 93, 19, 54] expect min: 1, max: 93, average: 6, length: 5', () => {
	expect(analyzeArray([1, 7, 93, 19, 54])).toEqual({ min: 1, max: 93, average: 34.8, length: 5 })
})

test('Array: [10, 70, 90, 30, 20, 80, 11, 89] expect min: 1, max: 93, average: 6, length: 5', () => {
	expect(analyzeArray([10, 70, 90, 30, 20, 80, 11, 89])).toEqual({ min: 10, max: 90, average: 50, length: 8 })
})
