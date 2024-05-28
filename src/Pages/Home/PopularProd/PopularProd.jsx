import { motion } from 'framer-motion'
import smoke from './assets/smoke.png'

export default function PopularProd() {
  return (
    <main className="bg-DarkerBlue relative h-screen z-[1]">
      <Backgrounds />
      <section>
        Categories
      </section>
    </main>
  )
}

const Backgrounds = () => {
  return (
    <>
      <motion.div style={{
        backgroundImage: `url(${smoke})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        rotateX: '-180deg',
      }} className='w-full h-full absolute left-0 z-[-1] ' />
    </>
  )
}