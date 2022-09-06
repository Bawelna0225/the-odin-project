import React from 'react'
import ExperienceItem from './ExperienceItem'

export const ExperienceInfoForm = ({ experience, onChange, onAdd, onDelete }) => {
	const experienceItems = [...experience.experience].map((experienceItem) => (
      <ExperienceItem 
        key={experienceItem.id} 
        id={experienceItem.id} 
        item={experienceItem} 
        onChange={onChange} 
        onAdd={onAdd} 
        onDelete={onDelete} 
      />
    ))
	return (
		<>
			{experienceItems}
			<button onClick={onAdd}>Add More Experience</button>
		</>
	)
}
