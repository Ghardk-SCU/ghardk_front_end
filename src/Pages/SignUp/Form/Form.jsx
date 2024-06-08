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
                <div className="formRectangle bg-DarkBeige/60 w-[80%] h-4/6 md:w-[50%] lg2:w-[30%] mt-14 rounded-2xl center flex-col">
                    <h2 className='Title text-Black EBGaramond' style = {titleStyle}>Login</h2>
                    <form onSubmit={handleSubmit} className='Form center flex-col gap-2'>
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={handleChange}
                            name="email"
                            value={formData.email}
                        />
                        <input
                            type="password"
                            placeholder="Last Name"
                            onChange={handleChange}
                            name="password"
                            value={formData.password}
                        />
                    </form>
                </div>
            </section>
        </>
    )
}