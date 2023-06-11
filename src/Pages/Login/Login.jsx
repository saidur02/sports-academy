import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/Authpovider';
import Swal from 'sweetalert2';
import GoogleLogin from '../Shared/GoogleLogin/GoogleLogin';

const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const from = location ?.state ?.from ?.pathname || '/';
    const { signIn } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)
            .then(result => {
                const user = result.user;
                 Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'Login Success',
                    showConfirmButton: false,
                    timer: 1000
                })
                navigate(from,{replace:true})
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-2xl text-center'>Please Login</h2>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='mt-3'>New To YoungStar?<Link to='/signup'> <span className='text-blue-700'>Please Sign Up</span></Link></p>
                            <GoogleLogin></GoogleLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;