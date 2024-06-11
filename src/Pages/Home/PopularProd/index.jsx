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
    Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non.',
    Type: 1,
    Rate: 1,
    totalRaters: 100
  },
  2: {
    Amount: '34.50',
    Title: 'Plastic Camera Figure',
    Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non.',
    Type: 2,
    Rate: 3,
    totalRaters: 100
  },
  3: {
    Amount: '75.00',
    Title: 'Giraffe Soft Toy',
    Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non.',
    Type: 1,
    Rate: 3.4,
    totalRaters: 100
  },
  4: {
    Amount: '75.00',
    Title: 'Giraffe Soft Toy',
    Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non.',
    Type: 1,
    Rate: 3.4,
    totalRaters: 100
  },
  5: {
    Amount: '75.00',
    Title: 'Giraffe Soft Toy',
    Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non.',
    Type: 1,
    Rate: 3.4,
    totalRaters: 100
  },
  6: {
    Amount: '75.00',
    Title: 'Giraffe Soft Toy',
    Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non.',
    Type: 1,
    Rate: 3.4,
    totalRaters: 100
  },
}
const DragBuffer = 10
export default function PopularProd() {
  const dragRef = useRef()
  const inView = useInView(dragRef)
  const controls = useAnimation()
  const [imgTurn, setImgTurn] = useState(0)
  const dragMotion = useMotionValue(0)
  const moveDenominator =
    window.innerWidth > 1280 ? 3 :
      window.innerWidth > 768 ? 2 :
        1
  const dragPercintage = 100 / moveDenominator
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
    <main className="relative h-[120vh] z-[1]">
      <section className='flex flex-col w-full h-full space-y-10 md:space-y-0 pb-20'>
        <header className='flex justify-center'>
          <h1 className='text-center text-4xl md:text-4xl lg:text-7xl EBGaramond text-white'>POPULAR PRODUCTS</h1>
        </header>
        <section className='flex-grow p-2 md:p-10 flex flex-col gap-5 justify-between items-center overflow-hidden'>
          <div className='w-full h-full overflow-hidden center'>
            <motion.div ref={dragRef}
              drag='x'
              dragConstraints={{ left: 0, right: 0 }}
              style={{ x: dragMotion }}
              animate={{ translateX: `-${imgTurn * dragPercintage}%` }}
              transition={{ type: 'just' }}
              onDragEnd={DragEnd}
              className='cursor-grabbing w-full h-[80%] grid grid-flow-col 
              xl:auto-cols-[calc((100%/3))] md:auto-cols-[calc((100%/2))] auto-cols-[calc((100%/1))] '>
              {
                Object.keys(Products).map((key, idx) => {
                  const { Amount, Title, Description, Type, Rate, totalRaters } = Products[key]
                  return (
                    <div key={key} className='group px-3 center'>
                      <Prod Amount={Amount} controls={controls} delay={idx / 10} Title={Title} Description={Description} Type={Type} Rate={Rate} totalRaters={totalRaters} />
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
