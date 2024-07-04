import { useRef } from 'react'
import { motion, useTransform, useScroll, useMotionValueEvent } from 'framer-motion'
import LeftTopSection from './LeftTopSection'
import RightBottomSection from './RightBottomSection'

export default function ForYou({ FirstColor: LeftTopColor, SecondColor: RightBottomColor, setFirstColor: setLeftTopColor, setSecondColor: setRightBottomColor }) {
  const bigContainer = useRef()
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

  const { scrollYProgress: BigSection } = useScroll({
    target: bigContainer,
    offset: ['start end', 'end start']
  })

  const TextLeftTopAnim = useTransform(scrollTextLeftTopY, [0, 0.38, 1], ['-20%', '0%', '20%'])
  const TextRightBottomAnim = useTransform(scrollTextRightBottomY, [0, window.innerWidth >= 1280 ? 0.5 : 1.1, 1], ['20%', '0%', '-20%'])
  useMotionValueEvent(OutFromSection, 'change', (latest) => {
    if (latest > 0.7) {
      setLeftTopColor('#F4F4F8')
      setRightBottomColor('#101010')
    } else {
      setLeftTopColor('#A2947A')
      setRightBottomColor('#D4CDCD')
    }
  })

  return (
    <div ref={bigContainer} className='w-full min-h-[300vh]'>
      <main ref={mainRef} className="sticky top-0 grid lg:grid-cols-2 w-full max-h-[120vh] overflow-hidden">
        <motion.div animate={{ backgroundColor: LeftTopColor, transition: { duration: 0.5 } }} className="relative overflow-hidden">
          <LeftTopSection BigSection={BigSection} />
          <div ref={TextLeftTopY} className='pointer-events-none absolute h-auto w-full lg:w-auto lg:h-full -bottom-20 lg:-bottom-0 right-0 translate-x-0 lg:translate-x-[50%] center lg:-rotate-90'>
            <motion.p animate={{ color: RightBottomColor, transition: { duration: 0.5 } }} style={{ x: TextLeftTopAnim }} className='tracking-widest LekyCalgria text-[15vh] imgSettings'>
              SPECIAL
            </motion.p>
          </div>
        </motion.div>
        <motion.div animate={{ backgroundColor: RightBottomColor, transition: { duration: 0.5 } }} className="relative h-full w-full overflow-hidden z-[2]">
          <div ref={TextRightBottomY} className='pointer-events-none absolute h-auto w-full lg:w-auto lg:h-full -top-24 lg:-top-0 left-0 -translate-x-0 lg:-translate-x-[50%] center lg:-rotate-90'>
            <motion.p animate={{ color: LeftTopColor, transition: { duration: 0.5 } }} style={{ x: TextRightBottomAnim }} className='tracking-widest LekyCalgria text-[15vh] imgSettings'>
              SPECIAL
            </motion.p>
          </div>
          <RightBottomSection RightBottomColor={RightBottomColor} />
        </motion.div>
      </main>
    </div>
  )
}
