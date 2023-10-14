import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { AuthContext } from '../../AuthContext/AuthContext';
import BookingD from './BookingD';



const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings,setBookings] = useState([]);
    const componentPdf=useRef();
    const navigate = useNavigate()
    
    // Booking data piked start
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(()=>{
        fetch(url,{
          method:'GET',
          headers:{
            authorization:`Bearer ${ localStorage.getItem('car-token')}`
          }
        })
        .then(res => res.json())
        .then(data =>
          {
            if(!data.error){
              setBookings(data)
            }else{
              navigate('/')
            }
          })
    },[url,navigate])

    // Booking data piked End

 //delete work start
   const handleDelete = id =>{
    const proceed = confirm('Are You Sure you want to delete');
    console.log(id)
    if(proceed){
       fetch(`http://localhost:5000/bookings/${id}`,{
          method:'DELETE'
       })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount>0){
            alert('deleted Successful');
            //Data Delete Hola sata Sata Data remove Hoba Ai function tr working ar jonno
            // function ta ja kora hoisa : fist Booking ar bitor ar sokol data filter kora nia sai sob ar _id !== id ar soman na tarpor data ta ka pass kora diba..
            const remaining = bookings.filter(booking => booking._id !==id);
            setBookings(remaining);
        }
      })
    }
   }
   //delete work end

//update data start
const handleBookingConfirm = id =>{
  fetch(`http://localhost:5000/bookings/${id}`,{
    method:'PATCH',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify({status:'confirm'})
  })
  .then(res=> res.json())
  .then(data =>{
    console.log(data);
    if(data.modifiedCount>0){
      //updte Status
      const remaining = bookings.filter(booking =>booking._id !== id);
      const updated = bookings.find(booking => booking._id === id);
      updated.status = 'confirm'
      const newBookings = [updated, ...remaining];
      setBookings(newBookings)
    }
  })
}
//update data End


// pdf
const genaratedPdf = useReactToPrint({
 content:()=>componentPdf.current,
 documentTitle:"Userdata",
 onAfterPrint:()=>alert("Data save in PDF")
});
//pdf end

    return (
        <div>
          {/* pdf raf start */}
          <div ref={componentPdf} style={{width:'100%'}}>
             <div className="overflow-x-auto w-full ">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
         <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
      <th>Image</th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
{
    bookings.map(booking => <BookingD key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}></BookingD>)
}
    </tbody>

  </table>
</div>     
          </div>
          {/* pdf raf end */}
   {/* pdf Button start */}
<button onClick={genaratedPdf} className='btn btn-error'>PDF</button>
{/* pdf button end */}
        </div>
    );
};

export default Bookings;