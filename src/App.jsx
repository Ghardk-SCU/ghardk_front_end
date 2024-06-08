import Home from './Pages/Home/index'
import SignUp from './Pages/SignUp/index'
import { ReactLenis } from '@studio-freight/react-lenis'


function App() {
  return (
    <>
      {/* <Home /> */}
      <SignUp />
      <ReactLenis root={true}/>
    </>
  )
}

export default App
