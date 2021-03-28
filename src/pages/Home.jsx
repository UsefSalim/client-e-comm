import React ,{useEffect}from 'react'
import NavBar from '../components/Header/NavBar'


function Home() {
  
  useEffect(() => {
    document.title = "Home Page"
  }, [])
  return (
    <>
      <NavBar/>
      home page 
    </>
  )
}

export default Home
