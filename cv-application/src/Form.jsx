import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Form = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		dateOfBirth: '',
		placeOfBirth: '',
		personalDescription: '',
		phone: '',
		email: '',
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
	const handlePersonalDataChange = (e) => {
		const { name, value } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}
	return (
		<>
			<form onSubmit={(e) => handleSubmit(e)}>
				<h2>Personal Info</h2>
				<input name="firstName" type="text" onChange={(e) => handlePersonalDataChange(e)} value={formData.firstName} placeholder="first name" />
				<input name="lastName" type="text" onChange={(e) => handlePersonalDataChange(e)} value={formData.lastName} />
				<input name="dateOfBirth" type="date" onChange={(e) => handlePersonalDataChange(e)} value={formData.dateOfBirth} />
				<input name="placeOfBirth" type="text" onChange={(e) => handlePersonalDataChange(e)} value={formData.placeOfBirth} />
				<textarea name="personalDescription" onChange={(e) => handlePersonalDataChange(e)} value={formData.personalDescription}></textarea>
				<button type="submit">Confirm</button>
			</form>
			<form onSubmit={(e) => handleSubmit(e)}>
				<h2>Contact Info</h2>
				<input name="phone" type="number" onChange={(e) => handlePersonalDataChange(e)} value={formData.phone} />
				<input type="email" name="email" onChange={(e) => handlePersonalDataChange(e)} value={formData.email} />
				<button type="submit">Confirm</button>
			</form>
			<p>{formData.firstName}</p>

			<form onSubmit={(e) => handleSubmit(e)}>
				<h2>Work Experience</h2>
				<input min="1900" max="2099" type="number" />
				<input min="1900" max="2099" type="number" />
				<input type="text" value="job title" />
				<input type="text" value="company name" />
				<textarea name="" id="" cols="30" rows="10" value="description"></textarea>
				<button type="submit">Confirm</button>
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
