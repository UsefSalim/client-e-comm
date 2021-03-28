import React,{useEffect} from 'react'
import NavBar from '../components/Header/NavBar'

function Login(props) {
  setTimeout(()=>{
    props.history.push('/')
  },3000)
   useEffect(() => {
    document.title = "Login Page"
  }, [])
  return (
    <>
    <NavBar/>
    <h1>Login</h1>
    <p>
     page en coure de consttruction vous allé etre redirecté vere la page l'accueil 
    </p> 
    </>
  )
}

export default Login
