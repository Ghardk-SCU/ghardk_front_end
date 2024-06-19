import { createContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie';

export const AuthenticationContext = createContext()

export default function AuthenticationProvider({ children }) {
  const [isLogedIn, setIsLogedIn] = useState(true)
  const [userName, setUserName] = useState('')
  const [role, setRole] = useState('')
  const [userImg, setUserImg] = useState('https://ik.imagekit.io/nyep6gibl/default.jpg?updatedAt=1718367419170')
  const [Token, setToken] = useState(Cookies.get('token'));
  useEffect(() => {
    if (!isLogedIn) {
      Cookies.remove('token');
      setToken('');
      setUserName('');
      setUserImg('');
    } else {
      Cookies.set('token', Token, { expires: 7 });
    }
  }, [isLogedIn])

  return (
    <AuthenticationContext.Provider value={{
      isLogedIn, setIsLogedIn,
      Token, setToken,
      userName, setUserName,
      userImg, setUserImg,
      role, setRole
    }}>
      {children}
    </AuthenticationContext.Provider>
  )
}
