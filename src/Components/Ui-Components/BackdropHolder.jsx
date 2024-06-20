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
    firstName, setFirstName,
    lastName, setLastName,
    userImg, setUserImg,
    role, setRole,
    gender, setGender,
    dob, setDob,
    email
  } = useContext(AuthenticationContext)

  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [PasswordType, setPasswordType] = useState([
    'password',
    'password',
    'password',
  ])
  const [imgHover, setimgHover] = useState(false)
  const imgRef = useRef(null)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUserImg(reader.result)
    }
    reader.readAsDataURL(file)
  }
  return (
    <motion.div
      initial={{ opacity: 0, translateY: '0%', translateX: '-50%' }}
      animate={{ opacity: 1, translateY: '-50%', translateX: '-50%' }}
      exit={{ opacity: 0, translateY: '0%', translateX: '-50%' }}
      style={{ border: '2px solid rgba(212, 205, 205, 0.5)' }} className="bg-Black h-[500px] w-[calc(100%-40px)] sm:size-[630px] max-h-[100vh] max-w-[100vw] z-[10000] fixed top-1/2 left-1/2 rounded-3xl text-white p-4 overflow-x-hidden overflow-y-auto">
      <div className="w-full h-full">
        <button onClick={CloseBackDrop} className="block ml-auto">
          <IoMdClose size={30} />
        </button>
        {/* Img */}
        <div className="w-full center">
          <motion.div
            onHoverStart={() => { setimgHover(true) }}
            onHoverEnd={() => { setimgHover(false) }}
            onClick={() => { imgRef.current.click() }}
            className='imgContainer cursor-pointer relative flex justify-center items-center'>
            {imgHover &&
              <form autoComplete="off" className='absolute text-primary'>
                <BsImageFill className='text-gray' />
                <input onChange={handleFileChange}
                  ref={imgRef} className='hidden' type="file" accept="image/*" />
              </form>

            }
            <div className='w-24 h-24'>
              <img className={`w-24 h-24  rounded-full select-none pointer-events-none ${imgHover ? "opacity-20" : ''}`} src={userImg} />
            </div>
          </motion.div>
        </div>
        {/* User Name */}
        <form autoComplete="off" className="flex flex-wrap">
          <label className="p-2" htmlFor="First Name">User Name:</label>
          <input onChange={(e) => { setUserName(e.target.value) }} value={userName} className="flex-grow bg-transparent border-b-2 border-white-18 outline-none p-2" type="text" placeholder="First Name" />
        </form>
        {/* First Name */}
        <form autoComplete="off" className="flex flex-wrap">
          <label className="p-2" htmlFor="First Name">First Name:</label>
          <input onChange={(e) => { setFirstName(e.target.value) }} value={firstName} className="flex-grow bg-transparent border-b-2 border-white-18 outline-none p-2" type="text" placeholder="First Name" />
        </form>
        {/* last Name */}
        <form autoComplete="off" className="flex flex-wrap">
          <label className="p-2" htmlFor="Last Name">Last Name:</label>
          <input onChange={(e) => { setLastName(e.target.value) }} value={lastName} className="flex-grow bg-transparent border-b-2 border-white-18 outline-none p-2" type="text" placeholder="Last Name" />
        </form>
        {/* Date of Birth */}
        <form autoComplete="off" className="flex flex-wrap py-2">
          <label className="p-2" htmlFor="Last Name">Date of Birth</label>
          <input onChange={(e) => { setDob(e.target.value) }} value={dob} className="bg-White/20 border-white-18 outline-none" type="date" />
        </form>
        {/* Email */}
        {/* <div autoComplete="off" className="flex flex-wrap imgSettings opacity-30">
          <label className="p-2" htmlFor="Email">Email:</label>
          <p className="truncate flex-grow bg-transparent border-b-2 border-white-18 outline-none p-2" type="email">
            {email}
          </p>
          <div className="center mx-3">
            <TbLock size={20} />
          </div>
        </div> */}
        {/* gender */}
        <form className="flex flex-wrap items-center">
          <p className="p-2" >Gender:</p>
          <div className="flex mr-2">
            <label className="mr-2 center gap-1">Male</label>
            <input checked={gender === 'male'} onChange={() => { setGender('male') }} className="bg-transparent outline-none p-2" type="radio" placeholder="Gender" name="option" />
          </div>
          <div className="flex mr-2">
            <label className="mr-2 center gap-1">Female</label>
            <input checked={gender === 'female'} onChange={() => { setGender('female') }} className="bg-transparent outline-none p-2" type="radio" placeholder="Gender" name="option" />
          </div>
        </form>
        <div className="center">
          <button className="bg-White text-black rounded-full px-7 py-3 hover:bg-yellow-200 duration-300">
            Save Changes
          </button>
        </div>
        {/* Passwords */}
        <form autoComplete="off" className="flex flex-wrap">
          <label className="p-2" htmlFor="Password">Old Password:</label>
          <input onChange={(e) => { setOldPassword(e.target.value) }} value={oldPassword} className="flex-grow bg-transparent border-b-2 border-white-18 outline-none p-2" type={PasswordType[0]} placeholder="Old Password" />
          <button type="button" onClick={() => {
            setPasswordType(prev => {
              if (prev[0] === 'password') return ['text', prev[1], prev[2]]
              else return ['password', prev[1], prev[2]]
            })
          }} className="mx-3">
            <FaEye size={20} />
          </button>
        </form>
        <form autoComplete="off" className="flex flex-wrap">
          <label className="p-2" htmlFor="Password">New Password:</label>
          <input onChange={(e) => { setNewPassword(e.target.value) }} value={newPassword} className="flex-grow bg-transparent border-b-2 border-white-18 outline-none p-2" type={PasswordType[1]} placeholder="New Password" />
          <button type="button" onClick={() => {
            setPasswordType(prev => {
              if (prev[1] === 'password') return [prev[0], 'text', prev[2]]
              else return [prev[0], 'password', prev[2]]
            })
          }} className="mx-3">
            <FaEye size={20} />
          </button>
        </form>
        <form autoComplete="off" className="flex flex-wrap">
          <label className="p-2" htmlFor="Password">Confirm Password:</label>
          <input onChange={(e) => { setConfirmPassword(e.target.value) }} value={confirmPassword} className="flex-grow bg-transparent border-b-2 border-white-18 outline-none p-2" type={PasswordType[2]} placeholder="Confirm Password" />
          <button type="button" onClick={() => {
            setPasswordType(prev => {
              if (prev[2] === 'password') return [prev[0], prev[1], 'text']
              else return [prev[0], prev[1], 'password']
            })
          }} className="mx-3">
            <FaEye size={20} />
          </button>
        </form>
        <div className="center py-5">
          <button className="bg-White text-black rounded-full px-7 py-3 hover:bg-yellow-200 duration-300">
            Uppdate Password
          </button>
        </div>
      </div>
    </motion.div>
  )
}