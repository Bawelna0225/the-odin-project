import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { PersonalInfoForm } from './components/PersonalInfoForm'
import { ExperienceInfoForm } from './components/ExperienceInfoForm'
import { EducationInfoForm } from './components/EducationInfoForm'
import { Languages } from './components/Languages'
import { Certificates } from './components/Certificates'
import { Links } from './components/Links'

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
	// Languages
	const handleLanguageChange = (e, id) => {
		const { name, value } = e.target

		setFormData((prevState) => {
			const newLanguages = prevState.languages.map((language) => {
				if (language.id === id) {
					return { ...language, [name]: value }
				}
				return language
			})
			return { ...prevState, languages: [...newLanguages] }
		})
	}
	const handleAddLanguage = () => {
		setFormData((prevState) => ({
			...prevState,
			languages: [
				...prevState.languages,
				{
					id: uuidv4(),
					languageName: '',
					level: '',
				},
			],
		}))
	}
	const handleDeleteLanguage = (id) => {
		setFormData((prevState) => {
			const newLanguages = prevState.languages.filter((language) => language.id !== id)
			return { ...prevState, languages: [...newLanguages] }
		})
	}
	// Certificates
	const handleCertificateChange = (e, id) => {
		const { name, value } = e.target

		setFormData((prevState) => {
			const newCertificates = prevState.certifications.map((certificate) => {
				if (certificate.id === id) {
					return { ...certificate, [name]: value }
				}
				return certificate
			})
			return { ...prevState, certifications: [...newCertificates] }
		})
	}
	const handleAddCertificate = () => {
		setFormData((prevState) => ({
			...prevState,
			certifications: [
				...prevState.certifications,
				{
					id: uuidv4(),
					date: '',
					name: '',
					organization: '',
				},
			],
		}))
	}
	const handleDeleteCertificate = (id) => {
		setFormData((prevState) => {
			const newCertificates = prevState.certifications.filter((certificate) => certificate.id !== id)
			return { ...prevState, certifications: [...newCertificates] }
		})
	}
	// Links
	const handleLinkChange = (e, id) => {
		const { name, value } = e.target

		setFormData((prevState) => {
			const newLinks = prevState.links.map((link) => {
				if (link.id === id) {
					return { ...link, [name]: value }
				}
				return link
			})
			return { ...prevState, links: [...newLinks] }
		})
	}
	const handleAddLink = () => {
		setFormData((prevState) => ({
			...prevState,
			links: [
				...prevState.links,
				{
					id: uuidv4(),
					name: '',
					url: '',
				},
			],
		}))
	}
	const handleDeleteLink = (id) => {
		setFormData((prevState) => {
			const newLinks = prevState.links.filter((link) => link.id !== id)
			return { ...prevState, links: [...newLinks] }
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
			<div className="form">
				<h2>Languages</h2>
				<Languages language={formData} onChange={handleLanguageChange} onAdd={handleAddLanguage} onDelete={handleDeleteLanguage} />
			</div>
			<div className="form">
				<h2>Skills</h2>
				<textarea name="skills" placeholder='Add Skills separated by ","'></textarea>
			</div>
			<div className="form">
				<h2>Certificates</h2>
				<Certificates certificate={formData} onChange={handleCertificateChange} onAdd={handleAddCertificate} onDelete={handleDeleteCertificate} />
			</div>
			<div className="form">
				<h2>Hobby</h2>
				<textarea name="hobby" placeholder='Add Hobbies separated by ","'></textarea>
			</div>
			<div className="form">
				<h2>Links</h2>
				<Links data={formData} onChange={handleLinkChange} onAdd={handleAddLink} onDelete={handleDeleteLink} />
			</div>
		</div>
	)
}

export default Form
