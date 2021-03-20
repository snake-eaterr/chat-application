import React from 'react'
import './MessageInput.css'


const MessageInput = () => {
  return (
    <div className="inputContainer">
      <input placeholder="type your message" className="input" type="text"></input>
    </div>
  )
}

export default MessageInput