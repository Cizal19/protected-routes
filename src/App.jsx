import SignUp from "./Components/SignUp"
import SignIn from "./Components/SignIn"
import Home from "./Components/Home"
import Profile from "./Components/Profile"
import { Routes, Route } from "react-router-dom"



const App = () => {
  return (
    <Routes>
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/' element={<Home />} exact/>
      <Route path='/profile' element={<Profile />} />
    </Routes>
  )
}

export default App
