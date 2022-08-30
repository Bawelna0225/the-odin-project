import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'

const SingleProduct = ({ handleAddToCart, currency }) => {
	const location = useLocation()
	const {
		item: { id, name, price, img, sizes, colors },
	} = location.state
	const [activeSize, setActiveSize] = useState(sizes[0])
	const [activeColor, setActiveColor] = useState(colors[0])
	let displayedPrice
	switch (currency) {
		case '£':
			displayedPrice = Math.round(price * 0.85 * 100) / 100
			break
		case '€':
			displayedPrice = Math.round(price * 0.99 * 100) / 100
			break
		default:
			displayedPrice = price
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
			<Link to="/products">
				<button className="goBackBtn">Go Back</button>
			</Link>
			<div className="single-product-wrapper">
				<div className="product-image">
					<img src={img} alt="" />
				</div>
				<div className="right-panel">
					<h2>{name}</h2>
					<h4>
						Price: {currency} {displayedPrice}
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
						className='add-to-cart'
						onClick={(btn) => {
							btn.preventDefault()
							handleAddToCart(id, name, price, img, activeSize, activeColor)
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
