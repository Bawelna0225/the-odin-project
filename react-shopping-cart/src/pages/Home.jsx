import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'

const Home = () => {
	return (
		<>
			<section id="home">
				<img src="https://picsum.photos/1360/1300" alt="" />
				<div>
					<h1>Lorem ipsum dolor sit amet.</h1>
					<Link to="/products">
						<button>Shop Now</button>
					</Link>
				</div>
			</section>
			<section id="clients-recommendation">
				<h1>What Clients Say</h1>
				<div className="reviews">
					<div className="card">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor praesentium voluptatum minima quidem consectetur tempora placeat nemo?</p>
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
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor praesentium voluptatum minima quidem consectetur tempora placeat nemo?</p>
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
