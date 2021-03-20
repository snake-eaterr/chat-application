import React from 'react'
import './Messages.css'


const Messages = () => {
  const messages = ['room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2']
  return (
    <div className="outerMessagesContainer">
        <ul className="messagesList">
          {messages.map(msg => <li className="messageContainer">{msg}</li>
          )}
        </ul>
    </div>
  )
}

export default Messages