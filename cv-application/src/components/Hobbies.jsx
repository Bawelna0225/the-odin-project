import React from 'react'
import HobbyItem from './HobbyItem'

export const Hobbies = ({ hobbies, handleAddHobby, handleDeleteHobby }) => {
	const displayHobbies = [...hobbies.hobbies].map((hobby) => <HobbyItem key={hobby} hobby={hobby} handleDeleteHobby={handleDeleteHobby} />)
	return (
		<div className="tags-container hobbies">
			{displayHobbies}
			<input onKeyDown={handleAddHobby} type="text" placeholder="Type Hobby and Press Enter" />
		</div>
	)
}
