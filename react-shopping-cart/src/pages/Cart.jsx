import React, { useState, useEffect, useCallback } from 'react'
import { BsTrash } from 'react-icons/bs'

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
			<section className="cart-section">
				{cartQuantity > 0 && (
					<>
						<p className="title">Image</p>
						<p className="title">Product</p>
						<p className="title">Price</p>
						<p className="title">Size</p>
						<p className="title">Color</p>
						<p className="title">Quantity</p>
						<p className="title"></p>
					</>
				)}

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
						<>
							<div className="item-in-cart">
								<img src={item.img} alt="" />
								<p>{item.name}</p>
								<p className="price">
									{currency} {displayedPrice}
								</p>
								<span className="size">{item.size}</span>
								<div className="color">
									<span style={{ backgroundColor: item.color, width: '30px', height: '30px' }}></span>
								</div>

								<div className="controls">
									<button onClick={() => handleQuantityDecrease(item)}>-</button>
									<span>{item.quantity}</span>
									<button onClick={() => handleQuantityIncrease(item)}>+</button>
								</div>
								<BsTrash className='trash' style={{ cursor: 'pointer' }} onClick={() => handleDelete(item)} />
							</div>
						</>
					)
				})}
				{cartQuantity > 0 ? (
					<>
						<div className="total" style={{ placeSelf: 'center' }}>
							<p>
								Total:{' '}
								<span>
									{currency === '£' ? (displayedTotal = Math.round(total * 0.85 * 100) / 100).toFixed(2) : currency === '€' ? (displayedTotal = Math.round(total * 0.99 * 100) / 100).toFixed(2) : (displayedTotal = total).toFixed(2)} {currency}
								</span>
							</p>
						</div>
					</>
				) : (
					<p className='empty-cart' style={{position: 'absolute', top: '0%', left: '50%', transform: 'translateX(-50%)'}}>Your Cart is Empty</p>
				)}
			</section>
		</>
	)
}
