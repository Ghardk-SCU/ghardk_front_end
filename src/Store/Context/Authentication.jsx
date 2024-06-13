import { createContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie';

export const AuthenticationContext = createContext()

export default function AuthenticationProvider({ children }) {
  const [isLogedIn, setIsLogedIn] = useState(true)
  const [userName, setUserName] = useState('ab')
  const [userImg, setUserImg] = useState('')
  const [Token, setToken] = useState(Cookies.get('token'));
  useEffect(()=>{
    if(!isLogedIn){
      Cookies.remove('token');
      setToken('');
      setUserName('');
      setUserImg('');
    }else{
      Cookies.set('token', Token, { expires: 40 });
    }
  },[isLogedIn])

  return (
    <AuthenticationContext.Provider value={{ 
      isLogedIn, setIsLogedIn,
      Token, setToken,
      userName, setUserName,
      userImg, setUserImg
     }}>
      {children}
    </AuthenticationContext.Provider>
  )
}
