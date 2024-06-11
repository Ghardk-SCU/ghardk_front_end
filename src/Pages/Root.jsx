import { Outlet } from "react-router-dom"
import NavBar from "../Components/NavBar/NavBar"

export default function Root() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}
