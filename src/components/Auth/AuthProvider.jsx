import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../../lib/firebase.config';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () =>{
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    const signOutUser = () =>{
        return signOut(auth);
    }

    const updateUserProfile = (obj) =>{
        return updateProfile(auth.currentUser, obj)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=>{
            unsubscribe()
        }
    }, [])

    const obj = {
        user,
        setUser,
        createUser,
        loginUser,
        googleSignIn,
        signOutUser,
        updateUserProfile,
        loading,
        setLoading
    }

    return (
        <AuthContext.Provider value={obj}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;