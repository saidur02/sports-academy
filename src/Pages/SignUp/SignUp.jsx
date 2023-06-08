import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/Authpovider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        createUser(data.email,data.password)
        .then(result =>{
                    const loggedUser = result.user;
                    Swal.fire({
                        position: 'middle',
                        icon: 'success',
                        title: 'SignUp Success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
       
    };
   

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-2xl text-center'>Please SignUp</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"{...register("name", { required: true })} name='name' placeholder="Your Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text"{...register("email", { required: true })} name='email' placeholder="Your Email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"{...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                })} name='password' placeholder="Your Password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className='text-red-600'>Password is required</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-600'>Password Must Have One Uppercase and One One Special Characters required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-600'>Password Must 6 Characters</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password"{...register("confirm", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                })} name='confirm' placeholder="Confirm Password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className='text-red-600'>Password is required</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-600'>Password Must Have One Uppercase and One One Special Characters required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-600'>Password Must 6 Characters</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text"{...register("photo", { required: true })} name='photo' placeholder="Your Photo Url" className="input input-bordered" />
                                {errors.photo && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className='mt-3'>Already Have An Account ?<Link to='/login'> <span className='text-blue-700'>Please Login</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;