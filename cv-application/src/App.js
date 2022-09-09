import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Form from './Form'
import { Preview } from './Preview'
import './styles/main.css'

function App() {
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
				id: uuidv4(),
				languageName: '',
				level: '',
			},
		],
		skills: [],
		certifications: [
			{
				id: uuidv4(),
				date: '',
				name: '',
				organization: '',
			},
		],
		hobbies: [],
		links: [
			{
				id: uuidv4(),
				name: '',
				url: '',
			},
		],
	})
	return (
		<div className="App">
			<Form formData={formData} setFormData={setFormData}/>
			<Preview />
		</div>
	)
}

export default App
