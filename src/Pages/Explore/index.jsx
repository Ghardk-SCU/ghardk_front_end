import Welcome from "./Welcome"
import Shop from "./Shop"
import DetailsCard from './Components/DetailsCard'

export default function Explore() {
  return (
    <div style={{
      background: 'rgba(212, 205, 205, 1)'
    }} className="relative w-full min-h-screen text-Black">
      
      {/* <Welcome /> */}
      <Shop />
      <DetailsCard />
    </div>
  )
}