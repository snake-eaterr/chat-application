import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { logout, changeRoom } from '../../../reducers/userReducer'
import { updateRooms } from '../../../reducers/roomReducer'
import './RoomBar.css'



const RoomsBar = () => {
	const user = useSelector(state => state.user)
	const rooms = useSelector(state => state.rooms)


	const selectedRoomBgColor = {
		backgroundColor: 'rgb(240, 171, 42)'
	}
  
	const dispatch = useDispatch()

	useEffect(() => {
		if (rooms.length === 0) {
			dispatch(updateRooms())
		}
	}, [])

	const handleRoomChange = (roomId) => {
		dispatch(changeRoom(roomId))
	}
  
	const handleLogout = () => {
		dispatch(logout())
	}

	return (
		<div className="roomsbar">
			<div className="headerAndLogout">
				<h2>{user.username}</h2>
				<p onClick={handleLogout}>logout</p>
			</div>
			<ul>
				{rooms.map(room => {
					return <li key={room.id} onClick={() => handleRoomChange(room.id)} style={user.lastJoinedRoom === room.id ? selectedRoomBgColor : null}>{room.roomName}</li>
				})}
			</ul>
			<p><a href="https://github.com/snake-eaterr/chat-application" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faGithub} /> Developed by snake-eaterr</a></p>
		</div>
	)
}

export default RoomsBar