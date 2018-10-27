import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ isAuthorized, redirectTo, ...props }) =>
  isAuthorized ? <Route {...props} /> : <Redirect to={redirectTo} />

export default ProtectedRoute
