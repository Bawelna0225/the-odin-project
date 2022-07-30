export const loadHome = () => {
	const section = document.createElement('section')
	const heading = document.createElement('h1')
	heading.innerText = 'Something About Food'
	content.appendChild(section)
	section.appendChild(heading)

	return section
}
