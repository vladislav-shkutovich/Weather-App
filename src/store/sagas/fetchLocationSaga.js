import axios from 'axios'
import {
	call,
	put,
	takeEvery,
	delay,
	select,
} from 'redux-saga/effects'
import { WeatherService } from '@/services/WeatherService'
import {
	setCurrentLocation,
	setCurrentCoords,
} from '@/store/slices/locationSlice'
import { fetchWeather } from '../slices/weatherSlice'
import { selectLocation, selectCoords } from '../selectors'
import { useLocation } from '@/hooks/useLocation'

// export const fetchCoordsFromAPI = async cityName => {
// 	// try {
// 	// 	const res = await axios.get(
// 	// 		`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=d6fd7eb7b4a5480c43622871cf2007fa`,
// 	// 	)
// 	// 	console.log(res)
// 	// 	return res
// 	// } catch (error) {
// 	// 	console.log(error.response)
// 	// 	return error.response
// 	// }
// }

export function* fetchLocationWorker() {
	// const successGeolocation = pos => {
	// 	const coords = {
	// 		lat: pos.coords.latitude,
	// 		lon: pos.coords.longitude,
	// 	}
	// 	// put(setCurrentCoords(coords))
	// }
	// yield navigator.geolocation.getCurrentPosition(
	// 	successGeolocation,
	// )
	const { latitude, longitude } = yield select(selectCoords)

	const res = yield axios.get(
		`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=d6fd7eb7b4a5480c43622871cf2007fa`,
	)

	yield put(setCurrentLocation(res.data[0].name))

	// const currentLocation = yield select(selectLocation)
	// console.log(currentLocation)
}

export function* fetchLocationWatcher() {
	yield takeEvery(
		'location/setCurrentCoords',
		fetchLocationWorker,
	)
}

// export function* setCurrentLocationWorker({
// 	payload: cityName,
// }) {
// 	yield put(setCurrentLocation(cityName))
// }

// export function* setCurrentLocationWatcher() {
// 	yield takeEvery(
// 		'location/getLocation',
// 		setCurrentLocationWorker,
// 	)
// }
