import React from 'react'

const SingleSkill = ({ skill, handleDeleteSkill }) => {
	return (
		<div className="tag">
			<span className="text">{skill}</span>
			<span onClick={() => handleDeleteSkill(skill)} className="delete-tag">
				&times;
			</span>
		</div>
	)
}

export default SingleSkill
