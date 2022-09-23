export const getFormattedTaskData = item => {
	const eventStartTime = new Date(item.start.dateTime)
	const eventEndTime = new Date(item.end.dateTime)
	const isWholeDayTask = !eventStartTime.getHours()
	const formattedTime = `${eventStartTime.getHours()}:${
		eventStartTime.getMinutes()
			? eventStartTime.getMinutes()
			: `${eventStartTime.getMinutes()}0`
	} 
	- ${eventEndTime.getHours()}:${
		eventEndTime.getMinutes()
			? eventEndTime.getMinutes()
			: `${eventEndTime.getMinutes()}0`
	}`

	return { isWholeDayTask, formattedTime }
}
