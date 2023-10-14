import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthContext/AuthContext';

const CheckOut = () => {
    const service = useLoaderData();
    const {title,_id,price,service_id,img} = service;
    const {user} = useContext(AuthContext)
const navigate= useNavigate()
    const formHandler = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email= user?.email;
        const booking = {
name ,
date ,
email,
service_id:_id,
price:price,
img
        }
        console.log(booking)
//DB Data Insert (Booking)
fetch('http://localhost:5000/bookings',{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(booking)
})
.then(res => res.json())
.then(data=>{
  if(data){
Swal.fire({
  position: 'top-center',
  icon: 'success',
  title: 'Your Order Success',
  showConfirmButton: false,
  timer: 1500
})
navigate('/')
  }
})




    }

    return (

       <form onSubmit={formHandler}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name'placeholder='Type your Name' defaultValue={user?.displayName} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" defaultValue={price} readOnly className="input input-bordered" />
      
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" defaultValue={user?.email} placeholder='Email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Date</span>
          </label>
          <input type="date" name='date' placeholder="Service Type" className="input input-bordered" />
      
        </div>
     
        </div>
        {/* <div className='my-5'>
            <textarea placeholder="Product Description" className="textarea textarea-bordered textarea-lg w-full max-w-x" ></textarea>
        </div> */}
        <div>
               <div className="form-control mt-6">
         
          <input className="btn btn-error btn-block my-5" type='submit' value="Order Confirm"></input>
        </div> 
        </div>
      
       </form>


    );
};

export default CheckOut;