
// // import { IconButton } from '@material-ui/core'
import { Switch } from '@material-ui/core'
// import React from 'react'
// // import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
 import {useDispatch,useSelector} from 'react-redux'
 import {switchtheme} from "../../redux/ducks/theme"
// function NavBar()
// {
//   const theme = useSelector(state => state.theme.theme)
//   const dispatch = useDispatch()
//   const handelSwitchTheme = ()=>{
//     dispatch(switchtheme())
//   }
//   return (
//     <div>
//        <Switch
//         checked={theme}
//         onChange={handelSwitchTheme}
//         name="checkedA"
//         inputProps={{ 'aria-label': 'secondary checkbox' }}
//       />
//     </div>
//   )
// }

// export default NavBar

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar()
{
  const classes = useStyles();
  const theme = useSelector(state => state.theme.theme)
  const dispatch = useDispatch()
  const handelSwitchTheme = () =>
  {
    dispatch(switchtheme())
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
          <Switch
            checked={theme}
            onChange={handelSwitchTheme}
            name="checkedA"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
