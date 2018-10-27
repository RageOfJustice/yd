import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MainPage, TokenPage } from './pages'
import { ProtectedRouteContainer as ProtectedRoute } from './containers'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/token" component={TokenPage} />
      <ProtectedRoute
        path="/disk"
        redirectTo="/"
        component={() => <div>DISK</div>}
      />
    </Switch>
  </Router>
)

export default App
