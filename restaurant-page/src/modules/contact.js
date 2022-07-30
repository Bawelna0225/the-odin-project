export const loadContact = () => {
	const section = document.createElement('section')
	const form = document.createElement('form')
	form.addEventListener('submit', (e) => e.preventDefault())

	const firstName = document.createElement('input')
	firstName.placeholder = 'Your First Name'

	const lastName = document.createElement('input')
	lastName.placeholder = 'Your Last Name'

	const email = document.createElement('input')
	email.placeholder = 'Your Email'

	const message = document.createElement('textarea')
	message.placeholder = 'Your Message to Us'

	const sendButton = document.createElement('button')
	sendButton.innerText = 'Send Message'

	form.appendChild(firstName)
	form.appendChild(lastName)
	form.appendChild(email)
	form.appendChild(message)
	form.appendChild(sendButton)

	content.appendChild(section)
	section.appendChild(form)
}
