import React, { useState } from 'react'
import GoogleButton from 'react-google-button'
import { addToNewUser } from '../Calls/Services';
import { auth } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import im from '../google.svg';
import './main.css'
import { useNavigate } from 'react-router-dom';

export default function Main() {

    const nav = useNavigate();
    const {googlesignin} = useAuth();
     
    const google_sign_in_function = async()=>{
        try
        {
            const res = await googlesignin();
            addToNewUser(auth.currentUser.displayName, auth.currentUser.email)
            .then(data => {nav('/Vote')})
            .catch(()=>console.log("Hi"))
            
        }
        catch(err)
        {
            console.log(err);
        }
    }

    const s1={
        fontSize:"5rem",
        textAlign:"center",
        marginTop:"0"
    }
    const s2={
        fontSize:"1.2rem",
        textAlign:"center",
        marginTop:"2vh"
    }
    const s3={
        fontSize:"2.5rem",
        textAlign:"center",
        marginTop:"2vh"
    }
    const s4={
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    }

    const s5={
        fontSize:"2rem",
        marginTop:"7%",
        textAlign:"center",
        marginBottom:"2vh"
    }
    
    const over={
        backgroundColor:"black",
        color:"white",
        padding:"0",
        margin:"0",
        height:"100vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        fontFamily: "'Lexend Deca', sans-serif"
    }

    const [disable, setdisable] = useState(true);
  return (
    <div style={over}>
        <div className="front">
            <div style={s1}><strong>DSAC IT</strong></div>
            <div style={s2}>Presents</div>
            <div style={s3}>Vasavi Project League</div>
            <p style={s5}>To Vote</p>
            <div onClick={()=>{
                    google_sign_in_function();
                }} style={s4} className="signup">
                <p>Sign in with</p>
                <img src={im} alt="" />
            </div>
        </div>
    </div>
  )
}
