import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
   
   
    return (
        <div className=' align-middle text-center h-96'>
            <h2 className='text-5xl mt-48 '>404</h2>
            <h3 className='text-4xl '>Page Not Found</h3>
            <button className='bg-green-400 p-4 rounded-lg mt-4'><Link to="/">Home Page</Link></button>           
            
        </div>
    );
};

export default NotFoundPage;