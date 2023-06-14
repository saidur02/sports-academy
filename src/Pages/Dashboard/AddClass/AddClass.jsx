import { useContext } from "react";
import { AuthContext } from "../../../Providers/Authpovider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const AddClass = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext);
    const handleSubmit = event =>{
        event.preventDefault();

        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const className = form.className.value;
        const seat = form.seats.value;
        const price = form.price.value;
       const addClass = {
        instructorsName: name,
        photo,
        className,
        price,seat,
        instructors :{ email:user?.email}
       }
       fetch('https://youngstar-sports-server.vercel.app/addclass',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(addClass)
       })
       .then(res =>res.json())
       .then(data => {
        if (data.insertedId){
            Swal.fire({
                position: 'top-middle',
                icon: 'success',
                title: 'Add Class successfully.',
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/classes');
        }
       })
    }

    return (
        <>
            <h2 className='text-center text-3xl font-semibold'>Add a Class</h2>
            <form onSubmit={handleSubmit}>
                <div className="card-body">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Image</span>
                            </label>
                            <input type="text" name='photo' placeholder="Class Image" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class name</span>
                            </label>
                            <input type="text" name='className' placeholder="Class name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <input type="text" name='name'  placeholder='Instructor Name' className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor email</span>
                            </label>
                            <input type="text" name='email' value={user?.email} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available seats</span>
                            </label>
                            <input type="text" name='seats' placeholder='' className="input input-bordered" />

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' placeholder="Price" className="input input-bordered" />
                        </div>

                    </div>
                    <div className="form-control mt-6">

                        <input className="btn btn-primary btn-block" type="submit" value="Add" />
                    </div>
                </div>
            </form>
        </>
    );
};

export default AddClass;