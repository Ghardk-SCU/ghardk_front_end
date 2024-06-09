import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'

import logo2 from '../../assets/Vector.svg'
import logo from '../../assets/logo.png'
import { IoIosMenu } from "react-icons/io";
import { MdOutlinePerson } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

export default function NavBar(props) {
  const [isOpen, setIsOpen] = useState(localStorage.getItem('isOpen') === 'true' ? true : false)
  const OpenAnim = {
    hidden: { height: 60, y: -50 },
    visible: { height: isOpen ? 'auto' : 60, y: 0 }
  }

  const ListAnim = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom) => ({ opacity: 1, y: 0, transition: { delay: custom } })
  }

  useEffect(() => {
    localStorage.setItem('isOpen', isOpen)
  }, [isOpen])

  return (
    <nav className='w-full fixed top-0 z-[100] sm:p-10 p-5 sm:pb-0'>
      <div className='relative'>
        <div className='absolute top-0 left-0'>
          <motion.img initial={{ y: -50 }} animate={{ y: 0 }} className='imgSettings w-[55px] cursor-pointer' src={logo} alt='logo' />
        </div>
        <motion.div
          variants={OpenAnim}
          initial='hidden'
          animate='visible'
          className='absolute shadow-xl top-0 right-0 flex items-center flex-col overflow-hidden bg-Beige rounded-md gap-10 px-5'>
          <motion.button onClick={() => { setIsOpen(prev => !prev) }}
            custom={0} variants={ListAnim} initial='hidden' animate="visible" title='Menu'
            className='cursor-pointer pt-4'>
            <IoIosMenu size={30} className='text-black' />
          </motion.button>
          <motion.button custom={0.1} variants={ListAnim} initial='hidden' animate="visible" title='Account' className='cursor-pointer'>
            <MdOutlinePerson size={30} className='text-black' />
          </motion.button>
          <motion.button custom={0.2} variants={ListAnim} initial='hidden' animate="visible" title='Cart' className='cursor-pointer'>
            <IoBagOutline size={30} className='text-black' />
          </motion.button>
          <motion.button custom={0.3} variants={ListAnim} initial='hidden' animate="visible" title='Explore' className='pb-8 cursor-pointer'>
            <IoSearch size={30} className='text-black' />
          </motion.button>
        </motion.div>
      </div>
    </nav >
  )
}

