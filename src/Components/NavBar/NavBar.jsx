import { useState, useEffect, useContext, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { AuthenticationContext } from '../../Store/Context/Authentication'
import { searchByImage } from '../../Store/urls'
import { BackDropContext } from '../../Store/Context/BackDrop';
import Spinner from '../Ui-Components/Spinner';
import Fetch from '../CustomHooks/Fetch'

import logo from '../../assets/logo.png'
import { IoIosMenu } from "react-icons/io";
import { MdOutlinePerson } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { TiClipboard } from "react-icons/ti";
import { IoIosLogOut } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaCamera } from "react-icons/fa";



export default function NavBar({ Open }) {
  const { isLogedIn } = useContext(AuthenticationContext)

  const [isOpen, setIsOpen] = useState(false)
  const [showAccount, setShowAccount] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const Navigate = useNavigate()

  const OpenAnim = {
    hidden: { height: 60, y: -50 },
    visible: { height: isOpen ? 'auto' : 60, y: 0 }
  }

  const ListAnim = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom) => ({ opacity: 1, y: 0, transition: { delay: custom } })
  }

  useEffect(() => {
    setIsOpen(false)
    setShowAccount(false)
    setShowSearch(false)
  }, [Open])
  const handleAccountClicked = () => {
    setIsOpen(true)
    setShowSearch(false)
    if (!isLogedIn) return Navigate('/login')
    setShowAccount(prev => !prev)
  }
  const handleSearchClicked = () => {
    setIsOpen(true)
    setShowAccount(false)
    setShowSearch(prev => !prev)
  }
  const handleMenuClicked = () => {
    setIsOpen(prev => !prev)
    setShowAccount(false)
    setShowSearch(false)
  }

  useEffect(() => {
    if (!isLogedIn) {
      setShowAccount(false)
    }
  }, [isLogedIn])

  return (
    <nav>
      <div className='fixed z-[100] sm:top-10 top-5 sm:left-10 left-5 mix-blend-difference'>
        <Link to='/'>
          <motion.img initial={{ y: -50 }} animate={{ y: 0 }} className='imgSettings w-[55px] cursor-pointer' src={logo} alt='logo' />
        </Link>
      </div>
      <div className='fixed z-[100] sm:top-10 top-5 sm:right-10 right-5'>
        <motion.div
          variants={OpenAnim}
          initial='hidden'
          animate='visible'
          className='absolute top-0 right-0 flex items-center flex-col bg-Beige shadow-xl rounded-md gap-10 px-5'>
          <motion.button onClick={handleMenuClicked}
            custom={0} variants={ListAnim} initial='hidden' animate="visible" title='Menu'
            className='cursor-pointer mt-4'>
            <IoIosMenu size={30} className='text-black' />
          </motion.button>
          <div className='relative'>
            {isOpen && <motion.button onClick={handleAccountClicked} custom={0.1} variants={ListAnim} initial='hidden' animate="visible" title='Account' className='cursor-pointer'>
              <MdOutlinePerson size={30} className='text-black' />
            </motion.button>}
            <AnimatePresence>
              {showAccount && <AccountMenu setShowAccount={setShowAccount} />}
            </AnimatePresence>
          </div>
          <div className='relative'>
            {isOpen && <motion.button onClick={() => { setIsOpen(true) }} custom={0.2} variants={ListAnim} initial='hidden' animate="visible" title='Cart' className='cursor-pointer'>
              <Link to='/cart'>
                <IoBagOutline size={30} className='text-black' />
              </Link>
            </motion.button>}
          </div>
          <div className='relative'>
            {isOpen && <motion.button onClick={handleSearchClicked} custom={0.3} variants={ListAnim} initial='hidden' animate="visible" title='Explore' className='mb-8 cursor-pointer'>
              <Link to='/Search'>
                <IoSearch size={30} className='text-black' />
              </Link>
            </motion.button>}
          </div>
        </motion.div>
      </div>
    </nav>
  )
}

const AccountMenu = ({ setShowAccount }) => {
  const {
    setIsLogedIn,
    userImg, setUserImg,
    userName, setUserName,
    role
  } = useContext(AuthenticationContext)
  const { setBackDropActive, BackDropActive, setBackDropType } = useContext(BackDropContext)

  return (
    <>
      <motion.div
        initial={{ clipPath: 'inset(0 0 0 100%)' }}
        animate={{ clipPath: 'inset(0 0 0 0)' }}
        style={{ border: '2px solid rgba(212, 205, 205, 0.5)' }} className='rounded-3xl absolute -top-5 right-16 text-white overflow-hidden bg-black w-[220px] h-[280px] py-2'>
        {role && <div className='px-8 w-full h-[20%] flex justify-between'>
          <div>
            <img className='rounded-full object-cover aspect-square size-[100%]' src={userImg} alt="" />
          </div>
          <div className='text-xs flex flex-col justify-center'>
            <p className='w-[90px] truncate' title={userName}>{userName}</p>
          </div>
        </div>}
        {!role && <div className='w-full h-full center'><Spinner /></div>}
        {role &&
          <div className='flex flex-col justify-between flex-grow px-6 py-5 w-full h-[80%] bg-black'>
            <button onClick={() => {
              setBackDropActive(true)
              setBackDropType('settings')
              setShowAccount(false)
            }} className='flex items-center gap-x-3'>
              <IoSettingsOutline className='font-bold' size={20} />
              <p>Account Settings</p>
            </button>
            <button onClick={() => {
              setBackDropActive(true)
              setBackDropType('orders')
              setShowAccount(false)
            }} className='flex items-center gap-x-3'>
              <TiClipboard className='font-bold' size={20} />
              <p>Orders</p>
            </button>
            <Link to='Favorites' className='flex items-center gap-x-3'>
              <FaRegHeart className='font-bold' size={20} />
              <p>Favorites</p>
            </Link>
            <Link to='Favorites' className='flex items-center gap-x-3'>
              <IoIosNotifications className='font-bold' size={20} />
              <p>Notifications</p>
            </Link>
            <button onClick={() => { setIsLogedIn(false); setShowAccount(false); window.location.reload() }} className='flex items-center gap-x-3'>
              <IoIosLogOut className='font-bold' size={20} />
              <p>Log out</p>
            </button>
          </div>}
      </motion.div>
      <div className='absolute -top-5 right-16'>
        <div style={{ clipPath: 'polygon(100% 50%, 0 0, 0 100%)' }}
          className='absolute top-5 -right-6 w-8 h-8 bg-black z-[2]'
        />
        <div style={{ clipPath: 'polygon(100% 50%, 0 0, 0 100%)', background: 'rgba(212, 205, 205, 0.5)' }}
          className='absolute top-[22px] -right-[28px] w-7 h-7 '
        />
      </div>
    </>
  )
}

const SearchMenu = () => {
  const [imgSearch, setImgSearch] = useState('')
  const imgRef = useRef(null)
  const Navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (e.target[0].value)
      Navigate(`/Search/${e.target[0].value}`)
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImgSearch(reader.result)
    }
    reader.readAsDataURL(file)
    console.log('Search for img looks like this ', { img: e.target.files[0] })
    // searchByImage()
  }
  return (
    <motion.div
      initial={{ clipPath: 'inset(0 0 0 100%)' }}
      animate={{ clipPath: 'inset(0 0 0 0)' }}
      className='absolute top-[-10px] right-[49px] text-white rounded-r-0 rounded-l-full bg-Beige w-[220px] h-[60px] center p-2'>
      <form onSubmit={handleSubmit} className='mr-2 rounded-full bg-black w-full h-full ' action="">
        <input type='text' placeholder='Search' className='w-full h-full bg-transparent outline-none border-none px-3' />
      </form>
      <div onClick={() => { imgRef.current.click() }}
        className='imgContainer cursor-pointer relative flex justify-center items-center'>
        <FaCamera size={20} color='black' />
        <input onChange={handleFileChange}
          ref={imgRef} className='hidden' type="file" accept="image/*" />
      </div>
    </motion.div>
  )
}
