import { calculator } from './calculator'

test('expect 1 + 2 to equal 3', () => {
	expect(calculator.add(1, 2)).toBe(3)
})

test('expect 4 - 2 to equal 2', () => {
	expect(calculator.subtract(4, 2)).toBe(2)
})

test('expect 8 * 6 to equal 48', () => {
	expect(calculator.multiply(8, 6)).toBe(48)
})

test('expect 81 / 9 to equal 9', () => {
	expect(calculator.divide(81, 9)).toBe(9)
})