import React from 'react'

const SingleLink = ({ id, data, onChange, onDelete }) => {
	return (
		<>
			<input onChange={(e) => onChange(e, id)} type="text" placeholder="Name" />
			<input onChange={(e) => onChange(e, id)} type="text" placeholder="Url" />
			<button onClick={() => onDelete(id)}>Delete</button>
		</>
	)
}

export default SingleLink
