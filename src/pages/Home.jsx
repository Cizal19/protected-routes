import { useState, useEffect } from "react"

import { Link, Typography } from "@mui/material";

const Home = () => {

  useEffect(() => {
    document.title = 'Home';
  }, [])

  return(
    <>
      <Typography variant="h1">
        Welcome to the Home Page
      </Typography>
      <Link href="/profile" variant="body2">Profile</Link>
    </>
  )
}

export default Home