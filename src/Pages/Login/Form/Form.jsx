import { useState, useRef } from 'react'
import NavBar from '../../../Components/NavBar/NavBar'
import Styles from '../Styling.module.css'
import Bear from './assets/Bear.png'

export default function Form() {
    const [formData, setFormData] = useState(
        {
            email: '',
            password: ''
        }
    )

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


    return (
        <>
            <NavBar />
            <section className={`${Styles.formContainer} relative min-h-screen py-16 w-screen bg-Beige flex content-center items-center justify-center`}>
                <div className={`${Styles.formContainer} relative bg-DarkBeige/60 w-[80%] py-8 min-h-[66%] md:w-[50%] lg2:w-[30%] mt-[100px] rounded-2xl center flex-col gap-8`}>
                    <img src={Bear} alt='bear-img' className='absolute top-[-120px] w-[140px] select-none pointer-events-none' />
                    <h2 className='Title text-Black EBGaramond' style={titleStyle}>Login</h2>
                    <form onSubmit={handleSubmit} className='Form center flex-col gap-10 w-[70%]'>
                        <div className={`${Styles.inputHolder} relative w-full`}>
                            <input
                                id='userEmail'
                                type="email"
                                onChange={handleChange}
                                name="email"
                                placeholder='Email'
                                value={formData.email}
                                className={`Fredoka w-full py-2 px-3 border-b-[3px] ${formData.email ? 'border-Black' : 'border-[rgba(16,16,16,0.7)]'} bg-transparent text-Black placeholder-transparent focus:outline-none focus:border-black cursor-text`}
                            />
                            <label htmlFor='userEmail' className="inputLabel absolute top-[15px] left-2 text-Black/70 transform pointer-events-none -translate-y-2.5 px-1 Fredoka text-lg w-[100%]"
                            >Email</label>
                        </div>
                        <div className={`${Styles.inputHolder} relative w-full`}>
                            <input
                                id='userPassword'
                                type="password"
                                onChange={handleChange}
                                name="password"
                                value={formData.password}
                                placeholder='Password'
                                className={`Fredoka w-full py-2 px-3 border-b-[3px] ${formData.password ? 'border-Black' : 'border-[rgba(16,16,16,0.7)]'} bg-transparent text-Black placeholder-transparent focus:outline-none focus:border-black cursor-text`}
                                style={{
                                    fontFamily: 'Verdana',
                                    letterSpacing: '0.125em',
                                }}
                            />
                            <label htmlFor='userPassword' className="inputLabel absolute top-[15px] left-2 text-Black/70 transform pointer-events-none -translate-y-2.5 px-1 Fredoka text-lg w-[100%]"
                            >Password</label>
                        </div>
                        <div className={`${Styles.forgotPassword} self-end mt-[-15px]`}>
                            <button className={`${Styles.clickableButton}`}><p className='Fredoka text-[14px] opacity-60 cursor-pointer'>Forgot Password</p></button>
                        </div>
                        <button type='submit' className={`${Styles.loginBtnAnimate} bg-Black Fredoka text-White text-[22px] w-[100%] py-[14px] rounded-[20px]
                            relative overflow-hidden inline-block z-10
                            transition-all duration-300 ease-in-out
                            focus:outline-none
                            hover:w-[105%] hover:py-[13px] hover:my-[1px]
                            focus:w-[105%] focus:py-[13px] focus:my-[1px]
                            before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:-z-10
                            before:rounded-inherit before:bg-[#505050] before:bg-opacity-40 
                            before:transition-all before:duration-300 before:ease-in-out
                            hover:before:left-0 focus:before:left-0
                        `}>Login</button>
                        <div className={`${Styles.dontHaveAccount} center gap-2`}>
                            <p className='Fredoka text-[12px] md:text-[15px] text-center'>Don't have an Account?</p> <button className={`${Styles.clickableButton}`}><p className='Fredoka text-[12px] md:text-[15px] text-center opacity-70 font-medium underline'>Sign Up</p></button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}