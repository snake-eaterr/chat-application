import React from 'react'
import { useSelector } from 'react-redux'
import './Notification.css'

const Notification = () => {
	const notification = useSelector(state => state.notification)

	if (!notification) {
		return null
	}

	const style = notification.type === 'SUCCESS'
		? { backgroundColor: 'rgb(40, 211, 125)' } : { backgroundColor: 'rgb(211, 60, 40)' }

	return (
		<div className="notification" style={style}>
			{notification.message}
		</div>
	)
}

export default Notification