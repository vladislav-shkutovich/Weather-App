import {
	call,
	put,
	select,
	takeEvery,
} from 'redux-saga/effects'
import { weatherSlice } from '@/store/slices/weatherSlice'
import { selectService } from '@/store/selectors'
import { WeatherService } from '@/services/WeatherService'

function* fetchWeatherWorker() {
	try {
		const { currentAPI } = yield select(selectService)

		const res = yield call(() => {
			if (currentAPI === 'OpenWeather') {
				return WeatherService.getWeather('Minsk')
			} else {
				return WeatherService.getWeatherFromStormGlass(
					'Minsk',
				)
			}
		})
		console.log('Response at fetchWeatherWorker', res)

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
