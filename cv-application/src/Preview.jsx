import React from 'react'

export const Preview = ({ formData }) => {
	return (
		<div className='preview-container'>
			<h1>Preview</h1>
			<div className="preview">
				<img src={formData.photo} alt={formData.photo}/>
				<span className="cv-span">- CV -</span>
				<p className="name">
					{formData.firstName} {formData.lastName}
				</p>
				<p>
					Email:<br/> <b>{formData.email}</b>
				</p>
				<p>
					Phone: <b>{formData.phone}</b>
				</p>
				<p>Date Of Birth: {formData.dateOfBirth}</p>
				<p>Place Of Birth: {formData.placeOfBirth}</p>
				<div className="hr-line"></div>
				<p className="description">{formData.personalDescription}</p>
				{formData.experience.length > 0 && (
					<>
						<p className="title">EXPERIENCE</p>

						{formData.experience.map((experienceItem) => {
							return (
								<div className="experience">
									<div className="dates">
										{experienceItem.startDate} - {experienceItem.endDate}
									</div>
									<p><b>Position: </b>{experienceItem.jobPosition}</p>
									<p><b>Company: </b>{experienceItem.companyName}</p>
									<p>{experienceItem.workDescription}</p>
								</div>
							)
						})}
					</>
				)}
				{formData.education.length > 0 && (
					<>
						<p className="title">EDUCATION</p>
						{formData.education.map((educationItem) => {
							return (
								<div className="education">
									<div className="dates">
										{educationItem.startDate} - {educationItem.endDate}
									</div>
									<p className="university">
										<b>{educationItem.university}</b>
									</p>
									<p>Title: {educationItem.degree}</p>
									<p>Specialization: {educationItem.field}</p>
								</div>
							)
						})}
					</>
				)}
				{formData.languages.length > 0 && (
					<>
						<p className="title">LANGUAGES</p>
						{formData.languages.map((language) => {
							return (
								<div className="languages">
									<p>
										<b>{language.languageName}</b> - {language.level}
									</p>
								</div>
							)
						})}
					</>
				)}
				{formData.skills.length > 0 && (
					<>
						<p className="title">SKILLS</p>
						<ul className="skills">
							{formData.skills.map((skill) => {
								return <li>{skill}</li>
							})}
						</ul>
					</>
				)}
				{formData.certifications.length > 0 && (
					<>
						<p className="title">TRAINING, COURSES, CERTIFICATES</p>
						{formData.certifications.map((certificate) => {
							return (
								<div className="certifications">
									<div className="dates">{certificate.date}</div>
									<p className="certificate-name">
										<span className="square"></span>
										<b>{certificate.name}</b>
									</p>
									<p>Issued by: {certificate.organization}</p>
								</div>
							)
						})}
					</>
				)}
				{formData.hobbies.length > 0 && (
					<>
						<p className="title">HOBBIES</p>
						<ul className="hobbies">
							{formData.hobbies.map((hobby) => {
								return <li>{hobby}</li>
							})}
						</ul>
					</>
				)}
				{formData.links.length > 0 && (
					<>
						<p className="title">LINKS</p>
						{formData.links.map((link) => {
							return (
								<div className="links">
									<p>{link.name}</p>
									<a href={link.url}>{link.url}</a>
								</div>
							)
						})}
					</>
				)}
			</div>
		</div>
	)
}
