import React from 'react'
import ReactDOM from 'react-dom'
import { App } from '@/components/App'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import theme from '@/themes'
import { store } from '@/store/store'

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>,
	document.getElementById('root'),
)
