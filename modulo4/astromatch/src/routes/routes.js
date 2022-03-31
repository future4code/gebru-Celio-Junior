import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Matches } from '../pages/Matches'

export const Pages = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="matches" element={<Matches />} />
    </Routes>
  </BrowserRouter>
)