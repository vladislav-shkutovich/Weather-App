import { call, put, takeEvery } from 'redux-saga/effects'
import { weatherSlice } from '@/store/slices/weatherSlice'
import { WeatherService } from '@/services/WeatherService'

function* fetchWeatherWorker() {
	const res = yield call(() =>
		WeatherService.getWeather('Brest'),
	)

	if (res.status === 200) {
		yield put(weatherSlice.actions.fetchWeatherSuccess(res))
	} else {
		yield put(weatherSlice.actions.fetchWeatherError(res))
	}
}

export function* fetchWeatherWatcher() {
	yield takeEvery(
		'weather/fetchWeather',
		fetchWeatherWorker,
	)
}
