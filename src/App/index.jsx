import React, { useEffect } from 'react'
import GlobalStyles from '@/globalStyles'
import { MainPage } from '@/pages/MainPage'

import { useDispatch, useSelector } from 'react-redux'
import { setCurrentCoords } from '@/store/slices/locationSlice'
import { fetchWeather } from '@/store/slices/weatherSlice'
import {
	selectService,
	selectLocation,
} from '@/store/selectors'

export const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		const successGeolocation = pos => {
			const { latitude, longitude } = pos.coords
			dispatch(setCurrentCoords({ latitude, longitude }))
		}

		navigator.geolocation.getCurrentPosition(
			successGeolocation,
		)
	}, [])

	const { currentAPI } = useSelector(selectService)
	const currentLocation = useSelector(selectLocation)

	useEffect(
		city => {
			dispatch(fetchWeather())
		},
		[currentAPI, currentLocation],
		// [currentAPI],
	)

	return (
		<React.Fragment>
			<MainPage />
			<GlobalStyles />
		</React.Fragment>
	)
}
