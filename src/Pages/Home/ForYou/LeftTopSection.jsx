import { useState, useContext } from 'react'
import { AuthenticationContext } from '../../../Store/Context/Authentication'
import { motion, useTransform } from 'framer-motion'
import ForYouCard from './Components/ForYouCard'
import { useMotionValueEvent } from 'framer-motion'
import { justForYou } from '../../../Store/urls'
import useFetch from '../../../Components/CustomHooks/useFetch'
import WindowSize from '../../../utils/WindowSize'


export default function LeftTopSection({ BigSection, children }) {
  const { Token } = useContext(AuthenticationContext)
  const { data, loading } = useFetch({
    url: `${justForYou()}?limit=5`,
    method: 'GET',
    Token
  })
  const { width } = WindowSize()
  // useMotionValueEvent(BigSection, 'change', (latest) => {
  //   console.log(latest)
  // })
  console.log({ data });
  const y = useTransform(BigSection, [0, 1], ['50%', '-100%'])
  return (
    <motion.div style={{ y: width >= 1280 ? y : 0 }} className="w-full h-full flex flex-col justify-center items-center px-5 text-[5vw] py-[15vh] space-y-[10vh] lg:space-y-[25vh] z-[-1]">
      {
        !loading && data && data.status === 'success' && data.data.productItems.map(item => (
          <ForYouCard key={item.id} item={item} />
        ))
      }
    </motion.div>
  )
}
