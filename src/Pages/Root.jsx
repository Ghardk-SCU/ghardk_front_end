import { useState, useEffect, useContext } from "react"
import { Outlet } from "react-router-dom"
import NavBar from "../Components/NavBar/NavBar"
import useFetch from '../Components/CustomHooks/useFetch'
import { MyDataUrl } from '../Store/urls';
import Cookies from "js-cookie";
import { AuthenticationContext } from "../Store/Context/Authentication";

export default function Root() {
  const [errorMessage, setErrorMessage] = useState('')
  const { setIsLogedIn, setUserName, setUserImg, setRole } = useContext(AuthenticationContext)
  const { data } = useFetch({
    url: MyDataUrl(),
    method: 'GET',
    setErrorMessage,
    Token: Cookies.get('token')
  })
  useEffect(() => {
    if (!data) return;
    if (data.status === 'success') {
      setIsLogedIn(true)
      setUserName(data.data.user.name)
      setUserImg(data.data.user.img)
      setRole(data.data.user.role)
    } else {
      setIsLogedIn(false)
    }
  }, [data])
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}
