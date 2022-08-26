import React from 'react'
import { WeatherToday } from '@/components/WeatherToday'
import { WeatherWeekly } from '@/components/WeatherWeekly'
import { StyledWeatherContainer } from './styled'

export const WeatherContainer = () => {
	return (
		<StyledWeatherContainer>
			<WeatherToday />
			<WeatherWeekly />
		</StyledWeatherContainer>
	)
}
