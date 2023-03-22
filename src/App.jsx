import SignUp from "./Components/SignUp"
import SignIn from "./Components/SignIn"
import Home from "./Components/Home"
import Profile from "./Components/Profile"
import { Routes, Route } from "react-router-dom"
import ProtectedRoutes from "./utils/ProtectedRoutes"


const App = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path='/home' element={<Home />} exact/>
        <Route path='/profile' element={<Profile />} />
      </Route>
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />
    </Routes>
  )
}

export default App
