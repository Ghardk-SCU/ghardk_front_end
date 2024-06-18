import { useState, useRef, useEffect, useContext } from 'react';
// import { toast } from 'react-toastify';
import { motion } from 'framer-motion'
// import { UserCtx } from '../../Store/Context/UserContext';
import Spinner from '../../Components/Ui-Components/Spinner'
// import { VerifyOTP } from '../../Store/urls'
// import Cookies from 'js-cookie';
// const url = VerifyOTP();

const OtpComponent = ({ Type, setType }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  // const { Email } = useContext(UserCtx);
  // const { setToken } = useContext(UserCtx);
  const [color, setColor] = useState('#757575');
  const [Focused, setFocused] = useState(0);
  const [Loading, setLoading] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(1);
  const inputRefs = useRef([]);
  // #ff5959 red
  // #757575 gray
  // #00ff80 green
  const handleFocus = (i = 0) => {
    for (; i < 6; i++) {
      if (otp[i] === '') {
        setFocused(i);
        return;
      }
    }
    setFocused(5);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Loading) return;
    if (otp.join('').length !== 6) {
      setColor('#ff5959');
      setSubmitClicked(prev => prev + 1);
    }
    // return;
    // fetch here and check if the otp is correct then check if the user is already in the database
    // if the user is already in the database then setLogedIn(true)
    // if the user is not in the database then setType(2)
    // try {
    //   setLoading(true);
    //   const response = await fetch(url, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       email: Email,
    //       secretToken: otp.join('')
    //     }),
    //   });
    //   const data = await response.json();
    //   setLoading(false);
    //   if (data.status === 'success') {
    //     setType(2);
    //     setToken(data.token);
    //     Cookies.set('token', data.token, {
    //       expires: 40,
    //       secure: true
    //     });
    //   } else {
    //     toast(data.message, {
    //       position: "top-right",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "dark",
    //     });
    //     setColor('#ff5959');
    //     setSubmitClicked(prev => prev + 1);
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  }
  const handleChange = (e, num) => {
    // remove all spaces from e.target.value
    if (Loading) return;
    e.target.value = e.target.value.replace(/\s/g, '');
    setColor('#757575');
    if (!e.target.value) {
      // if backspace is pressed and the value is empty
      let temp = [...otp];
      temp[num] = '';
      setFocused(Math.max(num - 1, 0));
      setOtp(temp);
      return;
    } else if (e.target.value.length >= 2) {
      if (otp[num].length === 1 && e.target.value.length === 2) {
        let temp = [...otp];
        temp[num] = e.target.value[0] === otp[num] ? e.target.value[1] : e.target.value[0];
        setOtp(temp);
        if (temp[num]) handleFocus(num + 1)
        return;
      }


      // if user copy pasted the value
      let start = 0;
      let temp = [...otp];
      for (let i = num; i < 6; i++) {
        temp[i] = e.target.value[start];
        start++;
        if (start === e.target.value.length) break;
      }
      setOtp(temp);
      handleFocus(start)
      return;
    }


    for (let i = 0; i < 6; i++) {
      if (otp[i] === '') {
        let temp = [...otp];
        let n = e.target.value.length;
        temp[i] = e.target.value[n - 1];
        setOtp(temp);
        handleFocus(i + 1)
        return;
      }
    }
  }

  useEffect(() => {
    inputRefs.current[0].focus();
  }, [])

  useEffect(() => {
    inputRefs?.current[Focused]?.focus();
  }, [Focused])

  const myClass = `flex-grow border-[1px] border-[${color}] w-[40px] text-center outline-primary rounded-md bg-transparent py-5 font-bold`
  return (
    <form onSubmit={handleSubmit} className='flex flex-col space-y-10 px-10 w-full'>
      <div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: [-20, 0, 20, 0] }}
          transition={{ duration: 0.1 }}
          key={submitClicked}
          className='flex flex-wrap gap-2 mt-5 items-center'>
          {
            [0, 1, 2, 3, 4, 5].map((ele, key) => {
              return (
                <input key={key} ref={(item) => (inputRefs.current[ele] = item)}
                  onChange={(e) => handleChange(e, ele)}
                  value={otp[ele]} type="text" className={myClass} />
              )
            })
          }
        </motion.div>
      </div>
      <button className={`bg-Black Fredoka text-White text-[22px] w-[100%] py-[14px] rounded-[20px]
							relative overflow-hidden inline-block z-10
							transition-all duration-300 ease-in-out
							focus:outline-none
							hover:py-[13px] hover:my-[1px]
							before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:-z-10
							before:rounded-inherit before:bg-[#505050] before:bg-opacity-40 
							before:transition-all before:duration-300 before:ease-in-out
							hover:before:left-0 
							${Loading ? 'cursor-wait before:left-[0] w-[105%] my-[1px] py-[13px]' : 'cursor-pointer before:left-[-100%] w-[100%] my-0 py-[14px]'} `}>
        {Loading ? <Spinner /> : 'Confirm email'}
      </button>
    </form>

  )
}

export default function VarifyCode() {
  return (
    <>
      <p className='mt-5 EBGaramond text-3xl'>Check your email</p>
      <OtpComponent />
    </>
  )
}