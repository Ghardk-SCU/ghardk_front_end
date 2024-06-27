import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Link } from 'react-router-dom'
import useFetch from '../../../Components/CustomHooks/useFetch'
import { getCategories } from '../../../Store/urls'
import CategorieLayout from './CategorieLayout'

import img1 from './assets/Categorie1.jpg'
import img2 from './assets/Categorie2.jpg'

export default function Categories() {
  const [Width, setWidth] = useState(0)
  const dragRef = useRef()
  const inView = useInView(dragRef)
  const controls = useAnimation()
  const { data, loading } = useFetch({
    url: getCategories(),
    method: 'GET'
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [inView])
  useEffect(() => {
    setWidth(dragRef.current.scrollWidth - dragRef.current.offsetWidth)
  }, [data])
  return (
    <motion.main className="relative center min-h-screen z-[1]">
      <section className='mainPadding w-full h-full flex justify-center items-center text-white'>
        <div className='flex flex-col lg:flex-row gap-10 w-full lg:h-[470px] overflow-hidden'>
          <div className='flex flex-col gap-14 items-center justify-center px-10'>
            <motion.h1 className='text-4xl md:text-6xl EBGaramond'>CATEGORIES</motion.h1>
            <Link to='/Explore' className='text-2xl px-10 py-4 Lekton hover:bg-white hover:text-black duration-300' style={{ border: '1px solid white' }}>Shop Now</Link>
          </div>
          <div className='flex-grow overflow-hidden'>
            <motion.div
              ref={dragRef} drag='x'
              dragConstraints={{ left: -Width, right: 0 }}
              whileTap={{ cursor: "grabbing" }}
              className='w-full h-full flex gap-8 pr-10'>
              {
                !loading && data && data.data.categories.map((item, index) => (
                  <CategorieLayout key={index} id={item.id} Title={item.name} img={item.image_url} delay={index * 0.1} controls={controls} />
                ))
              }
              {
                loading && [...Array(5)].map((item, index) => (
                  <LoadingSekeleton key={index} />
                ))
              }
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}
const LoadingSekeleton = () => {
  return (
    <div className="flex items-center animate-pulse justify-center min-h-[570px] min-w-[calc(100%+50px)] sm:min-h-[470px] sm:min-w-[320px]  bg-white/70 rounded-2xl">
      <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
      </svg>
    </div>
  )
}