const cells = [...document.querySelectorAll('.cell')],
	resetButton = document.querySelector('.reset'),
	announcement = document.querySelector('.announcement'),
	endGameMessage = announcement.querySelector('.message h2')

const winningConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
]

let board = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'X'
let isGameActive = true

const PLAYER_X_WINS = 'PLAYER_X_WINS'
const PLAYER_O_WINS = 'PLAYER_O_WINS'
const DRAW = 'DRAW'

function handleResultValidation() {
	let roundWon = false
	for (let i = 0; i <= 7; i++) {
		const winCondition = winningConditions[i]
		const a = board[winCondition[0]]
		const b = board[winCondition[1]]
		const c = board[winCondition[2]]
		if (a === '' || b === '' || c === '') {
			continue
		}
		if (a === b && b === c) {
			roundWon = true
			break
		}
	}
	if (roundWon) {
		announce(currentPlayer === 'X' ? PLAYER_X_WINS : PLAYER_O_WINS)
		isGameActive = false
		return
	}
	if (!board.includes('')) announce(DRAW)
}

const announce = (type) => {
	switch (type) {
		case PLAYER_O_WINS:
			endGameMessage.innerText = "'O' Wins!"
			break
		case PLAYER_X_WINS:
			endGameMessage.innerText = "'X' Wins!"
			break
		case DRAW:
			endGameMessage.innerText = 'Draw'
	}
	announcement.style.display = 'flex'
}

const isValidAction = (cell) => {
	if (cell.innerText === 'X' || cell.innerText === 'O') {
		return false
	}
	return true
}

const updateBoard = (index) => {
	board[index] = currentPlayer
}

const changePlayer = () => {
	currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
}

const userAction = (cell, index) => {
	if (isValidAction(cell) && isGameActive) {
		cell.innerText = currentPlayer
		cell.classList.add(`player${currentPlayer}`)
		updateBoard(index)
		handleResultValidation()
		changePlayer()
	}
}

const resetBoard = () => {
	board = ['', '', '', '', '', '', '', '', '']
	isGameActive = true
	announcement.style.display = 'none'

	if (currentPlayer === 'O') {
		changePlayer()
	}

	cells.forEach((cell) => {
		cell.innerText = ''
		cell.classList.remove('playerX')
		cell.classList.remove('playerO')
	})
}

cells.forEach((cell, index) => {
	cell.addEventListener('click', () => userAction(cell, index))
})

resetButton.addEventListener('click', resetBoard)
