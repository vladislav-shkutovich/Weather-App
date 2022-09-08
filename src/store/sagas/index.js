import { all } from 'redux-saga/effects'
import { fetchCurrentWeatherWatcher } from './fetchCurrentWeatherSaga'
import { fetchWeeklyWeatherWatcher } from './fetchWeeklyWeatherSaga'

export default function* rootSaga() {
	yield all([
		fetchCurrentWeatherWatcher(),
		fetchWeeklyWeatherWatcher(),
	])
}
