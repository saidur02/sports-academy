import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/Authpovider';

const Instructor = () => {
    const {user} = useContext(AuthContext)
    const [users, setUser] = useState([])
    console.log(users)
    const url = `http://localhost:5000/users/instructors/${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {  
                setUser(data)
                console.log(data)
            })
    }, [])

    return (
        <div>
            
                 <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>$</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                
                            </tr>
                        </thead>
                        {
                            users.map(instructor =><h2>{instructor.email}</h2>)
                        }
                        


                    </table>
                </div>
                
        </div>
    );
};

export default Instructor;
{/* <tbody id={instructor._id}>
                           
                           <tr>
                               <td>
                                   <div className="flex items-center space-x-3">
                                       <div className="avatar">
                                           <div className="mask mask-squircle w-12 h-12">
                                               <img src='' alt="Avatar Tailwind CSS Component" />
                                           </div>
                                       </div>
                                   </div>
                               </td>
                               <td>{instructor.name} </td>
                               <td>{Instructor.email}</td>
                           </tr>

                       </tbody> */}