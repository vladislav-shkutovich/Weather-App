import { call, put, takeEvery } from 'redux-saga/effects'
import { weeklyWeatherSlice } from '@/store/slices/weeklyWeatherSlice'
import { WeatherService } from '@/services/WeatherService'

function* fetchWeeklyWeatherWorker() {
	const res = yield call(() =>
		WeatherService.getWeeklyWeather('Brest'),
	)

	if (res.status === 200) {
		yield put(
			weeklyWeatherSlice.actions.fetchWeeklyWeatherSuccess(
				res,
			),
		)
	} else {
		yield put(
			weeklyWeatherSlice.actions.fetchWeeklyWeatherError(
				res,
			),
		)
	}
}

export function* fetchWeeklyWeatherWatcher() {
	yield takeEvery(
		'weekly_weather/fetchWeeklyWeather',
		fetchWeeklyWeatherWorker,
	)
}
