import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/AuthProvider';

function ProtectedRoutes() {
    //   const [isuser, setisUser] = useState(true);
    const {isAuthenticated} = useAuth()    
    console.log(isAuthenticated);
   
      return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoutes
