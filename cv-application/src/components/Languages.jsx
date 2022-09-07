import React from 'react'
import SingleLanguage from './SingleLanguage'

export const Languages = ({ language, onChange, onAdd, onDelete }) => {
	const languages = [...language.languages].map((language) => <SingleLanguage key={language.id} id={language.id} language={language} onChange={onChange} onAdd={onAdd} onDelete={onDelete} />)
	return (
		<>
			{languages}
			<button onClick={onAdd}>Add More Languages</button>
		</>
	)
}
