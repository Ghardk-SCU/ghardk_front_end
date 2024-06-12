import { useState } from "react";
import { motion } from "framer-motion"
import InView from "../../../utils/InView"
import { reavelAnimDowntoTop } from '../../../Store/AnimationValues'

import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";



export default function CartLayout({ classes, delay, details }) {
  const { rating, totalRates, img, discreption, rank, isFavorite, name } = details;
  const [isFavClicked, setIsFavClicked] = useState(isFavorite)
  const Anim = reavelAnimDowntoTop(delay)
  return (
    <div className={`sm:w-[80%] w-[100%] h-[80%] ${classes}`}>
      <InView variants={Anim}>
        <motion.div
          variants={Anim} initial="hidden" animate="visible"
          style={{
            clipPath: 'polygon(15% 0%, 85% 0%,86% 4%, 88% 7%, 92% 10.7%, 94% 11.7%, 100% 14%,100% 86%, 94% 88.3%, 92% 89.3%, 88% 93%, 86% 96%, 85% 100%,15% 100%, 14% 96%, 12% 93%, 8% 89.3%, 6% 88.3%, 0% 86%,0% 14%, 6% 11.7%, 8% 10.7%, 12% 7%,14% 4%)',
            background: 'rgba( 255, 255, 255, 0.05 )',
            boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
            backdropFilter: 'blur( 7px )',
            WebkitBackdropFilter: 'blur( 7px )',
          }} className="w-full h-fit pt-14 pb-4 flex flex-col justify-between gap-y-10">
          <div className="flex justify-between px-14">
            <div className="flex center gap-2">
              <FaStar size={25} />
              {rating}
              <span className="text-xs -ml-1">({totalRates})</span>
            </div>
            <button className="" onClick={() => { setIsFavClicked(prev => !prev) }}>
              {isFavClicked ? <FaHeart size={25} /> : <FaRegHeart size={25} />}
            </button>
          </div>
          <div className="center px-4">
            <img style={{ boxShadow: '0px 0px 22.4px 0px #FDBF5026' }} src={img} alt="product" className="rounded-full w-2/3 sm:w-auto xl:w-[40%] aspect-square object-cover shadow-2xl" />
          </div>
          <p className=" px-4 text-sm font-normal">
            {discreption}
          </p>
          <div style={{ 
            background: 'linear-gradient(117.26deg, rgba(253, 191, 80, 0.6) 45.53%, #F4F4F8 119.63%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
           }} className="NunitoSans center mt-auto text-3xl">
            #
            <span className="font-bold">0{rank}</span>
          </div>
        </motion.div>
      </InView>
    </div>
  )
}