import React ,{useEffect}from 'react'
// import Categories from '../components/Header/Categories'
import NavBar from '../components/Header/NavBar'


function Home() {
  
  useEffect(() => {
    document.title = "Home Page"
  }, [])
  return (
    <>
      <NavBar/>
      {/* <Categories/> */}
      home page 
    </>
  )
}

export default Home
