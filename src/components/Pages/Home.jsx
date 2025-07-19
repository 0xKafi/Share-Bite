import React from 'react';
import Feature from '../Sections/Feature';
import Faq from '../Sections/FAQ';
import Work from '../Sections/Work';
import * as motion from "motion/react-client"

const Home = () => {
    return (
        <div className='w-7/8 mx-auto container mt-5'>
            <div className='flex flex-col lg:flex-row lg:justify-between items-center pt-10'>
                <motion.div
                            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}>
                    <h1 className='font-bold text-6xl mb-2 lg:leading-17'>Food Tastes Better<br /> <span className='text-orange-500'>When Shared.</span></h1>
                    <p>Invite friends, split meals, and share your favorite bites — all in one place.</p>
                </motion.div>
                <div>
                    <img className='w-180 mt-10 lg:mt-0' src="https://i.ibb.co/Zz2Qwv43/image.png" alt="" />
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