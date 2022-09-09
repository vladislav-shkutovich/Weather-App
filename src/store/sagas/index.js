import { all } from 'redux-saga/effects'
import { fetchWeatherWatcher } from './fetchWeatherSaga'
import { selectServiceWatcher } from './selectServiceSaga'

export default function* rootSaga() {
	yield all([fetchWeatherWatcher(), selectServiceWatcher()])
}
