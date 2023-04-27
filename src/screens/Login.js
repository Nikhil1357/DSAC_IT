import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext';
import GoogleButton from 'react-google-button';
import { auth } from '../firebase';
import { addToNewUser } from '../Calls/Services';

export default function Login() {
  
    // const [error, seterror] = useState('');
    const userref = useRef();
    const passref = useRef();

    const {login} = useAuth();
    const {googlesignin} = useAuth();

    const google_sign_in_function = async()=>{
        try
        {
            const res = await googlesignin();
            addToNewUser(auth.currentUser.displayName, auth.currentUser.email);
        }
        catch(err)
        {
            console.log(err);
        }
    }

    const [error, seterror] = useState('');
    async function handle(){
        try{
        seterror("");
        const response = await login(userref.current.value, passref.current.value);
        console.log(response);
    }
        catch(err)
        {
            seterror("error");
            console.log(err);
        }
    }

    return (
    <div>
        <GoogleButton onClick={google_sign_in_function} ></GoogleButton>
        <p>{error}</p>
    </div>
  )
}
