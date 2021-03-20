import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  


  const onChange = (value) => {
    console.log('Captcha value:', value)
  }

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Login to app</h1>
        <form>
          <div><input type="text" className="loginInput" placeholder="username" required value={username} onChange={({ target }) => setUsername(target.value)} /></div>
          <div><input type="text" className="loginInput" placeholder="password" required value={password} onChange={({ target }) => setPassword(target.value)} /></div>
          <button  className="loginButton" type="submit">LOG IN</button>
        </form>
        <p>Don't have an account? <Link id="link" to="/signup">Sign Up</Link></p>
      </div>
      <div className="githublink"><a  href="#"><p><FontAwesomeIcon icon={faGithub} /> source code</p></a></div>
    </div>
  )
}

export default Login