import React from 'react'

const ExperienceItem = ({ id, item, onChange, onDelete }) => {
	return (
		<>
			<input onChange={(e) => onChange(e, id)} type="text" name="startDate" placeholder="Start Date (mm.yyyy)" value={item.startDate}></input>
            <input onChange={(e) => onChange(e, id)} type="text" name="endDate" placeholder="Ending Date (mm.yyyy)" value={item.endDate}></input>
            <input onChange={(e) => onChange(e, id)} type="text" name="jobPosition" placeholder="Position" value={item.jobPosition}></input>
            <input onChange={(e) => onChange(e, id)} type="text" name="companyName" placeholder="Company Name" value={item.companyName}></input>
            <textarea onChange={(e) => onChange(e, id)} type="text" name="workDescription" placeholder="Description" value={item.workDescription}></textarea>
			<button className='delete' onClick={() => onDelete(id)}>Delete</button>
		</>
	)
}

export default ExperienceItem
