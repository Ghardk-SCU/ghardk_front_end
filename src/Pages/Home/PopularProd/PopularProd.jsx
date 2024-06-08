import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Prod from './Prod'
import smoke from './assets/smoke.png'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";


export default function PopularProd() {
  const mainRef = useRef()

  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ['start end', 'end start'],
  })
  return (
    <main ref={mainRef} className="bg-DarkerBlue relative h-screen z-[1]">
      <Backgrounds scrollYProgress={scrollYProgress} />
      <section className='flex flex-col w-full h-full mainPadding'>
        <header className='flex justify-center'>
          <h1 className='text-7xl EBGaramond text-white'>POPULAR PRODUCTS</h1>
        </header>
        <section className='flex-grow p-10 flex justify-between items-center'>
          <button className='rounded-full border-2 p-3'>
            <IoIosArrowRoundBack color='white' size={50} />
          </button>
          <Prod Amount='75.00' Title='Giraffe Soft Toy' Type={1} Rate={1} totalRaters={100} />
          <Prod Amount='34.50' Title='Plastic Camera Figure' Type={2} Rate={3} totalRaters={100} />
          <Prod Amount='75.00' Title='Giraffe Soft Toy' Type={1} Rate={3.4} totalRaters={100} />
          <button className='rounded-full border-2 p-3'>
            <IoIosArrowRoundForward color='white' size={50} />
          </button>
        </section>
      </section>
    </main>
  )
}

const Backgrounds = ({ scrollYProgress }) => {
  const y = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '-30%', '-60%'])
  return (
    <>
      <motion.div style={{
        backgroundImage: `url(${smoke})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: 'rotateX(-180deg)',
        // y
      }} className='w-full h-full absolute left-0 z-[-1]' />
    </>
  )
}