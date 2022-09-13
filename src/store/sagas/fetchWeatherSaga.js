import {
	call,
	put,
	select,
	takeEvery,
} from 'redux-saga/effects'
import { weatherSlice } from '@/store/slices/weatherSlice'
import { setCurrentCoords } from '../slices/locationSlice'
import {
	selectService,
	selectLocation,
	selectCoords,
} from '@/store/selectors'
import { WeatherService } from '@/services/WeatherService'

function* fetchWeatherWorker() {
	try {
		const { currentAPI } = yield select(selectService)
		const currentCoords = yield select(selectCoords)
		// console.log(currentCoords)

		if (currentCoords === null) {
			const successGeolocation = yield pos => {
				const { latitude, longitude } = pos.coords
				put(setCurrentCoords({ latitude, longitude }))
			}

			yield call(() =>
				navigator.geolocation.getCurrentPosition(
					successGeolocation,
				),
			)
		}

		const currentLocation = yield select(selectLocation)
		// console.log(currentLocation)

		const res = yield call(() => {
			if (currentCoords === null) return ''
			if (currentAPI === 'OpenWeather') {
				return WeatherService.getWeather(currentLocation)
			} else {
				return WeatherService.getWeatherFromStormGlass(
					currentLocation,
				)
			}
		})

		if (res.status === 200) {
			yield put(
				weatherSlice.actions.fetchWeatherSuccess(res),
			)
		} else {
			yield put(weatherSlice.actions.fetchWeatherError(res))
		}
	} catch (error) {
		console.log(error.response)
		return error.response
	}
}

export function* fetchWeatherWatcher() {
	yield takeEvery(
		'weather/fetchWeather',
		fetchWeatherWorker,
	)
}
