import Left from './assets/Left.png';
import Right from './assets/Right.png';
import Bear from '../../assets/Bear.png'

export default function Welcome() {
  return (
    <div className="relative w-full min-h-screen center select-none">
      <img className='imgSettings absolute -bottom-[40%] -left-[30%] scale-[1] hidden lg1:inline-block' src={Left} alt="" />
      <div className='relative w-min h-min'>
        <h1 className='EBGaramond uppercase font-medium text-[25vw] lg:text-[17vw] select-none'>
          Shop
        </h1>
        <img src={Bear} alt="loadingBear" className='absolute top-[44%] right-[28%] w-2/12 select-none' />
      </div>
      <img className='imgSettings absolute -top-[40%] -right-[33%] -rotate-6 hidden lg1:inline-block' src={Right} alt="" />
    </div>
  )
}