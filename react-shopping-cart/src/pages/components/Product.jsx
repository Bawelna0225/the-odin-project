const Product = ({ ...data }) => {
	let currency = data.currency.currency
	let icon, kurs
	switch (currency) {
		case '£':
			kurs = Math.round(data.price * 0.85 * 100) / 100
			icon = '£'
			break
		case '€':
			kurs = Math.round(data.price * 0.99 * 100) / 100
			icon = '€'
			break
		default:
			kurs = data.price
			icon = '$'
			break
	}
	return (
		<div className="product">
			<img src={data.img} alt="" />
			<div className="description">
				<h1>{data.name}</h1>
				<h3>
					{icon} {kurs}
				</h3>
			</div>
		</div>
	)
}

export default Product
