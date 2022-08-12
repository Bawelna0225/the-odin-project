const capitalize = require('./capitalize')

test('expect "test" to return "Test"', () => {
  expect(capitalize('test')).toBe('Test');
});

test('expect "lorem ipsum" to return "Lorem ipsum"', () => {
  expect(capitalize('lorem ipsum')).toBe('Lorem ipsum');
});

