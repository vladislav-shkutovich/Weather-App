import api from '@/axios'

export class WeatherService {
	// static getWeather(city) {
	// 	return api.get(`/weather?q=${city}`)
	// }

	static getWeather(city) {
		return api.get(`/forecast?q=${city}`)
	}
}
