import React from 'react'

const HobbyItem = ({hobby, handleDeleteHobby}) => {
  return (
    <div className="tag">
			<span className="text">{hobby}</span>
			<span onClick={() => handleDeleteHobby(hobby)} className="delete-tag">
				&times;
			</span>
		</div>
  )
}

export default HobbyItem