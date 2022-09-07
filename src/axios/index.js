import axios from 'axios'
import {
	REACT_APP_API_URL,
	REACT_APP_API_KEY,
} from '@/constants'

const api = axios.create({
	baseURL: REACT_APP_API_URL,
})

api.interceptors.request.use(config => {
	config.url =
		config.url +
		'&units=metric' +
		'&appid=' +
		REACT_APP_API_KEY

	return config
})

export default api
