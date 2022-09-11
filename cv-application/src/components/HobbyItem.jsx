import React from 'react'

const HobbyItem = ({ hobby, handleDeleteHobby }) => {
	// const random = (max) => {
	// 	return Math.floor(Math.random() * max)
	// }
	return (
		<div
			className="tag"
			// style={{ backgroundColor: `rgb(${random(200)},${random(200)},${random(200)})` }}
		>
			<span className="text">{hobby}</span>
			<span onClick={() => handleDeleteHobby(hobby)} className="delete-tag">
				&times;
			</span>
		</div>
	)
}

export default HobbyItem
