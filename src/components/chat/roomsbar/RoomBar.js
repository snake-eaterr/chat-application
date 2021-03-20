import React from 'react'
import './RoomBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'



const RoomsBar = () => {
  
  const rooms =['room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room3', 'room4', 'room5', 'room1', 'room2', 'room3', 'room4', 'room5']
  return (
    <div className="roomsbar" id="room">
      <h2>snake </h2>
      <ul>
        {rooms.map(room => <li className="room">{room}</li>)}
      </ul>
      <p><FontAwesomeIcon icon={faGithub} /> Developed by snake-eaterr</p>
    </div>
  )
}

export default RoomsBar