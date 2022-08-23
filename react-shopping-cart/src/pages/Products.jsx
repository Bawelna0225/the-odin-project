import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Product from './components/Product'
import { items } from './data'
export const Products = (currency, cost) => {
	
	return (
		<div>
			<div className="container">
				{items.map((item) => (
					<Link as={NavLink} to={`${item.id}`} state={{ item: item }} currency={currency} cost={cost} key={item.id}>
						<Product img={item.img} name={item.name} price={item.price} currency={currency} cost={cost} height="220px" />
					</Link>
				))}
			</div>
		</div>
	)
}
