// import { setCurrentLocation } from '@/store/slices/locationSlice'
// import { selectLocation } from '@/store/selectors'
// import { useDispatch, useSelector } from 'react-redux'
// import axios from 'axios'
// import { useState } from 'react'

// // ! ЗДЕСЬ ОШИБКА, НЕ УСПЕВАЮТ ДОЙТИ КООРДИНАТЫ
// export const useLocation = () => {
// 	// const currentLocation = useSelector(selectLocation)
// 	const [coords, setCoords] = useState({
// 		lat: '',
// 		lon: '',
// 	})
// 	// const { lat, lon } = coords

// 	// if (currentLocation) return currentLocation

// 	navigator.geolocation.getCurrentPosition(function(
// 		position,
// 	) {
// 		setCoords({
// 			lat: position.coords.latitude,
// 			lon: position.coords.longitude,
// 		})
// 	})

// 	return coords

// 	// try {
// 	// 	const res = axios.get(
// 	// 		`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=d6fd7eb7b4a5480c43622871cf2007fa`,
// 	// 	)
// 	// 	return res.data[0].name
// 	// } catch (error) {
// 	// 	console.log(error.response)
// 	// 	return error.response
// 	// }
// }
