import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';


const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <section className='w-11/12 mx-auto my-2'>
                <LatestNews></LatestNews>
            </section>
            <nav className='w-11/12 mx-auto my-2'>
                <Navbar></Navbar>
            </nav>
            <main>
                <section className="left-nav"></section>
                <section className="main">
                      <Outlet></Outlet>
                </section>
                <section className="right-nav"></section>
                
            </main>
        </div>
    );
};

export default HomeLayout;