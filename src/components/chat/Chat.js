import React, { useState } from 'react'
import RoomsBar from './roomsbar/RoomBar'
import MessageInput from './input/MessageInput'
import Messages from './messages/Messages'
import './Chat.css'

let socket

const Chat = () => {
  


  
  return(
    <div className="chatContainer">
      <RoomsBar className="roomsbar" />
      <Messages className="messages" />
      <MessageInput className="messagesInput" />
    </div>
  )
}

export default Chat