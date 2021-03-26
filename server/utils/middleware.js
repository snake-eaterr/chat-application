

const errorHandler = (error, request, response, next) => {
	if (error.name === 'ValidationError') {
		return response.status(400).json({ error: 'username already taken' })
	}
	if (error.name === 'JsonWebTokeError') {
		return response.status(400).json({ error: 'invalid token' })
	}
	if (error.name === 'TokenExpiredError') {
		return response.status(401).json({ error: 'token expired' })
	}
	next(error)
}

module.exports = { errorHandler }