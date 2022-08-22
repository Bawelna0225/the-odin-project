import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import React, { useState } from 'react'
import Home from './pages/Home'
import { Cart } from './pages/Cart'
import { Products } from './pages/Products'
import Product from './pages/components/Product'
import { Navbar } from './pages/components/Navbar'
import SingleProduct from './pages/SingleProduct'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

function App() {
	const [cart, setCart] = useState([])
	const [amountInCart, setAmountInCart] = useState(0)
	const handleAddToCart = (id, name, price, img, activeSize, activeColor) => {
		let isInCart = false
		if (cart.length > 0)
		cart.forEach((item) => {
			if (item.size === activeSize && item.productId === id && item.color === activeColor) {
				item.quantity += 1
				setAmountInCart(amountInCart + 1)
				isInCart = true
			}
		})
		if (!isInCart) {
			setCart([...cart, { productId: id, name: name, price: price, img: img, size: activeSize, color: activeColor, quantity: 1 }])
			setAmountInCart(amountInCart + 1)
		}
	}
	return (
		<div className="App">
			<BrowserRouter history={history}>
				<Navbar cartQuantity={amountInCart} itemsInCart={cart}/>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="products">
							<Route index element={<Products />} />
							<Route path=":productId" element={<SingleProduct handleAddToCart={handleAddToCart} />} />
						</Route>
						<Route path="cart" element={<Cart />} />
					</Route>
					<Route path="*" element={<Home />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
