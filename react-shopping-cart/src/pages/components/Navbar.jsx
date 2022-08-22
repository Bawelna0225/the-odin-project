import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'

export const Navbar = ({ cartQuantity, itemsInCart, handleChangeCurrency, currency }) => {
	const currencies = [
		{ id: 1, currency: '$' },
		{ id: 2, currency: '£' },
		{ id: 3, currency: '€' },
	]
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
	// const activeCurrency = localStorage.getItem('active-currency')
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
				<button onClick={handleOpenCurrency}>{currency} ▼</button>
				<div className="selectCurrency">
					{isCurrencyMenuOpen &&
						currencies.map(({ id, currency }) => (
							<div
								key={id}
								className="currency"
								onClick={() => {
									setMenuCurrencyMenuOpen(false)
									handleChangeCurrency(currency)
								}}
							>
								{currency}
							</div>
						))}
				</div>
				<button onClick={handleOpenCart}>
					Cart
					{cartQuantity > 0 && <span>{cartQuantity}</span>}
				</button>
				{isCartOpen && (
					<div className="cart">
						{itemsInCart.map((item) => {
							return (
								<div className="item-in-cart">
									<img src={item.img} alt="" />
									<div className="info">
										<div className="top">
											<p>{item.name}</p>
											<p className="price">
												{currency} {item.price}
											</p>
										</div>
										<div className="bottom">
											<span>{item.size}</span>
											<span>{item.color}</span>
											<div className="controls">
												<button>-</button>
												<span>{item.quantity}</span>
												<button>+</button>
											</div>
										</div>
									</div>
								</div>
							)
						})}

						<button className="checkout">
							<NavLink activeclassname="active" to="/cart">
								Go to Checkout
							</NavLink>
						</button>
					</div>
				)}
			</div>
		</nav>
	)
}
