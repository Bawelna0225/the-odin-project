import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { PersonalInfoForm } from './components/PersonalInfoForm'
import { ExperienceInfoForm } from './components/ExperienceInfoForm'
import { EducationInfoForm } from './components/EducationInfoForm'
import { Languages } from './components/Languages'
import { Skills } from './components/Skills'
import { Certificates } from './components/Certificates'
import { Hobbies } from './components/Hobbies'
import { Links } from './components/Links'

const Form = ({ formData, setFormData }) => {
	const handlePersonalDataChange = (e) => {
		const { name, value } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}
	// Experience
	// Hobbies
	const handleExperienceChange = (e, id) => {
		const { name, value } = e.target

		setFormData((prevState) => {
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
		setFormData((prevState) => ({
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
		setFormData((prevState) => {
			const newExperience = prevState.experience.filter((experienceItem) => experienceItem.id !== id)
			return { ...prevState, experience: [...newExperience] }
		})
	}
	// Education
	const handleEducationChange = (e, id) => {
		const { name, value } = e.target

		setFormData((prevState) => {
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
		setFormData((prevState) => ({
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
		setFormData((prevState) => {
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
		console.log(formData.languages)
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
	// Skills
	const handleAddSkill = (e) => {
		if (e.key !== 'Enter') return
		const newSkill = e.target.value
		if (!newSkill.trim()) return // return if skill is empty value
		if (formData.skills.includes(newSkill)) return // return if skill already exists
		setFormData((prevState) => ({
			...prevState,
			skills: [...prevState.skills, newSkill],
		}))
		e.target.value = '' // Reset input value
	}
	const handleDeleteSkill = (skillName) => {
		setFormData((prevState) => {
			const newSkills = prevState.skills.filter((skill) => skill !== skillName)
			return { ...prevState, skills: [...newSkills] }
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
	// Hobbies
	const handleAddHobby = (e) => {
		if (e.key !== 'Enter') return
		const newHobby = e.target.value
		if (!newHobby.trim()) return
		if (formData.hobbies.includes(newHobby)) return
		setFormData((prevState) => ({
			...prevState,
			hobbies: [...prevState.hobbies, newHobby],
		}))
		e.target.value = ''
	}
	const handleDeleteHobby = (hobbyName) => {
		setFormData((prevState) => {
			const newHobbies = prevState.hobbies.filter((hobby) => hobby !== hobbyName)
			return { ...prevState, hobbies: [...newHobbies] }
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
			<PersonalInfoForm handlePersonalDataChange={handlePersonalDataChange} personalData={formData} />
			<div className="form">
				<h2>Work Experience</h2>
				<ExperienceInfoForm experience={formData} onChange={handleExperienceChange} onAdd={handleAddExperience} onDelete={handleDeleteExperience} />
			</div>
			<div className="form">
				<h2>Education</h2>
				<EducationInfoForm education={formData} onChange={handleEducationChange} onAdd={handleAddEducation} onDelete={handleDeleteEducation} />
			</div>
			<div className="form">
				<h2>Languages</h2>
				<Languages language={formData} onChange={handleLanguageChange} onAdd={handleAddLanguage} onDelete={handleDeleteLanguage} />
			</div>
			<div className="form">
				<h2>Skills</h2>
				<Skills skills={formData} handleDeleteSkill={handleDeleteSkill} handleAddSkill={handleAddSkill} />
			</div>
			<div className="form">
				<h2>Certificates</h2>
				<Certificates certificate={formData} onChange={handleCertificateChange} onAdd={handleAddCertificate} onDelete={handleDeleteCertificate} />
			</div>
			<div className="form">
				<h2>Hobby</h2>
				<Hobbies hobbies={formData} handleAddHobby={handleAddHobby} handleDeleteHobby={handleDeleteHobby} />
			</div>
			<div className="form">
				<h2>Links</h2>
				<Links data={formData} onChange={handleLinkChange} onAdd={handleAddLink} onDelete={handleDeleteLink} />
			</div>
		</div>
	)
}

export default Form
