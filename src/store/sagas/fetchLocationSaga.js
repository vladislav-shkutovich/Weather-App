import axios from 'axios'
import { put, takeEvery, select } from 'redux-saga/effects'
import { setCurrentLocation } from '@/store/slices/locationSlice'
import { selectCoords } from '../selectors'

export function* fetchLocationWorker() {
	const { latitude, longitude } = yield select(selectCoords)

	const res = yield axios.get(
		`${process.env.REACT_APP_API_GEO_URL}?lat=${latitude}&lon=${longitude}&limit=5&appid=${process.env.REACT_APP_API_KEY}`,
	)

	yield put(setCurrentLocation(res.data[0].name))
}

export function* fetchLocationWatcher() {
	yield takeEvery(
		'location/setCurrentCoords',
		fetchLocationWorker,
	)
}
