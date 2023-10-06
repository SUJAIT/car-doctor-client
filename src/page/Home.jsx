import React from 'react';
import About from './About';
import Banner from './Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <About/>
           <Services/>
        </div>
    );
};

export default Home;