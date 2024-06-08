import { useState, useRef } from 'react'
import NavBar from '../../../Components/NavBar/NavBar'

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

    function handleChange(event) {
        console.log(event)
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
                <div className="formRectangle bg-DarkBeige/60 w-[80%] h-4/6 md:w-[50%] lg2:w-[30%] mt-14 rounded-2xl center flex-col gap-8">
                    <h2 className='Title text-Black EBGaramond' style = {titleStyle}>Login</h2>
                    <form onSubmit={handleSubmit} className='Form center flex-col gap-10 w-[70%]'>
                    <div className="relative w-full">
                    <span className="absolute top-[15px] left-2 text-Black/70 transform -translate-y-2.5 px-1 Fredoka text-lg w-[100%]">Email</span>
                    <input
                    type="email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    className="w-full py-2 px-3 border-b-[3px] border-[#101010] opacity-70 bg-transparent text-black placeholder-transparent focus:outline-none focus:border-black"
                    />
                </div>
                <div className="relative w-full">
                    <span className="absolute top-[15px] left-2 text-Black/70 transform -translate-y-2.5 px-1 Fredoka text-lg w-[100%]">Password</span>
                    <input
                    type="password"
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                    className="w-full py-2 px-3 border-b-[3px] border-[#101010] opacity-70 bg-transparent text-black placeholder-transparent focus:outline-none focus:border-black"
                    />
                </div>
                    </form>
                </div>
            </section>
        </>
    )
}