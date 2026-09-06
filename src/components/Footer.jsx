import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="mt-16 bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 py-12">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Dragon News
                        </h2>

                        <p className="text-sm leading-6 text-gray-400">
                            Stay informed with the latest news, stories, and
                            updates from around the world.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-3 text-sm">
                            <Link
                                to="/"
                                className="hover:text-white transition"
                            >
                                Home
                            </Link>

                            <Link
                                to="/about"
                                className="hover:text-white transition"
                            >
                                About
                            </Link>

                            <Link
                                to="/career"
                                className="hover:text-white transition"
                            >
                                Career
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Categories
                        </h3>

                        <div className="flex flex-col gap-3 text-sm">
                            <Link
                                to="/category/01"
                                className="hover:text-white transition"
                            >
                                Breaking News
                            </Link>

                            <Link
                                to="/category/02"
                                className="hover:text-white transition"
                            >
                                National
                            </Link>

                            <Link
                                to="/category/03"
                                className="hover:text-white transition"
                            >
                                International
                            </Link>

                            <Link
                                to="/category/04"
                                className="hover:text-white transition"
                            >
                                Sports
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Stay Connected
                        </h3>

                        <p className="text-sm text-gray-400 leading-6 mb-4">
                            Follow Dragon News for the latest updates and
                            breaking stories.
                        </p>

                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition"
                            >
                                f
                            </a>

                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition"
                            >
                                X
                            </a>

                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition"
                            >
                                in
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-10 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
                        <p>
                            © {new Date().getFullYear()} Dragon News. All rights reserved.
                        </p>

                        <div className="flex gap-5">
                            <a href="#" className="hover:text-gray-300 transition">
                                Privacy Policy
                            </a>

                            <a href="#" className="hover:text-gray-300 transition">
                                Terms & Conditions
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

