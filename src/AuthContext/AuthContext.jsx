import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../Auth/Auth';

//CreateContext Start
export const AuthContext = createContext(null)
//CreateContext End
const auth = getAuth(app);
const CreateContext = ({children}) => {
const [user,setUser]= useState(null);
const [loading,setLoading] = useState(true);

// Create User Start
  const createUser = (email,password) =>{
    setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }

// Create User End 

//login start
const login = (email,password) =>{
     setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}
//login End

//logOut
const logOut = () =>{
  setLoading(true)
    return signOut(auth)
}

//logOut

//user Check Start
//{observer} user auth state,,User Asa Kina ta chack korba...
useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth,currentUser =>{
    setUser(currentUser);
    setLoading(false)
  });
  return () =>{
    return unsubscribe();//function ta barbar observe korta taka sata stop korar jonno ata k akta variable ar modda nia return kora dia hoi,,,
  }
},[])


//user Check End


    const authInfo = {
       user,
       loading,
       createUser,
       login,
       logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
            
    
    );
};

export default CreateContext;