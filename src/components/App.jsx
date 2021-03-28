import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Page404 from '../pages/Page404'
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'
import { Paper } from '@material-ui/core'

function App()
{
  const stateTheme = useSelector(state => state.theme.theme)
  const LightTheme = createMuiTheme({
    palette: {
      type:  "light" ,
      text:{
        primary: "rgb(18,28,66)",
      },
      background:{
        paper:"rgb(247,250,251)"
      },
      primary:{
        light:"rgb(72,105,238)",
        main:"rgb(72,105,238)",
        dark:"rgb(83,150,231)",
      },
      info:{
        light:"rgb(255,255,255)",
        main:"rgb(255,255,255)",
        dark:"rgb(27,30,61)",
      }
    }
  });
  const DarkTheme = createMuiTheme({
    palette: {
      type: "dark",
      text:{
        primary: "rgb(212,220,255)",
      },
      background:{
        paper:"rgb(23,25,51)"
        // rgb(247,250,251)
      },
      primary:{
        light:"rgb(72,105,238)",
        main:"rgb(72,105,238)",
        dark:"rgb(83,150,231)",
      },
      info:{
        light:"rgb(255,255,255)",
        main:"rgb(255,255,255)",
        dark:"rgb(27,30,61)",
      }
    }
  });

  return (
    <ThemeProvider theme={!stateTheme ? LightTheme : DarkTheme}>
      <Router>
        <Paper square>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route component={Page404} />
          </Switch>
        </Paper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
