import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Product from './components/Product'
import { items } from './data'
export const Products = () => {
	return (
		<div>
			<div className="container">
				{items.map((item) => (
					<Link as={NavLink} to={`${item.id}`} state={{ item: item }} key={item.id}>
						<Product img={item.img} name={item.name} price={item.price} height="220px" />
					</Link>
				))}
			</div>
		</div>
	)
}
