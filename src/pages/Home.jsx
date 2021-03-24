import React ,{useEffect}from 'react'
import Navbar from '../components/Header/Navbar'


function Home(props) {
  useEffect(() => {
    document.title = "Home Page"
  }, [])
  return (
    <>
     <Navbar/>
     {/* <Typography className={classes.h1} variant="h1" ></Typography> */}
    </>
  )
}

export default Home
