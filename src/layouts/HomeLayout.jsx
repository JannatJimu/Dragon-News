import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';

import RightAside from '../components/HomeLayout/RightAside';
import LeftAside from '../components/HomeLayout/LeftAside';


const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <section className='w-11/12 mx-auto my-2'>
                <LatestNews></LatestNews>
            </section>
            <nav className='w-11/12 mx-auto my-2 '>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto my-2  grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                <LeftAside></LeftAside>
                </aside>
                <section className="col-span-6">
                      <Outlet></Outlet>
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                   <RightAside></RightAside>
                </aside>
                
            </main>
        </div>
    );
};

export default HomeLayout;