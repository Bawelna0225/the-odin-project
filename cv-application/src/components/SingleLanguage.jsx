import React from 'react'

const SingleLanguage = ({ id, language, onChange, onDelete }) => {

	return (
		<>
			<input type="text" name="languageName" placeholder="Language" onChange={(e) => onChange(e, id)}  value={language.languageName} />
			<select name="level" onChange={(e) => onChange(e, id)}>
				<option value="">- Select Level -</option>
				<option value="A1">A1</option>
				<option value="A2">A2</option>
				<option value="B1">B1</option>
				<option value="B2">B2</option>
				<option value="C1">C1</option>
				<option value="C2">C2</option>
			</select>
			<button className='delete' onClick={() => onDelete(id)}>Delete</button>
		</>
	)
}

export default SingleLanguage
