import Img2 from '../img/assets/images/about_us/parts.jpg';
import Img1 from '../img/assets/images/about_us/person.jpg';

const About = () => {
    return (
       <div className="hero min-h-screen bg-base-100">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2 relative'>
       <img src={Img1} className='w-3/4 rounded-lg shadow-2xl'/>
       <img src={Img2} className='w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl border-8 border-white'/>
    </div>
   
    <div className='lg:w-1/2 space-y-5'>
      <h3 className="text-5xl text-orange-500 font-bold">About Us</h3>
      <h1 className='text-5xl font-bold'>We are qualified & of experience in this field</h1>
      <p className="py-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <p className="py-2">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
      <button className="btn btn-error">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;