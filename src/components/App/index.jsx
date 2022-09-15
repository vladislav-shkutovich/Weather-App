import React, { useEffect } from 'react'
import GlobalStyles from '@/globalStyles'
import { MainPage } from '@/pages/MainPage'
import { Loader } from '@/components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentCoords } from '@/store/slices/locationSlice'
import { fetchWeather } from '@/store/slices/weatherSlice'
import {
	selectService,
	selectLocation,
	selectWeatherData,
	selectLoading,
} from '@/store/selectors'

export const App = () => {
	const isLoading = useSelector(selectLoading)
	const currentLocation = useSelector(selectLocation)
	const { currentAPI } = useSelector(selectService)
	const weatherData = useSelector(selectWeatherData)
	const dispatch = useDispatch()

	useEffect(() => {
		if (currentLocation) return
		const successGeolocation = pos => {
			const { latitude, longitude } = pos.coords
			dispatch(setCurrentCoords({ latitude, longitude }))
		}
		navigator.geolocation.getCurrentPosition(
			successGeolocation,
		)
	}, [])

	useEffect(
		city => {
			dispatch(fetchWeather())
		},
		[currentAPI, currentLocation],
	)

	const currentWeatherType = weatherData?.weather?.list
		?.at(0)
		.weather.at(0).main // "Clear" "Clouds" "Rain" "Snow"
	const currentHour = new Date().getHours()
	const partOfTheDay =
		currentHour < 7 || currentHour > 19 ? 'Night' : 'Day'
	const currentWeatherName = `background${currentWeatherType ||
		'Default'}${partOfTheDay}`

	return (
		<React.Fragment>
			{isLoading && <Loader />}
			<MainPage />
			<GlobalStyles
				currentWeatherName={currentWeatherName}
			/>
		</React.Fragment>
	)
}
