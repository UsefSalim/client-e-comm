
import { Switch } from '@material-ui/core'

import { useDispatch, useSelector } from 'react-redux'
import { switchtheme } from "../../redux/ducks/themeSlice"
import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
  const theme = useSelector(state => state.theme.value)
  const dispatch = useDispatch()
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
          <Link to="/">Home</Link>
          <Link to="/login">login</Link>
          <Link to="/register">register</Link>
          <Link to="/admindashboard">admindashboard</Link>
          <Switch
            checked={theme}
            onChange={() => dispatch(switchtheme())}
            name="checkedA"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
