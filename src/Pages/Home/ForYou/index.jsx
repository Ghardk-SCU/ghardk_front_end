import { useRef } from 'react'
import { motion, useTransform, useScroll, useMotionValueEvent } from 'framer-motion'
import LeftTopSection from './LeftTopSection'
import LeftBottomSection from './RightBottomSection'

export default function ForYou({ FirstColor: LeftTopColor, SecondColor: RightBottomColor, setFirstColor: setLeftTopColor, setSecondColor: setRightBottomColor }) {
  const mainRef = useRef()
  const TextLeftTopY = useRef()
  const TextRightBottomY = useRef()
  const { scrollYProgress: scrollTextLeftTopY } = useScroll({
    target: TextLeftTopY,
    offset: ['start end', 'end start']
  })
  const { scrollYProgress: scrollTextRightBottomY } = useScroll({
    target: TextRightBottomY,
    offset: ['start end', 'end start']
  })
  const { scrollYProgress: OutFromSection } = useScroll({
    target: mainRef,
    offset: ['start end', 'end start']
  })

  const TextLeftTopAnim = useTransform(scrollTextLeftTopY, [0, 0.5, 1], ['-10%', '0%', '10%'])
  const TextRightBottomAnim = useTransform(scrollTextRightBottomY, [0, 0.5, 1], ['10%', '0%', '-10%'])
  useMotionValueEvent(OutFromSection, 'change', (latest) => {
    if (latest > 0.7) {
      setLeftTopColor('#F4F4F8')
      setRightBottomColor('#101010')
    } else {
      setLeftTopColor('#ACA08C')
      setRightBottomColor('#D4CDCD')
    }
  })

  return (
    <main ref={mainRef} className="grid lg:grid-cols-2 w-full h-[150vh] overflow-hidden">
      <motion.div animate={{ backgroundColor: LeftTopColor, transition: { duration: 0.5 } }} className="relative overflow-hidden">
        <LeftTopSection />
        <div className='absolute h-full top-0 right-0 translate-x-[50%] center lg:-rotate-90'>
          <motion.p ref={TextLeftTopY} animate={{ color: RightBottomColor, transition: { duration: 0.5 } }} style={{ x: TextLeftTopAnim }} className='tracking-widest LekyCalgria text-[15vh] pointer-events-none select-none'>
            SPECIAL
          </motion.p>
        </div>
      </motion.div>
      <motion.div animate={{ backgroundColor: RightBottomColor, transition: { duration: 0.5 } }} className="relative overflow-hidden">
        <div className='absolute h-full top-0 left-0 -translate-x-[50%] center lg:-rotate-90'>
          <motion.p ref={TextRightBottomY} animate={{ color: LeftTopColor, transition: { duration: 0.5 } }} style={{ x: TextRightBottomAnim }} className='tracking-widest LekyCalgria text-[15vh] pointer-events-none select-none'>
            SPECIAL
          </motion.p>
        </div>
        <LeftBottomSection />
      </motion.div>
    </main>
  )
}
