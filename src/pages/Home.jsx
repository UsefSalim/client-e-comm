import React ,{useEffect}from 'react'
import { Typography } from '@material-ui/core'
import Navbar from '../components/Header/Navbar'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  h1: {
    // backgroundColor: 'black',
  },
});
function Home(props) {
  useEffect(() => {
    document.title = "Home Page"
    console.log(document)
  }, [])
  const classes = useStyles();
  return (
    <>
     <Navbar/>
     <Typography className={classes.h1} variant="h1" > Home</Typography>
    </>
  )
}

export default Home
