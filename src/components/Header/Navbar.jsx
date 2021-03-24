import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { NavLoginLinks,NavLogoutLinks } from '../../utils/Links'

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
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link className={classes.links} to="/">
            E-Commerce
            </Link>
        </Typography>
        {NavLoginLinks.map(({ to, name }) => (
          <Link className={classes.links} to={to}>
            <Button className={classes.buttons} size="small" variant="outlined">{name}</Button>
          </Link>
        ))}
        {isLogedIn && (
          NavLogoutLinks.map(({ to, name }) => (
          <Link className={classes.links} to={to}>
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