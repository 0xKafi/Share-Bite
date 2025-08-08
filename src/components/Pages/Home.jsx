import React from 'react';
import Feature from '../Sections/Feature';
import Faq from '../Sections/FAQ';
import Work from '../Sections/Work';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='flex flex-col lg:flex-row lg:justify-between items-center my-16'>
                <div>
                    <h1 className='font-bold text-6xl mb-2 lg:leading-17'>Food Tastes Better<br /> <span className='text-orange-500'>When Shared.</span></h1>
                    <p>Invite friends, split meals, and share your favorite bites — all in one place.</p>
                </div>
                <div>
                    <img className='w-170 mt-10 lg:mt-0' src="https://i.ibb.co/Zz2Qwv43/image.png" alt="" />
                </div>
            </div>
            
            {/* featured section */}
            <Feature></Feature>
            {/* how it work */}
            <Work></Work>
            {/* faq */}
            <Faq></Faq>
        </div>
    );
};

export default Home;