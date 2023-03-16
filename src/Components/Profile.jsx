import { useEffect } from "react"
import { Link, Typography } from "@mui/material";

const Profile = () => {

  useEffect(() => {
    document.title = 'Profile';
  }, [])

  return (
    <>
      <Typography variant="h1">
        Welcome to the Profile Page
      </Typography>
      <Link href="/" variant="body2">Home</Link>
    </>
  )
}

export default Profile