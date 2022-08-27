import React, { useState, useEffect, useCallback } from 'react'

export const Cart = ({ cartQuantity, itemsInCart, currency, setAmountInCart, setCart }) => {
	const [total, setTotal] = useState(0)
	let displayedTotal
	useEffect(() => {
		let price = 0
		itemsInCart.forEach((item) => (price += item.quantity * item.price))
		setTotal(price)
	}, [cartQuantity])

	const handleQuantityDecrease = (item) => {
		if (item.quantity === 0) return
		item.quantity -= 1
		setAmountInCart(cartQuantity - 1)
	}
	const handleQuantityIncrease = (item) => {
		item.quantity += 1
		setAmountInCart(cartQuantity + 1)
	}
	const handleDelete = (item) => {
		setAmountInCart(cartQuantity - item.quantity)
		let newCart = itemsInCart.filter((e) => e !== item)
		handleCartChange(newCart)
	}
	const handleCartChange = useCallback((newCart) => setCart(newCart))
	return (
		<>
			<div className="cart-section">
				{itemsInCart.map((item) => {
					if (item.quantity === 0) return handleDelete(item)
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
										<button onClick={() => handleQuantityDecrease(item)}>-</button>
										<span>{item.quantity}</span>
										<button onClick={() => handleQuantityIncrease(item)}>+</button>
									</div>
								</div>
							</div>
						</div>
					)
				})}
				{cartQuantity > 0 ? (
					<>
						<span style={{ placeSelf: 'center' }}>
							Total: {currency === '£' ? (displayedTotal = Math.round(total * 0.85 * 100) / 100).toFixed(2) : currency === '€' ? (displayedTotal = Math.round(total * 0.99 * 100) / 100).toFixed(2) : (displayedTotal = total).toFixed(2)} {currency}
						</span>
					</>
				) : (
					<p>Your Cart is Empty</p>
				)}
			</div>
		</>
	)
}
