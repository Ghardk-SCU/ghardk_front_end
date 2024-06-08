import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useInView, useAnimation } from 'framer-motion'
import Prod from './Prod'
import smoke from './assets/smoke.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";



const Products = {
  1: {
    Amount: '75.00',
    Title: 'Giraffe Soft Toy',
    Type: 1,
    Rate: 1,
    totalRaters: 100
  },
  2: {
    Amount: '34.50',
    Title: 'Plastic Camera Figure',
    Type: 2,
    Rate: 3,
    totalRaters: 100
  },
  3: {
    Amount: '75.00',
    Title: 'Giraffe Soft Toy',
    Type: 1,
    Rate: 3.4,
    totalRaters: 100
  },
  4: {
    Amount: '75.00',
    Title: 'Giraffe Soft Toy',
    Type: 1,
    Rate: 3.4,
    totalRaters: 100
  },
  5: {
    Amount: '75.00',
    Title: 'Giraffe Soft Toy',
    Type: 1,
    Rate: 3.4,
    totalRaters: 100
  },
  6: {
    Amount: '75.00',
    Title: 'Giraffe Soft Toy',
    Type: 1,
    Rate: 3.4,
    totalRaters: 100
  },
}
const DragBuffer = 10
export default function PopularProd() {
  const mainRef = useRef()
  const dragRef = useRef()
  const inView = useInView(dragRef)
  const controls = useAnimation()
  const [imgTurn, setImgTurn] = useState(0)
  const dragMotion = useMotionValue(0)
  const moveDenominator =
    window.innerWidth > 1280 ? 3 :
      window.innerWidth > 1024 ? 2 :
        1
  const dragPercintage = 100 / moveDenominator

  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ['start end', 'end start'],
  })
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [inView])
  const DragEnd = () => {
    handleMove()
  }
  const handleMove = (type = "drag") => {
    const x = dragMotion.get()
    if (type === "+1" && imgTurn + moveDenominator - 1 < Object.keys(Products).length - 1) {
      setImgTurn(prev => prev + 1)
    }
    if (type === "-1" && imgTurn > 0) {
      setImgTurn(prev => prev - 1)
    }
    if (x <= -DragBuffer && imgTurn + moveDenominator - 1 < Object.keys(Products).length - 1) {
      setImgTurn(prev => prev + 1)
    } else if (x >= DragBuffer && imgTurn > 0) {
      setImgTurn(prev => prev - 1)
    }
  }
  return (
    <main ref={mainRef} className="bg-DarkerBlue relative h-screen z-[1]">
      <Backgrounds scrollYProgress={scrollYProgress} />
      <section className='flex flex-col w-full h-full space-y-10 md:space-y-0'>
        <header className='flex justify-center'>
          <h1 className='text-center text-4xl md:text-4xl lg:text-7xl EBGaramond text-white'>POPULAR PRODUCTS</h1>
        </header>
        <section className='flex-grow p-2 md:p-10 flex flex-col gap-5 justify-between items-center overflow-hidden'>
          <div className='w-full h-full overflow-hidden'>
            <motion.div ref={dragRef}
              drag='x'
              dragConstraints={{ left: 0, right: 0 }}
              style={{ x: dragMotion }}
              animate={{ translateX: `-${imgTurn * dragPercintage}%` }}
              transition={{ type: 'just' }}
              onDragEnd={DragEnd}
              className='cursor-grabbing w-full h-full grid grid-flow-col 
              xl:auto-cols-[calc((100%/3))] lg:auto-cols-[calc((100%/2))] md:auto-cols-[calc((100%/2))] auto-cols-[calc((100%/1))] '>
              {
                Object.keys(Products).map((key, idx) => {
                  const { Amount, Title, Type, Rate, totalRaters } = Products[key]
                  return (
                    <div key={key} className='group px-3'>
                      <Prod Amount={Amount} controls={controls} delay={idx / 10} Title={Title} Type={Type} Rate={Rate} totalRaters={totalRaters} />
                    </div>
                  )
                })
              }
            </motion.div>
          </div>
          <div className='flex gap-5'>
            <button onClick={() => { handleMove("-1") }} className='text-Beige2 hover:text-Beige z-[10] duration-300'>
              <FaLongArrowAltLeft size={35} />
            </button>
            <button onClick={() => { handleMove("+1") }} className='text-Beige2 hover:text-Beige z-[10] duration-300'>
              <FaLongArrowAltRight size={35} />
            </button>
          </div>
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