import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '@/store/slices/weatherSlice'
import { selectWeatherData } from '@/store/selectors'
import { WeatherToday } from '@/components/WeatherToday'
import { WeatherWeeklyItem } from '@/components/WeatherWeeklyItem'

// ! временно
import { WEEKDAYS } from '@/constants'

import {
	StyledWeatherContainer,
	StyledWeatherWeekly,
} from './styled'

export const WeatherContainer = () => {
	const dispatch = useDispatch()
	useEffect(city => {
		dispatch(fetchWeather(city))
	}, [])

	const { weather } = useSelector(selectWeatherData)

	const weatherTodayData = {
		tempToday: Math.round(weather?.list[0].main.temp),
		feelsLikeToday: Math.round(
			weather?.list[0].main.feels_like,
		),
		humidityToday: Math.round(
			weather?.list[0].main.humidity,
		),
		windToday: weather?.list[0].wind.speed,
		iconToday: weather?.list[0].weather[0].icon,
		iconAltToday: weather?.list[0].weather[0].main,
	}

	const weatherWeeklyData = weather?.list
		?.filter(
			day =>
				new Date(day.dt_txt).getHours() === 12 &&
				new Date(day.dt_txt).getDate() !== dayInAWeek,
		)
		.slice(0, 4)

	const dayInAWeek = new Date().getDay()
	const forecastDays = WEEKDAYS.slice(
		dayInAWeek,
		WEEKDAYS.length,
	).concat(WEEKDAYS.slice(0, dayInAWeek - 1))

	return (
		<StyledWeatherContainer>
			<WeatherToday weatherTodayData={weatherTodayData} />
			<StyledWeatherWeekly>
				{weatherWeeklyData?.map((item, index) => (
					<WeatherWeeklyItem
						key={item.dt}
						day={forecastDays[index]}
						icon={item.weather[0].icon}
						iconAlt={item.weather[0].main}
						temp={Math.round(item.main.temp)}
					/>
				))}
			</StyledWeatherWeekly>
		</StyledWeatherContainer>
	)
}
