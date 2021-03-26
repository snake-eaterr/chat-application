import chatServices from '../services/chatServices'
import { setNotification } from './notificationReducer'

const userReducer = (state = null, action) => {
	switch (action.type) {
    case 'LOGIN':
      return action.data
    case 'LOGOUT':
      return null
    case 'LOGIN_SUCCESS':
      return state
    case 'ROOM_CHANGE':
      return action.data
    default:
      return state
	}
}

export const login = (user) => {
	return {
		type: 'LOGIN',
		data: user
	}

}

export const logout = () => {
	return async dispatch => {
		window.localStorage.removeItem('loggedinUser')
		dispatch({
			type: 'LOGOUT'
		})
	}
}


export const loginSuccess = (token) => {
	return {
		type: 'LOGIN_SUCCESS',
		data: token
	}
}

export const changeRoom = (roomId) => {
	return async dispatch => {
		try {
			const returnedUser = await chatServices.changeRoom(roomId)
			dispatch({
				type: 'ROOM_CHANGE',
				data: returnedUser,
				roomId
			})
		} catch(error) {
			dispatch(setNotification(error.response.data.error))
			dispatch(logout())
		}
	}
}

export default userReducer