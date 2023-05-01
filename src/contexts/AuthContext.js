import React, { Children, createContext, useContext, useState, useEffect } from 'react'
import { auth} from '../firebase';
import { db } from '../firebase';
import { 
    GoogleAuthProvider, 
    signInWithPopup,
    signInWithRedirect,
    signout,
    onAuthStateChanged,
    
} from "firebase/auth";
import app from '../firebase';
import { doc, setDoc } from "firebase/firestore"; 



// Add a new document in collection "cities"


const AuthContext = createContext();

export function useAuth()
{
    return useContext(AuthContext);
}

export default function AuthProvider({children}) {
  
    
    
 
    const [loading, setloading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    async function googlesignin (){

        try{
        
        const provider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth,provider);
        // const user = res.user;
        // const q = query(collection(db,"users"),where("uid","==",user.uid));
        // const docs = await getDocs(q);
        // if(docs.docs.length ===0)
        // {
        //     await addDoc(collection(db, "users"), {
        //         uid: user.uid,
        //         name: user.displayName,
        //         authProvider: "google",
        //         email: user.email,
        //         title:'DSAC_IT',
        //       });
        // }
        // Add a new document in collection "cities"
        }
        catch(err)
        {
            alert("error"+err.message);
            console.log(err.message);
        }

    }

    //backend
    // const createToken = async () => {
    //     const user = currentUser;
    //     const token = user && (await user.getIdToken());
      
    //     const payloadHeader = {
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: `Bearer ${token}`,
    //       },
    //     };
    //     return payloadHeader;
    //   }

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }

    function signout(){
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user=>{
            setloading(false);
            setCurrentUser(user);
        })

        return unsubscribe
    }, [])
    
    const value = {
        currentUser,
        signup,
        login,
        signout,
        // createToken,
        googlesignin,
    }
    return (
    <AuthContext.Provider value={value}>
        {!loading?children:<>Loading...</>}
    </AuthContext.Provider>
  )
}
