import React from 'react'
import Events from './pages/events'
import Signup from './pages/signup'
import Signin from './pages/signin'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  // TODO : create a css stylesheet and remove these temporary styles
  const signin_style = {
    'float': 'right',
  }
  const title_style = {
    'text-decoration': 'none',
    'font-size': '35px',
    'font-weight': 'bold'
  }
  // TODO : add a state to check if the user is logged in now
  return (
    <Router>
      {/* TODO : design navbar */}
      <nav>
        <Link to='/' style={title_style}>TinySocial</Link>
        {/* TODO : set this to sign out when the user is logged in */}
        <Link to="/signin" style={signin_style}>Sign In</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Events />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />  
        </Route>
      </Switch>
    </Router>
  );
}

export default App
