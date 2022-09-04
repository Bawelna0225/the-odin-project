import React from 'react'

export const PersonalInfoForm = ({handlePersonalDataChange, personalData}) => {
	return (
		<div>
			<form>
				<h2>Personal Info</h2>
				<input name="firstName" type="text" onChange={(e) => handlePersonalDataChange(e)} value={personalData.firstName} placeholder="First Name" />
				<input name="lastName" type="text" onChange={(e) => handlePersonalDataChange(e)} value={personalData.lastName} placeholder="Last Name" />
				<input name="dateOfBirth" type="date" onChange={(e) => handlePersonalDataChange(e)} value={personalData.dateOfBirth} placeholder="Date Of Birth" />
				<input name="placeOfBirth" type="text" onChange={(e) => handlePersonalDataChange(e)} value={personalData.placeOfBirth} placeholder="Place Of Birth" />
				<textarea name="personalDescription" onChange={(e) => handlePersonalDataChange(e)} value={personalData.personalDescription} placeholder="Description"></textarea>
				<input name="phone" type="number" onChange={(e) => handlePersonalDataChange(e)} value={personalData.phone} placeholder="Phone Number" />
				<input type="email" name="email" onChange={(e) => handlePersonalDataChange(e)} value={personalData.email} placeholder="Email Address" />
			</form>
		</div>
	)
}
