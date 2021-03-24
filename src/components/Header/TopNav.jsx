import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Button } from '@material-ui/core';
import Categories from './Categories';



function TopNav()
{
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () =>
  {
    setOpen(true);
  };
  const handleClose = () =>
  {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <>
      <Box className={classes.box} height={40} boxShadow={2} bgcolor="black" borderRadius="20%" display="block" width="100%">
        <div style={{ textAlign: "center" }}>
          <Button className={classes.btn} onClick={handleClickOpen} size="small" color="primary"  >Categories</Button>
        </div>
        <Categories openDialog={open} handleClose={handleClose} />
      </Box>

    </>
  )
}
const useStyles = makeStyles(() => ({
  box: {
    marginTop: "-20px"
  },
  btn: {
    backgroundColor: "black",
    marginTop: "20px",
    fontWeight: 700,
    boxShadow: "5px 5px 20px 12px rgba(0,0,0,0.42)",
    "&:hover": {
      backgroundColor: "black"
    }
  }
}))

export default TopNav
