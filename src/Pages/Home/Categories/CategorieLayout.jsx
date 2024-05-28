import { motion } from 'framer-motion'

export default function CategorieLayout({ img }) {
  return (
    <div className='min-h-[470px] min-w-[320px] flex flex-col space-y-2'>
      <div className='flex-grow overflow-hidden'>
        <motion.img draggable={false} className='w-full h-full opacity-50 hover:scale-110 hover:opacity-80 duration-1000 object-cover' src={img} alt="" />
      </div>
      <div className='space-y-2'>
        <h1 className="text-2xl">Jewelry</h1>
        <h1 className="opacity-50 text-sm">EXPLORE</h1>
      </div>
    </div>
  )
}
