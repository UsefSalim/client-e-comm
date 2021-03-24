import React,{useEffect} from 'react'
import Navbar from '../components/Header/Navbar'

function Login() {
   useEffect(() => {
    document.title = "Login Page"
  }, [])
  return (
    <>
    <Navbar/>
      Login
    </>
  )
}

export default Login
