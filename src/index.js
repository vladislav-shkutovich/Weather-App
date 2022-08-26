import React from 'react'
import ReactDOM from 'react-dom'
import { store } from '@/store/index'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import theme from '@/themes'

import { App } from '@/App'

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>,
	document.getElementById('root'),
)
