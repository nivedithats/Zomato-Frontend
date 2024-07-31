import React from 'react'
import RestaurantView from './components/RestaurantView/RestaurantView'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RestaurantPage from './components/RestaurantPage/RestaurantPage'
import Home from './pages/Home/Home'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Collection from './components/collections/Collection'
import Login from './pages/login/Login'
import ProtectedRoutes from './protectedRoutes/ProtectedRoutes'
import { useAuth } from './hooks/AuthProvider'

function App() {
  const display = () =>{
    toast.error("Hello World");
  }
  const {isAuthenticated} = useAuth()

 
  return (
    <div>
      
    <ToastContainer/>
    <Routes>
   
      <Route path='/login' element={<Login/>}/>
 

      
    <Route element={<ProtectedRoutes/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/view/:id' element={<RestaurantPage/>}/>
    <Route path='/collection' element={<Collection/>}/>
    </Route>

    </Routes>
    </div>
  )
}

export default App