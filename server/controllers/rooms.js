const roomRouter = require('express').Router()
const User = require('../models/User')
const Room = require('../models/Room')
const jwt = require('jsonwebtoken')
const config = require('../utils/config')



const getTokenFrom = request => {
	const authorization = request.get('authorization')
	if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
		return authorization.substring(7)
	}

	return null
}

roomRouter.get('/rooms', async (request, response) => {
	const rooms = await Room.find({})
	response.json(rooms)
})

roomRouter.post('/rooms', async (request, response) => {
	const body = request.body
	const token = getTokenFrom(request)
	const decodedToken = jwt.verify(token, config.JWT_SECRET)
	if(!token || !decodedToken) {
		return response.status(401).json({ error: 'token missing or invalid' })
	}

	const user = await User.findById(decodedToken.id)
	const room = new Room({
		roomName: body.roomName
	})

	const savedRoom = await room.save()

	user.lastJoinedRoom = savedRoom._id
	await user.save()

	response.json(savedRoom)
})

module.exports = roomRouter