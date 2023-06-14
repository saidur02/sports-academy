import React, { useEffect, useState } from 'react';

const PopularClass = () => {
    const [popular, setPopular] = useState([])

    const url = `https://youngstar-sports-server.vercel.app/popularclass`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPopular(data)
            })
            
    }, [])
    return (
        <div>
            <h2 className='text-3xl text-center font-bold mb-10'>Popular Class </h2>
            <div>
            <h2 className="uppercase">my class</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructors Name</th>
                            <th>Available Seats </th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                popular.map((sinclass,index) =>  
                    <tr id={sinclass._id}>
                        <th>{index+1}</th>
                        <th>
                        <img className='w-16 rounded-full h-16' src={sinclass.photo} alt="Avatar Tailwind CSS Component" />
                        </th>
                        <td>{sinclass.className} </td>
                        <td>{sinclass.instructorsName} </td>
                        <th>{sinclass.seat} </th>
                        <th>
                            <button className="btn btn-primary btn-sm">Enroll</button>
                        </th>
                    </tr>
                )
            }
             </tbody>
                </table>
            </div>
          
        </div>
        </div>
    );
};

export default PopularClass;