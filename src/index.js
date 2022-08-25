import React from 'react'
import ReactDOM from 'react-dom'
import { store } from '@/store/index'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import theme from '@/themes'
import GlobalStyles from '@/globalStyles'
import { App } from '@/App'

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
			<GlobalStyles />
		</ThemeProvider>
	</Provider>,
	document.getElementById('root'),
)
