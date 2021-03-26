import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setNotification } from '../../../reducers/notificationReducer'
import { sendMessage } from '../../../reducers/MessagesReducer'
import './MessageInput.css'


const MessageInput = () => {
	const [message, setMessage] = useState('')

	const dispatch = useDispatch()


	const onSend = (event) => {
		event.preventDefault()

		if(message === '') {
			return dispatch(setNotification('message can not be empty'))
		}
    
		setMessage('')
		dispatch(sendMessage(message))
    
	}
	return (
		<div className="inputContainer">
			<form onSubmit={onSend}><input placeholder="type your message" value={message} className="input" type="text" onChange={({ target }) => setMessage(target.value)}></input></form>
		</div>
	)
}

export default MessageInput