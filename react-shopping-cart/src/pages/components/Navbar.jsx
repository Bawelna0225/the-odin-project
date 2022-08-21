import { NavLink } from 'react-router-dom'
import React, { useState, useReducer } from 'react'

let initialState = { currentCurrency: '$' }

function reducer(state, action) {
	switch (action.type) {
		case 1:
			return { currentCurrency: '$' }
		case 2:
			return { currentCurrency: '£' }
		case 3:
			return { currentCurrency: '€' }
		default:
			console.error('error')
	}
}

export const Navbar = ({ data }) => {
	const currencies = [
		{ id: 1, currency: '$' },
		{ id: 2, currency: '£' },
		{ id: 3, currency: '€' },
	]
	const [state, dispatch] = useReducer(reducer, initialState)
	const [isCurrencyMenuOpen, setMenuCurrencyMenuOpen] = useState(false)
	const [isCartOpen, setCartOpen] = useState(false)

	const handleOpenCurrency = () => {
		setMenuCurrencyMenuOpen(!isCurrencyMenuOpen)
		setCartOpen(false)
	}
	const handleOpenCart = () => {
		setCartOpen(!isCartOpen)
		setMenuCurrencyMenuOpen(false)
	}
	const activeCurrency = localStorage.getItem('active-currency')
	return (
		<nav>
			<div className="left-nav">
				<NavLink exact="true" activeclassname="active" to="/">
					Home
				</NavLink>
				<NavLink activeclassname="active" to="/products">
					Products
				</NavLink>
			</div>
			<div className="right-nav">
				<button onClick={handleOpenCurrency}>{activeCurrency} ▼</button>
				<div className="selectCurrency">
					{isCurrencyMenuOpen &&
						currencies.map(({ id, currency }) => (
							<div
								key={id}
								className="currency"
								onClick={() => {
									dispatch({ type: id, payload: currency })
									setMenuCurrencyMenuOpen(false)
									localStorage.setItem('active-currency', currency)
									window.location.reload()
								}}
							>
								{currency}
							</div>
						))}
				</div>
				<button onClick={handleOpenCart}>
					Cart
					{data > 0 && <span>{data}</span>}
				</button>
				{isCartOpen && (
					<div className="cart">
						<button>
							<NavLink activeclassname="active" to="/cart">
								Cart
							</NavLink>
						</button>
					</div>
				)}
			</div>
		</nav>
	)
}
