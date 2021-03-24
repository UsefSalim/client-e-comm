import React,{useEffect} from 'react'
import Navbar from '../components/Header/Navbar'

function Register() {
   useEffect(() => {
    document.title = "Register Page"
  }, [])
  return (
    <>
    <Navbar/>
      Register
    </>
  )
}

export default Register
