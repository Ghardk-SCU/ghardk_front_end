import { motion } from 'framer-motion'
import { MdKeyboardArrowRight } from "react-icons/md";
import { reavelAnimDowntoTop } from '../../../Store/AnimationValues'
import { Link, useNavigate } from 'react-router-dom'

export default function CategorieLayout({ id, Title, img, delay, controls }) {
  const reavelAnim = reavelAnimDowntoTop(delay)
  const Navighte = useNavigate()
  return (
    <motion.div
      // variants={reavelAnim} initial='hidden' animate={controls}
      onClick={() => Navighte(`/Explore?category_id=${id}`)}
      className='group min-h-[570px] min-w-[calc(100%+50px)] sm:min-h-[470px] sm:min-w-[320px] flex flex-col space-y-2 cursor-pointer'>
      <div className='flex-grow overflow-hidden'>
        <motion.img draggable={false} className='w-full h-full opacity-50 group-hover:scale-110 group-hover:opacity-80 duration-1000 object-cover' src={img} alt="" />
      </div>
      <div className='space-y-1 h-[100px] sm:h-auto'>
        <h1 className="text-2xl">{Title}</h1>
        <div className='flex items-center gap-3 opacity-60'>
          <Link to={`/Explore?category_id=${id}`} className="text-sm inline relative
            before:content-[''] before:w-1/3 before:h-[2px] before:bg-white before:absolute before:-bottom-0 before:left-0 before:translate-y-[2px] before:duration-300
            group-hover:before:w-full"> EXPLORE </Link>
          <MdKeyboardArrowRight className='group-hover:-rotate-45 duration-300' size={25} />
        </div>
      </div>
    </motion.div>
  )
}
