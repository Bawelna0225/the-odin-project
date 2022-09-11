import React from 'react'
import SingleLink from './SingleLink'

export const Links = ({ data, onChange, onAdd, onDelete }) => {
	const links = [...data.links].map((link) => <SingleLink key={link.id} id={link.id} data={link} onChange={onChange} onAdd={onAdd} onDelete={onDelete} />)
	return (
		<>
			{links}
			<button onClick={onAdd}>Add More Links</button>
		</>
	)
}
