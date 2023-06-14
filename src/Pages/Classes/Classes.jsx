import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/Authpovider';

const Classes = () => {
    const {user} = useContext(AuthContext)

    const [classes, setClasses] = useState([])

    const url = `http://localhost:5000/myClass`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setClasses(data)
            })
            
    }, [])

    return (
        <div>
            <h2>Classes Page</h2>
           <div className='grid md:grid-cols-3 gap-6'>
           {
            classes.map(singleClass =>
            <div id={singleClass._id} className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img  src={singleClass.photo} alt="Shoes" className="rounded-xl " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{singleClass.className}</h2>
                    <p>{singleClass.instructorsName}</p>
                    {user?<div className="card-actions">
                        <button className="btn btn-primary">Enroll Now</button>
                    </div>:<h2>Please Login First</h2>}
                </div>
            </div>
            )
            }
           </div>
            
        </div>
    );
};

export default Classes;