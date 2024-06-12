import { Routes, Route } from "react-router-dom"

import Root from './Pages/Root'
import Home from './Pages/Home/index'
import Login from './Pages/Login/index'
import SignUp from './Pages/SignUp/index'
import Page404 from './Pages/Page404/index'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />} >
        <Route index element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  )
}

export default App
