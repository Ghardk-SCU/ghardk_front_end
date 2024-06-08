import { useState, useEffect } from 'react'
import Welcome from './Welcome/Welcome'
import Categories from './Categories/index'
import PopularProd from './PopularProd/index'
import ForYou from './ForYou/index'
import TopRatedRoot from './TopRated/index'
export default function Home() {
  const [FirstColor, setFirstColor] = useState('#ACA08C')
  const [SecondColor, setSecondColor] = useState('#D4CDCD')
  return (
    <>
      <Welcome />
      <Categories />
      <PopularProd />
      <ForYou FirstColor={FirstColor} SecondColor={SecondColor} setFirstColor={setFirstColor} setSecondColor={setSecondColor}/>
      <TopRatedRoot FirstColor={FirstColor} SecondColor={SecondColor}/>
    </>
  )
}
