/* eslint-disable react/prop-types */
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export default function Magnatic({ children, classes='' }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e) => {
    const xPos = (e.clientX - e.target.getBoundingClientRect().left) / e.target.getBoundingClientRect().width;
    const yPos = (e.clientY - e.target.getBoundingClientRect().top) / e.target.getBoundingClientRect().height;
    x.set(xPos - 0.5)
    y.set(yPos - 0.5)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const moveX = useSpring(useTransform(x, [-0.5, 0, 1], [-15, 0, 15]));
  const moveY = useSpring(useTransform(y, [-0.5, 0, 1], [-15, 0, 15]));

  return (
    <motion.div
      className={`relative w-fit ${classes}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x: moveX, y: moveY }}
      transition={{ type: 'just' }}
    >
      <span className='truncate'>
        {children}
      </span>
    </motion.div>
  )
}