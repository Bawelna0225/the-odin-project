const addBox = document.querySelector('.add-box'),
	popupBox = document.querySelector('.popup-box'),
	popupTitle = popupBox.querySelector('header p'),
	closeIcon = popupBox.querySelector('header i'),
	bookTitle = popupBox.querySelector('.book-title'),
	bookAuthor = popupBox.querySelector('.book-author'),
	numberOfPages = popupBox.querySelector('.num-of-pages'),
	isBookRead = popupBox.querySelector('.is-read'),
	addBtn = popupBox.querySelector('button')

const books = JSON.parse(localStorage.getItem('books') || '[]')

addBox.addEventListener('click', () => {
	popupTitle.innerText = 'Add a new Book'
	addBtn.innerText = 'Add Book'
	popupBox.classList.add('show')
	document.querySelector('body').style.overflow = 'hidden'
	if (window.innerWidth > 660) bookTitle.focus()
})

closeIcon.addEventListener('click', () => {
	isUpdate = false
	bookTitle.value = bookAuthor.value = numberOfPages.value = ''
	isBookRead.checked = false
	popupBox.classList.remove('show')
	document.querySelector('body').style.overflow = 'auto'
})
const showBooks = () => {
	if (!books) return
	document.querySelectorAll('.book').forEach((li) => li.remove())
	books.forEach((book, id) => {
		let liTag = `<li class="book">
                        <div class="details">
                            <p>Title: ${book.title}</p>
                            <span>Author: ${book.author}</span>
                            <span>Pages: ${book.pages}</span>
                        </div>
                        <div class="bottom-content">
                            <div class="settings">
                                <span onclick="deleteNote(${id})">Delete</span>
                            </div>
                            <button onclick="updateNote(${id}, '${book.title}', '${book.author}', '${book.pages}', ${book.status})" class='${book.status ? 'read' : 'not-read'}'>${book.status ? 'Read' : 'Not Read'}</button>
                        </div>
                    </li>`
		addBox.insertAdjacentHTML('afterend', liTag)
	})
}
showBooks()

const showMenu = (elem) => {
	elem.parentElement.classList.add('show')
	document.addEventListener('click', (e) => {
		if (e.target.tagName != 'I' || e.target != elem) {
			elem.parentElement.classList.remove('show')
		}
	})
}

const deleteNote = (bookId) => {
	let confirmDel = confirm('Are you sure you want to delete this book?')
	if (!confirmDel) return
	books.splice(bookId, 1)
	localStorage.setItem('books', JSON.stringify(books))
	showBooks()
}

const updateNote = (bookId, title, author, pages, status) => {
	status ? (status = false) : (status = true)
	let bookInfo = { title, author, pages, status }
    books.push(bookInfo)
	books.splice(bookId, 1)
	localStorage.setItem('books', JSON.stringify(books))
	showBooks()
}

addBtn.addEventListener('click', (e) => {
	e.preventDefault()
	let title = bookTitle.value.trim(),
		author = bookAuthor.value.trim(),
		pages = numberOfPages.value.trim(),
		status = isBookRead.checked

	if (title || author || pages) {
		let bookInfo = { title, author, pages, status }
		books.push(bookInfo)
		localStorage.setItem('books', JSON.stringify(books))
		showBooks()
		closeIcon.click()
	}
})
