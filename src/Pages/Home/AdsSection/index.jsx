import Ad from './assets/Ad.jpg'
import InView from '../../../utils/InView'
import { HiArrowLongRight } from "react-icons/hi2";

export default function AdsSection() {
  const variants = {
    hidden: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
    visible: { opacity: 0.8, clipPath: 'inset(0 0 0 0)', transition: { duration: 1 } },
  }
  return (
    <div className="relative w-full h-screen center bg-Black">
      <InView variants={variants} classes="w-screen h-full center">
        <div style={{
          backgroundImage: `url(${Ad})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }} className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[60%]">

        </div>
        <div className='absolute top-1/2 -translate-y-1/2 left-0 w-full h-[60%] z-[1] flex justify-between mainPadding'>
          <div className='flex relative'>
            <button className='text-white self-end bg-Black rounded-full py-7 px-12
            relative overflow-hidden inline-block z-10 focus:outline-none
            before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:-z-10
            before:rounded-inherit before:bg-[#505050] before:bg-opacity-40 
            before:transition-all before:duration-300 before:ease-in-out
            hover:before:left-0'>
              VIEW PROFILE
            </button>

            <button className='absolute left-0 rotate-180 self-center text-white bg-Black/50 rounded-full p-5 group hover:bg-white/50 duration-300'>
              <HiArrowLongRight className=' group-hover:text-Black group-hover:translate-x-[10px] duration-300' size={35} />
            </button>
          </div>

          <button className='self-center text-white bg-Black/50 rounded-full p-5 group hover:bg-white/50 duration-300'>
            <HiArrowLongRight className='group-hover:text-Black group-hover:translate-x-[10px] duration-300' size={35} />
          </button>
        </div>
      </InView>
    </div>
  )
}


const Cards = () => {
  return (
    <div style={{
      backgroundImage: `url(${Ad})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }} className="w-full h-[60%] flex justify-between mainPadding">
      <button className='text-white self-end bg-Black rounded-full py-7 px-12
      relative overflow-hidden inline-block z-10 focus:outline-none
      before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:-z-10
      before:rounded-inherit before:bg-[#505050] before:bg-opacity-40 
      before:transition-all before:duration-300 before:ease-in-out
      hover:before:left-0
      '>
        VIEW PROFILE
      </button>
      <button className='self-center text-white bg-Black/50 rounded-full p-8 group hover:bg-[#505050]/80 duration-300'>
        <HiArrowLongRight className='group-hover:text-Black group-hover:translate-x-[10px] duration-300' size={35} />
      </button>
    </div>
  )
}