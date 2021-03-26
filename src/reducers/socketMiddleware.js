import io from 'socket.io-client'
import { updateMessages, emptyForNew } from '../reducers/MessagesReducer'



let socket
const socketMiddleware = ({ dispatch }) => next => action => {
  
	if (action.type === 'LOGIN_SUCCESS') {
		socket = io.connect({ 																// add a url of running the server and client from two different origins
			extraHeaders: { Authorization: `Bearer ${action.data}` }
		})


		socket.on('message', (message) => {
			dispatch(updateMessages(message))
		})
	}

	if (action.type === 'SEND_MESSAGE') {
		socket.emit('sendMessage', action.data)
	}

	if (action.type === 'LOGOUT') {
		socket.close()
		console.log('closed socket connection')
		next(action)
	}

	if (action.type === 'ROOM_CHANGE') {
		socket.emit('changeRoom', action.roomId) 
		dispatch(emptyForNew())
		next(action)
	}

	return next(action)
}

export default socketMiddleware