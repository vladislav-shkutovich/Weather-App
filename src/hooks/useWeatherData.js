import { useSelector } from 'react-redux'
import {
	selectWeatherData,
	selectService,
} from '@/store/selectors'
import { dayInAWeek, forecastDays } from '@/helpers'

export const useWeatherData = () => {
	const { currentAPI } = useSelector(selectService)
	const { weather } = useSelector(selectWeatherData)

	let weatherTodayData, weatherWeeklyData
	let openWeatherToday, stormGlassToday

	switch (currentAPI) {
		case 'OpenWeather':
			openWeatherToday = weather?.list?.at(0)
			weatherTodayData = {
				tempToday: Math.round(openWeatherToday?.main.temp),
				feelsLikeToday: Math.round(
					openWeatherToday?.main.feels_like,
				),
				humidityToday: Math.round(
					openWeatherToday?.main.humidity,
				),
				windToday: openWeatherToday?.wind.speed,
				iconToday: openWeatherToday?.weather?.at(0).icon,
				iconAltToday: openWeatherToday?.weather?.at(0).main,
			}
			weatherWeeklyData = weather?.list
				?.filter(
					day =>
						new Date(day.dt_txt).getHours() === 12 &&
						new Date(day.dt_txt).getDate() !== dayInAWeek,
				)
				.slice(0, 4)
				.map((item, index) => {
					return {
						id: item.dt,
						day: forecastDays[index],
						icon: item.weather?.at(0).icon,
						iconAlt: item.weather?.at(0).main,
						temp: Math.round(item?.main?.temp),
					}
				})
			break
		case 'StormGlass':
			stormGlassToday = weather?.hours?.at(0)
			weatherTodayData = {
				tempToday: Math.round(
					stormGlassToday?.airTemperature.noaa,
				),
				humidityToday: Math.round(
					stormGlassToday?.humidity.noaa,
				),
				windToday: stormGlassToday?.windSpeed.noaa,
			}
			weatherWeeklyData = weather?.hours
				?.filter(
					day =>
						new Date(day.time)?.getHours() === 12 &&
						new Date(day.time)?.getDate() >
							new Date().getDate(),
				)
				?.slice(0, 4)
				.map((item, index) => {
					return {
						id: item.time,
						day: forecastDays[index],
						temp: Math.round(item?.airTemperature?.noaa),
					}
				})
			break
	}

	return { weatherTodayData, weatherWeeklyData, currentAPI }
}
