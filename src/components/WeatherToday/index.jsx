import { fetchCurrentWeather } from '@/store/sagas/fetchCurrentWeather'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
	StyledWeatherToday,
	StyledIcon,
	StyledToday,
	StyledTemperature,
} from './styled'

export const WeatherToday = ({
	day,
	weather,
	temperature,
}) => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchCurrentWeather('Brest'))
	}, [])

	return (
		<StyledWeatherToday>
			<StyledIcon alt={weather} src={weather} />
			<StyledToday>Today</StyledToday>
			<StyledTemperature>{temperature}°C</StyledTemperature>
		</StyledWeatherToday>
	)
}
