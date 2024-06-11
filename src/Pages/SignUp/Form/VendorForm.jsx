
import Styles from '../Styling.module.css'
import { Link } from 'react-router-dom'

export default function VendorForm({handleChange, handleSubmit, formData}) {
  return (
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
          id='firstName'
          type="text"
          onChange={handleChange}
          name="firstName"
          placeholder='first name'
          value={formData.firstName}
          className={`Fredoka w-full py-2 px-3 border-b-[3px] ${formData.firstName ? 'border-Black' : 'border-[rgba(16,16,16,0.7)]'} bg-transparent text-Black placeholder-transparent focus:outline-none focus:border-black cursor-text`}
        />
        <label htmlFor='firstName' className="inputLabel absolute top-[15px] left-2 text-Black/70 transform pointer-events-none -translate-y-2.5 px-1 Fredoka text-lg w-[100%]"
        >First Name</label>
      </div>
      <div className={`${Styles.inputHolder} relative w-full flex justify-end`}>
        <input
          id='secondName'
          type="text"
          onChange={handleChange}
          name="secondName"
          placeholder='second name'
          value={formData.secondName}
          className={`Fredoka w-full py-2 px-3 border-b-[3px] ${formData.secondName ? 'border-Black' : 'border-[rgba(16,16,16,0.7)]'} bg-transparent text-Black placeholder-transparent focus:outline-none focus:border-black cursor-text`}
        />
        <label htmlFor='secondName' className="inputLabel absolute top-[15px] left-2 text-Black/70 transform pointer-events-none -translate-y-2.5 px-1 Fredoka text-lg w-[100%]"
        >Second Name</label>
      </div>
      <div className={`${Styles.inputHolder} relative w-full`}>
        <input
          id='username'
          type="text"
          onChange={handleChange}
          name="username"
          placeholder='username'
          value={formData.username}
          className={`Fredoka w-full py-2 px-3 border-b-[3px] ${formData.username ? 'border-Black' : 'border-[rgba(16,16,16,0.7)]'} bg-transparent text-Black placeholder-transparent focus:outline-none focus:border-black cursor-text`}
        />
        <label htmlFor='username' className="inputLabel absolute top-[15px] left-2 text-Black/70 transform pointer-events-none -translate-y-2.5 px-1 Fredoka text-lg w-[100%]"
        >Username</label>
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
      <div className={`${Styles.inputHolder} relative w-full`}>
        <input
          id='userConfirmPassword'
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder='confirm password'
          className={`Fredoka w-full py-2 px-3 border-b-[3px] ${formData.confirmPassword ? 'border-Black' : 'border-[rgba(16,16,16,0.7)]'} bg-transparent text-Black placeholder-transparent focus:outline-none focus:border-black cursor-text`}
          style={{
            fontFamily: 'Verdana',
            letterSpacing: '0.125em',
          }}
        />
        <label htmlFor='userConfirmPassword' className="inputLabel absolute top-[15px] left-2 text-Black/70 transform pointer-events-none -translate-y-2.5 px-1 Fredoka text-lg w-[100%]"
        >Confirm Password</label>
      </div>
      {/* <div className={`${Styles.forgotPassword} self-end mt-[-15px]`}>
                            <button className={`${Styles.clickableButton}`}><p className='Fredoka text-[14px] opacity-60 cursor-pointer'>Forgot Password</p></button>
                        </div> */}
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
                        `}>Sign Up</button>
      <div className={`${Styles.dontHaveAccount} center gap-2`}>
        <p className='Fredoka text-[12px] md:text-[15px] text-center'>Have an Account?</p> <Link to='/Login'><button className={`${Styles.clickableButton}`}><p className='Fredoka text-[12px] md:text-[15px] text-center opacity-70 font-medium underline'>Login</p></button></Link>
      </div>
    </form>
  )
}
