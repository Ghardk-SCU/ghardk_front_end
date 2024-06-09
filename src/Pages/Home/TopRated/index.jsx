import Welcome from './Welcome'
import TopRated from './TopRated'
export default function TopRatedRoot({ FirstColor, SecondColor }) {
  return (
    <>
      <Welcome FirstColor={FirstColor} SecondColor={SecondColor}/>
      {/* <TopRated /> */}
    </>
  )
}
