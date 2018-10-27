import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import ReactDOM from 'react-dom'
import App from './App'
import configureStore from './configureStore'
import theme from './theme'
import * as serviceWorker from './serviceWorker'

const store = configureStore()

const Root = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
