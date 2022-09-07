import React from 'react'

const SingleLanguage = ({ id, language, onChange, onDelete }) => {

	return (
		<>
			<input type="text" name="languageName" placeholder="Language" onChange={(e) => onChange(e, id)}  value={language.languageName} />
			<select name="level">
				<option value="a1">A1</option>
				<option value="a2">A2</option>
				<option value="a1">B1</option>
				<option value="a2">B2</option>
				<option value="a1">C1</option>
				<option value="a2">C2</option>
			</select>
			<button onClick={() => onDelete(id)}>Delete</button>
		</>
	)
}

export default SingleLanguage
