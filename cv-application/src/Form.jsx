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
		<div className='forms'>
			<PersonalInfoForm handlePersonalDataChange={handlePersonalDataChange} personalData={personalData} />
			<form onSubmit={(e) => handleAddExperience(e)}>
				<h2>Work Experience</h2>
				<input min="1900" max="2099" name="startDate" type="number" onChange={(e) => handleExperienceChange(e)} value={experienceData.startDate} placeholder="Start Date" />
				<input min="1900" max="2099" type="number" name="endDate" onChange={(e) => handleExperienceChange(e)} value={experienceData.endDate} placeholder="Ending Date" />
				<input type="text" name="jobPosition" onChange={(e) => handleExperienceChange(e)} value={experienceData.jobPosition} placeholder="Position" />
				<input type="text" name="companyName" onChange={(e) => handleExperienceChange(e)} value={experienceData.companyName} placeholder="Company Name" />
				<textarea name="workDescription" onChange={(e) => handleExperienceChange(e)} value={experienceData.workDescription} placeholder="Description"></textarea>
				<button type="submit">Add More Experience</button>
			</form>

			<form onSubmit={() => handleSubmit()}>
				<h2>Education</h2>
				<input min="1900" max="2099" type="number" placeholder="Start Date" />
				<input min="1900" max="2099" type="number" placeholder="Ending Date" />
				<input type="text" value="" placeholder="University" />
				<input type="text" value="" placeholder="Degree (ex. Bachelor, Master)" />
				<input type="text" value="" placeholder="Field (ex. IT)" />
				<button type="submit">Add More Education</button>
			</form>
			<form onSubmit={() => handleSubmit()}>
				<h2>Languages</h2>
				<input type="text" value="" placeholder="Language" />
				<select>
					<option value="a1">A1</option>
					<option value="a2">A2</option>
					<option value="a1">B1</option>
					<option value="a2">B2</option>
					<option value="a1">C1</option>
					<option value="a2">C2</option>
				</select>
				<button type="submit">Add More Languages</button>
			</form>
			<form onSubmit={() => handleSubmit()}>
				<h2>Skills</h2>
				<input type="text" value="" placeholder="Skill" />
				<button type="submit">Confirm</button>
			</form>
			<form onSubmit={() => handleSubmit()}>
				<h2>Certificates</h2>
				<input type="text" value="" placeholder="When Issued" />
				<input type="text" value="" placeholder="Certificate Name" />
				<input type="text" value="" placeholder="Certifying Organization" />
				<button type="submit">Add More</button>
			</form>
			<form onSubmit={() => handleSubmit()}>
				<h2>Hobby</h2>
				<input type="text" value="" placeholder="Hobby" />
				<button type="submit">Confirm</button>
			</form>
			<form onSubmit={(e) => handleSubmit(e)}>
				<h2>Links</h2>
				<input type="text" placeholder="Name" />
				<input type="text" placeholder="Url" />
				<button type="submit">Confirm</button>
			</form>
		</div>
	)
}

export default Form
