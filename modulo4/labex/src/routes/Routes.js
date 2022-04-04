import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from '../pages/User/UserHome'
import { ListTrips } from '../pages/User/ListTrips'
import { ApplicationForm } from '../pages/User/ApplicationForm'
import { Login } from '../pages/Admin/Login'
import { AdminHome } from '../pages/Admin/AdminHome'
import { TripDetails } from '../pages/Admin/TripDetails'
import { CreateTrip } from '../pages/Admin/CreateTrip'

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path='trips/list' element={<ListTrips />} />
      <Route path='trips/application' element={<ApplicationForm />} />
      <Route path='login' element={<Login />} />
      <Route path='admin/trips/list' element={<AdminHome />} />
      <Route path='admin/trips/:id' element={<TripDetails />} />
      <Route path='admin/trips/create' element={<CreateTrip />} />
    </Routes>
  </BrowserRouter>
)
