import { useState, useRef } from 'react'
import NavBar from '../../../Components/NavBar/NavBar'
import '../../../Styling.css'
import Bear from './assets/Bear.png'

export default function Form(){
    const [formData, setFormData] = useState(
        {
            email:'',
            password:''
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
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit() {

    }
    

    return (
        <>
            <NavBar isDark={1} />
            <section className='formContainer relative h-screen w-screen bg-Beige flex content-center items-center justify-center'>
                <div className="formRectangle relative bg-DarkBeige/60 w-[80%] h-4/6 md:w-[50%] lg2:w-[30%] mt-[100px] rounded-2xl center flex-col gap-8">
                    <img src={Bear} className='absolute top-[-120px] w-[140px]' />
                    <h2 className='Title text-Black EBGaramond' style = {titleStyle}>Login</h2>
                    <form onSubmit={handleSubmit} className='Form center flex-col gap-10 w-[70%]'>
                    <div className="inputHolder relative w-full">
                        <input
                        id='userEmail'
                        type="email"
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                        className={`Fredoka w-full py-2 px-3 border-b-[3px] ${formData.email ? 'border-Black' : 'border-[rgba(16,16,16,0.7)]'} bg-transparent text-Black placeholder-transparent focus:outline-none focus:border-black cursor-text`}
                        />
                        <label htmlFor='userEmail' className="inputLabel absolute top-[15px] left-2 text-Black/70 transform -translate-y-2.5 px-1 Fredoka text-lg w-[100%]"
                        >Email</label>
                    </div>
                    <div className="inputHolder relative w-full">
                        <input
                        id='userPassword'
                        type="password"
                        onChange={handleChange}
                        name="password"
                        value={formData.password}
                        className={`Fredoka w-full py-2 px-3 border-b-[3px] ${formData.password ? 'border-Black' : 'border-[rgba(16,16,16,0.7)]'} bg-transparent text-Black placeholder-transparent focus:outline-none focus:border-black cursor-text`}
                        style={{
                            fontFamily: 'Verdana',
                            letterSpacing :'0.125em',
                        }}
                        />
                        <label htmlFor='userPassword' className="inputLabel absolute top-[15px] left-2 text-Black/70 transform -translate-y-2.5 px-1 Fredoka text-lg w-[100%]"
                        >Password</label>
                    </div>
                    <div className="forgotPassword self-end mt-[-15px]">
                        <button className='clickableButton'><p className='Fredoka text-[14px] opacity-60 cursor-pointer'>Forgot Password</p></button>
                    </div>
                    <div className="dontHaveAccount flex gap-2">
                        <p className='Fredoka text-[15px]'>Don't have an Account?</p> <button className='clickableButton'><span className='Fredoka text-[15px] opacity-70 font-medium underline'>Sign Up</span></button>
                    </div>
                    </form>
                </div>
            </section>
        </>
    )
}

// width: 169px;
// height: 19px;

// font-family: 'Fredoka';
// font-style: normal;
// font-weight: 400;
// font-size: 16px;
// line-height: 19px;
// display: flex;
// align-items: center;

// color: rgba(16, 16, 16, 0.9);


// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;
