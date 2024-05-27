import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import WindowSize from '../../utils/WindowSize';

import logo from '../../assets/logo.png'
import { IoIosMenu } from "react-icons/io";
import { MdOutlinePerson } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(localStorage.getItem('isOpen') === 'true' ? true : false)
  const width = WindowSize().width;
  const OpenAnim = {
    hidden: { height: 0 },
    visible: { height: isOpen ? 'auto' : 80 }
  }

  const ListAnim = {
    hidden: { opacity: 0, x: 100 },
    visible: (custom) => ({ opacity: 1, x: 0, transition: { delay: custom } })
  }

  useEffect(() => {
    localStorage.setItem('isOpen', isOpen)
  }, [isOpen])

  return (
    <nav className='flex justify-between w-full fixed top-0 '>
      <div>
        <motion.img initial={{ x: -100 }} animate={{ x: 0 }} className='w-16 ml-5 cursor-pointer' src={logo} alt='logo' />
      </div>
      <motion.div
        variants={OpenAnim}
        initial='hidden'
        animate='visible'
        className='h-0 sm:h-auto flex items-center flex-col overflow-hidden bg-Beige rounded-full sm:rounded-none sm:rounded-b-full gap-10 px-5'>
        <motion.button onClick={() => { setIsOpen(prev => !prev) }}
          custom={0} variants={ListAnim} initial='hidden' animate="visible" title='Menu'
          className='cursor-pointer pt-5'>
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
    </nav>
  )
}

