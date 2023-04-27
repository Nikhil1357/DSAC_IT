import React from 'react'
import { Route } from 'react-router-dom'
import Dashboard from './Vote'

export default function PrivateRoute() {
  return (
    <Route path='/' element={<Dashboard/>}/>
  )
}
