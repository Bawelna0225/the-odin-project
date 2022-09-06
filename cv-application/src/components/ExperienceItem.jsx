import React from 'react'

const ExperienceItem = ({ id, item, onChange, onDelete }) => {
	return (
		<>
			<input onChange={(e) => onChange(e, id)} min='1900' max='2100' type="number" name="startDate" placeholder="Start Date" value={item.startDate}></input>
            <input onChange={(e) => onChange(e, id)} min='1900' max='2100' type="number" name="endDate" placeholder="Ending Date" value={item.endDate}></input>
            <input onChange={(e) => onChange(e, id)} type="text" name="jobPosition" placeholder="Position" value={item.jobPosition}></input>
            <input onChange={(e) => onChange(e, id)} type="text" name="companyName" placeholder="Company Name" value={item.companyName}></input>
            <textarea onChange={(e) => onChange(e, id)} type="text" name="workDescription" placeholder="Description" value={item.workDescription}></textarea>
			<button onClick={() => onDelete(id)}>Delete</button>
		</>
	)
}

export default ExperienceItem
