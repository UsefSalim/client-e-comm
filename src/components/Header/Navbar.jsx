import React,{ useState } from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Toolbar ,AppBar,Button,IconButton} from '@material-ui/core';
import { NavLoginLinks, NavLogoutLinks } from '../../utils/Links'
import TopNav from './TopNav';
import StorefrontIcon from '@material-ui/icons/Storefront';
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  links: {
    textDecoration: "none",
    color: "white"
  },
  buttons: {
    margin: "0 8px",
    fontSize: "0.65rem",
    color: "inherit"
  }
}));

export default function Navbar(props)
{
  const classes = useStyles();
  const [isLogedIn, setLogedIn] = useState(false)
  const fullScreenNav =
    <AppBar position="sticky">
      <TopNav />
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
         <IconButton aria-label="delete">
            <StorefrontIcon />
          </IconButton>
          <Link className={classes.links} to="/">
           Jumix
            </Link>
        </Typography>
        {NavLoginLinks.map(({ to, name },index) => (
          <Link key={index} className={classes.links} to={to}>
            <Button className={classes.buttons} size="small" variant="outlined">{name}</Button>
          </Link>
        ))}
        {isLogedIn && (
          NavLogoutLinks.map(({ to, name },index) => (
            <Link key={index} className={classes.links} to={to}>
              <Button className={classes.buttons} size="small" variant="outlined">{name}</Button>
            </Link>
          ))
        )}
      </Toolbar>
    </AppBar>

  return (
    <>
      {fullScreenNav}
    </>
  );
}