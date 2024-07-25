import React from 'react'
import RestaurantView from './components/RestaurantView/RestaurantView'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RestaurantPage from './components/RestaurantPage/RestaurantPage'
import Home from './pages/Home/Home'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const display = () =>{
    toast.error("Hello World");
  }

 
  return (
    <div>
      <button onClick={display}>click</button>
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/view/:id' element={<RestaurantPage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App