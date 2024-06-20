import Welcome from "./Welcome"
import Shop from "./Shop"

export default function Explore() {
  return (
    <div style={{
      background: 'rgba(212, 205, 205, 1)'
    }} className="relative w-full min-h-screen text-Black flex flex-col gap-40">

      <Welcome />
      <Shop />
    </div>
  )
}