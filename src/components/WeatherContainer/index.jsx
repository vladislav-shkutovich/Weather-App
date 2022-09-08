import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrentWeather } from '@/store/slices/currentWeatherSlice'
import { fetchWeeklyWeather } from '@/store/slices/weeklyWeatherSlice'
import { selectCurrentWeatherData } from '@/store/selectors'

import { WeatherToday } from '@/components/WeatherToday'
import { WeatherWeeklyItem } from '@/components/WeatherWeeklyItem'

// ! временно
import { DUMMY_WEATHER_DATA } from '@/constants'

import {
	StyledWeatherContainer,
	StyledWeatherWeekly,
} from './styled'

export const WeatherContainer = () => {
	// ! Временно
	const dispatch = useDispatch()
	const { weather } = useSelector(selectCurrentWeatherData)

	useEffect(city => {
		dispatch(fetchCurrentWeather(city))
		// dispatch(fetchWeeklyWeather(city))
	}, [])

	return (
		<StyledWeatherContainer>
			<WeatherToday weather={weather} />
			<StyledWeatherWeekly>
				{Object.values(DUMMY_WEATHER_DATA)
					.slice(1, DUMMY_WEATHER_DATA.length)
					.map((item, index) => (
						<WeatherWeeklyItem
							key={item.day + 'id'}
							day={item.day}
							weather={item.weather}
							temperature={item.temperature}
						/>
					))}
			</StyledWeatherWeekly>
		</StyledWeatherContainer>
	)
}
