import Home from './Pages/Home/index'
import Login from './Pages/Login/index'
import { ReactLenis } from '@studio-freight/react-lenis'


function App() {
  return (
    <>
      <Home />
      {/* <Login /> */}
      <ReactLenis root={true}/>
    </>
  )
}

export default App
