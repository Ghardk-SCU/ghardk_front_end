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

    const forgotPasswordStyle = {
        /* Forgot Password */
        width: '121px',
        height: '19px',
        fontFamily: 'Fredoka',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '19px',
        display: 'flex',
        alignItems: 'center',

        color: 'rgba(16, 16, 16, 0.6)',
        /* Inside auto layout */
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
            <NavBar isDark={1} />
            <section className={`${Styles.formContainer} relative h-screen w-screen bg-Beige flex content-center items-center justify-center`}>
                <div className={`${Styles.formContainer} relative bg-DarkBeige/60 w-[80%] h-4/6 md:w-[50%] lg2:w-[30%] mt-[100px] rounded-2xl center flex-col gap-8`}>
                    <img src={Bear} className='absolute top-[-120px] w-[140px]' />
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
                        <button type='submit' className={`${Styles.loginBtnAnimate} bg-Black Fredoka text-White text-[22px] w-[100%] py-[14px] rounded-[20px]`}><span>Login</span></button>
                        <div className={`${Styles.dontHaveAccount} center gap-2`}>
                            <p className='Fredoka text-[12px] md:text-[15px] text-center'>Don't have an Account?</p> <button className={`${Styles.clickableButton}`}><p className='Fredoka text-[12px] md:text-[15px] text-center opacity-70 font-medium underline'>Sign Up</p></button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}