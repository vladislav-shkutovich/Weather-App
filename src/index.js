import React from 'react'
import ReactDOM from 'react-dom'
import { App } from '@/components/App'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'
import theme from '@/themes'
import { store, persistor } from '@/store/store'

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</ThemeProvider>
	</Provider>,
	document.getElementById('root'),
)
