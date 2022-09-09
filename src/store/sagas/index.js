import { all } from 'redux-saga/effects'
import { fetchWeatherWatcher } from './fetchWeatherSaga'

export default function* rootSaga() {
	yield all([fetchWeatherWatcher()])
}
