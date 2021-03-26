import axios from 'axios' 

const baseUrl = 'http://localhost:4000/api'

let token = null
const setToken = newToken => {
	token =  `bearer ${newToken}`
}

const login = async (username, password) => {
	const response = await axios.post(`${baseUrl}/login`, { username, password })
	return response.data
}

const signup = async (username, password, captchaValue) => {
	const response = await axios.post(`${baseUrl}/signup`, { username, password, captchaValue })
	return response.data
}

const getRooms = async () => {
	const response = await axios.get(`${baseUrl}/rooms`)
	return response.data
}

const changeRoom = async (roomId) => {
	const config = {
		headers: { Authorization: token }
	}

	const response = await axios.post(`${baseUrl}/changeroom`, { roomId }, config)
	return response.data
}

export default { login, signup, getRooms, setToken, changeRoom }