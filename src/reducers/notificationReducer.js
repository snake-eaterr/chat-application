const notificationReducer = (state = null, action) => {
	switch (action.type){
    case 'SET_NOTIFICATION':
      return action.data
    case 'CLEAR_NOTIFICATION':
      return null
    default:
      return state
	}
}

let id
export const setNotification = (message, type) => {
	return async dispatch => {
		dispatch({
			type: 'SET_NOTIFICATION',
			data: {message, type}
		})
		clearTimeout(id)

		id = setTimeout(() => {
			dispatch({
				type: 'CLEAR_NOTIFICATION'
			})
		}, 10000)
    
	}
}

export default notificationReducer