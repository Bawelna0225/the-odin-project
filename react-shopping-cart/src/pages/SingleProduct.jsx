import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const SingleProduct = ({ handleAddToCart }) => {
	const location = useLocation()
	const {
		item: { id, name, price, img },
	} = location.state
	let [activeSize, setActiveSize] = useState('XS')
	let [activeColor, setActiveColor] = useState('red')
	const activeCurrency = localStorage.getItem('active-currency')
	let cost, currencyIcon
	switch (activeCurrency) {
		case '£':
			cost = Math.round(price * 0.85 * 100) / 100
			currencyIcon = '£'
			break
		case '€':
			cost = Math.round(price * 0.99 * 100) / 100
			currencyIcon = '€'
			break
		default:
			cost = price
			currencyIcon = '$'
			break
	}
	const sizes = ['XS', 'S', 'M', 'L', 'XL']
	const colors = ['red', 'blue', 'green', 'orange']
	const handleChangeChosenSize = (e) => {
		setActiveSize((activeSize = e.target.value))
	}
	const handleChangeChosenColor = (e) => {
		setActiveColor((activeColor = e.target.value))
	}
	return (
		<section>
			<div className="single-product-wrapper">
				<div className="product-image">
					<img src={img} alt="" />
				</div>
				<div className="right-panel">
					<h2>{name}</h2>
					<h4>
						Price: {currencyIcon} {cost}
					</h4>
					<div className="sizes">
						{sizes.map((button) => (
							<button key={button} value={button} className={activeSize == button ? 'active' : null} onClick={handleChangeChosenSize}>
								{button}
							</button>
						))}
					</div>
					<div className="colors">
						{colors.map((button) => (
							<button key={button} value={button} style={{ backgroundColor: button }} className={activeColor == button ? 'active' : null} onClick={handleChangeChosenColor}></button>
						))}
					</div>
					<button
						onClick={(btn) => {
							btn.preventDefault()
							handleAddToCart(id, name, cost, img, activeSize, activeColor)
						}}
					>
						Add To Cart
					</button>
				</div>
			</div>
		</section>
	)
}

export default SingleProduct
