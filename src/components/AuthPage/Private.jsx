import React, { useContext } from 'react';
import AuthContext from '../Auth/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Lottie from 'lottie-react';
import animation from '../../assets/loading.json'

const Private = ({children}) => {
    const location = useLocation()
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <div className='h-screen mt-2 grid place-items-center'>
             <Lottie animationData={animation} className="max-w-lg w-full" />
        </div>
    }

    if(user){
        return children;
    }
    else{
        return <Navigate state={location?.pathname} to='/login'></Navigate>
    }

};
export default Private;