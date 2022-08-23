import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import { BsCart3 } from 'react-icons/bs'
import { MdExpandMore } from 'react-icons/md'

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
				<button onClick={handleOpenCurrency}>
					{currency} <MdExpandMore style={{ fontSize: '1.4rem' }} />
				</button>
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
				<button className="cartBtn" onClick={handleOpenCart}>
					<BsCart3 style={{ fontSize: '1.4rem' }} />
					{cartQuantity > 0 && <span>{cartQuantity}</span>}
				</button>
				{isCartOpen && (
					<div className="cart">
						{itemsInCart.map((item) => {
							let displayedPrice
							switch (currency) {
								case '£':
									displayedPrice = Math.round(item.price * 0.85 * 100) / 100
									break
								case '€':
									displayedPrice = Math.round(item.price * 0.99 * 100) / 100
									break
								default:
									displayedPrice = item.price
									break
							}
							return (
								<div className="item-in-cart">
									<img src={item.img} alt="" />
									<div className="info">
										<div className="top">
											<p>{item.name}</p>
											<p className="price">
												{currency} {displayedPrice}
											</p>
										</div>
										<div className="bottom">
											<span>{item.size}</span>
											<span style={{ backgroundColor: item.color, width: '15px', height: '15px' }}></span>
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
						{itemsInCart.length > 0 ? (
							<button className="checkout">
								<NavLink activeclassname="active" to="/cart">
									Go to Checkout
								</NavLink>
							</button>
						) : (
							<p>Your Cart is Empty</p>
						)}
					</div>
				)}
			</div>
		</nav>
	)
}
