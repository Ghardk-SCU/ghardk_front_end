import { useState, useEffect } from 'react'
import Styles from '../Styling.module.css'
import Bear from './assets/Bear.png'
import SelectType from './SelectType'
import CustomerForm from './CustomerForm'
import VendorForm from './VendorForm'

const FormDataHolder = {
	Customer: {
		email: '',
		password: '',
		confirmPassword: '',
		username: '',
		firstName: '',
		secondName: '',
	},
	Vendor: {
		email: '',
		password: '',
		confirmPassword: '',
		username: '',
		firstName: '',
		secondName: '',
	},
}
export default function Form() {
	const [userType, setUserType] = useState(null)
	const [formData, setFormData] = useState(null)

	const titleStyle = {
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '44px',
	};


	function handleChange(event) {
		const { name, value, type, checked } = event.target
		setFormData(prevFormData => {
			return {
				...prevFormData,
				[name]: type === "checkbox" ? checked : value
			}
		})
	}

	function handleSubmit(e) {
		e.preventDefault();

	}

	useEffect(() => {
		if (!userType) return
		setFormData(FormDataHolder[userType])
	}, [userType])

	if (formData === null) return <SelectType setUserType={setUserType} />

	return (
		<>
			<section className={`${Styles.formContainer} relative min-h-screen py-24 w-screen bg-Beige flex content-center items-center justify-center`}>
				<div className={`${Styles.formContainer} relative bg-DarkBeige/60 w-[80%] py-8 min-h-[66%] md:w-[50%] lg2:w-[30%] mt-[100px] rounded-2xl center flex-col gap-8`}>
					<img src={Bear} alt='bear-img' className='absolute top-[-120px] w-[140px] select-none pointer-events-none' />
					<h2 className='Title text-Black EBGaramond' style={titleStyle}>{userType} Acount</h2>
					{userType === 'Customer' ?
						<CustomerForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
						:
						<VendorForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
					}
				</div>
			</section>
		</>
	)
}

