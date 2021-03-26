const http = require('http')
const socketio = require('socket.io')
const config = require('./utils/config')
const app = require('./app')
const socketioJwt = require('socketio-jwt')


const server = http.createServer(app)
let io
if (process.env.NODE_ENV === 'development') {
	io = socketio(server, {
		cors: {
			origin: 'http://localhost:3000',
			methods: ['GET', 'POST']
		}
	})
} else if (process.env.NODE_ENV === 'production') {
	io = socketio(server)
}




io.use(socketioJwt.authorize({
	secret: config.JWT_SECRET,
	handshake: true,
	auth_header_required: true
}))

io.on('connect', (socket) => {
	const user = socket.decoded_token


	socket.join(user.lastJoinedRoom)
	io.to(user.lastJoinedRoom).emit('message', { user: 'admin', text: `${user.username} has joined the room!` })
  

	socket.on('sendMessage', (message) => {
		io.to(user.lastJoinedRoom).emit('message', { user: user.username, text: message })
	})

	socket.on('disconnect', () => {
		io.to(user.lastJoinedRoom).emit('message', { user: 'admin', text: `${user.username} has left the room` })
	})

	socket.on('changeRoom', (roomId) => {
		socket.join(roomId)
		user.lastJoinedRoom = roomId
		io.to(user.lastJoinedRoom).emit('message', { user: 'admin', text: `${user.username} has joined the room!` })
	})
})


const PORT = config.PORT || 3001
server.listen(PORT, () => {
	console.log(`server running on port ${config.PORT}`)
})