import React, { useEffect, useRef, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services,setServices] = useState([]);
    const [asc,setAsc] = useState(true);
    const searchRef = useRef(null);
    const [search,setSearch] = useState('');


    useEffect(() => {
        //akna fatch ar bitor asc & desc k queary parametar dara bakend a patssi.akna sort ta paisi server site a akta object hisa ba nisi sakan teka..
        //Multiple Queary pata ta hola & dita hoi.Akna Search ar value ta patis..
        fetch(`http://localhost:5000/services?search=${search}&sort=${asc ? 'asc' : 'desc'}`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[asc,search])
    //queary pramiter a ja value gula data patasii ta depandanci [asc,search] ta bosia dita hoba..

    const handleSearch = event =>{
        console.log(searchRef.current.value)
        setSearch(searchRef.current.value)
    }


    return (
        <div className='mt-4'>
           <div className='text-center'>
            <h4 className='text-2xl font-bold text-orange-600'>Services</h4>
            <h2 className='text-5xl font-bold'>Our Service Area</h2>
            <p>The majority have suffered alteration in some form, by injected humour, or randomised <br />words which don't look even slightly believable. </p>
        
        {/* search start*/}
        <div className="form-control">
  <div className="input-group">
    <input type="text" placeholder="Search…" ref={searchRef} className="input input-bordered" />
    <button onClick={handleSearch} className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
        {/* search End*/}

           <button className='btn btn-primary my-3' onClick={()=>setAsc(!asc)}>{asc ? "Price : Low To High" : 'Price : High to Low'}</button>
            </div>

       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6'>
        {
            services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
        }
       </div>
        </div>
    );
};

export default Services;