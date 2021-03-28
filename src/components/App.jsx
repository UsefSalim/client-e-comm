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
      type:  "light" 
    }
  });
  const DarkTheme = createMuiTheme({
    palette: {
      type: "dark",
    }
  });

  return (
    <ThemeProvider theme={stateTheme ? LightTheme : DarkTheme}>
      <Router>
        <Paper>
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
