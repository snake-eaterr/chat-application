const express = require('express')
const app = express()
require('express-async-errors')
const cors = require('cors')
const config = require('./utils/config')
const middleware = require('./utils/middleware')
const userRouter = require('./controllers/users')
const roomRouter = require('./controllers/rooms')
const mongoose = require('mongoose')



console.log('connecting to mongodb')
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
	.then(() => {
		console.log('connected to mongodb')
	}).catch((error) => {
		console.log('error connecting to mongodb', error.message)
	})


app.use(cors())
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', roomRouter)
app.use(middleware.errorHandler)

module.exports = app