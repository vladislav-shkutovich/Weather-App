import { all } from 'redux-saga/effects'
import { fetchCurrentWeatherWatcher } from './fetchCurrentWeatherSaga'

export default function* rootSaga() {
	yield all([fetchCurrentWeatherWatcher()])
}
