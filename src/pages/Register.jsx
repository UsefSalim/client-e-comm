import React,{useEffect} from 'react'
import NavBar from '../components/Header/NavBar'

function Register(props) {
  setTimeout(() => {
    props.history.push('/')
  }, 3000);
   useEffect(() => {
    document.title = "Register Page"
  }, [])
  return (
     <>
      <NavBar/>
      <h1>Register</h1>
      <p>
      page en coure de consttruction vous allé etre redirecté vere la page l'accueil 
      </p> 
    </>
  )
}

export default Register
