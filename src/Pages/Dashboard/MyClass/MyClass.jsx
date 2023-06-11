import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/Authpovider';

const MyClass = () => {
    const { user } = useContext(AuthContext)

    const [classes, setClasses] = useState([])

    const url = `http://localhost:5000/dashboard/myclass`

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
            <h2 className="uppercase">my class</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Available Seats </th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                classes.map((sinclass,index) =>  
                    <tr id={sinclass._id}>
                        <th>{index+1}</th>
                        <th>
                        <img className='w-16 rounded-full h-16' src={sinclass.photo} alt="Avatar Tailwind CSS Component" />
                        </th>
                        <td>{sinclass.instructorsName} </td>
                        <th>{sinclass.seat} </th>
                        <th>
                            <button className="btn btn-primary btn-sm">details</button>
                        </th>
                    </tr>
                )
            }
             </tbody>
                </table>
            </div>
          
        </div>
    );
};

export default MyClass;