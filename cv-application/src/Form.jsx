import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { PersonalInfoForm } from './components/PersonalInfoForm'

const Form = () => {
	const [personalData, setPersonalData] = useState({
		firstName: '',
		lastName: '',
		dateOfBirth: '',
		placeOfBirth: '',
		personalDescription: '',
		phone: '',
		email: '',
	})
	const [experienceData, setExperienceData] = useState([
		{
			id: uuidv4(),
			startDate: '',
			endDate: '',
			jobPosition: '',
			companyName: '',
			workDescription: '',
		},
	])
	const [educationData, setEducationData] = useState({
		education: [
			{
				id: uuidv4(),
				startDate: '',
				endDate: '',
				degree: '',
				field: '',
				university: '',
			},
		],
	})
	const [formData, setFormData] = useState({
		languages: [
			{
				languageName: '',
				level: '',
			},
		],
		skills: [],
		certifications: [
			{
				date: '',
				name: '',
				organization: '',
			},
		],
		hobbies: [],
		links: [
			{
				name: '',
				url: '',
			},
		],
	})
	const handleSubmit = (e) => {
		e.preventDefault()
	}
	const handleAddExperience = (e) => {
		e.preventDefault()
	}
	const handlePersonalDataChange = (e) => {
		const { name, value } = e.target
		setPersonalData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}
	const handleExperienceChange = (e) => {
		const { name, value } = e.target
		setExperienceData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}
	return (
		<>
			<PersonalInfoForm handlePersonalDataChange={handlePersonalDataChange} personalData={personalData} />
			<form onSubmit={(e) => handleAddExperience(e)}>
				<h2>Work Experience</h2>
				<input min="1900" max="2099" name="startDate" type="number" onChange={(e) => handleExperienceChange(e)} value={experienceData.startDate} />
				<input min="1900" max="2099" type="number" name="endDate" onChange={(e) => handleExperienceChange(e)} value={experienceData.endDate} />
				<input type="text" name="jobPosition" onChange={(e) => handleExperienceChange(e)} value={experienceData.jobPosition} />
				<input type="text" name="companyName" onChange={(e) => handleExperienceChange(e)} value={experienceData.companyName} />
				<textarea name="workDescription" id="" cols="30" rows="10" onChange={(e) => handleExperienceChange(e)} value={experienceData.workDescription}></textarea>
				<button type="submit">Add Experience</button>
			</form>
			{/* 
			<form onSubmit={() => handleSubmit()}>
				<h2>Education</h2>
				<input min="1900" max="2099" type="number" />
				<input min="1900" max="2099" type="number" />
				<input type="text" value="University" />
				<input type="text" value="degree" />
				<input type="text" value="field" />
				<button type="submit">Confirm</button>
			</form>
			<form onSubmit={() => handleSubmit()}>
				<h2>Languages</h2>
				<input type="text" value="language" />
				<select>
					<option value="a1">A1</option>
					<option value="a2">A2</option>
					<option value="a1">B1</option>
					<option value="a2">B2</option>
					<option value="a1">C1</option>
					<option value="a2">C2</option>
				</select>
				<button type="submit">Confirm</button>
			</form>
			<form onSubmit={() => handleSubmit()}>
				<h2>Skills</h2>
				<input type="text" value="skill" />
				<button type="submit">Confirm</button>
			</form>
			<form onSubmit={() => handleSubmit()}>
				<h2>Certificates</h2>
				<input type="text" value="when issued" />
				<input type="text" value="name of certification" />
				<input type="text" value="certifying organization" />
				<button type="submit">Confirm</button>
			</form>
			<form onSubmit={() => handleSubmit()}>
				<h2>Hobby</h2>
				<input type="text" value="hobby" />
				<button type="submit">Confirm</button>
			</form> */}
			<form onSubmit={(e) => handleSubmit(e)}>
				<h2>Links</h2>
				<input type="text" />
				<input type="text" />
				<button type="submit">Confirm</button>
			</form>
		</>
	)
}

export default Form
