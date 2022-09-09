import api from '@/axios'
import axios from 'axios'

export class WeatherService {
	static getWeather(city) {
		return api.get(`/forecast?q=${city}`)
	}

	static async getWeatherFromStormGlass(city) {
		try {
			const resFromGeocoding = await axios.get(
				`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=d6fd7eb7b4a5480c43622871cf2007fa`,
			)
			// eslint-disable-next-line prefer-destructuring
			const { lat, lon } = resFromGeocoding.data[0]

			const params = 'airTemperature,windSpeed,humidity'
			const res = await axios.get(
				`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lon}&params=${params}`,
				{
					headers: {
						Authorization:
							'a2e8d7f0-3050-11ed-8e42-0242ac130002-a2e8d8a4-3050-11ed-8e42-0242ac130002',
					},
				},
			)
			// const { hours } = res.data
			// console.log(hours)
			// return hours
			console.log(res)
			return res
		} catch (error) {
			console.log(error.response)
			return error.response
		}
	}
}

// WeatherService.getWeatherFromStormGlass('Minsk')
