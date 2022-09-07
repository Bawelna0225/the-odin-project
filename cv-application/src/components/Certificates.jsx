import React from 'react'
import SingleCertificate from './SingleCertificate'

export const Certificates = ({ certificate, onChange, onAdd, onDelete }) => {
		const certificationsItems = [...certificate.certifications].map((certificate) => (
		<SingleCertificate 
			key={certificate.id} 
			id={certificate.id} 
			certificate={certificate} 
			onChange={onChange} 
			onAdd={onAdd} 
			onDelete={onDelete} 
		/>
    ))
	return (
		<>
			{certificationsItems}
			<button onClick={onAdd}>Add More Certifications</button>
		</>
	)
}
