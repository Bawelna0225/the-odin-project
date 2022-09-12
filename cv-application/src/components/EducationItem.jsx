import React from 'react'

const EducationItem = ({ id, item, onChange, onDelete }) => {
	return (
		<>
			<input onChange={(e) => onChange(e, id)} type="text" name="startDate" placeholder="Start Date (mm.yyyy)" value={item.startDate}></input>
            <input onChange={(e) => onChange(e, id)} type="text" name="endDate" placeholder="Ending Date (mm.yyyy)" value={item.endDate}></input>
            <input onChange={(e) => onChange(e, id)} type="text" name="degree" placeholder="Degree (ex. Bachelor, Master)" value={item.degree}></input>
            <input onChange={(e) => onChange(e, id)} type="text" name="field" placeholder="Field (ex. IT)" value={item.field}></input>
            <input onChange={(e) => onChange(e, id)} type="text" name="university" placeholder="University" value={item.university}></input>
			<button onClick={() => onDelete(id)}>Delete</button>
		</>
	)
}

export default EducationItem