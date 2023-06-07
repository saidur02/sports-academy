import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navOptions = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/instructors'>Instructors</Link></li>
    <li><Link to='/classes'>Classes</Link></li>
  </>
  return (
    <div className="navbar bg-slate-500 text-white max-w-7xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navOptions}
          </ul>
        </div>

       <Link to='/'>
       <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
       </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end ">
     <ul className="menu menu-horizontal px-1">
     <li><Link to='/dashboard '>Dashboard </Link></li>
    <li><Link to='/login'>Login</Link></li>
     </ul>
     <div className="avatar">
  <div className="w-10 rounded-full ring ring-slate-700 ">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
      </div>
    </div>
  );
};

export default Navbar;