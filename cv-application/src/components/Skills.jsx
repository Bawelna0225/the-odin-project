import React from 'react'
import SingleSkill from './SingleSkill'

export const Skills = ({ skills, handleAddSkill, handleDeleteSkill }) => {
	const displaySkills = [...skills.skills].map((skill) => <SingleSkill key={skill} skill={skill} handleDeleteSkill={handleDeleteSkill} />)
	return (
		<div className="tags-container">
			{displaySkills}
			<input onKeyDown={handleAddSkill} type="text" placeholder="Type Skill and Press Enter" />
		</div>
	)
}
