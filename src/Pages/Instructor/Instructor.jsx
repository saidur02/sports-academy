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
                        {/* {
                            users.map(instructor =><h2>{instructor.email}</h2>)
                        }
                         */}


                    </table>
                </div>
                
        </div>
    );
};

export default Instructor;