function caesarCipher (string, shift)  {
	let cipher = '',
		character,
		code
	string = string.toUpperCase()

	for (let i = 0; i < string.length; i++) {
		character = string.charAt(i)
		code = string.charCodeAt(i)
		code = 65 + ((code - 65 + shift) % 26)
		character = String.fromCharCode(code)
		cipher = cipher + character
	}
	return cipher.replace(/[^A-Z0-9]+/ig, " ")
}

module.exports = caesarCipher;