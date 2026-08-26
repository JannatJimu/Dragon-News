import React from 'react';
import { NavLink ,Link} from 'react-router';
import user from '../assets/user.png';
const Navbar = () => {
    return (
        <div className='flex justify-between items-center '>
            <div className=''></div>
          <div className="nav flex gap-5 text-gray-600 font-medium"> 
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>
            </div>  
            <div className="login-btn flex gap-2 items-center">
                <img src={user} alt="" srcset="" />
                <Link to='/auth/login' className='btn btn-primary'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;