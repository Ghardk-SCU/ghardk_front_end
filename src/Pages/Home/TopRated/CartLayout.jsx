import { motion } from "framer-motion"
import InView from "../../../utils/InView"
import { reavelAnimDowntoTop } from '../../../Store/AnimationValues'
export default function CartLayout({ classes, delay }) {
  const Anim = reavelAnimDowntoTop(delay)
  return (
    <div className={`w-[80%] h-[80%] ${classes}`}>
      <InView variants={Anim}>
        <motion.div
          variants={Anim} initial="hidden" animate="visible"
          style={{
            clipPath: 'polygon(15% 0%, 85% 0%,86% 4%, 88% 7%, 92% 10.7%, 94% 11.7%, 100% 14%,100% 86%, 94% 88.3%, 92% 89.3%, 88% 93%, 86% 96%, 85% 100%,15% 100%, 14% 96%, 12% 93%, 8% 89.3%, 6% 88.3%, 0% 86%,0% 14%, 6% 11.7%, 8% 10.7%, 12% 7%,14% 4%)',
            background: 'rgba( 255, 255, 255, 0.05 )',
            boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
            backdropFilter: 'blur( 7px )',
            WebkitBackdropFilter: 'blur( 7px )',
          }} className="w-full h-full center">
          CartLayout
        </motion.div>
      </InView>
    </div>
  )

}
// background: rgba( 255, 255, 255, 0.2 );
// box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
// backdrop-filter: blur( 7px );
// -webkit-backdrop-filter: blur( 7px );
// border-radius: 10px;
// border: 1px solid rgba( 255, 255, 255, 0.18 );