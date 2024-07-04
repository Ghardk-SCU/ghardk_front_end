import { useState, useContext } from 'react'
import { AuthenticationContext } from '../../../Store/Context/Authentication'
import ForYouCard from './Components/ForYouCard'
import { useMotionValueEvent } from 'framer-motion'
import { justForYou } from '../../../Store/urls'
import useFetch from '../../../Components/CustomHooks/useFetch'


export default function LeftTopSection({ BigSection }) {
  const { Token } = useContext(AuthenticationContext)
  const { data, loading } = useFetch({
    url: justForYou(),
    method: 'GET',
    token: Token,
  })
  // useMotionValueEvent(BigSection, 'change', (latest) => {
  //   console.log(latest)
  // })
  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-5 text-[5vw] py-[15vh] space-y-10 z-[-1]">
      {
        !loading && data && data.status === 'success' && data.data.productItems.map(item => (
          <ForYouCard key={item.id} item={item} />
        ))
      }
    </div>
  )
}
