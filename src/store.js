import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import notificationReducer from './reducers/notificationReducer'
import messagesReducer from './reducers/MessagesReducer'
import roomReducer from './reducers/roomReducer'
import socketMiddleware from './reducers/socketMiddleware'


const reducer = combineReducers({
	user: userReducer,
	notification: notificationReducer,
	messages: messagesReducer,
	rooms: roomReducer
})

const store = createStore(reducer, applyMiddleware(thunk, socketMiddleware))

export default store