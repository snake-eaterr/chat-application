const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const roomSchema = new mongoose.Schema({
	roomName: {
		type: String,
		unique: true
	}
})

roomSchema.plugin(uniqueValidator)

roomSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
})

const Room = mongoose.model('Room', roomSchema)

module.exports = Room