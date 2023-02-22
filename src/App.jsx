import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/home' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  )
}

export default App
