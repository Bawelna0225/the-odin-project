const Product = ({ ...data }) => {
	let currency = data.currency.currency

	let displayedPrice
	switch (currency) {
		case '£':
			displayedPrice = Math.round(data.price * 0.85 * 100) / 100
			break
		case '€':
			displayedPrice = Math.round(data.price * 0.99 * 100) / 100
			break
		default:
			displayedPrice = data.price
			break
	}
	return (
		<div className="product">
			<img src={data.img} alt="" />
			<div className="description">
				<h1>{data.name}</h1>
				<h3>
					{currency} {displayedPrice}
				</h3>
			</div>
		</div>
	)
}

export default Product
