import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from '../Styling.module.css'
import Bear from './assets/Bear.png'
import CustomerForm from './CustomerForm'
import VendorForm from './VendorForm'
import { AuthenticationContext } from '../../../Store/Context/Authentication'

import { SignupUrl } from '../../../Store/urls'
import Fetch from '../../../Components/CustomHooks/Fetch'

const FormDataHolder = {
	Customer: {
		email: '',
		password: '',
		confirmPassword: '',
		username: '',
		firstName: '',
		lastName: '',
	},
	Vendor: {
		email: '',
		password: '',
		confirmPassword: '',
		username: '',
		firstName: '',
		lastName: '',
		nationalId: ''
	},
}
export default function Form() {
	const [formData, setFormData] = useState(FormDataHolder.Customer)
	const { isLogedIn } = useContext(AuthenticationContext)
	const [errorMessage, setErrorMessage] = useState('')
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState(null)
	const Navigate = useNavigate()

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
		const body = {
			first_name: formData.firstName,
			last_name: formData.lastName,
			email: formData.email,
			password: formData.password,
			password_confirm: formData.confirmPassword,
			user_name: formData.username,
			national_id: formData.nationalId,
			role: 'customer',
			dob: '1999-01-01',
			gender: 'male'
		}
		setErrorMessage('')
		Fetch({ url: SignupUrl(), setLoading, setData, setErrorMessage, method: 'POST', body })
	}

	useEffect(() => {
		if (!data) return
		if (data.status === 'success') {
			Navigate('/login');
		}
	}, [data])


	useEffect(() => {
		if (isLogedIn) Navigate('/')
	}, [isLogedIn])

	if (isLogedIn)
		return <div className='w-screen h-screen bg-DarkerBlue' />
	return (
		<>
			<section className={`${Styles.formContainer} relative min-h-screen py-24 w-screen bg-Beige flex content-center items-center justify-center`}>
				<div className={`${Styles.formContainer} relative bg-DarkBeige/60 w-[80%] py-8 min-h-[66%] md:w-[50%] lg2:w-[30%] mt-[100px] rounded-2xl center flex-col gap-8`}>
					<img src={Bear} alt='bear-img' className='absolute top-[-120px] w-[140px] select-none pointer-events-none' />
					<h2 className='Title text-Black EBGaramond' style={titleStyle}>Signup</h2>
					<CustomerForm loading={loading} errorMessage={errorMessage} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
				</div>
			</section>
		</>
	)
}

