import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
           
        </div>
    );
};

export default Home;