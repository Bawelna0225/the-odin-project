import React from 'react'

export const Preview = ({ formData }) => {
	return (
		<div>
			<h2>Preview</h2>
			<div className="preview">
				{formData.firstName}
				{formData.lastName}
				{formData.dateOfBirth}
				{formData.placeOfBirth}
				{formData.personalDescription}
				{formData.phone}
				{formData.email}
				{formData.experience.length > 0 && (
					<>
						<p>Experience</p>
						{formData.experience.map((experienceItem) => {
							return (
								<>
									{experienceItem.startDate} - {experienceItem.endDate}
									{experienceItem.jobPosition}
									{experienceItem.companyName}
									{experienceItem.workDescription}
								</>
							)
						})}
					</>
				)}
				{formData.education.length > 0 && (
					<>
						<p>Education</p>
						{formData.education.map((educationItem) => {
							return (
								<>
									{educationItem.startDate} - {educationItem.endDate}
									{educationItem.degree}
									{educationItem.field}
									{educationItem.university}
								</>
							)
						})}
					</>
				)}
				{formData.languages.length > 0 && (
					<>
						<p>Languages</p>
						{formData.languages.map((language) => {
							return (
								<>
									{language.languageName}
									{language.level}
								</>
							)
						})}
					</>
				)}

				{formData.skills.length > 0 && (
					<>
						<p>Skills</p>
						<ul>
							{formData.skills.map((skill) => {
								return <li>{skill}</li>
							})}
						</ul>
					</>
				)}

				{formData.certifications.length > 0 && (
					<>
						<p>Certifications</p>
						{formData.certifications.map((certificate) => {
							return (
								<>
									{certificate.date}
									{certificate.name}
									{certificate.organization}
								</>
							)
						})}
					</>
				)}

				{formData.hobbies.length > 0 && (
					<>
						<p>Hobbies</p>
						<ul>
							{formData.hobbies.map((hobby) => {
								return <li>{hobby}</li>
							})}
						</ul>
					</>
				)}

				{formData.links.length > 0 && (
					<>
						<p>Links</p>
						{formData.links.map((link) => {
							return (
								<>
									{link.name}
									{link.url}
								</>
							)
						})}
					</>
				)}
			</div>
		</div>
	)
}
