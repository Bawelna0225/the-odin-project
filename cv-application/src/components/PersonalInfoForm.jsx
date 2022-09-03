import React from 'react'

export const PersonalInfoForm = ({handlePersonalDataChange, personalData}) => {
	return (
		<div>
			<form>
				<h2>Personal Info</h2>
				<input name="firstName" type="text" onChange={(e) => handlePersonalDataChange(e)} value={personalData.firstName} placeholder="first name" />
				<input name="lastName" type="text" onChange={(e) => handlePersonalDataChange(e)} value={personalData.lastName} />
				<input name="dateOfBirth" type="date" onChange={(e) => handlePersonalDataChange(e)} value={personalData.dateOfBirth} />
				<input name="placeOfBirth" type="text" onChange={(e) => handlePersonalDataChange(e)} value={personalData.placeOfBirth} />
				<textarea name="personalDescription" onChange={(e) => handlePersonalDataChange(e)} value={personalData.personalDescription}></textarea>
				<input name="phone" type="number" onChange={(e) => handlePersonalDataChange(e)} value={personalData.phone} />
				<input type="email" name="email" onChange={(e) => handlePersonalDataChange(e)} value={personalData.email} />
			</form>
		</div>
	)
}
