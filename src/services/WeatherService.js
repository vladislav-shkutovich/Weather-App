import api from '@/axios'

export class WeatherService {
	static getCurrentWeather(city) {
		return api.get(`/weather?q=${city}`)
	}

	static getWeeklyWeather(city) {
		return api.get(`/forecast/daily?q=${city}&cnt=7`)
	}
}
