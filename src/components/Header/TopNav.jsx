import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Button } from '@material-ui/core';



function TopNav()
{
  const classes = useStyles();
  return (
    <>
      <Box className={classes.box} height={40} bgcolor="black" borderRadius="20%" display="block" width="100%">
        <div style={{textAlign:"center"}}>
          <Button className={classes.btn}  size="small" color="primary"  >Categories</Button>
        </div>
      </Box>
      
    </>
  )
}

const useStyles = makeStyles(() => ({
  box: {
    marginTop:"-20px"
  },
  btn:{
     backgroundColor:"black",
     marginTop:"20px",
     fontWeight:700,
     "&:hover": {
        backgroundColor: "black"
    }
  }
}))
export default TopNav
