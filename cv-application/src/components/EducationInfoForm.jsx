import React from 'react'
import EducationItem from './EducationItem'

export const EducationInfoForm = ({ education, onChange, onAdd, onDelete }) => {
	const educationItems = [...education.education].map((educationItem) => (
      <EducationItem 
        key={educationItem.id} 
        id={educationItem.id} 
        item={educationItem} 
        onChange={onChange} 
        onAdd={onAdd} 
        onDelete={onDelete} 
      />
    ))
	return (
		<>
			{educationItems}
			<button onClick={onAdd}>Add More education</button>
		</>
	)
}


