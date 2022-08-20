import { Link, NavLink } from 'react-router-dom'

const Product = ({ ...data }) => {
	const activeCurrency = localStorage.getItem('active-currency')
	let kurs
	switch (activeCurrency) {
		case '£':
			kurs = Math.round((data.price * 0.85) * 100) / 100
			break
		case '€':
			kurs = Math.round((data.price * 0.99) * 100) / 100
			
			break
		default:
			kurs = data.price
			break
	}
	return (
		<div className="product">
			<img src={data.img} alt="" />
			<div className="description">
				<h1>{data.name}</h1>
				<h3>
					{activeCurrency} {kurs}
				</h3>
			</div>
		</div>
	)
}

export default Product
