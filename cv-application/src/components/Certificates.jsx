import React from 'react'
import SingleCertificate from './SingleCertificate'

export const Certificates = ({ onAdd }) => {
	return (
		<>
			<SingleCertificate />
			<button onClick={onAdd}>Add More Certificates</button>
		</>
	)
}
