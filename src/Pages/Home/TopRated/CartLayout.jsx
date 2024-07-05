import { useState } from "react";
import { motion } from "framer-motion"
import InView from "../../../utils/InView"
import { reavelAnimDowntoTop } from '../../../Store/AnimationValues'
import Spinner from '../../../Components/Ui-Components/Spinner'
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";



export default function CartLayout({ loading, classes, delay, details, idx }) {
  const rank = idx + 1;
  const [isFavClicked, setIsFavClicked] = useState(true)
  const Anim = reavelAnimDowntoTop(delay)
  return (
    <div className={`relative sm:w-[80%] w-[100%] h-[100%] ${classes}`}>
      <InView variants={Anim}>
        <motion.div
          variants={Anim} initial="hidden" animate="visible"
          style={{
            clipPath: 'polygon(15% 0%, 85% 0%,86% 4%, 88% 7%, 92% 10.7%, 94% 11.7%, 100% 14%,100% 86%, 94% 88.3%, 92% 89.3%, 88% 93%, 86% 96%, 85% 100%,15% 100%, 14% 96%, 12% 93%, 8% 89.3%, 6% 88.3%, 0% 86%,0% 14%, 6% 11.7%, 8% 10.7%, 12% 7%,14% 4%)',
            background: 'rgba( 255, 255, 255, 0.05 )',
            boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
            backdropFilter: 'blur( 7px )',
            WebkitBackdropFilter: 'blur( 7px )',
          }} className="w-full min-h-[50%] xl:min-h-[80%] xl:pt-14 pt-[12vh] pb-4 flex flex-col justify-between gap-y-10">
          {!loading && details &&
            <>
              <div className="flex justify-between px-[3.5vw]">
                <div className="flex center gap-2">
                  <FaStar size={25} />
                  {details.rating ? (details.rating / details.rating_count).toFixed(2) : 0}
                  <span className="text-xs -ml-1">({details.rating_count})</span>
                </div>
              </div>
              <div className="center px-4">
                <Link className="w-2/3 sm:w-auto xl:w-[40%] " to={`/Vendors/${details.id}`}>
                  <img style={{ boxShadow: '0px 0px 22.4px 0px #FDBF5026', visibility: `${details.image_url ? 'visible' : 'hidden'}` }} src={details.image_url} className="rounded-full w-full aspect-square object-cover shadow-2xl" />
                </Link>
              </div>
              <p title={details.description} className="truncate xl:text-[1vw] leading-[1.4] px-4 text-sm font-normal">
                {details.description}
              </p>
              <div style={{
                background: 'linear-gradient(117.26deg, rgba(253, 191, 80, 0.6) 45.53%, #F4F4F8 119.63%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }} className="NunitoSans center text-3xl">
                #
                <span className="font-bold">0{rank}</span>
              </div>
            </>
          }
          {loading && <div className="flex-grow center">
            <Spinner />
          </div>}

        </motion.div>
      </InView>
      {details && <div className={`${idx == 0 ? "translate-y-8 xl:-translate-y-24" : "-translate-y-32 xl:-translate-y-24"} text-center text-[3vh] BeloveMelody absolute -bottom-10 left-1/2 -translate-x-1/2`}>
        {details.user_name}
      </div>}
    </div>
  )
}