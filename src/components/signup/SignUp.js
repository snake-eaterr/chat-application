import React, { useState } from 'react'
import ReCaptcha from 'react-google-recaptcha'
import '../login/Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const SignUp = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  


  const onChange = (value) => {
    console.log('Captcha value:', value)
  }

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Create Account</h1>
        <form>
          <div><input type="text" className="loginInput" placeholder="username" required value={username} onChange={({ target }) => setUsername(target.value)} /></div>
          <div><input type="text" className="loginInput" placeholder="password" required value={password} onChange={({ target }) => setPassword(target.value)} /></div>
          <button  className="loginButton" type="submit">Sign up</button>
          <div className="recaptcha"><ReCaptcha sitekey="6Ld86YUaAAAAAMrzg7GPXHkQhLP3hwhVxiHyvXmY" onChange={onChange} /></div>
        </form>
      </div>
      <div className="githublink"><a  href="#"><p><FontAwesomeIcon icon={faGithub} /> source code</p></a></div>
    </div>
  )
}

export default SignUp