import React from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function Vote() {
  

    

    const {currentUser} = useAuth();
    const {signout} = useAuth();
    // console.log(signout);
    return (
    <>
    <div>Dashboard:{currentUser.email}</div>
    <button onClick={()=>{
        signout();
    }}>Logout</button>
    </>
  )
}
