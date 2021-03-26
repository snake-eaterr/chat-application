const userRouter = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const axios = require('axios')
const config = require('../utils/config')
const jwt = require('jsonwebtoken')
const Room = require('../models/Room')



const getTokenFrom = request => {
	const authorization = request.get('authorization')
	if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
		return authorization.substring(7)
	}

	return null
}


userRouter.post('/signup', async (request, response) => {
	const body = request.body

	const configHeaders = {
		headers: {
			Accept: /application\/json/,
			ContentType: 'application/x-www-form-urlencoded; charset=utf-8'
		}
	}


	const isHuman = await axios.post('https://www.google.com/recaptcha/api/siteverify', `secret=${config.CAPTCHA_SECRET}&response=${body.captchaValue}`, configHeaders)
	if (!(isHuman.data.success)) {
		return response.status(401).json({ error: 'Please redo captcha' })
	}

	const saltRounds = 10
	const passwordHash = await bcrypt.hash(body.password, saltRounds)

	const room = await Room.findOne({ roomName: 'default' })

	const user = new User({
		username: body.username,
		passwordHash,
		lastJoinedRoom: room._id  // default room

	})

	const savedUser = await user.save()

	response.json(savedUser)
})



userRouter.post('/changeroom', async (request, response) => {
	const body = request.body
	const token = getTokenFrom(request)
	const decodedToken = jwt.verify(token, config.JWT_SECRET)
	if(!token || !decodedToken) {
		return response.status(401).json({ error: 'token missing or invalid' })
	}

	const user = await User.findById(decodedToken.id)

	user.lastJoinedRoom = body.roomId
	const savedUser = await user.save()

	response.json(savedUser)
})

userRouter.post('/login', async (request, response) => {
	const body = request.body

	const user = await User.findOne({ username: body.username })

	const passwordCorrect = user === null
		? false
		: await bcrypt.compare(body.password, user.passwordHash)

	if(!(user && passwordCorrect)) {
		return response.status(401).json({ error: 'invalid username or password' })
	}

	const userToken = {
		username: user.username,
		id: user._id,
		lastJoinedRoom: user.lastJoinedRoom
	}

	const token = jwt.sign(userToken, config.JWT_SECRET, { expiresIn: 60*60 })

	response.status(200).json({ token, username: user.username, lastJoinedRoom: user.lastJoinedRoom })

})

module.exports = userRouter