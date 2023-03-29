import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Home'
import { Locationcheck } from '../Locationcheck'

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/locationcheck' element={<Locationcheck/>}/>
    </Routes>
  )
}
