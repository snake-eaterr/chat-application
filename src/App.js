import React from 'react'
import { useSelector } from 'react-redux'
import Login from './components/login/Login'
import SignUp from './components/signup/SignUp'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'
import Chat from './components/chat/Chat'
import Notification from './components/notification/Notification'
import './App.css'

const App = () => {

	const user = useSelector(state => state.user)

	return (
		<Router className="wrapper">
			<Notification />
			<Switch>
				<Route path="/signup">
					<SignUp />
				</Route>
				<Route path="/chat">
					{user ? <Chat /> : <Redirect to="/" />}
				</Route>
				<Route path="/">
					<Login />
				</Route>
			</Switch>
		</Router>
	)
}

export default App