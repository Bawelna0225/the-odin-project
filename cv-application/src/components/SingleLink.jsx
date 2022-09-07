import React from 'react'

const SingleLink = ({ id, onChange, onDelete }) => {
	return (
		<>
			<input type="text" placeholder="Name" />
			<input type="text" placeholder="Url" />
			<button onClick={() => onDelete(id)}>Delete</button>
		</>
	)
}

export default SingleLink
