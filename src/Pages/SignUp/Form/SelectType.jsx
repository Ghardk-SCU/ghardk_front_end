
import Styles from '../Styling.module.css'
import Bear from './assets/Bear.png'
export default function SelectType({ setUserType }) {
  const titleStyle = {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '44px',
  };
  return (
    <section className="min-h-screen bg-Beige center">
      <div className={`${Styles.formContainer} mainPadding relative bg-DarkBeige/60 w-[80%] py-8 min-h-[66%] md:w-[50%] lg2:w-[30%] mt-[100px] rounded-2xl center flex-col gap-8`}>
        <img src={Bear} alt='bear-img' className='absolute top-[-120px] w-[140px] select-none pointer-events-none' />
        <h2 className='Title text-Black EBGaramond' style={titleStyle}>Sign Up</h2>
        <p className='text-Black text-[22px] text-center'>Select the type of account you want to create <p className='text-red-700 text-sm font-bold'>(you can't change it again)</p></p>
        <div className='w-[80%] flex flex-col gap-4 items-center'>
          <button onClick={() => { setUserType('Customer') }} className={`${Styles.loginBtnAnimate} bg-Black Fredoka text-White text-[22px] w-[100%] py-[14px] rounded-[20px]
          relative overflow-hidden inline-block z-10
          transition-all duration-300 ease-in-out
          focus:outline-none
          hover:w-[105%] hover:py-[13px] hover:my-[1px]
          focus:w-[105%] focus:py-[13px] focus:my-[1px]
          before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:-z-10
          before:rounded-inherit before:bg-[#505050] before:bg-opacity-40 
          before:transition-all before:duration-300 before:ease-in-out
          hover:before:left-0 focus:before:left-0`}>
            Customer
          </button>
          <button onClick={() => { setUserType('Vendor') }} className={`${Styles.loginBtnAnimate} bg-Black Fredoka text-White text-[22px] w-[100%] py-[14px] rounded-[20px]
          relative overflow-hidden inline-block z-10
          transition-all duration-300 ease-in-out
          focus:outline-none
          hover:w-[105%] hover:py-[13px] hover:my-[1px]
          focus:w-[105%] focus:py-[13px] focus:my-[1px]
          before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:-z-10
          before:rounded-inherit before:bg-[#505050] before:bg-opacity-40 
          before:transition-all before:duration-300 before:ease-in-out
          hover:before:left-0 focus:before:left-0`}>
            Vendor
          </button>
        </div>
      </div>
    </section>
  )
}
