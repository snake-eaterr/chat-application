import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login, loginSuccess } from '../../reducers/userReducer'
import chatServices from '../../services/chatServices'
import { Link, useHistory } from 'react-router-dom'
import { setNotification } from '../../reducers/notificationReducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './Login.css'


const Login = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')


	const history = useHistory()
	const dispatch = useDispatch()

	useEffect(() => {
		const loggedinUserJSON = window.localStorage.getItem('loggedinUser')
		if (loggedinUserJSON) {

			const returnedUser = JSON.parse(loggedinUserJSON)
			dispatch(login(returnedUser))
			dispatch(loginSuccess(returnedUser.token))
			chatServices.setToken(returnedUser.token)
			history.push('/chat')
		}
	}, [])

	const handleSubmit = async (event) => {
		event.preventDefault()
		try {
			const returnedUser = await chatServices.login(username, password)
			window.localStorage.setItem('loggedinUser', JSON.stringify(returnedUser))
			chatServices.setToken(returnedUser.token)
			dispatch(login(returnedUser))
			dispatch(loginSuccess(returnedUser.token))
			history.push('/chat')
		} catch(error) {
			dispatch(setNotification(error.response.data.data.error))
			setUsername('')
			setPassword('')
		}


    
	}

	return (
		<div className="joinOuterContainer">
			<div className="joinInnerContainer">
				<h1 className="heading">Login to app</h1>
				<form onSubmit={handleSubmit}>
					<div><input type="text" className="loginInput" placeholder="username" required value={username} onChange={({ target }) => setUsername(target.value)} /></div>
					<div><input type="password" className="loginInput" placeholder="password" required value={password} onChange={({ target }) => setPassword(target.value)} /></div>
					<button  className="loginButton" type="submit">LOG IN</button>
				</form>
				<p>Dont have an account? <Link id="link" to="/signup">Sign Up</Link></p>
			</div>
			<div className="githublink"><a  href="https://github.com/snake-eaterr/chat-application" target="_blank" rel="noreferrer" ><p><FontAwesomeIcon icon={faGithub} /> snake-eaterr, source code</p></a></div>
		</div>
	)
}

export default Login