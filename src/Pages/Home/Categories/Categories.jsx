import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import smoke from './assets/smoke.png'
import CategorieLayout from './CategorieLayout'

import img1 from './assets/Categorie1.jpg'
import img2 from './assets/Categorie2.jpg'

export default function Categories() {
  const [Width, setWidth] = useState(0)
  const mainRef = useRef()
  const dragRef = useRef()
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ['start end', 'end start'],
  })

  useEffect(() => {
    setWidth(dragRef.current.scrollWidth - dragRef.current.offsetWidth)
  }, [])
  return (
    <main ref={mainRef} className="mainPadding relative h-screen z-[1] bg-DarkerBlue">
      <Backgrounds scrollYProgress={scrollYProgress} />
      <section className='w-full h-full flex justify-center items-center text-white'>
        <div className='flex flex-col lg:flex-row gap-10 w-full lg:h-[470px] overflow-hidden'>
          <div className='flex flex-col gap-14 items-center justify-center px-10'>
            <h1 className='text-6xl EBGaramond'>CATEGORIES</h1>
            <button className='text-2xl px-10 py-4 Lekton hover:bg-white hover:text-black duration-300' style={{ border: '1px solid white' }}>Shop Now</button>
          </div>
          <div className='flex-grow overflow-hidden'>
            <motion.div ref={dragRef}
              drag='x'
              dragConstraints={{ left: -Width, right: 0 }}
              whileTap={{ cursor: "grabbing" }}
              className='w-full h-full flex gap-8 pr-10'>
              <CategorieLayout img={img1} />
              <CategorieLayout img={img2} />
              <CategorieLayout img={img1} />
              <CategorieLayout img={img2} />
              <CategorieLayout img={img1} />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

const Backgrounds = ({ scrollYProgress }) => {
  const y = useTransform(scrollYProgress, [0, 0.5], ['30%', '0%'])
  return (
    <>
      <motion.div style={{
        backgroundImage: `url(${smoke})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        y
      }} className='w-full h-full absolute left-0 z-[-1] ' />
    </>
  )
}