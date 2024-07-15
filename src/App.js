import React from 'react'
import RestaurantView from './components/RestaurantView/RestaurantView'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RestaurantPage from './components/RestaurantPage/RestaurantPage'
import Home from './pages/Home/Home'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/view/:id' element={<RestaurantPage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App