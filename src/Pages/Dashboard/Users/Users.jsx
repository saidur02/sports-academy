import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([])
    
    // const [axiosSecure] = useAxiosSecure()
    // const { data: users = [], refetch } = useQuery(['users'], async () => {
    //     const res = await axiosSecure.get('/users')
    //     return res.json();
    // })
    const url = `https://youngstar-sports-server.vercel.app/users`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                console.log(data,'22')
            })
            
    }, [])

    const handleAdmin = user =>{
        fetch(`https://youngstar-sports-server.vercel.app/users/admin/${user._id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top,middle',
                    icon: 'success',
                    title: 'Admin Success',
                    showConfirmButton: false,
                    timer: 1000
                })
            }
        })
    }
    const handleInstructors = user =>{
        fetch(`https://youngstar-sports-server.vercel.app/users/instructors/${user._id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top,middle',
                    icon: 'success',
                    title: 'Instructors Success',
                    showConfirmButton: false,
                    timer: 1000
                })
            }
        })
    }

    return (
        <div>   
            <div className="overflow-x-auto">
                <table className="table">
                   
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Make Instructors</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                       users && users.map((user,index) =><tr key={user._id}>
                            <td>{index+1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role === 'admin'? 'Admin':<button onClick={() =>handleAdmin(user)} className="btn btn-success">Admin</button>}</td>
                            <td>{user.role === 'instructors'? 'Instructor':<button onClick={() =>handleInstructors(user)} className="btn btn-success">Instructor</button>}</td>
                           
                        </tr>
                        )
                       }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;