import api from '@/axios'
import axios from 'axios'

export class WeatherService {
	static getWeather(city, lon) {
		// ? Possibility to use coords instead of search by city
		// ? param named "city" instead of "lat" for convenience
		if (lon) {
			return api.get(`/forecast?lat=${city}&lon=${lon}`)
		} else return api.get(`/forecast?q=${city}`)
	}

	static async getWeatherFromStormGlass(city) {
		try {
			const resFromGeocoding = await axios.get(
				`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${process.env.REACT_APP_API_KEY}`,
			)
			// eslint-disable-next-line prefer-destructuring
			const { lat, lon } = resFromGeocoding.data[0]

			const params = 'airTemperature,windSpeed,humidity'
			const res = await axios.get(
				`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lon}&params=${params}`,
				{
					headers: {
						Authorization:
							// ! Main mail key
							process.env.REACT_APP_API_KEY_STORM,
						// ! Secondary mail key
						// process.env.REACT_APP_API_KEY_STORM_BACKUP1,
						// ! Another mail key
						// process.env.REACT_APP_API_KEY_STORM_BACKUP2,
					},
				},
			)
			return res
		} catch (error) {
			console.log(error.response)
			return error.response
		}
	}
}
