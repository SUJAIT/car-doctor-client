import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../Auth/Auth';

//CreateContext Start
export const AuthContext = createContext(null)
//CreateContext End
const auth = getAuth(app);
const CreateContext = ({children}) => {
const [user,setUser]= useState(null);
const [loading,setLoading] = useState(true);
const provider = new GoogleAuthProvider();

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

//Google Popup start
const popup = () =>{
  return signInWithPopup(auth, provider)
}
//Google Popup End

//user Check Start
//{observer} user auth state,,User Asa Kina ta chack korba...
useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth,currentUser =>{
    setUser(currentUser);
    setLoading(false);
     //Bkend To Server JWT token Conected and Token Date Send Start
    if(currentUser && currentUser.email){
          const logedIn = {
            email:currentUser.email
    }
fetch('http://localhost:5000/jwt',{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(logedIn)
})
.then(res => res.json())
.then(data =>{
  console.log(data);
  // Local Storage token Save..But is Not Best Way Browser Cookies Token Save is Best
  localStorage.setItem('car-token', data.token)
})

    }
    else{
        localStorage.removeItem('car-token');
    }
    //Bkend To Server token Conected and Token Date Send End
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
       logOut,
       popup
    }

    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
            
    
    );
};

export default CreateContext;