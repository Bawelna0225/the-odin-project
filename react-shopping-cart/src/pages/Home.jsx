import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import bigImg from '../images/bigimg.jpg'

const Home = () => {
	return (
		<>
			<section id="home">
				<img src={bigImg} alt="" />
				<div>
					<h1>Lorem ipsum dolor sit amet.</h1>
					<Link to="/products">
						<button>Shop Now</button>
					</Link>
				</div>
			</section>
			<section id="clients-recommendation">
				<h1> Our Customers Reviews</h1>
				<div className="reviews">
					<div className="card">
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, corporis doloremque asperiores eligendi labore corrupti nesciunt atque commodi a nostrum.</p>
						<img src="https://picsum.photos/61/60" alt="" />
						<span>John Smith</span>
						<div className="rating">
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
						</div>
					</div>
					<div className="card">
						{' '}
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor praesentium voluptatum minima quidem consectetur tempora placeat nemo?!</p>
						<img src="https://picsum.photos/60/60" alt="" />
						<span>Jane Doe</span>
						<div className="rating">
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
						</div>
					</div>
					<div className="card">
						{' '}
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, inventore dolore molestiae autem nesciunt minus in maxime labore. Tempore, placeat?</p>
						<img src="https://picsum.photos/62/60" alt="" />
						<span>John Doe</span>
						<div className="rating">
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Home
