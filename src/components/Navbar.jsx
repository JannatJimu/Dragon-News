
import React, { use } from 'react';
import { NavLink, Link } from 'react-router';
import userIcon from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);

    const handleLogOut = () => {
        console.log("user trying to logout");

        logOut()
            .then(() => {
                alert("you logout successfully");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="w-full bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4">

                <div className="flex justify-between items-center gap-6">

               
                    <div className="flex-1 min-w-0">
                        {user && (
                            <div className="flex items-center gap-3">

                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={user.photoURL || userIcon}
                                        alt="User"
                                    />
                                </div>

                                <div className="hidden sm:block">
                                    <p className="text-xs text-gray-400">
                                        Welcome back
                                    </p>

                                    <p className="text-sm font-semibold text-gray-700 truncate max-w-45">
                                        {user.email}
                                    </p>
                                </div>

                            </div>
                        )}
                    </div>

                   
                    <div className="flex items-center gap-6 text-sm font-medium ">

                        <NavLink to="/">Home</NavLink>

                        <NavLink to="/about">About</NavLink>

                        <NavLink to="/career">Career</NavLink>

                    </div>

                    {/* Login / Logout */}
                    <div className="flex-1 flex justify-end items-center gap-3">

                        <img
                            className="w-10 h-10 rounded-full object-cover border-2 border-gray-100"
                            src={user ? user.photoURL : userIcon}
                            alt=""
                        />

                        {
                            user
                                ? <button
                                    onClick={handleLogOut}
                                    className="btn btn-primary px-5 rounded-lg font-medium"
                                >
                                    LogOut
                                </button>
                                : <Link
                                    to="/auth/login"
                                    className="btn btn-primary px-5 rounded-lg font-medium"
                                >
                                    Login
                                </Link>
                        }

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Navbar;

