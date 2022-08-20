import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Product from './components/Product'

export const Products = () => {
	const items = [
		{
			id: 1,
			name: 'Product-1',
			price: 9.99,
			img: 'https://picsum.photos/360/500',
		},
		{
			id: 2,
			name: 'Product-2',
			price: 5.99,
			img: 'https://picsum.photos/361/500',
		},
		{
			id: 3,
			name: 'Product-3',
			price: 19.99,
			img: 'https://picsum.photos/361/502',
		},
		{
			id: 4,
			name: 'Product-4',
			price: 1.99,
			img: 'https://picsum.photos/361/503',
		},
		{
			id: 5,
			name: 'Product-5',
			price: 14.99,
			img: 'https://picsum.photos/361/500',
		},
	]
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
