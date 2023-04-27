import React, { useState } from 'react'
import GoogleButton from 'react-google-button'
export default function Main() {

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
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }

    const s5={
        fontSize:"2rem",
        marginTop:"7%",
        textAlign:"center",
        marginBottom:"1%"
    }
    
    const [disable, setdisable] = useState(true);
  return (
    <div>
        <div className="front">
            <h1 style={s1}>DSAC IT</h1>
            <h2 style={s2}>Presents</h2>
            <h3 style={s3}>Vasavi Project League</h3>
            <p style={s5}>To Vote</p>
            <div style={s4} className="signup">
                <GoogleButton>Sign Up with Google</GoogleButton>
            </div>
        </div>
    </div>
  )
}
