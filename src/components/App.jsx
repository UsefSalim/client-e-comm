import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Page404 from '../pages/Page404'
function App() {
  return (
   <Router>
     <Switch>
       <Route exact path='/' component={Home}/>
       <Route exact path='/login' component={Login}/>
       <Route exact path='/register' component={Register}/>
       <Route component={Page404} />
     </Switch>
   </Router>
  );
}

export default App;
