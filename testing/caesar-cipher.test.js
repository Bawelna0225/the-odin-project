const caesarCipher = require('./caesar-cipher')

test('expect "test" to be encrypted to "WHVW"', () => {
  expect(caesarCipher('test', 3)).toBe('WHVW');
});

test('expect "challenge" to be encrypted to "KPITTMVOM"', () => {
  expect(caesarCipher('challenge', 8)).toBe('KPITTMVOM');
});

test('expect "theodinproject" to be encrypted to "YMJTINSUWTOJHY"', () => {
  expect(caesarCipher('theodinproject', 5)).toBe('YMJTINSUWTOJHY');
});

test('expect "LAST TEST FOR CAESAR CIPHER" to be encrypted to "QFXY YJXY KTW HFJXFW HNUMJW"', () => {
  expect(caesarCipher('LAST TEST FOR CAESAR CIPHER', 5)).toBe('QFXY YJXY KTW HFJXFW HNUMJW');
});