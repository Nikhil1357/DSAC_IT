import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import Card from '../components/card';
import axios from 'axios';
import load from '../load.gif';

export default function Vote() {

    const {currentUser} = useAuth();
    const {signout} = useAuth();

    const [projectsarray, set_projectsarray] = useState(); 
    const [loading,setloading] = useState(true);
    useEffect(() => {
        
      fetch('/projects')
      .then(response=>response.json())
      .then(data=>{
        set_projectsarray(data);
        setloading(false);
      }
        )
    }, [])

    const st={
      display:"flex",
      flexWrap:"wrap",
      alignItems:"center",
      justifyContent:"space-around",
      height:"200vh",
      width:"98vw"
  }
  if(loading)
  {
  return(
    <img src={load} width={"500px"} />
  )
  }
    // console.log(signout);
    return (
    <>
    <div>
        <h2 style={{fontSize:"3rem"}}>Vote the project you like</h2>
        <div style={st}>
        {projectsarray.map((data)=>{
          return<Card data={data}/>
        })}
        </div>
    </div>
    <div>Dashboard:{currentUser.email}</div>
    <button onClick={()=>{
        signout();
    }}>Logout</button>
    </>
  )
}
