import { motion } from "framer-motion"
import CartLayout from "./CartLayout"
import smoke from './assets/smoke.png'
import Fillters from "./Fillters"
// rating, img, discreption, rank, isFavorite, name
const details = [
  {
    rating: 3.4,
    img: 'https://fastly.picsum.photos/id/796/200/300.jpg?hmac=tubV2vVJFyJ_KIav5eG2iKDmpKoctbrojgEFaflH_l4',
    discreption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rank: 1,
    isFavorite: true,
    name: 'Mohammed Nasr',
    totalRates: 100,
  },
  {
    rating: 3.4,
    img: 'https://fastly.picsum.photos/id/796/200/300.jpg?hmac=tubV2vVJFyJ_KIav5eG2iKDmpKoctbrojgEFaflH_l4',
    discreption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rank: 2,
    isFavorite: false,
    name: 'Mohammed Nasr',
    totalRates: 15,
  },
  {
    rating: 3.4,
    img: 'https://fastly.picsum.photos/id/796/200/300.jpg?hmac=tubV2vVJFyJ_KIav5eG2iKDmpKoctbrojgEFaflH_l4',
    discreption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rank: 3,
    isFavorite: false,
    name: 'Mohammed Nasr',
    totalRates: 80,
  },
]
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
          <Fillters />
        </div>
      </div>
      <div className="relative z-[1] min-h-[80vh]">
        <div style={{
          backgroundImage: `url(${smoke})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }} className="w-full h-full top-0 left-0 z-[-1] absolute opacity-[0.03]" />
        <div className="w-full h-full grid xl:grid-cols-3 place-items-center">
          <CartLayout details={details[0]} delay={0} classes="xl:-translate-y-5 xl:order-2" />
          <CartLayout details={details[1]} delay={0.1} classes="xl:-rotate-[10deg] xl:translate-y-10  xl:order-1 xl:mt-0 mt-20" />
          <CartLayout details={details[2]} delay={0.2} classes="xl:rotate-[10deg] xl:translate-y-10  xl:order-3" />
        </div>
      </div>
      <div className="center xl:mt-0 mt-20">
        <button className="Lekton text-2xl relative
          before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:content-[''] before:w-10 before:h-[2px] before:bg-white before:rounded-full
          hover:before:bg-Yellow hover:before:w-full before:duration-300
          hover:text-Yellow hover:duration-300
        ">VIEW MORE</button>
      </div>
    </motion.section>
  )
}
