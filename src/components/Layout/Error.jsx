import Lottie from 'lottie-react';
import React from 'react';
import animation from '../../assets/404.json' 
import {Button} from "@/components/ui/button"
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='container w-full flex items-center flex-col mt-30'>
             <Lottie animationData={animation} className="max-w-lg w-full" />
             <Link to='/'>
             <Button className='mt-5'>Go Home</Button>
             </Link>
        </div>
    );
};

export default Error;