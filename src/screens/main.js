import React, { useRef, useState } from 'react'
// import { useAuth } from '../contexts/AuthContext'
import { useAuth } from '../contexts/AuthContext';
// import { auth } from '../firebase' 
import { Link } from 'react-router-dom';

export default function Main() {

    const userRef = useRef();
    const passRef = useRef();
    const {signup} = useAuth();

    
    // currentUser?console.log(currentUser.email):console.log('nn')
    const handle = () =>{
        signup(userRef.current.value, passRef.current.value)
    }

    // const [disable, setdisable] = useState(true);
    const s1={
        fontSize:"5rem",
        textAlign:"center",
    }
    const s2={
        fontSize:"1.2rem",
        textAlign:"center",
        marginTop:"-7vh"
    }
    const s3={
        fontSize:"2.5rem",
        textAlign:"center",
        marginTop:"-1vh"
    }
    const s4={
        padding:"1%",
        margin:"1%"
    }

    const s5={
        fontSize:"2rem",
        marginTop:"7%",
        marginBottom:"1%"
    }
    
    const [disable, setdisable] = useState(true);
  return (
    <div>
        <div className="front">
            <h1 style={s1}>DSAC IT</h1>
            <h2 style={s2}>Presents</h2>
            <h3 style={s3}>Vasavi Project League</h3>
            <p style={s5}>Login to VOTE</p>
            <div className="before">
            <input ref={userRef} style={s4} type="email" placeholder='Enter your email'/>
            <button onClick={()=>{
                setdisable(false);
            }} style={s4}>Submit</button>
            </div>
            <div className="after">
            <input ref={passRef} id="inp" style={s4} disabled={disable} type="text" placeholder='Confirm OTP'/>
            <button onClick={()=>{
                handle();
            }} id="sub" style={s4} disabled={disable}>Submit</button>
           
            </div>
        </div>
    
    </div>
  )
}
