import React, { use } from 'react';
import { NavLink ,Link} from 'react-router';
import userIcon from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';
const Navbar = () => {
    const {user,logOut}=use(AuthContext);
    const handleLogOut=()=>{
console.log("user trying to logout");
logOut().then(() => {
  alert("you logout successfully ")
}).catch((error) => {
console.log(error);
});
    };
    return (
        <div className='flex justify-between items-center '>
            <div className=''>{user && user.email}</div>
          <div className="nav flex gap-5 text-gray-600 font-medium"> 
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>
            </div>  
            <div className="login-btn flex gap-2 items-center">
                <img src={userIcon} alt="" srcset="" />
                {
                    user? <button onClick={handleLogOut} className='btn btn-primary'>LogOut</button>:<Link to='/auth/login' className='btn btn-primary'>Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;