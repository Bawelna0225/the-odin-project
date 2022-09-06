import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ExperienceInfoForm } from './components/ExperienceInfoForm'
import { EducationInfoForm } from './components/EducationInfoForm'
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
	const [experienceData, setExperienceData] = useState({
		experience: [
			{
				id: uuidv4(),
				startDate: '',
				endDate: '',
				jobPosition: '',
				companyName: '',
				workDescription: '',
			},
		],
	})
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
	const handlePersonalDataChange = (e) => {
		const { name, value } = e.target
		setPersonalData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}
	// Experience
	const handleExperienceChange = (e, id) => {
		const { name, value } = e.target

		setExperienceData((prevState) => {
			const newExperience = prevState.experience.map((experienceItem) => {
				if (experienceItem.id === id) {
					return { ...experienceItem, [name]: value }
				}
				return experienceItem
			})
			return { ...prevState, experience: [...newExperience] }
		})
	}
	const handleAddExperience = () => {
		setExperienceData((prevState) => ({
			...prevState,
			experience: [
				...prevState.experience,
				{
					id: uuidv4(),
					startDate: '',
					endDate: '',
					jobPosition: '',
					companyName: '',
					workDescription: '',
				},
			],
		}))
	}
	const handleDeleteExperience = (id) => {
		setExperienceData((prevState) => {
			const newExperience = prevState.experience.filter((experienceItem) => experienceItem.id !== id)
			return { ...prevState, experience: [...newExperience] }
		})
	}
	// Education
	const handleEducationChange = (e, id) => {
		const { name, value } = e.target

		setEducationData((prevState) => {
			const newEducation = prevState.education.map((educationItem) => {
				if (educationItem.id === id) {
					return { ...educationItem, [name]: value }
				}
				return educationItem
			})
			return { ...prevState, education: [...newEducation] }
		})
	}
	const handleAddEducation = () => {
		setEducationData((prevState) => ({
			...prevState,
			education: [
				...prevState.education,
				{
					id: uuidv4(),
					startDate: '',
					endDate: '',
					degree: '',
					field: '',
					university: '',
				},
			],
		}))
	}
	const handleDeleteEducation = (id) => {
		setEducationData((prevState) => {
			const newEducation = prevState.education.filter((educationItem) => educationItem.id !== id)
			return { ...prevState, education: [...newEducation] }
		})
	}
	return (
		<div className="forms">
			<PersonalInfoForm handlePersonalDataChange={handlePersonalDataChange} personalData={personalData} />
			<div className="form">
				<h2>Work Experience</h2>
				<ExperienceInfoForm experience={experienceData} onChange={handleExperienceChange} onAdd={handleAddExperience} onDelete={handleDeleteExperience} />
			</div>
			<div className="form">
				<h2>Education</h2>
				<EducationInfoForm education={educationData} onChange={handleEducationChange} onAdd={handleAddEducation} onDelete={handleDeleteEducation} />
			</div>

			{/* <form onSubmit={() => handleSubmit()}>
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
			</form> */}
		</div>
	)
}

export default Form
