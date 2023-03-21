import { useEffect } from "react"
import { Link, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


const Profile = () => {

  useEffect(() => {
    document.title = 'Profile';
  }, [])

  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/signin`;
    navigate(path);
  }

  const handleClick = () => {
    localStorage.removeItem("token")
    routeChange()
  }

  return (
    <>
      <Typography variant="h1">
        Welcome to the Profile Page
      </Typography>
      <Link href="/" variant="body2">Home</Link>
      <br />
      <Button
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleClick}
      >
        Logout
      </Button>
    </>
  )
}

export default Profile