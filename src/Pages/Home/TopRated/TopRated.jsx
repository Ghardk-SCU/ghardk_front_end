import { motion } from "framer-motion"
import CartLayout from "./CartLayout"
import smoke from './assets/smoke.png'
const Fillters = ['All', 'New', 'Top Rated', 'Trending', 'Best Seller', 'Featured']
export default function TopRated({ SecondColor: RightColor }) {
  return (
    <motion.section style={{ background: RightColor }} animate={{ backgroundColor: RightColor, transition: { duration: 0.5 } }} className="mainPadding min-h-screen bg-Black text-white">
      <div className="flex flex-col justify-center items-center gap-y-10">
        {/* <h1 className="text-7xl EBGaramond space-x-10">TOP RATED</h1> */}
        <div className="BeloveMelody relative w-full flex center gap-x-5 text-5xl">
          <span className="w-1/3 h-[2px] bg-Yellow/50"></span>
          IN
          <span className="w-1/3 h-[2px] bg-Yellow/50"></span>
        </div>
        <div className="flex gap-5 flex-wrap center">
          {
            Fillters.map((item, index) => (
              <button key={index} className="flex-grow border-[1px] rounded-full py-4 px-8">{item}</button>
            ))
          }
        </div>
      </div>
      <div className="relative z-[1] h-[80vh]">
        <div style={{
          backgroundImage: `url(${smoke})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }} className="w-full h-full top-0 left-0 z-[-1] absolute opacity-[0.03]" />
        <div className="w-full h-full grid grid-cols-3 place-items-center">
          <CartLayout delay={0.1} classes="-rotate-[10deg] translate-y-10"/>
          <CartLayout delay={0} classes="-translate-y-5"/>
          <CartLayout delay={0.2} classes="rotate-[10deg] translate-y-10"/>
        </div>
      </div>
      <div className="center">
        <button className="Lekton text-2xl relative
          before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:content-[''] before:w-10 before:h-[2px] before:bg-white before:rounded-full
          hover:before:bg-Yellow hover:before:w-full before:duration-300
          hover:text-Yellow hover:duration-300
        ">VIEW MORE</button>
      </div>
    </motion.section>
  )
}
