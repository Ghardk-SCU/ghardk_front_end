import { useContext, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BackDropContext } from "../../Store/Context/BackDrop"
import { AuthenticationContext } from "../../Store/Context/Authentication"
import { IoMdClose } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { TbLock } from "react-icons/tb";
import { BsImageFill } from "react-icons/bs";

export default function BackdropHolder() {
  const { BackDropType, setBackDropType, BackDropActive, setBackDropActive } = useContext(BackDropContext)

  const CloseBackDrop = () => {
    setBackDropType('');
    setBackDropActive(false);
  }
  const Holder =
    BackDropActive &&
      BackDropType === 'settings' ?
      <Settings CloseBackDrop={CloseBackDrop} /> :
      null
  return (
    <AnimatePresence>
      {Holder}
    </AnimatePresence>
  )
}

const Settings = ({ CloseBackDrop }) => {
  const {
    isLogedIn, setIsLogedIn,
    Token, setToken,
    userName, setUserName,
    userImg, setUserImg,
    role, setRole
  } = useContext(AuthenticationContext)
  const FirstName = useRef()
  const LastName = useRef()
  // const Email = useRef()
  const Password = useRef()
  const [PasswordType, setPasswordType] = useState('password')
  const [Image, setImage] = useState('https://ik.imagekit.io/nyep6gibl/default.jpg?updatedAt=1718367419170')
  const [imgHover, setimgHover] = useState(false)
  const imgRef = useRef(null)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result)
    }
    reader.readAsDataURL(file)
  }

  return (
    <motion.div
      initial={{ opacity: 0, translateY: '0%', translateX: '-50%' }}
      animate={{ opacity: 1, translateY: '-50%', translateX: '-50%' }}
      exit={{ opacity: 0, translateY: '0%', translateX: '-50%' }}
      style={{ border: '2px solid rgba(212, 205, 205, 0.5)' }} className="bg-Black min-h-[500px] w-[calc(100%-40px)] sm:size-[500px] z-[10000] fixed top-1/2 left-1/2 rounded-3xl text-white p-4">
      <div className="w-full h-full">
        <button onClick={CloseBackDrop} className="block ml-auto">
          <IoMdClose size={30} />
        </button>
        <div className="w-full center">
          <motion.div
            onHoverStart={() => { setimgHover(true) }}
            onHoverEnd={() => { setimgHover(false) }}
            onClick={() => { imgRef.current.click() }}
            className='imgContainer cursor-pointer relative flex justify-center items-center'>
            {imgHover &&
              <div className='absolute text-primary'>
                <BsImageFill className='text-gray' />
                <input
                  onChange={handleFileChange}
                  ref={imgRef} className='hidden' type="file" accept="image/*" />
              </div>

            }
            <div className={`w-24 h-24 ${Image === 'default.jpg' && 'imgPlaceholder'}`}>
              <img className={`w-24 h-24  rounded-full select-none pointer-events-none ${imgHover ? "opacity-20" : ''}`} src={Image} />
            </div>
          </motion.div>
        </div>
        <div className="flex flex-wrap">
          <label className="p-2" htmlFor="First Name">First Name:</label>
          <input value={userName} className="flex-grow bg-transparent border-b-2 border-white-18 outline-none p-2" type="text" placeholder="First Name" />
        </div>
        <div className="flex flex-wrap">
          <label className="p-2" htmlFor="Last Name">Last Name:</label>
          <input value={userName} className="flex-grow bg-transparent border-b-2 border-white-18 outline-none p-2" type="text" placeholder="Last Name" />
        </div>
        <div className="flex flex-wrap imgSettings opacity-30">
          <label className="p-2" htmlFor="Email">Email:</label>
          <p className="flex-grow bg-transparent border-b-2 border-white-18 outline-none p-2" type="email">
            {userName}
            email
          </p>
          <div className="center mx-3">
            <TbLock size={20} />
          </div>
        </div>
        <div className="flex flex-wrap">
          <label className="p-2" htmlFor="Password">Password:</label>
          <input value={userName} className="flex-grow bg-transparent border-b-2 border-white-18 outline-none p-2" type={PasswordType} placeholder="Password" />
          <button onClick={() => {
            setPasswordType(prev => {
              if (prev === 'password') return 'text'
              else return 'password'
            })
          }} className="mx-3">
            <FaEye size={20} />
          </button>
        </div>
        <form className="flex flex-wrap items-center">
          <label className="p-2" htmlFor="Gender">Gender:</label>
          <div className="flex mr-2">
            <p className="mr-2 center gap-1">Male</p>
            <input value={userName} className="bg-transparent outline-none p-2" type="checkbox" placeholder="Gender" />
          </div>
          <div className="flex mr-2">
            <p className="mr-2 center gap-1">Female</p>
            <input value={userName} className="bg-transparent outline-none p-2" type="checkbox" placeholder="Gender" />
          </div>
        </form>
      </div>
    </motion.div>
  )
}