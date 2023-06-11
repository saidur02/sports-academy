import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const Users = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.json();
    })

    const handleAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
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
        fetch(`http://localhost:5000/users/instructors/${user._id}`,{
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
                        users.map((user,index) =><tr key={user._id}>
                            <td>{index+1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role === 'admin'? 'Admin':<button onClick={() =>handleAdmin(user)} className="btn btn-success">Admin</button>}</td>
                            <td>{user.role === 'instructors'? 'Instructor':<button onClick={() =>handleInstructors(user)} className="btn btn-success">Instructor</button>}</td>
                           
                        </tr>)
                       }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;