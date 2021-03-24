import { Button } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
      NavBar
      <Link to="/login">
        <Button color="secondary" variant="outlined">Login</Button>
      </Link>
      <Link to="/register">register</Link>
      <Link to="/"> Home</Link>
    </div>
  )
}

export default Navbar
