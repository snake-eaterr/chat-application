import React from 'react'
import Login from './components/login/Login'
import SignUp from './components/signup/SignUp'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Chat from './components/chat/Chat'
import './App.css'

const App = () => {

  return (
    <Router className="wrapper">
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Router path="/chat">
          <Chat />
        </Router>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default App