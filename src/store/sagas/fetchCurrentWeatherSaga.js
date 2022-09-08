import { call, put, takeEvery } from 'redux-saga/effects'
import { currentWeatherSlice } from '@/store/slices/currentWeatherSlice'
import { WeatherService } from '@/services/WeatherService'

function* fetchCurrentWeatherWorker() {
	const res = yield call(() =>
		WeatherService.getCurrentWeather('Brest'),
	)

	if (res.status === 200) {
		yield put(
			currentWeatherSlice.actions.fetchCurrentWeatherSuccess(
				res,
			),
		)
	} else {
		yield put(
			currentWeatherSlice.actions.fetchCurrentWeatherError(
				res,
			),
		)
	}
}

export function* fetchCurrentWeatherWatcher() {
	yield takeEvery(
		'current_weather/fetchCurrentWeather',
		fetchCurrentWeatherWorker,
	)
}
