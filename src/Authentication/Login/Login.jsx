import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthContext';
import SocialLogin from '../../Shared/SocialLogin';
import img from '../img/login.svg';
const Login = () => {
const {login} = useContext(AuthContext)
//router Location Start
const navigate = useNavigate();
const location = useLocation()
const from = location.state?.from?.pathname||'/';
//router Location end


  // formLoginHandler start
  const formLoginHandler = event =>{
    event.preventDefault();
     const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      const user = {email,password}
      console.log(user)
      form.reset();
        //Firbase working start
           login(email,password)
             .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const logedIn = {
            email:user.email
    }
    console.log(logedIn)
//Bkend To Server token Conected and Token Date Send Start
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
////Bkend To Server token Conected and Token Date Send End
      event.target.reset()
    // ...
    navigate(from,{replace:true})
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
  });
         //Firbase working End
  }
  // formLoginHandler End
    
    return (
       <div className="hero min-h-screen bg-base-100">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-1/2 mr-12">
     <img src={img}/>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <h1 className='text-3xl text-center font-bold'>Login</h1>

<form onSubmit={formLoginHandler}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" name='password' className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
     
       <input className="btn btn-error" type="submit" value="Login"/>
      <div className='text-center p-2'>
         <p>Don't have an account?<Link className='text-orange-500' to="/register">Register</Link></p>
      </div>
      <div className='text-center'>
         <SocialLogin></SocialLogin>
      </div>
    
        </div>
</form>

      </div>
    </div>
  </div>
</div>
    );
};

export default Login;