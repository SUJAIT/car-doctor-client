import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../AuthContext/AuthContext';
import img from '../img/login.svg';
const Register = () => {
    const {createUser} = useContext(AuthContext)

    //user userCreateHndler working start
    const userCreateHndler = event =>{
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const user = {email,password,name}
      console.log(user)
         //  firbase working start
             createUser(email,password)
          .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user)
    form.reset()
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
    // ..
  });
        //  firbase working End
 
    }
    //user userCreateHndler working End
    
    return (
       <div className="hero min-h-screen bg-base-100">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-1/2 mr-12">
     <img src={img}/>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <h1 className='text-3xl text-center font-bold'>Sign In</h1>

<form onSubmit={userCreateHndler}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="type your name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
      
       <input className="btn btn-error" type="submit" value="Register"/>
        <div className='text-center p-2'>
            <p>Already have an account?<Link className='text-orange-500' to="/login">Login</Link></p>
        </div>
        
        </div>
</form>

      </div>
    </div>
  </div>
</div>
    );
};

export default Register;