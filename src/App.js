import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MainPage, TokenPage } from './pages'

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/token" component={TokenPage} />
    </Switch>
  </Router>
)

export default Root
