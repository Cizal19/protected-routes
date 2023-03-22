import { Navigate, Outlet } from 'react-router-dom'
import { useState } from 'react'

const ProtectedRoutes = () => {
  const [auth, setAuth] = useState(
    () => JSON.parse(localStorage.getItem("token"))
  )

  return (
    auth ? <Outlet /> : <Navigate to='/signin' />
  )
}

export default ProtectedRoutes