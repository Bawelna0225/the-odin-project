import React from 'react'

const SingleCertificate = ({ id, onChange, onDelete }) => {
	return (
		<>
			<input type="text" name='' value="" placeholder="When Issued" />
			<input type="text" name='' value="" placeholder="Certificate Name" />
			<input type="text" name='' value="" placeholder="Certifying Organization" />
			<button onClick={() => onDelete(id)}>Delete</button>
		</>
	)
}

export default SingleCertificate
