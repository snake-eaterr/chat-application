require('dotenv').config()


const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI
const CAPTCHA_SECRET = process.env.CAPTCHA_SECRET
const JWT_SECRET = process.env.JWT_SECRET

module.exports = { PORT, MONGODB_URI, CAPTCHA_SECRET, JWT_SECRET }