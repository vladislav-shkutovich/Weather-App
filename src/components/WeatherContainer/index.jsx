import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '@/store/slices/weatherSlice'
import {
	selectWeatherData,
	selectService,
} from '@/store/selectors'
import { WeatherToday } from '@/components/WeatherToday'
import { WeatherWeeklyItem } from '@/components/WeatherWeeklyItem'

// ! временно
import { WEEKDAYS } from '@/constants'

import {
	StyledWeatherContainer,
	StyledWeatherWeekly,
} from './styled'

export const WeatherContainer = () => {
	const { currentAPI } = useSelector(selectService)
	const dispatch = useDispatch()
	useEffect(
		city => {
			dispatch(fetchWeather(city))
		},
		[currentAPI],
	)

	const { weather } = useSelector(selectWeatherData)
	console.log(weather)

	let weatherTodayData = {
		tempToday: '',
		feelsLikeToday: '',
		humidityToday: '',
		humidity: '',
		windToday: '',
		iconToday: '',
		iconAltToday: '',
	}
	let weatherWeeklyData = []

	switch (currentAPI) {
		case 'OpenWeather':
			weatherTodayData = {
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

			weatherWeeklyData = weather?.list
				?.filter(
					day =>
						new Date(day.dt_txt).getHours() === 12 &&
						new Date(day.dt_txt).getDate() !== dayInAWeek,
				)
				.slice(0, 4)
			break
		case 'StormGlass':
			weatherTodayData = {
				tempToday: Math.round(
					weather?.hours[0]?.airTemperature.noaa,
				),
				humidityToday: Math.round(
					weather?.hours[0]?.humidity.noaa,
				),
				windToday: weather?.hours[0]?.windSpeed.noaa,
			}

			weatherWeeklyData = weather?.hours
				?.filter(
					day =>
						new Date(day.time).getHours() === 12 &&
						new Date(day.time).getDate() >
							dayInAWeek.getDate(),
				)
				.slice(0, 4)
			break
	}

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
						key={index}
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
