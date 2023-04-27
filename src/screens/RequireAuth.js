import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function RequireAuth({children}) {
    
    const {currentUser} = useAuth();
    const location = useLocation();

    if(!currentUser)
    {
        
    return (
        <>
        {/* <p>Need Auth</p> */}
        {/* <button onClick={()=>{<Navigate to='/login'/>}}>Click to Login</button> */}
        <Navigate to='/login'/>
        </>
      )
    }
    return children;
}
