import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MainPage, TokenPage } from './pages'
import { restoreToken } from './actions'

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/token" component={TokenPage} />
    </Switch>
  </Router>
)

const mapDispatchToProps = {
  restoreToken,
}

export default connect(
  undefined,
  mapDispatchToProps,
)(Root)
