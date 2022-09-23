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
	selectLoading,
	selectCurrentWeatherType,
} from '@/store/selectors'
import { partOfTheDay } from '@/helpers'

export const App = () => {
	const isLoading = useSelector(selectLoading)
	const currentLocation = useSelector(selectLocation)
	const { currentAPI } = useSelector(selectService)
	const currentWeatherType = useSelector(
		selectCurrentWeatherType,
	)
	const dispatch = useDispatch()
	const currentWeatherName = `background${currentWeatherType ||
		'Default'}${partOfTheDay}`

	useEffect(() => {
		if (!currentLocation) {
			const successGeolocation = pos => {
				const { latitude, longitude } = pos.coords
				dispatch(setCurrentCoords({ latitude, longitude }))
			}
			navigator.geolocation.getCurrentPosition(
				successGeolocation,
			)
		}
	}, [])

	useEffect(() => {
		dispatch(fetchWeather())
	}, [currentAPI, currentLocation])

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
