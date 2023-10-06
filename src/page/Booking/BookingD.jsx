import React from 'react';

const BookingD = ({booking,handleDelete,handleBookingConfirm}) => {
    const{_id,img,date,price,name,email,status}=booking
  
    return (
        <div>
              <tr>
        <th>
          <label>
            <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-5" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-10 ">
          <div className="avatar">
  <div className="w-24 rounded">
   {img && <img src={img}/>}
  </div>
</div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{email}</div>
            </div>
          </div>
        </td>
        <td>
         {date}
          {/* <br/> */}
          {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
        </td>
        <td>{price}</td>
        <th>
         { status === 'confirm' ? <span className='font-bold text-primary'>Confirmed</span>: 
         <button onClick={() =>handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Confirmed</button>}
        </th>
      </tr>
        </div>
    );
};

export default BookingD;