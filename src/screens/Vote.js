import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import Card from '../components/card';
import axios from 'axios';
import load from '../load.gif';
import { fetchProjects } from '../Calls/Services';
import { auth } from '../firebase';
import { isVoted } from '../Calls/Services';
import './vote.css';

export default function Vote() {

    const {currentUser} = useAuth();
    const {signout} = useAuth();
    const votedfor = auth.currentUser.VotedFor;
    
    const [voted, setVoted] = useState(false);
    const [projectsarray, set_projectsarray] = useState(); 
    const [loading,setloading] = useState(true);
    const [frontendvoted, setfrontendvoted] = useState(false);
    useEffect(() => {
        
      const projects = async () =>{
        
        fetchProjects(auth.currentUser.displayName, auth.currentUser.email)
        .then((data)=>{set_projectsarray(data)}) 
        
        isVoted()
        .then(data=>{setVoted(data)})

        setloading(false);


      }
      projects();
      
    }, [])

    const st={
      display:"flex",
      flexWrap:"wrap",
      alignItems:"center",
      justifyContent:"space-around",
      // height:"20vh",
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
    <div className='full'>
    <div>Dashboard:{currentUser.email}</div>
    <button onClick={()=>{
        signout();
    }}>Logout</button>
    <div className='full2'
    style={{pointerEvents:voted || frontendvoted?'none':'auto'}}
    >
    {voted || frontendvoted?<p>Already Voted</p>:<></>}
        <h2 style={{fontSize:"3rem"}}>Vote the project you like</h2>
        <div style={st}>
        {projectsarray && projectsarray.map((data)=>{
          return(
            <Card key={data.Roll} setfrontendvoted={setfrontendvoted} votedfor={votedfor} data={data}/>
          )
        })}
        </div>
    </div>
    
    </div>
  )
}
