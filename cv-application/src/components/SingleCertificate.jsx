import React from 'react'

const SingleCertificate = ({ id, certificate, onChange, onDelete }) => {
	return (
		<>
			<input onChange={(e) => onChange(e, id)} type="text" name="date" value={certificate.date} placeholder="When Issued (mm.yyyy)" />
			<input onChange={(e) => onChange(e, id)} type="text" name="name" value={certificate.name} placeholder="Certificate Name" />
			<input onChange={(e) => onChange(e, id)} type="text" name="organization" value={certificate.organization} placeholder="Certifying Organization" />
			<button onClick={() => onDelete(id)}>Delete</button>
		</>
	)
}

export default SingleCertificate
