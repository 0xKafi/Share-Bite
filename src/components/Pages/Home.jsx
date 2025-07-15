import React from 'react';

const Home = () => {
    return (
        <div className='w-7/8 mx-auto container mt-5'>
            <div className='flex lg:justify-between items-center pt-10'>
                <div>
                    <h1 className='font-bold text-6xl mb-2 leading-17'>Food Tastes Better<br /> <span className='text-orange-500'>When Shared.</span></h1>
                    <p>Invite friends, split meals, and share your favorite bites — all in one place.</p>

                </div>
                <div>
                    <img className='w-180' src="https://i.ibb.co/Zz2Qwv43/image.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;