import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import configureStore from './configureStore'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={() => <div>hey</div>} />
    </Router>
  </Provider>
)

export default App
