const reverseString = require('./reverseString')

test('expect "test" to return "tset"', () => {
  expect(reverseString('test')).toBe('tset');
});

test('expect "abc" to return "cba"', () => {
  expect(reverseString('abc')).toBe('cba');
});

test('expect "reversed" to return "desrever"', () => {
  expect(reverseString('reversed')).toBe('desrever');
});