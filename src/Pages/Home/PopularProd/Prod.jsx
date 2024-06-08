import { useState } from 'react';
import Prod1 from './assets/prod1.jpg'
import Prod2 from './assets/prod2.jpg'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";




export default function Prod({ Amount, Title, Type, Rate, totalRaters }) {
  const [isLiked, setIsLiked] = useState(false)
  const StarCounter = () => {
    let stars = []
    for (let i = 0; i < 5; i++) {
      if (Rate >= i + 1) {
        stars.push(<FaStar key={i} />)
      } else if (Rate > i && Rate < i + 1) {
        // if there is a half star
        stars.push(<FaStarHalfAlt key={i} />)
      } else {
        stars.push(<FaStar key={i} style={{ color: 'rgba(255,255,255,0.5)' }} />)
      }
    }
    return (
      <div className='flex items-center font-thin relative top-10 group-hover:top-0 delay-75 duration-300'>
        <p>
          {Rate}
          <span className='ml-1 mr-3 text-xs opacity-80'>({totalRaters})</span>
        </p>
        {stars}
      </div>
    )
  }
  return (
    <div className='group relative w-[calc(30%-78px)] h-[100%] rounded-2xl overflow-hidden  font-medium'>
      <Backgrounds Type={Type} />
      <div className='flex flex-col justify-between w-full h-full'>
        <div className='m-4 flex justify-between'>
          <div className='px-2 flex items-center w-fit bg-white bg-opacity-20 backdrop-filter backdrop-blur-2 rounded-lg text-[2.5vh]'>
            <p>{Amount}</p>
            <span className='text-[1.5vh]'>EGP</span>
          </div>
          <div className='px-2 py-2 bg-white rounded-full -top-20 relative group-hover:-top-0 duration-300'>
            {
              isLiked ?
                <FaHeart size={25} className='text-red-500 group-hover:text-Red duration-300' onClick={() => setIsLiked(false)} /> :
                <FaRegHeart size={25} className='text-black group-hover:text-Red duration-300' onClick={() => setIsLiked(true)} />
            }
          </div>
        </div>
        <div style={{
          background: 'linear-gradient(0deg, rgba(16, 16, 16, 0.51) 0%, rgba(16, 16, 16, 0) 100%)'
        }} className='relative p-4 rounded-lg text-white space-y-3  top-[calc(100%-300px)] group-hover:top-0 duration-300'>
          <div className=' w-full h-full absolute top-0 left-0 pointer-events-none' />
          <h2 className="text-[3.5vh] Fredoka relative
            before:content-[''] before:absolute before:bg-Beige2 before:w-0 before:h-[6px] before:rounded-full before:-bottom-2 before:-left-4 group-hover:before:w-1/2 before:delay-75 before:duration-300
          ">{Title}</h2>
          <p className='text-[1.8vh] opacity-60 relative top-10 group-hover:top-0 delay-75 duration-300'>Jorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc vulputate libero etr
            interdum, ac aliquet odio mattis.</p>
          <StarCounter />
          <div className='w-full center relative top-10 group-hover:top-0 delay-75 duration-300'>
            <button className='text-black bg-Beige rounded-full px-10 py-4'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


const Backgrounds = ({ Type }) => {
  return (
    <>
      <div style={{
        backgroundImage: `url(${Type === 1 ? Prod1 : Prod2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }} className='w-full h-full absolute left-0 z-[-1] opacity-90' />
    </>
  )
}