import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthContext';

const SocialLogin = () => {
const {popup} = useContext(AuthContext);
const navigate =useNavigate()
// const location = useLocation()
// const from = location.state?.from?.pathname||'/';
    //handelGoogleLogin start
       const handelGoogleLogin = () =>{
          popup()
     .then(result=>{
        console.log(result.user)
          navigate('/')
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