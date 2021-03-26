import chatServices from '../services/chatServices'

const roomReducer = (state = [], action) => {
	switch (action.type) {
    case 'UPDATE_ROOMS':
      return state.concat(action.data)
    default:
      return state
	}
}

export const updateRooms = () => {
  return async dispatch => {
    const returnedRooms = await chatServices.getRooms()
    dispatch({
      type: 'UPDATE_ROOMS',
      data: returnedRooms
    })
  }
}

export default roomReducer