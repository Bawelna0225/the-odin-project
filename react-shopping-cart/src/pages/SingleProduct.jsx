import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'

const SingleProduct = ({ handleAddToCart, currency }) => {
	const location = useLocation()
	const {
		item: { id, name, price, img, sizes, colors },
	} = location.state
	const [activeSize, setActiveSize] = useState(sizes[0])
	const [activeColor, setActiveColor] = useState(colors[0])
	let cost, currencyIcon
	switch (currency) {
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

	const handleChangeChosenSize = (e) => {
		setActiveSize(e.target.value)
	}
	const handleChangeChosenColor = (e) => {
		setActiveColor(e.target.value)
	}
	return (
		<section>
			<button className="goBackBtn">
				<Link to="/products">Go Back</Link>
			</button>
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
