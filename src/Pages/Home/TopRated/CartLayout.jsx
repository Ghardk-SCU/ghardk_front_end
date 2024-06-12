import { motion } from "framer-motion"
import InView from "../../../utils/InView"
import { reavelAnimDowntoTop } from '../../../Store/AnimationValues'
export default function CartLayout({ classes, delay }) {
  const Anim = reavelAnimDowntoTop(delay)
  return (
    <div className={`w-[80%] h-[70%] ${classes}`}>
      <InView variants={Anim}>
        <motion.div
          variants={Anim} initial="hidden" animate="visible"
          style={{
            clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)',
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