import React, { useState } from 'react'
import ReCaptcha from 'react-google-recaptcha'
import '../login/Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useDispatch } from 'react-redux'
import { setNotification } from '../../reducers/notificationReducer'
import chatServices from '../../services/chatServices'
import { useHistory, Link } from 'react-router-dom'


const SignUp = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [captcha, setCaptcha] = useState('')

	const dispatch = useDispatch()
	const history = useHistory()
  
	const onSubmit = async (event) => {
		event.preventDefault()


		if(!captcha) {
			return dispatch(setNotification('Captcha is required', 'FAILURE'))
		}

		try {
			await chatServices.signup(username, password, captcha)
		} catch (error) {
			setUsername('')
			setPassword('')
			console.log('here')
			return dispatch(setNotification(error.response.data.error))
      
		}
    
		dispatch(setNotification('signup success, now log in!', 'SUCCESS'))
		history.push('/login')
    
	}

	const onChange = (value) => {
		setCaptcha(value)
	}

	return (
		<div className="joinOuterContainer">
			<div className="joinInnerContainer">
				<h1 className="heading">Create Account</h1>
				<form onSubmit={onSubmit}>
					<div><input type="text" className="loginInput" placeholder="username" required value={username} onChange={({ target }) => setUsername(target.value)} /></div>
					<div><input type="text" className="loginInput" placeholder="password" required value={password} onChange={({ target }) => setPassword(target.value)} /></div>
					<div className="recaptcha"><ReCaptcha sitekey="6Ld6VooaAAAAAI9WK1d4pCFMEVP-NzHzTipDByzp" onChange={onChange} /></div>
					<button  className="loginButton" type="submit">Sign up</button>
				</form>
				<p>Already have an account? <Link id="link" to="/login">log in</Link></p>
			</div>
			<div className="githublink"><a  href="#"><p><FontAwesomeIcon icon={faGithub} /> source code</p></a></div>
		</div>
	)
}

export default SignUp