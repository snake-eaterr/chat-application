import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './Messages.css'



const Messages = () => {



	const messages = useSelector(state => state.messages)

	useEffect(() => {
		document.getElementById('last').scrollIntoView({ behavior: 'smooth' })
	}, [messages])
  
	return (
		<div className="outerMessagesContainer">
			<ul className="messagesList">
				{messages.map(msg => <li className="messageContainer" key={msg.user}>{msg.user}: {msg.text}</li> 
				)}
				<div id="last"></div>
			</ul> 
		</div>
	)
}

export default Messages