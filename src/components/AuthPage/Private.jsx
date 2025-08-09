import React, { useContext } from 'react';
import AuthContext from '../Auth/AuthContext';
import { Navigate, useLocation } from 'react-router';

const Private = ({children}) => {
    const location = useLocation()
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return;
    }

    if(user){
        return children;
    }
    else{
        return <Navigate state={location?.pathname} to='/login'></Navigate>
    }

};
export default Private;