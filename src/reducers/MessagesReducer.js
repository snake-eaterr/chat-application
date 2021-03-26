const messagesReducer = (state = [], action) => {
	switch (action.type) {
		case 'UPDATE':
      return state.concat(action.data)
    case 'SEND_MESSAGE':
      return state // we don't need to update the state with the message, since the server will bounce it back to us
    case 'ROOM_CHANGED':
      return []
    default:
      return state
	}
}

export const updateMessages = (newMessage) => {
	return {
		type: 'UPDATE',
		data: newMessage
	}
}

export const sendMessage = (message) => {
	return {
		type: 'SEND_MESSAGE',
		data: message
	}
}

export const emptyForNew = () => {
	return {
		type: 'ROOM_CHANGED',
	}
}

export default messagesReducer