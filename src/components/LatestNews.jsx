import React from 'react';
import MarqueePackage from 'react-fast-marquee';

const Marquee = MarqueePackage.default;

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='btn bg-secondary text-base-100 px-3 py-2'>
                Latest
            </p>

            <Marquee className='flex gap-5' pauseOnHover={true} speed={60}>
                <p className='font-bold'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className='font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, sed.</p>
                <p className='font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore possimus reprehenderit tempora ipsam harum odio.</p>
            </Marquee>

        </div>
    );
};

export default LatestNews;