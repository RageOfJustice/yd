import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import configureStore from './configureStore'
import { MainPage, TokenPage } from './pages'
import theme from './theme'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/token" component={TokenPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>
)

export default App
