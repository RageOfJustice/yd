import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MainPage, TokenPage, DiskPage } from './pages'
import { ProtectedRouteContainer as ProtectedRoute } from './containers'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/token" component={TokenPage} />
      <ProtectedRoute path="/disk" redirectTo="/" component={DiskPage} />
      <Redirect to="/" />
    </Switch>
  </Router>
)

export default App
