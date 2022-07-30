import { loadHome } from './modules/home'
import { loadMenu } from './modules/menu'
import { loadContact } from './modules/contact'

const content = document.querySelector('#content')

function createNavElement(id, name) {
	const btn = document.createElement('button')
	btn.setAttribute('id', id)
	btn.textContent = name
	return btn
}
function createNav() {
	const nav = document.createElement('nav')
	const homeButton = createNavElement('home', 'Home')
	const menuButton = createNavElement('menu', 'Menu')
	const contactButton = createNavElement('contact', 'Contact')
	nav.appendChild(homeButton)
	nav.appendChild(menuButton)
	nav.appendChild(contactButton)
	content.appendChild(nav)
}

function loadContentOnClick() {
	const homeButton = document.querySelector('#home')
	homeButton.addEventListener('click', () => {
		const sections = document.querySelectorAll('section')
		sections.forEach((section) => {
			section.remove()
		})
		loadHome()
	})

	const contactButton = document.querySelector('#contact')
	contactButton.addEventListener('click', () => {
		const sections = document.querySelectorAll('section')
		sections.forEach((section) => {
			section.remove()
		})
		loadContact()
	})

	const menuButton = document.querySelector('#menu')
	menuButton.addEventListener('click', () => {
		const sections = document.querySelectorAll('section')
		sections.forEach((section) => {
			section.remove()
		})
		loadMenu()
	})
}

createNav()
loadHome()
loadContentOnClick()
