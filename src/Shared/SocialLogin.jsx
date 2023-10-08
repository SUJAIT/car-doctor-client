import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../AuthContext/AuthContext';

const SocialLogin = () => {
const {popup} = useContext(AuthContext);

    //handelGoogleLogin start
       const handelGoogleLogin = () =>{
          popup()
     .then(result=>{
        console.log(result.user)
     })
     .catch(console.error(error))
       }
    //handelGoogleLogin End

    return (
        <div>
            <div className='divider'>or</div>
            <button className="btn btn-circle btn-outline">
  <FcGoogle onClick={handelGoogleLogin}/>
</button>
        </div>
    );
};

export default SocialLogin;