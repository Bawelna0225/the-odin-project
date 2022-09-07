import React from 'react'
import SingleLink from './SingleLink'

export const Links = ({ onAdd }) => {
	return (
		<>
			<SingleLink />
			<button onClick={onAdd}>Add More Languages</button>
		</>
	)
}
