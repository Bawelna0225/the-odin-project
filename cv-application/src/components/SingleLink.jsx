import React from 'react'

const SingleLink = ({ id, data, onChange, onDelete }) => {
	return (
		<>
			<input onChange={(e) => onChange(e, id)} name="name" type="text" placeholder="Name" value={data.name} />
			<input onChange={(e) => onChange(e, id)} name="url" type="text" placeholder="Url" value={data.url} />
			<button className='delete' onClick={() => onDelete(id)}>Delete</button>
		</>
	)
}

export default SingleLink
